"use client"

import { useEffect, useState } from "react"
import { Bar, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export default function ResultsChart() {
  const [activeChart, setActiveChart] = useState<"leads" | "conversion" | "engagement">("leads")
  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    // Generate chart data based on active chart type
    if (activeChart === "leads") {
      setChartData({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
        datasets: [
          {
            label: "Lead Volume",
            data: [28, 35, 42, 48, 52, 58, 62, 68],
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.5)",
          },
          {
            label: "Lead Quality Score",
            data: [65, 68, 70, 72, 75, 78, 80, 82],
            borderColor: "rgb(16, 185, 129)",
            backgroundColor: "rgba(16, 185, 129, 0.5)",
          },
        ],
      })
    } else if (activeChart === "conversion") {
      setChartData({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
        datasets: [
          {
            label: "Conversion Rate (%)",
            data: [3.2, 3.8, 4.2, 4.6, 5.0, 5.2, 5.4, 5.6],
            borderColor: "rgb(249, 115, 22)",
            backgroundColor: "rgba(249, 115, 22, 0.5)",
          },
        ],
      })
    } else if (activeChart === "engagement") {
      setChartData({
        labels: ["LinkedIn", "Google", "Facebook", "Email", "Landing Page"],
        datasets: [
          {
            label: "Engagement Rate (%)",
            data: [4.8, 3.2, 2.9, 5.6, 6.2],
            backgroundColor: [
              "rgba(59, 130, 246, 0.7)",
              "rgba(16, 185, 129, 0.7)",
              "rgba(249, 115, 22, 0.7)",
              "rgba(139, 92, 246, 0.7)",
              "rgba(236, 72, 153, 0.7)",
            ],
          },
        ],
      })
    }
  }, [activeChart])

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  if (!chartData) return <div className="h-64 flex items-center justify-center">Loading chart data...</div>

  return (
    <div>
      <div className="flex mb-4 border-b border-gray-200">
        <button
          onClick={() => setActiveChart("leads")}
          className={`px-4 py-2 text-sm font-medium ${activeChart === "leads" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Lead Generation
        </button>
        <button
          onClick={() => setActiveChart("conversion")}
          className={`px-4 py-2 text-sm font-medium ${activeChart === "conversion" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Conversion Rate
        </button>
        <button
          onClick={() => setActiveChart("engagement")}
          className={`px-4 py-2 text-sm font-medium ${activeChart === "engagement" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Engagement
        </button>
      </div>

      <div className="h-64">
        {activeChart === "engagement" ? (
          <Bar data={chartData} options={options} />
        ) : (
          <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  )
}
