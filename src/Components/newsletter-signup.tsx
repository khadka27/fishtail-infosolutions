"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import toast from "react-hot-toast";

export default function NewsletterSignup() {
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [isRateLimited, setIsRateLimited] = useState(false);
     const [cooldownTime, setCooldownTime] = useState(0);

     // Rate limiting configuration
     const RATE_LIMIT_DURATION = 30000; // 30 seconds between submissions
     const COOLDOWN_DURATION = 60000; // 1 minute cooldown after successful submission
     const MAX_ATTEMPTS = 3; // Maximum attempts per session
     const ATTEMPT_RESET_TIME = 300000; // 5 minutes to reset attempts

     // Get stored data from localStorage
     const getStoredData = () => {
          if (typeof window === "undefined")
               return { lastSubmission: 0, attempts: 0, lastAttempt: 0 };

          const stored = localStorage.getItem("newsletter_rate_limit");
          if (stored) {
               return JSON.parse(stored);
          }
          return { lastSubmission: 0, attempts: 0, lastAttempt: 0 };
     };

     // Store data in localStorage
     const storeData = (data: any) => {
          if (typeof window === "undefined") return;
          localStorage.setItem("newsletter_rate_limit", JSON.stringify(data));
     };

     // Check if user is rate limited
     const checkRateLimit = () => {
          const now = Date.now();
          const data = getStoredData();

          // Reset attempts if enough time has passed
          if (now - data.lastAttempt > ATTEMPT_RESET_TIME) {
               data.attempts = 0;
               data.lastAttempt = now;
               storeData(data);
          }

          // Check if too many attempts
          if (data.attempts >= MAX_ATTEMPTS) {
               const timeRemaining =
                    ATTEMPT_RESET_TIME - (now - data.lastAttempt);
               toast.error(
                    `Too many attempts. Please try again in ${Math.ceil(
                         timeRemaining / 60000
                    )} minutes.`
               );
               return true;
          }

          // Check if submitting too quickly
          if (now - data.lastSubmission < RATE_LIMIT_DURATION) {
               const timeRemaining =
                    RATE_LIMIT_DURATION - (now - data.lastSubmission);
               toast.error(
                    `Please wait ${Math.ceil(
                         timeRemaining / 1000
                    )} seconds before trying again.`
               );
               return true;
          }

          return false;
     };

     // Update attempt count
     const updateAttempts = () => {
          const now = Date.now();
          const data = getStoredData();
          data.attempts += 1;
          data.lastAttempt = now;
          storeData(data);
     };

     // Handle successful submission
     const handleSuccessfulSubmission = () => {
          const now = Date.now();
          const data = getStoredData();
          data.lastSubmission = now;
          data.attempts = 0; // Reset attempts on successful submission
          storeData(data);

          setCooldownTime(COOLDOWN_DURATION);
          setIsRateLimited(true);
     };

     // Countdown timer effect
     useEffect(() => {
          if (cooldownTime > 0) {
               const timer = setTimeout(() => {
                    setCooldownTime(cooldownTime - 1000);
               }, 1000);
               return () => clearTimeout(timer);
          } else if (isRateLimited) {
               setIsRateLimited(false);
          }
     }, [cooldownTime, isRateLimited]);

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          if (!email) {
               toast.error("Please enter your email address");
               return;
          }

          // Check rate limiting
          if (checkRateLimit()) {
               return;
          }

          setIsSubmitting(true);
          updateAttempts();

          try {
               // Simulate API call
               await new Promise((resolve) => setTimeout(resolve, 1000));

               toast.success("You've been subscribed to our newsletter.");
               handleSuccessfulSubmission();

               setEmail("");
               setName("");
          } catch (error) {
               toast.error("Failed to subscribe. Please try again later.");
          } finally {
               setIsSubmitting(false);
          }
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
                                   disabled={isRateLimited}
                              />
                              <Input
                                   type="email"
                                   placeholder="Email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                                   className="bg-white"
                                   disabled={isRateLimited}
                              />
                              <Button
                                   type="submit"
                                   disabled={isSubmitting || isRateLimited}
                                   className="bg-white text-blue-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                   {isRateLimited
                                        ? `Wait ${Math.ceil(
                                               cooldownTime / 1000
                                          )}s`
                                        : isSubmitting
                                        ? "Subscribing..."
                                        : "Subscribe"}
                              </Button>
                         </form>
                    </div>
               </div>
          </div>
     );
}
