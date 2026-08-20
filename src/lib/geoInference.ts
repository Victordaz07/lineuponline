/**
 * Inferencia aproximada de país sin usar la IP ni llamadas a servicios
 * externos: se apoya únicamente en señales que ya expone el navegador
 * (idioma, huso horario). Es una aproximación deliberada — no un dato
 * exacto — elegida para no manejar IPs ni depender de un servicio de
 * geolocalización de terceros.
 */

// Husos horarios IANA más comunes para la audiencia esperada
// (hispanohablante + EE. UU.) mapeados a su país. Lista curada, no
// exhaustiva — cualquier huso no listado cae en `null`.
const TIMEZONE_TO_COUNTRY: Record<string, string> = {
  'America/Mexico_City': 'MX',
  'America/Tijuana': 'MX',
  'America/Cancun': 'MX',
  'America/Monterrey': 'MX',
  'America/Bogota': 'CO',
  'America/Lima': 'PE',
  'America/Santiago': 'CL',
  'America/Argentina/Buenos_Aires': 'AR',
  'America/Caracas': 'VE',
  'America/Guayaquil': 'EC',
  'America/La_Paz': 'BO',
  'America/Asuncion': 'PY',
  'America/Montevideo': 'UY',
  'America/Guatemala': 'GT',
  'America/Tegucigalpa': 'HN',
  'America/El_Salvador': 'SV',
  'America/Managua': 'NI',
  'America/Costa_Rica': 'CR',
  'America/Panama': 'PA',
  'America/Santo_Domingo': 'DO',
  'America/Puerto_Rico': 'PR',
  'Europe/Madrid': 'ES',
  'Atlantic/Canary': 'ES',
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'America/Phoenix': 'US',
  'America/Anchorage': 'US',
  'Pacific/Honolulu': 'US',
  'America/Toronto': 'CA',
  'America/Vancouver': 'CA',
}

function regionFromLocale(locale: string): string | null {
  try {
    const region = new Intl.Locale(locale).maximize().region
    return region && region.length === 2 ? region.toUpperCase() : null
  } catch {
    return null
  }
}

export function inferCountryCode(): {
  countryCode: string | null
  localeRegion: string | null
  timeZone: string | null
} {
  let timeZone: string | null
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? null
  } catch {
    timeZone = null
  }

  const localeRegion =
    typeof navigator !== 'undefined' && navigator.language ? regionFromLocale(navigator.language) : null

  const countryCode = localeRegion ?? (timeZone ? TIMEZONE_TO_COUNTRY[timeZone] ?? null : null)

  return { countryCode, localeRegion, timeZone }
}
