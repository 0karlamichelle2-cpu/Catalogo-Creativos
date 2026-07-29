'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, MapPin } from 'lucide-react'
import { categories, contactInfo } from '@/lib/data'

export function QuoteForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ciudad: '',
    producto: '',
    medidas: '',
    presupuesto: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hola, quiero solicitar una cotización con CREATIVOS estudio modular:
- Nombre: ${formData.nombre}
- Tipo de mueble: ${formData.producto}
- Medidas: ${formData.medidas || 'No especificadas'}
- Presupuesto: ${formData.presupuesto || 'No especificado'}
- Teléfono: ${formData.telefono}
- Ciudad: ${formData.ciudad}
- Comentarios: ${formData.mensaje || 'Sin comentarios'}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3">
              Contacto
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-foreground text-balance">
              Solicita tu cotización
            </h2>
            <p className="text-text-secondary mt-4 mb-8 text-sm sm:text-base leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo a través de WhatsApp para brindarte la mejor atención.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-xs font-sans uppercase tracking-[0.15em] text-foreground mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-12 border border-border-subtle bg-card text-foreground placeholder:text-text-secondary focus:outline-none focus:border-foreground transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-xs font-sans uppercase tracking-[0.15em] text-foreground mb-2">
                  Número de contacto (WhatsApp)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-12 border border-border-subtle bg-card text-foreground placeholder:text-text-secondary focus:outline-none focus:border-foreground transition-colors duration-300 text-sm sm:text-base"
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <label htmlFor="ciudad" className="block text-xs font-sans uppercase tracking-[0.15em] text-foreground mb-2">
                  Ciudad
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  required
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-12 border border-border-subtle bg-card text-foreground placeholder:text-text-secondary focus:outline-none focus:border-foreground transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Tu ciudad"
                />
              </div>

              <div>
                <label htmlFor="producto" className="block text-xs font-sans uppercase tracking-[0.15em] text-foreground mb-2">
                  Producto de interés
                </label>
                <select
                  id="producto"
                  name="producto"
                  required
                  value={formData.producto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-12 border border-border-subtle bg-card text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="medidas" className="block text-xs font-sans uppercase tracking-[0.15em] text-foreground mb-2">
                  Medidas aproximadas
                </label>
                <input
                  type="text"
                  id="medidas"
                  name="medidas"
                  value={formData.medidas}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-12 border border-border-subtle bg-card text-foreground placeholder:text-text-secondary focus:outline-none focus:border-foreground transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Ej: 2.5m x 0.6m x 2.4m"
                />
              </div>

              <div>
                <label htmlFor="presupuesto" className="block text-xs font-sans uppercase tracking-[0.15em] text-foreground mb-2">
                  Presupuesto estimado
                </label>
                <input
                  type="text"
                  id="presupuesto"
                  name="presupuesto"
                  value={formData.presupuesto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 min-h-12 border border-border-subtle bg-card text-foreground placeholder:text-text-secondary focus:outline-none focus:border-foreground transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Ej: $2.000.000 COP"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-xs font-sans uppercase tracking-[0.15em] text-foreground mb-2">
                  Comentarios adicionales
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-subtle bg-card text-foreground placeholder:text-text-secondary focus:outline-none focus:border-foreground transition-colors duration-300 resize-none text-sm sm:text-base"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 min-h-12 text-sm font-sans font-medium uppercase tracking-[0.15em] bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pt-16"
          >
            <div className="bg-card border border-border-subtle p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-secondary mb-3">
                Información
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-8">
                Datos de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border-subtle flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-[0.15em] text-text-secondary">Teléfono</p>
                    <p className="text-sm sm:text-base text-foreground mt-1">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border-subtle flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-[0.15em] text-text-secondary">Dirección</p>
                    <p className="text-sm sm:text-base text-foreground mt-1">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border-subtle">
                <p className="text-xs font-sans uppercase tracking-[0.15em] text-text-secondary mb-4">
                  Horario de atención
                </p>
                <div className="space-y-2 text-sm text-foreground">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="text-text-secondary">Domingos y festivos: Cerrado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
