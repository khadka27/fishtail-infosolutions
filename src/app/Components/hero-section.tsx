"use client" // Add this at the top to specify it's a client component

import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger the visibility on page load
    setIsVisible(true)
  }, [])

  return (
    <section
      className={`bg-green-500 text-white py-16 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative flex items-end justify-center">
              {/* Mobile Phone */}
              <div className="relative mr-4 z-10">
                <div className="bg-teal-500 rounded-xl w-24 h-40 overflow-hidden border-4 border-teal-600">
                  <div className="bg-yellow-200 h-full w-full"></div>
                </div>
              </div>

              {/* Tablet with Hand */}
              <div className="relative mr-4 z-20">
                <div className="bg-orange-400 rounded-xl w-32 h-44 overflow-hidden border-4 border-orange-500">
                  <div className="bg-yellow-200 h-full w-full"></div>
                </div>
                <div className="absolute -right-4 bottom-10 w-16 h-16 bg-[#FFD6B0] rounded-full transform rotate-12 border-2 border-orange-500">
                  <div className="absolute top-0 left-1/2 w-2 h-10 bg-[#FFD6B0] rounded-t-full transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* iPad/Larger Tablet */}
              <div className="relative z-0">
                <div className="bg-purple-400 rounded-xl w-40 h-52 overflow-hidden border-4 border-purple-500">
                  <div className="bg-yellow-200 h-full w-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="flex space-x-2 mb-4">
              <span className="bg-green-600 text-xs px-3 py-1 rounded">PPC</span>
              <span className="bg-green-600 text-xs px-3 py-1 rounded">Responsive</span>
              <span className="bg-green-600 text-xs px-3 py-1 rounded">Apps</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mobile-Oriented
              <br />
              PPC Campaigns
            </h1>
            <p className="mb-6 opacity-90">
              Donec sed odio dui. Fusce dapibus, tellus ac cursus
              <br />
              commodo, tortor mauris condimentum nibh, ut
              <br />
              fermentum massa justo.
            </p>

            <div className="flex space-x-2 mt-8">
              <span className="w-3 h-3 rounded-full bg-white bg-opacity-50"></span>
              <span className="w-3 h-3 rounded-full bg-white"></span>
              <span className="w-3 h-3 rounded-full bg-white bg-opacity-50"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
