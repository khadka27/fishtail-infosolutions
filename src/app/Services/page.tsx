import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Digital Marketing Services | SEO, PPC, Social Media",
  description:
    "Explore our comprehensive digital marketing services including SEO, PPC, social media marketing, content creation, and web design to grow your business.",
}
import ServicesShowcase from '@/Components/services-showcase'
import React from 'react'

export default function Services() {
  return (
    <div>
      <ServicesShowcase/>
      
    </div>
  )
}
