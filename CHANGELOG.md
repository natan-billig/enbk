# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato baseia-se em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/).

## [1.4.0] - 2026-10-31

### Adicionado / Identidade Visual & Branding Oficial
- **Implementação do Logotipo Oficial da ENBK ("The Cyber Core"):**
  - Definição da Opção 01 como identidade visual oficial mestre da marca ENBK (Erik Natan Billig Kunrath).
  - Criação dos ativos vetoriais puros de alta definição: `public/images/logo.svg` (marca completa) e `public/images/logo-icon.svg` (símbolo isométrico).
  - Atualização do cabeçalho de navegação (`Navbar.tsx`) e rodapé institucional (`Footer.tsx`) com o ícone vetorial oficial e tipografia com iluminação dinâmica no hover.
  - Configuração canônica de favicons e touch icons em `layout.tsx` (`metadata.icons`).
- **Preservação e Adaptação do Logotipo de Escudo para o Kofre ("The Apex Financial Shield"):**
  - Salvamento da Opção 04 como ativo mestre oficial dedicado ao **Kofre**: `public/images/logos/kofre-shield.svg` e `public/images/logos/kofre-shield-icon.svg`.
  - Customização da paleta para Esmeralda & Ciano com tipografia *"KOFRE • FINANCIAL SHIELD & MULTI-CURRENCY"*.

### Governança Triádica & Auditorias Concluídas
- **QA & Performance (`qa-performance-validator`):** `[APROVADO]` — Otimização de renderização de SVG vetorial, zero CLS, sem impacto de bundle JS.
- **Cibersegurança & LGPD (`cybersecurity-lgpd-auditor`):** `[APROVADO]` — Sanitização de arquivos SVG (sem scripts executáveis ou injeção XML), zero secrets e integridade de dados.

## [1.3.0] - 2026-10-31

### Adicionado / Internacionalização (i18n)
- **Tradução Integral do Site e Catálogo para o Espanhol (es-ES / es-LATAM):**
  - Atualização do idioma da raiz HTML para `lang="es"` e metadados OpenGraph para `locale: "es_ES"`.
  - Tradução e refinamento semântico de todos os textos, descrições corporativas, dores de mercado e soluções do catálogo em `src/data/projects.ts` (ENBIK ERP, Kofre e Control Inteligente de Cheques).
  - Tradução da interface completa de navegação, cabeçalhos, barra de atalhos rápidos e rodapés (`Navbar.tsx`, `Hero.tsx`, `ProjectCard.tsx`, `ProjectsGrid.tsx`, `ArchitectureSection.tsx`, `CatalogFAQ.tsx`, `ContactSection.tsx`, `Footer.tsx`).
  - Tradução de todas as fichas técnicas dinâmicas em `src/app/[slug]/page.tsx` com mensagens de WhatsApp pré-formatadas em espanhol para contato corporativo e demonstração.
  - Otimização de acessibilidade em espanhol nos atributos `aria-label`, links e botões de interface.

### Governança Triádica & Auditorias Concluídas
- **QA & Performance (`qa-performance-validator`):** `[APROVADO]` — Build estático com 10/10 rotas SSG pré-renderizadas, 0 CLS, contraste e acessibilidade WCAG 2.1 AA validados.
- **Cibersegurança & LGPD (`cybersecurity-lgpd-auditor`):** `[APROVADO]` — Zero credenciais em código, conformidade estrita com ISO 27001/27701 e LGPD/normativas de privacidade, links externos com `rel="noopener noreferrer"`.

## [1.2.1] - 2026-10-31

