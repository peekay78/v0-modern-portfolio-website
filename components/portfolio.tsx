export function Portfolio() {
  const projects = [
    {
      title: "Obstacle Detection for the Visually Impaired",
      description:
        "Arduino-based assistive device using ultrasonic sensors to detect obstacles and provide audio feedback.",
      tags: ["Arduino", "IoT", "C++", "Hardware"],
      image: "/arduino-obstacle-detection-device.jpg",
    },
    {
      title: "Personal Task Tracker",
      description: "Modern web app for productivity and task management with real-time synchronization.",
      tags: ["React", "Firebase", "UI/UX", "Web"],
      image: "/task-tracker-web-application-dashboard.jpg",
    },
  ]

  return (
    <section id="work" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 text-primary hover:text-accent font-semibold flex items-center gap-2 transition-colors">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
