import Image from "next/image"
import sliderImac from "@/Images/falt-illustration-imac.png"
import sliderMacbook from "@/Images/flat-illustration-macbook.png"
import sliderGraph from "@/Images/slider-element-graph.png"

export function HeroSection() {
  return (
    <section className="bg-blue-500 py-16 relative overflow-hidden">
      {/* Background network pattern is added via CSS */}

      <div className="container mx-auto px-40">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* Text content - appears first */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                Guaranteed increase
                <br />
                of your website sales
              </h1>
              <p className="text-white text-lg opacity-90 mb-8 max-w-lg">
                Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative">
              {/* SEO, SMM, CRO badges - appears last */}
              <div className="flex space-x-2 absolute top-0 right-6 z-30 animate-fade-in-5">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded border border-blue-400">SEO</span>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded border border-blue-400">SMM</span>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded border border-blue-400">CRO</span>
              </div>

              {/* iMac illustration - appears second */}
              <div className="absolute right-0 top-0 z-10 animate-fade-in-2">
                <Image src={sliderImac || "/placeholder.svg"} alt="Desktop computer" width={400} height={300} />
              </div>

              {/* MacBook illustration - appears third */}
              <div className="absolute left-0 bottom-0 z-0 animate-fade-in-3">
                <Image src={sliderMacbook || "/placeholder.svg"} alt="Laptop computer" width={350} height={200} />
              </div>

              {/* The graph line overlay - appears fourth */}
              <Image
                src={sliderGraph || "/placeholder.svg"}
                alt="Growth graph"
                width={600}
                height={300}
                className="absolute z-20 top-[150px] right-0 animate-fade-in-4"
              />

              {/* Placeholder div to maintain height */}
              <div className="h-[300px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

