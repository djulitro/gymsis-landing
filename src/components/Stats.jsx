const STATS = [
  { value: '10+', label: 'Módulos integrados'     },
  { value: '3',   label: 'Roles de usuario'        },
  { value: '∞',   label: 'Clientes soportados'     },
  { value: '24/7', label: 'Disponibilidad'         },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-black mb-1">{s.value}</p>
              <p className="text-sm text-brand-100 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
