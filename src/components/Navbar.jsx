import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Características', href: '#features' },
  { label: 'Módulos',         href: '#modules'  },
  { label: 'Para quién',      href: '#roles'    },
  { label: 'Precios',         href: '#pricing'  },
]

export default function Navbar({ onSignup }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <span className="text-2xl">🏋️</span>
          <span>Gym<span className="text-brand-500">sis</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            Contactar
          </a>
          <button
            onClick={onSignup}
            className="px-4 py-2 text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-xl transition-colors shadow-sm"
          >
            Registrarse gratis
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { onSignup(); setOpen(false); }}
            className="block mt-3 py-2.5 px-4 text-center text-sm font-semibold bg-brand-500 text-white rounded-xl"
          >
            Registrarse gratis
          </button>
        </div>
      )}
    </header>
  )
}
