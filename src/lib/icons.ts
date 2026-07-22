import { Briefcase, Scale, Landmark, Users, Building2, FileText, ShieldCheck, type LucideIcon } from "lucide-react"

import type { Area } from "@/data/areas"

export const areaIcons: Record<Area["icon"], LucideIcon> = {
  briefcase: Briefcase,
  scale: Scale,
  landmark: Landmark,
  users: Users,
  building: Building2,
  "file-text": FileText,
  shield: ShieldCheck,
}
