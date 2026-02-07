# SDD (Lite) – Nível 2: Geração de Assets

## Especificação

IA gera assets visuais; humano compõe, dirige e aprova.

## Processo

1. **Spec anchoring**: Documentar referências, paleta, estilo
2. **Prompt**: Usar registry; adaptar variáveis ao contexto
3. **Geração**: Produzir asset com ferramenta de IA
4. **Revisão**: Checar consistência com spec
5. **Aprovação**: Humano aprova ou solicita nova geração

## Ferramentas por tipo de asset

| Tipo | Ferramentas típicas | Formato |
|------|---------------------|---------|
| Imagens conceituais | Midjourney 7, GPT Image 1, Ideogram 3.0 | PNG, JPG |
| Ícones/ilustrações | Figma Draw, Adobe Firefly, Leonardo.AI | Vetorial quando possível |
| Padrões/texturas | Flux Pro, Midjourney, Adobe Firefly | PNG tileable |
| Mockups | Ideogram 3.0, GPT Image 1 | PNG |

## Critérios de aceite (spec anchoring)

- [ ] Asset alinhado a referências visuais
- [ ] Paleta respeitada
- [ ] Estilo consistente com o projeto
- [ ] Sem elementos indesejados (arte-fatos, texto incorreto)
- [ ] Resolução/formato adequados ao uso

## Checkpoints

| Etapa | Checkpoint | Responsável |
|-------|------------|-------------|
| Antes de gerar | Spec ancorada; referências claras | Designer |
| Após geração | Revisão de consistência | Designer/Revisor |
| Aprovação | Critérios cumpridos; asset registrado | Decisor |
