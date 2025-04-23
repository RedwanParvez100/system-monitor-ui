"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  ChevronDown,
  Command,
  Cpu,
  Database,
  HardDrive,
  Layers,
  Menu,
  MessageSquare,
  Moon,
  Network,
  Search,
  Settings,
  Shield,
  Sun,
  Terminal,
  User,
  Wifi,
} from "lucide-react"
import { AreaChart } from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ParticleBackground } from "@/components/particle-background"
import { SystemStatus } from "@/components/system-status"
import { DigitalClock } from "@/components/digital-clock"
import { LoadingScreen } from "@/components/loading-screen"
import { NotificationPanel } from "@/components/notification-panel"
import { ProcessList } from "@/components/process-list"
import { ResourceAllocation } from "@/components/resource-allocation"
import { SystemMetrics } from "@/components/system-metrics"
import { RotatingElements } from "@/components/rotating-elements"
import { useTheme } from "next-themes"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [showNotifications, setShowNotifications] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const [cpuUsage, setCpuUsage] = useState(42)
  const [memoryUsage, setMemoryUsage] = useState(65)
  const [networkUsage, setNetworkUsage] = useState(28)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Simulate fluctuating system metrics
    const metricsInterval = setInterval(() => {
      setCpuUsage((prev) => Math.max(30, Math.min(60, prev + (Math.random() - 0.5) * 8)))
      setMemoryUsage((prev) => Math.max(55, Math.min(75, prev + (Math.random() - 0.5) * 5)))
      setNetworkUsage((prev) => Math.max(15, Math.min(40, prev + (Math.random() - 0.5) * 10)))
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(metricsInterval)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 font-mono text-lg font-bold text-primary">
            <Shield className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="hidden md:inline-block">NEXUS</span>
            <Badge variant="outline" className="ml-2 font-mono text-xs">
              v1.0.3
            </Badge>
          </div>
          <div className="flex items-center ml-auto gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search commands..."
                className="rounded-md border border-input bg-background/60 pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[200px] lg:w-[300px]"
              />
              <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>OP</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 z-50 h-full w-3/4 max-w-xs bg-background border-r border-border/40 p-4 glassmorphism"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 font-mono text-lg font-bold text-primary">
                  <Shield className="h-6 w-6 text-primary animate-pulse-glow" />
                  <span>NEXUS</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </div>
              <nav className="space-y-1 mb-6">
                <Button variant="ghost" className="w-full justify-start">
                  <Command className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Cpu className="mr-2 h-4 w-4" />
                  System
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Network className="mr-2 h-4 w-4" />
                  Network
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Database className="mr-2 h-4 w-4" />
                  Storage
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
              <div className="mt-auto">
                <SystemStatus />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Panel */}
      {showNotifications && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setShowNotifications(false)}
        >
          <div
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-background border-l border-border/40 p-4 glassmorphism"
            onClick={(e) => e.stopPropagation()}
          >
            <NotificationPanel onClose={() => setShowNotifications(false)} />
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex pt-16 min-h-screen">
        {/* Left Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-border/40 bg-background/80 backdrop-blur-md glassmorphism">
          <div className="p-4 flex-1 overflow-auto">
            <nav className="space-y-1 mb-6">
              <Button variant="secondary" className="w-full justify-start animate-pulse-glow">
                <Command className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Cpu className="mr-2 h-4 w-4" />
                System
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Network className="mr-2 h-4 w-4" />
                Network
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Database className="mr-2 h-4 w-4" />
                Storage
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </nav>
            <div className="space-y-4">
              <h3 className="text-xs font-medium text-muted-foreground">SYSTEM STATUS</h3>
              <SystemStatus />
            </div>

            <div className="mt-8">
              <RotatingElements />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">
            <div className="grid gap-6">
              {/* Overview Section */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold tracking-tight">System Overview</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      <span className="mr-1 h-2 w-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                      ONLINE
                    </Badge>
                    <Button variant="outline" size="sm" className="animate-pulse-glow">
                      <Terminal className="mr-2 h-4 w-4" />
                      Console
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-background/60 backdrop-blur-md border-border/40 hover:animate-pulse-glow transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{cpuUsage.toFixed(1)}%</div>
                      <Progress value={cpuUsage} className="h-2 mt-2" />
                      <p className="text-xs text-muted-foreground mt-2">8 cores @ 3.5GHz</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/60 backdrop-blur-md border-border/40 hover:animate-pulse-glow transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Memory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{(memoryUsage / 10).toFixed(1)} GB</div>
                      <Progress value={memoryUsage} className="h-2 mt-2" />
                      <p className="text-xs text-muted-foreground mt-2">9.4 GB available</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/60 backdrop-blur-md border-border/40 hover:animate-pulse-glow transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Network</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{(networkUsage / 3).toFixed(1)} MB/s</div>
                      <Progress value={networkUsage} className="h-2 mt-2" />
                      <p className="text-xs text-muted-foreground mt-2">1.2 GB transferred</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/60 backdrop-blur-md border-border/40 hover:animate-pulse-glow transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Storage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">420 GB</div>
                      <Progress value={72} className="h-2 mt-2" />
                      <p className="text-xs text-muted-foreground mt-2">164 GB available</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Performance Section */}
              <section>
                <Tabs defaultValue="performance" className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <TabsList className="bg-background/60 backdrop-blur-md">
                      <TabsTrigger value="performance">Performance</TabsTrigger>
                      <TabsTrigger value="processes">Processes</TabsTrigger>
                      <TabsTrigger value="network">Network</TabsTrigger>
                    </TabsList>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <HardDrive className="mr-2 h-4 w-4" />
                        Export Data
                      </Button>
                    </div>
                  </div>
                  <TabsContent value="performance" className="m-0">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="bg-background/60 backdrop-blur-md border-border/40">
                        <CardHeader>
                          <CardTitle>CPU Performance</CardTitle>
                          <CardDescription>Last 24 hours</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <SystemMetrics />
                        </CardContent>
                      </Card>
                      <Card className="bg-background/60 backdrop-blur-md border-border/40">
                        <CardHeader>
                          <CardTitle>Memory Allocation</CardTitle>
                          <CardDescription>Current usage by application</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ResourceAllocation />
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="processes" className="m-0">
                    <Card className="bg-background/60 backdrop-blur-md border-border/40">
                      <CardHeader>
                        <CardTitle>Active Processes</CardTitle>
                        <CardDescription>Currently running system processes</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ProcessList />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="network" className="m-0">
                    <Card className="bg-background/60 backdrop-blur-md border-border/40">
                      <CardHeader>
                        <CardTitle>Network Activity</CardTitle>
                        <CardDescription>Current network traffic</CardDescription>
                      </CardHeader>
                      <CardContent className="h-[300px]">
                        <AreaChart
                          data={[
                            { time: "00:00", download: 0.4, upload: 0.2 },
                            { time: "01:00", download: 0.3, upload: 0.1 },
                            { time: "02:00", download: 0.2, upload: 0.2 },
                            { time: "03:00", download: 0.8, upload: 0.4 },
                            { time: "04:00", download: 0.9, upload: 0.2 },
                            { time: "05:00", download: 0.3, upload: 0.3 },
                            { time: "06:00", download: 0.2, upload: 0.1 },
                            { time: "07:00", download: 1.4, upload: 0.7 },
                            { time: "08:00", download: 2.3, upload: 1.2 },
                            { time: "09:00", download: 1.9, upload: 0.8 },
                            { time: "10:00", download: 1.5, upload: 0.6 },
                            { time: "11:00", download: 1.2, upload: 0.5 },
                          ]}
                          index="time"
                          categories={["download", "upload"]}
                          colors={["#2563eb", "#16a34a"]}
                          valueFormatter={(value) => `${value} MB/s`}
                          showLegend={true}
                          showXAxis={true}
                          showYAxis={true}
                          showGridLines={true}
                          startEndOnly={false}
                          showTooltip={true}
                          showGradient={true}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:flex flex-col w-80 border-l border-border/40 bg-background/80 backdrop-blur-md glassmorphism">
          <div className="p-4 flex-1 overflow-auto">
            <div className="mb-6">
              <DigitalClock />
            </div>
            <div className="space-y-4 mb-6">
              <h3 className="text-xs font-medium text-muted-foreground">QUICK ACTIONS</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-20 flex flex-col items-center justify-center hover:animate-pulse-glow transition-all duration-300"
                >
                  <Shield className="h-6 w-6 mb-1" />
                  <span>Security Scan</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-20 flex flex-col items-center justify-center hover:animate-pulse-glow transition-all duration-300"
                >
                  <Layers className="h-6 w-6 mb-1" />
                  <span>Backup</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-20 flex flex-col items-center justify-center hover:animate-pulse-glow transition-all duration-300"
                >
                  <Wifi className="h-6 w-6 mb-1" />
                  <span>Network</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-20 flex flex-col items-center justify-center hover:animate-pulse-glow transition-all duration-300"
                >
                  <User className="h-6 w-6 mb-1" />
                  <span>Users</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-medium text-muted-foreground">SYSTEM SETTINGS</h3>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Firewall</span>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Auto-connect</span>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Notifications</span>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Auto-backup</span>
                  </div>
                  <Switch checked={false} />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
