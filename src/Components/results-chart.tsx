"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function ResultsChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  // This would normally use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation

  return (
    <div className="py-4">
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-500 mb-4">Monthly Lead Generation Growth</h4>
        <div className="h-64 relative">
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-6 gap-4 h-full">
            {[15, 22, 28, 35, 42, 50].map((value, index) => (
              <div key={index} className="flex flex-col items-center justify-end h-full">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(value / 50) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="w-full bg-blue-500 rounded-t-md relative group"
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {value} leads/day
                  </div>
                </motion.div>
                <div className="text-xs text-gray-500 mt-2">Month {index + 1}</div>
              </div>
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 -ml-6">
            <div>50</div>
            <div>40</div>
            <div>30</div>
            <div>20</div>
            <div>10</div>
            <div>0</div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-4">Conversion Rate Improvement</h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Before Campaign</span>
              <span className="font-medium">2.1%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "21%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full bg-gray-400 rounded-full"
              ></motion.div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>After 3 Months</span>
              <span className="font-medium">3.8%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "38%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-blue-400 rounded-full"
              ></motion.div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Current</span>
              <span className="font-medium">5.6%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "56%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-full bg-blue-600 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
