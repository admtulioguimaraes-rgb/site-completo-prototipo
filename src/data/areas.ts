export type AreaCategory = "Consultivo" | "Contencioso"

export interface AreaStep {
  title: string
  description: string
}

export interface Area {
  slug: string
  title: string
  shortDescription: string
  description: string[]
  categories: AreaCategory[]
  icon: "briefcase" | "scale" | "landmark" | "users" | "building" | "file-text" | "shield"
  image: string
  scope: string[]
  howWeAct: AreaStep[]
  teamSlugs: string[]
}

export const areas: Area[] = [
  {
    slug: "direito-empresarial-societario",
    title: "Direito Empresarial e Societário",
    shortDescription: "Estruturação societária, governança e operações de M&A.",
    description: [
      "Assessoramos empresas nacionais e multinacionais em todas as etapas do ciclo societário — da constituição à reorganização, passando por operações de fusão, aquisição e reestruturação de capital.",
      "Nossa atuação combina rigor técnico com visão de negócio, acompanhando o cliente na estruturação de operações complexas e na governança corporativa de longo prazo.",
    ],
    categories: ["Consultivo"],
    icon: "building",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1800&auto=format&fit=crop&sat=-100",
    scope: [
      "Constituição e reorganização societária",
      "Fusões, aquisições e joint ventures",
      "Governança corporativa e acordos de acionistas",
      "Contratos empresariais complexos",
    ],
    howWeAct: [
      { title: "Diagnóstico", description: "Levantamento da estrutura societária e dos riscos jurídicos envolvidos na operação." },
      { title: "Estratégia", description: "Definição do desenho jurídico mais adequado aos objetivos de negócio do cliente." },
      { title: "Execução", description: "Condução da operação, negociação contratual e interlocução com órgãos reguladores." },
      { title: "Acompanhamento", description: "Suporte contínuo pós-operação e monitoramento de obrigações societárias." },
    ],
    teamSlugs: [],
  },
  {
    slug: "direito-tributario",
    title: "Direito Tributário",
    shortDescription: "Planejamento tributário e defesa em processos administrativos e judiciais.",
    description: [
      "Atuamos no planejamento tributário estratégico de empresas de diversos setores, com foco em conformidade fiscal e eficiência de carga tributária dentro dos limites da legislação.",
      "Na esfera contenciosa, representamos clientes perante autoridades fiscais e tribunais administrativos e judiciais em discussões tributárias de relevância.",
    ],
    categories: ["Consultivo", "Contencioso"],
    icon: "landmark",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800&auto=format&fit=crop&sat=-100",
    scope: [
      "Planejamento tributário empresarial",
      "Contencioso administrativo e judicial fiscal",
      "Due diligence tributária",
      "Tributação de operações societárias e internacionais",
    ],
    howWeAct: [
      { title: "Diagnóstico", description: "Análise da estrutura tributária vigente e identificação de contingências e oportunidades." },
      { title: "Estratégia", description: "Elaboração de plano de ação alinhado ao perfil de risco e aos objetivos do cliente." },
      { title: "Execução", description: "Condução de processos administrativos, judiciais e medidas preventivas cabíveis." },
      { title: "Acompanhamento", description: "Monitoramento de mudanças legislativas e jurisprudenciais relevantes ao negócio." },
    ],
    teamSlugs: [],
  },
  {
    slug: "direito-civil",
    title: "Direito Civil",
    shortDescription: "Contratos, responsabilidade civil e direito patrimonial.",
    description: [
      "Prestamos assessoria em contratos civis, responsabilidade civil e questões patrimoniais, com atuação tanto consultiva quanto contenciosa em demandas de complexidade técnica.",
      "Nosso trabalho busca prevenir litígios por meio de instrumentos contratuais bem estruturados e, quando necessário, atuar com solidez técnica em processos judiciais e arbitrais.",
    ],
    categories: ["Consultivo", "Contencioso"],
    icon: "scale",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop&sat=-100",
    scope: [
      "Elaboração e revisão de contratos civis",
      "Responsabilidade civil contratual e extracontratual",
      "Direito patrimonial e sucessório",
      "Arbitragem e mediação",
    ],
    howWeAct: [
      { title: "Diagnóstico", description: "Avaliação do contexto fático e jurídico da demanda ou operação." },
      { title: "Estratégia", description: "Definição da via mais adequada — negocial, arbitral ou judicial." },
      { title: "Execução", description: "Condução técnica do caso com foco em precisão processual e argumentativa." },
      { title: "Acompanhamento", description: "Reporte periódico e ajuste de estratégia conforme evolução do processo." },
    ],
    teamSlugs: [],
  },
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    shortDescription: "Consultoria preventiva e representação em demandas trabalhistas.",
    description: [
      "Auxiliamos empresas na estruturação de políticas trabalhistas e de compliance, reduzindo riscos e assegurando conformidade com a legislação vigente.",
      "Representamos clientes em demandas individuais e coletivas perante a Justiça do Trabalho, com atuação técnica e alinhada à estratégia de negócio de cada cliente.",
    ],
    categories: ["Consultivo", "Contencioso"],
    icon: "users",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1800&auto=format&fit=crop&sat=-100",
    scope: [
      "Consultoria trabalhista preventiva e compliance",
      "Negociações coletivas e relações sindicais",
      "Contencioso trabalhista individual e coletivo",
      "Auditoria de práticas e políticas internas",
    ],
    howWeAct: [
      { title: "Diagnóstico", description: "Mapeamento de práticas trabalhistas e pontos de exposição a risco." },
      { title: "Estratégia", description: "Desenho de políticas e procedimentos alinhados à legislação e à cultura da empresa." },
      { title: "Execução", description: "Implementação das medidas e representação em eventuais demandas." },
      { title: "Acompanhamento", description: "Revisão periódica de conformidade e atualização normativa." },
    ],
    teamSlugs: [],
  },
  {
    slug: "direito-administrativo",
    title: "Direito Administrativo",
    shortDescription: "Relações com a administração pública, licitações e regulatório.",
    description: [
      "Assessoramos empresas em suas relações com a administração pública, incluindo processos licitatórios, contratos administrativos e questões regulatórias setoriais.",
      "Atuamos também na defesa de interesses de clientes perante órgãos de controle e em processos administrativos sancionadores.",
    ],
    categories: ["Consultivo", "Contencioso"],
    icon: "shield",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1800&auto=format&fit=crop&sat=-100",
    scope: [
      "Licitações e contratos administrativos",
      "Direito regulatório setorial",
      "Processos perante órgãos de controle",
      "Concessões e parcerias público-privadas",
    ],
    howWeAct: [
      { title: "Diagnóstico", description: "Análise do arcabouço regulatório aplicável à operação ou ao setor do cliente." },
      { title: "Estratégia", description: "Definição da abordagem junto aos órgãos públicos e de controle envolvidos." },
      { title: "Execução", description: "Condução de processos administrativos e acompanhamento de contratos públicos." },
      { title: "Acompanhamento", description: "Monitoramento regulatório contínuo e suporte a novas exigências normativas." },
    ],
    teamSlugs: [],
  },
  {
    slug: "contencioso-estrategico",
    title: "Contencioso Estratégico",
    shortDescription: "Gestão de litígios complexos e disputas de alta relevância.",
    description: [
      "Coordenamos carteiras de litígios complexos e de alto valor, com abordagem estratégica que combina técnica processual, visão de negócio e gestão eficiente de portfólio.",
      "Atuamos em disputas cíveis, empresariais e regulatórias perante tribunais superiores e câmaras arbitrais.",
    ],
    categories: ["Contencioso"],
    icon: "file-text",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1800&auto=format&fit=crop&sat=-100",
    scope: [
      "Gestão estratégica de portfólio de litígios",
      "Disputas empresariais e societárias de alta complexidade",
      "Recursos perante tribunais superiores",
      "Arbitragens nacionais e internacionais",
    ],
    howWeAct: [
      { title: "Diagnóstico", description: "Mapeamento do portfólio de disputas e classificação por risco e relevância." },
      { title: "Estratégia", description: "Definição de teses jurídicas e priorização de casos conforme impacto ao negócio." },
      { title: "Execução", description: "Condução processual com acompanhamento próximo em todas as instâncias." },
      { title: "Acompanhamento", description: "Relatórios periódicos de status e reavaliação estratégica do portfólio." },
    ],
    teamSlugs: [],
  },
]

export function getAreaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug)
}
