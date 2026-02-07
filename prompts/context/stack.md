# Stack Técnica (resumo para agentes)

Resumo do stack para decisões rápidas. Detalhes em `Docs/TECHNICAL_STACK.md`.

## Core

| Tecnologia | Uso |
|------------|-----|
| React 18 | UI |
| TypeScript 5.6 | Tipagem |
| Vite 5 | Build, dev server, HMR |

## UI e Estilo

| Tecnologia | Uso |
|------------|-----|
| Tailwind CSS | Estilização |
| Radix UI / shadcn | Componentes acessíveis |
| Framer Motion | Animações |
| Lucide React | Ícones |

## Roteamento e Estado

| Tecnologia | Uso |
|------------|-----|
| Wouter | Roteamento (leve) |
| React Hook Form + Zod | Formulários e validação |

## Deploy

- **GitHub Pages** via Actions
- Build: `npm run build` → `client/dist/`
- Custom domain via CNAME

## Comandos

```bash
npm run install:client   # Instalar deps
npm run dev             # Dev server (porta 5173)
npm run build           # Build produção
npm run preview         # Preview do build
```

## Arquivos de Configuração Relevantes

- `client/vite.config.ts` — Base path, plugins
- `client/tailwind.config.ts` — Tema, cores (primary, etc.)
- `client/tsconfig.json` — Path aliases (`@/`)
- `.github/workflows/gh-pages.yml` — Deploy
