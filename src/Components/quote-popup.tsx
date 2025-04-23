// "use client";

// import type React from "react";

// import { useState, useRef, useEffect } from "react";
// import { X, Loader2 } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import Seoptimize from "@/Images/seo_specialist_workplace-optimized.png";

// interface QuotePopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface FormData {
//   websiteUrl: string;
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   details: string;
// }

// export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
//   const [formData, setFormData] = useState<FormData>({
//     websiteUrl: "",
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     details: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{
//     success: boolean;
//     message: string;
//   } | null>(null);

//   const formRef = useRef<HTMLFormElement>(null);

//   // Initialize EmailJS once when component mounts
//   useEffect(() => {
//     // Initialize EmailJS only once
//     const publicKey =
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "uQppVqAvJvbh7-6tg";
//     emailjs.init(publicKey);

//     // Only add event listeners when popup is open
//     if (isOpen) {
//       const handleEsc = (e: KeyboardEvent) => {
//         if (e.key === "Escape") onClose();
//       };

//       document.body.style.overflow = "hidden";
//       window.addEventListener("keydown", handleEsc);

//       return () => {
//         document.body.style.overflow = "";
//         window.removeEventListener("keydown", handleEsc);
//       };
//     }
//   }, [isOpen, onClose]);

//   useEffect(() => {
//     if (!isOpen) {
//       // Reset the submitStatus when popup is closed
//       setSubmitStatus(null);
//     }
//   }, [isOpen]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     // Use functional update to avoid potential stale closures
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted");

//     if (!formRef.current) return;

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Get EmailJS credentials from environment variables
//       const serviceId =
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_h967f6o";
//       const templateId =
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_lv0qx1i";

//       // Send the email using EmailJS
//       const response = await emailjs.sendForm(
//         serviceId,
//         templateId,
//         formRef.current
//       );

//       console.log("Email sent successfully:", response);

//       setSubmitStatus({
//         success: true,
//         message:
//           "Thank you! Your request has been submitted. We'll get back to you soon with your free SEO analysis.",
//       });

//       // Reset form after successful submission
//       setFormData({
//         websiteUrl: "",
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         details: "",
//       });

//       // Close the popup after a delay
//       setTimeout(() => {
//         onClose();
//         // We don't need to reset submitStatus here as our useEffect will handle it
//       }, 3000);
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       setSubmitStatus({
//         success: false,
//         message:
//           "Sorry, there was a problem submitting your request. Please try again later.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <motion.div
//               className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
//               initial={{ scale: 0.95, y: 10 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               transition={{ type: "tween", duration: 0.2 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Yellow header section */}
//               <div className="bg-amber-300 py-6 px-6 sm:px-8 relative">
//                 <button
//                   onClick={onClose}
//                   className="absolute right-4 top-4 p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
//                   aria-label="Close popup"
//                   disabled={isSubmitting}
//                 >
//                   <X className="h-5 w-5" />
//                 </button>

//                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                   <div className="flex-1">
//                     <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2">
//                       FREE website SEO analysis
//                     </h2>
//                     <p className="text-sm sm:text-base text-gray-700">
//                       Our team is ready to review your website&apos;s SEO
//                       aspects and provide tips to help you increase traffic and
//                       maximize revenue.
//                     </p>
//                   </div>
//                   <div className="flex-shrink-0 hidden sm:block">
//                     <Image
//                       src={Seoptimize || "/placeholder.svg"}
//                       alt="SEO Analysis Illustration"
//                       width={120}
//                       height={120}
//                       className="object-contain sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
//                       priority
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Form section */}
//               <div className="p-6 pd-28  overflow-y-auto max-h-[calc(90vh-200px)]  ">
//                 {submitStatus && (
//                   <div
//                     className={`mb-6 p-4 rounded-md ${
//                       submitStatus.success
//                         ? "bg-green-50 border border-green-200 text-green-700"
//                         : "bg-red-50 border border-red-200 text-red-700"
//                     }`}
//                   >
//                     {submitStatus.message}
//                   </div>
//                 )}

//                 <p className="text-sm text-gray-500 mb-4">
//                   Fields marked with an <span className="text-red-500">*</span>{" "}
//                   are required
//                 </p>

//                 <form
//                   ref={formRef}
//                   onSubmit={handleSubmit}
//                   className="quote-form-email"
//                 >
//                   <div className="mb-4">
//                     <label
//                       htmlFor="websiteUrl"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Website URL <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="url"
//                       id="websiteUrl"
//                       name="websiteUrl"
//                       placeholder="www.yourwebsite.com"
//                       required
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
//                       value={formData.websiteUrl}
//                       onChange={handleInputChange}
//                       disabled={isSubmitting}
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         disabled={isSubmitting}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         Email <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         disabled={isSubmitting}
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <label
//                         htmlFor="phone"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         disabled={isSubmitting}
//                       />
//                       <p className="text-xs text-gray-500 mt-1">(optional)</p>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="company"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
//                         value={formData.company}
//                         onChange={handleInputChange}
//                         disabled={isSubmitting}
//                       />
//                       <p className="text-xs text-gray-500 mt-1">(optional)</p>
//                     </div>
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="details"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Details
//                     </label>
//                     <textarea
//                       id="details"
//                       name="details"
//                       rows={4}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ab5b3]"
//                       value={formData.details}
//                       onChange={handleInputChange}
//                       disabled={isSubmitting}
//                     ></textarea>
//                   </div>

//                   {/* Buttons directly below the details field */}
//                   <div className="flex justify-between items-center mt-8">
//                     <button
//                       type="button"
//                       onClick={onClose}
//                       className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
//                       disabled={isSubmitting}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="bg-[#1ab5b3] hover:bg-[#159e9c] text-white py-3 px-8 rounded-md flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                           <span>Sending...</span>
//                         </>
//                       ) : (
//                         <span>Submit Request</span>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { X, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Seoptimize from "@/Images/seo_specialist_workplace-optimized.png";

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
    // Initialize EmailJS only once
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Bc-i5YdvnKq246_sc";
    emailjs.init(publicKey);

    // Only add event listeners when popup is open
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
      // Reset the form state when popup is closed
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
    // Use functional update to avoid potential stale closures
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof FormData];
        return updated;
      });
    }
  };

  const handleNextStep = () => {
    if (validateForm(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get EmailJS credentials from environment variables
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_nxr837d";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_3resqzt";

      // Send the email using EmailJS
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!
      );

      console.log("Email sent successfully:", response);

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your request has been submitted. We'll get back to you soon with your free SEO analysis.",
      });

      // Reset form after successful submission
      setFormData({
        websiteUrl: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        details: "",
      });

      // Close the popup after a delay
      setTimeout(() => {
        onClose();
      }, 3000);
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

  const renderStepIndicator = () => {
    return (
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
  };

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
              ></textarea>
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
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
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
              {/* Blue header section */}
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

              {/* Form section */}
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

                  {/* Navigation buttons */}
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
                            <span>Sending...</span>
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
