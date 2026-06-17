const ROLES = [
  {
    emoji: '🏢',
    title: 'Administrador',
    badge: 'bg-brand-100 text-brand-700',
    description:
      'Accede a todos los módulos operativos de su organización. Gestiona la operación comercial, los reportes, los planes y las ventas.',
    access: [
      'Dashboard con indicadores del negocio',
      'Clientes, membresías y biometría',
      'Inventario, ventas y reportes',
      'Notificaciones y seguimiento de retención',
    ],
  },
  {
    emoji: '🛠️',
    title: 'Staff',
    badge: 'bg-amber-100 text-amber-700',
    description:
      'Personal operativo con acceso a las funciones del día a día. Puede registrar asistencias, gestionar clientes e inventario.',
    access: [
      'Dashboard general',
      'Clientes y asistencia',
      'Inventario (sin eliminar)',
      'Sin acceso a reportes ni ventas',
    ],
  },
  {
    emoji: '💪',
    title: 'Cliente',
    badge: 'bg-emerald-100 text-emerald-700',
    description:
      'El cliente final accede a su propio portal con información de su membresía, asistencias, historial de compras y composición corporal.',
    access: [
      'Estado y plan de membresía activo',
      'Calendario de asistencias',
      'Historial de compras y suscripciones',
      'Progreso corporal y biometría',
      'Rutinas de entrenamiento y progreso',
    ],
  },
]

export default function Roles() {
  return (
    <section id="roles" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Para quién es
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
            Software para gimnasios con acceso
            <br />
            <span className="text-brand-500">según el rol de cada usuario</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Gymsis adapta la experiencia según el tipo de usuario. Administradores, staff y socios tienen acceso exactamente a lo que necesitan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ROLES.map((r) => (
            <div
              key={r.title}
              className="flex flex-col p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{r.emoji}</div>
              <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold mb-3 ${r.badge}`}>
                {r.title}
              </span>
              <p className="text-sm text-gray-500 mb-5 flex-1 leading-relaxed">{r.description}</p>
              <ul className="space-y-2">
                {r.access.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="mt-0.5 shrink-0 text-brand-500">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
