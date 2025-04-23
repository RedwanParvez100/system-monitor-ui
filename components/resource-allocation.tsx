import { BarChart } from "@/components/ui/chart"

export function ResourceAllocation() {
  return (
    <div className="h-[300px]">
      <BarChart
        data={[
          { name: "System", value: 1.8 },
          { name: "Browser", value: 1.2 },
          { name: "Database", value: 0.8 },
          { name: "Security", value: 0.6 },
          { name: "Network", value: 0.5 },
          { name: "Other", value: 1.3 },
        ]}
        index="name"
        categories={["value"]}
        colors={["#3b82f6"]}
        valueFormatter={(value) => `${value} GB`}
        showLegend={false}
        showXAxis={true}
        showYAxis={true}
        showGridLines={true}
        showTooltip={true}
        layout="vertical"
      />
    </div>
  )
}
