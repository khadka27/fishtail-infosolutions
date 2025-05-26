"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Loader2, CheckCircle, AlertCircle, ArrowRight, Users, Target, TrendingUp, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"

const LEAD_GENERATION_SERVICES = [
  { id: "email-campaigns", label: "Email Lead Generation", icon: "📧" },
  { id: "content-marketing", label: "Content Marketing & Lead Magnets", icon: "📝" },
  { id: "social-media", label: "Social Media Lead Generation", icon: "📱" },
  { id: "paid-advertising", label: "Paid Advertising (PPC/Social)", icon: "💰" },
  { id: "seo-organic", label: "SEO & Organic Lead Generation", icon: "🔍" },
  { id: "landing-pages", label: "Landing Page Optimization", icon: "🎯" },
  { id: "lead-nurturing", label: "Lead Nurturing & Automation", icon: "🤖" },
  { id: "crm-integration", label: "CRM Integration & Management", icon: "⚙️" },
]

const BUSINESS_SIZES = [
  { id: "startup", label: "Startup (1-10 employees)" },
  { id: "small", label: "Small Business (11-50 employees)" },
  { id: "medium", label: "Medium Business (51-200 employees)" },
  { id: "large", label: "Large Business (200+ employees)" },
  { id: "enterprise", label: "Enterprise (1000+ employees)" },
]

const MONTHLY_BUDGETS = [
  { id: "under-1k", label: "Under $1,000" },
  { id: "1k-5k", label: "$1,000 - $5,000" },
  { id: "5k-10k", label: "$5,000 - $10,000" },
  { id: "10k-25k", label: "$10,000 - $25,000" },
  { id: "25k-plus", label: "$25,000+" },
]

interface LeadGenerationPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  company: string
  website: string
  phone: string
  businessSize: string
  monthlyBudget: string
  services: string[]
  currentChallenges: string
  goals: string
  timeline: string
}

