/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "./project-form"
import image3 from "@/Images/services-analytics-alt-colors-optimized.png"
import image1 from "@/Images/services-analytics-alt-colors-optimized.png"
import image2 from "@/Images/services-seo-alt-colors-optimized.png"
import image4 from "@/Images/services-payperclick-alt-colors-optimized.png"

const WebDesignServices = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#f47b20] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <Image
                src={image1}
                alt="Web Design Services"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-light mb-4">Web Design Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A website should not just draw attention. The role of a website is{" "}
            <span className="font-bold">to attract and engage the user</span>, as well as communicate{" "}
            <span className="font-bold">your brand</span> and raise awareness about a product or service.
          </p>
        </div>
      </div>

      {/* First Impression Section */}
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">
              Your customers will not give you a second chance to make a first impression
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In a digital world, first impressions are vital and an outstanding web design is the key to success. Users
              enjoy visiting sites that are aesthetically appealing and easy to navigate. Let our team help your site
              make an outstanding first impression with speed and accessibility.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                <div className="w-4 h-4 text-blue-500">✓</div>
              </div>
              <div>
                <p className="text-gray-700">Branding and logo design</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                <div className="w-4 h-4 text-red-500">✓</div>
              </div>
              <div>
                <p className="text-gray-700">Graphic and UI design</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                <div className="w-4 h-4 text-green-500">✓</div>
              </div>
              <div>
                <p className="text-gray-700">Mobile applications design</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Our agency will get your business noticed in the digital world by using design ingenuity for creating
              brand personality with a long-lasting impact. We provide various customizable design sets and focus on
              creating a website to fit your brand while engaging your visitors. Our team presents, revises and
              collaborates with you until we finalize the perfect design for your needs.
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              We believe that a close collaboration is the foundation for an outstanding result. Starting with content
              audits when we assess your needs and requirements to competitive analysis outlining opportunities, we
              collaborate at each step of the process.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
          <div>
            <div className="text-4xl font-light text-[#3498db] mb-2">25</div>
            <div className="text-xs text-gray-600">E-commerce solutions</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#1abc9c] mb-2">12</div>
            <div className="text-xs text-gray-600">Websites for Top 100 companies</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#2ecc71] mb-2">17</div>
            <div className="text-xs text-gray-600">Complex intranets for corporations</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#f1c40f] mb-2">97</div>
            <div className="text-xs text-gray-600">Popular Facebook applications</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#e67e22] mb-2">74</div>
            <div className="text-xs text-gray-600">E-mail marketing strategies</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#e84393] mb-2">36</div>
            <div className="text-xs text-gray-600">Experienced web development teams</div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="py-8 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-[#3498db] hover:bg-[#2980b9] text-white py-3 px-6 rounded flex items-center justify-center">
          <span>Tell us about your project</span>
        </button>
        <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-3 px-6 rounded flex items-center justify-center">
          <span>Request a free quote now</span>
        </button>
      </div>

      {/* Process Section */}
      <div className="py-12 px-4 max-w-6xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Every project presents its own goals, audience, and opportunities. Our approach to great projects begins with
          a time-tested process that discovers and addresses the unexpected.
        </p>
      </div>

      {/* Web Design Projects */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-gray-700">Our web design projects</h2>
            <Link href="/projects" className="text-[#3498db] text-sm hover:underline">
              See all projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Project 1 */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="h-48 bg-[#1ab5b3] flex items-center justify-center">
                <Image
                  src={image2}
                  alt="Opentray Division"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center">Opentray Division</h3>
                <p className="text-gray-600 text-sm text-center">
                  This website achieved Google ranking in four months, thanks to all the keyword "Opentray".
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="h-48 bg-[#2c3e50] flex items-center justify-center">
                <Image
                  src={image3}
                  alt="Tremely Designs"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center">Tremely Designs</h3>
                <p className="text-gray-600 text-sm text-center">
                  This site applies a smart SEO strategy to acquire online clients via long tail search.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="h-48 bg-[#8bc34a] flex items-center justify-center">
                <Image
                  src={image4}
                  alt="Plainst Tech"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-center">Plainst Tech</h3>
                <p className="text-gray-600 text-sm text-center">
                  Currently 60% of the total traffic on the site and inside of the system.
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#3498db]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm
        title="Tell us about your project"
        subtitle="Let us help you get your business online and grow it with passion"
        testimonial={{
          quote:
            "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
          author: "Jane Warner",
          position: "CEO, Company Name",
          image: "/images/avatar.png",
        }}
      />
    </div>
  )
}

export default WebDesignServices

