import { useMemo, useState } from "react"

import { Seo } from "@/components/Seo"
import { PageHero } from "@/components/sections/PageHero"
import { AreaCard } from "@/components/sections/AreaCard"
import { cn } from "@/lib/utils"
import { areas, type AreaCategory } from "@/data/areas"

const filters: Array<{ label: string; value: AreaCategory | "all" }> = [
  { label: "Todas", value: "all" },
  { label: "Consultivo", value: "Consultivo" },
  { label: "Contencioso", value: "Contencioso" },
]

export default function AreasAtuacao() {
  const [filter, setFilter] = useState<AreaCategory | "all">("all")

  const filtered = useMemo(() => {
    if (filter === "all") return areas
    return areas.filter((area) => area.categories.includes(filter))
  }, [filter])

  return (
    <>
      <Seo
        title="Áreas de Atuação"
        description="Conheça as áreas de atuação consultiva e contenciosa da Leite Araujo Advocacia e Consultoria Jurídica."
      />

      <PageHero
        eyebrow="Áreas de Atuação"
        title="Profundidade técnica em cada frente do direito empresarial."
        description="Atuamos de forma consultiva e contenciosa, sempre com abordagem estratégica alinhada aos objetivos de cada cliente."
      />

      <section className="py-24 lg:py-30">
        <div className="container">
          <div className="flex gap-3">
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={cn(
                  "label-caps border px-5 py-2.5 transition-colors duration-300",
                  filter === item.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
