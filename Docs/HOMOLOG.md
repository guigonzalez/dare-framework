# Ambiente de Homologação (Staging)

O projeto possui dois ambientes:

| Ambiente | Branch | URL | Workflow |
|----------|--------|-----|----------|
| **Produção** | `main` | www.dareframework.com.br | `gh-pages.yml` |
| **Homolog** | `staging` | dare-framework-homolog.pages.dev | `homolog.yml` |

## Configurar Homolog (Cloudflare Pages)

### 1. Criar conta Cloudflare
- Acesse [cloudflare.com](https://cloudflare.com) e crie uma conta (plano gratuito).

### 2. Criar projeto Pages
- Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** (pode pular, vamos usar Direct Upload).
- Ou: **Create project** → **Direct Upload**.
- Nome sugerido: `dare-framework-homolog`.

### 3. Obter credenciais

**Account ID:**
- Dashboard → qualquer site/projeto → Overview → **Account ID** (lado direito).

**API Token:**
- My Profile → **API Tokens** → **Create Token**.
- Use o template **Edit Cloudflare Workers** ou **Custom token** com permissão:
  - Account → **Cloudflare Pages** → **Edit**
- Copie o token (só aparece uma vez).

### 4. Adicionar secrets no GitHub
- Repositório → **Settings** → **Secrets and variables** → **Actions**.
- **New repository secret**:
  - `CLOUDFLARE_API_TOKEN` = token criado acima
  - `CLOUDFLARE_ACCOUNT_ID` = ID da conta

### 5. Deploy
- Crie a branch `staging`: `git checkout -b staging && git push -u origin staging`
- Ou faça push para `staging`.
- O workflow roda automaticamente e publica em `https://dare-framework-homolog.pages.dev`.

## Alternativa: Vercel (sem configuração extra)

1. Acesse [vercel.com](https://vercel.com) e conecte o repositório.
2. **Production Branch** = `main`
3. Todas as PRs recebem preview automático (ex: `dare-framework-xxx.vercel.app`).
4. Para homolog fixo: crie branch `staging` e configure em Vercel para ter URL permanente.

Nenhum workflow ou secret é necessário — só conectar o repo.
