import Image from "next/image"

export function ClientLogosSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={`/placeholder.svg?height=60&width=120`}
                alt={`Client Logo ${item}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

