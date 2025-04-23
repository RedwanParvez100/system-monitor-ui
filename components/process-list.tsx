import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Cpu, Database, FileText, Globe, Terminal } from "lucide-react"

export function ProcessList() {
  const processes = [
    {
      id: 1,
      name: "system_core.exe",
      cpu: "12%",
      memory: "420 MB",
      status: "running",
      icon: Terminal,
    },
    {
      id: 2,
      name: "database_service.exe",
      cpu: "8%",
      memory: "860 MB",
      status: "running",
      icon: Database,
    },
    {
      id: 3,
      name: "network_monitor.exe",
      cpu: "4%",
      memory: "240 MB",
      status: "running",
      icon: Globe,
    },
    {
      id: 4,
      name: "security_scan.exe",
      cpu: "15%",
      memory: "380 MB",
      status: "running",
      icon: Cpu,
    },
    {
      id: 5,
      name: "file_indexer.exe",
      cpu: "3%",
      memory: "120 MB",
      status: "running",
      icon: FileText,
    },
    {
      id: 6,
      name: "backup_service.exe",
      cpu: "0%",
      memory: "85 MB",
      status: "idle",
      icon: Database,
    },
    {
      id: 7,
      name: "update_checker.exe",
      cpu: "0%",
      memory: "65 MB",
      status: "idle",
      icon: Globe,
    },
  ]

  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-2">
        {processes.map((process) => (
          <div key={process.id} className="flex items-center justify-between p-2 rounded-md hover:bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                <process.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-mono text-sm">{process.name}</div>
                <div className="text-xs text-muted-foreground">PID: {1000 + process.id}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm">{process.cpu}</div>
                <div className="text-xs text-muted-foreground">CPU</div>
              </div>
              <div className="text-right">
                <div className="text-sm">{process.memory}</div>
                <div className="text-xs text-muted-foreground">Memory</div>
              </div>
              <Badge variant={process.status === "running" ? "default" : "secondary"} className="font-mono text-xs">
                {process.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
