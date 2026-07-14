import { lazy, Suspense, useState } from 'react'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import SignupModal from './components/SignupModal'

// Lazy loading para componentes below-the-fold → reduce bundle inicial y mejora LCP
const Features = lazy(() => import('./components/Features'))
const Stats    = lazy(() => import('./components/Stats'))
const Modules  = lazy(() => import('./components/Modules'))
const Roles    = lazy(() => import('./components/Roles'))
const Pricing  = lazy(() => import('./components/Pricing'))
const FAQ      = lazy(() => import('./components/FAQ'))
const CTA      = lazy(() => import('./components/CTA'))
const Contact  = lazy(() => import('./components/Contact'))
const Footer   = lazy(() => import('./components/Footer'))

export default function App() {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div className="font-sans">
      <Navbar onSignup={() => setShowSignup(true)} />
      <main>
        {/* Hero se carga de forma síncrona (above the fold / LCP crítico) */}
        <Hero onSignup={() => setShowSignup(true)} />
        <Suspense fallback={null}>
          <Features />
          <Stats />
          <Modules />
          <Roles />
          <Pricing onSignup={() => setShowSignup(true)} />
          <FAQ />
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <SignupModal 
        isOpen={showSignup} 
        onClose={() => setShowSignup(false)} 
      />
    </div>
  )
}
