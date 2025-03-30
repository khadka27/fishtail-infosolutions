"use client"

import dynamic from "next/dynamic"
import type { LocationData } from "./contact-map"
import { useEffect, useState } from "react"

// Import the map component with no SSR
const ContactMap = dynamic(() => import("./contact-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-md">
      <div className="animate-pulse text-gray-500">Loading map...</div>
    </div>
  ),
})

interface MapWrapperProps {
  locations: LocationData[]
  initialZoom?: number
  height?: string
  showLocationTabs?: boolean
}

export default function MapWrapper({
  locations = [],
  initialZoom = 13,
  height = "400px",
  showLocationTabs = true,
}: MapWrapperProps) {
  // Use state to ensure locations is always an array
  const [validLocations, setValidLocations] = useState<LocationData[]>([])

  useEffect(() => {
    // Validate locations to ensure it's an array
    if (Array.isArray(locations)) {
      setValidLocations(locations)
    } else {
      console.error("Locations must be an array")
      setValidLocations([])
    }
  }, [locations])

  return (
    <ContactMap
      locations={validLocations}
      initialZoom={initialZoom}
      height={height}
      showLocationTabs={showLocationTabs}
    />
  )
}

