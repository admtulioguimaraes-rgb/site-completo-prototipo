import { useEffect } from "react"

interface SeoProps {
  title: string
  description: string
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | Leite Araujo Advocacia e Consultoria Jurídica`
    document.title = fullTitle
    setMeta("description", description)
    setMeta("og:title", fullTitle, "property")
    setMeta("og:description", description, "property")
  }, [title, description])

  return null
}
