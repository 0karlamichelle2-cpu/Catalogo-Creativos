import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QuoteForm } from '@/components/quote-form'

export const metadata = {
  title: 'Cotización | CREATIVOS estudio modular',
  description: 'Solicita una cotización personalizada para tus muebles modulares. Nos pondremos en contacto contigo a través de WhatsApp.',
}

export default function CotizacionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3">
              Presupuesto
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
              Cotización
            </h1>
            <p className="text-text-secondary mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
              Cuéntanos sobre tu proyecto y recibe una cotización personalizada directamente en tu WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </main>
  )
}
