const experiences = [
  {
    company: "Eon Dental",
    role: "Frontend Team Lead",
    period: "May 2021 - Present",
    description:
      "Promoted to Frontend Team Lead after demonstrating technical excellence and leadership capabilities. Leading frontend development initiatives, mentoring team members, and architecting scalable solutions using React, TypeScript, Electron, and custom npm packages.",
    achievements: [
      "Built cross-platform desktop applications using Electron for internal tools",
      "Developed and published custom npm packages for component reusability",
      "Established atomic design system to improve consistency across projects",
      "Led migration from legacy codebases to modern React architecture",
    ],
  },
  {
    company: "Eon Dental",
    role: "Frontend Developer",
    period: "November 2019 - April 2021",
    description:
      "Developed healthcare management systems and internal tools using React, JavaScript, TypeScript, and CSS. Collaborated with cross-functional teams to deliver responsive, accessible web applications.",
    achievements: [
      "Built healthcare management platform with role-based access control",
      "Implemented responsive interfaces supporting multiple user roles",
      "Optimized application performance and accessibility standards",
      "Created reusable component libraries for faster development",
    ],
  },
  {
    company: "Codacity",
    role: "Frontend Developer",
    period: "March 2018 - October 2019",
    description:
      "Developed web applications using Angular, Bootstrap, and JavaScript. Focused on creating responsive, user-friendly interfaces and implementing modern frontend best practices.",
    achievements: [
      "Built healthcare management system with Angular and Bootstrap",
      "Implemented secure routing and authentication flows",
      "Developed responsive interfaces for multiple device sizes",
      "Collaborated with backend teams to integrate RESTful APIs",
    ],
  },
  {
    company: "RBK (Re:Coded Bootcamp)",
    role: "Full-Stack Development Bootcamp",
    period: "June 2017 - November 2017",
    description:
      "Intensive 5-month coding bootcamp focused on full-stack web development. Gained hands-on experience with modern web technologies, agile methodologies, and collaborative software development.",
  },
  {
    company: "University Education",
    role: "Computer Systems Engineering",
    period: "2011 - 2016",
    description:
      "Bachelor's degree in Computer Systems Engineering, building a strong foundation in computer science fundamentals, algorithms, data structures, and software engineering principles.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-3 mb-12 md:mb-16">
          <p className="text-sm md:text-base font-mono text-(--brand) font-medium">Career Journey</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 text-balance">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="relative pl-8 md:pl-12 pb-8 md:pb-12 border-l-2 border-neutral-200 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-(--brand) border-4 border-white" />

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900">{exp.role}</h3>
                    <span className="px-3 py-1 bg-neutral-100 text-xs font-mono text-neutral-800 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-(--brand)">{exp.company}</p>
                </div>

                <p className="text-neutral-800 leading-relaxed text-pretty">{exp.description}</p>

                {exp.achievements && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-neutral-900">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-800">
                          <div className="w-1.5 h-1.5 rounded-full bg-(--accent-color) flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
