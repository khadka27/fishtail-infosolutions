import Image from "next/image"
import { User, Clock, Trophy, ArrowRight } from "lucide-react"
import seo_specialist from "@/Images/seo_specialist_workplace-optimized.png"

export function GoogleRankingSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image container - full width on mobile, half width on desktop */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4 lg:pr-8 xl:pr-12 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
              <Image
                src={seo_specialist || "/placeholder.svg"}
                alt="SEO Dashboard"
                width={450}
                height={340}
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Content container - full width on mobile, half width on desktop */}
          <div className="w-full md:w-1/2 md:pl-4 lg:pl-8 xl:pl-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
              Appear On the Front Page of Google!
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg">
              We offer professional SEO services that help websites increase their organic search score drastically in
              order to compete for the highest rankings — even when it comes to highly competitive keywords.
            </p>

            {/* Features list */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0 text-gray-400 mr-3 sm:mr-4 lg:mr-6">
                  <User className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">
                    Connect with pre-qualified customers
                  </h4>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0 text-gray-400 mr-3 sm:mr-4 lg:mr-6">
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">Save time and money</h4>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0 text-gray-400 mr-3 sm:mr-4 lg:mr-6">
                  <Trophy className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">
                    Rely on an experienced and knowledgeable team
                  </h4>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="mt-6 sm:mt-8 lg:mt-12 inline-block border border-blue-500 rounded-md px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-blue-500 hover:bg-blue-50 transition-colors">
              <a href="#" className="flex items-center text-sm sm:text-base lg:text-lg">
                Learn more about us
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2 lg:ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

