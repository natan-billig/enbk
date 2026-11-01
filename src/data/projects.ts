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
  status: 'Producción' | 'Activo' | 'En Expansión';
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
    tagline: "Sistema Integrado de Gestión Empresarial Multi-Tenant & Gobernanza Fiscal",
    category: "ERP SaaS & Automatización Fiscal",
    status: "Producción",
    version: "v2.4.0",
    releaseDate: "2026",
    clientSegment: "Distribuidoras, Mayoristas, Agronegocios & Industrias",
    previewImage: "/images/projects/enbik-preview.png",
    liveAppUrl: "https://enbik.vercel.app",
    summary:
      "Plataforma integral de gestión empresarial y gobernanza fiscal en la nube, diseñada para alto rendimiento operativo, aislamiento estricto de datos y cumplimiento regulatorio continuo.",
    description:
      "ENBIK ERP es una solución SaaS corporativa desarrollada para reemplazar sistemas legados lentos y fragmentados. Integra facturación timbrada electrónica (DNIT), gestión de compras con control avanzado de costos, monitoreo predictivo de quiebres de stock, flujo de caja multimoneda y aislamiento estricto de datos por tenant mediante Row Level Security (RLS) en PostgreSQL.",
    problemSolved: [
      "Procesos fiscales lentos y manuales expuestos a sanciones por desfasaje con las normativas de la DNIT.",
      "Falta de visibilidad precisa sobre inventarios críticos, generando quiebres de stock y compras de emergencia a precios inflados.",
      "Dificultad para consolidar operaciones comerciales y financieras que transaccionan en múltiples monedas (Guaraní, Dólar, Real).",
      "Sistemas ERP tradicionales que requieren costosos servidores locales, mantenimiento complejo e interfaces obsoletas."
    ],
    solutionOverview: [
      "Motor fiscal en la nube homologado con generación, validación y transmisión instantánea de documentos timbrados.",
      "Algoritmo predictivo de reposición basado en rotación histórica, estacionalidad y punto de pedido óptimo.",
      "Arquitectura multi-tenant nativa con aislamiento criptográfico por organización en base de datos relacional escalable.",
      "Interfaz responsiva ultra veloz desarrollada en Next.js con tiempos de carga inferiores a 200ms."
    ],
    modules: [
      {
        name: "Módulo Fiscal & Facturación DNIT",
        tag: "Compliance & Facturación",
        description: "Control riguroso y homologado de numeración timbrada, cálculo automatizado de tributos y validación por lotes.",
        highlights: [
          "Numeración secuencial auditada sin saltos",
          "Transmisión y timbrado electrónico instantáneo",
          "Emisión masiva de facturas y remisiones",
          "Soporte para regímenes fiscales simplificados y generales"
        ]
      },
      {
        name: "Suministros & Predictivo de Inventario",
        tag: "Cadena de Suministro",
        description: "Trazabilidad de lotes, cálculo automático de costo promedio ponderado y alertas preventivas de quiebre.",
        highlights: [
          "Punto de pedido dinámico con IA de consumo",
          "Seguimiento de vencimientos y control de lotes",
          "Recepción automatizada de órdenes de compra",
          "Transferencias ágiles entre sucursales y depósitos"
        ]
      },
      {
        name: "Finanzas & Conciliación Multimoneda",
        tag: "Finanzas Corporativas",
        description: "Cuentas por pagar y cobrar con liquidación automática, conciliación bancaria dinámica y conversión en tiempo real.",
        highlights: [
          "Flujo de caja proyectado diario y mensual",
          "Gestión simultánea en PYG, USD y BRL",
          "Control de anticipos y liquidaciones parciales",
          "Estado de resultados y reportes de margen bruto"
        ]
      },
      {
        name: "Gobernanza & Auditoría Multi-Tenant",
        tag: "Seguridad & Datos",
        description: "Cada empresa opera con aislamiento lógico inviolable, pista de auditoría completa y perfiles de acceso granulares.",
        highlights: [
          "Políticas RLS en PostgreSQL para blindaje de datos",
          "Registro de auditoría inmutable para todas las modificaciones",
          "RBAC (Control de Acceso Basado en Roles)",
          "Copias de seguridad incrementales automáticas"
        ]
      }
    ],
    keyBenefits: [
      {
        title: "Velocidad de Facturación",
        description: "Reducción drástica en los tiempos de cierre y emisión de facturas timbradas.",
        metric: "-85% de tiempo operativo"
      },
      {
        title: "Prevención de Quiebres",
        description: "Eliminación de faltantes en ítems curva A gracias al punto de pedido automatizado.",
        metric: "99.2% de precisión de inventario"
      },
      {
        title: "Disponibilidad y Resiliencia",
        description: "Arquitectura serverless y red global de borde que eliminan caídas de servidores físicos.",
        metric: "99.98% de Uptime"
      }
    ],
    features: [
      "Facturación timbrada DNIT de alta precisión",
      "Compras y gestión avanzada de costos con márgenes en tiempo real",
      "Inventario con monitor predictivo de quiebre y lotes",
      "Flujo financiero y conciliación multimoneda dinámica",
      "Aislamiento estricto multi-tenant con Row Level Security (RLS)",
      "Reportes ejecutivos y exportación para contabilidad"
    ],
    techStackCategorized: [
      { category: "Frontend & UI", items: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS", "Framer Motion", "Lucide Icons"] },
      { category: "Backend & Datos", items: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Edge Functions"] },
      { category: "Infraestructura & DevOps", items: ["Red Global Vercel Edge", "CI/CD Automatizado", "Tríada de Gobernanza Continua"] },
      { category: "Cumplimiento & Seguridad", items: ["Aislamiento Multi-Tenant", "Cifrado TLS 1.3 / AES-256", "Registros de Auditoría"] }
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    securityHighlights: [
      "Aislamiento estricto en base de datos con Row Level Security (RLS)",
      "Protección de datos en reposo y en tránsito con TLS 1.3 y AES-256",
      "Pistas de auditoría inmutables con sello de tiempo para compliance",
      "Cero almacenamiento de credenciales sensibles en repositorios de código"
    ],
    faq: [
      {
        question: "¿ENBIK ERP soporta empresas con múltiples sucursales?",
        answer: "Sí. El sistema fue concebido con arquitectura multi-tenant y multisucursal nativa, permitiendo administrar inventarios, facturación y centros de costos individuales con consolidación financiera centralizada."
      },
      {
        question: "¿Cómo funciona la emisión de facturación timbrada DNIT?",
        answer: "El sistema valida los rangos de timbrado autorizados, controla el consumo correlativo y genera el documento en estricta conformidad con las normas fiscales oficiales, eliminando errores de digitación y duplicidades."
      },
      {
        question: "¿Qué monedas admite el sistema de forma nativa?",
        answer: "Cuenta con motor cambiario nativo para Guaraní (PYG), Dólar Estadounidense (USD) y Real Brasileño (BRL), con cotización diaria y conversión automática en asientos y reportes."
      }
    ],
    featured: true,
  },
  {
    id: "kofre",
    slug: "kofre",
    aliases: ["kofre-finance"],
    name: "Kofre",
    tagline: "Planificación y Gestión Financiera Personal & Familiar Multimoneda",
    category: "Fintech Personal & Control Presupuestario",
    status: "Activo",
    version: "v1.8.2",
    releaseDate: "2026",
    clientSegment: "Profesionales Independientes, Familias, Nómadas Digitales & Inversores",
    previewImage: "/images/projects/kofre-preview.png",
    liveAppUrl: "https://kofre-app.vercel.app",
    summary:
      "Solución ágil de inteligencia presupuestaria personal y familiar con soporte para transacciones multimoneda, gestión de límites de crédito y conciliación en tiempo real.",
    description:
      "Kofre fue creado para quienes viven la realidad fronteriza o de economías abiertas, donde los gastos, inversiones e ingresos ocurren simultáneamente en Guaraníes, Dólares y Reales. Con gráficos analíticos en tiempo real, seguimiento del ciclo de cierre de tarjetas de crédito y división inteligente de gastos compartidos, Kofre convierte la gestión financiera en un hábito simple, elegante y preciso.",
    problemSolved: [
      "Dificultad extrema para mantener el control de gastos al utilizar más de una moneda en el día a día.",
      "Pérdida de control sobre los ciclos de facturación de múltiples tarjetas de crédito y sus conversiones de tipo de cambio.",
      "Falta de claridad en la división de gastos familiares o en pareja, generando fricciones y desorden.",
      "Planillas de cálculo complejas, propensas a fórmulas rotas y sin sincronización móvil instantánea."
    ],
    solutionOverview: [
      "Motor multimoneda nativo con billeteras independientes y vista consolidada de patrimonio neto en tiempo real.",
      "Panel de tarjetas de crédito con visualización clara de resúmenes abiertos, límite disponible y días restantes hasta el cierre.",
      "Módulo colaborativo de gastos compartidos con división porcentual o equitativa sin fricciones.",
      "Almacenamiento ultra seguro en la nube con sincronización instantánea en todos los dispositivos."
    ],
    modules: [
      {
        name: "Billeteras & Motor Multimoneda",
        tag: "Patrimonio & Divisas",
        description: "Gestión simultánea de saldos en PYG, USD e BRL con actualización dinámica de cotizaciones.",
        highlights: [
          "Conversión automática según la cotización del momento",
          "Separación clara entre dinero disponible e inversiones",
          "Historial cambiario e impacto de oscilaciones",
          "Vista agregada del patrimonio en la moneda preferida"
        ]
      },
      {
        name: "Gestor Inteligente de Tarjetas",
        tag: "Crédito & Resúmenes",
        description: "Seguimiento transparente de fechas de cierre y vencimiento de cada tarjeta de crédito.",
        highlights: [
          "Alerta del mejor día de compra por tarjeta",
          "Proyección de cuotas futuras hasta en 24 meses",
          "Gráfico de consumos por categoría en tarjeta",
          "Simulación de cancelación anticipada con descuento"
        ]
      },
      {
        name: "División & Cuentas Compartidas",
        tag: "Colaboración Familiar",
        description: "Control sin complicaciones de gastos del hogar y proyectos compartidos.",
        highlights: [
          "División flexible (50/50, proporcional a ingresos o montos fijos)",
          "Balance dinámico de quién debe a quién",
          "Notificaciones cordiales de liquidación de cuentas",
          "Historial exportable de gastos conjuntos"
        ]
      },
      {
        name: "Metas & Presupuesto por Sobres",
        tag: "Planificación Financiera",
        description: "Objetivos de corto, mediano y largo plazo con seguimiento visual de progreso.",
        highlights: [
          "Topes presupuestarios con barras visuales de seguridad",
          "Fondo de emergencia monitoreado",
          "Proyección de alcance de metas financieras",
          "Alertas de proximidad al límite mensual"
        ]
      }
    ],
    keyBenefits: [
      {
        title: "Claridad Patrimonial Total",
        description: "Visión exacta de cuánto posees en cualquier moneda sin conversiones mentales.",
        metric: "100% de saldos unificados"
      },
      {
        title: "Ahorro en Comisiones e Intereses",
        description: "Prevención contra retrasos de resúmenes y compras fuera del ciclo óptimo.",
        metric: "Cero intereses por retraso de tarjeta"
      },
      {
        title: "Agilidad de Registro",
        description: "Registra cualquier ingreso o gasto en menos de 5 segundos.",
        metric: "< 5s para registrar gasto"
      }
    ],
    features: [
      "Arquitectura multimoneda nativa (PYG, USD, BRL)",
      "División inteligente de cuentas y gastos compartidos",
      "Ciclos de resúmenes de tarjeta de crédito y simulación de cuotas",
      "Conciliación presupuestaria en tiempo real",
      "Visualización analítica de patrimonio, metas y reservas",
      "Exportación de datos y seguridad de nivel bancario"
    ],
    techStackCategorized: [
      { category: "Frontend & PWA", items: ["React", "Vite", "Tailwind CSS", "TypeScript", "Lucide React"] },
      { category: "Backend & Tiempo Real", items: ["Supabase Realtime", "PostgreSQL", "Edge Functions"] },
      { category: "Seguridad de Datos", items: ["Cifrado AES-256", "Sesiones JWT Seguras", "Cumplimiento de Privacidad"] }
    ],
    techStack: ["React", "Vite", "Supabase Realtime", "Tailwind CSS", "TypeScript"],
    securityHighlights: [
      "Aislamiento total de datos por usuario con autenticación cifrada",
      "Privacidad estricta: ninguna información financiera se comparte con terceros",
      "Copias de seguridad cifradas continuas con retención segura"
    ],
    faq: [
      {
        question: "¿Kofre requiere conexión bancaria obligatoria (Open Finance)?",
        answer: "No. Kofre prioriza tu privacidad absoluta. El usuario mantiene el control total de los registros, permitiendo importación rápida o control manual sin exponer credenciales bancarias."
      },
      {
        question: "¿Cómo funciona la conversión entre monedas en Kofre?",
        answer: "Puedes registrar transacciones en la moneda original (por ejemplo, USD o Guaraní) y Kofre preserva el valor histórico de la operación, además de convertir a la moneda base de tu panel patrimonial."
      }
    ],
    featured: true,
  },
  {
    id: "controle-cheques",
    slug: "controle-cheques",
    aliases: ["cheques"],
    name: "Control Inteligente de Cheques",
    tagline: "Automatización Bancaria con Lectura de Imagen por IA & Alertas de WhatsApp",
    category: "IA Aplicada & Automatización de Procesos",
    status: "Activo",
    version: "v1.2.5",
    releaseDate: "2026",
    clientSegment: "Comercio Mayorista, Concesionarias, Factoring & Cooperativas",
    previewImage: "/images/projects/cheques-preview.png",
    liveAppUrl: "https://controle-cheques-rosy.vercel.app",
    summary:
      "Pipeline automatizado de procesamiento documental que digitaliza cheques con visión computacional de alta fidelidad y notifica plazos críticos mediante mensajería corporativa.",
    description:
      "Control Inteligente de Cheques resuelve el problema de la custodia y liquidación de cheques diferidos y a cobrar. Al tomar una fotografía del cheque con el teléfono móvil o cámara, el modelo de visión multimodal de Google (Gemini Vision) extrae instantáneamente el importe numérico, importe en letras, fecha de emisión, fecha de vencimiento ('bueno para'), banco emisor y beneficiario. Las fechas se programan y se disparan alertas preventivas automáticas por WhatsApp Business a clientes y gestores de tesorería antes de la compensación.",
    problemSolved: [
      "Custodia desorganizada en carpetas o gavetas con riesgo de cheques olvidados o rechazados por fondos insuficientes.",
      "Carga manual lenta y susceptible a errores de importes y fechas de compensación.",
      "Falta de aviso previo a los libradores, generando fricciones comerciales y necesidad de representación de documentos.",
      "Dificultad para conciliar el saldo real en cuenta con los cheques que entrarán en compensación en los próximos días."
    ],
    solutionOverview: [
      "Pipeline de Visión Computacional con tasa de precisión del 99.4% en la extracción de importes, fechas y datos del librador.",
      "Indexación estructurada automática en base de datos relacional con categorización por fecha de liquidación.",
      "Bot de notificaciones vía WhatsApp que avisa al librador en D-2 y a la tesorería el día del depósito.",
      "Panel de conciliación bancaria que anticipa el impacto en el flujo de caja neto."
    ],
    modules: [
      {
        name: "Escáner & Reconocimiento por IA",
        tag: "Computer Vision",
        description: "Procesamiento de imágenes de cheques en tiempo real con identificación de campos manuscritos e impresos.",
        highlights: [
          "Cuadros delimitadores visuales para auditoría del operador",
          "Validación cruzada entre importe numérico y en letras",
          "Reconocimiento de la línea de código de barras CMC7 / MICR",
          "Corrección automática de perspectiva e iluminación"
        ]
      },
      {
        name: "Motor de Alertas WhatsApp",
        tag: "Mensajería Automatizada",
        description: "Envío de recordatorios cordiales y profesionales directamente al contacto del librador.",
        highlights: [
          "Envío programado (D-2 días antes de la compensación)",
          "Confirmación de entrega con estado de lectura",
          "Posibilidad de reprogramación controlada vía bot",
          "Historial de mensajes asociado al registro del cheque"
        ]
      },
      {
        name: "Custodia & Línea de Tiempo de Liquidación",
        tag: "Tesorería & Caja",
        description: "Organización visual en calendario y tabla de los cheques en custodia y depositados.",
        highlights: [
          "Agrupación por banco beneficiario",
          "Identificación inmediata de cheques devueltos para representación",
          "Reporte de valores a vencer en la semana o el mes",
          "Control de custodia física vs. custodia bancaria"
        ]
      },
      {
        name: "Conciliación & Auditoría Bancaria",
        tag: "Gobernanza Contable",
        description: "Integración del saldo proyectado con el saldo conciliado del extracto bancario.",
        highlights: [
          "Baja automática con comprobante de depósito",
          "Pista de auditoría con imagen original del cheque resguardada con seguridad",
          "Exportación para conciliación contable en CSV/Excel",
          "Métricas de morosidad e historial por cliente"
        ]
      }
    ],
    keyBenefits: [
      {
        title: "Cero Cheques Olvidados",
        description: "Control cronológico absoluto que garantiza que el 100% de los cheques se depositen en la fecha acordada.",
        metric: "100% de valores cobrados a término"
      },
      {
        title: "Tiempo de Carga por Documento",
        description: "De 2 minutos de tipeo manual a tan solo 1.2 segundos mediante IA de visión.",
        metric: "1.2s tiempo de extracción por foto"
      },
      {
        title: "Reducción de Rechazos por Fondos",
        description: "El aviso cordial preventivo por WhatsApp reduce drásticamente las devoluciones involuntarias.",
        metric: "-70% de cheques devueltos"
      }
    ],
    features: [
      "Extracción automatizada de datos en fotos de cheques mediante Gemini Vision",
      "Validación cruzada entre dígitos numéricos y texto manuscrito",
      "Conciliación bancaria asistida por IA y previsión de liquidez",
      "Disparos y alertas automáticas de vencimiento vía WhatsApp Business API",
      "Auditoría completa con resguardo digital de las imágenes de los títulos",
      "Indexación estructurada en base relacional de alta confiabilidad"
    ],
    techStackCategorized: [
      { category: "Inteligencia Artificial", items: ["Gemini Vision API", "Google Cloud Vertex AI", "OCR Multimodal", "Prompt Chaining"] },
      { category: "Mensajería & Integraciones", items: ["Meta WhatsApp Business API", "Webhooks Seguros", "Fila Asíncrona"] },
      { category: "Backend & Aplicación", items: ["TypeScript", "Supabase PostgreSQL", "Storage Cifrado"] },
      { category: "Seguridad & Privacidad", items: ["Enmascaramiento de datos bancarios sensibles", "Acceso autenticado con RBAC", "Pista de Auditoría"] }
    ],
    techStack: ["Google Cloud", "Gemini API", "Meta WhatsApp API", "Supabase", "TypeScript"],
    securityHighlights: [
      "Anonimización y protección de datos bancarios sensibles en estricta conformidad regulatoria",
      "Almacenamiento de imágenes de cheques en storage cifrado con URLs prefirmadas efímeras",
      "Acceso restringido por roles (RBAC) para operadores financieros y gerentes de tesorería"
    ],
    faq: [
      {
        question: "¿La IA logra leer cheques con caligrafía compleja?",
        answer: "Sí. Los modelos Gemini Vision están entrenados en visión multimodal avanzada y cruzan la lectura del importe numérico con la línea del importe en letras. En caso de que la confianza quede por debajo del umbral de seguridad, el sistema solicita confirmación humana con un solo clic."
      },
      {
        question: "¿Cómo se envían las notificaciones por WhatsApp?",
        answer: "A través de la API oficial de WhatsApp Business. El sistema envía un mensaje formal recordando cordialmente la fecha de compensación, garantizando alta tasa de lectura y cero fricción con el cliente."
      }
    ],
    featured: true,
  },
];

/**
 * Busca proyecto por el slug principal o por cualquiera de sus alias.
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
 * Retorna todos los slugs válidos para generación estática (SSG) en Next.js.
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
