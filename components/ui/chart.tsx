"use client"
import {
  Area,
  AreaChart as RechartsAreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"

interface ChartProps {
  data: any[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: any) => string
  showLegend?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  startEndOnly?: boolean
  showTooltip?: boolean
  showGradient?: boolean
  layout?: "horizontal" | "vertical"
}

export function AreaChart({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  showLegend,
  showXAxis,
  showYAxis,
  showGridLines,
  startEndOnly,
  showTooltip,
  showGradient,
}: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey={index} tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={valueFormatter} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(value) => [valueFormatter ? valueFormatter(value) : value]} />
        {showLegend && <Legend />}
        {categories.map((category, i) => (
          <Area
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[i % colors.length]}
            fill={colors[i % colors.length]}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  )
}

export function BarChart({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  showLegend,
  showXAxis,
  showYAxis,
  showGridLines,
  showTooltip,
  layout,
}: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} layout={layout || "horizontal"} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey={index} tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={valueFormatter} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(value) => [valueFormatter ? valueFormatter(value) : value]} />
        {showLegend && <Legend />}
        {categories.map((category, i) => (
          <Bar key={category} dataKey={category} fill={colors[i % colors.length]} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
