"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedLogoProps {
  width?: number;
  height?: number;
}

export function AnimatedLogo({ width = 200, height = 80 }: AnimatedLogoProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className="relative"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JibN01MlZXQvCB534ufa4JXaPsFlnn.png"
        alt="Fishtail InfoSolutions Logo"
        width={width}
        height={height}
        priority
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          repeatType: "reverse",
        }}
        className="absolute left-[30px] top-[30px] w-[12px] h-[12px] bg-blue-500 rounded-full opacity-70"
        style={{ filter: "blur(2px)" }}
      />
    </motion.div>
  );
}
