"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
     ChevronLeft,
     ChevronRight,
     Globe,
     Code,
     PenTool,
     Layers,
     ShoppingCart,
     Smartphone,
     Zap,
     Send,
     Sparkles,
     CheckCircle,
     Rocket,
     Shield,
     Award,
} from "lucide-react";

// Simplified types
type ServiceOption = {
     id: string;
     name: string;
     description: string;
     price: number;
     icon: React.ReactNode;
     type: "select" | "toggle" | "slider";
     unit?: string;
     min?: number;
     max?: number;
};

type Step = {
     id: string;
     title: string;
     description?: string;
     options: ServiceOption[];
     multiSelect?: boolean;
     icon: React.ReactNode;
};

// Simplified steps data
const steps: Step[] = [
     {
          id: "website-type",
          title: "What type of website do you need?",
          icon: <Globe className="w-6 h-6" />,
          options: [
               {
                    id: "business",
                    name: "Business Website",
                    description: "Professional website for your company",
                    price: 1200,
                    icon: <Globe className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "ecommerce",
                    name: "E-Commerce Store",
                    description: "Online store with shopping cart",
                    price: 2500,
                    icon: <ShoppingCart className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "portfolio",
                    name: "Portfolio Website",
                    description: "Showcase your work and skills",
                    price: 800,
                    icon: <PenTool className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "webapp",
                    name: "Web Application",
                    description: "Interactive web app with features",
                    price: 4000,
                    icon: <Code className="w-5 h-5" />,
                    type: "select",
               },
          ],
          multiSelect: false,
     },
     {
          id: "design-features",
          title: "Design & Features",
          icon: <PenTool className="w-6 h-6" />,
          options: [
               {
                    id: "custom-design",
                    name: "Custom Design",
                    description: "Unique design for your brand",
                    price: 1500,
                    icon: <PenTool className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "mobile-optimization",
                    name: "Mobile Optimization",
                    description: "Perfect on all devices",
                    price: 300,
                    icon: <Smartphone className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "seo-setup",
                    name: "SEO Optimization",
                    description: "Search engine ready",
                    price: 400,
                    icon: <Zap className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "extra-pages",
                    name: "Additional Pages",
                    description: "Extra pages beyond basics",
                    price: 150,
                    icon: <Layers className="w-5 h-5" />,
                    type: "slider",
                    unit: "pages",
                    min: 0,
                    max: 20,
               },
          ],
          multiSelect: true,
     },
     {
          id: "timeline-support",
          title: "Timeline & Support",
          description: "Choose your project timeline and ongoing support",
          icon: <Rocket className="w-6 h-6" />,
          options: [
               {
                    id: "standard",
                    name: "Standard (4-8 weeks)",
                    description: "Regular development timeline",
                    price: 0,
                    icon: <Rocket className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "expedited",
                    name: "Expedited (2-4 weeks)",
                    description: "Priority development",
                    price: 800,
                    icon: <Zap className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "maintenance",
                    name: "Monthly Maintenance",
                    description: "Ongoing updates and support",
                    price: 150,
                    icon: <Shield className="w-5 h-5" />,
                    type: "toggle",
                    unit: "/month",
               },
          ],
          multiSelect: false,
     },
];

