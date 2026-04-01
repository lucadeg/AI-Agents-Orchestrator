# Agent Hub NextAIO

Next.js + React + Remotion control surface for MVX Apocalypse branch operations.

## Start

```bash
npm install
npm run dev
```

## Environment

- `NEXT_PUBLIC_ORCHESTRATOR_API_URL`: base URL for orchestrator backend API.
- `NEXT_PUBLIC_DEFAULT_WORKFLOW`: workflow used by quick execute action.

## Managed branch targets

- `ultra-claude`
- `platform`
- `ultra-studio`

## Docker

```bash
docker build -t agent-hub-nextaio .
docker run --rm -p 3000:3000 --env-file .env.example agent-hub-nextaio
```
