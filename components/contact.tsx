"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Have a project in mind? Let's talk about how I can help bring your ideas to life.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all font-medium"
          >
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="text-center">
            <div className="text-2xl mb-2">📧</div>
            <p className="text-sm text-muted-foreground mb-2">Email</p>
            <a
              href="mailto:priyanshukumar.dev@gmail.com"
              className="text-foreground font-semibold hover:text-primary transition-colors"
            >
              priyanshukumar.dev@gmail.com
            </a>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔗</div>
            <p className="text-sm text-muted-foreground mb-2">Connect With Me</p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://linkedin.com/in/priyanshukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent font-semibold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/priyanshukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent font-semibold transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
