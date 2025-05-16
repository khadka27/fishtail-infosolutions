"use client"

import { useEffect, useState } from "react"

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      // Calculate how far the user has scrolled
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)

      setProgress(scrollPercentRounded)
    }

    // Add scroll event listener
    window.addEventListener("scroll", updateProgress)

    // Initial calculation
    updateProgress()

    // Clean up
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div className="h-full bg-[#0084FF] transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}
