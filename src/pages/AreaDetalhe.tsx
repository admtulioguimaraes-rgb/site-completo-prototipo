import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

import { Seo } from "@/components/Seo"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { areas, getAreaBySlug } from "@/data/areas"
import { getMembersByArea } from "@/data/team"

export default function AreaDetalhe() {
  const { slug } = useParams<{ slug: string }>()
  const area = slug ? getAreaBySlug(slug) : undefined

  if (!area) {
    return <Navigate to="/areas-de-atuacao" replace />
  }

  const index = areas.findIndex((a) => a.slug === area.slug)
  const prev = areas[(index - 1 + areas.length) % areas.length]
  const next = areas[(index + 1) % areas.length]
  const responsibleTeam = getMembersByArea(area.slug)

  return (
    <>
      <Seo title={area.title} description={area.shortDescription} />

      <section className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden bg-primary">
        <img
          src={area.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />
        <div className="container relative z-10 pb-16 pt-40">
          <Link
            to="/areas-de-atuacao"
            className="label-caps link-underline inline-flex items-center gap-2 text-ivory/80"
          >
            <ArrowLeft size={14} />
            Áreas de Atuação
          </Link>
          <h1 className="mt-6 max-w-2xl font-display text-display-sm text-ivory lg:text-display-md">
            {area.title}
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-38">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-caps text-accent">Escopo de atuação</p>
            <ul className="mt-6 space-y-4">
              {area.scope.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-secondary">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-editorial space-y-6 text-base leading-relaxed text-secondary lg:col-span-7 lg:col-start-6 lg:text-lg">
            {area.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-30">
        <div className="container">
          <p className="label-caps text-accent">Como atuamos</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-4">
            {area.howWeAct.map((step, i) => (
              <div key={step.title} className="border-t border-border pt-6">
                <span className="font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {responsibleTeam.length > 0 && (
        <section className="py-24 lg:py-30">
          <div className="container">
            <p className="label-caps text-accent">Advogados responsáveis</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {responsibleTeam.map((member) => (
                <Link
                  key={member.slug}
                  to="/equipe"
                  className="group flex items-center gap-4 border border-border p-5"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-16 w-16 shrink-0 object-cover grayscale"
                  />
                  <div>
                    <p className="font-display text-base text-primary">{member.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border py-10">
        <div className="container flex items-center justify-between">
          <Link
            to={`/areas-de-atuacao/${prev.slug}`}
            className="group flex max-w-[45%] items-center gap-3 text-left"
          >
            <ArrowLeft size={16} className="shrink-0 text-accent transition-transform duration-350 group-hover:-translate-x-1" />
            <span className="truncate text-sm font-display text-primary">{prev.title}</span>
          </Link>
          <Link
            to={`/areas-de-atuacao/${next.slug}`}
            className="group flex max-w-[45%] items-center gap-3 text-right"
          >
            <span className="truncate text-sm font-display text-primary">{next.title}</span>
            <ArrowRight size={16} className="shrink-0 text-accent transition-transform duration-350 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaBanner
        eyebrow={area.title}
        title="Precisa de assessoria jurídica nesta área?"
        description="Entre em contato e converse com um de nossos advogados especializados."
        buttonLabel="Falar sobre este caso"
      />
    </>
  )
}
