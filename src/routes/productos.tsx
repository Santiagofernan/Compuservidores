import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Server,
  MemoryStick,
  Cpu,
  HardDrive,
  Network,
  Zap,
  Search,
  FileDown,
  MessageSquare,
  X,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PRODUCTS, CATEGORIES, BRANDS, type Product } from "@/data/products";
import { downloadDatasheet } from "@/lib/product-pdf";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Catálogo de servidores y componentes · CompuServidores LR" },
      {
        name: "description",
        content:
          "Catálogo de servidores HP, Dell, Lenovo, memorias DDR4/DDR5, procesadores Xeon y EPYC, almacenamiento SSD/HDD, redes y energía. Filtra y descarga fichas técnicas.",
      },
      { property: "og:title", content: "Catálogo de productos · CompuServidores LR" },
      {
        property: "og:description",
        content:
          "Servidores rack, torre y blade, memorias, procesadores, almacenamiento, redes y UPS para infraestructura TI en Colombia.",
      },
      { property: "og:url", content: "/productos" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/productos" }],
  }),
  component: Productos,
});

const CATEGORY_META: Record<
  (typeof CATEGORIES)[number],
  { icon: typeof Server; sub: string[]; blurb: string }
> = {
  Servidores: {
    icon: Server,
    sub: ["Rack", "Torre", "Blade"],
    blurb: "Rack, torre y blade de HP, Dell y Lenovo.",
  },
  Memorias: {
    icon: MemoryStick,
    sub: ["DDR4", "DDR5"],
    blurb: "Módulos ECC RDIMM certificados.",
  },
  Procesadores: {
    icon: Cpu,
    sub: ["Xeon Scalable", "EPYC"],
    blurb: "Xeon Scalable y AMD EPYC para servidores.",
  },
  Almacenamiento: {
    icon: HardDrive,
    sub: ["SSD", "NVMe", "HDD"],
    blurb: "SSD, NVMe y discos HDD empresariales.",
  },
  Redes: {
    icon: Network,
    sub: ["Switch", "NAS"],
    blurb: "Switches, NAS y equipos de red empresarial.",
  },
  Energía: {
    icon: Zap,
    sub: ["Fuentes", "UPS", "Accesorios"],
    blurb: "UPS, fuentes redundantes y accesorios.",
  },
};

