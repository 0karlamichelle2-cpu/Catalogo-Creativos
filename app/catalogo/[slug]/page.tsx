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
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/catalogo" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </Link>

          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              {category.name}
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              {category.description}
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Próximamente añadiremos proyectos a esta categoría.
              </p>
              <Link
                href="/cotizacion"
                className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-olive-dark transition-colors duration-300"
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
