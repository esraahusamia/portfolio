const projects = [
  {
    title: "Healthcare Management System – Angular",
    description:
      "Built a unified doctor, client, and admin management platform using Angular, Bootstrap, and JavaScript. Implemented role-based views, secure routing, and responsive interfaces to support end-to-end clinic operations—from appointment scheduling to user management.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80",
    tags: ["Angular", "Bootstrap", "JavaScript", "Role-Based Access"],
  },
  {
    title: "Healthcare Management System – React",
    description:
      "Built a unified doctor, client, and admin management platform using React, Tailwind CSS, Bootstrap, and JavaScript. Implemented role-based views, secure routing, and responsive interfaces to support end-to-end clinic operations—from appointment scheduling to user management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    tags: ["React", "Tailwind CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "File Structure Manager – Electron Desktop App",
    description:
      "Engineered a cross-platform desktop application with Electron that lets users upload folders, rename files in bulk, restructure directory hierarchies, and export them in a new organized format—ideal for data cleanup or migration tasks.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80",
    tags: ["Electron", "Node.js", "File System", "Desktop App"],
  },
  {
    title: "Healthcare UI Components – npm Package",
    description:
      "Created and published a lightweight npm package with custom React components tailored for healthcare roles (doctors, admins, etc.). Designed for reusability and easy integration across multiple healthcare applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    tags: ["React", "npm", "Component Library", "TypeScript"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 mb-12 md:mb-16">
          <p className="text-sm md:text-base font-mono text-(--brand) font-medium">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 text-balance">
            Projects that made an impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 text-balance">{project.title}</h3>

                <p className="text-neutral-800 leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-xs font-medium text-neutral-800 rounded-full border border-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
