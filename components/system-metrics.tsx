import { AreaChart } from "@/components/ui/chart"

export function SystemMetrics() {
  return (
    <div className="h-[300px]">
      <AreaChart
        data={[
          { time: "00:00", cpu: 10, memory: 20 },
          { time: "02:00", cpu: 20, memory: 30 },
          { time: "04:00", cpu: 35, memory: 45 },
          { time: "06:00", cpu: 40, memory: 50 },
          { time: "08:00", cpu: 55, memory: 65 },
          { time: "10:00", cpu: 60, memory: 70 },
          { time: "12:00", cpu: 75, memory: 80 },
          { time: "14:00", cpu: 50, memory: 65 },
          { time: "16:00", cpu: 40, memory: 60 },
          { time: "18:00", cpu: 50, memory: 55 },
          { time: "20:00", cpu: 30, memory: 40 },
          { time: "22:00", cpu: 20, memory: 30 },
        ]}
        index="time"
        categories={["cpu", "memory"]}
        colors={["#3b82f6", "#10b981"]}
        valueFormatter={(value) => `${value}%`}
        showLegend={true}
        showXAxis={true}
        showYAxis={true}
        showGridLines={true}
        startEndOnly={false}
        showTooltip={true}
        showGradient={true}
      />
    </div>
  )
}
