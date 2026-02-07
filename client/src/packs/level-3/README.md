# DARE OS Pack – Nível 3: Prompt-to-Prototype

> **Tagline:** Você lidera, a IA propõe.

## Visão geral

A IA **sugere** layouts, fluxos, conteúdos e transições. O designer **edita, mistura, ajusta**. A IA acelera a prototipagem; o humano mantém o julgamento criativo e a direção.

## Como usar em 30 minutos

1. **Registry de prompts**: Mantenha prompts de layouts, fluxos e protótipos em `prompts/registry.yaml`.
2. **Rubrica de avaliação**: Use `eval/rubric.md` para avaliar outputs da IA antes de aprovar.
3. **Checkpoint de revisão**: Nenhum output aprovado sem revisão humana.
4. **Governance**: Documente decisões e evolução dos prompts em `governance.md`.

## Quando usar

- Prototipagem rápida
- Exploração de variações
- Wireframes e layouts iniciais
- Fluxos de navegação
- Conteúdo e copy de suporte

## Quando NÃO usar

- Quando regras explícitas não existem
- Quando validação objetiva não é possível
- Quando impacto de falha é alto
- Para substituir julgamento criativo crítico

## Artefatos do Pack

| Arquivo | Descrição |
|---------|-----------|
| `PRD.md` | Requisitos e gates |
| `SDD.md` | Processo de copiloto e revisão |
| `prompts/registry.yaml` | Registry de prompts de copiloto |
| `eval/rubric.md` | Rubrica de avaliação de outputs |
| `governance.md` | Decisões e evolução dos prompts |

## Gates obrigatórios

- [ ] Registry de prompts mantido e versionado
- [ ] Rubrica de avaliação aplicada a todos os outputs
- [ ] Checkpoint de revisão humana antes de aprovação
- [ ] Nenhum output em produção sem passar pelo gate

## Ferramentas sugeridas (2026)

- Figma AI, Stitch, Uizard
- Cursor, Claude Artifacts
