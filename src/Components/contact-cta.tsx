"use client"

import Link from "next/link"
// import { motion } from "framer-motion" // Removed motion
// import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react' // Removed lucide icons

export default function ContactCTA() {
  return (
    <section className="bg-blue-600 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Boost Your Lead Generation?</h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Partner with us to create a customized lead generation strategy for your educational institution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/project"
            className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
          >
            View More Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
