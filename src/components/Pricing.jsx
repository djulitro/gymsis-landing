const PLANS = [
  {
    name: 'Starter',
    price: '$19.990',
    period: '/ mes',
    description: 'Ideal para gimnasios pequeños que están arrancando.',
    highlight: false,
    features: [
      'Hasta 25 clientes',
      'Clientes, membresías y asistencia',
      'Clases grupales y entrenamiento personal',
      'Inventario y ventas',
      'Dashboard con indicadores clave',
      'Biometría y seguimiento corporal',
      'Rutinas de entrenamiento',
      'Reporteria básica',
      'Soporte por correo',
    ],
    cta: 'Empezar con Starter',
  },
  {
    name: 'Pro',
    price: '$39.990',
    period: '/ mes',
    description: 'Para gimnasios en crecimiento que necesitan más control.',
    highlight: true,
    badge: 'Más popular',
    features: [
      'Hasta 100 clientes',
      'Todo lo de Starter',
      'Reportes y analítica avanzada',
      'Notificaciones de vencimiento',
      'Gestión de trainers y horarios',
      'Soporte prioritario',
    ],
    cta: 'Empezar con Pro',
  },
  {
    name: 'Empresarial',
    price: 'A medida',
    period: '',
    description: 'Para negocios que necesitan configuración personalizada y acompañamiento.',
    highlight: false,
    features: [
      'Hasta 500 clientes',
      'Todo lo de Pro',
      'Configuración personalizada',
      'Capacitación para tu equipo',
      'Soporte dedicado por WhatsApp',
      'Acceso anticipado a nuevas funciones',
    ],
    cta: 'Contactar ventas',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Precios
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
            Precios simples para tu gimnasio,
            <span className="text-brand-500"> sin sorpresas</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Software para gimnasios en Chile desde $19.990/mes. Sin contratos de permanencia ni letra chica.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={[
                'relative flex flex-col rounded-3xl p-8 border transition-all duration-300',
                p.highlight
                  ? 'bg-brand-500 border-brand-500 shadow-2xl shadow-brand-200 scale-105'
                  : 'bg-white border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50',
              ].join(' ')}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow">
                  {p.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-black mb-1 ${p.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {p.name}
                </h3>
                <p className={`text-sm mb-4 ${p.highlight ? 'text-brand-100' : 'text-gray-500'}`}>
                  {p.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${p.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {p.price}
                  </span>
                  <span className={`text-sm ${p.highlight ? 'text-brand-100' : 'text-gray-400'}`}>
                    {p.period}
                  </span>
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 shrink-0 text-base ${p.highlight ? 'text-brand-100' : 'text-brand-500'}`}>
                      ✓
                    </span>
                    <span className={p.highlight ? 'text-brand-50' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={[
                  'block text-center py-3 px-6 rounded-2xl text-sm font-bold transition-all duration-200',
                  p.highlight
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm',
                ].join(' ')}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          ¿Tienes dudas? <a href="#contact" className="text-brand-500 hover:underline font-medium">Contáctanos</a> y te asesoramos sin compromiso.
        </p>
      </div>
    </section>
  )
}