export function LeadGenerationPopup({ isOpen, onClose }: LeadGenerationPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    businessSize: "",
    monthlyBudget: "",
    services: [],
    currentChallenges: "",
    goals: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const formRef = useRef<HTMLFormElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "Bc-i5YdvnKq246_sc"
    emailjs.init(publicKey)

    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
      }
      const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose()
        }
      }

      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)
      document.addEventListener("mousedown", handleClickOutside)

      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleEsc)
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus(null)
      setCurrentStep(1)
      setFormErrors({})
    }
  }, [isOpen])

  const validateForm = (step: number): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {}

    if (step === 1) {
      if (!formData.name) errors.name = "Name is required"
      if (!formData.email) {
        errors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address"
      }
      if (!formData.company) errors.company = "Company name is required"
    } else if (step === 2) {
      if (!formData.businessSize) errors.businessSize = "Please select your business size"
      if (!formData.monthlyBudget) errors.monthlyBudget = "Please select your monthly budget"
      if (formData.services.length === 0) errors.services = "Please select at least one service"
    } else if (step === 3) {
      if (!formData.currentChallenges) errors.currentChallenges = "Please describe your current challenges"
      if (!formData.goals) errors.goals = "Please describe your goals"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => {
        const updated = { ...prev }
        delete updated[name as keyof FormData]
        return updated
      })
    }
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
    if (formErrors.services) {
      setFormErrors((prev) => {
        const updated = { ...prev }
        delete updated.services
        return updated
      })
    }
  }

  const handleNextStep = () => {
    if (validateForm(currentStep)) setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current || !(formRef.current instanceof HTMLFormElement)) {
      console.error("Form reference is invalid.")
      return
    }
    if (!validateForm(currentStep)) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_nxr837d"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_3resqzt"

      const response = await emailjs.sendForm(serviceId, templateId, formRef.current)
      console.log("Email sent successfully:", response)

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your lead generation consultation request has been submitted. Our team will contact you within 24 hours with a custom strategy proposal.",
      })
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        phone: "",
        businessSize: "",
        monthlyBudget: "",
        services: [],
        currentChallenges: "",
        goals: "",
        timeline: "",
      })
      setTimeout(() => onClose(), 4000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus({
        success: false,
        message: "Sorry, there was a problem submitting your request. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
              step < currentStep
                ? "bg-blue-600 text-white"
                : step === currentStep
                  ? "bg-white border-2 border-blue-600 text-blue-600"
                  : "bg-gray-200 text-gray-500"
            }`}
          >
            {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
          </div>
          {step < 4 && <div className={`w-16 h-1 ${step < currentStep ? "bg-blue-600" : "bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  )

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's Get Started</h3>
              <p className="text-gray-600">Tell us about yourself and your company</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="John Smith"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="john@company.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.company ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Your Company Inc."
                />
                {formErrors.company && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.company}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.website}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="https://yourcompany.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Business Details</h3>
              <p className="text-gray-600">Help us understand your business size and budget</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Business Size <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {BUSINESS_SIZES.map((size) => (
                    <label
                      key={size.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.businessSize === size.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="businessSize"
                        value={size.id}
                        checked={formData.businessSize === size.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.businessSize === size.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.businessSize === size.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{size.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.businessSize && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.businessSize}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Monthly Marketing Budget <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {MONTHLY_BUDGETS.map((budget) => (
                    <label
                      key={budget.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.monthlyBudget === budget.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="monthlyBudget"
                        value={budget.id}
                        checked={formData.monthlyBudget === budget.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.monthlyBudget === budget.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.monthlyBudget === budget.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{budget.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.monthlyBudget && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.monthlyBudget}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Services Interested In <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {LEAD_GENERATION_SERVICES.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.services.includes(service.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center ${
                          formData.services.includes(service.id) ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.services.includes(service.id) && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className="mr-2">{service.icon}</span>
                      <span className="text-sm font-medium">{service.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.services && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.services}
                  </p>
                )}
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Goals & Challenges</h3>
              <p className="text-gray-600">Help us understand your current situation and objectives</p>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Lead Generation Challenges <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.currentChallenges ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Describe your current challenges with lead generation, such as low conversion rates, poor lead quality, lack of qualified leads, etc."
                />
                {formErrors.currentChallenges && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.currentChallenges}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Generation Goals <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.goals ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.goals}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="What are your lead generation goals? (e.g., increase leads by 50%, improve lead quality, reduce cost per lead, etc.)"
                />
                {formErrors.goals && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.goals}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP - Need to start immediately</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-plus-months">6+ months</option>
                </select>
              </div>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Review Your Information</h3>
              <p className="text-gray-600">Please review your details before submitting</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium">{formData.company}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <p className="font-medium">{formData.website || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Size</p>
                  <p className="font-medium">
                    {BUSINESS_SIZES.find((s) => s.id === formData.businessSize)?.label || "Not selected"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly Budget</p>
                  <p className="font-medium">
                    {MONTHLY_BUDGETS.find((b) => b.id === formData.monthlyBudget)?.label || "Not selected"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Services of Interest</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {formData.services.map((serviceId) => {
                    const service = LEAD_GENERATION_SERVICES.find((s) => s.id === serviceId)
                    return (
                      <span
                        key={serviceId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        <span className="mr-1">{service?.icon}</span>
                        {service?.label}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Challenges</p>
                <p className="font-medium">{formData.currentChallenges}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Goals</p>
                <p className="font-medium">{formData.goals}</p>
              </div>
              {formData.timeline && (
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-medium">{formData.timeline}</p>
                </div>
              )}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <div className="flex items-start">
                <Zap className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800 font-medium mb-1">What happens next?</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Our lead generation experts will review your requirements</li>
                    <li>• We&lsquo;ll prepare a custom strategy proposal within 24 hours</li>
                    <li>• Schedule a consultation to discuss your personalized plan</li>
                    <li>• Get started with a proven lead generation system</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8 relative text-white">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close popup"
                  disabled={isSubmitting}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">Boost Your Lead Generation</h2>
                  <p className="text-blue-100">Get a custom lead generation strategy tailored to your business goals</p>
                </div>
              </div>

              <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.success
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    <div className="flex items-start">
                      {submitStatus.success ? (
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  </motion.div>
                )}

                {renderStepIndicator()}

                <form ref={formRef} onSubmit={handleSubmit} className="lead-generation-form">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderFormStep()}
                    </motion.div>
                  </AnimatePresence>

                  {/* Hidden inputs for EmailJS */}
                  <input type="hidden" name="name" value={formData.name} />
                  <input type="hidden" name="email" value={formData.email} />
                  <input type="hidden" name="company" value={formData.company} />
                  <input type="hidden" name="website" value={formData.website} />
                  <input type="hidden" name="phone" value={formData.phone} />
                  <input type="hidden" name="businessSize" value={formData.businessSize} />
                  <input type="hidden" name="monthlyBudget" value={formData.monthlyBudget} />
                  <input type="hidden" name="services" value={formData.services.join(", ")} />
                  <input type="hidden" name="currentChallenges" value={formData.currentChallenges} />
                  <input type="hidden" name="goals" value={formData.goals} />
                  <input type="hidden" name="timeline" value={formData.timeline} />

                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                    )}
                    {currentStep < 4 ? (
                      <motion.button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                      >
                        <span>Continue</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <span>Get My Custom Strategy</span>
                        )}
                      </motion.button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
