// export default function LoadingSpinner() {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0084FF]"></div>
//       </div>
//     )
//   }

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
