const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Angular",
      "TypeScript & JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5 & CSS3",
      "Responsive Design",
      "Web Accessibility (WCAG)",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Electron",
      "npm Package Development",
      "Component Libraries",
      "Atomic Design Systems",
      "State Management",
      "Testing (Jest, Vitest)",
      "Performance Optimization",
      "Git & Version Control",
    ],
  },
  {
    category: "Full-Stack & Platforms",
    skills: [
      "Retool (Low-Code)",
      "EspoCRM Customization",
      "Node.js",
      "REST APIs",
      "Desktop Applications",
      "Cross-Platform Development",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-mono text-(--brand) font-medium">Expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 text-balance">
            Skills & Technologies
          </h2>
          <p className="text-lg text-neutral-800 leading-relaxed text-pretty">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 text-balance">{category.category}</h3>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-neutral-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-(--brand) flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-(--brand) rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-balance">Always Learning, Always Growing</h3>
            <p className="text-lg leading-relaxed text-pretty opacity-90">
              The frontend landscape evolves rapidly. I stay current through continuous learning, experimenting with
              emerging technologies, and building solutions that push the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
