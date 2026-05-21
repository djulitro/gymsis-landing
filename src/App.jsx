import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Features from './components/Features'
import Stats    from './components/Stats'
import Modules  from './components/Modules'
import Roles    from './components/Roles'
import Pricing  from './components/Pricing'
import FAQ      from './components/FAQ'
import CTA      from './components/CTA'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Modules />
        <Roles />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
