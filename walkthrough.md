# Walkthrough de Implementação & Deploy • ENBK Showcase

Este documento sintetiza a arquitetura, etapas executadas, validações técnicas e links oficiais de homologação e produção do **ENBK Showcase**.

---

## 1. Visão Geral do Projeto
O **ENBK Showcase** é o portal e catálogo oficial dos softwares e soluções de engenharia desenvolvidos por **Natan Billig**. 
Desenvolvido com foco em estética minimalista e futurista, carregamento ultra veloz, acessibilidade total e estrita conformidade regulatória.

- **Nome Oficial:** ENBK
- **Versão:** `v1.0.0`
- **Desenvolvedor / Arquiteto:** Natan Billig
- **WhatsApp Oficial de Negócios:** `+595 994 195 695`
- **GitHub Oficial:** [https://github.com/natan-billig/enbk](https://github.com/natan-billig/enbk)
- **URL Oficial de Produção (Vercel):** [https://enbk.vercel.app](https://enbk.vercel.app)
- **Aliases de Produção:**
  - `https://enbk.vercel.app`
  - `https://enbk-billig3.vercel.app`
  - `https://enbk-git-main-billig3.vercel.app`

---

## 2. Projetos Iniciais Catalogados
1. **ENBIK ERP** (ERP SaaS & Automação Fiscal)
   - Faturamento timbrado DNIT, compras e custos, estoque com monitor de ruptura, fluxo financeiro e isolamento estrito de dados.
2. **Kofre** (Fintech Pessoal & Controle Orçamentário)
   - Arquitetura multi-moeda nativa (PYG, USD, BRL), rateio inteligente de contas, faturas de cartão de crédito e conciliação em tempo real.
3. **Controle Inteligente de Cheques** (IA Aplicada & Automação de Processos)
   - Extração automatizada de dados em fotos de cheques via Gemini Vision, conciliação e disparos de alertas de vencimento via WhatsApp.

---

## 3. Comandos Executados no Ciclo de Vida

### 3.1. Instalação e Configuração
```bash
# Instalação das dependências do Next.js 15, React 19, Tailwind CSS e Lucide
npm install

# Verificação estática de tipos e linting (0 erros / 0 avisos)
npm run lint

# Build de produção otimizado com renderização estática pura (○ Static)
npm run build
```

### 3.2. Versionamento Git & GitHub
```bash
git init
git add .
git commit -m "feat(showcase): initialize ENBK showcase catalog v1.0.0"
git tag -a v1.0.0 -m "Release v1.0.0 - ENBK Showcase Oficial"
git remote add origin https://github.com/natan-billig/enbk.git
git push -u origin main --tags
```

### 3.3. Deploy Contínuo na Vercel
- **Project ID:** `prj_GHou1LnUZafwV4fZtL8hZo6tiDEs`
- **Deployment ID:** `dpl_D6Mz9nYkvJw74AE8T9gjAJsyJMLZ`
- **Ambiente:** `production`
- **Resultado da Verificação:** HTTP 200 OK com Vercel Edge Cache HIT.

---

## 4. Auditoria da Tríade de Governança

### 4.1. QA & Performance Validator (`[APROVADO]`)
- **React Server Components (RSC):** Renderização no servidor para os componentes estáticos (`Hero`, `ProjectsGrid`, `ProjectCard`, `ContactSection`, `Footer`).
- **Otimização de Bundle:** Redução no tamanho da rota estática de **16.6 kB para 11.8 kB** (redução de ~29%).
- **Scroll Jank:** Flag `{ passive: true }` aplicada ao event listener da Navbar, mantendo 60/120fps fluido em mobile.
- **Acessibilidade & Semântica:** Landmarks HTML5 normalizados (`<Navbar>` e `<footer>` irmãos de `<main>`).
- **Prevenção de 404:** Criação do ativo vetorial `public/images/avatar.svg` com initials NB e moldura neon.

### 4.2. Cybersecurity & LGPD Auditor (`[APROVADO]`)
- **Conformidade LGPD (Lei 13.709/2018):** Minimização de dados, sem rastreadores ocultos ou cookies intrusivos; contato profissional amparado pelo Art. 7º, § 4º e IX.
- **Zero Secrets:** Nenhuma credencial de API, token ou segredo privado no repositório.
- **Confidencialidade Estrita:** Nenhuma menção a entidades ou projetos restritos.
- **OWASP Top 10:** Todos os links externos possuem `rel="noopener noreferrer"`. Ausência de XSS e injeção DOM.

---

## 5. Regra de Governança de Conteúdo Futuro (AG Rule)
Para inclusão ou alteração de qualquer projeto futuro no catálogo ENBK:
> **A regra do AG exige consulta prévia obrigatória:**  
> *"Deseja adicionar o projeto [Nome] ao catálogo ENBK?"*  
> Apenas após o "Sim" explícito do titular, a nova entrada é registrada em `src/data/projects.ts` e publicada.
