"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Cpu, Database, HardDrive, Shield, Wifi } from "lucide-react"
import { useState, useEffect } from "react"

export function SystemStatus() {
  // Add some animation by simulating fluctuating values
  const [cpuValue, setCpuValue] = useState(42)
  const [memoryValue, setMemoryValue] = useState(65)
  const [storageValue, setStorageValue] = useState(72)
  const [networkValue, setNetworkValue] = useState(28)

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuValue((prev) => Math.max(35, Math.min(50, prev + (Math.random() - 0.5) * 5)))
      setMemoryValue((prev) => Math.max(60, Math.min(70, prev + (Math.random() - 0.5) * 3)))
      setNetworkValue((prev) => Math.max(20, Math.min(35, prev + (Math.random() - 0.5) * 8)))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">CPU</span>
          </div>
          <Badge variant="outline" className="font-mono text-xs animate-pulse-glow">
            {cpuValue.toFixed(1)}%
          </Badge>
        </div>
        <Progress value={cpuValue} className="h-1" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Memory</span>
          </div>
          <Badge variant="outline" className="font-mono text-xs">
            {memoryValue.toFixed(1)}%
          </Badge>
        </div>
        <Progress value={memoryValue} className="h-1" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HardDrive className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Storage</span>
          </div>
          <Badge variant="outline" className="font-mono text-xs">
            {storageValue}%
          </Badge>
        </div>
        <Progress value={storageValue} className="h-1" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Network</span>
          </div>
          <Badge variant="outline" className="font-mono text-xs animate-pulse">
            {networkValue.toFixed(1)}%
          </Badge>
        </div>
        <Progress value={networkValue} className="h-1" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Security</span>
          </div>
          <Badge variant="outline" className="font-mono text-xs">
            <span className="mr-1 h-2 w-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
            OK
          </Badge>
        </div>
      </div>
    </div>
  )
}
