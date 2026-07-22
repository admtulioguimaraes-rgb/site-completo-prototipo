export interface TeamMember {
  slug: string
  name: string
  role: string
  areaSlugs: string[]
  oab: string
  formation: string[]
  specializations: string[]
  bio: string
  photo: string
}

// NOTA: formação, especializações, áreas de atuação, biografia e foto ainda
// não foram enviadas pelo escritório — mantidas como placeholder explícito
// ("A definir") até que os dados reais sejam fornecidos. Ver README.md.
export const team: TeamMember[] = [
  {
    slug: "luiz-leite-araujo-junior",
    name: "Dr. Luiz Leite Araujo Júnior",
    role: "Sócio",
    areaSlugs: [],
    oab: "OAB/RJ nº 72.332",
    formation: ["A definir"],
    specializations: ["A definir"],
    bio: "Biografia a ser fornecida pelo escritório.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop&sat=-100",
  },
  {
    slug: "luiz-leite-araujo-neto",
    name: "Dr. Luiz Leite Araujo Neto",
    role: "Sócio",
    areaSlugs: [],
    oab: "OAB/RJ nº 226.236",
    formation: ["A definir"],
    specializations: ["A definir"],
    bio: "Biografia a ser fornecida pelo escritório.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop&sat=-100",
  },
  {
    slug: "valeria-f-pessoa-araujo",
    name: "Dra. Valeria F. Pessoa Araujo",
    role: "Sócia",
    areaSlugs: [],
    oab: "OAB/RJ nº 175.980",
    formation: ["A definir"],
    specializations: ["A definir"],
    bio: "Biografia a ser fornecida pelo escritório.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop&sat=-100",
  },
]

export function getMemberBySlug(slug?: string) {
  if (!slug) return undefined
  return team.find((member) => member.slug === slug)
}

export function getMembersByArea(areaSlug: string) {
  return team.filter((member) => member.areaSlugs.includes(areaSlug))
}
