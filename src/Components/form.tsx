"use client"

import { useState, useRef, type ChangeEvent, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { Loader2, Download } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  website: string
  details: string
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [submissions, setSubmissions] = useState<FormData[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Replace these with your actual EmailJS credentials or use environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_h967f6o"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_lv0qx1i"
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "uQppVqAvJvbh7-6tg"

      const response = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      console.log("Email sent successfully:", response)

      // Store submission in local state
      const updatedSubmissions = [...submissions, formData]
      setSubmissions(updatedSubmissions)

      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent. We'll get back to you soon.",
      })

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        details: "",
      })
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus({
        success: false,
        message: "Sorry, there was a problem sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const exportToCSV = () => {
    // Create CSV content
    const headers = ["Name", "Email", "Company", "Phone", "Website", "Details"]
    const csvRows = [
      headers.join(","),
      ...submissions.map((item) =>
        [
          `"${item.name}"`,
          `"${item.email}"`,
          `"${item.company || ""}"`,
          `"${item.phone || ""}"`,
          `"${item.website || ""}"`,
          `"${item.details.replace(/"/g, '""')}"`,
        ].join(","),
      ),
    ]
    const csvContent = csvRows.join("\n")

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `contact_submissions_${new Date().toISOString().slice(0, 10)}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-700 mb-4">Tell us about your project</h2>
          <p className="text-gray-600">Let us help you get your business online and grow it with passion</p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-sm">
          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-md ${submitStatus.success ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}
            >
              {submitStatus.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form-email">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
                  disabled={isSubmitting}
                />
               
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
                  disabled={isSubmitting}
                />
                
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website URL<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
                disabled={isSubmitting}
              />
              <p className="text-xs text-gray-500 mt-1">(optional)</p>
            </div>

            <div className="mb-6">
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Please let us know the best time to contact you by phone (if provided).
            </p>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#1ab5b3] hover:bg-[#159e9c] text-white py-3 px-8 rounded-md flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed w-auto mx-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Talk to an expert</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Submissions Table */}
        {submissions.length > 0 && (
          <div className="mt-12 bg-white p-6 rounded-md shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-light text-gray-700">Submissions ({submissions.length})</h3>
              <button
                onClick={exportToCSV}
                className="flex items-center space-x-2 bg-[#1ab5b3] hover:bg-[#159e9c] text-white py-2 px-4 rounded-md"
              >
                <Download className="h-4 w-4" />
                <span>Export to CSV</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.company || "-"}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.phone || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-light text-gray-700">Testimonials</h3>
            <Link href="/testimonials" className="text-[#1ab5b3] text-sm hover:underline">
              See all testimonials
            </Link>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <blockquote className="text-gray-700 italic mb-4">
              &quot;We&apos;ve looked at a lot of SEO solutions but these guys were so far ahead of the competition it
              was an easy choice. They have the right strategy and they&apos;ve been awesome to work with.&quot;
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/images/avatar.png" alt="Jane Warner" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <div className="font-medium">Jane Warner</div>
                <div className="text-sm text-gray-600">CEO, Company Name</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

