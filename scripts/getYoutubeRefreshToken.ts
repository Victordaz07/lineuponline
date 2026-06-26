#!/usr/bin/env node
/**
 * Obtiene, una sola vez, el refresh_token de OAuth necesario para que
 * `publishToYouTube` (Cloud Function) pueda subir videos al canal de
 * Seeker Gospel Music sin pedir login interactivo cada vez.
 *
 * Uso:
 *   YOUTUBE_CLIENT_ID=... YOUTUBE_CLIENT_SECRET=... npx tsx scripts/getYoutubeRefreshToken.ts
 *
 * Flujo:
 *   1. Abre (o copia) la URL impresa en el navegador donde tengas la sesión
 *      de la cuenta de Google que administra el canal de YouTube.
 *   2. Otorga el permiso "Administrar tus videos de YouTube".
 *   3. Google redirige a http://localhost:<puerto>/?code=... — este script
 *      levanta un server local temporal para capturar ese código.
 *   4. El script intercambia el código por tokens y muestra el refresh_token
 *      en la terminal. Cópialo y guárdalo en Secret Manager (ver comandos
 *      que imprime el script). Nunca lo subas a git.
 */
import { createServer } from 'node:http'

const PORT = 53682
const REDIRECT_URI = `http://localhost:${PORT}`
const SCOPE = 'https://www.googleapis.com/auth/youtube.upload'

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}. Ver instrucciones en el encabezado de este script.`)
  }
  return value
}

async function main(): Promise<void> {
  const clientId = requireEnv('YOUTUBE_CLIENT_ID')
  const clientSecret = requireEnv('YOUTUBE_CLIENT_SECRET')

  const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  authUrl.searchParams.set('client_id', clientId)
  authUrl.searchParams.set('redirect_uri', REDIRECT_URI)
  authUrl.searchParams.set('response_type', 'code')
  authUrl.searchParams.set('scope', SCOPE)
  authUrl.searchParams.set('access_type', 'offline')
  authUrl.searchParams.set('prompt', 'consent')

  console.log('\n1) Abre esta URL en el navegador con la cuenta de Google del canal de YouTube:\n')
  console.log(authUrl.toString())
  console.log('\n2) Esperando el redirect a http://localhost... (Ctrl+C para cancelar)\n')

  const code = await new Promise<string>((resolvePromise, rejectPromise) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url ?? '/', REDIRECT_URI)
      const error = url.searchParams.get('error')
      const authCode = url.searchParams.get('code')

      if (error) {
        res.end('Error de autorización, revisa la terminal.')
        server.close()
        rejectPromise(new Error(`Google devolvió un error: ${error}`))
        return
      }
      if (authCode) {
        res.end('Autorización recibida. Puedes cerrar esta pestaña y volver a la terminal.')
        server.close()
        resolvePromise(authCode)
        return
      }
      res.end('Esperando código de autorización...')
    })
    server.listen(PORT)
  })

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
  })

  const tokenJson = (await tokenRes.json()) as { refresh_token?: string; error?: string; error_description?: string }
  if (!tokenRes.ok || !tokenJson.refresh_token) {
    throw new Error(
      `No se obtuvo refresh_token: ${tokenJson.error ?? tokenRes.status} ${tokenJson.error_description ?? ''}`,
    )
  }

  console.log('\n✓ refresh_token obtenido. Guárdalo ahora en Secret Manager (no lo dejes solo en la terminal):\n')
  console.log('  firebase functions:secrets:set YOUTUBE_REFRESH_TOKEN --project lineuponline-a7eda')
  console.log('  (pega el valor cuando te lo pida y presiona Enter)\n')
  console.log(`refresh_token: ${tokenJson.refresh_token}\n`)
}

main().catch((err) => {
  console.error('\nError:', err instanceof Error ? err.message : err)
  process.exit(1)
})
