import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: "Marcas · Lenovo, HPE, Dell EMC, Cisco y más · CompuServidores LR" },
      {
        name: "description",
        content:
          "Distribuidor autorizado de Lenovo, HPE, Dell EMC, Cisco, Supermicro, Synology, QNAP, WD, Crucial y Seagate para servidores y componentes en Colombia.",
      },
      { property: "og:title", content: "Nuestras marcas · CompuServidores LR" },
      {
        property: "og:description",
        content:
          "Trabajamos con los principales fabricantes de servidores, almacenamiento y redes empresariales.",
      },
      { property: "og:url", content: "/marcas" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/marcas" }],
  }),
  component: Marcas,
});

const BRAND_LOGOS = [
  { name: "Lenovo", color: "#E2231A" },
  { name: "HPE", color: "#01A982" },
  { name: "Dell EMC", color: "#007DB8" },
  { name: "Cisco", color: "#1BA0D7" },
  { name: "Supermicro", color: "#E2001A" },
  { name: "TRENDnet", color: "#00539B" },
  { name: "Synology", color: "#1F3557" },
  { name: "D-Link", color: "#003C7E" },
  { name: "QNAP", color: "#1E7CC0" },
  { name: "WD", color: "#0057B8" },
  { name: "Crucial", color: "#7A2A90" },
  { name: "Seagate", color: "#7DBA00" },
];

function LogoTile({ name, color }: { name: string; color: string }) {
  return (
    <div className="group relative flex h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 shadow-sm transition-all duration-300 hover:z-10 hover:scale-125 hover:border-primary/40 hover:shadow-2xl">
      <span
        className="text-2xl font-extrabold tracking-tight transition-colors"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

function Marcas() {
  const loop = [...BRAND_LOGOS, ...BRAND_LOGOS];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b border-border bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Marcas
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Trabajamos con los líderes de la industria
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Somos distribuidores de las marcas más reconocidas en servidores, almacenamiento y
              redes empresariales.
            </p>
          </div>
        </section>

        {/* Carrusel automático fila 1 */}
        <section className="overflow-hidden py-14">
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
              aria-hidden
            />
            <div className="overflow-hidden">
              <div className="flex w-max gap-6 animate-[marquee_35s_linear_infinite] py-4">
                {loop.map((b, i) => (
                  <LogoTile key={`a-${i}`} name={b.name} color={b.color} />
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden">
              <div className="flex w-max gap-6 animate-[marquee-reverse_40s_linear_infinite] py-4">
                {loop.map((b, i) => (
                  <LogoTile key={`b-${i}`} name={b.name} color={b.color} />
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
          `}</style>
        </section>

        {/* Grid estático */}
        <section className="border-t border-border bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-center text-2xl font-bold">Todas nuestras marcas aliadas</h2>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {BRAND_LOGOS.map((b) => (
                <div
                  key={b.name}
                  className="flex h-24 items-center justify-center rounded-xl border border-border bg-card p-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <span className="text-lg font-extrabold" style={{ color: b.color }}>
                    {b.name}
                  </span>
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
