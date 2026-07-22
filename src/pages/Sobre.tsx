import { Seo } from "@/components/Seo"
import { PageHero } from "@/components/sections/PageHero"
import { SectionHeading } from "@/components/sections/SectionHeading"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { siteConfig } from "@/data/site"

const values = [
  {
    title: "Missão",
    text: "Oferecer assessoria jurídica de excelência, com rigor técnico e visão estratégica, contribuindo para decisões sólidas de nossos clientes.",
  },
  {
    title: "Visão",
    text: "Ser reconhecido como escritório de referência em atuação consultiva e contenciosa para empresas e famílias empresárias no Brasil.",
  },
  {
    title: "Valores",
    text: "Excelência técnica, discrição, independência e compromisso de longo prazo com cada cliente e cada causa.",
  },
]

const differentials = [
  {
    title: "Atuação multidisciplinar",
    text: "Equipe organizada por áreas de especialização, capaz de atender demandas complexas de forma integrada.",
  },
  {
    title: "Atendimento personalizado",
    text: "Relacionamento próximo e direto entre sócios e clientes, com acompanhamento contínuo de cada caso.",
  },
  {
    title: "Presença nacional",
    text: "Atuação em processos e operações em diferentes estados, com parcerias estratégicas quando necessário.",
  },
]

const timeline = [
  { year: "1994", text: "Fundação do escritório em São Paulo, com foco inicial em Direito Civil e Empresarial." },
  { year: "2003", text: "Estruturação da área tributária, em resposta à crescente demanda por planejamento fiscal." },
  { year: "2011", text: "Criação da área de Contencioso Estratégico, voltada a disputas empresariais de alta complexidade." },
  { year: "2018", text: "Ampliação da equipe trabalhista e consolidação da atuação em compliance corporativo." },
  { year: "2026", text: `Escritório completa ${new Date().getFullYear() - siteConfig.founded} anos de atuação contínua no mercado jurídico.` },
]

export default function Sobre() {
  return (
    <>
      <Seo
        title="Sobre o Escritório"
        description="Conheça a história, missão, visão e valores da Leite Araujo Advocacia e Consultoria Jurídica."
      />

      <PageHero
        eyebrow="Sobre o Escritório"
        title="Tradição jurídica e visão estratégica desde 1994."
      />

      <section className="py-24 lg:py-38">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-caps text-accent">Nossa história</p>
          </div>
          <div className="max-w-editorial space-y-6 text-base leading-relaxed text-secondary lg:col-span-7 lg:col-start-6 lg:text-lg">
            <p>
              A Leite Araujo nasceu em 1994 a partir da atuação individual de seu fundador em
              Direito Civil e Empresarial, consolidando-se ao longo das décadas seguintes como
              escritório de referência para empresas e famílias empresárias.
            </p>
            <p>
              Ao longo de sua trajetória, o escritório ampliou sua atuação para as áreas
              tributária, trabalhista, administrativa e de contencioso estratégico, sempre
              mantendo o compromisso original com a excelência técnica e a proximidade com o
              cliente.
            </p>
            <p>
              Hoje, a banca reúne uma equipe multidisciplinar dedicada a acompanhar seus clientes
              em decisões jurídicas de alta relevância, com a mesma solidez institucional que
              marcou sua fundação.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-30">
        <div className="container grid gap-10 lg:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="border-t border-accent pt-8">
              <h3 className="font-display text-2xl text-primary">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-38">
        <div className="container">
          <SectionHeading eyebrow="Diferenciais" title="O que sustenta nossa forma de atuar." />
          <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {differentials.map((item, index) => (
              <div key={item.title}>
                <span className="font-display text-3xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-30">
        <div className="container">
          <SectionHeading eyebrow="Trajetória" title="Marcos da nossa história." />
          <div className="mt-16 max-w-3xl">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[80px_1fr] gap-6 border-t border-border py-8 lg:grid-cols-[120px_1fr]"
              >
                <span className="font-display text-2xl text-accent">{item.year}</span>
                <p className="text-sm leading-relaxed text-secondary lg:text-base">{item.text}</p>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Nossa equipe"
        title="Conheça os sócios e advogados por trás de cada caso."
        buttonLabel="Ver equipe"
        href="/equipe"
      />
    </>
  )
}
