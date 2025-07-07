"use client";

import { useState, useRef } from "react";
import type React from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/Components/ui/button";
import {
     Send,
     CheckCircle,
     AlertCircle,
     User,
     Mail,
     Building,
     Phone,
     MessageSquare,
     Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormData {
     name: string;
     email: string;
     company: string;
     phone: string;
     message: string;
}

export default function ContactForm() {
     const [formData, setFormData] = useState<ContactFormData>({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
     });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submissions, setSubmissions] = useState<ContactFormData[]>([]);
     const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
     const [errorMessage, setErrorMessage] = useState<string | null>(null);
     const formRef = useRef<HTMLFormElement>(null);

     const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          if (!formRef.current) return;

          try {
               setIsSubmitting(true);
               setSubmitSuccess(null);
               setErrorMessage(null);

               const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
               const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
               const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
               const result = await emailjs.sendForm(
                    serviceId!,
                    templateId!,
                    formRef.current,
                    publicKey!
               );

               console.log("Email sent successfully:", result.text);

               const updatedSubmissions = [...submissions, formData];
               setSubmissions(updatedSubmissions);

               setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
               });

               setSubmitSuccess(true);
          } catch (error) {
               console.error("Error sending email:", error);
               setSubmitSuccess(false);
               setErrorMessage(
                    "There was an error submitting the form. Please try again."
               );
          } finally {
               setIsSubmitting(false);
          }
     };

     const exportToCSV = () => {
          const headers = ["Name", "Email", "Company", "Phone", "Message"];
          const csvRows = [
               headers.join(","),
               ...submissions.map((item) =>
                    [
                         `"${item.name}"`,
                         `"${item.email}"`,
                         `"${item.company || ""}"`,
                         `"${item.phone || ""}"`,
                         `"${item.message.replace(/"/g, '""')}"`,
                    ].join(",")
               ),
          ];
          const csvContent = csvRows.join("\n");

          const blob = new Blob([csvContent], {
               type: "text/csv;charset=utf-8;",
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute(
               "download",
               `contact_submissions_${new Date()
                    .toISOString()
                    .slice(0, 10)}.csv`
          );
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

     return (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
               <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2">
                         Start a Conversation
                    </h2>
                    <p className="text-gray-600">
                         We&apos;re here to help you grow your business.
                         Let&apos;s discuss your project and find the perfect
                         solution together.
                    </p>
               </div>

               <AnimatePresence>
                    {submitSuccess === true && (
                         <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-700 rounded-xl flex items-center gap-3"
                         >
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <div>
                                   <div className="font-medium">Success!</div>
                                   <div className="text-sm">
                                        We&apos;ll get back to you within 24
                                        hours with a detailed proposal tailored
                                        to your needs.
                                   </div>
                              </div>
                         </motion.div>
                    )}

                    {submitSuccess === false && (
                         <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 text-red-700 rounded-xl flex items-center gap-3"
                         >
                              <AlertCircle className="w-5 h-5 text-red-600" />
                              <div>
                                   <div className="font-medium">Error</div>
                                   <div className="text-sm">
                                        {errorMessage || "Please try again."}
                                   </div>
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>

               <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6 contact-form-email"
               >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="group">
                              <label
                                   htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                   Full Name{" "}
                                   <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                   <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                        placeholder="Your full name"
                                   />
                              </div>
                         </div>

                         <div className="group">
                              <label
                                   htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                   Email Address{" "}
                                   <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                   <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                        placeholder="your@email.com"
                                   />
                              </div>
                         </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="group">
                              <label
                                   htmlFor="company"
                                   className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                   Company{" "}
                                   <span className="text-gray-400 text-xs">
                                        (optional)
                                   </span>
                              </label>
                              <div className="relative">
                                   <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                   <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                        placeholder="Your company name"
                                   />
                              </div>
                         </div>

                         <div className="group">
                              <label
                                   htmlFor="phone"
                                   className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                   Phone Number{" "}
                                   <span className="text-gray-400 text-xs">
                                        (optional)
                                   </span>
                              </label>
                              <div className="relative">
                                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                   <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                        placeholder="+1 (555) 123-4567"
                                   />
                              </div>
                         </div>
                    </div>

                    <div className="group">
                         <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-700 mb-2"
                         >
                              Message <span className="text-red-500">*</span>
                         </label>
                         <div className="relative">
                              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                              <textarea
                                   id="message"
                                   name="message"
                                   rows={5}
                                   required
                                   value={formData.message}
                                   onChange={handleChange}
                                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                                   placeholder="Tell us about your project, goals, and how we can help you..."
                              />
                         </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                         <p className="text-sm text-blue-700 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              We&apos;ll get back to you within 24 hours with a
                              detailed proposal tailored to your needs.
                         </p>
                    </div>

                    <motion.div
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                    >
                         <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                         >
                              {isSubmitting ? (
                                   <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                   </>
                              ) : (
                                   <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                   </>
                              )}
                         </Button>
                    </motion.div>
               </form>

               {/* Admin section - only show if there are submissions */}
               {submissions.length > 0 && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                              <div>
                                   <h3 className="text-lg font-semibold text-gray-800">
                                        Form Submissions
                                   </h3>
                                   <p className="text-sm text-gray-600">
                                        {submissions.length} total submissions
                                   </p>
                              </div>
                              <Button
                                   onClick={exportToCSV}
                                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2"
                              >
                                   <Download className="w-4 h-4" />
                                   Export CSV
                              </Button>
                         </div>

                         <div className="overflow-x-auto">
                              <table className="min-w-full">
                                   <thead>
                                        <tr className="border-b border-gray-200">
                                             <th className="text-left py-3 px-4 font-medium text-gray-700">
                                                  Name
                                             </th>
                                             <th className="text-left py-3 px-4 font-medium text-gray-700">
                                                  Email
                                             </th>
                                             <th className="text-left py-3 px-4 font-medium text-gray-700">
                                                  Company
                                             </th>
                                             <th className="text-left py-3 px-4 font-medium text-gray-700">
                                                  Phone
                                             </th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {submissions.map(
                                             (submission, index) => (
                                                  <tr
                                                       key={index}
                                                       className="border-b border-gray-100 hover:bg-white transition-colors"
                                                  >
                                                       <td className="py-3 px-4 text-gray-800">
                                                            {submission.name}
                                                       </td>
                                                       <td className="py-3 px-4 text-gray-600">
                                                            {submission.email}
                                                       </td>
                                                       <td className="py-3 px-4 text-gray-600">
                                                            {submission.company ||
                                                                 "-"}
                                                       </td>
                                                       <td className="py-3 px-4 text-gray-600">
                                                            {submission.phone ||
                                                                 "-"}
                                                       </td>
                                                  </tr>
                                             )
                                        )}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               )}
          </div>
     );
}
