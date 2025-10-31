export function Skills() {
  const skills = [
    { name: "Frontend Development", level: 90, tags: ["HTML", "CSS", "JS", "React"] },
    { name: "Python Programming", level: 85, tags: ["Django", "Data Analysis"] },
    { name: "UI/UX Design", level: 80, tags: ["Figma", "Adobe XD"] },
    { name: "Arduino & IoT", level: 75, tags: ["Embedded Systems"] },
    { name: "Problem Solving", level: 88, tags: ["Algorithms", "DSA"] },
  ]

  return (
    <section id="skills" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm font-bold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-xl border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Tools I Use</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["VS Code", "GitHub", "Firebase", "Figma", "Arduino IDE", "Terminal", "ChatGPT", "Chrome DevTools"].map(
              (tool, i) => (
                <div
                  key={i}
                  className="p-4 bg-muted rounded-lg text-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  {tool}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
