import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

import { Seo } from "@/components/Seo"
import { WhatsAppIcon } from "@/components/icons/SocialIcons"
import { PageHero } from "@/components/sections/PageHero"
import { MapEmbed } from "@/components/sections/MapEmbed"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { siteConfig, legalNotice, getWhatsappLink } from "@/data/site"
import { areas } from "@/data/areas"

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  telefone: z.string().min(8, "Informe um telefone válido."),
  area: z.string().min(1, "Selecione uma área de interesse."),
  mensagem: z.string().min(10, "Descreva brevemente sua demanda."),
})

type FormValues = z.infer<typeof schema>

type Status = "idle" | "submitting" | "success" | "error"

export default function Contato() {
  const [status, setStatus] = useState<Status>("idle")

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", email: "", telefone: "", area: "", mensagem: "" },
  })

  const areaValue = watch("area")

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting")

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS não configurado")
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.nome,
          from_email: data.email,
          phone: data.telefone,
          area: data.area,
          message: data.mensagem,
        },
        { publicKey }
      )

      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <Seo
        title="Contato"
        description="Entre em contato com a Leite Araujo Advocacia e Consultoria Jurídica."
      />

      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre sua demanda jurídica."
        description="Preencha o formulário abaixo ou utilize um dos nossos canais de atendimento diretos."
      />

      <section className="py-24 lg:py-30">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" {...register("nome")} aria-invalid={!!errors.nome} />
                  {errors.nome && (
                    <p className="text-xs text-destructive">{errors.nome.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" {...register("telefone")} aria-invalid={!!errors.telefone} />
                  {errors.telefone && (
                    <p className="text-xs text-destructive">{errors.telefone.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Área de interesse</Label>
                  <Select value={areaValue} onValueChange={(v) => setValue("area", v, { shouldValidate: true })}>
                    <SelectTrigger id="area" aria-invalid={!!errors.area}>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map((area) => (
                        <SelectItem key={area.slug} value={area.title}>
                          {area.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.area && (
                    <p className="text-xs text-destructive">{errors.area.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea id="mensagem" {...register("mensagem")} aria-invalid={!!errors.mensagem} />
                {errors.mensagem && (
                  <p className="text-xs text-destructive">{errors.mensagem.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
              </Button>

              {status === "success" && (
                <p className="text-sm text-primary">
                  Mensagem enviada com sucesso. Retornaremos em breve.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Não foi possível enviar sua mensagem agora. Tente novamente ou utilize um de
                  nossos canais diretos de contato.
                </p>
              )}

              <p className="border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
                {legalNotice}
              </p>
            </form>
          </div>

          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-6 border border-border p-8">
              <div className="flex gap-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="label-caps text-muted-foreground">Endereço</p>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-secondary">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.district} — {siteConfig.address.city}/{siteConfig.address.state}
                    <br />
                    CEP {siteConfig.address.zip}
                  </address>
                </div>
              </div>
              <div className="flex gap-4">
                <WhatsAppIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
                <div>
                  <p className="label-caps text-muted-foreground">WhatsApp</p>
                  <a
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-2 inline-block text-sm text-secondary"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="label-caps text-muted-foreground">Telefone</p>
                  <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="link-underline mt-2 block text-sm text-secondary">
                    {siteConfig.phone}
                  </a>
                  <a href={`tel:${siteConfig.phoneSecondary.replace(/[^\d+]/g, "")}`} className="link-underline mt-1 block text-sm text-secondary">
                    {siteConfig.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="label-caps text-muted-foreground">E-mail</p>
                  <a href={`mailto:${siteConfig.email}`} className="link-underline mt-2 inline-block text-sm text-secondary">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="label-caps text-muted-foreground">Atendimento</p>
                  <p className="mt-2 text-sm text-secondary">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  )
}
