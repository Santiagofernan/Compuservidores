import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import hero from "@/assets/hero-datacenter.jpg.asset.json";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero.url}
          alt="Data center con servidores empresariales"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_60%)]" />
      </div>

      <Particles className="absolute inset-0 -z-10 h-full w-full" />

      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32 lg:py-40 md:px-6">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-sky-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            Distribuidor de servidores empresariales en Colombia
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Servidores, memorias y componentes{" "}
            <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
              para tu infraestructura TI
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-lg">
            Nuevos y reacondicionados de HP, Dell, Lenovo, Cisco y más. Cotización rápida,
            garantía de calidad y envíos a todo el país.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Solicitar Cotización <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Ver Catálogo
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 text-sm text-slate-200 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-sky-300" />
              <div>
                <dt className="font-semibold text-white">Garantía</dt>
                <dd className="text-slate-300">de calidad</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-sky-300" />
              <div>
                <dt className="font-semibold text-white">Envíos</dt>
                <dd className="text-slate-300">nacionales</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight className="h-5 w-5 text-sky-300" />
              <div>
                <dt className="font-semibold text-white">Asesoría</dt>
                <dd className="text-slate-300">especializada</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
