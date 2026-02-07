import { FrameworkLevel } from "@/lib/types";

/** Versão dos níveis — 5 níveis (0–4), Agentes no topo — 2026 */
export const FRAMEWORK_LEVELS_VERSION = "2026";

export const frameworkLevels: FrameworkLevel[] = [
  {
    id: 0,
    name: "Nível 0 – Artesanal",
    shortName: "Artesanal",
    tagline: "Nenhuma IA. Só cérebro, mão e suor.",
    description: "Tudo feito à moda antiga. O designer conduz pesquisa, criação e entrega com ferramentas tradicionais, sem IA.",
    appropriateUses: [
      "Projetos sensíveis à identidade",
      "Branding rígido",
      "Entregas finais"
    ],
    pros: [
      "Máximo controle",
      "Refinamento detalhado",
      "Autoria completa"
    ],
    cons: [
      "Lento",
      "Pouco escalável",
      "Sujeito a retrabalho braçal"
    ],
    risks: "Ineficiência em processos repetitivos; prazos potencialmente mais longos; maior custo por hora de trabalho."
  },
  {
    id: 1,
    name: "Nível 1 – Backstage",
    shortName: "Backstage",
    tagline: "A IA te ajuda, mas não cria.",
    description: "Uso pontual da IA para tarefas operacionais: resumir pesquisas, organizar dados, revisar textos, gerar insights.",
    tools: ["ChatGPT (GPT-5.2)", "Claude Opus 4.6", "Notion AI", "Figma AI", "Miro AI", "Canva AI"],
    appropriateUses: [
      "Research e análise de dados",
      "Documentação e síntese",
      "Organização de insights"
    ],
    pros: [
      "25-40% redução no tempo de research",
      "Mantém integridade criativa",
      "Baixo risco de derivação"
    ],
    cons: [
      "Nenhuma aceleração no design em si",
      "Benefícios limitados em processos puramente visuais"
    ],
    risks: "Confiança excessiva em insights gerados por IA sem verificação; viés de dados influenciando decisões de design."
  },
  {
    id: 2,
    name: "Nível 2 – Geração de Assets",
    shortName: "Geração de Assets",
    tagline: "Você cria, a IA preenche.",
    description: "A IA entra para gerar partes do design (imagens, textos, ícones, padrões). Designer controla a composição.",
    tools: ["Midjourney 7", "GPT Image 1", "Adobe Firefly", "Figma Draw", "Ideogram 3.0", "Leonardo.AI", "Flux Pro"],
    appropriateUses: [
      "Criação de assets visuais",
      "Ilustrações e ícones",
      "Mockups e imagens conceituais"
    ],
    pros: [
      "50-70% aceleração na criação de assets",
      "Expande possibilidades visuais",
      "Reduz dependência de bibliotecas de assets"
    ],
    cons: [
      "Risco de quebra de consistência",
      "Visual potencialmente genérico",
      "Dependência de prompts bem escritos"
    ],
    risks: "Questões de direitos autorais com imagens geradas; falta de consistência entre elementos visuais; estéticas derivativas."
  },
  {
    id: 3,
    name: "Nível 3 – Prompt-to-Prototype",
    shortName: "Prompt-to-Prototype",
    tagline: "IA propõe e monta, você direciona.",
    description: "A IA sugere layouts, fluxos e telas; co-edição em tempo real; prompt-to-prototype. O designer edita, mistura e atua como diretor de arte.",
    tools: ["Figma AI", "Stitch", "Uizard", "Cursor", "Claude Artifacts", "v0 by Vercel", "Bolt.new", "Figma Make"],
    appropriateUses: [
      "Prototipagem rápida",
      "Exploração de variações",
      "Wireframes e layouts",
      "Prompt-to-prototype",
      "MVPs e sprints rápidos"
    ],
    pros: [
      "60-90% aceleração concept-to-prototype",
      "Múltiplas variações instantâneas",
      "Co-criação iterativa em tempo real"
    ],
    cons: [
      "Requer curadoria crítica",
      "Risco de vício criativo",
      "Exige ajustes para virar produto real"
    ],
    risks: "Atrofia de habilidades criativas; homogeneização visual; necessidade de checkpoints de revisão humana."
  },
  {
    id: 4,
    name: "Nível 4 – Orquestração de Agentes",
    shortName: "Orquestração de Agentes",
    tagline: "IA como agentes autônomos com contexto.",
    description: "Agentes de IA que executam tarefas complexas de forma independente. Acesso contextual via MCP, orquestração de workflows e co-criação agentic.",
    tools: ["Claude com MCP", "Cursor Agent Mode", "Agentic Workflows", "MCP Servers customizados", "Multi-Agent Systems"],
    appropriateUses: [
      "Agentes copiloto com contexto do projeto",
      "Agentes co-criadores via MCP",
      "Orquestração de múltiplos agentes",
      "Workflows agentic"
    ],
    pros: [
      "Contexto unificado via MCP",
      "Execução autônoma com governança",
      "Integração com ferramentas e dados"
    ],
    cons: [
      "Curva de aprendizado em MCP",
      "Requer governança e gates",
      "Risco de sobre-dependência"
    ],
    risks: "Perda de controle em execuções autônomas; necessidade de gates e revisão humana; governança de agentes essencial."
  }
];
