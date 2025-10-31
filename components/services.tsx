export function Services() {
  const services = [
    {
      icon: "🎨",
      title: "Web Design",
      description:
        "Creating responsive, modern websites that look stunning on all devices and provide excellent user experience.",
    },
    {
      icon: "✨",
      title: "UI/UX Design",
      description:
        "Designing intuitive and engaging interfaces that users love, focusing on accessibility and usability.",
    },
    {
      icon: "⚡",
      title: "IoT Prototyping",
      description: "Developing simple Arduino-based solutions for real-world problems, blending hardware and software.",
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
