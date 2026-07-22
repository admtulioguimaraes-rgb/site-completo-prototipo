# Leite Araujo Advocacia e Consultoria Jurídica — Site Institucional

Site institucional construído em React + Vite + TypeScript, Tailwind CSS e shadcn/ui, seguindo a identidade visual sóbria e editorial do escritório (azul-marinho, grafite, marfim e dourado envelhecido).

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS + shadcn/ui (variáveis CSS para tema)
- React Router (roteamento entre todas as páginas)
- react-hook-form + zod (formulário de contato)
- EmailJS (`@emailjs/browser`) para envio do formulário

## Rodando o projeto

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Deploy na Vercel

O projeto já está pronto para deploy na Vercel:

1. Importe o repositório GitHub no [dashboard da Vercel](https://vercel.com/new) — o framework "Vite" é detectado automaticamente (build command `npm run build`, output directory `dist`).
2. **Configure as variáveis de ambiente** do EmailJS em *Project Settings → Environment Variables* (Production, Preview e Development):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

   Sem isso, o site funciona normalmente, mas o formulário de contato exibirá a mensagem de erro amigável ao tentar enviar (não quebra a build nem a navegação).
3. O arquivo [`vercel.json`](vercel.json) já contém o rewrite necessário para que rotas do React Router (`/sobre`, `/contato`, `/areas-de-atuacao/:slug` etc.) funcionem corretamente em acesso direto ou ao atualizar a página — sem ele, essas rotas retornariam 404 no host estático.
4. Cada push para `master` gera um novo deploy de produção automaticamente (comportamento padrão da Vercel integrado ao GitHub).

## Estrutura de pastas

```
src/
  components/
    layout/      Header, Footer, Layout (shell com Outlet do React Router)
    sections/    Blocos reutilizáveis (Hero, AreaCard, TeamCard, MapEmbed, CtaBanner, etc.)
    ui/          Componentes shadcn/ui (Button, Input, Select, etc.)
    icons/       Ícone de WhatsApp (não existe no lucide-react atual)
  pages/         Uma página por rota (Home, Sobre, Equipe, AreasAtuacao, AreaDetalhe, Contato, NotFound)
  data/          Conteúdo mockado: areas.ts, team.ts, site.ts
  lib/           utils.ts (helper `cn`), icons.ts (mapeamento de ícones por área)
  styles/        globals.css (paleta, tipografia, variáveis CSS)
```

## ⚠️ Pendências antes de publicar (conteúdo ainda fictício)

Estes itens contêm dados de exemplo e **não devem ir ao ar sem revisão**, pois atribuem
informações a um escritório real e podem configurar propaganda enganosa perante a OAB:

- **`src/data/site.ts`** — `stats` (nº de casos, nº de setores de atuação) são placeholders
  numéricos. `regionalRecognition` já foi ajustado para um texto genérico de consolidação
  regional, sem citar prêmios ou rankings — revise a redação antes de publicar.
- **`src/pages/Sobre.tsx`** — história, missão/visão/valores e a linha do tempo (1994–2026) são
  texto ilustrativo, não fornecido pelo escritório. Reescreva com a trajetória real.
- **`src/data/team.ts`** — nome e nº da OAB de cada sócio(a) já estão corretos. Os campos
  `formation`, `specializations`, `bio` e `areaSlugs` estão marcados como `"A definir"` / `[]`
  até que o escritório envie essas informações; `photo` usa fotos de banco de imagens (placeholder,
  não são fotos reais dos advogados). Enquanto `areaSlugs` estiver vazio, os advogados não
  aparecerão nos filtros de área da página Equipe nem na seção "Advogados responsáveis" de cada
  Área de Atuação.

### 1. Identidade e textos institucionais
- **Nome, slogan, endereço, telefone(s), e-mail e horário**: já atualizados em [`src/data/site.ts`](src/data/site.ts) com os dados reais informados.
- **Aviso legal (rodapé/formulário)**: constante `legalNotice` no mesmo arquivo.
- **Logotipo**: atualmente é um logotipo textual ("Leite Araujo") em [`src/components/layout/Header.tsx`](src/components/layout/Header.tsx) e [`Footer.tsx`](src/components/layout/Footer.tsx). Para usar uma logomarca, substitua o texto por `<img src="/logo.svg" ... />` apontando para um arquivo em `public/`.
- **Favicon**: [`public/favicon.svg`](public/favicon.svg) — atualmente um monograma "LA" em SVG.

### 2. Áreas de atuação e equipe
- **Áreas de atuação**: [`src/data/areas.ts`](src/data/areas.ts) — título, descrição, escopo, etapas de atuação e imagem de cada área.
- **Equipe**: [`src/data/team.ts`](src/data/team.ts) — nome e OAB reais já preenchidos; veja a seção de pendências acima para os campos que faltam.

### 3. Imagens
Todas as imagens do site (hero, áreas de atuação, equipe) usam URLs do Unsplash como placeholder em preto e branco/monocromático. Substitua os campos `image`/`photo` nos arquivos de `src/data/` por imagens próprias do escritório.

### 4. Formulário de contato (EmailJS)
O formulário em [`src/pages/Contato.tsx`](src/pages/Contato.tsx) envia via EmailJS. Configure as variáveis de ambiente:

1. Copie `.env.example` para `.env`.
2. Preencha com as credenciais da sua conta em [emailjs.com](https://www.emailjs.com/):

```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Sem essas variáveis configuradas, o formulário valida os campos normalmente mas exibe uma mensagem de erro amigável ao tentar enviar (não quebra a aplicação).

### 5. Mapa (Home e Contato)
O componente [`src/components/sections/MapEmbed.tsx`](src/components/sections/MapEmbed.tsx) usa um embed público do Google Maps baseado no endereço de `site.ts` (sem necessidade de chave de API) e aparece tanto na Home quanto na página de Contato. Para usar uma chave de API própria ou um pin mais preciso, troque a `src` do `iframe` pelo embed gerado no Google Maps.

### 6. WhatsApp
O número de WhatsApp está em `siteConfig.whatsapp` (`src/data/site.ts`), e o link `https://wa.me/...` é gerado pela função `getWhatsappLink()` no mesmo arquivo. Aparece com o ícone do WhatsApp no rodapé e na página de Contato.

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/sobre` | Sobre o Escritório |
| `/areas-de-atuacao` | Áreas de Atuação (grid + filtro) |
| `/areas-de-atuacao/:slug` | Detalhe da Área de Atuação |
| `/equipe` | Equipe (grid + filtro por área) |
| `/contato` | Contato |

A página de Blog foi removida a pedido do escritório (rotas, menu, rodapé e arquivos de página/dados foram excluídos).

## Conformidade OAB

O conteúdo institucional e o aviso no rodapé/formulário foram redigidos para não conter promessa de resultado processual, em linha com o Provimento nº 205/2021 do Conselho Federal da OAB. Revise o texto legal em `src/data/site.ts` com o setor jurídico do escritório antes de publicar.
