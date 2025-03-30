/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  ThumbsUp,
  Globe,
  Layers,
  Code,
  PenTool,
  Database,
  ShoppingCart,
  Clock,
  Server,
  Shield,
  Smartphone,
  Zap,
  Search,
  Building,
  Send,
  BarChart2,
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
    id: "website-type",
    title: "What type of website do you need?",
    icon: <Globe className="h-6 w-6" />,
    options: [
      {
        id: "business-website",
        name: "Business Website",
        description: "Professional website for your company or organization",
        price: 1200,
        icon: <Building className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "ecommerce",
        name: "E-Commerce Store",
        description: "Online store with product listings and checkout",
        price: 2500,
        icon: <ShoppingCart className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "portfolio",
        name: "Portfolio / Personal",
        description: "Showcase your work or personal brand",
        price: 800,
        icon: <PenTool className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "blog",
        name: "Blog / Content Site",
        description: "Content-focused website with regular updates",
        price: 1000,
        icon: <Layers className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "web-application",
        name: "Web Application",
        description: "Interactive web app with user accounts and features",
        price: 4000,
        icon: <Code className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: false,
  },
  {
    id: "design",
    title: "Design Options",
    icon: <PenTool className="h-6 w-6" />,
    options: [
      {
        id: "custom-design",
        name: "Custom Design",
        description: "Unique design created specifically for your brand",
        price: 1500,
        icon: <PenTool className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "template-based",
        name: "Template-Based Design",
        description: "Professional template customized to your needs",
        price: 500,
        icon: <Layers className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "redesign",
        name: "Website Redesign",
        description: "Update and improve your existing website",
        price: 1000,
        icon: <Zap className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "logo-design",
        name: "Logo Design",
        description: "Professional logo creation",
        price: 400,
        icon: <PenTool className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "brand-identity",
        name: "Brand Identity Package",
        description:
          "Complete brand identity including logo, colors, and style guide",
        price: 800,
        icon: <Layers className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "pages",
    title: "Pages & Content",
    icon: <Layers className="h-6 w-6" />,
    options: [
      {
        id: "basic-pages",
        name: "Basic Pages",
        description: "Home, About, Services, Contact pages",
        price: 0,
        icon: <Layers className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "additional-pages",
        name: "Additional Pages",
        description: "Extra pages beyond the basics",
        price: 150,
        icon: <Layers className="h-6 w-6" />,
        type: "slider",
        unit: "per page",
        min: 0,
        max: 20,
        step: 1,
      },
      {
        id: "content-creation",
        name: "Content Creation",
        description: "Professional copywriting for your website",
        price: 200,
        icon: <Layers className="h-6 w-6" />,
        type: "slider",
        unit: "per page",
        min: 0,
        max: 20,
        step: 1,
      },
      {
        id: "blog-setup",
        name: "Blog Setup",
        description: "Blog section with categories and tags",
        price: 500,
        icon: <Layers className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "features",
    title: "Features & Functionality",
    icon: <Code className="h-6 w-6" />,
    options: [
      {
        id: "contact-form",
        name: "Contact Form",
        description: "Custom form with validation and email notifications",
        price: 200,
        icon: <Send className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "image-gallery",
        name: "Image Gallery",
        description: "Interactive image gallery or slider",
        price: 300,
        icon: <Layers className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "user-accounts",
        name: "User Accounts",
        description: "User registration and login functionality",
        price: 800,
        icon: <Shield className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "payment-processing",
        name: "Payment Processing",
        description: "Integration with payment gateways",
        price: 600,
        icon: <DollarSign className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "search-functionality",
        name: "Search Functionality",
        description: "Advanced search for your website content",
        price: 400,
        icon: <Search className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "multilingual",
        name: "Multilingual Support",
        description: "Support for multiple languages",
        price: 700,
        icon: <Globe className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "technology",
    title: "Technology Stack",
    icon: <Server className="h-6 w-6" />,
    options: [
      {
        id: "wordpress",
        name: "WordPress",
        description: "Popular CMS for easy content management",
        price: 0,
        icon: <Code className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "react",
        name: "React / Next.js",
        description: "Modern JavaScript framework for interactive websites",
        price: 500,
        icon: <Code className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "shopify",
        name: "Shopify",
        description: "E-commerce platform for online stores",
        price: 300,
        icon: <ShoppingCart className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "custom-cms",
        name: "Custom CMS",
        description: "Tailored content management system",
        price: 1500,
        icon: <Database className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "static-site",
        name: "Static Site",
        description: "Fast, secure static website",
        price: -200,
        icon: <Zap className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: false,
  },
  {
    id: "optimization",
    title: "Optimization & Extras",
    icon: <Zap className="h-6 w-6" />,
    options: [
      {
        id: "seo-setup",
        name: "SEO Setup",
        description: "Basic search engine optimization",
        price: 400,
        icon: <Search className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "mobile-optimization",
        name: "Mobile Optimization",
        description: "Ensure perfect display on all devices",
        price: 300,
        icon: <Smartphone className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "performance-optimization",
        name: "Performance Optimization",
        description: "Speed up loading times and performance",
        price: 500,
        icon: <Zap className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "analytics-setup",
        name: "Analytics Setup",
        description: "Track website visitors and behavior",
        price: 200,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "security-package",
        name: "Security Package",
        description: "Enhanced security features and monitoring",
        price: 600,
        icon: <Shield className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    icon: <Clock className="h-6 w-6" />,
    options: [
      {
        id: "basic-maintenance",
        name: "Basic Maintenance",
        description: "Regular updates and backups",
        price: 100,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "standard-maintenance",
        name: "Standard Maintenance",
        description: "Updates, backups, and minor changes",
        price: 200,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "premium-maintenance",
        name: "Premium Maintenance",
        description: "Full service maintenance and priority support",
        price: 400,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "no-maintenance",
        name: "No Maintenance",
        description: "I'll handle maintenance myself",
        price: 0,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "training-session",
        name: "Training Session",
        description: "Learn how to manage your website",
        price: 300,
        icon: <Layers className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: false,
  },
  {
    id: "timeline",
    title: "Project Timeline",
    description: "When do you need your website completed?",
    icon: <Clock className="h-6 w-6" />,
    options: [
      {
        id: "standard",
        name: "Standard Timeline",
        description: "4-8 weeks depending on complexity",
        price: 0,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "expedited",
        name: "Expedited Timeline",
        description: "2-4 weeks with priority development",
        price: 800,
        icon: <Zap className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "rush",
        name: "Rush Timeline",
        description: "1-2 weeks with dedicated team",
        price: 1500,
        icon: <Zap className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: false,
  },
];

// Main component
export default function WebDevQuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, any>>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
    alert(
      "Thank you for your request! We'll contact you shortly with a detailed proposal."
    );
  };

  // Calculate progress percentage
  const progressPercentage = isStarted
    ? ((currentStep + 1) / (steps.length + 1)) * 100
    : 0;

  // Calculate monthly costs
  const calculateMonthlyCost = () => {
    let monthlyCost = 0;

    if (selections.maintenance && !Array.isArray(selections.maintenance)) {
      const maintenanceOption = steps
        .find((s) => s.id === "maintenance")
        ?.options.find((o) => o.id === selections.maintenance.id);
      if (maintenanceOption) {
        monthlyCost += maintenanceOption.price;
      }
    }

    return monthlyCost;
  };

  const monthlyCost = calculateMonthlyCost();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">
            Web Development Services Quote
          </h1>
          <p className="text-gray-600">
            Get an instant quote for your website project. Select the options
            you need, and we&apos;ll provide a custom estimate.
          </p>
        </div>

        {!isStarted ? (
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-blue-500">
                  <Code className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium mb-2">Custom Development</h3>
                <p className="text-gray-600 text-sm">
                  Our team of expert developers creates custom websites tailored
                  to your specific business needs and goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-blue-500">
                  <Smartphone className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  Mobile-First Design
                </h3>
                <p className="text-gray-600 text-sm">
                  All our websites are built with responsive design to ensure
                  they look great on all devices, from desktops to smartphones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-blue-500">
                  <Zap className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium mb-2">Fast & Reliable</h3>
                <p className="text-gray-600 text-sm">
                  We optimize for speed and performance, ensuring your website
                  loads quickly and functions reliably for all users.
                </p>
              </div>
            </div>

            <button
              onClick={startQuote}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors flex items-center mx-auto"
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
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300"
                              }`}
                              onClick={() =>
                                handleSelect(steps[currentStep].id, option.id)
                              }
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div className="bg-blue-100 p-2 rounded-full">
                                  {option.icon}
                                </div>
                                <div className="text-sm font-medium text-gray-700">
                                  {option.price > 0 && "+"}
                                  {option.price < 0 && "-"}
                                  {option.price !== 0 &&
                                    `$${Math.abs(
                                      option.price
                                    ).toLocaleString()}`}
                                  {option.price === 0 && "Included"}
                                  {option.unit && (
                                    <span className="text-xs text-gray-500">
                                      {" "}
                                      {option.unit}
                                    </span>
                                  )}
                                </div>
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
                                  +${option.price.toLocaleString()}
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
                                  {(
                                    option.price *
                                    (sliderValue || option.min || 0)
                                  ).toLocaleString()}
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
                      Your Website Quote
                    </h2>
                    <p className="text-center text-gray-600 mb-4">
                      Based on your selections, here&apos;s your estimated quote:
                    </p>

                    <div className="mb-8 border-b pb-6">
                      <div className="text-4xl font-bold text-center text-blue-600 mb-2">
                        ${totalPrice.toLocaleString()}
                      </div>
                      <p className="text-center text-gray-500">
                        One-time development cost
                      </p>

                      {monthlyCost > 0 && (
                        <div className="mt-4 text-center">
                          <div className="text-2xl font-semibold text-blue-500">
                            ${monthlyCost.toLocaleString()}/month
                          </div>
                          <p className="text-gray-500">
                            Ongoing maintenance and support
                          </p>
                        </div>
                      )}
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="leaveMessage"
                            className="text-sm font-medium text-gray-700"
                          >
                            Add additional details about your project?
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
                            placeholder="Please share any additional requirements or questions about your project..."
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
                          Request Detailed Quote
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
