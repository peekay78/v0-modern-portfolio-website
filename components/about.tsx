export function About() {
  return (
    <section id="about" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Priyanshu Kumar, a Computer Science student at VIT Chennai, passionate about developing modern web
              experiences and exploring the intersection of hardware and software through Cyber-Physical Systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity about how things work. From building Arduino-based assistive
              devices to creating responsive web applications, I'm constantly learning and pushing the boundaries of
              what's possible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Education</div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 pb-4">
                <h3 className="text-xl font-bold text-foreground">B.Tech, CSE (Cyber-Physical Systems)</h3>
                <p className="text-muted-foreground">VIT Chennai • 2025-2029</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground">Senior Secondary</h3>
                <p className="text-muted-foreground">St. Michael's High School, Patna • 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
