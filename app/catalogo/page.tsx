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
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Nuestro Catálogo
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Explora nuestras categorías de muebles modulares y descubre el diseño perfecto para cada espacio de tu hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
