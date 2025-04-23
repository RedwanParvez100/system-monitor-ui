"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState("Initializing systems...")
  const [scanLinePosition, setScanLinePosition] = useState(0)

  useEffect(() => {
    const statusMessages = [
      "Initializing systems...",
      "Loading core modules...",
      "Establishing secure connection...",
      "Calibrating sensors...",
      "Syncing data streams...",
      "Activating interface...",
    ]

    let currentStep = 0
    const totalSteps = statusMessages.length
    const interval = 2500 / totalSteps

    const timer = setInterval(() => {
      currentStep++
      const newProgress = Math.min(100, Math.floor((currentStep / totalSteps) * 100))
      setProgress(newProgress)

      if (currentStep < totalSteps) {
        setStatusText(statusMessages[currentStep])
      }

      if (currentStep >= totalSteps) {
        clearInterval(timer)
      }
    }, interval)

    // Scan line animation
    const scanTimer = setInterval(() => {
      setScanLinePosition((prev) => (prev + 1) % 100)
    }, 20)

    return () => {
      clearInterval(timer)
      clearInterval(scanTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMTUwLDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

      {/* Scan line */}
      <div
        className="absolute inset-x-0 h-[2px] bg-blue-500/30 z-10 pointer-events-none animate-scan-line"
        style={{
          boxShadow: "0 0 10px 3px rgba(59, 130, 246, 0.5)",
          top: `${scanLinePosition}%`,
        }}
      ></div>

      <div className="relative flex flex-col items-center z-20">
        <div className="relative flex flex-col items-center animate-float">
          <div className="absolute inset-0 rounded-full animate-pulse bg-primary/10 blur-xl"></div>
          <Shield className="relative h-24 w-24 text-primary animate-pulse-glow" />
        </div>

        <h1 className="mt-8 text-2xl font-bold tracking-tight font-mono">NEXUS</h1>

        <div className="mt-8 w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-in-out animate-pulse-glow"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground font-mono animate-typing overflow-hidden whitespace-nowrap">
          {statusText}
        </p>

        <div className="mt-8 flex items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-3 border-4 border-t-transparent border-r-primary border-b-transparent border-l-transparent rounded-full animate-spin animation-delay-150"></div>
            <div className="absolute inset-6 border-4 border-t-transparent border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin animation-delay-300"></div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary/80 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCA+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNNDMsMjQgTDIxLjUsMCBMMCwyNCBMMjEuNSw0OCBaIE00MywyNCBMNjQuNSwwIEw4NiwyNCBMNjQuNSw0OCBaIE0yMS41LDAgTDY0LjUsMCBNMCwyNCBMNDMsMjQgTDg2LDI0IE0yMS41LDQ4IEw2NC41LDQ4Ii8+PC9zdmc+')] opacity-20 pointer-events-none"></div>
    </div>
  )
}
