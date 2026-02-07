/**
 * DARE OS Lifecycle phases content.
 */
export interface LifecyclePhase {
  id: string;
  name: string;
  definition: string;
  inputs: string[];
  outputs: string[];
}

export const lifecyclePhases: LifecyclePhase[] = [
  {
    id: "exploration",
    name: "Prompt Exploration",
    definition:
      "Fase inicial de experimentação com prompts. Conversas abertas, testes de variações e descoberta de padrões. O foco é aprender o que funciona antes de formalizar.",
    inputs: [
      "Contexto do projeto",
      "Objetivos de design/desenvolvimento",
      "Ferramentas de IA disponíveis"
    ],
    outputs: [
      "Log de exploração",
      "Prompts candidatos identificados",
      "Lições aprendidas"
    ]
  },
  {
    id: "candidates",
    name: "Prompt Candidates",
    definition:
      "Consolidação checkpoint. Prompts que mostraram valor na exploração são selecionados e refinados. Ainda não são oficiais, mas passam por primeiros testes de reprodutibilidade.",
    inputs: [
      "Log de exploração",
      "Prompts que funcionaram",
      "Critérios de sucesso"
    ],
    outputs: [
      "Lista de candidatos",
      "Versões iniciais documentadas",
      "Checklist de validação"
    ]
  },
  {
    id: "registry",
    name: "Prompt Registry",
    definition:
      "Prompts candidatos validados são promovidos ao registry. Cada entrada inclui variáveis, contexto de uso e critérios de aceite. O registry é a fonte única de verdade para prompts em uso.",
    inputs: [
      "Candidatos validados",
      "Variáveis identificadas",
      "Contexto de uso documentado"
    ],
    outputs: [
      "Registry atualizado",
      "Entradas versionadas",
      "Documentação de uso"
    ]
  },
  {
    id: "spec-anchoring",
    name: "Spec Anchoring",
    definition:
      "Especificações são ancoradas a artefatos concretos. Referências visuais, critérios de aceite e requisitos ficam explícitos. Reduz ambiguidade e deriva.",
    inputs: [
      "Registry de prompts",
      "Requisitos do projeto",
      "Referências visuais"
    ],
    outputs: [
      "Specs ancoradas",
      "Critérios de aceite explícitos",
      "Links para referências"
    ]
  },
  {
    id: "context-gates",
    name: "Context Design Gates",
    definition:
      "Checkpoints onde o contexto é validado antes de prosseguir. Garante que especificações, prompts e artefatos estão alinhados. Nenhuma aprovação sem passar pelo gate.",
    inputs: [
      "Artefatos a aprovar",
      "Specs ancoradas",
      "Checklist do gate"
    ],
    outputs: [
      "Aprovação ou retorno",
      "Registro de decisão",
      "Contexto validado"
    ]
  }
];

export const exampleFlow = {
  exploration: "Conversa no ChatGPT: 'Me sugira 3 variações de hero para um SaaS de produtividade'",
  candidates: "2 prompts extraídos e testados 3x cada; 1 descartado por inconsistência",
  registry: "Entrada 'hero-saas-variations' no registry com variáveis [contexto, tom, CTA]",
  specAnchoring: "Spec vinculada a referências: Figma frame X, paleta Y, copy guidelines Z",
  contextGates: "Gate de aprovação: spec ancorada? Registry usado? Rubrica aplicada?"
};
