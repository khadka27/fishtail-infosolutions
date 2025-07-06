"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { X, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Seoptimize from "@/Images/seo_specialist_workplace-optimized.png";


const COUNTRY_CODES = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland" },
  { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
  { code: "+30", country: "GR", flag: "🇬🇷", name: "Greece" },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland" },
  { code: "+420", country: "CZ", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+36", country: "HU", flag: "🇭🇺", name: "Hungary" },
  { code: "+40", country: "RO", flag: "🇷🇴", name: "Romania" },
  { code: "+359", country: "BG", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+385", country: "HR", flag: "🇭🇷", name: "Croatia" },
  { code: "+386", country: "SI", flag: "🇸🇮", name: "Slovenia" },
  { code: "+421", country: "SK", flag: "🇸🇰", name: "Slovakia" },
  { code: "+372", country: "EE", flag: "🇪🇪", name: "Estonia" },
  { code: "+371", country: "LV", flag: "🇱🇻", name: "Latvia" },
  { code: "+370", country: "LT", flag: "🇱🇹", name: "Lithuania" },
  { code: "+353", country: "IE", flag: "🇮🇪", name: "Ireland" },
  { code: "+354", country: "IS", flag: "🇮🇸", name: "Iceland" },
  { code: "+352", country: "LU", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+377", country: "MC", flag: "🇲🇨", name: "Monaco" },
  { code: "+378", country: "SM", flag: "🇸🇲", name: "San Marino" },
  { code: "+39", country: "VA", flag: "🇻🇦", name: "Vatican City" },
  { code: "+376", country: "AD", flag: "🇦🇩", name: "Andorra" },
  { code: "+423", country: "LI", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+380", country: "UA", flag: "🇺🇦", name: "Ukraine" },
  { code: "+375", country: "BY", flag: "🇧🇾", name: "Belarus" },
  { code: "+373", country: "MD", flag: "🇲🇩", name: "Moldova" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+51", country: "PE", flag: "🇵🇪", name: "Peru" },
  { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
  { code: "+593", country: "EC", flag: "🇪🇨", name: "Ecuador" },
  { code: "+595", country: "PY", flag: "🇵🇾", name: "Paraguay" },
  { code: "+598", country: "UY", flag: "🇺🇾", name: "Uruguay" },
  { code: "+591", country: "BO", flag: "🇧🇴", name: "Bolivia" },
  { code: "+592", country: "GY", flag: "🇬🇾", name: "Guyana" },
  { code: "+597", country: "SR", flag: "🇸🇷", name: "Suriname" },
  { code: "+594", country: "GF", flag: "🇬🇫", name: "French Guiana" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", country: "KE", flag: "🇰🇪", name: "Kenya" },
  { code: "+233", country: "GH", flag: "🇬🇭", name: "Ghana" },
  { code: "+212", country: "MA", flag: "🇲🇦", name: "Morocco" },
  { code: "+216", country: "TN", flag: "🇹🇳", name: "Tunisia" },
  { code: "+213", country: "DZ", flag: "🇩🇿", name: "Algeria" },
  { code: "+218", country: "LY", flag: "🇱🇾", name: "Libya" },
  { code: "+249", country: "SD", flag: "🇸🇩", name: "Sudan" },
  { code: "+251", country: "ET", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+256", country: "UG", flag: "🇺🇬", name: "Uganda" },
  { code: "+255", country: "TZ", flag: "🇹🇿", name: "Tanzania" },
  { code: "+250", country: "RW", flag: "🇷🇼", name: "Rwanda" },
  { code: "+257", country: "BI", flag: "🇧🇮", name: "Burundi" },
  { code: "+260", country: "ZM", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", country: "ZW", flag: "🇿🇼", name: "Zimbabwe" },
  { code: "+265", country: "MW", flag: "🇲🇼", name: "Malawi" },
  { code: "+266", country: "LS", flag: "🇱🇸", name: "Lesotho" },
  { code: "+267", country: "BW", flag: "🇧🇼", name: "Botswana" },
  { code: "+268", country: "SZ", flag: "🇸🇿", name: "Eswatini" },
  { code: "+264", country: "NA", flag: "🇳🇦", name: "Namibia" },
  { code: "+258", country: "MZ", flag: "🇲🇿", name: "Mozambique" },
  { code: "+261", country: "MG", flag: "🇲🇬", name: "Madagascar" },
  { code: "+230", country: "MU", flag: "🇲🇺", name: "Mauritius" },
  { code: "+248", country: "SC", flag: "🇸🇨", name: "Seychelles" },
  { code: "+262", country: "RE", flag: "🇷🇪", name: "Réunion" },
  { code: "+269", country: "KM", flag: "🇰🇲", name: "Comoros" },
  { code: "+290", country: "SH", flag: "🇸🇭", name: "Saint Helena" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait" },
  { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar" },
  { code: "+973", country: "BH", flag: "🇧🇭", name: "Bahrain" },
  { code: "+968", country: "OM", flag: "🇴🇲", name: "Oman" },
  { code: "+967", country: "YE", flag: "🇾🇪", name: "Yemen" },
  { code: "+964", country: "IQ", flag: "🇮🇶", name: "Iraq" },
  { code: "+963", country: "SY", flag: "🇸🇾", name: "Syria" },
  { code: "+961", country: "LB", flag: "🇱🇧", name: "Lebanon" },
  { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
  { code: "+970", country: "PS", flag: "🇵🇸", name: "Palestine" },
  { code: "+962", country: "JO", flag: "🇯🇴", name: "Jordan" },
  { code: "+98", country: "IR", flag: "🇮🇷", name: "Iran" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "+995", country: "GE", flag: "🇬🇪", name: "Georgia" },
  { code: "+374", country: "AM", flag: "🇦🇲", name: "Armenia" },
  { code: "+994", country: "AZ", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+992", country: "TJ", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+996", country: "KG", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+998", country: "UZ", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+993", country: "TM", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+7", country: "KZ", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+93", country: "AF", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+92", country: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", country: "BD", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", country: "LK", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+960", country: "MV", flag: "🇲🇻", name: "Maldives" },
  { code: "+975", country: "BT", flag: "🇧🇹", name: "Bhutan" },
  { code: "+977", country: "NP", flag: "🇳🇵", name: "Nepal" },
  { code: "+95", country: "MM", flag: "🇲🇲", name: "Myanmar" },
  { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
  { code: "+856", country: "LA", flag: "🇱🇦", name: "Laos" },
  { code: "+855", country: "KH", flag: "🇰🇭", name: "Cambodia" },
  { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
  { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+673", country: "BN", flag: "🇧🇳", name: "Brunei" },
  { code: "+670", country: "TL", flag: "🇹🇱", name: "East Timor" },
]

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  websiteUrl: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  details: string;
}

export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [formData, setFormData] = useState<FormData>({
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const formRef = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "Bc-i5YdvnKq246_sc";
    emailjs.init(publicKey);

    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose();
        }
      };

      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus(null);
      setCurrentStep(1);
      setFormErrors({});
    }
  }, [isOpen]);

  const validateForm = (step: number): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.websiteUrl) {
        errors.websiteUrl = "Website URL is required";
      } else if (
        !/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}$/i.test(
          formData.websiteUrl
        )
      ) {
        errors.websiteUrl = "Please enter a valid URL";
      }
    } else if (step === 2) {
      if (!formData.name) {
        errors.name = "Name is required";
      }
      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof FormData];
        return updated;
      });
    }
  };

  const handleNextStep = () => {
    if (validateForm(currentStep)) setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Defensive check
    if (!formRef.current || !(formRef.current instanceof HTMLFormElement)) {
      console.error("Form reference is invalid.");
      return;
    }
    if (!validateForm(currentStep)) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_nxr837d";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_3resqzt";

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current
      );
      console.log("Email sent successfully:", response);

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your request has been submitted. We'll get back to you soon with your free SEO analysis.",
      });
      setFormData({
        websiteUrl: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        details: "",
      });
      setTimeout(() => onClose(), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({
        success: false,
        message:
          "Sorry, there was a problem submitting your request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-6">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
              step < currentStep
                ? "bg-[#0084FF] text-white"
                : step === currentStep
                ? "bg-white border-2 border-[#0084FF] text-[#0084FF]"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 3 && (
            <div
              className={`w-12 h-1 ${
                step < currentStep ? "bg-[#0084FF]" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Website Information
            </h3>
            <div className="mb-4">
              <label
                htmlFor="websiteUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Website URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                placeholder="www.yourwebsite.com"
                required
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 ${
                  formErrors.websiteUrl
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
                value={formData.websiteUrl}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              {formErrors.websiteUrl && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {formErrors.websiteUrl}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                What are your main SEO goals?
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="Tell us about your SEO challenges and goals..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200"
                value={formData.details}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 ${
                    formErrors.name
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 ${
                    formErrors.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">(optional)</p>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">(optional)</p>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Confirm Your Information
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Website URL</p>
                  <p className="font-medium">{formData.websiteUrl}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">
                    {formData.phone || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium">
                    {formData.company || "Not provided"}
                  </p>
                </div>
              </div>
              {formData.details && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Details</p>
                  <p className="font-medium">{formData.details}</p>
                </div>
              )}
            </div>
            <div className="bg-blue-50 border-l-4 border-[#0084FF] p-4 mb-6">
              <p className="text-sm text-gray-700">
                By submitting this form, you&apos;ll receive a comprehensive SEO
                analysis of your website within 2-3 business days. Our team will
                identify opportunities to improve your search rankings and
                visibility.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="bg-[#0084FF] py-6 px-6 sm:px-8 relative text-white">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close popup"
                  disabled={isSubmitting}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      FREE Website SEO Analysis
                    </h2>
                    <p className="text-sm sm:text-base text-white/90">
                      Our team will review your website&apos;s SEO performance
                      and provide actionable recommendations to boost your
                      rankings and traffic.
                    </p>
                  </div>
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Image
                        src={Seoptimize}
                        alt="SEO Analysis Illustration"
                        width={120}
                        height={120}
                        className="object-contain w-20 h-20"
                        priority
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-md ${
                      submitStatus.success
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    {" "}
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
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="quote-form-email"
                >
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

                  {/* Hidden inputs to include all data */}
                  <input
                    type="hidden"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                  />
                  <input
                    type="hidden"
                    name="details"
                    value={formData.details}
                  />
                  <input type="hidden" name="name" value={formData.name} />
                  <input type="hidden" name="email" value={formData.email} />
                  <input type="hidden" name="phone" value={formData.phone} />
                  <input
                    type="hidden"
                    name="company"
                    value={formData.company}
                  />

                  <div className="flex justify-between items-center mt-8">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                    )}
                    {currentStep < 3 ? (
                      <motion.button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-[#0084FF] hover:bg-[#0066cc] text-white py-2.5 px-8 rounded-md flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 focus:ring-offset-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Continue</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        className="bg-[#0084FF] hover:bg-[#0066cc] text-white py-2.5 px-8 rounded-md flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 focus:ring-offset-2"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <span>Submit Request</span>
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
  );
}
