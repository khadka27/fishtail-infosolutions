import Image from "next/image"
import { User, Clock, Trophy, ArrowRight } from "lucide-react"
import seo_specialist from "@/Images/seo_specialist_workplace-optimized.png"

export function GoogleRankingSection() {
  return (
    <section className="py-6 px-16">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-4">
            <Image
              src={seo_specialist || "/placeholder.svg"}
              alt="SEO Dashboard"
              width={500}
              height={400}
              className="rounded-lg object-contain ml-24"
            />
          </div>
          <div className="md:w-1/2 md:pl-4">
            <h2 className="text-3xl font-bold mb-6">Appear On the Front Page of Google!</h2>
            <p className="text-gray-600 mb-8">
              We offer professional SEO services that help websites increase their organic search score drastically in
              order to compete for the highest rankings — even when it comes to highly competitive keywords.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 text-gray-400  mr-4">
                  <User className="h-10 w-10" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium">Connect with pre-qualified customers</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 text-gray-400 mr-4">
                  <Clock className="h-10 w-10" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium">Save time and money</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 text-gray-400 mr-4">
                  <Trophy className="h-10 w-10" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium">Rely on an experienced and knowledgeable team</h4>
                </div>
              </div>
            </div>
            <div className="mt-8 inline-block border border-blue-500 rounded-md px-6 py-2 text-blue-500">
              <a href="#" className="flex items-center">
                Learn more about us
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

