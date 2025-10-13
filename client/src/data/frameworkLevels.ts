import { FrameworkLevel } from "@/lib/types";

export const frameworkLevels: FrameworkLevel[] = [
  {
    id: 0,
    name: "Nível 0 – Manual Total",
    shortName: "Manual Total",
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
    name: "Nível 1 – IA Assistiva",
    shortName: "IA Assistiva",
    tagline: "A IA te ajuda, mas não cria.",
    description: "Uso pontual da IA para tarefas operacionais: resumir pesquisas, organizar dados, revisar textos, gerar insights.",
    tools: ["ChatGPT", "Claude 3.5 Sonnet", "Notion AI", "Figma AI", "Miro AI"],
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
    name: "Nível 2 – IA como Acelerador Visual",
    shortName: "Acelerador Visual",
    tagline: "Você cria, a IA preenche.",
    description: "A IA entra para gerar partes do design (imagens, textos, ícones, padrões). Designer controla a composição.",
    tools: ["Midjourney V6", "DALL·E 3", "Adobe Firefly", "Figma Draw", "Ideogram 2.0"],
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
    name: "Nível 3 – IA como Copiloto",
    shortName: "Copiloto",
    tagline: "Você lidera, a IA propõe.",
    description: "A IA sugere layouts, fluxos, conteúdos e transições. O designer edita, mistura, ajusta.",
    tools: ["Figma AI", "Galileo AI", "Uizard", "Cursor AI", "Claude Artifacts"],
    appropriateUses: [
      "Prototipagem rápida",
      "Exploração de variações",
      "Wireframes e layouts iniciais"
    ],
    pros: [
      "60-80% redução no tempo de prototipagem",
      "Múltiplas variações instantâneas",
      "Aceleração significativa do processo criativo"
    ],
    cons: [
      "Requer curadoria crítica",
      "Risco de vício criativo (design preguiçoso)",
      "Resultados podem parecer formulaicos"
    ],
    risks: "Atrofia das habilidades criativas fundamentais; homogeneização visual; perda de identidade de marca única."
  },
  {
    id: 3.5,
    name: "Nível 3.5 – IA Colaborativa Avançada",
    shortName: "IA Colaborativa",
    tagline: "IA como parceira de pensamento.",
    description: "Co-edição simultânea entre humano e IA. Feedback contextual instantâneo sobre decisões de design. Iteração em tempo real com validação automática em workspace compartilhado.",
    tools: ["Claude 3.5 + Artifacts", "Cursor Composer", "Figma AI Avançado"],
    appropriateUses: [
      "Co-criação iterativa",
      "Validação em tempo real",
      "Desenvolvimento colaborativo"
    ],
    pros: [
      "70-90% melhoria na qualidade de iterações",
      "Feedback contextual instantâneo",
      "Colaboração em tempo real"
    ],
    cons: [
      "Curva de aprendizado mais íngreme",
      "Requer adaptação do workflow",
      "Risco de sobre-dependência"
    ],
    risks: "Perda de controle criativo em iterações rápidas; sobre-dependência de validação por IA; necessidade de manter competências críticas ativas."
  },
  {
    id: 4,
    name: "Nível 4 – Co-criação Modular",
    shortName: "Co-criação Modular",
    tagline: "A IA monta, você direciona.",
    description: "IA gera telas inteiras, animações ou identidades parciais com base em prompts. Designer atua como diretor de arte.",
    tools: ["Figma Make", "V0 by Vercel", "Claude Artifacts", "Uizard", "Galileo AI"],
    appropriateUses: [
      "Prompt-to-prototype",
      "Sistemas de design escaláveis",
      "MVPs e sprints rápidos"
    ],
    pros: [
      "80-95% redução no tempo concept-to-prototype",
      "Útil para sprints, MVPs e testes",
      "Amplia possibilidades para não-designers"
    ],
    cons: [
      "Falta finesse em detalhes",
      "Exige ajustes pesados para virar produto real",
      "Design potencialmente desconectado dos objetivos"
    ],
    risks: "Problemas de usabilidade não detectados; sistemas visuais incoerentes; limitação pela capacidade de articular prompts; necessidade de checkpoints de revisão humana."
  },
  {
    id: 5,
    name: "Nível 5 – Automação Guiada por Prompt",
    shortName: "Automação Guiada",
    tagline: "Você descreve, a IA entrega.",
    description: "O design é quase totalmente gerado via linguagem natural. Criação, layout, conteúdo e até protótipo funcional vêm prontos.",
    tools: ["Cursor Composer", "Figma Sites", "Bolt.new", "V0.dev", "GPT-Engineer"],
    appropriateUses: [
      "Desenvolvimento multi-arquivo",
      "Design-to-website automático",
      "MVPs completos"
    ],
    pros: [
      "90-98% automação de tarefas repetitivas",
      "Extremamente veloz para testes de conceito",
      "Democratiza o processo de design"
    ],
    cons: [
      "Baixo controle granular",
      "Outputs podem ser genéricos",
      "Revisão crítica obrigatória"
    ],
    risks: "Desconexão entre design e necessidades de negócio; problemas de acessibilidade; experiências homogêneas; desvalorização da expertise de design; necessidade de governança estruturada."
  }
];
