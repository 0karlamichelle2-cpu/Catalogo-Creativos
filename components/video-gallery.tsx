'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { videoProjects } from '@/lib/data'

export function VideoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3">
            Galería
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-foreground text-balance">
            Nuestros proyectos
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
            Aquí puedes ver algunos de los trabajos que hemos entregado — proyectos reales, terminados, de clientes reales. Cada uno refleja lo que hacemos y cómo lo hacemos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
          <button
            onClick={() => scroll('left')}
            className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 border border-border-subtle bg-card items-center justify-center transition-opacity duration-300 hover:border-foreground ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Desplazar hacia la izquierda"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 border border-border-subtle bg-card items-center justify-center transition-opacity duration-300 hover:border-foreground ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Desplazar hacia la derecha"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrollable Container - Touch/swipe friendly on mobile */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {videoProjects.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-72 sm:w-80 lg:w-96 snap-start"
              >
                <div className="group relative aspect-video overflow-hidden bg-muted cursor-pointer">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-near-black/20 group-hover:bg-near-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 border border-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base font-serif font-medium text-foreground">
                  {video.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
