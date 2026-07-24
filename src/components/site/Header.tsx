import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Server } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Inicio", to: "/", hash: undefined as string | undefined },
  { label: "Productos", to: "/productos" },
  { label: "Marcas", to: "/marcas" },
  { label: "Servicios", to: "/", hash: "servicios" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Server className="h-5 w-5" />
          </span>
          <span>CompuServidores <span className="text-accent">LR</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              activeOptions={{ exact: n.to === "/" && !n.hash }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contacto"
            className="hidden lg:inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/30 transition hover:brightness-110"
          >
            Cotizar
          </Link>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Cotizar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
