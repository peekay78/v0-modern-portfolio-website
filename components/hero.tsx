"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let time = 0

    const drawGradientSphere = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.2

      time += 0.01

      // Create gradient
      const gradient = ctx.createRadialGradient(centerX - 30, centerY - 30, 0, centerX, centerY, radius * 1.5)

      // Blue to pink gradient
      gradient.addColorStop(0, "#6366f1")
      gradient.addColorStop(0.5, "#ec4899")
      gradient.addColorStop(1, "#ef4444")

      // Draw rotating ring
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(time)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 15
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.stroke()

      ctx.restore()

      // Draw glow effect
      const glowGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.5, centerX, centerY, radius * 2)
      glowGradient.addColorStop(0, "rgba(99, 102, 241, 0.1)")
      glowGradient.addColorStop(1, "rgba(99, 102, 241, 0)")

      ctx.fillStyle = glowGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 2, 0, Math.PI * 2)
      ctx.fill()

      animationId = requestAnimationFrame(drawGradientSphere)
    }

    drawGradientSphere()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PK
          </div>
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium">
            Hire Me
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-in fade-in duration-1000">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Building Smart,
                </span>
                <br />
                <span className="text-foreground">Efficient Digital Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Computer Science student at VIT Chennai, passionate about developing modern web experiences and
                exploring the intersection of hardware and software through Cyber-Physical Systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 font-medium">
                View My Work
              </button>
              <button className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all font-medium">
                Download Resume
              </button>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="mailto:priyanshukumar.dev@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors text-muted-foreground hover:text-primary"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/priyanshukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors text-muted-foreground hover:text-primary"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-2 9.5H6V14h2v-4.5zm-1-1.5c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm8 5c0 .55-.45 1-1 1h-2v-2.5c0-.83-.67-1.5-1.5-1.5S9 9.67 9 10.5V14h-2V8.5h2v.5c.42-.63 1.34-1 2-1 1.66 0 3 1.34 3 3V14z" />
                </svg>
              </a>
              <a
                href="https://github.com/priyanshukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors text-muted-foreground hover:text-primary"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.91 1.186.092-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.413 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - 3D Canvas */}
          <div className="relative h-96 lg:h-[500px] animate-in fade-in slide-in-from-right duration-1000">
            <canvas
              ref={canvasRef}
              className="w-full h-full rounded-2xl animate-glow"
              style={{
                boxShadow: "0 0 60px rgba(99, 102, 241, 0.2), 0 0 120px rgba(239, 68, 68, 0.1)",
              }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
