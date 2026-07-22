import { siteConfig } from "@/data/site"

/**
 * Isolado para facilitar a troca por um embed do Google Maps com chave de API
 * própria, se necessário. Por padrão usa o embed público sem chave.
 */
export function MapEmbed() {
  const query = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city} - ${siteConfig.address.state}`
  )

  return (
    <div className="aspect-[4/3] w-full overflow-hidden border border-border grayscale lg:aspect-auto lg:h-full">
      <iframe
        title="Localização do escritório"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
