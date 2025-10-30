export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl bg-neutral-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-3">
              <p className="text-sm md:text-base font-mono text-(--brand) font-medium">About Me</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 text-balance">
                Crafting scalable, accessible web experiences
              </h2>
            </div>

            <div className="space-y-4 text-neutral-800 leading-relaxed">
              <p className="text-base md:text-lg">
                With over 7 years of experience in frontend development, I specialize in transforming designs into fast,
                accessible, and maintainable web applications. My work centers on modern frontend practices:
                component-driven development, responsive architecture, and performance optimization.
              </p>

              <p className="text-base md:text-lg">
                Currently focused on building a scalable atomic design system to promote consistency, reusability, and
                developer experience across projects. I'm passionate about creating solutions that empower teams and
                delight users.
              </p>

              <p className="text-base md:text-lg">
                Beyond frontend engineering, I expand my impact through full-solution development—creating internal
                tools with low-code platforms like Retool, customizing CRM systems such as EspoCRM, and building
                cross-platform desktop applications using Electron. All powered and packaged with custom npm packages
                for modularity, reuse, and clean dependency management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
