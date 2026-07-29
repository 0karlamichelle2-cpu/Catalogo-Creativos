import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CategoryCard } from '@/components/category-card'
import { categories } from '@/lib/data'

export const metadata = {
  title: 'Catálogo | CREATIVOS estudio modular',
  description: 'Explora nuestro catálogo de muebles modulares: cocinas, closets, escritorios, centros de entretenimiento y más.',
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3">
              Colección
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
              Nuestro Catálogo
            </h1>
            <p className="text-text-secondary mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
              Explora nuestras categorías de muebles modulares y descubre el diseño perfecto para cada espacio de tu hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
