import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import type { Area } from "@/data/areas"
import { areaIcons } from "@/lib/icons"

export function AreaCard({ area }: { area: Area }) {
  const Icon = areaIcons[area.icon]

  return (
    <Link
      to={`/areas-de-atuacao/${area.slug}`}
      className="group flex flex-col border border-border bg-card p-8 transition-colors duration-350 hover:border-accent lg:p-10"
    >
      <Icon className="h-8 w-8 text-accent" strokeWidth={1.25} />
      <h3 className="mt-8 font-display text-xl text-primary lg:text-2xl">{area.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {area.shortDescription}
      </p>
      <span className="label-caps mt-8 inline-flex items-center gap-2 text-primary transition-colors duration-350 group-hover:text-accent">
        Saiba mais
        <ArrowRight size={14} className="transition-transform duration-350 group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