### Modificado
- **Atualização da Foto de Perfil Profissional de Natan Billig:**
  - Substituição da foto antiga de gala/formatura de 2022 por fotografia de alta resolução recente com o penteado moderno atual (degrade lateral texturizado, barba aparada, camisa gola polo/social azul-marinho e iluminação profissional natural).
  - Enquadramento perfeito 1000x1000px otimizado para o container circular holográfico em `public/images/profile.jpg`.
  - Ativação do carregamento prioritário de imagem em `ProfileAvatar.tsx` (`usePhoto = true` e prop `priority`) para otimização de LCP e Core Web Vitals.
  - Sanitização integral de metadados binários JPEG (eliminação de tags EXIF, dados de GPS e telemetria de hardware).
  - Preservação do mecanismo de fallback resiliente para vetor SVG (`avatar.svg`) via `onError`.

### Governança Triádica & Auditorias Concluídas
- **QA & Performance (`qa-performance-validator`):** `[APROVADO]` — Rota estática rápida, 0 CLS e LCP otimizado com `priority`.
- **Cibersegurança & LGPD (`cybersecurity-lgpd-auditor`):** `[APROVADO]` — Zero EXIF/GPS, conformidade estrita com os arts. 6º, 7º e 18 da Lei 13.709/2018 (minimização e publicidade autorizada de dado pessoal profissional).

## [1.2.0] - 2026-10-31

### Adicionado
- **Captura e Substituição por Screenshots Reais dos Sistemas:**
  - `enbik-preview.png`: Captura real da interface em produção de **ENBIK ERP** com módulo executivo de BI, curva fluida de fluxo de vendas, alertas preventivos de ruptura de estoque (peças industriais), faturamento timbrado DNIT (Formulario 120) e DRE operacional em modo dark.
  - `kofre-preview.png`: Captura real da interface de **Kofre** com painel patrimonial multi-moeda (PYG, USD, BRL), termômetro DTI de endividamento, faturas de cartão Mastercard Black e resumo operacional em dark mode.
  - `cheques-preview.png`: Captura real do dashboard em produção de **Controle Inteligente de Cheques** com indicadores de títulos a pagar e receber, curva de vencimentos futuros e gráfico de concentração por instituição bancária (Sudameris, GNB, Continental, Interfisa).
- **Atalhos e Links Diretos das Aplicações Oficiais:**
  - Adição da propriedade `liveAppUrl` no catálogo `projects.ts`, permitindo ao visitante tanto acessar a ficha técnica quanto abrir a aplicação em produção diretamente.

## [1.1.0] - 2026-10-31

### Adicionado
- **Roteamento Dinâmico & Fichas Técnicas do Catálogo (`/[slug]`):**
  - Criação da rota `src/app/[slug]/page.tsx` com renderização estática completa (`generateStaticParams` / SSG) e blindagem contra parâmetros inválidos via `dynamicParams = false` e `notFound()`.
  - Atalhos diretos indexados: `/enbik` (e `/enbik-erp`), `/kofre` (e `/kofre-finance`), `/controle-cheques` (e `/cheques`).
  - Páginas completas com Visão Executiva, Desafio Operacional vs. Solução Arquitetada, Módulos Detalhados do Sistema, Métricas de Negócio Chave, Stack Tecnológica categorizada, Conformidade Cibersegurança & LGPD, FAQ e CTA para contato direto via WhatsApp.
- **Mockups Vetoriais de Alta Resolução (SVG Puro):**
  - Criação dos previews ilustrativos em `public/images/projects/`:
    - `enbik-preview.svg`: Dashboard ERP corporativo com faturamento timbrado DNIT, preditor de ruptura de estoque e tabela de homologação.
    - `kofre-preview.svg`: Interface fintech dark com carteiras multi-moeda (PYG, USD, BRL), faturas de cartão e gráficos de orçamento.
    - `cheques-preview.svg`: Pipeline de visão computacional (Gemini Vision) com bounding boxes, extração de cheques e alertas automatizados via WhatsApp Business.
