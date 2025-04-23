"use client"

import { useState, useRef } from "react"
import type React from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/Components/ui/button"

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissions, setSubmissions] = useState<ContactFormData[]>([])
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setIsSubmitting(true)
      setSubmitSuccess(null)
      setErrorMessage(null)

      // Replace these with your actual EmailJS service, template, and public key
      // You can get these values from your EmailJS dashboard
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_nxr837d"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_3resqzt"
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Bc-i5YdvnKq246_sc"

      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      console.log("Email sent successfully:", result.text)

      // Store submission in local state
      const updatedSubmissions = [...submissions, formData]
      setSubmissions(updatedSubmissions)

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })

      setSubmitSuccess(true)
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitSuccess(false)
      setErrorMessage("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const exportToCSV = () => {
    // Create CSV content
    const headers = ["Name", "Email", "Company", "Phone", "Message"]
    const csvRows = [
      headers.join(","),
      ...submissions.map((item) =>
        [
          `"${item.name}"`,
          `"${item.email}"`,
          `"${item.company || ""}"`,
          `"${item.phone || ""}"`,
          `"${item.message.replace(/"/g, '""')}"`,
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
    <div className="bg-white p-6 rounded-md shadow-sm border">
      <h2 className="text-2xl text-gray-800 mb-6">Start a conversation</h2>

      {submitSuccess === true && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded">
          Form submitted successfully! We&apos;ll get back to you soon.
        </div>
      )}

      {submitSuccess === false && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
          {errorMessage || "There was an error submitting the form. Please try again."}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 contact-form-email">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">(optional)</p>
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
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">(optional)</p>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <p className="text-xs text-gray-500">Please let us know the best time to contact you by phone (if provided).</p>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>

      {/* Admin section to view and export submissions */}
      {submissions.length > 0 && (
        <div className="mt-8 p-4 border border-gray-200 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium">Submissions ({submissions.length})</h3>
            <Button
              onClick={exportToCSV}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors contact-form-export"
            >
              Export to CSV
            </Button>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
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
    </div>
  )
}

