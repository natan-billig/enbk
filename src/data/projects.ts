export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: 'Produção' | 'Ativo' | 'Em Expansão';
  description: string;
  features: string[];
  techStack: string[];
  link?: string;
  featured: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "enbik-erp",
    name: "ENBIK ERP",
    tagline: "Sistema Integrado de Gestão Empresarial Multi-Tenant",
    category: "ERP SaaS & Automação Fiscal",
    status: "Produção",
    description:
      "Plataforma completa de gestão empresarial e governança fiscal em nuvem, projetada para alta performance operacional, isolamento estrito de dados e conformidade regulatória contínua.",
    features: [
      "Faturamento timbrado DNIT",
      "Compras e gestão avançada de custos",
      "Estoque com monitor preditivo de ruptura",
      "Fluxo financeiro e conciliação dinâmica",
      "Isolamento estrito multi-tenant de dados"
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    featured: true,
  },
  {
    id: "kofre",
    name: "Kofre",
    tagline: "Planejamento e Gestão Financeira Pessoal / Familiar",
    category: "Fintech Pessoal & Controle Orçamentário",
    status: "Ativo",
    description:
      "Solução ágil de inteligência orçamentária pessoal e familiar com suporte a transações multi-moeda, gestão de limites de crédito e conciliação em tempo real.",
    features: [
      "Arquitetura multi-moeda nativa (PYG, USD, BRL)",
      "Rateio inteligente de contas e despesas compartilhadas",
      "Ciclos de faturas de cartão de crédito",
      "Conciliação orçamentária em tempo real",
      "Visualização analítica de patrimônio e metas"
    ],
    techStack: ["React", "Vite", "Supabase Realtime", "Tailwind CSS", "TypeScript"],
    featured: true,
  },
  {
    id: "controle-cheques",
    name: "Controle Inteligente de Cheques",
    tagline: "Automação Bancária com Leitura de Imagem por IA",
    category: "IA Aplicada & Automação de Processos",
    status: "Ativo",
    description:
      "Pipeline automatizado de processamento documental que digitaliza cheques com visão computacional de alta fidelidade e notifica prazos críticos via mensageria corporativa.",
    features: [
      "Extração automatizada de dados em fotos de cheques via Gemini Vision",
      "Conciliação bancária assistida por IA",
      "Disparos e alertas automáticos de vencimento via WhatsApp",
      "Auditoria e rastreamento de liquidação",
      "Indexação estruturada em base relacional"
    ],
    techStack: ["Google Cloud", "Gemini API", "Meta WhatsApp API", "Supabase", "TypeScript"],
    featured: true,
  },
];
