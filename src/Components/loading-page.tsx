"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import { Particles } from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const characterControls = useAnimation();

  // Use Framer Motion instead of react-spring
  const x = useMotionValue(0);

  // Update the x motion value when progress changes
  useEffect(() => {
    const progressBarWidth = progressBarRef.current?.clientWidth || 0;
    const newX = (progress / 100) * progressBarWidth;
    x.set(newX);
  }, [progress, x]);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Animate the character based on progress
    if (progress < 100) {
      characterControls.start({
        y: [0, -10, 0],
        transition: {
          duration: 0.5,
          repeat: 1,
          repeatType: "reverse",
        },
      });
    } else {
      characterControls.start({
        scale: [1, 1.5, 1],
        rotate: [0, 360],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      });
    }
  }, [progress, characterControls]);

  // Animation variants for the letters
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  // Animation variants for the info text
  const infoVariants = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
      },
    },
  };

  // Text for the logo
  const fishtailText = "FISHTAIL";
  const infoText = "INFOSOLUTIONS";

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#0080ff",
              },
              links: {
                color: "#0080ff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="flex flex-col items-center z-10">
        {/* Animated Logo Text */}
        <div className="mb-6 relative">
          <div className="flex justify-center mb-1">
            {fishtailText.split("").map((letter, i) => (
              <motion.div
                key={`fishtail-${i}`}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className="relative"
              >
                <span className="text-5xl font-bold text-blue-500 tracking-tight">
                  {letter}
                </span>
                {i === 0 && (
                  <motion.div
                    className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-4 h-4 bg-blue-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={infoVariants}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <span className="text-sm tracking-widest text-gray-700 font-medium">
              {infoText}
            </span>
          </motion.div>
        </div>

        {/* Progress Bar with Running Character */}
        <div
          className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden mb-4 relative"
          ref={progressBarRef}
        >
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />

          {/* Running Character - Using Framer Motion instead of react-spring */}
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{ left: `${progress}%` }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
          >
            <motion.div
              animate={characterControls}
              className="absolute -top-4 -left-2"
            >
              <div className="relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#FFC107"
                    stroke="#FF9800"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <motion.div
                  className="absolute -bottom-1 -right-1 w-6 h-2"
                  animate={{
                    width: [6, 10, 6],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.3,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-full h-full bg-yellow-400 rounded-full opacity-50" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Progress Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-500 font-medium mb-2"
        >
          {progress}%
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-500 text-sm font-light tracking-wider"
        >
          {loading ? (
            <div className="flex items-center">
              <span>LOADING</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="ml-1"
              >
                ...
              </motion.span>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <span className="text-green-500 font-medium">WELCOME</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-gray-400 mt-1"
                >
                  Click anywhere to continue
                </motion.span>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}
