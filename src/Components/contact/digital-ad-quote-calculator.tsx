"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
     ChevronLeft,
     ChevronRight,
     Target,
     BarChart2,
     TrendingUp,
     Globe,
     Search,
     ImageIcon,
     Video,
     Users,
     DollarSign,
     Send,
     Sparkles,
     CheckCircle,
     Rocket,
     Award,
     Zap,
} from "lucide-react";

// Simplified types
type ServiceOption = {
     id: string;
     name: string;
     description: string;
     price: number;
     icon: React.ReactNode;
     type: "select" | "toggle";
};

type Step = {
     id: string;
     title: string;
     description: string;
     options: ServiceOption[];
     multiSelect?: boolean;
     icon: React.ReactNode;
};

// Simplified steps (reduced from 8 to 4)
const steps: Step[] = [
     {
          id: "platforms",
          title: "Choose Your Advertising Platforms",
          description: "Select the platforms where you want to advertise",
          icon: <Globe className="w-6 h-6" />,
          multiSelect: true,
          options: [
               {
                    id: "google-ads",
                    name: "Google Ads",
                    description: "Search & Display advertising",
                    price: 800,
                    icon: <Search className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "facebook-meta",
                    name: "Facebook & Instagram",
                    description: "Social media advertising",
                    price: 700,
                    icon: <Users className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "video-ads",
                    name: "YouTube Advertising",
                    description: "Video marketing campaigns",
                    price: 900,
                    icon: <Video className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "linkedin-ads",
                    name: "LinkedIn Ads",
                    description: "B2B professional targeting",
                    price: 1000,
                    icon: <Target className="w-5 h-5" />,
                    type: "toggle",
               },
          ],
     },
     {
          id: "services",
          title: "Campaign Services",
          description: "What services do you need for your campaigns?",
          icon: <Rocket className="w-6 h-6" />,
          multiSelect: true,
          options: [
               {
                    id: "strategy",
                    name: "Campaign Strategy",
                    description: "Complete campaign planning & setup",
                    price: 1200,
                    icon: <Target className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "creative",
                    name: "Creative Design",
                    description: "Ad banners, copy & video creation",
                    price: 1500,
                    icon: <ImageIcon className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "landing-pages",
                    name: "Landing Pages",
                    description: "Custom landing page creation",
                    price: 2000,
                    icon: <Globe className="w-5 h-5" />,
                    type: "toggle",
               },
               {
                    id: "analytics",
                    name: "Analytics & Reporting",
                    description: "Performance tracking & insights",
                    price: 600,
                    icon: <BarChart2 className="w-5 h-5" />,
                    type: "toggle",
               },
          ],
     },
     {
          id: "management",
          title: "Campaign Management",
          description: "Choose your preferred management level",
          icon: <Award className="w-6 h-6" />,
          multiSelect: false,
          options: [
               {
                    id: "self-managed",
                    name: "Self-Managed",
                    description: "We set up, you manage with training",
                    price: 0,
                    icon: <Users className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "basic",
                    name: "Basic Management",
                    description: "Monthly optimization & reporting",
                    price: 800,
                    icon: <Zap className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "premium",
                    name: "Premium Management",
                    description: "Full-service management & strategy",
                    price: 1500,
                    icon: <Award className="w-5 h-5" />,
                    type: "select",
               },
          ],
     },
     {
          id: "budget",
          title: "Monthly Ad Budget",
          description: "Your estimated monthly advertising spend",
          icon: <DollarSign className="w-6 h-6" />,
          multiSelect: false,
          options: [
               {
                    id: "small",
                    name: "$1,000 - $5,000",
                    description: "Small business budget",
                    price: 0,
                    icon: <DollarSign className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "medium",
                    name: "$5,000 - $15,000",
                    description: "Growing business budget",
                    price: 0,
                    icon: <TrendingUp className="w-5 h-5" />,
                    type: "select",
               },
               {
                    id: "large",
                    name: "$15,000+",
                    description: "Enterprise budget",
                    price: 0,
                    icon: <Rocket className="w-5 h-5" />,
                    type: "select",
               },
          ],
     },
];

