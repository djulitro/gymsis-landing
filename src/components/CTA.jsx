export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-12 sm:p-16 shadow-2xl shadow-brand-200 relative overflow-hidden">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <div className="text-5xl mb-4">🏋️</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              Empieza hoy. Tu gimnasio
              <br />
              merece una mejor herramienta.
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
              Sin tarjeta de crédito, sin contratos. Solo solicita tu demo y te mostramos cómo funciona en tu gimnasio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-600 hover:bg-brand-50 font-bold rounded-2xl transition-colors text-base shadow"
              >
                Solicitar demo gratuita →
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-colors text-base border border-white/20"
              >
                Ver características
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
