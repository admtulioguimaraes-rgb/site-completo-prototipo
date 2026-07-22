import type { TeamMember } from "@/data/team"

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col border border-border bg-card">
      <div className="img-zoom aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={member.photo}
          alt={`Retrato de ${member.name}`}
          loading="lazy"
          className="h-full w-full object-cover grayscale"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <h3 className="font-display text-lg text-primary lg:text-xl">{member.name}</h3>
        <p className="label-caps mt-2 text-accent">{member.role}</p>

        <dl className="mt-6 space-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Registro</dt>
            <dd className="text-secondary">{member.oab}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Formação</dt>
            <dd className="text-secondary">{member.formation.join(" · ")}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-2">
          {member.specializations.map((s) => (
            <span
              key={s}
              className="border border-border px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
