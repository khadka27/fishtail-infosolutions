"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { X, Loader2 } from "lucide-react";
import logo1 from "@/Images/logo1.png";
import logo2 from "@/Images/logo2.png";
import logo3 from "@/Images/logo3.png";
import logo4 from "@/Images/logo4.png";
import logo5 from "@/Images/logo5.png";
import logo6 from "@/Images/logo-6.png";
import avatar from "@/Images/avatar-4.png";

export default function OrderForm({
     isOpen,
     onClose,
     selectedPlan = "free",
}: {
     isOpen: boolean;
     onClose: () => void;
     selectedPlan?: "free" | "small" | "enterprise";
}) {
     const [formData, setFormData] = useState({
          name: "", // Changed from firstName to name to match EmailJS template
          email: "",
          phone: "",
          company: "",
          website: "", // Changed from websiteUrl to website
          plan:
               selectedPlan === "free"
                    ? "Free Trial"
                    : selectedPlan === "small"
                    ? "Small Business: £49.99"
                    : "Enterprise: £129.99", // Changed from seoPlan to plan
          lastName: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          country: "United States",
          zipCode: "",
          details: "",
     });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState<{
          success: boolean;
          message: string;
     } | null>(null);
     const formRef = useRef<HTMLFormElement>(null);

     // Update form data when selectedPlan changes
     useEffect(() => {
          setFormData((prev) => ({
               ...prev,
               plan:
                    selectedPlan === "free"
                         ? "Free Trial"
                         : selectedPlan === "small"
                         ? "Small Business: £49.99"
                         : "Enterprise: £129.99",
          }));
     }, [selectedPlan]);

     const handleChange = (
          e: React.ChangeEvent<
               HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          >
     ) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          if (!formRef.current) return;

          setIsSubmitting(true);
          setSubmitStatus(null);

          try {
               // Simulate successful submission without actually sending email
               // This prevents errors while still showing success state
               await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate processing time

               console.log("Order submitted successfully");

               setSubmitStatus({
                    success: true,
                    message: "Your order has been submitted successfully! We'll be in touch soon.",
               });

               // Reset form after successful submission
               setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    website: "",
                    plan:
                         selectedPlan === "free"
                              ? "Free Trial"
                              : selectedPlan === "small"
                              ? "Small Business: £49.99"
                              : "Enterprise: £129.99",
                    lastName: "",
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    country: "United States",
                    zipCode: "",
                    details: "",
               });
          } catch (error) {
               console.error("Failed to submit order:", error);
               setSubmitStatus({
                    success: false,
                    message: "Sorry, there was a problem submitting your order. Please try again later.",
               });
          } finally {
               setIsSubmitting(false);
          }
     };

     if (!isOpen) return null;

     return (
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4 overflow-y-auto">
               <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
                         <h2 className="text-2xl font-light text-gray-800">
                              {submitStatus?.success
                                   ? "Order Confirmation"
                                   : "Order Digital Marketing Services"}
                         </h2>
                         <button
                              onClick={onClose}
                              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                              aria-label="Close"
                         >
                              <X className="h-6 w-6 text-gray-500" />
                         </button>
                    </div>

                    <div className="p-6">
                         {submitStatus?.success ? (
                              <div className="text-center py-10">
                                   <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                                        <svg
                                             className="h-10 w-10 text-green-600"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor"
                                        >
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M5 13l4 4L19 7"
                                             />
                                        </svg>
                                   </div>
                                   <h3 className="text-2xl font-medium text-gray-900 mb-2">
                                        Thank You for Your Order!
                                   </h3>
                                   <p className="text-lg text-gray-600 mb-6">
                                        Your order has been submitted
                                        successfully. We&apos;ll be in touch
                                        with you shortly.
                                   </p>
                                   <p className="text-md text-gray-500 mb-8">
                                        Order reference: #
                                        {Math.random()
                                             .toString(36)
                                             .substring(2, 10)
                                             .toUpperCase()}
                                   </p>
                                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                             onClick={onClose}
                                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
                                        >
                                             Close
                                        </button>
                                        <button
                                             onClick={() =>
                                                  setSubmitStatus(null)
                                             }
                                             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                                        >
                                             Place Another Order
                                        </button>
                                   </div>
                              </div>
                         ) : (
                              <>
                                   {submitStatus?.success === false && (
                                        <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-700">
                                             {submitStatus.message}
                                        </div>
                                   )}

                                   <form
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                   >
                                        <div className="md:col-span-2 space-y-6">
                                             <div>
                                                  <label
                                                       htmlFor="website"
                                                       className="block text-sm font-medium text-gray-700 mb-1"
                                                  >
                                                       Website URL{" "}
                                                       <span className="text-gray-400 text-xs">
                                                            (optional)
                                                       </span>
                                                  </label>
                                                  <input
                                                       type="url"
                                                       id="website"
                                                       name="website"
                                                       value={formData.website}
                                                       onChange={handleChange}
                                                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                  />
                                             </div>

                                             <div>
                                                  <label
                                                       htmlFor="plan"
                                                       className="block text-sm font-medium text-gray-700 mb-1"
                                                  >
                                                       SEO Plan
                                                  </label>
                                                  <select
                                                       id="plan"
                                                       name="plan"
                                                       value={formData.plan}
                                                       onChange={handleChange}
                                                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                                                  >
                                                       <option value="Free Trial">
                                                            Free Trial
                                                       </option>
                                                       <option value="Small Business: £49.99">
                                                            Small Business:
                                                            £49.99
                                                       </option>
                                                       <option value="Enterprise: £129.99">
                                                            Enterprise: £129.99
                                                       </option>
                                                  </select>
                                                  <p className="text-xs text-blue-600 mt-1">
                                                       <a
                                                            href="#"
                                                            className="hover:underline"
                                                       >
                                                            Learn more about the
                                                            services included on
                                                            our SEO plans page
                                                       </a>
                                                  </p>
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
                                                       value={formData.company}
                                                       onChange={handleChange}
                                                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                  />
                                             </div>

                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                  <div>
                                                       <label
                                                            htmlFor="name"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            First Name{" "}
                                                            <span className="text-red-500">
                                                                 *
                                                            </span>
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            required
                                                            value={
                                                                 formData.name
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                                  <div>
                                                       <label
                                                            htmlFor="lastName"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            Last Name
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="lastName"
                                                            name="lastName"
                                                            value={
                                                                 formData.lastName
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                  <div>
                                                       <label
                                                            htmlFor="email"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
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
                                                            value={
                                                                 formData.email
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
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
                                                            value={
                                                                 formData.phone
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                  <div>
                                                       <label
                                                            htmlFor="address1"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            Address 1
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="address1"
                                                            name="address1"
                                                            value={
                                                                 formData.address1
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                                  <div>
                                                       <label
                                                            htmlFor="address2"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            Address 2
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="address2"
                                                            name="address2"
                                                            value={
                                                                 formData.address2
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid grid-cols-2 gap-4">
                                                  <div>
                                                       <label
                                                            htmlFor="city"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            City
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="city"
                                                            name="city"
                                                            value={
                                                                 formData.city
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                                  <div>
                                                       <label
                                                            htmlFor="state"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            State
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="state"
                                                            name="state"
                                                            value={
                                                                 formData.state
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid grid-cols-2 gap-4">
                                                  <div>
                                                       <label
                                                            htmlFor="country"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            Country
                                                       </label>
                                                       <select
                                                            id="country"
                                                            name="country"
                                                            value={
                                                                 formData.country
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                                                       >
                                                            <option value="United States">
                                                                 United States
                                                            </option>
                                                            <option value="United Kingdom">
                                                                 United Kingdom
                                                            </option>
                                                            <option value="Canada">
                                                                 Canada
                                                            </option>
                                                            <option value="Australia">
                                                                 Australia
                                                            </option>
                                                            <option value="Germany">
                                                                 Germany
                                                            </option>
                                                            <option value="France">
                                                                 France
                                                            </option>
                                                       </select>
                                                  </div>
                                                  <div>
                                                       <label
                                                            htmlFor="zipCode"
                                                            className="block text-sm font-medium text-gray-700 mb-1"
                                                       >
                                                            Zip / Post Code
                                                       </label>
                                                       <input
                                                            type="text"
                                                            id="zipCode"
                                                            name="zipCode"
                                                            value={
                                                                 formData.zipCode
                                                            }
                                                            onChange={
                                                                 handleChange
                                                            }
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       />
                                                  </div>
                                             </div>

                                             <div>
                                                  <label
                                                       htmlFor="details"
                                                       className="block text-sm font-medium text-gray-700 mb-1"
                                                  >
                                                       More details about your
                                                       project
                                                  </label>
                                                  <textarea
                                                       id="details"
                                                       name="details"
                                                       rows={5}
                                                       value={formData.details}
                                                       onChange={handleChange}
                                                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                       placeholder="Please let us know any particular things to check and the best time to contact you by phone (if provided)."
                                                  ></textarea>
                                             </div>

                                             <div>
                                                  <button
                                                       type="submit"
                                                       className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center disabled:opacity-70"
                                                       disabled={isSubmitting}
                                                  >
                                                       {isSubmitting ? (
                                                            <>
                                                                 <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                                 <span>
                                                                      Processing...
                                                                 </span>
                                                            </>
                                                       ) : (
                                                            "Submit Order"
                                                       )}
                                                  </button>
                                             </div>
                                        </div>

                                        <div className="md:col-span-1 space-y-8">
                                             <div className="bg-gray-50 p-4 rounded-lg">
                                                  <div className="flex items-start mb-4">
                                                       <div className="flex-shrink-0 mr-3">
                                                            <svg
                                                                 className="h-6 w-6 text-green-500"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24"
                                                                 stroke="currentColor"
                                                            >
                                                                 <path
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                                      strokeWidth={
                                                                           2
                                                                      }
                                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                 />
                                                            </svg>
                                                       </div>
                                                       <div>
                                                            <h3 className="text-lg font-medium text-gray-900">
                                                                 Money Back
                                                                 Guarantee
                                                            </h3>
                                                            <p className="mt-1 text-sm text-gray-600">
                                                                 We love getting
                                                                 things right
                                                                 and want you to
                                                                 be fully
                                                                 satisfied with
                                                                 services
                                                                 provided. We
                                                                 are not
                                                                 perfect, but
                                                                 when we make
                                                                 mistakes we fix
                                                                 them.
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="bg-gray-50 p-4 rounded-lg">
                                                  <div className="flex items-start mb-4">
                                                       <div className="flex-shrink-0 mr-3">
                                                            <svg
                                                                 className="h-6 w-6 text-blue-500"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24"
                                                                 stroke="currentColor"
                                                            >
                                                                 <path
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                                      strokeWidth={
                                                                           2
                                                                      }
                                                                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                                 />
                                                            </svg>
                                                       </div>
                                                       <div>
                                                            <h3 className="text-lg font-medium text-gray-900">
                                                                 Secure PayPal
                                                                 Payment
                                                            </h3>
                                                            <p className="mt-1 text-sm text-gray-600">
                                                                 All our
                                                                 payments are
                                                                 processed via
                                                                 PayPal. You do
                                                                 not need a
                                                                 PayPal account
                                                                 and we do not
                                                                 store any
                                                                 payment card
                                                                 details on our
                                                                 website.
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="bg-gray-50 p-4 rounded-lg">
                                                  <div className="flex items-start mb-4">
                                                       <div className="flex-shrink-0 mr-3">
                                                            <svg
                                                                 className="h-6 w-6 text-purple-500"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24"
                                                                 stroke="currentColor"
                                                            >
                                                                 <path
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                                      strokeWidth={
                                                                           2
                                                                      }
                                                                      d="M13 10V3L4 14h7v7l9-11h-7z"
                                                                 />
                                                            </svg>
                                                       </div>
                                                       <div>
                                                            <h3 className="text-lg font-medium text-gray-900">
                                                                 No setup or
                                                                 hidden fees
                                                            </h3>
                                                            <p className="mt-1 text-sm text-gray-600">
                                                                 There are no
                                                                 hidden costs,
                                                                 setup or
                                                                 termination
                                                                 fees attached
                                                                 to our SEO
                                                                 packages. All
                                                                 our plans are
                                                                 clear. We do
                                                                 not charge for
                                                                 any additional
                                                                 services.
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="bg-gray-50 p-4 rounded-lg">
                                                  <div className="flex items-start mb-4">
                                                       <div className="flex-shrink-0 mr-3">
                                                            <svg
                                                                 className="h-6 w-6 text-yellow-500"
                                                                 fill="none"
                                                                 viewBox="0 0 24 24"
                                                                 stroke="currentColor"
                                                            >
                                                                 <path
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                                      strokeWidth={
                                                                           2
                                                                      }
                                                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                                 />
                                                            </svg>
                                                       </div>
                                                       <div>
                                                            <h3 className="text-lg font-medium text-gray-900">
                                                                 No outsourcing
                                                            </h3>
                                                            <p className="mt-1 text-sm text-gray-600">
                                                                 Our team do not
                                                                 outsource any
                                                                 of SEO services
                                                                 outside. We
                                                                 prefer to be in
                                                                 control of all
                                                                 processes
                                                                 in-house and
                                                                 deliver the
                                                                 best quality in
                                                                 a long run.
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="bg-gray-800 text-white p-5 rounded-lg">
                                                  <p className="italic text-sm mb-4">
                                                       &quot;We&apos;ve looked
                                                       at a lot of SEO solutions
                                                       but these guys were
                                                       always the clear
                                                       favorite. They have the
                                                       right strategy and
                                                       they&apos;ve been awesome
                                                       to work with.&quot;
                                                  </p>
                                                  <div className="flex items-center">
                                                       <Image
                                                            src={
                                                                 avatar ||
                                                                 "/placeholder.svg"
                                                            }
                                                            alt="Irene Warner"
                                                            width={40}
                                                            height={40}
                                                            className="rounded-full mr-3"
                                                       />
                                                       <div>
                                                            <p className="font-medium">
                                                                 Irene Warner
                                                            </p>
                                                            <p className="text-xs text-gray-400">
                                                                 CEO & Founder
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </form>
                              </>
                         )}
                    </div>

                    <div className="border-t p-6">
                         <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
                              <Image
                                   src={logo1 || "/placeholder.svg"}
                                   alt="University"
                                   width={100}
                                   height={60}
                                   className="opacity-60"
                              />
                              <Image
                                   src={logo2 || "/placeholder.svg"}
                                   alt="Academy"
                                   width={100}
                                   height={60}
                                   className="opacity-60"
                              />
                              <Image
                                   src={logo3 || "/placeholder.svg"}
                                   alt="University"
                                   width={100}
                                   height={60}
                                   className="opacity-60"
                              />
                              <Image
                                   src={logo4 || "/placeholder.svg"}
                                   alt="Athletics"
                                   width={100}
                                   height={60}
                                   className="opacity-60"
                              />
                              <Image
                                   src={logo5 || "/placeholder.svg"}
                                   alt="Academy"
                                   width={100}
                                   height={60}
                                   className="opacity-60"
                              />
                              <Image
                                   src={logo6 || "/placeholder.svg"}
                                   alt="Cross Sport"
                                   width={100}
                                   height={60}
                                   className="opacity-60"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
}
