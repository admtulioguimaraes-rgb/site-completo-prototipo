import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

interface CtaBannerProps {
  eyebrow?: string
  title: string
  description?: string
  buttonLabel?: string
  href?: string
}

export function CtaBanner({
  eyebrow = "Fale com o escritório",
  title,
  description,
  buttonLabel = "Agendar conversa",
  href = "/contato",
}: CtaBannerProps) {
  return (
    <section className="bg-primary py-24 lg:py-30">
      <div className="container flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="label-caps text-accent">{eyebrow}</p>
          <h2 className="mt-5 font-display text-display-sm text-ivory lg:text-display-md">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-ivory/75">{description}</p>
          )}
        </div>
        <Button asChild variant="accent" size="lg" className="shrink-0">
          <Link to={href}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
