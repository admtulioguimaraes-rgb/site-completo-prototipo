import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Seo } from "@/components/Seo"
import { HomeHero } from "@/components/sections/HomeHero"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { AreaCard } from "@/components/sections/AreaCard"
import { StatsCounter } from "@/components/sections/StatsCounter"
import { Recognitions } from "@/components/sections/Recognitions"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { MapEmbed } from "@/components/sections/MapEmbed"
import { areas } from "@/data/areas"
import { siteConfig } from "@/data/site"

export default function Home() {
  const featuredAreas = areas.slice(0, 6)

  return (
    <>
      <Seo
        title="Início"
        description="Leite Araujo Advocacia e Consultoria Jurídica — excelência jurídica a serviço de decisões estratégicas."
      />

      <HomeHero />

      <section className="py-24 lg:py-38">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-caps text-accent">O escritório</p>
          </div>
          <div className="max-w-editorial lg:col-span-7 lg:col-start-6">
            <p className="font-display text-2xl leading-relaxed text-primary lg:text-3xl">
              Há mais de duas décadas, a Leite Araujo assessora empresas e famílias empresárias
              em decisões jurídicas de alta complexidade.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Combinamos rigor técnico, discrição e visão estratégica de negócio para atender
              clientes em operações societárias, disputas relevantes e questões regulatórias que
              exigem precisão e experiência.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Nossa atuação é multidisciplinar e orientada por relações de longo prazo, construídas
              sobre confiança institucional e proximidade com cada cliente.
            </p>
            <Link
              to="/sobre"
              className="label-caps link-underline mt-8 inline-flex items-center gap-2 text-primary"
            >
              Conheça o escritório
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-30">
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Áreas de Atuação"
              title="Atuação multidisciplinar, com profundidade técnica em cada área."
            />
            <Link
              to="/areas-de-atuacao"
              className="label-caps link-underline inline-flex shrink-0 items-center gap-2 text-primary"
            >
              Ver todas as áreas
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {featuredAreas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <Recognitions />

      <section className="py-24 lg:py-30">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Localização"
              title="Venha nos visitar."
              description={`${siteConfig.address.street}, ${siteConfig.address.district} — ${siteConfig.address.city}/${siteConfig.address.state}, CEP ${siteConfig.address.zip}`}
            />
          </div>
          <div className="lg:col-span-8">
            <MapEmbed />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Pronto para discutir uma questão jurídica estratégica?"
        description="Nossa equipe está disponível para uma conversa inicial sobre o seu caso ou operação."
        buttonLabel="Fale com o escritório"
      />
    </>
  )
}
