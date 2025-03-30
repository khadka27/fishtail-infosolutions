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
  BarChart2,
  Target,
  LineChart,
  PieChart,
  TrendingUp,
  Globe,
  Search,
  ImageIcon,
  Video,
  MessageSquare,
  Mail,
  MousePointer,
  Users,
  Clock,
  Send,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
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
    id: "ad-platforms",
    title: "Which ad platforms do you want to use?",
    icon: <Globe className="h-6 w-6" />,
    options: [
      {
        id: "google-ads",
        name: "Google Ads",
        description: "Search, Display, and YouTube advertising",
        price: 500,
        icon: <Search className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "facebook-instagram",
        name: "Facebook & Instagram",
        description: "Social media advertising on Meta platforms",
        price: 500,
        icon: <Facebook className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "linkedin",
        name: "LinkedIn",
        description: "B2B focused advertising for professionals",
        price: 600,
        icon: <Linkedin className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "twitter",
        name: "Twitter",
        description: "Advertising on Twitter/X platform",
        price: 400,
        icon: <Twitter className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "youtube",
        name: "YouTube",
        description: "Video advertising on YouTube",
        price: 600,
        icon: <Youtube className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "tiktok",
        name: "TikTok",
        description: "Short-form video advertising",
        price: 500,
        icon: <Video className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: true,
  },
  {
    id: "campaign-types",
    title: "Campaign Types",
    icon: <Target className="h-6 w-6" />,
    options: [
      {
        id: "search-campaigns",
        name: "Search Campaigns",
        description: "Text ads on search engine results pages",
        price: 300,
        icon: <Search className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "display-campaigns",
        name: "Display Campaigns",
        description: "Visual banner ads across websites",
        price: 300,
        icon: <ImageIcon className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "video-campaigns",
        name: "Video Campaigns",
        description: "Video ads on platforms like YouTube",
        price: 500,
        icon: <Video className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "social-campaigns",
        name: "Social Media Campaigns",
        description: "Ads on social media platforms",
        price: 400,
        icon: <Users className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "remarketing",
        name: "Remarketing Campaigns",
        description: "Target users who previously visited your site",
        price: 250,
        icon: <Target className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "email-campaigns",
        name: "Email Campaigns",
        description: "Targeted email marketing campaigns",
        price: 350,
        icon: <Mail className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "ad-creation",
    title: "Ad Creation & Creative Services",
    icon: <ImageIcon className="h-6 w-6" />,
    options: [
      {
        id: "text-ads",
        name: "Text Ad Creation",
        description: "Compelling text ads for search campaigns",
        price: 50,
        icon: <MessageSquare className="h-6 w-6" />,
        type: "slider",
        unit: "per ad group",
        min: 1,
        max: 20,
        step: 1,
      },
      {
        id: "banner-design",
        name: "Banner Ad Design",
        description: "Professional banner ad design",
        price: 100,
        icon: <ImageIcon className="h-6 w-6" />,
        type: "slider",
        unit: "per banner set",
        min: 0,
        max: 10,
        step: 1,
      },
      {
        id: "video-production",
        name: "Video Ad Production",
        description: "Professional video ad creation",
        price: 1500,
        icon: <Video className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "social-media-content",
        name: "Social Media Content",
        description: "Custom content for social media ads",
        price: 75,
        icon: <Users className="h-6 w-6" />,
        type: "slider",
        unit: "per post",
        min: 0,
        max: 20,
        step: 1,
      },
      {
        id: "copywriting",
        name: "Ad Copywriting",
        description: "Professional copywriting for all ad types",
        price: 300,
        icon: <MessageSquare className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    icon: <MousePointer className="h-6 w-6" />,
    options: [
      {
        id: "landing-page-creation",
        name: "Landing Page Creation",
        description: "Custom landing pages for your campaigns",
        price: 800,
        icon: <Globe className="h-6 w-6" />,
        type: "slider",
        unit: "per page",
        min: 0,
        max: 10,
        step: 1,
      },
      {
        id: "landing-page-optimization",
        name: "Landing Page Optimization",
        description: "Improve existing landing pages for better conversion",
        price: 400,
        icon: <TrendingUp className="h-6 w-6" />,
        type: "slider",
        unit: "per page",
        min: 0,
        max: 10,
        step: 1,
      },
      {
        id: "a-b-testing",
        name: "A/B Testing",
        description: "Test different versions to maximize conversion",
        price: 500,
        icon: <PieChart className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "conversion-tracking",
        name: "Conversion Tracking Setup",
        description: "Track form submissions, purchases, and other conversions",
        price: 300,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "targeting",
    title: "Audience Targeting",
    icon: <Target className="h-6 w-6" />,
    options: [
      {
        id: "demographic-targeting",
        name: "Demographic Targeting",
        description: "Target by age, gender, income, etc.",
        price: 200,
        icon: <Users className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "interest-targeting",
        name: "Interest-Based Targeting",
        description: "Target users based on interests and behaviors",
        price: 250,
        icon: <Target className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "geographic-targeting",
        name: "Geographic Targeting",
        description: "Target specific locations",
        price: 150,
        icon: <Globe className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "custom-audience",
        name: "Custom Audience Creation",
        description: "Create audiences from your customer data",
        price: 300,
        icon: <Users className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "lookalike-audience",
        name: "Lookalike Audience",
        description: "Find users similar to your best customers",
        price: 350,
        icon: <Users className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    icon: <BarChart2 className="h-6 w-6" />,
    options: [
      {
        id: "basic-reporting",
        name: "Basic Reporting",
        description: "Monthly performance reports",
        price: 200,
        icon: <BarChart2 className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "advanced-analytics",
        name: "Advanced Analytics",
        description: "Detailed analytics with insights and recommendations",
        price: 500,
        icon: <LineChart className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "custom-dashboard",
        name: "Custom Dashboard",
        description: "Personalized dashboard for real-time monitoring",
        price: 800,
        icon: <PieChart className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "competitor-analysis",
        name: "Competitor Analysis",
        description: "Monitor and analyze competitor ad strategies",
        price: 400,
        icon: <Target className="h-6 w-6" />,
        type: "toggle",
      },
      {
        id: "conversion-analysis",
        name: "Conversion Path Analysis",
        description: "Analyze user journey to conversion",
        price: 350,
        icon: <TrendingUp className="h-6 w-6" />,
        type: "toggle",
      },
    ],
    multiSelect: true,
  },
  {
    id: "management",
    title: "Campaign Management",
    icon: <Clock className="h-6 w-6" />,
    options: [
      {
        id: "basic-management",
        name: "Basic Management",
        description: "Regular monitoring and basic optimizations",
        price: 500,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "standard-management",
        name: "Standard Management",
        description:
          "Active management with regular optimizations and adjustments",
        price: 1000,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "premium-management",
        name: "Premium Management",
        description: "Comprehensive management with advanced strategies",
        price: 2000,
        icon: <Clock className="h-6 w-6" />,
        type: "select",
        unit: "/month",
      },
      {
        id: "self-managed",
        name: "Self-Managed",
        description: "We set up, you manage (with training)",
        price: 0,
        icon: <Users className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: false,
  },
  {
    id: "budget",
    title: "Monthly Ad Spend Budget",
    description:
      "Estimated monthly budget to spend on the ads themselves (paid directly to ad platforms)",
    icon: <DollarSign className="h-6 w-6" />,
    options: [
      {
        id: "budget-small",
        name: "Small Budget",
        description: "$500 - $2,000 monthly ad spend",
        price: 0,
        icon: <DollarSign className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "budget-medium",
        name: "Medium Budget",
        description: "$2,000 - $5,000 monthly ad spend",
        price: 0,
        icon: <DollarSign className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "budget-large",
        name: "Large Budget",
        description: "$5,000 - $10,000 monthly ad spend",
        price: 0,
        icon: <DollarSign className="h-6 w-6" />,
        type: "select",
      },
      {
        id: "budget-enterprise",
        name: "Enterprise Budget",
        description: "$10,000+ monthly ad spend",
        price: 0,
        icon: <DollarSign className="h-6 w-6" />,
        type: "select",
      },
    ],
    multiSelect: false,
  },
];

// Main component
export default function DigitalAdQuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, any>>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
    leaveMessage: false,
  });

  // Calculate total price whenever selections change
  useEffect(() => {
    let oneTimePrice = 0;
    let recurringPrice = 0;

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
            const price = option.price * (selection.value || 1);
            if (option.unit?.includes("/month")) {
              recurringPrice += price;
            } else {
              oneTimePrice += price;
            }
          } else {
            if (option.unit?.includes("/month")) {
              recurringPrice += option.price;
            } else {
              oneTimePrice += option.price;
            }
          }
        });
      } else if (typeof stepSelections === "object") {
        // Handle single-select options
        const option = step.options.find((o) => o.id === stepSelections.id);
        if (option) {
          if (option.unit?.includes("/month")) {
            recurringPrice += option.price;
          } else {
            oneTimePrice += option.price;
          }
        }
      }
    });

    setTotalPrice(oneTimePrice);
    setMonthlyPrice(recurringPrice);
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
    console.log("Form submitted:", {
      selections,
      totalPrice,
      monthlyPrice,
      formData,
    });
    alert(
      "Thank you for your request! We'll contact you shortly with a detailed digital advertising proposal."
    );
  };

  // Calculate progress percentage
  const progressPercentage = isStarted
    ? ((currentStep + 1) / (steps.length + 1)) * 100
    : 0;

  // Get selected budget range
  const getSelectedBudget = () => {
    if (!selections.budget) return null;

    const budgetOption = steps
      .find((s) => s.id === "budget")
      ?.options.find((o) => o.id === selections.budget.id);
    return budgetOption?.description || null;
  };

  const selectedBudget = getSelectedBudget();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">
            Digital Advertising Services Quote
          </h1>
          <p className="text-gray-600">
            Get an instant quote for your digital advertising campaign. Select
            the options you need, and we'll provide a custom estimate.
          </p>
        </div>

        {!isStarted ? (
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-purple-500">
                  <Target className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium mb-2">Targeted Campaigns</h3>
                <p className="text-gray-600 text-sm">
                  We create highly targeted campaigns that reach your ideal
                  customers at the right time and place.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-purple-500">
                  <BarChart2 className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  Data-Driven Results
                </h3>
                <p className="text-gray-600 text-sm">
                  Our approach is based on analytics and continuous optimization
                  to maximize your return on ad spend.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-purple-500">
                  <TrendingUp className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium mb-2">Measurable Growth</h3>
                <p className="text-gray-600 text-sm">
                  Track your campaign performance with detailed reporting and
                  see real, measurable results for your business.
                </p>
              </div>
            </div>

            <button
              onClick={startQuote}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors flex items-center mx-auto"
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
                  className="h-2 bg-purple-500 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div
                className="absolute top-0 transform -translate-y-1/2 transition-all duration-500 ease-in-out"
                style={{ left: `${progressPercentage}%` }}
              >
                <div className="bg-purple-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-sm">
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
                      <div className="bg-purple-100 p-2 rounded-full mr-4">
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
                                  ? "border-purple-500 bg-purple-50"
                                  : "border-gray-200 hover:border-purple-300"
                              }`}
                              onClick={() =>
                                handleSelect(steps[currentStep].id, option.id)
                              }
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div className="bg-purple-100 p-2 rounded-full">
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
                                  <div className="bg-purple-100 p-2 rounded-full mr-3">
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
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
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
                                  <div className="bg-purple-100 p-2 rounded-full mr-3">
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
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
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
                      className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md flex items-center transition-colors"
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
                      Your Digital Advertising Quote
                    </h2>
                    <p className="text-center text-gray-600 mb-4">
                      Based on your selections, here's your estimated quote:
                    </p>

                    <div className="mb-8 border-b pb-6">
                      {totalPrice > 0 && (
                        <div className="mb-4">
                          <div className="text-3xl font-bold text-center text-purple-600 mb-2">
                            ${totalPrice.toLocaleString()}
                          </div>
                          <p className="text-center text-gray-500">
                            One-time setup cost
                          </p>
                        </div>
                      )}

                      {monthlyPrice > 0 && (
                        <div className="mt-4">
                          <div className="text-3xl font-bold text-center text-purple-600 mb-2">
                            ${monthlyPrice.toLocaleString()}/month
                          </div>
                          <p className="text-center text-gray-500">
                            Ongoing management and services
                          </p>
                        </div>
                      )}

                      {selectedBudget && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                          <p className="text-center text-gray-700 font-medium">
                            Recommended Ad Spend: {selectedBudget}
                          </p>
                          <p className="text-center text-gray-500 text-sm mt-1">
                            This budget is paid directly to the ad platforms and
                            is separate from our service fees.
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Website URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          placeholder="https://www.yourwebsite.com"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="leaveMessage"
                            className="text-sm font-medium text-gray-700"
                          >
                            Add additional details about your campaign goals?
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
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                          </label>
                        </div>
                      </div>

                      {formData.leaveMessage && (
                        <div className="mb-6">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Please share your campaign goals, target audience, or any specific requirements..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="text-purple-500 hover:text-purple-700 text-sm flex items-center mx-auto"
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
