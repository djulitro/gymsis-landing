import { useState } from 'react'

const MODULES = [
  {
    id: 'clients',
    icon: '👥',
    label: 'Clientes',
    color: 'bg-sky-500',
    title: 'Gestión completa de clientes',
    description:
      'Registra y administra todos tus clientes desde un solo lugar. Consulta su estado, plan activo, historial de asistencias, compras y medidas corporales.',
    bullets: [
      'Búsqueda y filtrado instantáneo',
      'Historial de membresías y renovaciones',
      'Registro de ventas por cliente',
      'Creación de cuenta para portal del cliente',
      'Check-in administrativo manual',
    ],
  },
  {
    id: 'subscriptions',
    icon: '💳',
    label: 'Membresías',
    color: 'bg-emerald-500',
    title: 'Planes y membresías flexibles',
    description:
      'Crea planes a medida para tu negocio. Mensual, trimestral, anual o cualquier duración que definas. El sistema controla activaciones, vencimientos y renovaciones automáticamente.',
    bullets: [
      'Planes ilimitados para tu gimnasio',
      'Una sola membresía activa por cliente',
      'Expiración automática diaria',
      'Notificaciones de vencimiento próximo',
      'Historial completo de suscripciones',
    ],
  },
  {
    id: 'attendance',
    icon: '✅',
    label: 'Asistencia',
    color: 'bg-violet-500',
    title: 'Control de asistencia sin fricciones',
    description:
      'El staff registra la entrada de cada socio directamente desde el panel con un solo clic. Un check-in por día por cliente, con historial completo y estadísticas de días y horas pico.',
    bullets: [
      'Check-in manual desde el panel del staff',
      'Calendario visual en el portal del cliente',
      'Reporte de días y horas pico',
      'Detección de socios sin asistencia reciente',
      'Historial completo de entradas',
    ],
  },
  {
    id: 'biometrics',
    icon: '📐',
    label: 'Biometría',
    color: 'bg-amber-500',
    title: 'Seguimiento corporal y progreso',
    description:
      'Lleva el historial de composición corporal de cada cliente. Muéstrale su evolución con gráficos de peso, grasa y músculo a lo largo del tiempo.',
    bullets: [
      'Peso, talla, grasa, músculo, IMC',
      'Grasa visceral, edad corporal y metabolismo basal',
      'Objetivos de peso y composición',
      'Gráficos de progreso histórico',
      'Visible en el portal del cliente',
    ],
  },
  {
    id: 'inventory',
    icon: '📦',
    label: 'Inventario',
    color: 'bg-rose-500',
    title: 'Control de productos e inventario',
    description:
      'Administra el stock de tu tienda o snack bar. Registra entradas y salidas, busca productos y recibe alertas de stock bajo.',
    bullets: [
      'Productos con categoría y precio',
      'Movimientos de entrada y salida',
      'Stock en tiempo real',
      'Indicador visual de stock bajo',
      'Paginación y búsqueda',
    ],
  },
  {
    id: 'reports',
    icon: '📊',
    label: 'Reportes',
    color: 'bg-indigo-500',
    title: 'Analítica para tomar mejores decisiones',
    description:
      'Dashboards de negocio que muestran lo más importante: ingresos, retención, asistencia y proyecciones. Sin necesidad de exportar a Excel.',
    bullets: [
      'Ingresos por suscripciones y ventas',
      'Tasa de retención y clientes en riesgo',
      'Suscripciones por vencer en 7, 15 y 30 días',
      'Proyección de ingresos',
      'Clientes nuevos y crecimiento mensual',
    ],
  },
]

export default function Modules() {
  const [active, setActive] = useState('clients')
  const current = MODULES.find((m) => m.id === active)

  return (
    <section id="modules" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Módulos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
            Sistema de gestión para gimnasios:
            <br />
            <span className="text-brand-500">cada módulo para el día a día</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={[
                'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                active === m.id
                  ? 'bg-white shadow-md text-gray-900 border border-gray-200'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-white/60',
              ].join(' ')}
            >
              <span>{m.icon}</span>
              <span>{m.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {current && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: text */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className={`w-14 h-14 rounded-2xl ${current.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                  {current.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">{current.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{current.description}</p>
                <ul className="space-y-2.5">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: visual */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 flex items-center justify-center min-h-64">
                <div className="w-full max-w-sm">
                  {/* Mini UI mock */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className={`h-2 ${current.color}`} />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl ${current.color} flex items-center justify-center text-xl text-white`}>
                          {current.icon}
                        </div>
                        <div>
                          <div className="h-3 bg-gray-200 rounded w-24 mb-1.5" />
                          <div className="h-2.5 bg-gray-100 rounded w-16" />
                        </div>
                      </div>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 shrink-0" />
                          <div className="flex-1 space-y-1">
                            <div className="h-2.5 bg-gray-200 rounded w-full" />
                            <div className="h-2 bg-gray-100 rounded w-3/4" />
                          </div>
                          <div className="w-12 h-5 rounded-full bg-brand-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
