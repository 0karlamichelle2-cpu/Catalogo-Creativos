import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'
import { contactInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Image
              src="/logo.png"
              alt="CREATIVOS estudio modular"
              width={140}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Diseñamos y fabricamos muebles modulares personalizados que transforman tus espacios en ambientes únicos y funcionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] mb-6">
              Navegación
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/cotizacion" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                  Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] mb-6">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
              <li>{contactInfo.address}</li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-8">
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-near-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-near-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm">
            © {new Date().getFullYear()} CREATIVOS estudio modular. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm text-white/40">
            <Link href="#" className="hover:text-white/80 transition-colors duration-300">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors duration-300">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
