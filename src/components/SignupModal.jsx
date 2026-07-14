import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export default function SignupModal({ isOpen, onClose, onSuccess }) {
  const [form, setForm] = useState({
    gymName: '',
    adminName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handle = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!form.gymName || form.gymName.length < 3) {
      newErrors.gymName = 'El nombre del gimnasio debe tener al menos 3 caracteres'
    }
    if (!form.adminName || form.adminName.length < 2) {
      newErrors.adminName = 'Tu nombre debe tener al menos 2 caracteres'
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido'
    }
    if (!form.password || form.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres'
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors.password = 'La contraseña debe contener al menos una mayúscula'
    } else if (!/[0-9]/.test(form.password)) {
      newErrors.password = 'La contraseña debe contener al menos un número'
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }
    if (!form.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y la política de privacidad'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setErrors({})

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gymName: form.gymName,
          adminName: form.adminName,
          email: form.email,
          password: form.password,
          password_confirmation: form.confirmPassword,
          acceptTerms: form.acceptTerms,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.errors) {
          const serverErrors = {}
          Object.keys(data.errors).forEach(key => {
            serverErrors[key] = data.errors[key][0]
          })
          setErrors(serverErrors)
        } else {
          setErrors({ general: data.message || 'Error al crear la cuenta' })
        }
        return
      }

      setSuccess(true)
      if (onSuccess) onSuccess(data)
    } catch (err) {
      setErrors({ general: 'Error de conexión. Intenta nuevamente.' })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors z-10"
        >
          ✕
        </button>

        <div className="p-8">
          {success ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ¡Cuenta creada!
              </h3>
              <p className="text-gray-500 mb-6">
                Hemos enviado un correo a <strong>{form.email}</strong> con instrucciones para acceder a tu panel de administración.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Tu período de prueba de 30 días ha comenzado. ¡Disfruta todas las funciones de Gymsis!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-colors"
              >
                Entendido
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Crea tu cuenta gratis
                </h3>
                <p className="text-gray-500 text-sm">
                  30 días de prueba • Todas las funciones • Sin tarjeta de crédito
                </p>
              </div>

              {errors.general && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {errors.general}
                </div>
              )}

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Nombre del gimnasio *
                  </label>
                  <input
                    name="gymName"
                    type="text"
                    value={form.gymName}
                    onChange={handle}
                    placeholder="Ej: Gym Fitness Plus"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.gymName ? 'border-red-300' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition`}
                  />
                  {errors.gymName && (
                    <p className="mt-1 text-xs text-red-500">{errors.gymName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Tu nombre completo *
                  </label>
                  <input
                    name="adminName"
                    type="text"
                    value={form.adminName}
                    onChange={handle}
                    placeholder="Ej: Juan Pérez"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.adminName ? 'border-red-300' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition`}
                  />
                  {errors.adminName && (
                    <p className="mt-1 text-xs text-red-500">{errors.adminName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Correo electrónico *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="tu@gimnasio.com"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Contraseña *
                    </label>
                    <input
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handle}
                      placeholder="Mín. 8 caracteres"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.password ? 'border-red-300' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition`}
                    />
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Confirmar contraseña *
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      value={form.confirmPassword}
                      onChange={handle}
                      placeholder="Repite tu contraseña"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition`}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    checked={form.acceptTerms}
                    onChange={handle}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-300"
                  />
                  <label className="text-xs text-gray-500">
                    Acepto los{' '}
                    <a href="#terms" className="text-brand-500 hover:underline">términos de uso</a>
                    {' '}y la{' '}
                    <a href="#privacy" className="text-brand-500 hover:underline">política de privacidad</a>
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-xs text-red-500">{errors.acceptTerms}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-brand-500 hover:bg-brand-600 disabled:bg-gray-300 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-brand-200"
                >
                  {loading ? 'Creando cuenta...' : 'Empezar gratis por 30 días →'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  No se requiere tarjeta de crédito
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
