import Image from "next/image"
import { MapPin, Map, Link2, Target, PenTool, Mail } from "lucide-react"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"


export function ServicesSection() {
  return (
    <section className="py-16 px-36 bg-gray-50">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-2">Full Service Digital Marketing Agency</h2>
        <p className="text-center text-gray-600 mb-12">Search Engine & Social Media Optimization Experts</p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-16">
          <div className="bg-[#1a4b87] p-6 text-white flex flex-col items-center">
            <Image
              src={image1}
              alt="Social Media Marketing"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="text-center font-semibold text-xl">Social Media Marketing</h3>
          </div>
          <div className="bg-[#4ba4d8] p-6 text-white flex flex-col items-center">
            <Image
              src={image2}
              alt="Organic Long-Term SEO"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="text-center font-semibold text-xl">Organic Long-Term SEO</h3>
          </div>
          <div className="bg-[#8cc63f] p-6 text-white flex flex-col items-center">
            <Image
              src={image3}
              alt="Advanced Analytics"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="text-center font-semibold text-xl">Advanced Analytics</h3>
          </div>
          <div className="bg-[#7ab929] p-6 text-white flex flex-col items-center">
            <Image
              src={image4}
              alt="Pay Per Click Strategies"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="text-center font-semibold text-xl">Pay Per Click Strategies</h3>
          </div>
        </div>

        {/* First row of services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex">
            <div className="w-16 h-16 bg-[#4ba4d8] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Local Search Strategy</h3>
              <p className="text-sm text-gray-600">
                Maximize your presence on search engine results pages on a local scale.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-16 h-16 bg-[#8cc63f] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Map className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Maps Search Optimization</h3>
              <p className="text-sm text-gray-600">
                Google Maps Optimization is an important part of any successful local marketing strategy.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-16 h-16 bg-[#f7941d] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Link2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Link Building & Content</h3>
              <p className="text-sm text-gray-600">
                Link building is and will continue to be a tremendously important component of Search Engine
                Optimization (SEO).
              </p>
            </div>
          </div>
        </div>

        {/* Second row of services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex">
            <div className="w-16 h-16 bg-[#1a4b87] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Paid Search Advertising</h3>
              <p className="text-sm text-gray-600">
                Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-16 h-16 bg-[#8cc63f] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <PenTool className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Custom Website Design</h3>
              <p className="text-sm text-gray-600">Our team specializes in affordable web design and e-commerce.</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-16 h-16 bg-[#f7941d] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Custom Email Design</h3>
              <p className="text-sm text-gray-600">
                Custom email templates that speak to your customers and resonate with your brand.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="#"
            className="bg-[#4ba4d8] hover:bg-[#3a93c7] text-white px-8 py-4 rounded-md flex items-center justify-center"
          >
            <span className="mr-2">💬</span>
            Free SEO Consultation
          </a>
          <a
            href="#"
            className="bg-[#8cc63f] hover:bg-[#7ab929] text-white px-8 py-4 rounded-md flex items-center justify-center"
          >
            <span className="mr-2">🔗</span>
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}

