/**
 * Operational contracts for DARE OS levels 0–4.
 * Levels 0–3 have packs; Level 4 (Orquestração de Agentes) links to /aplicar/agentes.
 */
export interface LevelContract {
  id: number;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  aiCanDo: string[];
  aiCannotDo: string[];
  requiredGates: string[];
  typicalUseCases: string[];
  whenNotToUse: string[];
  /** Se definido, link alternativo em vez de pack (ex: /aplicar/agentes) */
  externalLink?: string;
}

export const levelContracts: LevelContract[] = [
  {
    id: 0,
    name: "Nível 0 – Artesanal",
    shortName: "Artesanal",
    tagline: "Nenhuma IA. Só cérebro, mão e suor.",
    description:
      "Tudo feito à moda antiga. O designer conduz pesquisa, criação e entrega com ferramentas tradicionais, sem IA.",
    aiCanDo: [],
    aiCannotDo: [
      "Gerar ou editar artefatos",
      "Assistir em decisões",
      "Automatizar tarefas repetitivas"
    ],
    requiredGates: [
      "Decisão explícita de não usar IA documentada",
      "Critérios de aceite definidos manualmente"
    ],
    typicalUseCases: [
      "Projetos sensíveis à identidade",
      "Branding rígido",
      "Entregas finais com requisitos não verbalizáveis"
    ],
    whenNotToUse: [
      "Quando há tarefas repetitivas que a IA faria bem",
      "Quando tempo é crítico e IA poderia acelerar",
      "Quando regras são claras e validação é possível"
    ]
  },
  {
    id: 1,
    name: "Nível 1 – Backstage",
    shortName: "Backstage",
    tagline: "A IA te ajuda, mas não cria.",
    description:
      "Uso pontual da IA para tarefas operacionais: resumir pesquisas, organizar dados, revisar textos, gerar insights.",
    aiCanDo: [
      "Resumir e sintetizar textos",
      "Organizar dados e insights",
      "Revisar rascunhos e sugerir melhorias",
      "Gerar ideias e brainstorm auxiliar"
    ],
    aiCannotDo: [
      "Criar entregas finais",
      "Substituir decisão humana",
      "Gerar assets visuais ou código"
    ],
    requiredGates: [
      "Documentação de escopo de uso da IA",
      "Verificação humana obrigatória em insights críticos"
    ],
    typicalUseCases: [
      "Research e análise de dados",
      "Documentação e síntese",
      "Organização de insights"
    ],
    whenNotToUse: [
      "Quando output da IA virará entrega final sem edição significativa",
      "Quando não há critério para validar qualidade dos insights",
      "Quando impacto de erro é alto"
    ]
  },
  {
    id: 2,
    name: "Nível 2 – Geração de Assets",
    shortName: "Geração de Assets",
    tagline: "Você cria, a IA preenche.",
    description:
      "A IA entra para gerar partes do design (imagens, textos, ícones, padrões). Designer controla a composição.",
    aiCanDo: [
      "Gerar imagens a partir de prompts",
      "Criar ícones e ilustrações",
      "Sugerir padrões e texturas",
      "Preencher layouts com conteúdo de suporte"
    ],
    aiCannotDo: [
      "Decidir composição ou hierarquia visual",
      "Garantir consistência de marca",
      "Substituir direção de arte"
    ],
    requiredGates: [
      "Spec anchoring (referências visuais documentadas)",
      "Critérios de aceite para outputs gerados",
      "Revisão de consistência antes de aprovação"
    ],
    typicalUseCases: [
      "Criação de assets visuais",
      "Ilustrações e ícones",
      "Mockups e imagens conceituais"
    ],
    whenNotToUse: [
      "Quando identidade visual é crítica e não há referências claras",
      "Quando não há como validar qualidade objetivamente",
      "Quando direitos autorais são sensíveis"
    ]
  },
  {
    id: 3,
    name: "Nível 3 – Prompt-to-Prototype",
    shortName: "Prompt-to-Prototype",
    tagline: "IA propõe e monta, você direciona.",
    description:
      "A IA sugere layouts, fluxos e telas; co-edição em tempo real; prompt-to-prototype. O designer edita e atua como diretor de arte.",
    aiCanDo: [
      "Sugerir layouts, wireframes e fluxos",
      "Gerar variações e protótipos",
      "Co-criar em tempo real",
      "Prompt-to-prototype"
    ],
    aiCannotDo: [
      "Substituir julgamento criativo",
      "Garantir usabilidade sem validação",
      "Manter consistência estratégica sem supervisão"
    ],
    requiredGates: [
      "Registry de prompts",
      "Rubrica de avaliação para outputs",
      "Checkpoint de revisão humana antes de aprovação"
    ],
    typicalUseCases: [
      "Prototipagem rápida",
      "Exploração de variações",
      "Prompt-to-prototype",
      "MVPs e sprints rápidos"
    ],
    whenNotToUse: [
      "Quando regras explícitas não existem",
      "Quando validação objetiva não é possível",
      "Quando impacto de falha é alto"
    ]
  },
  {
    id: 4,
    name: "Nível 4 – Orquestração de Agentes",
    shortName: "Orquestração de Agentes",
    tagline: "IA como agentes autônomos com contexto.",
    description:
      "Agentes de IA com acesso contextual via MCP, orquestração de workflows e execução autônoma com governança.",
    aiCanDo: [
      "Executar tarefas complexas de forma autônoma",
      "Acessar contexto via MCP",
      "Orquestrar múltiplos agentes",
      "Co-criar com contexto completo do projeto"
    ],
    aiCannotDo: [
      "Operar sem gates e governança",
      "Substituir revisão humana crítica",
      "Aprovar entregas sem checkpoints"
    ],
    requiredGates: [
      "Governança de agentes documentada",
      "MCP e contexto definidos",
      "Gates e revisão humana"
    ],
    typicalUseCases: [
      "Agentes copiloto com MCP",
      "Agentes co-criadores",
      "Orquestração de workflows agentic"
    ],
    whenNotToUse: [
      "Quando não há governança de agentes",
      "Quando contexto não pode ser estruturado",
      "Quando impacto de falha é alto e irreversível"
    ],
    externalLink: "/aplicar/agentes"
  }
];
