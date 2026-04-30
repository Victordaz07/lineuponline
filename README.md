# LineUponLine

PWA de estudio profundo del evangelio construida con React + Vite + TypeScript + Firebase.

## Requisitos

- Node.js 20+
- Cuenta y proyecto de Firebase
- Firebase CLI (opcional, si no está instalada se usa `npx firebase-tools`)

## Configuración local

1. Instala dependencias:

```bash
npm install
```

2. Crea `.env.local` a partir de `.env.example` y completa los valores:

```bash
cp .env.example .env.local
```

Variables requeridas:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## Desarrollo

```bash
npm run dev
```

## Build y validación

```bash
npm run lint
npm run build
```

## Deploy en Firebase

El proyecto está configurado para deploy en Hosting y reglas de Firestore:

```bash
npm run deploy:rules
npm run deploy:hosting
```

Si es tu primera vez en la máquina:

```bash
npx firebase-tools login
npx firebase-tools use lineuponline-a7eda
```

## Flujo Git recomendado (commit -> push)

```bash
git add .
git commit -m "chore: configurar base del proyecto y deploy"
git push -u origin main
```
