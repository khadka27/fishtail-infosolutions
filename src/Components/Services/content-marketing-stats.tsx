"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileText, BarChart2, Trophy, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContentMarketingStats() {
  // State for counting up animation
  const [counts, setCounts] = useState({
    news: 0,
    caseStudies: 0,
    strategies: 0,
    interviews: 0,
  })

  // State for tracking if section is in view
  const [isInView, setIsInView] = useState(false)

  // Target values for the counters
  const targets = {
    news: 116,
    caseStudies: 248,
    strategies: 43,
    interviews: 35,
  }

  // Animation for counting up when in view
  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds for the animation
    const interval = 20 // Update every 20ms
    const steps = duration / interval

    const incrementValues = {
      news: targets.news / steps,
      caseStudies: targets.caseStudies / steps,
      strategies: targets.strategies / steps,
      interviews: targets.interviews / steps,
    }

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep += 1

      setCounts({
        news: Math.min(Math.round(incrementValues.news * currentStep), targets.news),
        caseStudies: Math.min(Math.round(incrementValues.caseStudies * currentStep), targets.caseStudies),
        strategies: Math.min(Math.round(incrementValues.strategies * currentStep), targets.strategies),
        interviews: Math.min(Math.round(incrementValues.interviews * currentStep), targets.interviews),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isInView])

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the element is visible
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="stats-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={<FileText className="h-8 w-8 text-blue-300" />}
            count={counts.news}
            label="Industry News Added"
            color="text-blue-300"
          />

          <StatCard
            icon={<BarChart2 className="h-8 w-8 text-green-300" />}
            count={counts.caseStudies}
            label="Case Studies Added"
            color="text-green-300"
          />

          <StatCard
            icon={<Trophy className="h-8 w-8 text-white" />}
            count={counts.strategies}
            label="Successful Content Strategies"
            color="text-white"
            highlighted
          />

          <StatCard
            icon={<MessageSquare className="h-8 w-8 text-white" />}
            count={counts.interviews}
            label="Interviews Taken"
            color="text-white"
            highlighted
          />
        </div>

        {/* Content Marketing Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 leading-relaxed">
              We are aware of the importance of a successful{" "}
              <span className="text-blue-600 font-medium">content marketing campaign</span>, which is why we create
              informative, engaging and persuasive content that captures customers&apos; interest. We tailor a bespoke
              content marketing strategy for each of our clients.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="/placeholder.svg?height=300&width=400&text=Content+Marketing&bg=e6f7ff"
              alt="Content Marketing Analytics"
              className="max-w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="md:col-start-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-700 leading-relaxed">
              We provide content that will convince web users to click through to your website for special offers, to
              purchase your products or contact you about your services, because our experienced copywriters know
              exactly how to make words sell.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  count: number
  label: string
  color: string
  highlighted?: boolean
}

function StatCard({ icon, count, label, color, highlighted = false }: StatCardProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center text-center p-4 rounded-lg transition-all",
        highlighted ? "bg-blue-600" : "bg-white",
      )}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-2">{icon}</div>
      <div className={`text-5xl font-light mb-2 ${color}`}>{count}</div>
      <div className={highlighted ? "text-white text-sm" : "text-gray-500 text-sm"}>{label}</div>
      {highlighted && <div className="mt-2 bg-blue-700 text-white text-xs py-1 px-2 rounded">{label}</div>}
    </motion.div>
  )
}

