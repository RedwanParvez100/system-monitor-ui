"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalY: number
      oscillationSpeed: number
      oscillationDistance: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.originalY = this.y
        this.size = Math.random() * 3 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.2
        this.oscillationSpeed = Math.random() * 0.02
        this.oscillationDistance = Math.random() * 5
        this.color =
          theme === "dark"
            ? `rgba(${Math.floor(Math.random() * 80 + 80)}, ${Math.floor(Math.random() * 80 + 120)}, ${Math.floor(Math.random() * 80 + 160)}, ${Math.random() * 0.4 + 0.1})`
            : `rgba(${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(Math.random() * 50 + 100)}, ${Math.floor(Math.random() * 50 + 150)}, ${Math.random() * 0.3 + 0.1})`
      }

      update() {
        this.x += this.speedX
        // Add gentle oscillation
        this.y = this.originalY + Math.sin(Date.now() * this.oscillationSpeed) * this.oscillationDistance
        this.originalY += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.originalY > canvas.height) this.originalY = 0
        else if (this.originalY < 0) this.originalY = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 15000))
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      ctx.strokeStyle = theme === "dark" ? "rgba(100, 150, 255, 0.03)" : "rgba(50, 100, 200, 0.03)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-70" />
}
