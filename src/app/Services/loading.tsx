"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  TwitterIcon as TikTok,
} from "lucide-react";

// Social platform icons for the animation
const platformIcons = [
  <Facebook key="facebook" className="h-8 w-8" />,
  <Twitter key="twitter" className="h-8 w-8" />,
  <Instagram key="instagram" className="h-8 w-8" />,
  <Linkedin key="linkedin" className="h-8 w-8" />,
  <Youtube key="youtube" className="h-8 w-8" />,
  <TikTok key="tiktok" className="h-8 w-8" />,
];

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 30);

    return () => clearTimeout(timer);
  }, [progress]);

  // Cycle through platform icons
  useEffect(() => {
    const iconTimer = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % platformIcons.length);
    }, 800);

    return () => clearInterval(iconTimer);
  }, []);

  // Loading messages
  const loadingMessages = [
    "Preparing your social media strategy...",
    "Analyzing engagement metrics...",
    "Optimizing content calendar...",
    "Setting up campaign parameters...",
  ];

  const currentMessage =
    loadingMessages[Math.floor((progress / 100) * loadingMessages.length)];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-blue-800 text-white p-4">
      <div className="w-full max-w-md mx-auto text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Social Media Marketing
          </h1>
          <p className="text-blue-200">Loading your customized experience</p>
        </motion.div>

        {/* Animated platform icon */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIcon}
            className="flex justify-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
              {platformIcons[currentIcon]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="w-full bg-white/20 rounded-full h-2.5 mb-4 overflow-hidden">
          <motion.div
            className="bg-white h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress percentage */}
        <div className="flex justify-between text-sm mb-6">
          <span>Loading</span>
          <span>{progress}%</span>
        </div>

        {/* Loading message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            className="text-blue-200 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentMessage}
          </motion.p>
        </AnimatePresence>

        {/* Animated dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="h-2 w-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mobile-friendly note */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-blue-200 text-xs">
        <p>Optimizing for your device...</p>
      </div>
    </div>
  );
}
