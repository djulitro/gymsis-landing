const FOOTER_LINKS = [
  {
    title: 'Producto',
    links: [
      { label: 'Características', href: '#features' },
      { label: 'Módulos',         href: '#modules'  },
      { label: 'Precios',         href: '#pricing'  },
      { label: 'Para quién',      href: '#roles'    },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Preguntas frecuentes', href: '#faq'     },
      { label: 'Contacto',             href: '#contact' },
      { label: 'Solicitar demo',       href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos de uso',      href: '#' },
      { label: 'Privacidad',           href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-3" aria-label="Gymsis - Software para gimnasios en Chile">
              <span className="text-2xl" aria-hidden="true">🏋️</span>
              Gym<span className="text-brand-400">sis</span>
            </a>
            <p className="text-sm leading-relaxed mb-3">
              Software para gimnasios en Chile. Sistema de gestión de membresías, asistencia, biometría, inventario y reportes.
            </p>
            <p className="text-xs text-gray-500">
              🇨🇱 Chile · <a href="mailto:hola@gymsis.com" className="hover:text-white transition-colors">hola@gymsis.com</a>
            </p>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Gymsis — Software para gimnasios en Chile. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Hecho con ❤️ para el mundo fitness chileno
          </p>
        </div>
      </div>
    </footer>
  )
}
