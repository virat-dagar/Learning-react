import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import BuilderSteps from './components/BuilderSteps'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <Features />
        <BuilderSteps />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
