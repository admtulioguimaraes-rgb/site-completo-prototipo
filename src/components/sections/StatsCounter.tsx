import { siteConfig } from "@/data/site"
import { useCountUp } from "@/hooks/useCountUp"

function Stat({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const { ref, value: current } = useCountUp(value)

  return (
    <div ref={ref} className="border-t border-ivory/20 pt-6">
      <p className="font-display text-4xl text-ivory lg:text-5xl">
        {current}
        {suffix ?? ""}
      </p>
      <p className="label-caps mt-3 text-ivory/60">{label}</p>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="bg-primary py-24 lg:py-30">
      <div className="container grid grid-cols-2 gap-8 lg:gap-16">
        {siteConfig.stats.map((stat) => (
          <Stat key={stat.label} label={stat.label} value={stat.value} suffix={"suffix" in stat ? stat.suffix : undefined} />
        ))}
      </div>
    </section>
  )
}
