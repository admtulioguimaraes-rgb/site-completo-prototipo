import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Sobre", href: "/sobre" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Equipe", href: "/equipe" },
  { label: "Contato", href: "/contato" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isHome = pathname === "/"
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-350",
        transparent ? "bg-transparent" : "bg-primary shadow-sm"
      )}
    >
      <div className="container flex h-20 items-center justify-between lg:h-24">
        <Link
          to="/"
          className="font-display text-xl tracking-wide text-ivory lg:text-2xl"
          aria-label="Leite Araujo Advocacia — página inicial"
        >
          Leite Araujo
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "label-caps link-underline text-ivory/85 hover:text-ivory",
                  isActive && "text-accent"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="accent" size="sm">
            <Link to="/contato">Fale com o Escritório</Link>
          </Button>
        </div>

        <button
          type="button"
          className="text-ivory lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-ivory/10 bg-primary lg:hidden">
          <nav className="container flex flex-col gap-1 py-6" aria-label="Navegação móvel">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "border-b border-ivory/10 py-4 text-lg font-display text-ivory/90",
                    isActive && "text-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="accent" className="mt-6 w-full">
              <Link to="/contato">Fale com o Escritório</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
