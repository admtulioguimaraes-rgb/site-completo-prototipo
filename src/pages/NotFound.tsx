import { Link } from "react-router-dom"

import { Seo } from "@/components/Seo"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada" description="A página que você procura não existe." />
      <section className="flex min-h-[70vh] items-center py-24">
        <div className="container">
          <p className="label-caps text-accent">Erro 404</p>
          <h1 className="mt-6 font-display text-display-md text-primary">
            Página não encontrada.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            O conteúdo que você procura pode ter sido removido ou o endereço está incorreto.
          </p>
          <Button asChild className="mt-10">
            <Link to="/">Voltar ao início</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
