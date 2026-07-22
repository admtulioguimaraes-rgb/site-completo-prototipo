interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-primary pb-20 pt-40 lg:pb-24 lg:pt-48">
      <div className="container">
        <p className="label-caps text-accent">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-display-sm text-ivory lg:text-display-lg">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 lg:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
