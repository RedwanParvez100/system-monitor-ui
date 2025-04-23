"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NotificationPanelProps {
  onClose: () => void
}

export function NotificationPanel({ onClose }: NotificationPanelProps) {
  const notifications = [
    {
      id: 1,
      title: "System Update Available",
      message: "Version 1.0.4 is ready to install",
      time: "Just now",
      unread: true,
      type: "update",
    },
    {
      id: 2,
      title: "Security Alert",
      message: "Unusual login attempt detected",
      time: "10 minutes ago",
      unread: true,
      type: "security",
    },
    {
      id: 3,
      title: "Backup Completed",
      message: "System backup completed successfully",
      time: "1 hour ago",
      unread: false,
      type: "info",
    },
    {
      id: 4,
      title: "Storage Warning",
      message: "Storage capacity reaching 75%",
      time: "3 hours ago",
      unread: false,
      type: "warning",
    },
    {
      id: 5,
      title: "Network Connection",
      message: "Connected to new network: NEXUS-SECURE",
      time: "Yesterday",
      unread: false,
      type: "info",
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-border/40">
        <h2 className="text-lg font-bold">Notifications</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border ${notification.unread ? "bg-primary/5 border-primary/20" : "border-border/40"}`}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-medium">
                  {notification.unread && <span className="mr-2 h-2 w-2 rounded-full bg-primary inline-block"></span>}
                  {notification.title}
                </h3>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border/40">
        <Button variant="outline" className="w-full">
          Clear All Notifications
        </Button>
      </div>
    </div>
  )
}
