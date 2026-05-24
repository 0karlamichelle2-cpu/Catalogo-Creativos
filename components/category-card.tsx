'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Category } from '@/lib/data'

interface CategoryCardProps {
  category: Category
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/catalogo/${category.slug}`} className="group block">
        <div className="bg-card p-4 sm:p-6 lg:p-8">
          {/* Category label */}
          <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3 sm:mb-4">
            Categoría
          </p>
          
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4 sm:mb-6">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          
          {/* Category name */}
          <h3 className="text-lg sm:text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            {category.name}
          </h3>
          
          {/* Description */}
          <p className="text-xs sm:text-sm text-text-secondary mt-2 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
