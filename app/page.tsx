import Hero from "@/components/portfolio/Hero"
import About from "@/components/portfolio/About"
import Projects from "@/components/portfolio/Projects"
import Skills from "@/components/portfolio/Skills"
import Experience from "@/components/portfolio/Experience"
import Contact from "@/components/portfolio/Contact"
import Navigation from "@/components/portfolio/Navigation"

export default function Home() {
  return (
    <main className="bg-neutral-50">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
