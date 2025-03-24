export function FeaturesSection() {
    return (
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mb-4">
                <span className="text-pink-500 text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Reputation Management</h3>
              <p className="text-gray-600 text-sm">
                Monitor negative mentions about your brand and address them before they escalate and prove serious
                disruption.
              </p>
            </div>
  
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4">
                <span className="text-orange-500 text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversion Rate Optimization</h3>
              <p className="text-gray-600 text-sm">
                Get your visitors to take the action you want through a custom conversion strategy.
              </p>
            </div>
  
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <span className="text-blue-500 text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Social Media Analytics</h3>
              <p className="text-gray-600 text-sm">
                Get detailed insights into who is browsing your site so that you can make smarter business decisions.
              </p>
  
              <div className="mt-4 bg-gray-100 p-3 rounded-md flex items-center justify-between">
                <span className="text-sm font-medium">Buy this SEO WP Theme</span>
                <button className="bg-green-500 text-white text-xs px-2 py-1 rounded">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  