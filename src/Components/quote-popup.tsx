/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef, useEffect } from "react";
import {
     X,
     Loader2,
     CheckCircle,
     AlertCircle,
     ArrowRight,
     ChevronDown,
     Globe,
     User,
     Mail,
     Phone,
     Building,
     Target,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// Simplified country codes - only most common ones
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
     { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
     { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
     { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
     { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
     { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
     { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
     { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
     { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
     { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
     { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
     { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
     { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
     { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
     { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
     { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
     { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
     { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
     { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
];

// Simplified phone validation - basic pattern for most countries
const validatePhone = (phone: string): boolean => {
     if (!phone) return true; // Phone is optional
     const cleanPhone = phone.replace(/\D/g, "");
     return cleanPhone.length >= 7 && cleanPhone.length <= 15;
};

interface QuotePopupProps {
     isOpen: boolean;
     onClose: () => void;
}

interface FormData {
     websiteUrl: string;
     name: string;
     email: string;
     phone: string;
     countryCode: string;
     company: string;
     details: string;
}

export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
     const [formData, setFormData] = useState<FormData>({
          websiteUrl: "",
          name: "",
          email: "",
          phone: "",
          countryCode: "+1",
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
     const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
     const [countrySearchTerm, setCountrySearchTerm] = useState("");

     const formRef = useRef<HTMLFormElement>(null);
     const modalRef = useRef<HTMLDivElement>(null);
     const countryDropdownRef = useRef<HTMLDivElement>(null);

     // Initialize EmailJS
     useEffect(() => {
          const publicKey =
               process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ??
               "Bc-i5YdvnKq246_sc";
          emailjs.init(publicKey);

          if (isOpen) {
               const handleEsc = (e: KeyboardEvent) => {
                    if (e.key === "Escape") {
                         if (isCountryDropdownOpen) {
                              setIsCountryDropdownOpen(false);
                         } else {
                              onClose();
                         }
                    }
               };
               const handleClickOutside = (e: MouseEvent) => {
                    if (
                         modalRef.current &&
                         !modalRef.current.contains(e.target as Node)
                    ) {
                         onClose();
                    }
                    if (
                         countryDropdownRef.current &&
                         !countryDropdownRef.current.contains(e.target as Node)
                    ) {
                         setIsCountryDropdownOpen(false);
                    }
               };

               document.body.style.overflow = "hidden";
               window.addEventListener("keydown", handleEsc);
               document.addEventListener("mousedown", handleClickOutside);

               return () => {
                    document.body.style.overflow = "";
                    window.removeEventListener("keydown", handleEsc);
                    document.removeEventListener(
                         "mousedown",
                         handleClickOutside
                    );
               };
          }
     }, [isOpen, onClose, isCountryDropdownOpen]);

     useEffect(() => {
          if (!isOpen) {
               setSubmitStatus(null);
               setCurrentStep(1);
               setFormErrors({});
               setIsCountryDropdownOpen(false);
               setCountrySearchTerm("");
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
               if (formData.phone && !validatePhone(formData.phone)) {
                    errors.phone = "Please enter a valid phone number";
               }
          }

          setFormErrors(errors);
          return Object.keys(errors).length === 0;
     };

     const handleCountrySelect = (countryCode: string) => {
          setFormData((prev) => ({ ...prev, countryCode }));
          setIsCountryDropdownOpen(false);
          setCountrySearchTerm("");
          if (formErrors.phone) {
               setFormErrors((prev) => {
                    const updated = { ...prev };
                    delete updated.phone;
                    return updated;
               });
          }
     };

     const filteredCountries = COUNTRY_CODES.filter(
          (country) =>
               country.name
                    .toLowerCase()
                    .includes(countrySearchTerm.toLowerCase()) ||
               country.code.includes(countrySearchTerm) ||
               country.country
                    .toLowerCase()
                    .includes(countrySearchTerm.toLowerCase())
     );

     const handleInputChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
          const { name, value } = e.target;

          if (name === "phone") {
               const cleanValue = value.replace(/[^\d\s\(\)\-]/g, "");
               setFormData((prev) => ({ ...prev, [name]: cleanValue }));
          } else {
               setFormData((prev) => ({ ...prev, [name]: value }));
          }

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
               if (currentStep === 3) {
                    // Auto-submit when reaching the final step
                    handleSubmit();
               } else {
                    setCurrentStep((prev) => prev + 1);
               }
          }
     };

     const handlePrevStep = () => {
          setCurrentStep((prev) => Math.max(1, prev - 1));
     };

     const handleSubmit = async (e?: React.FormEvent) => {
          if (e) {
               e.preventDefault();
          }

          // Only proceed if we're on the final step
          if (currentStep !== 3) {
               return;
          }

          if (
               !formRef.current ||
               !(formRef.current instanceof HTMLFormElement)
          ) {
               console.error("Form reference is invalid.");
               return;
          }
          if (!validateForm(currentStep)) return;

          setIsSubmitting(true);
          setSubmitStatus(null);

          try {
               const serviceId =
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ??
                    "service_nxr837d";
               const templateId =
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ??
                    "template_3resqzt";

               const response = await emailjs.sendForm(
                    serviceId,
                    templateId,
                    formRef.current
               );
               console.log("Email sent successfully:", response);

               setSubmitStatus({
                    success: true,
                    message: "Thank you! Your request has been submitted. We'll get back to you soon with your free SEO analysis.",
               });
               setFormData({
                    websiteUrl: "",
                    name: "",
                    email: "",
                    phone: "",
                    countryCode: "+1",
                    company: "",
                    details: "",
               });
               setTimeout(() => onClose(), 3000);
          } catch (error) {
               console.error("Failed to send email:", error);
               setSubmitStatus({
                    success: false,
                    message: "Sorry, there was a problem submitting your request. Please try again later.",
               });
          } finally {
               setIsSubmitting(false);
          }
     };

     const renderStepIndicator = () => (
          <div className="flex items-center justify-center mb-8">
               {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                         <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                                   step < currentStep
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                        : step === currentStep
                                        ? "bg-white border-2 border-blue-500 text-blue-500 shadow-md"
                                        : "bg-gray-100 text-gray-400"
                              }`}
                         >
                              {step < currentStep ? (
                                   <CheckCircle className="w-5 h-5" />
                              ) : (
                                   step
                              )}
                         </div>
                         {step < 3 && (
                              <div
                                   className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                                        step < currentStep
                                             ? "bg-gradient-to-r from-blue-500 to-purple-600"
                                             : "bg-gray-200"
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
                         <div className="space-y-6">
                              <div className="text-center mb-6">
                                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                                        <Globe className="w-8 h-8 text-white" />
                                   </div>
                                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Website Information
                                   </h3>
                                   <p className="text-gray-600">
                                        Let's start by analyzing your website
                                   </p>
                              </div>

                              <div>
                                   <label
                                        htmlFor="websiteUrl"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                   >
                                        Website URL{" "}
                                        <span className="text-red-500">*</span>
                                   </label>
                                   <input
                                        type="url"
                                        id="websiteUrl"
                                        name="websiteUrl"
                                        placeholder="www.yourwebsite.com"
                                        required
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                                             formErrors.websiteUrl
                                                  ? "border-red-300 bg-red-50"
                                                  : "border-gray-200 focus:border-blue-500"
                                        }`}
                                        value={formData.websiteUrl}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                   />
                                   {formErrors.websiteUrl && (
                                        <p className="mt-2 text-sm text-red-500 flex items-center">
                                             <AlertCircle className="w-4 h-4 mr-1" />
                                             {formErrors.websiteUrl}
                                        </p>
                                   )}
                              </div>

                              <div>
                                   <label
                                        htmlFor="details"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                   >
                                        SEO Goals & Challenges
                                   </label>
                                   <textarea
                                        id="details"
                                        name="details"
                                        rows={4}
                                        placeholder="Tell us about your SEO challenges and goals..."
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                   />
                              </div>
                         </div>
                    );
               case 2:
                    return (
                         <div className="space-y-6">
                              <div className="text-center mb-6">
                                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mb-4">
                                        <User className="w-8 h-8 text-white" />
                                   </div>
                                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Contact Information
                                   </h3>
                                   <p className="text-gray-600">
                                        How can we reach you?
                                   </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                   <div>
                                        <label
                                             htmlFor="name"
                                             className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                             Name{" "}
                                             <span className="text-red-500">
                                                  *
                                             </span>
                                        </label>
                                        <input
                                             type="text"
                                             id="name"
                                             name="name"
                                             required
                                             className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                                                  formErrors.name
                                                       ? "border-red-300 bg-red-50"
                                                       : "border-gray-200 focus:border-blue-500"
                                             }`}
                                             value={formData.name}
                                             onChange={handleInputChange}
                                             disabled={isSubmitting}
                                        />
                                        {formErrors.name && (
                                             <p className="mt-2 text-sm text-red-500 flex items-center">
                                                  <AlertCircle className="w-4 h-4 mr-1" />
                                                  {formErrors.name}
                                             </p>
                                        )}
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="email"
                                             className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                             Email{" "}
                                             <span className="text-red-500">
                                                  *
                                             </span>
                                        </label>
                                        <input
                                             type="email"
                                             id="email"
                                             name="email"
                                             required
                                             className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                                                  formErrors.email
                                                       ? "border-red-300 bg-red-50"
                                                       : "border-gray-200 focus:border-blue-500"
                                             }`}
                                             value={formData.email}
                                             onChange={handleInputChange}
                                             disabled={isSubmitting}
                                        />
                                        {formErrors.email && (
                                             <p className="mt-2 text-sm text-red-500 flex items-center">
                                                  <AlertCircle className="w-4 h-4 mr-1" />
                                                  {formErrors.email}
                                             </p>
                                        )}
                                   </div>
                              </div>

                              <div className="grid grid-cols-1 gap-4">
                                   <div className="relative">
                                        <label
                                             htmlFor="phone"
                                             className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                             Phone Number
                                        </label>
                                        <div
                                             className="flex"
                                             ref={countryDropdownRef}
                                        >
                                             <button
                                                  type="button"
                                                  onClick={() =>
                                                       setIsCountryDropdownOpen(
                                                            !isCountryDropdownOpen
                                                       )
                                                  }
                                                  className={`flex items-center px-3 py-3 border-2 border-r-0 rounded-l-xl bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 min-w-[120px] ${
                                                       formErrors.phone
                                                            ? "border-red-300"
                                                            : "border-gray-200 focus:border-blue-500"
                                                  }`}
                                                  disabled={isSubmitting}
                                             >
                                                  <span className="mr-2 text-lg">
                                                       {
                                                            COUNTRY_CODES.find(
                                                                 (c) =>
                                                                      c.code ===
                                                                      formData.countryCode
                                                            )?.flag
                                                       }
                                                  </span>
                                                  <span className="text-sm font-medium mr-1">
                                                       {formData.countryCode}
                                                  </span>
                                                  <ChevronDown
                                                       className={`w-4 h-4 transition-transform ${
                                                            isCountryDropdownOpen
                                                                 ? "rotate-180"
                                                                 : ""
                                                       }`}
                                                  />
                                             </button>

                                             <input
                                                  type="tel"
                                                  id="phone"
                                                  name="phone"
                                                  placeholder="Enter phone number"
                                                  className={`flex-1 px-4 py-3 border-2 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
                                                       formErrors.phone
                                                            ? "border-red-300 bg-red-50"
                                                            : "border-gray-200 focus:border-blue-500"
                                                  }`}
                                                  value={formData.phone}
                                                  onChange={handleInputChange}
                                                  disabled={isSubmitting}
                                             />
                                        </div>

                                        {isCountryDropdownOpen && (
                                             <div className="absolute top-full left-0 z-50 w-80 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-hidden mt-1">
                                                  <div className="p-3 border-b bg-gray-50">
                                                       <input
                                                            type="text"
                                                            placeholder="Search countries..."
                                                            value={
                                                                 countrySearchTerm
                                                            }
                                                            onChange={(e) =>
                                                                 setCountrySearchTerm(
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
                                                            autoFocus
                                                       />
                                                  </div>
                                                  <div className="max-h-48 overflow-y-auto">
                                                       {filteredCountries.length >
                                                       0 ? (
                                                            filteredCountries.map(
                                                                 (
                                                                      country,
                                                                      index
                                                                 ) => (
                                                                      <button
                                                                           key={`${country.code}-${country.country}-${index}`}
                                                                           type="button"
                                                                           onClick={() =>
                                                                                handleCountrySelect(
                                                                                     country.code
                                                                                )
                                                                           }
                                                                           className={`w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center transition-colors ${
                                                                                formData.countryCode ===
                                                                                country.code
                                                                                     ? "bg-blue-100"
                                                                                     : ""
                                                                           }`}
                                                                      >
                                                                           <span className="mr-3 text-lg">
                                                                                {
                                                                                     country.flag
                                                                                }
                                                                           </span>
                                                                           <span className="mr-3 font-medium text-blue-600 min-w-[60px]">
                                                                                {
                                                                                     country.code
                                                                                }
                                                                           </span>
                                                                           <span className="text-sm text-gray-700 truncate">
                                                                                {
                                                                                     country.name
                                                                                }
                                                                           </span>
                                                                      </button>
                                                                 )
                                                            )
                                                       ) : (
                                                            <div className="px-4 py-3 text-gray-500 text-sm">
                                                                 No countries
                                                                 found
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                        )}

                                        {formErrors.phone && (
                                             <p className="mt-2 text-sm text-red-500 flex items-center">
                                                  <AlertCircle className="w-4 h-4 mr-1" />
                                                  {formErrors.phone}
                                             </p>
                                        )}
                                        <p className="text-xs text-gray-500 mt-1">
                                             (optional)
                                        </p>
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="company"
                                             className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                             Company
                                        </label>
                                        <input
                                             type="text"
                                             id="company"
                                             name="company"
                                             placeholder="Your company name"
                                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                                             value={formData.company}
                                             onChange={handleInputChange}
                                             disabled={isSubmitting}
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                             (optional)
                                        </p>
                                   </div>
                              </div>
                         </div>
                    );
               case 3:
                    return (
                         <div className="space-y-6">
                              <div className="text-center mb-6">
                                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
                                        <Target className="w-8 h-8 text-white" />
                                   </div>
                                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Confirm Your Information
                                   </h3>
                                   <p className="text-gray-600">
                                        Review and submit your request
                                   </p>
                              </div>

                              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-3">
                                             <div>
                                                  <p className="text-sm text-gray-500 font-medium">
                                                       Website URL
                                                  </p>
                                                  <p className="font-semibold text-gray-800">
                                                       {formData.websiteUrl}
                                                  </p>
                                             </div>
                                             <div>
                                                  <p className="text-sm text-gray-500 font-medium">
                                                       Name
                                                  </p>
                                                  <p className="font-semibold text-gray-800">
                                                       {formData.name}
                                                  </p>
                                             </div>
                                             <div>
                                                  <p className="text-sm text-gray-500 font-medium">
                                                       Email
                                                  </p>
                                                  <p className="font-semibold text-gray-800">
                                                       {formData.email}
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="space-y-3">
                                             <div>
                                                  <p className="text-sm text-gray-500 font-medium">
                                                       Phone
                                                  </p>
                                                  <p className="font-semibold text-gray-800">
                                                       {formData.phone
                                                            ? `${
                                                                   COUNTRY_CODES.find(
                                                                        (c) =>
                                                                             c.code ===
                                                                             formData.countryCode
                                                                   )?.flag
                                                              } ${
                                                                   formData.countryCode
                                                              } ${
                                                                   formData.phone
                                                              }`
                                                            : "Not provided"}
                                                  </p>
                                             </div>
                                             <div>
                                                  <p className="text-sm text-gray-500 font-medium">
                                                       Company
                                                  </p>
                                                  <p className="font-semibold text-gray-800">
                                                       {formData.company ||
                                                            "Not provided"}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   {formData.details && (
                                        <div className="mt-4 pt-4 border-t border-blue-200">
                                             <p className="text-sm text-gray-500 font-medium mb-2">
                                                  SEO Goals
                                             </p>
                                             <p className="text-gray-800">
                                                  {formData.details}
                                             </p>
                                        </div>
                                   )}
                              </div>

                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-xl">
                                   <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                             <p className="text-sm text-gray-700 font-semibold mb-2">
                                                  What happens next?
                                             </p>
                                             <ul className="text-sm text-gray-600 space-y-1">
                                                  <li>
                                                       • Our SEO experts will
                                                       analyze your website
                                                       within 2-3 business days
                                                  </li>
                                                  <li>
                                                       • You'll receive a
                                                       comprehensive report with
                                                       actionable
                                                       recommendations
                                                  </li>
                                                  <li>
                                                       • We'll identify
                                                       opportunities to improve
                                                       your search rankings and
                                                       traffic
                                                  </li>
                                                  <li>
                                                       • No obligation - this
                                                       analysis is completely
                                                       free
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
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
                              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
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
                                   className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
                                   initial={{ scale: 0.95, y: 20 }}
                                   animate={{ scale: 1, y: 0 }}
                                   exit={{ scale: 0.95, opacity: 0 }}
                                   transition={{
                                        type: "spring",
                                        damping: 25,
                                        stiffness: 300,
                                   }}
                              >
                                   <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-6 relative text-white">
                                        <button
                                             onClick={onClose}
                                             className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                                             aria-label="Close popup"
                                             disabled={isSubmitting}
                                        >
                                             <X className="h-5 w-5" />
                                        </button>
                                        <div className="text-center">
                                             <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                                  FREE Website SEO Analysis
                                             </h2>
                                             <p className="text-white/90 text-sm sm:text-base">
                                                  Get actionable insights to
                                                  boost your search rankings and
                                                  drive more traffic to your
                                                  website.
                                             </p>
                                        </div>
                                   </div>

                                   <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                                        {submitStatus && (
                                             <motion.div
                                                  initial={{
                                                       opacity: 0,
                                                       y: -10,
                                                  }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  className={`mb-6 p-4 rounded-xl ${
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
                                                       <p>
                                                            {
                                                                 submitStatus.message
                                                            }
                                                       </p>
                                                  </div>
                                             </motion.div>
                                        )}

                                        {renderStepIndicator()}

                                        <form
                                             ref={formRef}
                                             className="quote-form-email"
                                        >
                                             <AnimatePresence mode="wait">
                                                  <motion.div
                                                       key={currentStep}
                                                       initial={{
                                                            opacity: 0,
                                                            x: 20,
                                                       }}
                                                       animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                       }}
                                                       exit={{
                                                            opacity: 0,
                                                            x: -20,
                                                       }}
                                                       transition={{
                                                            duration: 0.3,
                                                       }}
                                                  >
                                                       {renderFormStep()}
                                                  </motion.div>
                                             </AnimatePresence>

                                             {/* Hidden inputs */}
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
                                             <input
                                                  type="hidden"
                                                  name="name"
                                                  value={formData.name}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="email"
                                                  value={formData.email}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="phone"
                                                  value={
                                                       formData.phone
                                                            ? `${formData.countryCode} ${formData.phone}`
                                                            : ""
                                                  }
                                             />
                                             <input
                                                  type="hidden"
                                                  name="company"
                                                  value={formData.company}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="countryCode"
                                                  value={formData.countryCode}
                                             />

                                             <div className="flex justify-between items-center mt-8">
                                                  {currentStep > 1 ? (
                                                       <button
                                                            type="button"
                                                            onClick={
                                                                 handlePrevStep
                                                            }
                                                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-medium"
                                                            disabled={
                                                                 isSubmitting
                                                            }
                                                       >
                                                            Back
                                                       </button>
                                                  ) : (
                                                       <button
                                                            type="button"
                                                            onClick={onClose}
                                                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-medium"
                                                            disabled={
                                                                 isSubmitting
                                                            }
                                                       >
                                                            Cancel
                                                       </button>
                                                  )}
                                                  <motion.button
                                                       type="button"
                                                       onClick={handleNextStep}
                                                       className={`py-3 px-8 rounded-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 ${
                                                            currentStep === 3
                                                                 ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white focus:ring-green-500/50"
                                                                 : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500/50"
                                                       } disabled:opacity-70 disabled:cursor-not-allowed`}
                                                       whileHover={{
                                                            scale: 1.02,
                                                       }}
                                                       whileTap={{
                                                            scale: 0.98,
                                                       }}
                                                       disabled={isSubmitting}
                                                  >
                                                       {isSubmitting ? (
                                                            <>
                                                                 <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                                 Sending...
                                                            </>
                                                       ) : currentStep === 3 ? (
                                                            <span>
                                                                 Submit Request
                                                            </span>
                                                       ) : (
                                                            <>
                                                                 <span>
                                                                      Continue
                                                                 </span>
                                                                 <ArrowRight className="h-4 w-4 ml-1" />
                                                            </>
                                                       )}
                                                  </motion.button>
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
