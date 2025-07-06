"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
     ChevronLeft,
     ChevronRight,
     DollarSign,
     Target,
     BarChart2,
     FileText,
     RefreshCw,
     Building,
     Send,
     Shield,
     CheckCircle,
     Users,
     Sparkles,
} from "lucide-react";

// Simplified types
type ServiceOption = {
     id: string;
     name: string;
     description: string;
     price: number;
     icon: React.ReactNode;
     type: "toggle" | "select" | "slider";
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
          id: "target",
          title: "What's your primary goal?",
          icon: <Target className="w-6 h-6" />,
          options: [
               {
                    id: "increase-sales",
                    name: "Increase Online Sales",
                    description: "Boost e-commerce revenue and conversions",
                    price: 0,
                    icon: <DollarSign className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "get-leads",
                    name: "Generate More Leads",
                    description: "Attract qualified prospects to your business",
                    price: 0,
                    icon: <BarChart2 className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "brand-recognition",
                    name: "Build Brand Awareness",
                    description: "Increase visibility and brand recognition",
                    price: 0,
                    icon: <Sparkles className="w-5 h-5" />,
                    type: "select",
               },
          ],
          multiSelect: false,
     },
     {
          id: "seo-services",
          title: "SEO Services",
          icon: <BarChart2 className="w-6 h-6" />,
          options: [
               {
                    id: "local-seo",
                    name: "Local SEO",
                    description: "Optimize for local search results",
                    price: 499,
                    icon: <Target className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "ecommerce-seo",
                    name: "E-Commerce SEO",
                    description: "Product page optimization",
                    price: 699,
                    icon: <DollarSign className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "competitive-analysis",
                    name: "Competitive Analysis",
                    description: "Research competitors' strategies",
                    price: 399,
                    icon: <BarChart2 className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "keywords",
                    name: "Keyword Targeting",
                    description: "Number of target keywords",
                    price: 50,
                    icon: <FileText className="w-5 h-5" />,
                    type: "slider",
                    unit: "keywords",
                    min: 5,
                    max: 50,
               },
          ],
          multiSelect: true,
     },
     {
          id: "content",
          title: "Content & Optimization",
          icon: <FileText className="w-6 h-6" />,
          options: [
               {
                    id: "content-optimization",
                    name: "Content Optimization",
                    description: "Optimize existing pages",
                    price: 75,
                    icon: <FileText className="w-5 h-5" />,
                    type: "slider",
                    unit: "pages",
                    min: 0,
                    max: 20,
               },
               {
                    id: "content-creation",
                    name: "New Content Creation",
                    description: "Create fresh, SEO-optimized content",
                    price: 150,
                    icon: <FileText className="w-5 h-5" />,
                    type: "slider",
                    unit: "pages",
                    min: 0,
                    max: 15,
               },
               {
                    id: "keyword-research",
                    name: "Keyword Research",
                    description: "Comprehensive keyword analysis",
                    price: 299,
                    icon: <Target className="w-5 h-5" />,
                    type: "toggle",
               },
          ],
          multiSelect: true,
     },
     {
          id: "business-size",
          title: "Business Size",
          description:
               "We tailor our approach based on your business complexity",
          icon: <Building className="w-6 h-6" />,
          options: [
               {
                    id: "small",
                    name: "Small Business",
                    description: "Startup or local business",
                    price: 0,
                    icon: <Building className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "medium",
                    name: "Medium Business",
                    description: "Regional or growing company",
                    price: 500,
                    icon: <Building className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "enterprise",
                    name: "Enterprise",
                    description: "Large corporation or complex website",
                    price: 1000,
                    icon: <Building className="w-5 h-5" />,
                    type: "select",
               },
          ],
          multiSelect: false,
     },
];