export default function DigitalAdQuoteCalculator() {
     const [currentStep, setCurrentStep] = useState(0);
     const [selections, setSelections] = useState<Record<string, any>>({});
     const [totalPrice, setTotalPrice] = useState(0);
     const [isStarted, setIsStarted] = useState(false);
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          company: "",
          website: "",
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
                         if (option) price += option.price;
                    });
               } else if (stepSelections?.id) {
                    const option = step.options.find(
                         (o) => o.id === stepSelections.id
                    );
                    if (option) price += option.price;
               }
          });
          setTotalPrice(price);
     }, [selections]);

     const handleSelect = (stepId: string, optionId: string) => {
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
                         newSelections[stepId] = newSelections[stepId].filter(
                              (s: any) => s.id !== optionId
                         );
                    } else {
                         newSelections[stepId].push({ id: optionId });
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

     const handleInputChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
     };

     const nextStep = () => {
          if (currentStep < steps.length) {
               setCurrentStep((prev) => prev + 1);
               window.scrollTo({ top: 0, behavior: "smooth" });
          }
     };

     const prevStep = () => {
          if (currentStep > 0) {
               setCurrentStep((prev) => prev - 1);
               window.scrollTo({ top: 0, behavior: "smooth" });
          }
     };

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Form submitted:", { selections, totalPrice, formData });
          alert(
               "Thank you! We'll send you a detailed proposal within 24 hours."
          );
     };

     const progressPercentage = isStarted
          ? ((currentStep + 1) / (steps.length + 1)) * 100
          : 0;

     return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
               <div className="max-w-4xl mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-indigo-700 text-sm font-semibold mb-6 shadow-lg"
                         >
                              <Sparkles className="w-4 h-4" />
                              Digital Advertising Quote
                         </motion.div>
                         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                              Get Your Custom
                              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                   {" "}
                                   Ad Campaign{" "}
                              </span>
                              Quote
                         </h1>
                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                              Answer a few quick questions to get an instant
                              quote for your digital advertising campaign.
                         </p>
                    </div>

                    {!isStarted ? (
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-center"
                         >
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                   {[
                                        {
                                             icon: (
                                                  <Target className="w-12 h-12" />
                                             ),
                                             title: "Targeted Campaigns",
                                             description:
                                                  "Reach your ideal customers with precision targeting",
                                        },
                                        {
                                             icon: (
                                                  <BarChart2 className="w-12 h-12" />
                                             ),
                                             title: "Data-Driven Results",
                                             description:
                                                  "Maximize ROI with analytics and optimization",
                                        },
                                        {
                                             icon: (
                                                  <TrendingUp className="w-12 h-12" />
                                             ),
                                             title: "Measurable Growth",
                                             description:
                                                  "Track performance with detailed reporting",
                                        },
                                   ].map((feature, index) => (
                                        <div
                                             key={index}
                                             className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                             <div className="text-indigo-600 mb-4 flex justify-center">
                                                  {feature.icon}
                                             </div>
                                             <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                                  {feature.title}
                                             </h3>
                                             <p className="text-gray-600">
                                                  {feature.description}
                                             </p>
                                        </div>
                                   ))}
                              </div>

                              <button
                                   onClick={() => setIsStarted(true)}
                                   className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                              >
                                   <Rocket className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                                   Start Quote Calculator
                              </button>
                         </motion.div>
                    ) : (
                         <>
                              {/* Progress bar */}
                              <div className="mb-8 relative">
                                   <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner">
                                        <div
                                             className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                                             style={{
                                                  width: `${progressPercentage}%`,
                                             }}
                                        />
                                   </div>
                                   <div className="absolute top-0 right-0 text-sm font-medium text-gray-600 mt-4">
                                        Step{" "}
                                        {Math.min(
                                             currentStep + 1,
                                             steps.length
                                        )}{" "}
                                        of {steps.length}
                                   </div>
                              </div>

                              <AnimatePresence mode="wait">
                                   {currentStep < steps.length ? (
                                        <motion.div
                                             key={`step-${currentStep}`}
                                             initial={{ opacity: 0, x: 20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             exit={{ opacity: 0, x: -20 }}
                                             transition={{ duration: 0.3 }}
                                        >
                                             <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8">
                                                  <div className="flex items-center mb-8">
                                                       <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl mr-4 text-white">
                                                            {
                                                                 steps[
                                                                      currentStep
                                                                 ].icon
                                                            }
                                                       </div>
                                                       <div>
                                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                                 {
                                                                      steps[
                                                                           currentStep
                                                                      ].title
                                                                 }
                                                            </h2>
                                                            <p className="text-gray-600">
                                                                 {
                                                                      steps[
                                                                           currentStep
                                                                      ]
                                                                           .description
                                                                 }
                                                            </p>
                                                       </div>
                                                  </div>

                                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                       {steps[
                                                            currentStep
                                                       ].options.map(
                                                            (option) => {
                                                                 const isOptionSelected =
                                                                      isSelected(
                                                                           steps[
                                                                                currentStep
                                                                           ].id,
                                                                           option.id
                                                                      );

                                                                 return (
                                                                      <div
                                                                           key={
                                                                                option.id
                                                                           }
                                                                           className={`group border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                                                                                isOptionSelected
                                                                                     ? "border-purple-500 bg-purple-50 shadow-lg"
                                                                                     : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-md"
                                                                           }`}
                                                                           onClick={() =>
                                                                                handleSelect(
                                                                                     steps[
                                                                                          currentStep
                                                                                     ]
                                                                                          .id,
                                                                                     option.id
                                                                                )
                                                                           }
                                                                      >
                                                                           <div className="flex justify-between items-start mb-4">
                                                                                <div
                                                                                     className={`p-3 rounded-xl ${
                                                                                          isOptionSelected
                                                                                               ? "bg-purple-500 text-white"
                                                                                               : "bg-gray-100 text-gray-600 group-hover:bg-purple-100"
                                                                                     } transition-colors`}
                                                                                >
                                                                                     {
                                                                                          option.icon
                                                                                     }
                                                                                </div>
                                                                                <div className="text-right">
                                                                                     {option.price >
                                                                                          0 && (
                                                                                          <div className="text-lg font-bold text-gray-900">
                                                                                               $
                                                                                               {option.price.toLocaleString()}
                                                                                          </div>
                                                                                     )}
                                                                                     {option.price ===
                                                                                          0 && (
                                                                                          <div className="text-lg font-bold text-green-600">
                                                                                               Included
                                                                                          </div>
                                                                                     )}
                                                                                </div>
                                                                           </div>
                                                                           <h3 className="text-lg font-semibold mb-2 text-gray-900">
                                                                                {
                                                                                     option.name
                                                                                }
                                                                           </h3>
                                                                           <p className="text-gray-600 text-sm">
                                                                                {
                                                                                     option.description
                                                                                }
                                                                           </p>
                                                                           {isOptionSelected && (
                                                                                <div className="mt-4 flex items-center text-purple-600">
                                                                                     <CheckCircle className="w-4 h-4 mr-2" />
                                                                                     <span className="text-sm font-medium">
                                                                                          Selected
                                                                                     </span>
                                                                                </div>
                                                                           )}
                                                                      </div>
                                                                 );
                                                            }
                                                       )}
                                                  </div>
                                             </div>

                                             <div className="flex justify-between">
                                                  <button
                                                       onClick={prevStep}
                                                       disabled={
                                                            currentStep === 0
                                                       }
                                                       className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 px-6 py-3 rounded-xl flex items-center transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                                  >
                                                       <ChevronLeft className="mr-2 w-5 h-5" />
                                                       Previous
                                                  </button>
                                                  <button
                                                       onClick={nextStep}
                                                       className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
                                                  >
                                                       Next
                                                       <ChevronRight className="ml-2 w-5 h-5" />
                                                  </button>
                                             </div>
                                        </motion.div>
                                   ) : (
                                        <motion.div
                                             key="final-step"
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.3 }}
                                        >
                                             <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8">
                                                  <div className="text-center mb-8">
                                                       <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                                            <CheckCircle className="w-8 h-8" />
                                                       </div>
                                                       <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                                            Your Campaign Quote
                                                       </h2>
                                                       <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                                            $
                                                            {totalPrice.toLocaleString()}
                                                       </div>
                                                       <p className="text-gray-600">
                                                            One-time setup +
                                                            monthly management
                                                       </p>
                                                  </div>

                                                  <form
                                                       onSubmit={handleSubmit}
                                                       className="max-w-lg mx-auto space-y-4"
                                                  >
                                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <input
                                                                 type="text"
                                                                 name="name"
                                                                 placeholder="Your Name *"
                                                                 value={
                                                                      formData.name
                                                                 }
                                                                 onChange={
                                                                      handleInputChange
                                                                 }
                                                                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70"
                                                                 required
                                                            />
                                                            <input
                                                                 type="email"
                                                                 name="email"
                                                                 placeholder="Email Address *"
                                                                 value={
                                                                      formData.email
                                                                 }
                                                                 onChange={
                                                                      handleInputChange
                                                                 }
                                                                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70"
                                                                 required
                                                            />
                                                       </div>
                                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <input
                                                                 type="text"
                                                                 name="company"
                                                                 placeholder="Company Name"
                                                                 value={
                                                                      formData.company
                                                                 }
                                                                 onChange={
                                                                      handleInputChange
                                                                 }
                                                                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70"
                                                            />
                                                            <input
                                                                 type="url"
                                                                 name="website"
                                                                 placeholder="Website URL *"
                                                                 value={
                                                                      formData.website
                                                                 }
                                                                 onChange={
                                                                      handleInputChange
                                                                 }
                                                                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70"
                                                                 required
                                                            />
                                                       </div>
                                                       <textarea
                                                            name="message"
                                                            placeholder="Tell us about your campaign goals..."
                                                            value={
                                                                 formData.message
                                                            }
                                                            onChange={
                                                                 handleInputChange
                                                            }
                                                            rows={4}
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70"
                                                       />

                                                       <div className="flex justify-between items-center pt-4">
                                                            <button
                                                                 type="button"
                                                                 onClick={
                                                                      prevStep
                                                                 }
                                                                 className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 px-6 py-3 rounded-xl flex items-center transition-all duration-300 shadow-lg"
                                                            >
                                                                 <ChevronLeft className="mr-2 w-5 h-5" />
                                                                 Previous
                                                            </button>
                                                            <button
                                                                 type="submit"
                                                                 className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
                                                            >
                                                                 Get Detailed
                                                                 Quote
                                                                 <Send className="ml-2 w-5 h-5" />
                                                            </button>
                                                       </div>
                                                  </form>
                                             </div>
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </>
                    )}
               </div>
          </div>
     );
}
