"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
     size?: number;
     color?: string;
}

export function LoadingSpinner({
     size = 40,
     color = "blue-500",
}: LoadingSpinnerProps) {
     return (
          <div className="flex justify-center items-center">
               <motion.div
                    className={`w-${size} h-${size} border-4 border-gray-200 rounded-full border-t-${color}`}
                    animate={{ rotate: 360 }}
                    transition={{
                         duration: 1,
                         repeat: Number.POSITIVE_INFINITY,
                         ease: "linear",
                    }}
               />
          </div>
     );
}
