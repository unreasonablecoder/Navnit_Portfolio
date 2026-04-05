import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App