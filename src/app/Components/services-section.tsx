import Image from "next/image"

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Full Service Digital Marketing Agency</h2>
        <p className="text-center text-gray-600 mb-12">Search Engine & Social Media Optimization Experts</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-500 p-6 rounded-lg text-white">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Social Media Marketing"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-center font-semibold">Social Media Marketing</h3>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg text-white">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Organic Long-Term SEO"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-center font-semibold">Organic Long-Term SEO</h3>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg text-white">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Advanced Analytics"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-center font-semibold">Advanced Analytics</h3>
          </div>
          <div className="bg-green-500 p-6 rounded-lg text-white">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Pay Per Click Strategies"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-center font-semibold">Pay Per Click Strategies</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Local Search Strategy</h3>
              <p className="text-sm text-gray-600">
                Boost your business with targeted local search pages on a local scale.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Maps Search Optimization</h3>
              <p className="text-sm text-gray-600">
                Improve visibility and rankings on maps of any successful local marketing strategy.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Link Building & Content</h3>
              <p className="text-sm text-gray-600">
                Strategically generated content and enormously important component of search engine optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Free SEO Consultation
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}

