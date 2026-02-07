# DARE Framework - Changelog

Todas as mudanças importantes no projeto serão documentadas neste arquivo.

---

## [2.1.0] - 2026-02-07

### 🔄 Atualização de Ferramentas (Fev/2026)

Correção de ferramentas deprecated ou descontinuadas para garantir consistência do conteúdo.

#### Ferramentas substituídas
- **DALL·E 3** → **GPT Image 1** (deprecado pela OpenAI, sunset 12/05/2026)
- **Galileo AI** → **Stitch** (Google Labs — Galileo foi adquirido e descontinuado)
- **Ideogram 2.0** → **Ideogram 3.0** (versão atual, mar/2025)

#### Arquivos atualizados
- `frameworkLevels.ts` — Níveis 2, 3 e 4
- `dare-framework-content.json`
- `ResourcesSection.tsx` — Modais e cards
- `ApplyPage.tsx`, `PromptEngineeringPage.tsx`, `ContributeSection.tsx`

---

## [2.0.0] - 2025-10-13

### 🚀 Principais Mudanças

Esta é uma atualização significativa do DARE Framework baseada nas evoluções do mercado de IA em 2025.

### ✨ Adicionado

#### Novo Nível 3.5 - IA Colaborativa Avançada
- **Descrição:** IA como parceira de pensamento em tempo real
- **Conceito:** Co-edição simultânea entre humano e IA com feedback contextual instantâneo
- **Ferramentas principais:**
  - Claude 3.5 + Artifacts (co-criação iterativa)
  - Cursor Composer (desenvolvimento iterativo)
  - Figma AI Avançado (sugestões contextuais em tempo real)
- **Métricas:** 70-90% melhoria na qualidade de iterações
- **Casos de uso:**
  - Co-criação iterativa
  - Validação em tempo real
  - Desenvolvimento colaborativo

### 🔄 Atualizado

#### Nível 1 - IA Assistiva
- **Ferramentas atualizadas:**
  - Adicionado: Claude 3.5 Sonnet (research e insights avançados)
  - Adicionado: Figma AI (auto-complete inteligente)
  - Adicionado: Miro AI
  - Mantido: ChatGPT, Notion AI
- **Métricas atualizadas:** 25-40% redução no tempo de research e documentação
- **Casos de uso adicionados:**
  - Research e análise de dados
  - Documentação e síntese
  - Organização de insights

#### Nível 2 - Acelerador Visual
- **Ferramentas atualizadas:**
  - Adicionado: Figma Draw (ilustração vetorial assistida)
  - Adicionado: Adobe Firefly (integrado ao Creative Suite)
  - Atualizado: Midjourney V6 (melhor consistência de prompts)
  - Atualizado: DALL·E 3
  - Adicionado: Ideogram 2.0 (texto em imagens)
  - Removido: Runway (movido para outro nível)
  - Removido: Magician for Figma
- **Métricas atualizadas:** 50-70% aceleração na criação de assets visuais
- **Casos de uso adicionados:**
  - Criação de assets visuais
  - Ilustrações e ícones
  - Mockups e imagens conceituais

#### Nível 3 - Copiloto
- **Ferramentas atualizadas:**
  - Adicionado: Cursor AI (prototipagem rápida funcional)
  - Adicionado: Claude Artifacts (parceiro de ideação)
  - Atualizado: Figma AI (sugestões contextuais de componentes)
  - Mantido: Galileo AI, Uizard
  - Removido: Firefly (movido para Nível 2)
- **Métricas atualizadas:** 60-80% redução no tempo de prototipagem inicial
- **Casos de uso adicionados:**
  - Prototipagem rápida
  - Exploração de variações
  - Wireframes e layouts iniciais

#### Nível 4 - Co-criação Modular
- **Ferramentas atualizadas:**
  - Adicionado: Figma Make (prompt-to-prototype principal)
  - Adicionado: V0 by Vercel (sistemas de design escaláveis)
  - Adicionado: Claude Artifacts (co-criação iterativa)
  - Mantido: Uizard, Galileo AI
  - Removido: Runway Gen-2
  - Removido: Design-to-code tools (genérico)
- **Métricas atualizadas:** 80-95% redução no tempo concept-to-prototype
- **Casos de uso adicionados:**
  - Prompt-to-prototype
  - Sistemas de design escaláveis
  - MVPs e sprints rápidos
