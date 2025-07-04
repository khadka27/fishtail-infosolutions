"use client";

import type React from "react";

import { Plus, Minus, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Feature = {
     name: string;
     included: boolean;
     description?: string;
};

type PlanType = "free" | "small" | "enterprise";

type PricingCardProps = {
     planType: PlanType;
     title: string;
     price: string;
     description: string;
     icon: React.ReactNode;
     features: Feature[];
     popular?: boolean;
     gradientFrom: string;
     gradientTo: string;
     textColor: string;
     accentColor: string;
     accentBgColor: string;
     onBuyClick: (plan: PlanType) => void;
     isActive?: boolean;
     onMouseEnter?: () => void;
     onMouseLeave?: () => void;
};

export function PricingCard({
     planType,
     title,
     price,
     description,
     icon,
     features,
     popular = false,
     gradientFrom,
     gradientTo,
     textColor,
     accentColor,
     accentBgColor,
     onBuyClick,
     isActive = false,
     onMouseEnter,
     onMouseLeave,
}: PricingCardProps) {
     const [openFeatures, setOpenFeatures] = useState<{
          [key: string]: boolean;
     }>({});
     const [hovered, setHovered] = useState(false);

     const toggleFeature = (featureName: string) => {
          setOpenFeatures((prev) => ({
               ...prev,
               [featureName]: !prev[featureName],
          }));
     };

     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className={`border border-gray-200 rounded-2xl overflow-hidden flex flex-col bg-white shadow-lg transition-all duration-300 ${
                    isActive || hovered
                         ? "shadow-xl -translate-y-2"
                         : "hover:shadow-xl hover:-translate-y-1"
               } relative`}
               onMouseEnter={() => {
                    setHovered(true);
                    onMouseEnter?.();
               }}
               onMouseLeave={() => {
                    setHovered(false);
                    onMouseLeave?.();
               }}
          >
               {popular && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold uppercase tracking-wider text-gray-800 px-3 py-1 rounded-bl-lg z-10">
                         Popular
                    </div>
               )}
               <div
                    className={`bg-gradient-to-br from-${gradientFrom} to-${gradientTo} text-${textColor} p-8 text-center relative overflow-hidden`}
               >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                         <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0"
                         >
                              <defs>
                                   <pattern
                                        id="grid"
                                        width="10"
                                        height="10"
                                        patternUnits="userSpaceOnUse"
                                        patternTransform="rotate(45)"
                                   >
                                        <path
                                             d="M 0 0 L 10 0"
                                             stroke="currentColor"
                                             strokeWidth="0.5"
                                             fill="none"
                                             strokeDasharray="1 2"
                                        />
                                   </pattern>
                              </defs>
                              <rect
                                   width="100%"
                                   height="100%"
                                   fill="url(#grid)"
                              />
                         </svg>
                    </div>
                    <div className="uppercase text-sm font-medium tracking-wider mb-4 relative z-10">
                         {title}
                    </div>
                    <motion.div
                         className="flex justify-center mb-6 bg-white/20 w-20 h-20 rounded-full mx-auto items-center relative z-10"
                         animate={{
                              y: [0, -5, 0],
                              scale: hovered ? 1.05 : 1,
                         }}
                         transition={{
                              y: {
                                   repeat: Number.POSITIVE_INFINITY,
                                   duration: 2,
                                   ease: "easeInOut",
                              },
                              scale: { duration: 0.3 },
                         }}
                    >
                         {icon}
                    </motion.div>
                    <div className="text-4xl font-bold mb-2 relative z-10">
                         {price}
                    </div>
                    <div className="text-sm opacity-90 relative z-10">
                         {description}
                    </div>
                    <motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className={`mt-6 bg-white text-${accentColor} hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-md transition-colors duration-200 w-full relative z-10`}
                         onClick={() => onBuyClick(planType)}
                    >
                         {planType === "free" ? "Start Now" : "Buy Now"}
                    </motion.button>
               </div>

               <div className="p-6 bg-white flex-grow">
                    {features.map((feature, index) => (
                         <div
                              key={index}
                              className="border-b border-gray-100 py-4 last:border-0"
                         >
                              <div
                                   className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors"
                                   onClick={() => toggleFeature(feature.name)}
                              >
                                   <div className="flex items-center">
                                        <Check
                                             className={`h-4 w-4 text-${accentColor} mr-2`}
                                        />
                                        <span className="text-gray-700">
                                             {feature.name}
                                        </span>
                                   </div>
                                   <div
                                        className={`${accentBgColor} rounded-full p-1`}
                                   >
                                        {openFeatures[feature.name] ? (
                                             <Minus
                                                  className={`h-4 w-4 text-${accentColor}`}
                                             />
                                        ) : (
                                             <Plus
                                                  className={`h-4 w-4 text-${accentColor}`}
                                             />
                                        )}
                                   </div>
                              </div>
                              <AnimatePresence>
                                   {openFeatures[feature.name] &&
                                        feature.description && (
                                             <motion.div
                                                  initial={{
                                                       opacity: 0,
                                                       height: 0,
                                                  }}
                                                  animate={{
                                                       opacity: 1,
                                                       height: "auto",
                                                  }}
                                                  exit={{
                                                       opacity: 0,
                                                       height: 0,
                                                  }}
                                                  transition={{ duration: 0.3 }}
                                                  className={`mt-2 text-sm text-gray-600 pl-4 border-l-2 border-${accentColor}-200 bg-gray-50 rounded-r-lg p-3`}
                                             >
                                                  {feature.description}
                                             </motion.div>
                                        )}
                              </AnimatePresence>
                         </div>
                    ))}
               </div>
          </motion.div>
     );
}
