'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import { categories, contactInfo } from '@/lib/data'

export function QuoteForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    producto: '',
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
    
    const message = `¡Hola! Mi nombre es ${formData.nombre}.

📧 Correo: ${formData.email}
📱 Teléfono: ${formData.telefono}
📍 Ciudad: ${formData.ciudad}
🪑 Producto de interés: ${formData.producto}

💬 Mensaje adicional:
${formData.mensaje || 'Sin mensaje adicional'}

Me gustaría recibir más información y una cotización. ¡Gracias!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
              Solicita tu cotización
            </h2>
            <p className="text-muted-foreground mt-4 mb-8">
              Completa el formulario y nos pondremos en contacto contigo a través de WhatsApp para brindarte la mejor atención.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                  Número de contacto (WhatsApp)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <label htmlFor="ciudad" className="block text-sm font-medium text-foreground mb-2">
                  Ciudad
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  required
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Tu ciudad"
                />
              </div>

              <div>
                <label htmlFor="producto" className="block text-sm font-medium text-foreground mb-2">
                  Producto de interés
                </label>
                <select
                  id="producto"
                  name="producto"
                  required
                  value={formData.producto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje adicional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 text-base font-medium bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
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
            className="lg:pt-20"
          >
            <div className="bg-secondary rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Información de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Teléfono</p>
                    <p className="text-base text-foreground mt-1">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Correo electrónico</p>
                    <p className="text-base text-foreground mt-1">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Dirección</p>
                    <p className="text-base text-foreground mt-1">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="text-base font-medium text-foreground mb-4">
                  Horario de atención
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p>Domingos y festivos: Cerrado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
