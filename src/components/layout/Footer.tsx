import { Link } from "react-router-dom"

import { WhatsAppIcon } from "@/components/icons/SocialIcons"
import { siteConfig, legalNotice, getWhatsappLink } from "@/data/site"

const officeLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Equipe", href: "/equipe" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
]

const contactLinks = [
  { label: "Fale conosco", href: "/contato" },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  { label: siteConfig.phoneSecondary, href: `tel:${siteConfig.phoneSecondary.replace(/[^\d+]/g, "")}` },
]

export function Footer() {
  return (
    <footer className="bg-primary text-ivory">
      <div className="container grid gap-12 py-24 lg:grid-cols-12 lg:gap-8 lg:py-30">
        <div className="lg:col-span-4">
          <Link to="/" className="font-display text-2xl tracking-wide text-ivory">
            {siteConfig.name}
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/70">
            {siteConfig.slogan}
          </p>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/85 link-underline"
          >
            <WhatsAppIcon className="h-4 w-4 text-accent" />
            {siteConfig.whatsapp}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-2">
          <div>
            <p className="label-caps text-ivory/50">Escritório</p>
            <ul className="mt-5 space-y-3">
              {officeLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="link-underline text-sm text-ivory/85">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-caps text-ivory/50">Contato</p>
            <ul className="mt-5 space-y-3">
              {contactLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <li key={link.label}>
                    <Link to={link.href} className="link-underline text-sm text-ivory/85">
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a href={link.href} className="link-underline text-sm text-ivory/85">
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <p className="label-caps text-ivory/50">Endereço</p>
          <address className="mt-5 space-y-1 text-sm not-italic text-ivory/85">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.district} — {siteConfig.address.city}/{siteConfig.address.state}
            </p>
            <p>CEP {siteConfig.address.zip}</p>
          </address>
          <p className="mt-5 text-sm text-ivory/70">{siteConfig.hours}</p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container flex flex-col gap-4 py-8 text-xs text-ivory/50 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Todos os direitos reservados.
          </p>
          <p className="max-w-3xl leading-relaxed lg:text-right">{legalNotice}</p>
        </div>
      </div>
    </footer>
  )
}