- **Riscos atualizados:** Adicionada necessidade de checkpoints de revisão humana

#### Nível 5 - Automação Guiada
- **Ferramentas atualizadas:**
  - Adicionado: Cursor Composer (desenvolvimento multi-arquivo)
  - Adicionado: Figma Sites (design-to-website automático)
  - Adicionado: Bolt.new (MVPs completos)
  - Mantido: V0.dev (como ferramenta complementar)
  - Mantido: GPT-Engineer
  - Removido: Modelos customizados (muito genérico)
- **Métricas atualizadas:** 90-98% automação de tarefas repetitivas de desenvolvimento
- **Casos de uso adicionados:**
  - Desenvolvimento multi-arquivo
  - Design-to-website automático
  - MVPs completos
- **Riscos atualizados:** Adicionada necessidade de governança estruturada

### 📊 Métricas Atualizadas

Novo sistema de métricas por nível baseado em benchmarks do mercado 2025:

| Nível | Controle Humano | Velocidade | Dependência IA | Métrica Principal |
|-------|----------------|------------|----------------|-------------------|
| 0 | 100% | 16% | 0% | Controle total |
| 1 | 90% | 30% | 15% | 25-40% redução tempo research |
| 2 | 75% | 50% | 35% | 50-70% aceleração criação assets |
| 3 | 60% | 70% | 60% | 60-80% redução tempo prototipagem |
| 3.5 | 50% | 80% | 75% | 70-90% melhoria qualidade iterações |
| 4 | 40% | 85% | 80% | 80-95% redução tempo concept-to-prototype |
| 5 | 20% | 95% | 95% | 90-98% automação tarefas repetitivas |

### 🏗️ Alterações Técnicas

#### Componentes
- **FrameworkSection.tsx:**
  - Atualizado array de métricas para 7 níveis (antes 6)
  - Ajustado cálculo de progresso: `(activeLevel / 6) * 100`
  - Corrigido display móvel para mostrar nível correto
  - Atualizado texto: "7 níveis de adoção de IA" (antes "6 níveis")

#### Dados
- **frameworkLevels.ts:**
  - Adicionado novo objeto para Nível 3.5
  - Atualizados todos os 7 níveis com novas ferramentas
  - Adicionados casos de uso (`appropriateUses`) para todos os níveis
  - Atualizadas métricas quantificadas nos campos `pros`
  - Expandidos campos `risks` com mais detalhes

#### Documentação
- **README.md:** Atualizado para refletir 7 níveis
- **CHANGELOG.md:** Criado para rastrear mudanças (este arquivo)

### 🔍 Base para Atualizações

Estas mudanças foram baseadas em:

1. **Figma Config 2025:** Anúncio de Figma Make, Figma Sites, Figma Draw, Figma Buzz e Grid Layout
2. **Claude 3.5 Sonnet + Artifacts:** Novo paradigma de co-criação com workspace colaborativo
3. **Cursor AI:** Revolução em editores de código com Composer e YOLO mode
4. **Mercado 2025:** Análise de ferramentas emergentes e métricas de produtividade

### 📚 Referências

- [Figma Config 2025 Press Release](https://www.figma.com/blog/config-2025-press-release/)
- [Claude 3.5 Sonnet Announcement](https://www.anthropic.com/news/claude-3-5-sonnet)
- [Cursor AI Features](https://cursor.com/features)
- Documento de análise: `revisaoconteudodare.md`

---

## [1.0.0] - 2024-10-XX

### 🎉 Lançamento Inicial

- Framework DARE com 6 níveis (0-5)
- Interface interativa com React + TypeScript
- Sistema de métricas visuais (Controle Humano, Velocidade, Dependência IA)
- Deploy automático via GitHub Actions
- Documentação completa
- Design responsivo (mobile + desktop)

---

## Tipos de Mudanças

- **✨ Adicionado:** Para novas funcionalidades
- **🔄 Atualizado:** Para mudanças em funcionalidades existentes
- **🗑️ Removido:** Para funcionalidades removidas
- **🐛 Corrigido:** Para correções de bugs
- **🔒 Segurança:** Para correções de vulnerabilidades
- **📚 Documentação:** Para mudanças apenas em documentação
- **🏗️ Arquitetura:** Para mudanças na estrutura do código

---

**Formato baseado em:** [Keep a Changelog](https://keepachangelog.com/)
**Versionamento:** [Semantic Versioning](https://semver.org/)
