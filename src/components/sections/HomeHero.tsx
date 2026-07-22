import { ChevronDown } from "lucide-react"

export function HomeHero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-end overflow-hidden bg-primary">
      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop&sat=-100"
        alt="Fachada institucional em vidro e concreto, em preto e branco"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/10" />

      <div className="container relative z-10 pb-24 pt-40 lg:pb-30">
        <p className="label-caps text-accent">Advocacia e Consultoria Jurídica</p>
        <h1 className="mt-6 max-w-4xl font-display text-display-md leading-[1.05] text-ivory lg:text-display-xl">
          Leite Araujo
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-accent lg:text-xl">
          Excelência jurídica a serviço de decisões estratégicas.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <ChevronDown className="animate-bounce text-ivory/60" size={22} aria-hidden="true" />
      </div>
    </section>
  )
}
