import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className={cn("label-caps mb-5", light ? "text-accent" : "text-accent")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-display-sm leading-tight lg:text-display-md",
          light ? "text-ivory" : "text-primary",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed lg:text-lg",
            light ? "text-ivory/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
