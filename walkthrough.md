# Walkthrough de Implementação • ENBK Showcase

Este documento sintetiza a arquitetura, etapas executadas, validações técnicas e procedimentos de homologação e deploy do **ENBK Showcase**.

---

## 1. Visão Geral do Projeto
O **ENBK Showcase** é o portal e catálogo oficial dos softwares e soluções de engenharia desenvolvidos por **Natan Billig**. 
Desenvolvido com foco em estética minimalista e futurista, carregamento ultra veloz, acessibilidade total e estrita conformidade regulatória.

- **Nome Oficial:** ENBK
- **Versão:** `v1.0.0`
- **Desenvolvedor / Arquiteto:** Natan Billig
- **WhatsApp Oficial de Negócios:** `+595 994 195 695`
- **Projetos Iniciais Catalogados:**
  1. **ENBIK ERP** (ERP SaaS & Automação Fiscal)
  2. **Kofre** (Fintech Pessoal & Controle Orçamentário Multi-Moeda)
  3. **Controle Inteligente de Cheques** (IA Aplicada com Gemini Vision + WhatsApp)

---

## 2. Comandos Executados no Ciclo de Vida

### 2.1. Instalação e Configuração
```bash
# Instalação das dependências do Next.js 15, React 19, Tailwind CSS e Lucide
npm install

# Verificação estática de tipos e linting
npm run lint

# Build de produção otimizado com renderização estática pura (○ Static)
npm run build
```

### 2.2. Inicialização e Versionamento Git
```bash
git init
git add .
git commit -m "feat(showcase): initialize ENBK showcase catalog v1.0.0"
git tag -a v1.0.0 -m "Release v1.0.0 - ENBK Showcase Oficial"
```

---

## 3. Resumo da Auditoria da Tríade de Governança

### 3.1. QA & Performance Validator (`[APROVADO]`)
- **React Server Components (RSC):** Renderização no servidor para os componentes estáticos (`Hero`, `ProjectsGrid`, `ProjectCard`, `ContactSection`, `Footer`).
- **Otimização de Bundle:** Redução no tamanho da rota estática de **16.6 kB para 11.8 kB** (redução de ~29%).
- **Scroll Jank:** Flag `{ passive: true }` aplicada ao event listener da Navbar, mantendo 60/120fps fluido em mobile.
- **Acessibilidade & Semântica:** Landmarks HTML5 normalizados (`<Navbar>` e `<footer>` irmãos de `<main>`).
- **Prevenção de 404:** Criação do ativo vetorial `public/images/avatar.svg` com initials NB e moldura neon.

### 3.2. Cybersecurity & LGPD Auditor (`[APROVADO]`)
- **Conformidade LGPD (Lei 13.709/2018):** Minimização de dados, sem rastreadores ocultos ou cookies intrusivos; contato profissional amparado pelo Art. 7º, § 4º e IX.
- **Zero Secrets:** Nenhuma credencial de API, token ou segredo privado no repositório.
- **Confidencialidade Estrita:** Nenhuma menção a entidades ou projetos restritos.
- **OWASP Top 10:** Todos os links externos possuem `rel="noopener noreferrer"`. Ausência de XSS e injeção DOM.

---

## 4. Homologação Local & Procedimento de Deploy Vercel

### 4.1. Execução Local para Demonstração
```bash
npm run dev
# Acesse: http://localhost:3000
```

### 4.2. Conexão e Deploy na Vercel
Para publicar o projeto em ambiente de produção (ex: `enbk.vercel.app`), o repositório pode ser conectado diretamente via Vercel CLI ou GitHub:
```bash
# Via Vercel CLI (login rápido do desenvolvedor):
npx vercel

# Deploy de Produção definitivo:
npx vercel --prod
```
O projeto já está estruturado com presets nativos para Next.js 15 no Edge Network da Vercel.

---

## 5. Regra de Governança de Conteúdo Futuro (AG Rule)
Para inclusão ou alteração de qualquer projeto futuro no catálogo ENBK:
> **A regra do AG exige consulta prévia obrigatória:**  
> *"Deseja adicionar o projeto [Nome] ao catálogo ENBK?"*  
> Apenas após o "Sim" explícito do titular, a nova entrada é registrada em `src/data/projects.ts` e publicada.
