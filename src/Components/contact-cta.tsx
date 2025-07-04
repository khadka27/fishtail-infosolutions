"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react";

export default function ContactCTA() {
     return (
          <section className="py-12 md:py-20 bg-blue-600 text-white">
               <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.h2
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                         >
                              Ready to Transform Your Education Marketing?
                         </motion.h2>

                         <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, duration: 0.6 }}
                              className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto"
                         >
                              Let&apos;s discuss how our proven strategies can
                              help your institution attract more qualified
                              students and increase enrollment.
                         </motion.p>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.3, duration: 0.5 }}
                                   className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                              >
                                   <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                             <Mail className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">
                                             Email Us
                                        </h3>
                                        <p className="text-blue-100 mb-4 text-sm">
                                             Get a response within 24 hours
                                        </p>
                                        <Link
                                             href="mailto:info@fishtailinfo.com"
                                             className="text-white font-medium hover:underline"
                                        >
                                             info@fishtailinfo.com
                                        </Link>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.4, duration: 0.5 }}
                                   className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                              >
                                   <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                             <Calendar className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">
                                             Schedule a Call
                                        </h3>
                                        <p className="text-blue-100 mb-4 text-sm">
                                             Book a free 30-minute consultation
                                        </p>
                                        <Link
                                             href="/contact"
                                             className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-opacity-90 transition-all"
                                        >
                                             Book Now
                                        </Link>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.5, duration: 0.5 }}
                                   className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                              >
                                   <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                             <Phone className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">
                                             Call Us
                                        </h3>
                                        <p className="text-blue-100 mb-4 text-sm">
                                             Speak with an expert now
                                        </p>
                                        <Link
                                             href="tel:+919876543210"
                                             className="text-white font-medium hover:underline"
                                        >
                                             +91 98765 43210
                                        </Link>
                                   </div>
                              </motion.div>
                         </div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6, duration: 0.5 }}
                         >
                              <Link
                                   href="/contact"
                                   className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
                              >
                                   Get a Free Proposal
                                   <ArrowRight className="ml-2 h-5 w-5" />
                              </Link>
                              <p className="mt-4 text-sm text-blue-200">
                                   No obligation. Learn how we can help you
                                   grow.
                              </p>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
