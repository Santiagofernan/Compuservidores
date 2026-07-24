import { Link } from "@tanstack/react-router";
import { Server, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400">
              <Server className="h-5 w-5" />
            </span>
            <span className="font-bold text-lg">ServerHub.co</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Distribuidor de servidores, componentes e infraestructura TI en Colombia.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Explorar</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/productos" className="hover:text-white">Productos</Link></li>
            <li><Link to="/marcas" className="hover:text-white">Marcas</Link></li>
            <li><Link to="/" hash="servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link to="/nosotros" className="hover:text-white">Nosotros</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Categorías</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Servidores Rack / Torre / Blade</li>
            <li>Memorias DDR4 / DDR5</li>
            <li>Almacenamiento SSD / HDD</li>
            <li>Redes y Energía</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-400" /> +57 300 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-400" /> ventas@serverhub.co</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-400" /> Bogotá, Colombia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ServerHub.co · Todos los derechos reservados.
      </div>
    </footer>
  );
}
