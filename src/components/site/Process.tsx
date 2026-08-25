import { Search, FileText, CreditCard, Truck } from "lucide-react";

const steps = [
  { icon: Search, title: "Elige tu producto", text: "Explora el catálogo o pídenos ayuda para configurarlo." },
  { icon: FileText, title: "Solicita cotización", text: "Recibe tu propuesta técnica y comercial en pocas horas." },
  { icon: CreditCard, title: "Confirma y paga", text: "Métodos seguros y facturación electrónica para empresas." },
  { icon: Truck, title: "Recibe e instala", text: "Envío nacional y soporte para la puesta en marcha." },
];

export function Process() {
  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Proceso de compra
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Cuatro pasos y tus servidores en operación
          </h2>
        </div>

        <div className="relative mt-16 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-9 hidden h-px overflow-hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--primary) 15%, var(--accent) 50%, var(--primary) 85%, transparent 100%)",
            }}
          >
            <div className="h-full w-[40%] animate-[shimmer_3s_linear_infinite] bg-white/70" />
          </div>

          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative text-center">
                <div className="relative z-10 mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border border-primary/25 bg-background shadow-md shadow-primary/15">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-foreground text-xs font-bold text-background">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(260%); }
        }
      `}</style>
    </section>
  );
}