export default function SEOQuoteCalculator() {
     const [currentStep, setCurrentStep] = useState(0);
     const [selections, setSelections] = useState<Record<string, any>>({});
     const [totalPrice, setTotalPrice] = useState(0);
     const [isStarted, setIsStarted] = useState(false);
     const [formData, setFormData] = useState({
          website: "",
          email: "",
          message: "",
     });

     // Calculate total price
     useEffect(() => {
          let price = 0;
          Object.entries(selections).forEach(([stepId, stepSelections]) => {
               const step = steps.find((s) => s.id === stepId);
               if (!step) return;

               if (Array.isArray(stepSelections)) {
                    stepSelections.forEach((selection) => {
                         const option = step.options.find(
                              (o) => o.id === selection.id
                         );
                         if (option) {
                              price += option.price * (selection.value || 1);
                         }
                    });
               } else if (stepSelections) {
                    const option = step.options.find(
                         (o) => o.id === stepSelections.id
                    );
                    if (option) price += option.price;
               }
          });
          setTotalPrice(price);
     }, [selections]);

     // Handle selections
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
          alert("Thank you! We'll contact you with a detailed proposal.");
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
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
               <div className="max-w-4xl mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                         >
                              <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full text-blue-800 font-semibold mb-6">
                                   <Sparkles className="w-5 h-5" />
                                   SEO Quote Calculator
                              </div>
                              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                   Get Your Instant SEO Quote
                              </h1>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Select the services you need and get an
                                   instant estimate for your SEO optimization
                                   project.
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
                                                  <Shield className="w-12 h-12" />
                                             ),
                                             title: "Secure & Transparent",
                                             description:
                                                  "No hidden fees, secure payments, and transparent pricing for all our SEO services.",
                                        },
                                        {
                                             icon: (
                                                  <CheckCircle className="w-12 h-12" />
                                             ),
                                             title: "No Outsourcing",
                                             description:
                                                  "All SEO work is done in-house by our certified specialists for quality assurance.",
                                        },
                                        {
                                             icon: (
                                                  <Users className="w-12 h-12" />
                                             ),
                                             title: "Expert Team",
                                             description:
                                                  "Dedicated SEO professionals with proven track record of improving search rankings.",
                                        },
                                   ].map((feature, index) => (
                                        <div
                                             key={index}
                                             className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                                        >
                                             <div className="text-blue-600 mb-4 flex justify-center">
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
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center mx-auto"
                                   >
                                        Get Started
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
                                             className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
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
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-lg">
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
                                                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-2xl mr-4">
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

                                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                                                      className="md:col-span-2 lg:col-span-3 border-2 border-gray-200 rounded-xl p-6"
                                                                 >
                                                                      <div className="flex justify-between items-start mb-4">
                                                                           <div className="flex items-center">
                                                                                <div className="bg-blue-100 p-3 rounded-xl mr-4">
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
                                                                                <div className="text-lg font-bold text-blue-600">
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
                                                                           className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
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
                                                                           ? "border-blue-500 bg-blue-50 shadow-lg"
                                                                           : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                                                                 }`}
                                                            >
                                                                 <div className="flex justify-between items-start mb-4">
                                                                      <div
                                                                           className={`p-3 rounded-xl ${
                                                                                selected
                                                                                     ? "bg-blue-500 text-white"
                                                                                     : "bg-gray-100"
                                                                           }`}
                                                                      >
                                                                           {
                                                                                option.icon
                                                                           }
                                                                      </div>
                                                                      {option.price >
                                                                           0 && (
                                                                           <div className="text-right">
                                                                                <div className="text-lg font-bold text-blue-600">
                                                                                     +$
                                                                                     {
                                                                                          option.price
                                                                                     }
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
                                                                      <CheckCircle className="w-5 h-5 text-blue-500 mt-3" />
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
                                                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                                       Your SEO Quote
                                                  </h2>
                                                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                                                       $
                                                       {totalPrice.toLocaleString()}
                                                  </div>
                                                  <p className="text-gray-600">
                                                       Estimated project cost
                                                       based on your selections
                                                  </p>
                                             </div>

                                             <form
                                                  onSubmit={handleSubmit}
                                                  className="max-w-md mx-auto space-y-6"
                                             >
                                                  <div>
                                                       <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Website URL
                                                       </label>
                                                       <input
                                                            type="url"
                                                            placeholder="https://yourwebsite.com"
                                                            value={
                                                                 formData.website
                                                            }
                                                            onChange={(e) =>
                                                                 setFormData(
                                                                      (
                                                                           prev
                                                                      ) => ({
                                                                           ...prev,
                                                                           website: e
                                                                                .target
                                                                                .value,
                                                                      })
                                                                 )
                                                            }
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                            required
                                                       />
                                                  </div>

                                                  <div>
                                                       <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Email Address
                                                       </label>
                                                       <input
                                                            type="email"
                                                            placeholder="your@email.com"
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
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                            required
                                                       />
                                                  </div>

                                                  <div>
                                                       <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Additional Message
                                                            (Optional)
                                                       </label>
                                                       <textarea
                                                            rows={4}
                                                            placeholder="Tell us more about your project..."
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
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                       />
                                                  </div>

                                                  <button
                                                       type="submit"
                                                       className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                                                  >
                                                       Get My Quote
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
                                             className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-colors"
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
