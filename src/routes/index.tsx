import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ServerHub.co · Servidores HP, Dell y Lenovo en Colombia" },
      {
        name: "description",
        content:
          "Distribuidor de servidores nuevos y reacondicionados HP, Dell, Lenovo y componentes para data center en Colombia. Cotización rápida y envíos nacionales.",
      },
      { property: "og:title", content: "ServerHub.co · Servidores empresariales en Colombia" },
      {
        property: "og:description",
        content:
          "Servidores, memorias, procesadores, almacenamiento y redes para infraestructura TI. Garantía, asesoría y soporte especializado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
