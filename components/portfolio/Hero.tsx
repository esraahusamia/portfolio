import { ArrowRight, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-sm md:text-base font-mono text-(--brand) font-medium">
                Frontend Developer & Team Lead
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight text-balance">
                Hi, I'm Esraa Al Husamia
              </h1>
            </div>

            <p className="text-lg md:text-xl text-neutral-800 leading-relaxed text-pretty max-w-xl">
              A frontend developer with over 7 years of experience turning design into fast, accessible, and
              maintainable web applications. Specializing in React, TypeScript, Angular, and modern frontend
              architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-(--brand) text-white font-medium rounded-lg hover:bg-(--brand-dark) transition-colors"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-900 text-neutral-900 font-medium rounded-lg hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>

  
          </div>

          <div className="relative hidden md:block">
            <div className="aspect-square rounded-2xl bg-neutral-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop&q=80"
                alt="Professional developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-(--accent-color) rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-(--brand) rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
