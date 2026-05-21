const FEATURES = [
  {
    emoji: '⚡',
    title: 'Configuración en minutos',
    description: 'Configura tu gimnasio, agrega clientes y lanza tu primer plan de membresía el mismo día.',
  },
  {
    emoji: '📱',
    title: 'Check-in',
    description: 'El staff registra la entrada de cada cliente directamente desde el panel con un solo clic. Un check-in por día por cliente, con historial completo y estadísticas de días pico y horas de mayor afluencia.',
  },
  {
    emoji: '📊',
    title: 'Reportes en tiempo real',
    description: 'Ingresos, retención, asistencia, clientes nuevos y proyecciones disponibles cuando los necesitas.',
  },
  {
    emoji: '🔔',
    title: 'Notificaciones automáticas',
    description: 'El sistema te avisa cuando una membresía está por vencer o cuando un cliente lleva tiempo sin asistir.',
  },
  {
    emoji: '🔐',
    title: 'Datos privados y seguros',
    description: 'Tu información, tus clientes y tus finanzas son completamente privados. Nadie más tiene acceso a los datos de tu gimnasio.',
  },
  {
    emoji: '🔒',
    title: 'Seguro y con roles',
    description: 'Control de acceso por roles: Administrador, Staff y Cliente. Cada quien ve solo lo que le corresponde.',
  },
  {
    emoji: '📈',
    title: 'Biometría y seguimiento',
    description: 'Registra composición corporal, IMC, grasa visceral y objetivos. Muestra el progreso a tus clientes.',
  },
  {
    emoji: '📦',
    title: 'Inventario y ventas',
    description: 'Controla stock, registra ventas con descuento automático y lleva historial de compras por cliente.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Por qué Gymsis
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Todo lo que tu gimnasio necesita,
            <br />
            <span className="text-brand-500">en un solo sistema</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Diseñado para eliminar las hojas de cálculo, los cuadernos y los mensajes de WhatsApp.
            Gymsis es el sistema operativo de tu gimnasio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-100 transition-colors">
                {f.emoji}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
