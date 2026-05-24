'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-olive-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-8 lg:gap-12 pt-24 pb-12 lg:pt-0 lg:pb-0">
          {/* Content - Left aligned */}
          <motion.div
            style={{ opacity, y }}
            className="relative z-10 order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-white leading-[1.1] text-balance">
                Diseño modular que transforma espacios
              </h1>
              <p className="mt-6 lg:mt-8 text-base sm:text-lg text-white/70 max-w-md leading-relaxed">
                Creamos muebles únicos y personalizados que combinan funcionalidad, estética y la más alta calidad artesanal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium uppercase tracking-[0.15em] border border-white text-white hover:bg-white hover:text-olive-dark transition-all duration-300 min-h-12"
              >
                Ver Catálogo
              </Link>
              <Link
                href="/cotizacion"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 min-h-12"
              >
                Solicitar Cotización
              </Link>
            </motion.div>
          </motion.div>

          {/* Image - Right side, floating naturally */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative order-2 h-[50vh] sm:h-[60vh] lg:h-[80vh]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Interior de diseño moderno con muebles modulares"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/40 flex items-start justify-center pt-2"
        >
          <motion.div className="w-0.5 h-2 bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