export default function WebDevQuoteCalculator() {
     const [currentStep, setCurrentStep] = useState(0);
     const [selections, setSelections] = useState<Record<string, any>>({});
     const [totalPrice, setTotalPrice] = useState(0);
     const [monthlyPrice, setMonthlyPrice] = useState(0);
     const [isStarted, setIsStarted] = useState(false);
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          company: "",
          message: "",
     });

     // Calculate prices
     useEffect(() => {
          let oneTimePrice = 0;
          let monthly = 0;

          Object.entries(selections).forEach(([stepId, stepSelections]) => {
               const step = steps.find((s) => s.id === stepId);
               if (!step) return;

               if (Array.isArray(stepSelections)) {
                    stepSelections.forEach((selection) => {
                         const option = step.options.find(
                              (o) => o.id === selection.id
                         );
                         if (option) {
                              const price =
                                   option.price * (selection.value || 1);
                              if (option.unit === "/month") {
                                   monthly += price;
                              } else {
                                   oneTimePrice += price;
                              }
                         }
                    });
               } else if (stepSelections) {
                    const option = step.options.find(
                         (o) => o.id === stepSelections.id
                    );
                    if (option) {
                         if (option.unit === "/month") {
                              monthly += option.price;
                         } else {
                              oneTimePrice += option.price;
                         }
                    }
               }
          });

          setTotalPrice(oneTimePrice);
          setMonthlyPrice(monthly);
     }, [selections]);

     const handleSelect = (
          stepId: string,
          optionId: string,
          value?: number
     ) => {
          const step = steps.find((s) => s.id === stepId);
          if (!step) return;

          setSelections((prev) => {
               const newSelections = { ...prev };

               if (step.multiSelect) {
                    if (!Array.isArray(newSelections[stepId])) {
                         newSelections[stepId] = [];
                    }

                    const existingIndex = newSelections[stepId].findIndex(
                         (s: any) => s.id === optionId
                    );

                    if (existingIndex >= 0) {
                         if (value !== undefined) {
                              newSelections[stepId][existingIndex] = {
                                   id: optionId,
                                   value,
                              };
                         } else {
                              newSelections[stepId] = newSelections[
                                   stepId
                              ].filter((s: any) => s.id !== optionId);
                         }
                    } else {
                         newSelections[stepId].push({
                              id: optionId,
                              value: value || 1,
                         });
                    }
               } else {
                    newSelections[stepId] = { id: optionId };
               }

               return newSelections;
          });
     };

     const isSelected = (stepId: string, optionId: string) => {
          if (!selections[stepId]) return false;
          if (Array.isArray(selections[stepId])) {
               return selections[stepId].some((s: any) => s.id === optionId);
          }
          return selections[stepId]?.id === optionId;
     };

     const getSliderValue = (stepId: string, optionId: string) => {
          if (!selections[stepId] || !Array.isArray(selections[stepId]))
               return 0;
          const selection = selections[stepId].find(
               (s: any) => s.id === optionId
          );
          return selection?.value || 0;
     };

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          alert(
               "Thank you! We'll contact you with a detailed proposal within 24 hours."
          );
     };

     const nextStep = () => {
          if (currentStep < steps.length) {
               setCurrentStep((prev) => prev + 1);
          }
     };

     const prevStep = () => {
          if (currentStep > 0) {
               setCurrentStep((prev) => prev - 1);
          }
     };

     const progressPercentage = isStarted
          ? ((currentStep + 1) / (steps.length + 1)) * 100
          : 0;

     return (
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
               <div className="max-w-4xl mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                         >
                              <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full text-purple-800 font-semibold mb-6">
                                   <Sparkles className="w-5 h-5" />
                                   Web Development Quote
                              </div>
                              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                   Get Your Website Quote
                              </h1>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Tell us about your project and get an instant
                                   estimate for your custom website development.
                              </p>
                         </motion.div>
                    </div>

                    {!isStarted ? (
                         /* Getting Started Section */
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                         >
                              <div className="grid md:grid-cols-3 gap-8 mb-12">
                                   {[
                                        {
                                             icon: (
                                                  <Code className="w-12 h-12" />
                                             ),
                                             title: "Custom Development",
                                             description:
                                                  "Tailored solutions built specifically for your business needs and goals.",
                                        },
                                        {
                                             icon: (
                                                  <Smartphone className="w-12 h-12" />
                                             ),
                                             title: "Mobile-First Design",
                                             description:
                                                  "Responsive websites that look perfect on all devices and screen sizes.",
                                        },
                                        {
                                             icon: (
                                                  <Zap className="w-12 h-12" />
                                             ),
                                             title: "Fast & Reliable",
                                             description:
                                                  "Optimized for speed with reliable hosting and ongoing technical support.",
                                        },
                                   ].map((feature, index) => (
                                        <div
                                             key={index}
                                             className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                                        >
                                             <div className="text-purple-600 mb-4 flex justify-center">
                                                  {feature.icon}
                                             </div>
                                             <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                  {feature.title}
                                             </h3>
                                             <p className="text-gray-600">
                                                  {feature.description}
                                             </p>
                                        </div>
                                   ))}
                              </div>

                              <div className="text-center">
                                   <button
                                        onClick={() => setIsStarted(true)}
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center mx-auto"
                                   >
                                        Start Planning My Website
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                   </button>
                              </div>
                         </motion.div>
                    ) : (
                         <>
                              {/* Progress Bar */}
                              <div className="mb-12 relative">
                                   <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                             className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
                                             initial={{ width: 0 }}
                                             animate={{
                                                  width: `${progressPercentage}%`,
                                             }}
                                             transition={{ duration: 0.5 }}
                                        />
                                   </div>
                                   <div
                                        className="absolute top-0 transform -translate-y-1/2 transition-all duration-500"
                                        style={{
                                             left: `${progressPercentage}%`,
                                        }}
                                   >
                                        <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-lg">
                                             {currentStep < steps.length
                                                  ? currentStep + 1
                                                  : steps.length}
                                        </div>
                                   </div>
                              </div>

                              <AnimatePresence mode="wait">
                                   {currentStep < steps.length ? (
                                        /* Step Content */
                                        <motion.div
                                             key={currentStep}
                                             initial={{ opacity: 0, x: 20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             exit={{ opacity: 0, x: -20 }}
                                             transition={{ duration: 0.3 }}
                                             className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                                        >
                                             <div className="flex items-center mb-8">
                                                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-2xl mr-4">
                                                       {steps[currentStep].icon}
                                                  </div>
                                                  <div>
                                                       <h2 className="text-2xl font-bold text-gray-900">
                                                            {
                                                                 steps[
                                                                      currentStep
                                                                 ].title
                                                            }
                                                       </h2>
                                                       {steps[currentStep]
                                                            .description && (
                                                            <p className="text-gray-600 mt-2">
                                                                 {
                                                                      steps[
                                                                           currentStep
                                                                      ]
                                                                           .description
                                                                 }
                                                            </p>
                                                       )}
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
                                                  {steps[
                                                       currentStep
                                                  ].options.map((option) => {
                                                       const selected =
                                                            isSelected(
                                                                 steps[
                                                                      currentStep
                                                                 ].id,
                                                                 option.id
                                                            );
                                                       const sliderValue =
                                                            getSliderValue(
                                                                 steps[
                                                                      currentStep
                                                                 ].id,
                                                                 option.id
                                                            );

                                                       if (
                                                            option.type ===
                                                            "slider"
                                                       ) {
                                                            return (
                                                                 <div
                                                                      key={
                                                                           option.id
                                                                      }
                                                                      className="md:col-span-2 border-2 border-gray-200 rounded-xl p-6"
                                                                 >
                                                                      <div className="flex justify-between items-start mb-4">
                                                                           <div className="flex items-center">
                                                                                <div className="bg-purple-100 p-3 rounded-xl mr-4">
                                                                                     {
                                                                                          option.icon
                                                                                     }
                                                                                </div>
                                                                                <div>
                                                                                     <h3 className="font-bold text-gray-900">
                                                                                          {
                                                                                               option.name
                                                                                          }
                                                                                     </h3>
                                                                                     <p className="text-gray-600 text-sm">
                                                                                          {
                                                                                               option.description
                                                                                          }
                                                                                     </p>
                                                                                </div>
                                                                           </div>
                                                                           <div className="text-right">
                                                                                <div className="text-lg font-bold text-purple-600">
                                                                                     +$
                                                                                     {(
                                                                                          option.price *
                                                                                          (sliderValue ||
                                                                                               option.min ||
                                                                                               0)
                                                                                     ).toLocaleString()}
                                                                                </div>
                                                                                <div className="text-sm text-gray-500">
                                                                                     {sliderValue ||
                                                                                          option.min ||
                                                                                          0}{" "}
                                                                                     {
                                                                                          option.unit
                                                                                     }
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <input
                                                                           type="range"
                                                                           min={
                                                                                option.min ||
                                                                                0
                                                                           }
                                                                           max={
                                                                                option.max ||
                                                                                100
                                                                           }
                                                                           value={
                                                                                sliderValue ||
                                                                                option.min ||
                                                                                0
                                                                           }
                                                                           onChange={(
                                                                                e
                                                                           ) =>
                                                                                handleSelect(
                                                                                     steps[
                                                                                          currentStep
                                                                                     ]
                                                                                          .id,
                                                                                     option.id,
                                                                                     parseInt(
                                                                                          e
                                                                                               .target
                                                                                               .value
                                                                                     )
                                                                                )
                                                                           }
                                                                           className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                                                      />
                                                                 </div>
                                                            );
                                                       }

                                                       return (
                                                            <div
                                                                 key={option.id}
                                                                 onClick={() =>
                                                                      handleSelect(
                                                                           steps[
                                                                                currentStep
                                                                           ].id,
                                                                           option.id
                                                                      )
                                                                 }
                                                                 className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                                                                      selected
                                                                           ? "border-purple-500 bg-purple-50 shadow-lg"
                                                                           : "border-gray-200 hover:border-purple-300 hover:shadow-md"
                                                                 }`}
                                                            >
                                                                 <div className="flex justify-between items-start mb-4">
                                                                      <div
                                                                           className={`p-3 rounded-xl ${
                                                                                selected
                                                                                     ? "bg-purple-500 text-white"
                                                                                     : "bg-gray-100"
                                                                           }`}
                                                                      >
                                                                           {
                                                                                option.icon
                                                                           }
                                                                      </div>
                                                                      {option.price !==
                                                                           0 && (
                                                                           <div className="text-right">
                                                                                <div className="text-lg font-bold text-purple-600">
                                                                                     {option.price >
                                                                                     0
                                                                                          ? "+"
                                                                                          : ""}

                                                                                     $
                                                                                     {Math.abs(
                                                                                          option.price
                                                                                     )}
                                                                                </div>
                                                                                {option.unit && (
                                                                                     <div className="text-xs text-gray-500">
                                                                                          {
                                                                                               option.unit
                                                                                          }
                                                                                     </div>
                                                                                )}
                                                                           </div>
                                                                      )}
                                                                 </div>
                                                                 <h3 className="font-bold text-gray-900 mb-2">
                                                                      {
                                                                           option.name
                                                                      }
                                                                 </h3>
                                                                 <p className="text-gray-600 text-sm">
                                                                      {
                                                                           option.description
                                                                      }
                                                                 </p>
                                                                 {selected && (
                                                                      <CheckCircle className="w-5 h-5 text-purple-500 mt-3" />
                                                                 )}
                                                            </div>
                                                       );
                                                  })}
                                             </div>
                                        </motion.div>
                                   ) : (
                                        /* Final Step - Quote Summary */
                                        <motion.div
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.6 }}
                                             className="bg-white rounded-2xl shadow-xl p-8 mb-8"
                                        >
                                             <div className="text-center mb-8">
                                                  <div className="flex items-center justify-center mb-4">
                                                       <Award className="w-8 h-8 text-purple-600 mr-2" />
                                                       <h2 className="text-3xl font-bold text-gray-900">
                                                            Your Website Quote
                                                       </h2>
                                                  </div>

                                                  <div className="space-y-4">
                                                       <div>
                                                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                                                                 $
                                                                 {totalPrice.toLocaleString()}
                                                            </div>
                                                            <p className="text-gray-600">
                                                                 One-time
                                                                 development
                                                                 cost
                                                            </p>
                                                       </div>

                                                       {monthlyPrice > 0 && (
                                                            <div className="border-t pt-4">
                                                                 <div className="text-3xl font-bold text-purple-600">
                                                                      +$
                                                                      {
                                                                           monthlyPrice
                                                                      }
                                                                      /month
                                                                 </div>
                                                                 <p className="text-gray-600">
                                                                      Ongoing
                                                                      maintenance
                                                                      & support
                                                                 </p>
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>

                                             <form
                                                  onSubmit={handleSubmit}
                                                  className="max-w-md mx-auto space-y-6"
                                             >
                                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                       <div>
                                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                 Your Name *
                                                            </label>
                                                            <input
                                                                 type="text"
                                                                 placeholder="John Doe"
                                                                 value={
                                                                      formData.name
                                                                 }
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      setFormData(
                                                                           (
                                                                                prev
                                                                           ) => ({
                                                                                ...prev,
                                                                                name: e
                                                                                     .target
                                                                                     .value,
                                                                           })
                                                                      )
                                                                 }
                                                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                                 required
                                                            />
                                                       </div>

                                                       <div>
                                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                 Company
                                                            </label>
                                                            <input
                                                                 type="text"
                                                                 placeholder="Your Company"
                                                                 value={
                                                                      formData.company
                                                                 }
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      setFormData(
                                                                           (
                                                                                prev
                                                                           ) => ({
                                                                                ...prev,
                                                                                company: e
                                                                                     .target
                                                                                     .value,
                                                                           })
                                                                      )
                                                                 }
                                                                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                            />
                                                       </div>
                                                  </div>

                                                  <div>
                                                       <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Email Address *
                                                       </label>
                                                       <input
                                                            type="email"
                                                            placeholder="john@company.com"
                                                            value={
                                                                 formData.email
                                                            }
                                                            onChange={(e) =>
                                                                 setFormData(
                                                                      (
                                                                           prev
                                                                      ) => ({
                                                                           ...prev,
                                                                           email: e
                                                                                .target
                                                                                .value,
                                                                      })
                                                                 )
                                                            }
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                            required
                                                       />
                                                  </div>

                                                  <div>
                                                       <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Project Details
                                                            (Optional)
                                                       </label>
                                                       <textarea
                                                            rows={4}
                                                            placeholder="Tell us more about your vision, specific features, or requirements..."
                                                            value={
                                                                 formData.message
                                                            }
                                                            onChange={(e) =>
                                                                 setFormData(
                                                                      (
                                                                           prev
                                                                      ) => ({
                                                                           ...prev,
                                                                           message: e
                                                                                .target
                                                                                .value,
                                                                      })
                                                                 )
                                                            }
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                                       />
                                                  </div>

                                                  <button
                                                       type="submit"
                                                       className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                                                  >
                                                       Get My Detailed Quote
                                                       <Send className="ml-2 w-5 h-5" />
                                                  </button>
                                             </form>
                                        </motion.div>
                                   )}
                              </AnimatePresence>

                              {/* Navigation */}
                              <div className="flex justify-between">
                                   <button
                                        onClick={prevStep}
                                        disabled={currentStep === 0}
                                        className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                   >
                                        <ChevronLeft className="w-5 h-5 mr-2" />
                                        Previous
                                   </button>

                                   {currentStep < steps.length && (
                                        <button
                                             onClick={nextStep}
                                             className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-colors"
                                        >
                                             Next
                                             <ChevronRight className="w-5 h-5 ml-2" />
                                        </button>
                                   )}
                              </div>
                         </>
                    )}
               </div>
          </div>
     );
}
