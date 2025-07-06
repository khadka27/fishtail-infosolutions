"use client";

import type React from "react";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import toast from "react-hot-toast";

export default function NewsletterSignup() {
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          if (!email) {
               toast.error("Please enter your email address");
               return;
          }

          setIsSubmitting(true);

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          toast.success("You've been subscribed to our newsletter.");

          setEmail("");
          setName("");
          setIsSubmitting(false);
     };

     return (
          <div className="bg-blue-500 py-12">
               <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                         <div className="flex items-center text-white">
                              <Mail className="h-10 w-10 mr-4" />
                              <h2 className="text-xl font-bold">
                                   Get new blog posts by email:
                              </h2>
                         </div>

                         <form
                              onSubmit={handleSubmit}
                              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
                         >
                              <Input
                                   type="text"
                                   placeholder="Name"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   className="bg-white"
                              />
                              <Input
                                   type="email"
                                   placeholder="Email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                                   className="bg-white"
                              />
                              <Button
                                   type="submit"
                                   disabled={isSubmitting}
                                   className="bg-white text-blue-600 hover:bg-gray-100"
                              >
                                   Subscribe
                              </Button>
                         </form>
                    </div>
               </div>
          </div>
     );
}
