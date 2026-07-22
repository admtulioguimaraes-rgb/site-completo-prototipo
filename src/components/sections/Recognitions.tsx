import { siteConfig } from "@/data/site"

export function Recognitions() {
  return (
    <section className="border-y border-border bg-card py-16 lg:py-20">
      <div className="container">
        <p className="label-caps text-center text-muted-foreground lg:text-left">
          Reconhecimento regional
        </p>
        <p className="mt-6 max-w-3xl text-center font-display text-xl leading-snug text-primary lg:text-left lg:text-2xl">
          {siteConfig.regionalRecognition}
        </p>
      </div>
    </section>
  )
}
