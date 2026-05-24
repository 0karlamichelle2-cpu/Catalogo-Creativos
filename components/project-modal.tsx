'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Palette, Box, Ruler } from 'lucide-react'
import type { Project } from '@/lib/data'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-near-black/90 z-50"
            onClick={onClose}
          />

          {/* Modal - Full screen on mobile */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 lg:inset-6 xl:inset-12 bg-card z-50 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-full overflow-y-auto overscroll-contain">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-4">
                    Detalles del proyecto
                  </p>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-foreground">
                    {project.name}
                  </h2>

                  <div className="mt-8 lg:mt-12 space-y-6 lg:space-y-8 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 border border-border-subtle flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-sans uppercase tracking-[0.15em] text-text-secondary">Ubicación</p>
                        <p className="text-sm sm:text-base text-foreground mt-1">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 border border-border-subtle flex items-center justify-center flex-shrink-0">
                        <Palette className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-sans uppercase tracking-[0.15em] text-text-secondary">Colores</p>
                        <p className="text-sm sm:text-base text-foreground mt-1">{project.colors.join(', ')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 border border-border-subtle flex items-center justify-center flex-shrink-0">
                        <Box className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-sans uppercase tracking-[0.15em] text-text-secondary">Material</p>
                        <p className="text-sm sm:text-base text-foreground mt-1">{project.material}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 border border-border-subtle flex items-center justify-center flex-shrink-0">
                        <Ruler className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-sans uppercase tracking-[0.15em] text-text-secondary">Medidas</p>
                        <p className="text-sm sm:text-base text-foreground mt-1">{project.dimensions}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/cotizacion"
                    className="mt-8 lg:mt-12 w-full py-4 text-center text-sm font-sans font-medium uppercase tracking-[0.15em] border border-foreground text-foreground hover:bg-foreground hover:text-card transition-all duration-300 min-h-12"
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
