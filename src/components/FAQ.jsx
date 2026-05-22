const FAQS = [
  {
    q: '¿Cuánto tiempo toma configurar Gymsis?',
    a: 'La configuración inicial lleva menos de 30 minutos. Configuras tu gimnasio, defines tus planes de membresía, importas tus clientes y ya estás operando el mismo día.',
  },
  {
    q: '¿Gymsis funciona para gimnasios pequeños en Chile?',
    a: 'Sí. Gymsis está diseñado para gimnasios de todos los tamaños en Chile. El plan Starter parte desde $19.990/mes y es ideal para empezar a organizar tu negocio con un sistema profesional desde el día uno.',
  },
  {
    q: '¿Puedo controlar los pagos y membresías vencidas automáticamente?',
    a: 'Sí. El sistema marca automáticamente las membresías vencidas cada noche. Además puedes configurar notificaciones de alerta antes del vencimiento para gestionar renovaciones y no perder socios.',
  },
  {
    q: '¿Es un software para gimnasios en la nube?',
    a: 'Sí. Gymsis es 100% web y funciona en la nube. No necesitas instalar nada. Accedes desde cualquier computador, tablet o celular con conexión a internet.',
  },
  {
    q: '¿Los datos de mi gimnasio están seguros?',
    a: 'Sí. Tu información, tus clientes y tus finanzas son completamente privados. Gymsis opera en la nube con acceso restringido por organización. Nadie más tiene acceso a los datos de tu gimnasio.',
  },
  {
    q: '¿Cómo funciona el control de asistencia?',
    a: 'El staff registra la entrada de cada socio directamente desde el panel con un solo clic. Un check-in por día por cliente, con historial completo y estadísticas de días pico y horas de mayor afluencia.',
  },
  {
    q: '¿Los clientes pueden ver su información?',
    a: 'Sí. Puedes crear una cuenta de acceso para cada cliente. Ellos ingresan a un portal propio donde ven su plan, historial de asistencias, compras y composición corporal.',
  },
  {
    q: '¿Hay contrato de permanencia?',
    a: 'No. Gymsis es mes a mes. Puedes cancelar en cualquier momento sin penalidades ni cargos adicionales.',
  },
]

import { useState } from 'react'

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${index}`
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{q}</span>
        <span className={`text-brand-500 text-xl shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`} aria-hidden="true">
          +
        </span>
      </button>
      {open && (
        <p
          id={`${id}-answer`}
          role="region"
          aria-labelledby={`${id}-question`}
          className="pb-5 text-sm text-gray-500 leading-relaxed -mt-1"
        >
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Preguntas frecuentes
          </span>
          <h2 id="faq-heading" className="text-4xl font-black text-gray-900">
            Todo lo que necesitas saber sobre el software para gimnasios
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg px-6 sm:px-10">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
