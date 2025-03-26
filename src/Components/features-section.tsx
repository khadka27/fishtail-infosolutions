import { Shield, BarChart3, LineChart } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-12 px-8 bg-white border-b">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
              <Shield className="text-purple-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Online Reputation Management</h3>
            <p className="text-gray-600 text-sm">
              Analyzing negative materials about your brand and addressing them with sentiment analysis and press
              release distribution.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4">
              <BarChart3 className="text-orange-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Conversion Rate Optimization</h3>
            <p className="text-gray-600 text-sm">
              Turn your visitors into customers with our team of experts. We'll analyze your website and develop a
              suitable conversion-rate strategy.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
              <LineChart className="text-teal-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Social Media Analytics</h3>
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

