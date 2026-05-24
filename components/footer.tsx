import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { contactInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-serif font-bold tracking-tight">
                CREATIVOS
              </span>
              <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
                estudio modular
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Diseñamos y fabricamos muebles modulares personalizados que transforman tus espacios en ambientes únicos y funcionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-olive-light transition-colors duration-300 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-white/70 hover:text-olive-light transition-colors duration-300 text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/cotizacion" className="text-white/70 hover:text-olive-light transition-colors duration-300 text-sm">
                  Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
              <li>{contactInfo.address}</li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-olive transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-olive transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} CREATIVOS estudio modular. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white/80 transition-colors duration-300">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors duration-300">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
