import Image from "next/image"


export function HeroSection() {
  return (
    <section className="bg-blue-500 py-16 relative overflow-hidden">
      {/* Background network pattern could be added as a background image in CSS */}

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              Guaranteed increase
              <br />
              of your website sales
            </h1>
            <p className="text-white text-lg opacity-90 mb-8 max-w-lg">
              Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
              massa justo.
            </p>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative">
              {/* The graph line overlay */}
              <Image
                src="/slider-element-graph.png"
                alt="Growth graph"
                width={600}
                height={300}
                className="absolute z-20 top-0 right-0"
              />

              {/* iMac illustration */}
              <div className="absolute right-0 top-0 z-10">
                <Image src="/src/Images/falt-illustration-imac.png" alt="Desktop computer" width={400} height={300} />
              </div>

              {/* MacBook illustration */}
              <div className="absolute left-0 bottom-0 z-0">
                <Image src="/flat-illustration-macbook.png" alt="Laptop computer" width={350} height={200} />
              </div>

              {/* Placeholder div to maintain height */}
              <div className="h-[300px] w-full"></div>
            </div>

            {/* SEO, SMM, CRO badges */}
            <div className="flex space-x-2 justify-center md:justify-start mt-4">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded border border-blue-400">SEO</span>
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded border border-blue-400">SMM</span>
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded border border-blue-400">CRO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

