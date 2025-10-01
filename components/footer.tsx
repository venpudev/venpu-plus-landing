"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Descripción */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              {/* Asumiendo que tienes una versión blanca del logo en /public */}
              <Image src="/Logo-venpu_transparente1.png" alt="Venpu Plus Logo" width={120} height={30} />
            </Link>
            <p className="text-sm text-slate-400">
              Transformando automotoras con inteligencia artificial.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#casos-de-exito" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contacto@venpuplus.cl" className="hover:text-white transition-colors">contacto@venpuplus.cl</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            © 2025 Venpu Spa. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}