import { Shield, BarChart3, LineChart } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white border-b">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <div className="text-center px-4">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 mb-4">
              <Shield className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Online Reputation Management</h3>
            <p className="text-gray-600 text-sm">
              Analyzing negative materials about your brand and addressing them with sentiment analysis and press
              release distribution.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 mb-4">
              <BarChart3 className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Conversion Rate Optimization</h3>
            <p className="text-gray-600 text-sm">
              Turn your visitors into customers with our team of experts. We'll analyze your website and develop a
              suitable conversion-rate strategy.
            </p>
          </div>

          <div className="text-center px-4 sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 mb-4">
              <LineChart className="text-teal-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Real-Time Social Media Analytics</h3>
            <p className="text-gray-600 text-sm">
              We produce bespoke reports and technical audits that can help your business with specific areas of digital
              marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

