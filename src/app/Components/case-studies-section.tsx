import Image from "next/image"

export function CaseStudiesSection() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Our case studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-400 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Case Study 1"
              width={400}
              height={200}
              className="w-full"
            />
            <div className="p-6 bg-white text-gray-800">
              <h3 className="font-semibold mb-2">Openray Division</h3>
              <p className="text-sm text-gray-600">
                This website achieved 45% growth in organic traffic year-over-year.
              </p>
            </div>
          </div>
          <div className="bg-blue-600 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Case Study 2"
              width={400}
              height={200}
              className="w-full"
            />
            <div className="p-6 bg-white text-gray-800">
              <h3 className="font-semibold mb-2">Timely Designs</h3>
              <p className="text-sm text-gray-600">This site applied a mobile-first strategy to improve conversions.</p>
            </div>
          </div>
          <div className="bg-green-500 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Case Study 3"
              width={400}
              height={200}
              className="w-full"
            />
            <div className="p-6 bg-white text-gray-800">
              <h3 className="font-semibold mb-2">Planet Tech</h3>
              <p className="text-sm text-gray-600">Gaining 65% of the market with an effective SEO strategy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

