# SDD (Lite) – Nível 3: Prompt-to-Prototype

## Especificação

IA sugere; humano edita, mistura e aprova.

## Processo

1. **Contexto**: Definir requisitos, referências, objetivos
2. **Prompt**: Usar registry; adaptar variáveis
3. **Geração**: IA produz sugestão (layout, fluxo, variação)
4. **Avaliação**: Aplicar rubrica; pontuar
5. **Revisão**: Humano edita, mistura, descarta ou aprova
6. **Gate**: Apenas outputs acima do threshold seguem
7. **Registry**: Prompts que evoluíram são atualizados

## Ferramentas por tipo de output

| Tipo | Ferramentas típicas | Output |
|------|---------------------|--------|
| Layouts/wireframes | Figma AI, Stitch, Uizard | Frame, componentes |
| Fluxos | Claude Artifacts, Figma AI | Diagrama, steps |
| Código/protótipo | Cursor, Claude Artifacts | Código, HTML |
| Variações | Figma AI, Stitch | Múltiplas versões |

## Critérios de aceite (rubrica)

- Consistência com requisitos
- Qualidade da sugestão (acurácia, completude)
- Revisão humana aplicada
- Documentação atualizada

## Checkpoints

| Etapa | Checkpoint | Responsável |
|-------|------------|-------------|
| Antes de usar | Contexto claro; prompt registrado | Designer |
| Após geração | Rubrica aplicada; pontuação registrada | Designer |
| Revisão | Edições feitas; output aprovado ou descartado | Designer/Revisor |
| Gate | Output acima do threshold; documentado | Decisor |
