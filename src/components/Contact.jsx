import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', gym: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // In production, connect to your preferred email/CRM service here
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
              Contacto
            </span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              ¿Listo para transformar
              <br />
              <span className="text-brand-500">tu gimnasio?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Completa el formulario y en menos de 24 horas nos ponemos en contacto para mostrarte cómo Gymsis puede funcionar para tu negocio.
            </p>

            <div className="space-y-5">
              {[
                { emoji: '📧', label: 'hola@gymsis.com' },
                { emoji: '⚡', label: 'Respuesta en menos de 24 h' },
                { emoji: '🎁', label: 'Demo gratuita sin compromiso' },
              ].map((i) => (
                <div key={i.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-xl shrink-0">
                    {i.emoji}
                  </div>
                  <span className="text-gray-700 font-medium">{i.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500 text-sm">
                  Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Nombre *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handle}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Correo *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handle}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Nombre del gimnasio
                  </label>
                  <input
                    name="gym"
                    type="text"
                    value={form.gym}
                    onChange={handle}
                    placeholder="Mi Gimnasio"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handle}
                    placeholder="Cuéntanos sobre tu gimnasio..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-brand-200"
                >
                  Solicitar demo gratuita →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Tu información es privada y nunca se compartirá con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
