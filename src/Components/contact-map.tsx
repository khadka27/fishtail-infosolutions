/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useRef, useState } from "react"
import type { Map as LeafletMap, LatLngTuple } from "leaflet"

export type LocationData = {
  name: string
  country: string
  coordinates: LatLngTuple
  address: string
}

interface ContactMapProps {
  locations: LocationData[]
  initialZoom?: number
  height?: string
  showLocationTabs?: boolean
}

export default function ContactMap({
  locations = [],
  initialZoom = 13,
  height = "400px",
  showLocationTabs = true,
}: ContactMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<LeafletMap | null>(null)

  // Log the received locations for debugging
  console.log("ContactMap received locations:", locations)

  const [activeLocation, setActiveLocation] = useState<LocationData | null>(locations.length > 0 ? locations[0] : null)

  // Reset active location when locations change
  useEffect(() => {
    console.log("Locations changed, updating active location")
    if (locations.length > 0 && !activeLocation) {
      console.log("Setting active location to:", locations[0])
      setActiveLocation(locations[0])
    }
  }, [locations, activeLocation])

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    // Make sure the ref is pointing to an actual DOM element
    if (!mapRef.current) {
      console.warn("Map ref is not available")
      return
    }

    // Make sure we have an active location
    if (!activeLocation) {
      console.warn("No active location available")
      return
    }

    console.log("Creating map with active location:", activeLocation)

    // Dynamic import to ensure Leaflet is only loaded on client
    const loadMap = async () => {
      try {
        console.log("Loading Leaflet")
        // Import Leaflet dynamically
        const L = (await import("leaflet")).default

        // Clean up any existing map instance before creating a new one
        if (mapInstanceRef.current) {
          console.log("Removing existing map instance")
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        }

        // Create custom marker icon
        const customIcon = L.icon({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -32],
        })

        // Fallback to default icon if custom icon fails to load
        const defaultIcon = L.icon({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          shadowSize: [41, 41],
        })

        // Add error handling for custom icon
        const img = new Image()
        img.src = "./Images/marker-icon.png"
        img.onerror = () => {
          console.warn("Custom marker icon failed to load, using default")
          // Update all future markers to use default icon
          customIcon.options = defaultIcon.options
        }

        // Add Leaflet CSS
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          console.log("Adding Leaflet CSS")
          const link = document.createElement("link")
          link.rel = "stylesheet"
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          document.head.appendChild(link)
        }

        // Add custom CSS to control Leaflet z-index
        if (!document.querySelector("style[data-leaflet-fix]")) {
          console.log("Adding Leaflet z-index fix")
          const style = document.createElement("style")
          style.setAttribute("data-leaflet-fix", "true")
          style.textContent = `
          .leaflet-map-container .leaflet-pane,
          .leaflet-map-container .leaflet-control,
          .leaflet-map-container .leaflet-top,
          .leaflet-map-container .leaflet-bottom {
            z-index: 40 !important;
          }
        `
          document.head.appendChild(style)
        }

        // Double check that mapRef.current is still available
        if (!mapRef.current) {
          console.warn("Map ref is no longer available")
          return
        }

        console.log("Initializing map with coordinates:", activeLocation.coordinates)

        // Initialize map with the active location coordinates
        const map = L.map(mapRef.current).setView(activeLocation.coordinates, initialZoom)
        mapInstanceRef.current = map

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map)

        // Add markers for all locations
        console.log("Adding markers for locations:", locations)
        locations.forEach((location) => {
          console.log("Adding marker for:", location.name, location.coordinates)
          L.marker(location.coordinates, { icon: customIcon })
            .addTo(map)
            .bindPopup(`<strong>${location.name}</strong><br>${location.address}`)
        })

        // Open popup for active location
        console.log("Opening popup for active location:", activeLocation.name)
        const activeMarker = L.marker(activeLocation.coordinates, { icon: customIcon })
          .addTo(map)
          .bindPopup(`<strong>${activeLocation.name}</strong><br>${activeLocation.address}`)
          .openPopup()

        console.log("Map initialization complete")
      } catch (error) {
        console.error("Error loading map:", error)
      }
    }

    loadMap()

    // Clean up on unmount
    return () => {
      if (mapInstanceRef.current) {
        console.log("Cleaning up map instance")
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [activeLocation, initialZoom]) // Remove locations from the dependency array

  if (locations.length === 0) {
    console.warn("No locations available for map")
    return (
      <div style={{ height }} className="w-full bg-gray-200 rounded-md flex items-center justify-center">
        <p className="text-gray-500">No locations available</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {showLocationTabs && locations.length > 1 && (
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => {
                console.log("Setting active location to:", location)
                setActiveLocation(location)
              }}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                activeLocation?.country === location.country
                  ? "bg-[#b5bd00] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {location.country}
            </button>
          ))}
        </div>
      )}

      <div className="leaflet-map-container relative">
        <div
          ref={mapRef}
          style={{ height }}
          className="w-full bg-gray-200 rounded-md"
          aria-label="Map showing our office locations"
        />
      </div>
    </div>
  )
}

