/**
 * Anti-patterns for DARE OS. Signal, why dangerous, fix, common level.
 */
export interface AntiPattern {
  id: string;
  title: string;
  signal: string;
  whyDangerous: string;
  fix: string;
  commonLevel: number;
}

export const antiPatterns: AntiPattern[] = [
  {
    id: "prompt-drift",
    title: "Deriva de prompt sem registro",
    signal: "Prompts evoluem em conversas mas não são documentados no registry.",
    whyDangerous: "Impossível reproduzir resultados; regressões silenciosas; perda de conhecimento.",
    fix: "Adicionar Prompt Registry; consolidar prompts validados; versionar.",
    commonLevel: 2
  },
  {
    id: "no-validation-gate",
    title: "Outputs aprovados sem validação",
    signal: "Artefatos gerados por IA são aprovados sem critérios objetivos de verificação.",
    whyDangerous: "Erros passam para produção; qualidade inconsistente; risco legal/ético.",
    fix: "Criar rubrica de avaliação; gate de validação humana obrigatório.",
    commonLevel: 2
  },
  {
    id: "high-impact-no-rules",
    title: "Alto impacto sem regras explícitas",
    signal: "Projetos de alto impacto usam IA sem requisitos documentados.",
    whyDangerous: "Falhas críticas; responsabilidade não atribuída; outputs imprevisíveis.",
    fix: "Documentar requisitos; estabelecer critérios de aceite; considerar Nível 0.",
    commonLevel: 3
  },
  {
    id: "exploratory-autopilot",
    title: "Tarefa exploratória em modo autopiloto",
    signal: "IA gera entregas em terreno incerto sem checkpoints de decisão humana.",
    whyDangerous: "Deriva de objetivo; decisões não fundamentadas; perda de controle.",
    fix: "Adicionar checkpoints de decisão humana; mapear incertezas; Nível 0 até clarificar.",
    commonLevel: 3
  },
  {
    id: "insight-without-verification",
    title: "Insight da IA usado sem verificação",
    signal: "Insights de síntese ou análise são incorporados a decisões sem checagem.",
    whyDangerous: "Viés propagado; alucinações influenciando estratégia; confiança excessiva.",
    fix: "Gate de verificação humana para insights críticos; documentar fonte.",
    commonLevel: 1
  },
  {
    id: "no-spec-anchoring",
    title: "Geração visual sem spec anchoring",
    signal: "IA gera imagens/assets sem referências visuais documentadas.",
    whyDangerous: "Inconsistência de marca; retrabalho; estéticas genéricas.",
    fix: "Documentar referências visuais; paleta e estilo definidos; critérios de aceite.",
    commonLevel: 2
  },
  {
    id: "copilot-without-curation",
    title: "Copiloto sem curadoria crítica",
    signal: "Propostas da IA são aceitas sem edição significativa.",
    whyDangerous: "Design preguiçoso; homogeneização; perda de identidade.",
    fix: "Checkpoint de curadoria; rubrica de avaliação; revisão obrigatória.",
    commonLevel: 3
  },
  {
    id: "skip-exploration-phase",
    title: "Pular fase de exploração",
    signal: "Prompts vão direto para registry sem fase de exploração/candidatos.",
    whyDangerous: "Registry poluído; prompts subótimos congelados; pouca iteração.",
    fix: "Implementar Prompt Exploration; consolidar candidatos; depois registrar.",
    commonLevel: 2
  },
  {
    id: "manual-override-hidden",
    title: "Override manual escondido",
    signal: "Decisões manuais sobrescrevem regras da IA sem documentação.",
    whyDangerous: "Auditoria impossível; regras não evoluem; inconsistência.",
    fix: "Documentar overrides em governance; revisar regras periodicamente.",
    commonLevel: 3
  },
  {
    id: "no-gate-before-approval",
    title: "Aprovação sem gate de contexto",
    signal: "Artefatos aprovados sem passar por Context Design Gates.",
    whyDangerous: "Contexto inadequado; especificações desalinhadas; retrabalho.",
    fix: "Implementar Context Design Gates; checklist antes de aprovação.",
    commonLevel: 2
  },
  {
    id: "registry-as-chat-log",
    title: "Registry como log de chat",
    signal: "Registry contém prompts brutos de conversas, não versões validadas.",
    whyDangerous: "Prompts não reproduzíveis; variáveis implícitas; baixa confiabilidade.",
    fix: "Consolidar apenas prompts testados; documentar variáveis; versionar.",
    commonLevel: 2
  }
];
