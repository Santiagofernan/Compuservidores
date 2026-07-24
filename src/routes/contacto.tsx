import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y cotización · ServerHub.co" },
      {
        name: "description",
        content:
          "Solicita tu cotización de servidores y componentes. Contáctanos por WhatsApp, correo o visítanos en Bogotá. Respuesta rápida y asesoría especializada.",
      },
      { property: "og:title", content: "Contáctanos · ServerHub.co" },
      {
        property: "og:description",
        content:
          "Formulario de cotización con integración a WhatsApp, correo y Google Maps.",
      },
      { property: "og:url", content: "/contacto" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

const PHONE = "573000000000";
const EMAIL = "ventas@serverhub.co";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Correo inválido").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Teléfono inválido")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Solo números y símbolos +-()"),
  message: z.string().trim().min(10, "Cuéntanos más detalles").max(1000),
});

function Contacto() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const text = `Solicitud de cotización\n\nNombre: ${v.name}\nEmpresa: ${v.company || "-"}\nCorreo: ${v.email}\nTeléfono: ${v.phone}\n\nMensaje:\n${v.message}`;
    const wa = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank", "noopener");
    setSent(true);
  };

  const mailto = () => {
    const v = values;
    const subject = `Cotización solicitada por ${v.name || "cliente"}`;
    const body = `Nombre: ${v.name}\nEmpresa: ${v.company}\nCorreo: ${v.email}\nTeléfono: ${v.phone}\n\n${v.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b border-border bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Contacto
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Solicita tu cotización
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Escríbenos y un asesor te responderá con la mejor propuesta técnica y comercial en
              pocas horas.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-5 md:px-6">
            {/* Form */}
            <form
              onSubmit={submit}
              noValidate
              className="md:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              {sent && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <div>
                    Abrimos tu conversación de WhatsApp. Si prefieres, también puedes enviarnos un
                    correo con los mismos datos.
                  </div>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" error={errors.name}>
                  <input
                    value={values.name}
                    onChange={set("name")}
                    maxLength={100}
                    className="input"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Empresa" error={errors.company}>
                  <input
                    value={values.company}
                    onChange={set("company")}
                    maxLength={120}
                    className="input"
                    autoComplete="organization"
                  />
                </Field>
                <Field label="Correo" error={errors.email}>
                  <input
                    value={values.email}
                    onChange={set("email")}
                    maxLength={200}
                    type="email"
                    className="input"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Teléfono" error={errors.phone}>
                  <input
                    value={values.phone}
                    onChange={set("phone")}
                    maxLength={20}
                    type="tel"
                    className="input"
                    autoComplete="tel"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Mensaje" error={errors.message}>
                    <textarea
                      value={values.message}
                      onChange={set("message")}
                      maxLength={1000}
                      rows={5}
                      className="input resize-none"
                      placeholder="Cuéntanos qué necesitas: modelo, cantidad, configuración…"
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/30 transition hover:brightness-110"
                >
                  <Send className="h-4 w-4" /> Solicitar Cotización
                </button>
                <button
                  type="button"
                  onClick={mailto}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  <Mail className="h-4 w-4" /> Enviar por correo
                </button>
              </div>

              <style>{`.input{width:100%;border-radius:0.5rem;border:1px solid var(--border);background:var(--background);padding:0.65rem 0.85rem;font-size:0.9rem;color:var(--foreground);outline:none;transition:box-shadow .15s} .input:focus{box-shadow:0 0 0 3px color-mix(in oklab, var(--primary) 30%, transparent)}`}</style>
            </form>

            {/* Aside */}
            <aside className="md:col-span-2 space-y-4">
              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <MessageSquare className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">+57 300 000 0000</div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Correo</div>
                  <div className="text-sm text-muted-foreground">{EMAIL}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Teléfono</div>
                  <div className="text-sm text-muted-foreground">+57 (1) 000 0000</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Oficina</div>
                  <div className="text-sm text-muted-foreground">Bogotá, Colombia</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Mapa */}
        <section className="border-t border-border bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-bold">Encuéntranos</h2>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Ubicación en Google Maps"
                src="https://www.google.com/maps?q=Bogot%C3%A1%2C+Colombia&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
