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
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="bg-secondary/90 backdrop-blur-sm p-4 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-serif font-semibold text-foreground">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
