import {
  PackageCheck,
  ShieldCheck,
  Headphones,
  Truck,
  Wrench,
  BadgeDollarSign,
} from "lucide-react";

const items = [
  {
    icon: PackageCheck,
    title: "Productos Nuevos y Reacondicionados",
    text: "Amplia selección de equipos certificados listos para producción.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de Calidad",
    text: "Cada producto pasa pruebas y cuenta con respaldo de garantía.",
  },
  {
    icon: Headphones,
    title: "Asesoría Especializada",
    text: "Ingenieros TI que te ayudan a elegir la mejor configuración.",
  },
  {
    icon: Truck,
    title: "Envíos Nacionales",
    text: "Entregas seguras a toda Colombia con seguimiento en tiempo real.",
  },
  {
    icon: Wrench,
    title: "Soporte Técnico",
    text: "Acompañamiento posventa, mantenimiento y repuestos originales.",
  },
  {
    icon: BadgeDollarSign,
    title: "Excelente Relación Costo Beneficio",
    text: "Precios competitivos sin comprometer rendimiento ni respaldo.",
  },
];

export function WhyUs() {
  return (
    <section id="servicios" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            La mejor plataforma para tu infraestructura empresarial
          </h2>
          <p className="mt-4 text-muted-foreground">
            Combinamos experiencia, respaldo técnico y logística confiable para que tu operación
            nunca se detenga.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md shadow-primary/25">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
