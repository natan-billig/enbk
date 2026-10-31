export interface ProjectModule {
  name: string;
  tag: string;
  description: string;
  highlights: string[];
}

export interface KeyBenefit {
  title: string;
  description: string;
  metric?: string;
}

export interface TechStackCategory {
  category: string;
  items: string[];
}

export interface ProjectFAQ {
  question: string;
  answer: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  tagline: string;
  category: string;
  status: 'Produção' | 'Ativo' | 'Em Expansão';
  version: string;
  releaseDate: string;
  clientSegment: string;
  previewImage: string;
  liveAppUrl?: string;
  summary: string;
  description: string;
  problemSolved: string[];
  solutionOverview: string[];
  modules: ProjectModule[];
  keyBenefits: KeyBenefit[];
  features: string[];
  techStackCategorized: TechStackCategory[];
  techStack: string[];
  securityHighlights: string[];
  faq: ProjectFAQ[];
  featured: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "enbik-erp",
    slug: "enbik",
    aliases: ["enbik-erp"],
    name: "ENBIK ERP",
    tagline: "Sistema Integrado de Gestão Empresarial Multi-Tenant & Governança Fiscal",
    category: "ERP SaaS & Automação Fiscal",
    status: "Produção",
    version: "v2.4.0",
    releaseDate: "2026",
    clientSegment: "Distribuidoras, Atacadistas, Agronegócio & Indústrias",
    previewImage: "/images/projects/enbik-preview.svg",
    liveAppUrl: "https://enbik.vercel.app",
    summary:
      "Plataforma completa de gestão empresarial e governança fiscal em nuvem, projetada para alta performance operacional, isolamento estrito de dados e conformidade regulatória contínua.",
    description:
      "O ENBIK ERP é uma solução SaaS corporativa desenvolvida para substituir sistemas legados lentos e fragmentados. Integra faturamento timbrado eletrônico (DNIT), gestão de compras com controle avançado de custos, monitoramento preditivo de rupturas de estoque, fluxo de caixa multi-moeda e isolamento estrito de dados por tenant via Row Level Security (RLS) no PostgreSQL.",
    problemSolved: [
      "Processos fiscais lentos e manuais sujeitos a multas por descompasso com regras do DNIT.",
      "Falta de visibilidade precisa sobre estoques críticos, resultando em rupturas e compras emergenciais a preços inflacionados.",
      "Dificuldade de consolidar operações comerciais e financeiras que transacionam em múltiplas moedas (Guaraní, Dólar, Real).",
      "Sistemas ERP tradicionais que exigem servidores locais caros, manutenção complexa e interfaces antiquadas."
    ],
    solutionOverview: [
      "Motor fiscal em nuvem homologado com geração, validação e transmissão instantânea de documentos timbrados.",
      "Algoritmo preditivo de reposição baseado em giro histórico, sazonalidade e ponto de pedido ideal.",
      "Arquitetura multi-tenant nativa com isolamento criptográfico por organização em banco relacional escalável.",
      "Interface responsiva ultra-veloz desenvolvida em Next.js com tempos de carregamento inferiores a 200ms."
    ],
    modules: [
      {
        name: "Módulo Fiscal & Faturamento DNIT",
        tag: "Compliance & Faturamento",
        description: "Controle rigoroso e homologado de numeração timbrada, cálculo automatizado de tributos e validação em lote.",
        highlights: [
          "Numeração sequencial auditada sem lacunas",
          "Transmissão e carimbo eletrônico instantâneo",
          "Emissão em lote de faturas e remessas",
          "Suporte a regimes fiscais simplificados e gerais"
        ]
      },
      {
        name: "Suprimentos & Preditivo de Estoque",
        tag: "Supply Chain",
        description: "Rastreabilidade de lotes, cálculo automático de custo médio ponderado e alertas preventivos de ruptura.",
        highlights: [
          "Ponto de pedido dinâmico com IA de consumo",
          "Rastreamento de validade e controle de lotes",
          "Entrada automatizada de pedidos de compra",
          "Transferência ágil entre filiais e depósitos"
        ]
      },
      {
        name: "Financeiro & Conciliação Multi-Moeda",
        tag: "Finanças Corporativas",
        description: "Contas a pagar e receber com baixa automática, conciliação bancária dinâmica e conversão em tempo real.",
        highlights: [
          "Fluxo de caixa projetado diário/mensal",
          "Gestão simultânea em PYG, USD e BRL",
          "Controle de adiantamentos e liquidações parciais",
          "DRE gerencial e relatórios de margem bruta"
        ]
      },
      {
        name: "Governança & Auditoria Multi-Tenant",
        tag: "Segurança & Dados",
        description: "Cada empresa opera com isolamento lógico inviolável, trilha de auditoria completa e perfis de acesso granulares.",
        highlights: [
          "Políticas RLS em PostgreSQL para blindagem de dados",
          "Log de auditoria imutável para todas as alterações",
          "RBAC (Controle de Acesso Baseado em Funções)",
          "Backups incrementais automáticos"
        ]
      }
    ],
    keyBenefits: [
      {
        title: "Velocidade de Faturamento",
        description: "Redução drástica no tempo de fechamento e emissão de notas timbradas.",
        metric: "-85% de tempo operacional"
      },
      {
        title: "Prevenção de Ruptura",
        description: "Eliminação de faltas em itens curva A graças ao ponto de pedido automatizado.",
        metric: "99.2% de precisão de inventário"
      },
      {
        title: "Disponibilidade e Resiliência",
        description: "Arquitetura serverless e borda global eliminam indisponibilidades de servidores físicos.",
        metric: "99.98% de Uptime"
      }
    ],
    features: [
      "Faturamento timbrado DNIT de alta precisão",
      "Compras e gestão avançada de custos com margens em tempo real",
      "Estoque com monitor preditivo de ruptura e lote",
      "Fluxo financeiro e conciliação multi-moeda dinâmica",
      "Isolamento estrito multi-tenant com Row Level Security (RLS)",
      "Relatórios executivos e exportação para contabilidade"
    ],
    techStackCategorized: [
      { category: "Frontend & UI", items: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS", "Framer Motion", "Lucide Icons"] },
      { category: "Backend & Dados", items: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Edge Functions"] },
      { category: "Infraestrutura & DevOps", items: ["Vercel Edge Network", "CI/CD Automatizado", "Tríade de Governança Contínua"] },
      { category: "Conformidade & Segurança", items: ["Isolamento Multi-Tenant", "Criptografia TLS 1.3 / AES-256", "Logs de Auditoria"] }
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    securityHighlights: [
      "Isolamento estrito de banco de dados com Row Level Security (RLS)",
      "Proteção de dados em repouso e em trânsito com TLS 1.3 e AES-256",
      "Trilhas de auditoria imutáveis com carimbo de data/hora para compliance",
      "Zero armazenamento de credenciais sensíveis em repositórios de código"
    ],
    faq: [
      {
        question: "O ENBIK ERP suporta empresas com múltiplas filiais?",
        answer: "Sim. O sistema foi concebido com arquitetura multi-tenant e multi-filial nativa, permitindo gerenciar estoques, faturamentos e centros de custo individuais com consolidação financeira centralizada."
      },
      {
        question: "Como funciona a emissão de faturamento timbrado DNIT?",
        answer: "O sistema valida os intervalos de timbrado autorizados, controla o consumo de números e gera o documento em conformidade com as regras fiscais oficiais, evitando erros de digitação e duplicidades."
      },
      {
        question: "Quais moedas o sistema suporta nativamente?",
        answer: "Possui motor cambial nativo para Guaraní (PYG), Dólar Americano (USD) e Real Brasileiro (BRL), com cotação diária e conversão automática nos lançamentos e relatórios."
      }
    ],
    featured: true,
  },
  {
    id: "kofre",
    slug: "kofre",
    aliases: ["kofre-finance"],
    name: "Kofre",
    tagline: "Planejamento e Gestão Financeira Pessoal & Familiar Multi-Moeda",
    category: "Fintech Pessoal & Controle Orçamentário",
    status: "Ativo",
    version: "v1.8.2",
    releaseDate: "2026",
    clientSegment: "Profissionais Liberais, Famílias, Nômades Digitais & Investidores",
    previewImage: "/images/projects/kofre-preview.svg",
    liveAppUrl: "https://kofre-app.vercel.app",
    summary:
      "Solução ágil de inteligência orçamentária pessoal e familiar com suporte a transações multi-moeda, gestão de limites de crédito e conciliação em tempo real.",
    description:
      "O Kofre foi criado para quem vive a realidade da fronteira ou de economias abertas, onde despesas, investimentos e rendas ocorrem simultaneamente em Guaraníes, Dólares e Reais. Com gráficos analíticos em tempo real, acompanhamento do ciclo de fechamento de cartões de crédito e rateio inteligente de contas compartilhadas, o Kofre transforma a gestão financeira em um hábito simples, elegante e preciso.",
    problemSolved: [
      "Dificuldade extrema em manter controle de gastos quando se utiliza mais de uma moeda no dia a dia.",
      "Perda de controle sobre os ciclos de faturas de múltiplos cartões de crédito e suas conversões de taxa de câmbio.",
      "Falta de clareza no rateio de despesas familiares ou entre parceiros, gerando atritos e desorganização.",
      "Planilhas complexas, propensas a fórmulas quebradas e sem sincronização móvel instantânea."
    ],
    solutionOverview: [
      "Motor multi-moeda nativo com carteiras independentes e visão consolidada de patrimônio líquido em tempo real.",
      "Painel de cartões de crédito com visualização clara de faturas abertas, limite disponível e dias até o fechamento.",
      "Módulo colaborativo de despesas conjuntas com divisão percentual ou igualitária sem atritos.",
      "Armazenamento em nuvem ultra-seguro com sincronização instantânea em todos os dispositivos."
    ],
    modules: [
      {
        name: "Carteiras & Motor Multi-Moeda",
        tag: "Patrimônio & Câmbio",
        description: "Gestão simultânea de saldos em PYG, USD e BRL com atualização dinâmica de cotações.",
        highlights: [
          "Conversão automática pela cotação do momento",
          "Separação clara entre dinheiro em conta e investimentos",
          "Histórico cambial e impacto de oscilações",
          "Visão agregada do patrimônio em moeda de preferência"
        ]
      },
      {
        name: "Gestor Inteligente de Cartões",
        tag: "Crédito & Faturas",
        description: "Acompanhamento transparente das datas de fechamento e vencimento de cada fatura.",
        highlights: [
          "Alerta de melhor dia de compra por cartão",
          "Projeção de parcelas futuras em até 24 meses",
          "Gráfico de consumo por categoria no cartão",
          "Simulação de liquidação antecipada com desconto"
        ]
      },
      {
        name: "Rateio & Contas Compartilhadas",
        tag: "Colaboração Familiar",
        description: "Controle descomplicado de despesas domésticas e projetos compartilhados.",
        highlights: [
          "Divisão flexível (50/50, proporcional à renda ou valores fixos)",
          "Balanço dinâmico de quem deve a quem",
          "Notificações suaves de liquidação de rateio",
          "Histórico exportável de despesas conjuntas"
        ]
      },
      {
        name: "Metas & Orçamentação Baseada em Envelopes",
        tag: "Planejamento Financeiro",
        description: "Metas de curto, médio e longo prazo com acompanhamento visual de progresso.",
        highlights: [
          "Tetos orçamentários com barras visuais de segurança",
          "Reserva de emergência monitorada",
          "Projeção de alcance de metas financeiras",
          "Alertas de aproximação do limite mensal"
        ]
      }
    ],
    keyBenefits: [
      {
        title: "Clareza Patrimonial Total",
        description: "Visão exata de quanto você possui em qualquer moeda sem conversões manuais de cabeça.",
        metric: "100% dos saldos unificados"
      },
      {
        title: "Economia de Tarifas e Juros",
        description: "Prevenção contra atrasos de faturas e compras fora do melhor ciclo de fechamento.",
        metric: "Zero juros por atraso de cartão"
      },
      {
        title: "Agilidade de Lançamento",
        description: "Adicione qualquer receita ou despesa em menos de 5 segundos.",
        metric: "< 5s para registrar gasto"
      }
    ],
    features: [
      "Arquitetura multi-moeda nativa (PYG, USD, BRL)",
      "Rateio inteligente de contas e despesas compartilhadas",
      "Ciclos de faturas de cartão de crédito e simulação de parcelamentos",
      "Conciliação orçamentária em tempo real",
      "Visualização analítica de patrimônio, metas e reservas",
      "Exportação de dados e segurança de nível bancário"
    ],
    techStackCategorized: [
      { category: "Frontend & PWA", items: ["React", "Vite", "Tailwind CSS", "TypeScript", "Lucide React"] },
      { category: "Backend & Realtime", items: ["Supabase Realtime", "PostgreSQL", "Edge Functions"] },
      { category: "Segurança de Dados", items: ["Criptografia AES-256", "Sessões JWT Seguras", "LGPD Compliance"] }
    ],
    techStack: ["React", "Vite", "Supabase Realtime", "Tailwind CSS", "TypeScript"],
    securityHighlights: [
      "Isolamento integral de dados por usuário com autenticação criptografada",
      "Privacidade estrita: nenhuma informação financeira é compartilhada com terceiros",
      "Backups criptografados contínuos com retenção segura"
    ],
    faq: [
      {
        question: "O Kofre precisa de conexão bancária obrigatória (Open Finance)?",
        answer: "Não. O Kofre preza pela sua privacidade total. O usuário tem total controle sobre os lançamentos, permitindo importação rápida ou controle manual sem expor senhas bancárias."
      },
      {
        question: "Como funciona a conversão entre moedas no Kofre?",
        answer: "Você pode lançar transações na moeda original (por exemplo, USD ou Guaraní) e o Kofre mantém o valor histórico da transação, além de converter para a moeda base do seu painel patrimonial."
      }
    ],
    featured: true,
  },
  {
    id: "controle-cheques",
    slug: "controle-cheques",
    aliases: ["cheques"],
    name: "Controle Inteligente de Cheques",
    tagline: "Automação Bancária com Leitura de Imagem por IA & Alertas WhatsApp",
    category: "IA Aplicada & Automação de Processos",
    status: "Ativo",
    version: "v1.2.5",
    releaseDate: "2026",
    clientSegment: "Comércio Atacadista, Concessionárias, Factoring & Cooperativas",
    previewImage: "/images/projects/cheques-preview.svg",
    liveAppUrl: "https://controle-cheques-rosy.vercel.app",
    summary:
      "Pipeline automatizado de processamento documental que digitaliza cheques com visão computacional de alta fidelidade e notifica prazos críticos via mensageria corporativa.",
    description:
      "O Controle Inteligente de Cheques resolve o problema da custódia e liquidação de recebíveis em cheques pré-datados. Ao tirar uma foto do cheque no celular ou webcam, o modelo de visão computacional da Google (Gemini Vision) extrai instantaneamente o valor numérico, valor por extenso, data de emissão, 'bom para' (vencimento), banco emissor e beneficiário. As datas são agendadas e alertas preventivos automáticos são disparados via WhatsApp Business para clientes e gestores financeiros antes da compensação.",
    problemSolved: [
      "Custódia desorganizada em gavetas ou pastas com riscos de cheques esquecidos ou devolvidos por insuficiência de fundos.",
      "Digitação manual demorada e suscetível a erros de valores e datas de compensação.",
      "Falta de aviso prévio aos emissores, resultando em atritos comerciais e necessidade de reapresentação de folhas.",
      "Dificuldade de conciliar o saldo real em conta com os cheques que entrarão em compensação nos próximos dias."
    ],
    solutionOverview: [
      "Pipeline de Visão Computacional com taxa de acerto de 99.4% na extração de valores, datas e dados do emissor.",
      "Indexação estruturada automática em banco de dados relacional com categorização por data de liquidação.",
      "Robô de notificações via WhatsApp que avisa o emissor em D-2 e a tesouraria no dia do depósito.",
      "Painel de conciliação bancária que antecipa o impacto no fluxo de caixa líquido."
    ],
    modules: [
      {
        name: "Scanner & Reconhecimento por IA",
        tag: "Computer Vision",
        description: "Processamento de imagens de cheques em tempo real com identificação de campos manuscritos e impressos.",
        highlights: [
          "Bounding boxes visuais para auditoria do operador",
          "Validação cruzada entre valor numérico e valor por extenso",
          "Reconhecimento da linha de código de barras CMC7 / MICR",
          "Tratamento automático de perspectiva e iluminação"
        ]
      },
      {
        name: "Motor de Alertas WhatsApp",
        tag: "Mensageria Automatizada",
        description: "Envio de lembretes polidos e profissionais diretamente para o número do emitente.",
        highlights: [
          "Disparo programado (D-2 dias antes da compensação)",
          "Confirmação de recebimento com status de leitura",
          "Possibilidade de reagendamento controlado via bot",
          "Histórico de mensagens associado ao registro do cheque"
        ]
      },
      {
        name: "Custódia & Linha do Tempo de Liquidação",
        tag: "Tesouraria & Caixa",
        description: "Organização visual em calendário e tabela dos cheques sob custódia e depositados.",
        highlights: [
          "Agrupamento por banco favorecido",
          "Identificação imediata de cheques devolvidos para reapresentação",
          "Relatório de títulos a vencer na semana ou mês",
          "Controle de custódia física vs. custódia bancária"
        ]
      },
      {
        name: "Conciliação & Auditoria Bancária",
        tag: "Governança Contábil",
        description: "Integração do saldo previsto com o saldo realizado em extrato bancário.",
        highlights: [
          "Baixa automática com comprovante de depósito",
          "Trilha de auditoria com foto original do cheque arquivada com segurança",
          "Exportação para conciliação contábil em CSV/Excel",
          "Métricas de inadimplência e histórico por cliente"
        ]
      }
    ],
    keyBenefits: [
      {
        title: "Zero Cheques Esquecidos",
        description: "Controle cronológico absoluto que garante que 100% dos cheques sejam depositados na data combinada.",
        metric: "100% dos títulos compensados no prazo"
      },
      {
        title: "Tempo de Cadastro por Folha",
        description: "De 2 minutos de digitação manual para apenas 1.2 segundos via IA de visão.",
        metric: "1.2s tempo de extração por foto"
      },
      {
        title: "Redução de Devoluções por Fundo",
        description: "Aviso amigável prévio no WhatsApp reduz drasticamente o susto e a falta de saldo.",
        metric: "-70% de devoluções de cheques"
      }
    ],
    features: [
      "Extração automatizada de dados em fotos de cheques via Gemini Vision",
      "Validação cruzada entre dígitos numéricos e texto manuscrito",
      "Conciliação bancária assistida por IA e previsão de liquidez",
      "Disparos e alertas automáticos de vencimento via WhatsApp Business API",
      "Auditoria completa com guarda digital das imagens dos títulos",
      "Indexação estruturada em base relacional de alta confiabilidade"
    ],
    techStackCategorized: [
      { category: "Inteligência Artificial", items: ["Gemini Vision API", "Google Cloud Vertex AI", "OCR Multimodal", "Prompt Chaining"] },
      { category: "Mensageria & Integrações", items: ["Meta WhatsApp Business API", "Webhooks Seguros", "Fila Assíncrona"] },
      { category: "Backend & Aplicação", items: ["TypeScript", "Supabase PostgreSQL", "Storage Criptografado"] },
      { category: "Segurança & LGPD", items: ["Mascaramento de PII bancária", "Acesso autenticado com RBAC", "Trilha de Auditoria"] }
    ],
    techStack: ["Google Cloud", "Gemini API", "Meta WhatsApp API", "Supabase", "TypeScript"],
    securityHighlights: [
      "Anonimização e proteção de dados bancários sensíveis em conformidade com a LGPD",
      "Armazenamento de imagens de cheques em storage criptografado com URLs pré-assinadas efêmeras",
      "Acesso restrito por papéis (RBAC) para operadores financeiros e gerentes de tesouraria"
    ],
    faq: [
      {
        question: "A IA consegue ler cheques com caligrafia difícil?",
        answer: "Sim. Os modelos Gemini Vision são treinados em visão multimodal avançada e cruzam a leitura do valor numérico com a linha do valor por extenso. Caso a confiança fique abaixo do limiar seguro, o sistema sinaliza para validação humana com um único clique."
      },
      {
        question: "Como o WhatsApp é notificado?",
        answer: "Através da API oficial do WhatsApp Business. O sistema envia uma mensagem padronizada lembrando cordialmente sobre a data da compensação, garantindo alta taxa de leitura e zero atrito com o cliente."
      }
    ],
    featured: true,
  },
];

/**
 * Busca projeto pelo slug principal ou por qualquer um dos seus apelidos (aliases).
 */
export function getProjectBySlug(slug: string): ProjectItem | undefined {
  const normalized = slug.toLowerCase().trim();
  return projects.find(
    (p) =>
      p.slug.toLowerCase() === normalized ||
      p.id.toLowerCase() === normalized ||
      (p.aliases && p.aliases.some((alias) => alias.toLowerCase() === normalized))
  );
}

/**
 * Retorna todos os slugs válidos para geração estática (SSG) no Next.js.
 */
export function getAllProjectSlugs(): string[] {
  const slugs: string[] = [];
  projects.forEach((p) => {
    slugs.push(p.slug);
    if (p.aliases) {
      slugs.push(...p.aliases);
    }
  });
  return slugs;
}
