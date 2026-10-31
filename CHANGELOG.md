# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato baseia-se em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/).

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
