# DARE OS Pack – Nível 2: Geração de Assets

> **Tagline:** Você cria, a IA preenche.

## Visão geral

A IA entra para **gerar partes do design**: imagens, ícones, padrões, ilustrações. O designer controla a **composição** e a **direção** — a IA preenche com assets.

## Como usar em 30 minutos

1. **Spec anchoring**: Documente referências visuais, paleta e critérios de aceite em `governance.md`.
2. **Registre prompts**: Use `prompts/registry.yaml` — adapte prompts às suas ferramentas (Midjourney, GPT Image 1, Figma Draw, etc.).
3. **Configure revisão**: Todo asset gerado passa por revisão de consistência antes de aprovação.
4. **Governance**: Mantenha registro de uso e referências atualizadas.

## Quando usar

- Criação de assets visuais (imagens, ícones)
- Ilustrações e ilustrações de suporte
- Mockups e imagens conceituais
- Padrões, texturas, backgrounds

## Quando NÃO usar

- Quando identidade visual é crítica e não há referências claras
- Quando não há como validar qualidade objetivamente
- Quando direitos autorais são sensíveis
- Para decidir composição ou hierarquia (humano dirige)

## Artefatos do Pack

| Arquivo | Descrição |
|---------|-----------|
| `PRD.md` | Requisitos e spec anchoring |
| `SDD.md` | Processo de geração e revisão |
| `prompts/registry.yaml` | Registry de prompts visuais |
| `eval/rubric.md` | Rubrica de avaliação de assets |
| `governance.md` | Spec anchoring e uso registrado |

## Gates obrigatórios

- [ ] Spec anchoring (referências visuais documentadas)
- [ ] Critérios de aceite para outputs gerados
- [ ] Prompts registrados
- [ ] Revisão de consistência antes de aprovação

## Ferramentas sugeridas (2026)

- Midjourney 7, GPT Image 1, Adobe Firefly
- Figma Draw, Ideogram 3.0, Leonardo.AI, Flux Pro
