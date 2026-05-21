const FAQS = [
  {
    q: '¿Cuánto tiempo toma configurar Gymsis?',
    a: 'La configuración inicial lleva menos de 30 minutos. Configuras tu gimnasio, defines tus planes de membresía, importas tus clientes y ya estás operando.',
  },
  {
    q: '¿Los datos de mi gimnasio están seguros?',
    a: 'Sí. Tu información, tus clientes y tus finanzas son completamente privados. Nadie más tiene acceso a los datos de tu gimnasio.',
  },
  {
    q: '¿Cómo funciona el check-in por staff?',
    a: 'El staff registra la entrada de cada cliente directamente desde el panel con un solo clic. Un check-in por día por cliente, con historial completo y estadísticas de días pico y horas de mayor afluencia.',
  },
  {
    q: '¿Los clientes pueden ver su información?',
    a: 'Sí. Puedes crear una cuenta de acceso para cada cliente. Ellos entran a un portal propio donde ven su plan, historial de asistencias, compras y composición corporal.',
  },
  {
    q: '¿Qué pasa cuando una membresía vence?',
    a: 'El sistema la marca automáticamente como vencida cada noche. Además puedes configurar notificaciones para avisar con anticipación a los clientes próximos a vencer.',
  },
  {
    q: '¿Hay contrato de permanencia?',
    a: 'No. Gymsis es mes a mes. Puedes cancelar en cualquier momento sin penalidades.',
  },
]

import { useState } from 'react'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{q}</span>
        <span className={`text-brand-500 text-xl shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-gray-500 leading-relaxed -mt-1">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-4xl font-black text-gray-900">¿Tienes dudas?</h2>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg px-6 sm:px-10">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
