"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")
    return { hours, minutes, seconds }
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return date.toLocaleDateString(undefined, options)
  }

  const { hours, minutes, seconds } = formatTime(time)

  return (
    <Card className="bg-background/60 backdrop-blur-md border-border/40 animate-pulse-glow">
      <CardContent className="p-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 font-mono text-3xl font-bold">
            <div className="bg-primary/10 rounded-md px-2 py-1 backdrop-blur-sm">{hours}</div>
            <div className="animate-pulse">:</div>
            <div className="bg-primary/10 rounded-md px-2 py-1 backdrop-blur-sm">{minutes}</div>
            <div className="animate-pulse">:</div>
            <div className="bg-primary/10 rounded-md px-2 py-1 backdrop-blur-sm">{seconds}</div>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">{formatDate(time)}</div>

          {/* Scan line effect */}
          <div className="relative w-full h-1 mt-3 overflow-hidden">
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute h-full w-20 bg-primary/60 animate-scan-line"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
