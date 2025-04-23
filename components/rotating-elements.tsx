"use client"

import { Shield, Activity, Cpu, Database, Wifi } from "lucide-react"

export function RotatingElements() {
  return (
    <div className="relative h-40 w-40 mx-auto">
      {/* Center element */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-primary/10 rounded-full p-4 animate-pulse-glow">
          <Shield className="h-10 w-10 text-primary" />
        </div>
      </div>

      {/* Outer ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-secondary/80 rounded-full p-2">
            <Cpu className="h-5 w-5 text-secondary-foreground" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="bg-secondary/80 rounded-full p-2">
            <Database className="h-5 w-5 text-secondary-foreground" />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-secondary/80 rounded-full p-2">
            <Wifi className="h-5 w-5 text-secondary-foreground" />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
          <div className="bg-secondary/80 rounded-full p-2">
            <Activity className="h-5 w-5 text-secondary-foreground" />
          </div>
        </div>
      </div>

      {/* Inner ring - rotating in opposite direction */}
      <div className="absolute inset-2 border-2 border-dashed border-primary/30 rounded-full animate-spin-slower"></div>

      {/* Outer glow */}
      <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse-glow"></div>
    </div>
  )
}
