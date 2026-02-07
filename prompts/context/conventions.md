# Convenções do Projeto (derivadas do histórico de commits)

Este documento consolida convenções inferidas do histórico de commits do dare-framework.

## Commits

| Padrão | Exemplo | Origem |
|--------|---------|--------|
| `feat:` | feat: Add DARE Pillars navigation to header | 06b2fbc |
| `fix:` | fix: Uncomment MaturityTestPage import to fix blank page | cf27b33 |
| `refactor:` | refactor: Remove step number from Maturity Model card | 691d2a5 |
| `docs:` | docs: Add comprehensive change report | cc97883 |
| `chore:` | chore: Project cleanup and organization | ec8b22b |

Commits recentes usam mensagens descritivas com bullet points no corpo quando a mudança é complexa.

## Estrutura de Pastas

```
dare-framework/
├── client/                    # Frontend único (React + Vite)
│   ├── src/
│   │   ├── components/       # Componentes reutilizáveis e seções
│   │   │   └── ui/          # shadcn/ui (Radix primitives)
│   │   ├── pages/           # Uma página por rota
│   │   ├── data/            # Dados estáticos, config, níveis
│   │   ├── lib/             # Utilitários, tipos, pack-loader
│   │   ├── hooks/           # Custom hooks
│   │   └── packs/           # DARE OS packs por nível
│   └── public/              # Assets estáticos, CNAME
├── Docs/                     # Documentação técnica
├── prompts/                  # Este registry (contexto para agentes)
├── .github/workflows/        # CI/CD
└── package.json              # Scripts root
```

## Navegação

- **Framework** e **DARE OS** em pé de igualdade (não esconder um no outro)
- Rotas principais sob `/aplicar/*`
- Links de contato: LinkedIn (não e-mail) — decisão em 6dbe202

## Componentes

- Seções da home: `[Nome]Section.tsx` (AboutSection, FrameworkSection, etc.)
- Páginas: `[Nome]Page.tsx`
- UI: componentes em `components/ui/` (shadcn)
- Animações: Framer Motion (`motion.div`, `whileInView`, etc.)

## Conteúdo

- Idioma primário: **pt-BR**
- Ferramentas: manter atualizadas (ex.: DALL-E 3→GPT Image 1 em 2026)
- Temporariamente oculto: marcar com `TEMPORARILY HIDDEN` e comentário explicativo

## Anti-padrões (evitar)

1. **Links quebrados:** Sempre validar que `#secao` existe na página (1d8d55e)
2. **Imports comentados mas usados:** Causa blank page (cf27b33)
3. **Comentários JSX mal formados:** Evitar `-->` solto (ed3c5ec)
4. **Navegação sem mobile:** Garantir CTA e links no menu mobile (e1626b1)
