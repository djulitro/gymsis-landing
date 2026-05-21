export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-brand-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          Nuevo — Sistema listo para producción
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight animate-fade-in-up">
          Gestiona tu gimnasio
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-sky-400">
            sin complicaciones
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          Gymsis centraliza en un solo lugar las membresías, la asistencia, la biometría, el inventario y los reportes de tu gimnasio. Desde el día uno.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-brand-500 hover:bg-brand-600 text-white rounded-2xl shadow-lg shadow-brand-200 hover:shadow-brand-300 transition-all duration-200"
          >
            Solicitar demo gratuita →
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl transition-colors"
          >
            Ver características
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-gray-400 animate-fade-in delay-300">
          Sin tarjeta de crédito · Configuración en minutos · Soporte incluido
        </p>

        {/* Dashboard mockup */}
        <div className="mt-16 animate-fade-in-up delay-300">
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-gray-200 shadow-2xl shadow-gray-200/80 overflow-hidden bg-gray-50">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4">
                <div className="h-5 bg-gray-100 rounded-full max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-xs text-gray-400">app.gymsis.com/dashboard</span>
                </div>
              </div>
            </div>

            {/* Mock dashboard body */}
            <div className="p-6 bg-gray-50">
              {/* Stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { emoji: '👥', label: 'Clientes',    value: '248',      sub: '186 activos',  color: 'from-sky-50 to-sky-100' },
                  { emoji: '💳', label: 'Membresías',  value: '186',      sub: 'planes activos', color: 'from-emerald-50 to-emerald-100' },
                  { emoji: '💰', label: 'Ventas hoy',  value: '$14,200',  sub: 'vs $11,500 ayer', color: 'from-amber-50 to-amber-100' },
                  { emoji: '📦', label: 'Inventario',  value: '530 uds',  sub: '12 productos',  color: 'from-violet-50 to-violet-100' },
                ].map((c) => (
                  <div key={c.label} className={`bg-gradient-to-br ${c.color} rounded-2xl p-4`}>
                    <div className="text-2xl mb-1">{c.emoji}</div>
                    <div className="text-xs text-gray-500">{c.label}</div>
                    <div className="text-lg font-bold text-gray-900">{c.value}</div>
                    <div className="text-xs text-gray-400">{c.sub}</div>
                  </div>
                ))}
              </div>

              {/* Fake chart bar */}
              <div className="bg-white rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ingresos últimos 6 meses</span>
                  <span className="text-xs text-gray-400">▲ 12% vs mes anterior</span>
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 60, 45, 75, 65, 90].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-brand-500 to-brand-400"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-xs text-gray-400">
                        {['Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Shadow glow */}
          <div className="h-8 bg-gradient-to-b from-gray-200/50 to-transparent blur-xl -mt-2 rounded-full mx-16" />
        </div>
      </div>
    </section>
  )
}
