# Evolução do Projeto (baseado em commits)

Marcos principais da evolução do dare-framework, ordenados cronologicamente.

## Fundação e i18n (inicial)

- Fundação do site colaborativo com níveis de adoção de IA
- Suporte multilíngue (EN/PT) — depois simplificado para **pt-BR** como idioma principal
- Framework com 6 níveis iniciais

## Framework v2.0 e 7 níveis

**de73fc3** — Atualização para v2.0:
- 7 níveis (0–6) incluindo Nível 3.5 (IA Colaborativa Avançada)
- Conteúdo revisado para mercado 2025

## Framework v2.3 e 5 níveis

**2026-02** — Revisão dos níveis:
- 5 níveis (0–4): Nível 3 unificado (Co-criação), Nível 4 (Agentes) com MCP
- Níveis 3, 3.5 e 4 consolidados em Co-criação
- Topo do framework conectado ao conceito de agentes autônomos

## Deploy e Infraestrutura

- GitHub Pages com Vite
- Custom domain (dareframework.com.br)
- SPA routing: `.nojekyll`, `404.html`, base path
- GitHub Actions para deploy automático

## DARE OS e Navegação

- Rotas movidas para `/aplicar/*`: wizard, dare-os, packs, anti-padroes, referencia
- Navegação context-aware com sub-nav por página
- DARE Pillars como página dedicada (`/aplicar/pilares`)
- **Framework + DARE OS em pé de igualdade** na navegação (não esconder um no outro)

## Guias e Conteúdo

- **Vibe Coding** — Guia completo (f2f00d4)
- **Prompt Engineering** — Guia com anatomia, workflows, templates (3b5cb7b, 42c0b61)
- Seção de **AI Agents e MCP** na home (e87e557)
- Teste de Maturidade transformado em interface conversacional (be7ebb3)

## Comercial (temporariamente oculto)

- Proposta de licenciamento e consultoria — comentadas (02e1d77)
- Cards de Journey (Maturity Model, Licensing, Consulting) — apenas Maturity Model visível

## Ferramentas e Conteúdo 2026

- Substituição de ferramentas deprecated: GPT Image 1, Stitch, Ideogram 3.0
- Atualização de Claude para Opus 4.6

## Lições para agentes

1. **Maturidade evolutiva:** O projeto passa por fases (fundação → v2 → DARE OS → guias). Novas features devem alinhar com a fase atual.
2. **Ocultar vs remover:** Funcionalidades comerciais foram comentadas, não apagadas — possível reativação.
3. **Navegação como prioridade:** Muitos commits tratam de header, mobile, links. Qualquer mudança em rotas exige revisão de navegação.
