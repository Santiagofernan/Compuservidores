import { Star } from "lucide-react";

const items = [
  {
    name: "Andrés Molina",
    role: "Jefe de TI, Grupo Andino",
    text: "Renovamos el data center con servidores HP reacondicionados. Excelente asesoría y cero fallos en producción.",
  },
  {
    name: "Laura Restrepo",
    role: "Gerente de Infraestructura, LogiCol",
    text: "Cotización rápida, precios competitivos y garantía real. Se volvieron nuestro proveedor de cabecera.",
  },
  {
    name: "Camilo Reyes",
    role: "CTO, FinTechBog",
    text: "Nos entregaron discos y memorias Dell certificadas en 48 horas. El soporte técnico marca la diferencia.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Empresas que confían en nosotros
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                  {t.name
                    .split(" ")
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
