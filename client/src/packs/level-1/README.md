# DARE OS Pack – Nível 1: Backstage

> **Tagline:** A IA te ajuda, mas não cria.

## Visão geral

Uso pontual da IA para tarefas **operacionais**: resumir pesquisas, organizar dados, revisar textos, gerar insights. A IA **não** cria entregas finais — o humano produz e valida tudo.

## Como usar em 30 minutos

1. **Defina o escopo da IA**: Liste as tarefas em que a IA pode ajudar (resumir, organizar, revisar).
2. **Registre os prompts**: Use `prompts/registry.yaml` — copie, adapte e registre os prompts que usará.
3. **Configure verificação**: Todo insight usado em decisões deve passar por verificação humana.
4. **Use o governance**: Documente quando e como a IA foi usada em `governance.md`.

## Quando usar

- Research e análise de dados
- Documentação e síntese
- Organização de insights
- Revisão de rascunhos (sugestões apenas)
- Brainstorm auxiliar

## Quando NÃO usar

- Quando output da IA virará entrega final sem edição significativa
- Quando não há critério para validar qualidade dos insights
- Quando impacto de erro é alto
- Para gerar assets visuais ou código

## Artefatos do Pack

| Arquivo | Descrição |
|---------|-----------|
| `PRD.md` | Requisitos e escopo de uso da IA |
| `SDD.md` | Especificação: ferramentas, limites, checkpoints |
| `prompts/registry.yaml` | Registry de prompts assistivos |
| `eval/rubric.md` | Rubrica de avaliação |
| `governance.md` | Registro de uso e decisões |

## Gates obrigatórios

- [ ] Documentação de escopo de uso da IA
- [ ] Prompts registrados em `prompts/registry.yaml`
- [ ] Verificação humana obrigatória em insights críticos
- [ ] Entrega final sempre produzida/validada por humanos

## Ferramentas sugeridas (2026)

- ChatGPT (GPT-5.2), Claude Opus 4.6
- Notion AI, Figma AI, Miro AI, Canva AI
