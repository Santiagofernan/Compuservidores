import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const PHONE = "573000000000"; // internacional sin '+'
const DEFAULT_MSG =
  "Hola, me interesa recibir asesoría sobre servidores y componentes.";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(DEFAULT_MSG);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const link = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      {open && (
        <div className="mb-3 w-[min(340px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl">
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div>
              <div className="text-sm font-semibold">Chat de atención</div>
              <div className="text-xs opacity-90">Respondemos en minutos</div>
            </div>
            <button aria-label="Cerrar" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-xs text-muted-foreground">
              Cuéntanos qué necesitas y te contactamos por WhatsApp.
            </p>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value.slice(0, 500))}
              rows={3}
              className="mt-3 w-full resize-none rounded-md border border-border bg-background p-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <Send className="h-4 w-4" /> Enviar por WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        aria-label="Abrir chat de WhatsApp"
        onClick={() => setOpen((s) => !s)}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition hover:scale-105"
      >
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#25D366]/40" />
        <MessageCircle className="relative h-6 w-6" />
      </button>
    </div>
  );
}
