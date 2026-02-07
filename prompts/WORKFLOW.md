# Workflow: Exploration → Candidates → Registry

Fluxo de promoção de prompts no DARE Framework.

## Visão Geral

```
┌─────────────────┐     promover      ┌─────────────────┐     promover      ┌─────────────────┐
│   EXPLORATION   │ ───────────────►  │   CANDIDATES    │ ───────────────►  │    REGISTRY     │
│   (rascunhos)   │                   │  (em avaliação) │                   │  (produção)     │
└─────────────────┘                   └─────────────────┘                   └─────────────────┘
```

## Etapas

### 1. Exploration

**Onde:** `prompts/exploration/`  
**Quando:** Nova ideia de prompt, teste rápido, hipótese não validada.

**Ações:**
- Criar arquivo `exploration/[id].yaml` ou adicionar entrada em `exploration/prompts.yaml`
- Preencher: id, name, prompt, hypothesis, notes
- Iterar livremente — não afeta produção

**Promover para Candidate quando:**
- Prompt estabilizou após 1+ iterações
- Hipótese inicial foi confirmada em uso real
- Há documentação mínima de teste

### 2. Candidates

**Onde:** `prompts/candidates/`  
**Quando:** Prompt validado em exploração, pronto para avaliação formal.

**Ações:**
- Copiar/mover de exploration para `candidates/[id].yaml`
- Adicionar: eval_notes, eval_score (opcional), tested_at, promoted_from
- Realizar testes em cenários reais
- Ajustar prompt conforme feedback

**Promover para Registry quando:**
- Testado em ≥2 cenários representativos
- Sem regressões identificadas
- Aprovado por responsável (se aplicável)

### 3. Registry

**Onde:** `prompts/registry/`  
**Quando:** Prompt pronto para produção.

**Ações:**
- Adicionar entrada em `registry/project.yaml` (prompts de projeto) ou
- Adicionar em `registry/level-[n].yaml` (prompts por nível DARE)
- Definir `verified: true`
- Remover ou arquivar em candidates
- Se for prompt de pack DARE: sincronizar com `client/src/packs/level-[n]/prompts/registry.yaml`

## Promoção Manual

1. **Exploration → Candidate**
   - Criar `candidates/[id].yaml` com conteúdo refinado
   - Incluir `promoted_from: exploration/[id]`
   - Manter exploration como histórico (ou mover para `archive/`)

2. **Candidate → Registry**
   - Adicionar entrada em `registry/project.yaml` ou `registry/level-[n].yaml`
   - Remover de candidates (ou marcar como `promoted: true`)

## Sincronização com Packs

Prompts de níveis DARE (1, 2, 3) no registry central podem ser sincronizados para os packs:

```
prompts/registry/level-2.yaml  →  client/src/packs/level-2/prompts/registry.yaml
```

Executar manualmente ou via script quando houver mudanças no registry de nível.