- **Expansão de Conteúdo na Home Page:**
  - `Hero`: Inclusão de métricas e indicadores de missão crítica (+3 sistemas, 100% RLS, 99.4% precisão de IA).
  - `ProjectsGrid`: Barra de atalhos rápidos do catálogo e cards atualizados com thumbnails interativos e indicador `enbk.vercel.app/${slug}`.
  - `ArchitectureSection`: Nova seção detalhando os 4 pilares de engenharia (RLS Multi-Tenant, Edge Compute Vercel, IA Pragmática e LGPD/ISO 27001).
  - `CatalogFAQ`: Nova seção de perguntas frequentes sobre implantação, personalização e segurança corporativa.
  - `Navbar` & `Footer`: Navegação com atalhos diretos para cada sistema e acessibilidade aprimorada (`aria-expanded`, `aria-controls`).
- **SEO & Metadados Avançados:**
  - Configuração canônica de `metadataBase` (`https://enbk.vercel.app`) em `layout.tsx`.
  - Metadados dinâmicos com OpenGraph e Twitter Cards (`summary_large_image`) em todas as fichas técnicas.

### Governança Triádica & Auditorias Concluídas
- **Garantia de Qualidade (QA & Performance):** Parecer técnico `APROVADO`. First Load JS leve (~112–115 kB), zero erros de linting (`eslint`), SSG com 10 rotas estáticas pré-compiladas em 2 segundos e atributos ARIA auditados.
- **Cibersegurança & LGPD:** Parecer técnico `APROVADO`. Zero credenciais em código, sanitização estrita de slugs sem manipulação de sistema de arquivos (anti-path traversal), dados sintéticos/fictícios em mockups visuais, proteção `rel="noopener noreferrer"` em 100% dos links externos e total aderência à Lei 13.709/2018.

## [1.0.0] - 2026-10-31

### Adicionado
- **Arquitetura Base:** Setup do projeto Next.js 15 (App Router), React 19, Tailwind CSS e TypeScript.
- **Design System Futurista Minimalista:** Paleta de cores com dark slate profundo (`#06080D`, `#0B0F17`), superfícies translúcidas com blur de vidro, acentos ciano elétrico (`#06b6d4`, `#22d3ee`) e esmeralda sutil (`#10b981`).
- **Banco de Dados Estático Desacoplado:** Módulo `src/data/projects.ts` com tipagem estrita `ProjectItem` registrando os projetos iniciais:
  - *ENBIK ERP*: ERP SaaS & Automação Fiscal multi-tenant com faturamento timbrado DNIT.
  - *Kofre*: Fintech pessoal e gestão orçamentária multi-moeda nativa (PYG, USD, BRL).
  - *Controle Inteligente de Cheques*: Automação bancária com visão computacional via Gemini Vision e WhatsApp.
- **Componentes de Interface (Single Page):**
  - `Navbar`: Logomarca ENBK com indicador de pulso em tempo real ("Online / Building"), links suaves e botão de ação rápida.
  - `Hero` ("Sobre Mim"): Apresentação técnica de Natan Billig como arquiteto e criador de sistemas de missão crítica, controle financeiro e IA aplicada.
  - `ProfileAvatar`: Foto com moldura ciber de luz neon e fallback vetorial SVG estilizado de alta precisão com iniciais "NB".
  - `ProjectsGrid` & `ProjectCard`: Grade de cartões de alta fidelidade com badges de status, pills de tecnologias, destaques de arquitetura e botões com mensagens dinâmicas personalizadas para WhatsApp via `encodeURIComponent`.
  - `ContactSection`: Card de chamada premium para parcerias e orçamentos corporativos.
  - `Footer`: Assinatura canônica "© [Ano] ENBK • Arquitetado por Natan Billig".
- **Governança & Auditoria Triádica:**
  - Auditoria de Qualidade e Performance (QA): Refatoração para React Server Components (RSC) com redução de 29% no First Load JS (11.8 kB), listeners de scroll passivos (`{ passive: true }`), landmarks semânticos HTML5 conformes.
  - Auditoria de Cibersegurança & LGPD: Verificação integral OWASP, zero segredos expostos, conformidade com a LGPD (Lei 13.709/2018), proteção de links externos (`rel="noopener noreferrer"`) e garantia estrita de confidencialidade (zero menções a termos restritos).
