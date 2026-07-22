// NOTA: "founded" e "stats" abaixo são valores ilustrativos (placeholder) e
// ainda não foram confirmados pelo escritório. Ver README.md.
export const siteConfig = {
  name: "Leite Araujo",
  fullName: "Leite Araujo Advocacia e Consultoria Jurídica",
  slogan: "Excelência jurídica a serviço de decisões estratégicas.",
  founded: 1994,
  address: {
    street: "Avenida Cardoso Moreira, nº 285, Sala 221",
    district: "Centro",
    city: "Itaperuna",
    state: "RJ",
    zip: "28300-000",
  },
  phone: "(22) 3822-6872",
  phoneSecondary: "(22) 3822-9071",
  whatsapp: "(22) 99919-7407",
  email: "leiteaneto@gmail.com",
  hours: "Segunda a sexta, 9h às 18h",
  stats: [
    { label: "Casos e demandas atendidos", value: 2400, suffix: "+" },
    { label: "Setores de atuação", value: 18 },
  ],
  regionalRecognition:
    "Um escritório consolidado há mais de duas décadas na região, reconhecido pela atuação sólida e de confiança junto a empresas e famílias de Itaperuna e das cidades vizinhas.",
} as const

export function getWhatsappLink() {
  const digits = siteConfig.whatsapp.replace(/\D/g, "")
  return `https://wa.me/55${digits}`
}

export const legalNotice =
  "Leite Araujo Advocacia e Consultoria Jurídica atua em conformidade com o Código de Ética e Disciplina da OAB e com o Provimento nº 205/2021 do Conselho Federal da OAB. O conteúdo deste site tem caráter meramente informativo e institucional, não constitui consulta jurídica, captação de clientela ou promessa de resultado."
