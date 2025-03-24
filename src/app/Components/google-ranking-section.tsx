import Image from "next/image"
import { Users, Clock } from "lucide-react"

export function GoogleRankingSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="SEO Dashboard"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Appear On the Front Page of Google!</h2>
            <p className="text-gray-600 mb-6">
              We offer SEO services that help websites increase their organic search score drastically in order to
              compete for the highest rankings — even when it comes to highly competitive keywords.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Connect with pre-qualified customers</h4>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Clock className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Save time and money</h4>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Rely on an experienced and knowledgeable team</h4>
                </div>
              </div>
            </div>
            <button className="mt-6 text-blue-500 flex items-center">
              Learn more about us
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

