# DARE Framework — Prompt Registry

Sistema de prompts para agentes de IA (MCP, Cursor, Claude Code) com fluxo **Exploration → Candidates → Registry**.

## Objetivo

Fornecer contexto funcional e eficiente para que agentes:

- Entendam a estrutura do projeto e suas convenções
- Sigam padrões de código e commit já estabelecidos
- Evitem anti-padrões documentados no histórico
- Produzam mudanças consistentes com a evolução do DARE

## Estrutura

```
prompts/
├── README.md           # Este arquivo
├── SCHEMA.md           # Schema de prompts (exploration, candidates, registry)
├── WORKFLOW.md         # Fluxo de promoção
├── registry.yaml       # Registry principal (produção)
├── exploration/        # Rascunhos e experimentos
├── candidates/         # Prompts em avaliação
├── registry/           # Registries estruturados (project.yaml)
└── context/            # Contexto do histórico de commits
```

## Fluxo

1. **Exploration** — Ideias, rascunhos, hipóteses
2. **Candidates** — Prompts validados, em avaliação
3. **Registry** — Prompts em produção

Ver `WORKFLOW.md` para o processo de promoção.

## Uso por Agentes (MCP / Cursor)

1. **Antes de editar:** Consulte `registry.yaml` para prompts recomendados e `context/conventions.md` para padrões.
2. **Ao adicionar features:** Verifique `context/evolution.md` para alinhar com a direção do projeto.
3. **Ao alterar navegação ou conteúdo:** Consulte a seção "Navegação" em `registry.yaml`.

## Relação com DARE OS e MCP/Agentes

A seção **Agentes de IA e Model Context Protocol** na home (`AgentsSection.tsx`) descreve o futuro da colaboração humano-IA. Este registry é um **pré-requisito** para expandir MCP e Agentes no DARE com:

- Contextos funcionais e eficientes
- Guias práticos ancorados na estrutura real do repo
- Prompts versionados e rastreáveis

Quando MCP/Agentes forem formalmente integrados ao DARE OS, este registry servirá como base para servidores MCP e documentação de prompts por nível.

## Manutenção

O registry deve ser atualizado quando:

- Novas convenções forem estabelecidas em PRs
- A estrutura de pastas ou rotas mudar
- Novos níveis ou packs forem adicionados
- O stack técnico for alterado

---

*Registry criado a partir do histórico de commits (2024–2026).*
