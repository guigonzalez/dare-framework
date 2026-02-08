/**
 * Navegação incorporando Framework e DARE OS em conjunto (2026).
 * Framework e DARE OS em pé de igualdade, ambos visíveis.
 */
import { config } from "./config";

export interface NavItem {
  href: string;
  label: string;
}

/** Framework (conceito) - dropdown visível em pé de igualdade */
export const frameworkNavItems: NavItem[] = [
  { href: "/#about", label: "Sobre" },
  { href: "/#framework", label: "Níveis" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/#contribute", label: "Contribuir" },
];

/** DARE OS (sistema operacional) - dropdown visível em pé de igualdade */
export const dareOsNavItems: NavItem[] = config.DARE_OS_MVP
  ? [
      { href: "/aplicar", label: "Visão Geral" },
      { href: "/aplicar/teste-maturidade", label: "Teste de Maturidade" },
      { href: "/aplicar/dare-os", label: "Ciclo" },
      { href: "/aplicar/packs", label: "Packs" },
      { href: "/aplicar/anti-padroes", label: "Anti-padrões" },
      { href: "/aplicar/referencia", label: "Referência" },
    ]
  : [{ href: "/aplicar", label: "Visão Geral" }];

/** DARE OS - links principais (para destaque/atalhos) */
export const dareOsPrimaryNav: NavItem[] = config.DARE_OS_MVP
  ? [
      { href: "/aplicar", label: "Visão Geral" },
      { href: "/aplicar/teste-maturidade", label: "Teste de Maturidade" },
      { href: "/aplicar/dare-os", label: "Ciclo" },
      { href: "/aplicar/packs", label: "Packs" },
    ]
  : [{ href: "/aplicar", label: "Visão Geral" }];

/** DARE OS - itens secundários (anti-padrões, referência) */
export const dareOsMoreNav: NavItem[] = config.DARE_OS_MVP
  ? [
      { href: "/aplicar/anti-padroes", label: "Anti-padrões" },
      { href: "/aplicar/referencia", label: "Referência" },
    ]
  : [];

/** Guias educacionais */
export const guiasNavItems: NavItem[] = [
  { href: "/aplicar/pilares", label: "4 Pilares DARE" },
  { href: "/aplicar/vibe-coding", label: "Vibe Coding" },
  { href: "/aplicar/prompt-engineering", label: "Prompt Engineering" },
  { href: "/aplicar/agentes", label: "Agentes & MCP" },
];

/** Lista plana Aplicar (DARE OS + Guias) */
export const aplicarNavItems: NavItem[] = [
  ...dareOsNavItems,
  ...(config.DARE_OS_MVP ? guiasNavItems : []),
];

export const aplicarSubNavByPage: Record<string, NavItem[]> = {
  "/aplicar": aplicarNavItems,
  "/aplicar/pilares": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/pilares#decisao", label: "Decisão" },
    { href: "/aplicar/pilares#automacao", label: "Automação" },
    { href: "/aplicar/pilares#relevancia", label: "Relevância" },
    { href: "/aplicar/pilares#engajamento", label: "Engajamento" },
  ],
  "/aplicar/vibe-coding": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/vibe-coding#introducao", label: "Introdução" },
    { href: "/aplicar/vibe-coding#vibe-loop", label: "Vibe Loop" },
    { href: "/aplicar/vibe-coding#ferramentas", label: "Ferramentas" },
    { href: "/aplicar/vibe-coding#prompts", label: "Estrutura de Prompts" },
  ],
  "/aplicar/prompt-engineering": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/prompt-engineering#anatomia", label: "Anatomia do Prompt" },
    { href: "/aplicar/prompt-engineering#workflows", label: "Workflows" },
    { href: "/aplicar/prompt-engineering#templates", label: "Templates" },
    { href: "/aplicar/prompt-engineering#troubleshooting", label: "Troubleshooting" },
  ],
  "/aplicar/teste-maturidade": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/teste-maturidade", label: "Teste de Maturidade" },
  ],
  "/aplicar/dare-os": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/dare-os", label: "Ciclo" },
  ],
  "/aplicar/packs": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/packs", label: "Packs" },
  ],
  "/aplicar/anti-padroes": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/anti-padroes", label: "Anti-padrões" },
  ],
  "/aplicar/agentes": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/agentes#introducao", label: "Introdução" },
    { href: "/aplicar/agentes#conceitos", label: "Conceitos" },
    { href: "/aplicar/agentes#mcp", label: "MCP" },
    { href: "/aplicar/agentes#contextos-dare", label: "Contextos DARE" },
    { href: "/aplicar/agentes#guias-praticos", label: "Guias Práticos" },
  ],
  "/aplicar/referencia": [
    { href: "/aplicar", label: "← Voltar" },
    { href: "/aplicar/referencia", label: "Referência" },
  ],
};
