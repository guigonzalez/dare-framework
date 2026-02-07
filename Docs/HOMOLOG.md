# Ambiente de Homologação (Staging)

O projeto possui dois ambientes:

| Ambiente | Branch | URL |
|----------|--------|-----|
| **Produção** | `main` | www.dareframework.com.br (GitHub Pages) |
| **Homolog** | `staging` | Via Vercel (ver abaixo) |

## Configurar Homolog (Vercel — recomendado)

O domínio de produção usa GitHub Pages. Para homolog, use **Vercel** (grátis, sem configuração de secrets no GitHub):

1. Acesse [vercel.com](https://vercel.com) e faça login (GitHub).
2. **Add New** → **Project** → importe o repositório `dare-framework`.
3. Configuração:
   - **Framework Preset:** Vite
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Em **Settings** → **Git**:
   - **Production Branch:** `main` (ou desmarque se não quiser deploy automático de main no Vercel)
   - Cada branch (incluindo `staging`) e cada PR recebe uma URL de preview.

5. **Deploy.** O branch `staging` terá uma URL fixa, por exemplo:
   - `dare-framework-git-staging-guigonzalez.vercel.app`

Nenhum secret ou workflow extra é necessário — só conectar o repositório.