function Productos() {
  const [category, setCategory] = useState<string>("all");
  const [brand, setBrand] = useState<string>("all");
  const [cpuGen, setCpuGen] = useState<string>("all");
  const [memory, setMemory] = useState<string>("all");
  const [storage, setStorage] = useState<string>("all");
  const [compat, setCompat] = useState<string>("");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase().slice(0, 100);
    const c = compat.trim().toLowerCase().slice(0, 100);
    return PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (brand !== "all" && p.brand !== brand) return false;
      if (cpuGen !== "all" && !(p.cpuGen ?? "").includes(cpuGen)) return false;
      if (memory !== "all" && !(p.memoryCapacity ?? "").includes(memory)) return false;
      if (storage !== "all" && !(p.storageType ?? "").includes(storage)) return false;
      if (c && !(p.compatibility ?? "").toLowerCase().includes(c)) return false;
      if (term) {
        const hay = [p.name, p.brand, p.category, p.subcategory, p.description]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(term)) return false;
      }
      return true;
    });
  }, [category, brand, cpuGen, memory, storage, compat, q]);

  const activeFilters =
    (category !== "all" ? 1 : 0) +
    (brand !== "all" ? 1 : 0) +
    (cpuGen !== "all" ? 1 : 0) +
    (memory !== "all" ? 1 : 0) +
    (storage !== "all" ? 1 : 0) +
    (compat ? 1 : 0);

  const reset = () => {
    setCategory("all");
    setBrand("all");
    setCpuGen("all");
    setMemory("all");
    setStorage("all");
    setCompat("");
    setQ("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Catálogo
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Servidores y componentes empresariales
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Explora nuestras categorías o usa el buscador y los filtros avanzados para encontrar
              exactamente lo que necesitas. Descarga la ficha técnica en PDF de cada producto.
            </p>
          </div>
        </section>

        {/* Category cards */}
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((c) => {
                const meta = CATEGORY_META[c];
                const Icon = meta.icon;
                const active = category === c;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(active ? "all" : c)}
                    className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all hover:-translate-y-1 hover:shadow-xl ${
                      active
                        ? "border-primary/60 bg-primary/5 shadow-primary/10"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold">{c}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{meta.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {meta.sub.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Ver Productos →
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search + filters */}
        <section className="border-t border-border bg-secondary/40 py-10">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Buscar por nombre, marca o modelo…"
                  className="w-full rounded-md border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                {filtered.length} de {PRODUCTS.length} productos
                {activeFilters > 0 && (
                  <button
                    onClick={reset}
                    className="ml-3 inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <X className="h-3 w-3" /> Limpiar filtros
                  </button>
                )}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <Select label="Marca" value={brand} onChange={setBrand} options={["all", ...BRANDS]} />
              <Select
                label="Categoría"
                value={category}
                onChange={setCategory}
                options={["all", ...CATEGORIES]}
              />
              <Select
                label="Gen. CPU"
                value={cpuGen}
                onChange={setCpuGen}
                options={["all", "Intel Xeon Scalable Gen2", "Intel Xeon Scalable", "AMD EPYC 7003"]}
              />
              <Select
                label="Memoria"
                value={memory}
                onChange={setMemory}
                options={["all", "16GB", "32GB", "64GB", "DDR4", "DDR5"]}
              />
              <Select
                label="Almacenamiento"
                value={storage}
                onChange={setStorage}
                options={["all", "SSD", "NVMe", "HDD", "SAS", "SATA"]}
              />
              <label className="flex flex-col text-xs font-medium text-muted-foreground">
                Compatibilidad
                <input
                  value={compat}
                  onChange={(e) => setCompat(e.target.value)}
                  placeholder="ej. DL380, iDRAC"
                  className="mt-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
                No encontramos productos que coincidan. Ajusta los filtros o escríbenos para una
                cotización personalizada.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="flex flex-col text-xs font-medium text-muted-foreground">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === "all" ? `Todas` : o}
          </option>
        ))}
      </select>
    </label>
  );
}

function ProductCard({ p }: { p: Product }) {
  const Icon =
    CATEGORY_META[p.category as (typeof CATEGORIES)[number]]?.icon ?? Server;
  const waLink = `https://wa.me/573000000000?text=${encodeURIComponent(
    `Hola, me interesa cotizar: ${p.name}`,
  )}`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <Icon className="h-20 w-20 text-primary/80 transition group-hover:scale-110" />
        <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-xs font-semibold text-foreground backdrop-blur">
          {p.brand}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          {p.subcategory}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold">{p.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {p.cpuGen && (
            <>
              <dt>CPU</dt>
              <dd className="text-foreground truncate">{p.cpuGen}</dd>
            </>
          )}
          {p.memoryCapacity && (
            <>
              <dt>Memoria</dt>
              <dd className="text-foreground truncate">{p.memoryCapacity}</dd>
            </>
          )}
          {p.storageType && (
            <>
              <dt>Almacen.</dt>
              <dd className="text-foreground truncate">{p.storageType}</dd>
            </>
          )}
        </dl>
        <div className="mt-5 flex gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            <MessageSquare className="h-4 w-4" /> Cotizar
          </a>
          <button
            onClick={() => downloadDatasheet(p)}
            className="inline-flex items-center justify-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
            aria-label={`Descargar ficha técnica de ${p.name}`}
          >
            <FileDown className="h-4 w-4" /> PDF
          </button>
        </div>
      </div>
    </article>
  );
}
