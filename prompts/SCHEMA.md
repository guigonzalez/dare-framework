# Schema de Prompts

Schema único para Exploration, Candidates e Registry. Campos obrigatórios e opcionais por estágio.

## Campos Comuns

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `id` | string | sim | Identificador único (kebab-case) |
| `name` | string | sim | Nome legível do prompt |
| `prompt` | string | sim | Texto do prompt (multiline) |
| `context` | string | não | Contexto adicional para o agente |
| `use` | string | não | Caso de uso ou domínio |
| `verified` | boolean | registry | Se passou validação (apenas registry) |

## Por Estágio

### Exploration
- **Campos extras:** `notes`, `hypothesis`, `experiments[]`, `status: exploration`
- **Arquivo:** `exploration/[id].yaml` ou agregado em `exploration/prompts.yaml`
- **Objetivo:** Rascunhos, testes, iterações sem compromisso

### Candidates
- **Campos extras:** `eval_notes`, `eval_score`, `tested_at`, `promoted_from`, `status: candidate`
- **Arquivo:** `candidates/[id].yaml` ou `candidates/prompts.yaml`
- **Objetivo:** Prompts validados em exploração, aguardando promoção ao registry

### Registry
- **Campos obrigatórios:** `verified: true`
- **Arquivo:** `registry/project.yaml` ou `registry/level-[n].yaml`
- **Objetivo:** Prompts em produção, consumíveis por agentes e packs

## Exemplo YAML (Exploration)

```yaml
id: mcp-server-setup
name: Configurar servidor MCP para DARE
status: exploration
prompt: |
  Configure um servidor MCP que exponha o registry de prompts do DARE.
  Endpoints: list prompts, get prompt by id, search by level.
hypothesis: "MCP pode servir prompts de forma padronizada para Cursor/Claude"
notes: Primeira iteração, testar com Cursor
experiments:
  - "2026-02: teste manual com prompt direto"
```

## Exemplo YAML (Candidate)

```yaml
id: mcp-server-setup
name: Configurar servidor MCP para DARE
status: candidate
prompt: |
  [prompt refinado]
promoted_from: exploration/mcp-server-setup
eval_notes: Testado em 3 cenários, funcionou bem
eval_score: 4/5
tested_at: "2026-02-07"
```

## Exemplo YAML (Registry)

```yaml
entries:
  - id: mcp-server-setup
    name: Configurar servidor MCP para DARE
    prompt: |
      [prompt final]
    use: Setup MCP para Cursor/Claude
    verified: true
```
