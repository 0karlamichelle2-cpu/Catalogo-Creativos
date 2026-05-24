import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QuoteForm } from '@/components/quote-form'

export const metadata = {
  title: 'Cotización | CREATIVOS estudio modular',
  description: 'Solicita una cotización personalizada para tus muebles modulares. Nos pondremos en contacto contigo a través de WhatsApp.',
}

export default function CotizacionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Cotización
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
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
