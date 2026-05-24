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
            className="fixed inset-0 bg-near-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-secondary rounded-2xl z-50 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:bg-muted transition-colors duration-300"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="h-full overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
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
                <div className="p-6 md:p-10 lg:p-12 flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                    {project.name}
                  </h2>

                  <div className="mt-8 space-y-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-olive" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Ubicación de instalación</p>
                        <p className="text-base text-foreground mt-1">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                        <Palette className="w-5 h-5 text-olive" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Colores del material</p>
                        <p className="text-base text-foreground mt-1">{project.colors.join(', ')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                        <Box className="w-5 h-5 text-olive" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Tipo de material</p>
                        <p className="text-base text-foreground mt-1">{project.material}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                        <Ruler className="w-5 h-5 text-olive" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Medidas del proyecto</p>
                        <p className="text-base text-foreground mt-1">{project.dimensions}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/cotizacion"
                    className="mt-8 w-full py-4 text-center text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-olive-dark transition-colors duration-300"
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
