import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Recycle, Cpu, Target, Eye, Building2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import hero from "@/assets/hero-datacenter.jpg.asset.json";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros · Historia, misión y sostenibilidad · CompuServidores LR" },
      {
        name: "description",
        content:
          "Somos un distribuidor colombiano de servidores e infraestructura TI. Conoce nuestra historia, misión, visión y compromiso con la tecnología responsable.",
      },
      { property: "og:title", content: "Nosotros · CompuServidores LR" },
      {
        property: "og:description",
        content:
          "Historia, misión, visión y tecnología responsable: promovemos la reutilización responsable de servidores y componentes empresariales.",
      },
      { property: "og:url", content: "/nosotros" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src={hero.url}
              alt="Centro de datos con servidores empresariales"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/95" />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-24 text-white md:px-6 md:py-32">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              Quiénes somos
            </span>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Impulsamos la infraestructura TI de Colombia
            </h1>
            <p className="mt-5 max-w-2xl text-slate-200">
              Somos un equipo apasionado por la tecnología empresarial. Desde Bogotá abastecemos a
              empresas de todo el país con servidores y componentes confiables, respaldados por
              asesoría y soporte especializado.
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
            <div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Nuestra historia
              </h2>
              <p className="mt-5 text-muted-foreground">
                Nacimos con la convicción de que las empresas colombianas merecen infraestructura
                TI del mismo nivel que las del resto del mundo, sin barreras de acceso ni costos
                exagerados. Hemos crecido de la mano de nuestros clientes, ampliando catálogo,
                marcas y servicios sin perder el trato cercano ni la garantía de calidad.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "+10", v: "años de experiencia" },
                  { k: "+500", v: "clientes atendidos" },
                  { k: "32", v: "departamentos cubiertos" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-primary">{s.k}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-border bg-card p-7">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Misión</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Proveer soluciones de infraestructura TI confiables, con la mejor relación
                  costo/beneficio, respaldadas por asesoría técnica experta y soporte oportuno.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Visión</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ser el aliado estratégico de referencia en Colombia para la operación,
                  actualización y renovación responsable de data centers empresariales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sostenibilidad */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-500/5 via-background to-background py-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
                <Leaf className="h-3.5 w-3.5" /> Sostenibilidad
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Tecnología Responsable
              </h2>
              <p className="mt-5 text-muted-foreground">
                Promovemos la reutilización responsable de servidores y componentes empresariales.
                Ofrecemos productos reacondicionados con garantía para extender el ciclo de vida de
                la tecnología, reducir residuos electrónicos y disminuir el impacto ambiental sin
                comprometer la calidad ni el rendimiento.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Recycle,
                  title: "Reutilización responsable",
                  text: "Extendemos la vida útil de servidores certificados en lugar de destinarlos a chatarra.",
                },
                {
                  icon: Leaf,
                  title: "Menor huella ambiental",
                  text: "Cada equipo reacondicionado evita emisiones asociadas a la fabricación de uno nuevo.",
                },
                {
                  icon: Cpu,
                  title: "Rendimiento sin concesiones",
                  text: "Pruebas exhaustivas y garantía real para que la sostenibilidad no baje la calidad.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-7 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-400 text-white shadow-lg shadow-emerald-500/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl opacity-0 transition group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
