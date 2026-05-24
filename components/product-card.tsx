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
        className="group block w-full text-left"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Ver detalles
            </span>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-base font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {project.location}
          </p>
        </div>
      </button>
    </motion.div>
  )
}
