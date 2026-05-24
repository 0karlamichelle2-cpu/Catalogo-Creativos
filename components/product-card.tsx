'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/data'

interface ProductCardProps {
  project: Project
  index: number
  onClick: () => void
}

export function ProductCard({ project, index, onClick }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onClick}
        className="group block w-full text-left bg-card p-4 sm:p-6 min-h-12"
      >
        {/* Category label */}
        <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3 sm:mb-4">
          Proyecto
        </p>
        
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4 sm:mb-6">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        
        {/* Product name */}
        <h3 className="text-base sm:text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>
        
        {/* Location */}
        <p className="text-xs sm:text-sm text-text-secondary mt-1">
          {project.location}
        </p>
      </button>
    </motion.div>
  )
}
