"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  ThumbsUp,
  Target,
  BarChart2,
  FileText,
  RefreshCw,
  Building,
  Send,
} from "lucide-react";

// Define types for our services and selections
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
  step?: number;
};

type Step = {
  id: string;
  title: string;
  description?: string;
  options: ServiceOption[];
  multiSelect?: boolean;
  icon: React.ReactNode;
};

// Define our steps and service options
const steps: Step[] = [
  {
    id: "target",
    title: "What is your primary target?",
    icon: <Target className="h-6 w-6" />,
    options: [
      {
        id: "increase-sales",
        name: "Increase Online Sales",
        description:
          "E-commerce websites or online service-oriented companies.",
        price: 0,
        icon: <DollarSign className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "get-leads",
        name: "Get More/Better Leads",
        description: "For businesses that use websites for lead generation.",
        price: 0,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "brand-recognition",
        name: "Consumer Recognition",
        description:
          "For websites created to support the brand or to tell more about the company.",
        price: 0,
        icon: <ThumbsUp className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: false,
  },
  {
    id: "seo",
    title: "SEO",
    icon: <BarChart2 className="h-6 w-6" />,
    options: [
      {
        id: "local-seo",
        name: "Local SEO",
        description: "Optimize for local search results",
        price: 499,
        icon: <Target className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "ecommerce-seo",
        name: "E-Commerce SEO",
        description: "Optimize product pages and categories",
        price: 699,
        icon: <DollarSign className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "competitive-analysis",
        name: "Competitive Analysis",
        description: "Research and analyze competitors",
        price: 399,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "site-analytics",
        name: "Site Analytics Installation",
        description: "Setup and configure analytics",
        price: 199,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "ranking-queries",
        name: "Important Ranking Queries",
        description: "Number of keywords to target",
        price: 50,
        icon: <FileText className="h-6 w-6" />,
        type: "slider",
        unit: "per query",
        min: 5,
        max: 50,
        step: 5,
      },
    ],
    multiSelect: true,
  },
  {
    id: "other-services",
    title: "Other Services",
    icon: <RefreshCw className="h-6 w-6" />,
    options: [
      {
        id: "email-marketing",
        name: "Email Marketing",
        description: "Email campaign setup and management",
        price: 299,
        icon: <Send className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "speed-optimization",
        name: "Speed Optimization",
        description: "Improve website loading speed",
        price: 249,
        icon: <RefreshCw className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "mobile-optimization",
        name: "Mobile Optimization",
        description: "Optimize for mobile devices",
        price: 199,
        icon: <RefreshCw className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "ad-campaigns",
        name: "Ad Campaigns",
        description: "Setup and manage ad campaigns",
        price: 349,
        icon: <DollarSign className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "social-media",
        name: "Social Media",
        description: "Social media management",
        price: 299,
        icon: <RefreshCw className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "conversion-optimization",
        name: "Conversion Optimization",
        description: "Improve conversion rates",
        price: 399,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: true,
  },
  {
    id: "seo-content",
    title: "SEO Content",
    icon: <FileText className="h-6 w-6" />,
    options: [
      {
        id: "content-optimization",
        name: "Content Optimization",
        description: "Optimize existing content",
        price: 50,
        icon: <FileText className="h-6 w-6" />,
        type: "slider",
        unit: "per existing page",
        min: 0,
        max: 20,
        step: 1,
      },
      {
        id: "keyword-research",
        name: "Keyword Research",
        description: "Research and identify keywords",
        price: 299,
        icon: <FileText className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "content-creation",
        name: "Content Creation",
        description: "Create new content",
        price: 100,
        icon: <FileText className="h-6 w-6" />,
        type: "slider",
        unit: "per new page",
        min: 0,
        max: 20,
        step: 1,
      },
      {
        id: "premium-content",
        name: "Premium Content Quality",
        description: "Higher quality content",
        price: 50,
        icon: <FileText className="h-6 w-6" />,
        type: "toggle",
        unit: "per page",
      },
    ],
    multiSelect: true,
  },
  {
    id: "ongoing-optimizations",
    title: "Ongoing Optimizations",
    description:
      "Once initial optimization completed, we will analyze results and adjust for long-term performance.",
    icon: <RefreshCw className="h-6 w-6" />,
    options: [
      {
        id: "email-marketing-monthly",
        name: "Email Marketing",
        description: "Monthly email campaign management",
        price: 199,
        icon: <Send className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "new-content-seo",
        name: "New Content SEO",
        description: "Ongoing content optimization",
        price: 299,
        icon: <FileText className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "link-building",
        name: "Link Building",
        description: "Build quality backlinks",
        price: 399,
        icon: <RefreshCw className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "funnel-optimization",
        name: "Funnel Optimization",
        description: "Optimize conversion funnels",
        price: 249,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "reporting-analysis",
        name: "Reporting & Analysis",
        description: "Monthly performance reports",
        price: 149,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "support",
        name: "24-Hour Support",
        description: "Priority customer support",
        price: 99,
        icon: <RefreshCw className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
    ],
    multiSelect: true,
  },
  {
    id: "business-size",
    title: "Your Business",
    description: "We create a project team based on complexity of the project.",
    icon: <Building className="h-6 w-6" />,
    options: [
      {
        id: "small-company",
        name: "Small Company",
        description:
          "A young startup or small website with minimal requirements",
        price: 0,
        icon: <Building className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "mid-level",
        name: "Mid-Level",
        description:
          "Medium-sized company projects for regional business focus",
        price: 500,
        icon: <Building className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "enterprise",
        name: "Enterprise Level",
        description: "Complex website with complex marketing requirements",
        price: 1000,
        icon: <Building className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: false,
  },
];

// Main component
export default function SEOQuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, any>>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [formData, setFormData] = useState({
    website: "",
    email: "",
    message: "",
    leaveMessage: false,
  });

  // Calculate total price whenever selections change
  useEffect(() => {
    let price = 0;

    // Calculate price based on selections
    Object.entries(selections).forEach(([stepId, stepSelections]) => {
      const step = steps.find((s) => s.id === stepId);
      if (!step) return;

      if (Array.isArray(stepSelections)) {
        // Handle multi-select options
        stepSelections.forEach((selection) => {
          const option = step.options.find((o) => o.id === selection.id);
          if (!option) return;

          if (option.type === "slider") {
            price += option.price * (selection.value || 1);
          } else {
            price += option.price;
          }
        });
      } else if (typeof stepSelections === "object") {
        // Handle single-select options
        const option = step.options.find((o) => o.id === stepSelections.id);
        if (option) {
          price += option.price;
        }
      }
    });

    setTotalPrice(price);
  }, [selections]);

  // Handle option selection
  const handleSelect = (stepId: string, optionId: string, value?: any) => {
    const step = steps.find((s) => s.id === stepId);
    if (!step) return;

    const option = step.options.find((o) => o.id === optionId);
    if (!option) return;

    setSelections((prev) => {
      const newSelections = { ...prev };

      if (step.multiSelect) {
        // Handle multi-select
        if (!Array.isArray(newSelections[stepId])) {
          newSelections[stepId] = [];
        }

        const existingIndex = newSelections[stepId].findIndex(
          (s: any) => s.id === optionId
        );

        if (existingIndex >= 0) {
          if (option.type === "toggle") {
            // Remove if toggle is being turned off
            newSelections[stepId] = newSelections[stepId].filter(
              (s: any) => s.id !== optionId
            );
          } else if (option.type === "slider") {
            // Update slider value
            newSelections[stepId][existingIndex] = { id: optionId, value };
          } else {
            // Remove if already selected (toggle behavior for select type)
            newSelections[stepId] = newSelections[stepId].filter(
              (s: any) => s.id !== optionId
            );
          }
        } else {
          // Add new selection
          if (option.type === "slider") {
            newSelections[stepId].push({
              id: optionId,
              value: value || option.min || 1,
            });
          } else {
            newSelections[stepId].push({ id: optionId });
          }
        }
      } else {
        // Handle single-select
        newSelections[stepId] = { id: optionId };
      }

      return newSelections;
    });
  };

  // Check if an option is selected
  const isSelected = (stepId: string, optionId: string) => {
    if (!selections[stepId]) return false;

    if (Array.isArray(selections[stepId])) {
      return selections[stepId].some((s: any) => s.id === optionId);
    } else {
      return selections[stepId]?.id === optionId;
    }
  };

  // Get slider value if option is selected
  const getSliderValue = (stepId: string, optionId: string) => {
    if (!selections[stepId]) return 0;

    if (Array.isArray(selections[stepId])) {
      const selection = selections[stepId].find((s: any) => s.id === optionId);
      return selection?.value || 0;
    }

    return 0;
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Navigate to next step
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Start the quote process
  const startQuote = () => {
    setIsStarted(true);
    setCurrentStep(0);
  };

  // Submit the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { selections, totalPrice, formData });
    alert("Thank you for your order! We'll contact you shortly.");
  };

  // Calculate progress percentage
  const progressPercentage = isStarted
    ? ((currentStep + 1) / (steps.length + 1)) * 100
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">
            Instant SEO Services Quote
          </h1>
          <p className="text-gray-600">
            Get an instant quote on your next site optimization. Just select the
            features you need, and we'll provide an instant estimate.
          </p>
        </div>

        {!isStarted ? (
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-blue-500">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">
                  All our payments are processed via PayPal or Stripe. You do
                  not need a PayPal account and we do not store any payment card
                  details on our website.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-blue-500">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">No hidden fees</h3>
                <p className="text-gray-600 text-sm">
                  There are no hidden costs, setup or termination fees attached
                  to our SEO packages. All our plans are clear. We do not charge
                  for any additional services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-blue-500">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">No outsourcing</h3>
                <p className="text-gray-600 text-sm">
                  Our team do not outsource any of SEO services outside. We
                  prefer to be in control of all processes in-house and deliver
                  the best quality in a long run.
                </p>
              </div>
            </div>

            <button
              onClick={startQuote}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors flex items-center mx-auto"
            >
              <ThumbsUp className="mr-2 h-5 w-5" />
              Get Started
            </button>
          </div>
        ) : (
          <>
            {/* Progress bar */}
            <div className="mb-12 relative">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div
                className="absolute top-0 transform -translate-y-1/2 transition-all duration-500 ease-in-out"
                style={{ left: `${progressPercentage}%` }}
              >
                <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-sm">
                  {currentStep < steps.length
                    ? `${currentStep + 1}/${steps.length}`
                    : `${steps.length}/${steps.length}`}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {currentStep < steps.length ? (
                <motion.div
                  key={`step-${currentStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        {steps[currentStep].icon}
                      </div>
                      <h2 className="text-2xl font-medium text-gray-800">
                        {steps[currentStep].title}
                      </h2>
                    </div>

                    {steps[currentStep].description && (
                      <p className="text-gray-600 mb-6">
                        {steps[currentStep].description}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {steps[currentStep].options.map((option) => {
                        const isOptionSelected = isSelected(
                          steps[currentStep].id,
                          option.id
                        );

                        if (option.type === "select") {
                          return (
                            <div
                              key={option.id}
                              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                isOptionSelected
                                  ? "border-green-500 bg-green-50"
                                  : "border-gray-200 hover:border-blue-300"
                              }`}
                              onClick={() =>
                                handleSelect(steps[currentStep].id, option.id)
                              }
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div className="bg-green-100 p-2 rounded-full">
                                  {option.icon}
                                </div>
                                {option.price > 0 && (
                                  <div className="text-sm font-medium text-gray-700">
                                    +${option.price}
                                    {option.unit && (
                                      <span className="text-xs text-gray-500">
                                        {" "}
                                        {option.unit}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                              <h3 className="font-medium mb-1">
                                {option.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {option.description}
                              </p>
                            </div>
                          );
                        }

                        if (option.type === "toggle") {
                          return (
                            <div
                              key={option.id}
                              className="border border-gray-200 rounded-lg p-4"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center">
                                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                                    {option.icon}
                                  </div>
                                  <h3 className="font-medium">{option.name}</h3>
                                </div>
                                <div className="text-sm font-medium text-gray-700">
                                  +${option.price}
                                  {option.unit && (
                                    <span className="text-xs text-gray-500">
                                      {" "}
                                      {option.unit}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                {option.description}
                              </p>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="sr-only peer"
                                  checked={isOptionSelected}
                                  onChange={() =>
                                    handleSelect(
                                      steps[currentStep].id,
                                      option.id
                                    )
                                  }
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                              </label>
                            </div>
                          );
                        }

                        if (option.type === "slider") {
                          const sliderValue = getSliderValue(
                            steps[currentStep].id,
                            option.id
                          );

                          return (
                            <div
                              key={option.id}
                              className="border border-gray-200 rounded-lg p-4 col-span-1 sm:col-span-2 lg:col-span-3"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center">
                                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                                    {option.icon}
                                  </div>
                                  <h3 className="font-medium">{option.name}</h3>
                                </div>
                                <div className="text-sm font-medium text-gray-700">
                                  +$
                                  {option.price *
                                    (sliderValue || option.min || 0)}
                                  {option.unit && (
                                    <span className="text-xs text-gray-500">
                                      {" "}
                                      ({sliderValue || option.min || 0}{" "}
                                      {option.unit})
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                {option.description}
                              </p>
                              <div className="flex items-center">
                                <input
                                  type="range"
                                  min={option.min || 0}
                                  max={option.max || 100}
                                  step={option.step || 1}
                                  value={sliderValue || option.min || 0}
                                  onChange={(e) =>
                                    handleSelect(
                                      steps[currentStep].id,
                                      option.id,
                                      Number.parseInt(e.target.value)
                                    )
                                  }
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                  onClick={() => {
                                    if (!isOptionSelected) {
                                      handleSelect(
                                        steps[currentStep].id,
                                        option.id,
                                        option.min || 1
                                      );
                                    }
                                  }}
                                />
                                <span className="ml-2 text-sm font-medium text-gray-700">
                                  {sliderValue || option.min || 0}
                                </span>
                              </div>
                            </div>
                          );
                        }

                        return null;
                      })}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md flex items-center transition-colors"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" />
                      Previous
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center transition-colors"
                    >
                      Next
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="final-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-medium text-gray-800 mb-6 text-center">
                      Final cost
                    </h2>
                    <p className="text-center text-gray-600 mb-4">
                      The final estimated price is:
                    </p>
                    <div className="text-4xl font-bold text-center text-green-600 mb-8">
                      ${totalPrice.toLocaleString()}
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                      <div className="mb-4">
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your site address
                        </label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          placeholder="www.yoursite.com"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Enter your email here
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="your@email.here"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="leaveMessage"
                            className="text-sm font-medium text-gray-700"
                          >
                            Do you want to leave a message?
                          </label>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              id="leaveMessage"
                              name="leaveMessage"
                              className="sr-only peer"
                              checked={formData.leaveMessage}
                              onChange={handleInputChange}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                      </div>

                      {formData.leaveMessage && (
                        <div className="mb-6">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Your message here..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          ></textarea>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md flex items-center transition-colors"
                        >
                          <ChevronLeft className="mr-2 h-5 w-5" />
                          Previous
                        </button>
                        <button
                          type="submit"
                          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center transition-colors"
                        >
                          Place the order
                          <Send className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Return to previous step link */}
            {currentStep > 0 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => prevStep()}
                  className="text-blue-500 hover:text-blue-700 text-sm flex items-center mx-auto"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Return to the previous step
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
