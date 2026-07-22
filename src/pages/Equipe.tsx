import { useMemo, useState } from "react"

import { Seo } from "@/components/Seo"
import { PageHero } from "@/components/sections/PageHero"
import { TeamCard } from "@/components/sections/TeamCard"
import { cn } from "@/lib/utils"
import { team } from "@/data/team"
import { areas } from "@/data/areas"

export default function Equipe() {
  const [filter, setFilter] = useState<string>("all")

  const filtered = useMemo(() => {
    if (filter === "all") return team
    return team.filter((member) => member.areaSlugs.includes(filter))
  }, [filter])

  return (
    <>
      <Seo
        title="Equipe"
        description="Conheça os sócios e advogados da Leite Araujo Advocacia e Consultoria Jurídica."
      />

      <PageHero
        eyebrow="Equipe"
        title="Profissionais dedicados a cada área do direito."
        description="Nossa equipe é organizada por especialização, permitindo atuação profunda e coordenada em cada demanda."
      />

      <section className="py-24 lg:py-30">
        <div className="container">
          <div className="flex flex-wrap gap-3 border-b border-border pb-10">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "label-caps border px-5 py-2.5 transition-colors duration-300",
                filter === "all"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              Todas as áreas
            </button>
            {areas.map((area) => (
              <button
                key={area.slug}
                onClick={() => setFilter(area.slug)}
                className={cn(
                  "label-caps border px-5 py-2.5 transition-colors duration-300",
                  filter === area.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {area.title}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-14 text-sm text-muted-foreground">
              Nenhum profissional encontrado para esta área.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
