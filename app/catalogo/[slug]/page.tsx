'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { ProjectModal } from '@/components/project-modal'
import { categories, projects, type Project } from '@/lib/data'
import { use } from 'react'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params)
  const category = categories.find(c => c.slug === resolvedParams.slug)
  
  if (!category) {
    notFound()
  }

  const categoryProjects = projects.filter(p => p.categoryId === category.id)

  return (
    <CategoryContent category={category} projects={categoryProjects} />
  )
}

interface CategoryContentProps {
  category: typeof categories[0]
  projects: Project[]
}

function CategoryContent({ category, projects }: CategoryContentProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/catalogo" 
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.15em] text-text-secondary hover:text-foreground transition-colors duration-300 mb-8 min-h-12 py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </Link>

          <div className="max-w-2xl mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3">
              Categoría
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
              {category.name}
            </h1>
            <p className="text-text-secondary mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
              {category.description}
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <ProductCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => openModal(project)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <p className="text-text-secondary text-sm sm:text-base lg:text-lg">
                Próximamente añadiremos proyectos a esta categoría.
              </p>
              <Link
                href="/cotizacion"
                className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-4 text-sm font-sans font-medium uppercase tracking-[0.15em] border border-foreground text-foreground hover:bg-foreground hover:text-card transition-all duration-300 min-h-12"
              >
                Solicitar Cotización Personalizada
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  )
}
