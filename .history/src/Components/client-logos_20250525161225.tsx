/* eslint-disable react/no-unescaped-entities */


"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  // AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight,  Quote } from "lucide-react";
import logo1 from "@/Images/logo1.png";
import logo2 from "@/Images/logo2.png";
import logo3 from "@/Images/logo3.png";
import logo4 from "@/Images/logo4.png";
import logo5 from "@/Images/logo5.png";
import logo6 from "@/Images/logo-6.png";
import sujalfoods from "@/Images/sujalfoods.png"
import manipal from "@/Images/manipal.png"
import upgrad from "@/Images/upgrad.png"
import shikshanerd from "@/Images/shiksha.png"
import nmis from "@/Images/nmims.png"
import eduversity from "@/Images/eduversitylogo.png"
import Link from "next/link";


const clients = [
  {
    name: "Oxford International College",
    logo: logo1,
    description:
      "Top-tier educational institution known for its academic excellence and innovation.",
    industry: "Education",
    testimonial: {
      quote:
        "The digital marketing strategies implemented by the Fishtail team significantly improved our online visibility and student applications.",
      author: "Dr. Olivia Brooks",
      title: "Director of Admissions",
      rating: 5,
    },
  },
  {
    name: "Bright Future Academy",
    logo: logo2,
    description:
      "Premier training institute offering career-focused professional development programs.",
    industry: "Training & Development",
    testimonial: {
      quote:
        "Our course sign-ups more than doubled thanks to their outstanding SEO and PPC support. Their team truly understands performance marketing.",
      author: "Jonathan Kim",
      title: "Marketing Director",
      rating: 5,
    },
  },
  {
    name: "Everest Business School",
    logo: logo3,
    description:
      "Graduate school offering MBA and advanced degree programs in business and leadership.",
    industry: "Higher Education",
    testimonial: {
      quote:
        "We saw a significant increase in qualified leads after partnering with them for SEO and content strategy. Excellent service and communication.",
      author: "Anjali Desai",
      title: "Dean of Marketing",
      rating: 4,
    },
  },
  {
    name: "Global Athletics Federation",
    logo: logo4,
    description:
      "National-level sports federation organizing elite training and competitions worldwide.",
    industry: "Sports",
    testimonial: {
      quote:
        "Their targeted campaigns for our annual championship brought a record number of attendees. Highly effective strategies!",
      author: "Marcus Holloway",
      title: "Event Operations Head",
      rating: 5,
    },
  },
  {
    name: "Imperial Research University",
    logo: logo5,
    description:
      "Leading global university known for research breakthroughs and international collaborations.",
    industry: "Research & Education",
    testimonial: {
      quote:
        "Their content strategy helped elevate our research exposure and academic reach significantly. We’re now attracting global partnerships.",
      author: "Dr. Elaine Foster",
      title: "Head of Global Research",
      rating: 5,
    },
  },
  {
    name: "EliteFit Performance Center",
    logo: logo6,
    description:
      "State-of-the-art sports and fitness facility catering to elite athletes and trainers.",
    industry: "Sports Training",
    testimonial: {
      quote:
        "With their help, we've seen steady new membership growth month after month. Local SEO really worked wonders for us.",
      author: "Kevin Dawson",
      title: "Center Director",
      rating: 4,
    },
  },
  // New clients
  {
    name: "Manipal University",
    logo: manipal, // You should import logo7 like the others
    description:
      "A prestigious university offering a wide range of undergraduate, postgraduate, and doctoral programs.",
    industry: "Education",
    testimonial: {
      quote:
        "Fishtail's marketing strategy helped us boost student enrollments and global visibility. Their team is strategic and results-driven.",
      author: "Dr. Ramesh Kumar",
      title: "Director of Admissions",
      rating: 5,
    },
  },
  {
    name: "Sujal Foods",
    logo: sujalfoods, // You should import logo8 like the others
    description:
      "A well-known food manufacturing company specializing in organic and health-conscious food products.",
    industry: "Food & Beverage",
    testimonial: {
      quote:
        "Thanks to their digital strategies, we reached new markets and significantly improved our brand awareness. Their team is innovative and highly responsive.",
      author: "Sujal Patel",
      title: "Founder & CEO",
      rating: 5,
    },
  },
  {
    name: "NMIS",
    logo: nmis, // You should import logo9 like the others
    description:
      "National Management and Information Systems, a leading institute for business and technology education.",
    industry: "Education",
    testimonial: {
      quote:
        "The digital marketing efforts from Fishtail helped elevate our online presence, attracting more students and enhancing our reputation.",
      author: "Anil Sharma",
      title: "CEO",
      rating: 4,
    },
  },
  // Added new clients
  {
    name: "Eduversity",
    logo: eduversity, // You should import logo10 like the others
    description:
      "An innovative online platform offering affordable and accessible education to students across the world.",
    industry: "Education",
    testimonial: {
      quote:
        "Fishtail's web development and marketing efforts helped us increase online course registrations and reach a global audience.",
      author: "Sanjay Sharma",
      title: "Founder & CEO",
      rating: 5,
    },
  },
  {
    name: "UpGrad",
    logo: upgrad, // You should import logo11 like the others
    description:
      "A leading online education provider offering high-quality degree programs in partnership with top universities.",
    industry: "Education",
    testimonial: {
      quote:
        "Their expertise in SEO and PPC campaigns helped us drive traffic and significantly increase our course enrollments.",
      author: "Radhika Mehra",
      title: "Marketing Head",
      rating: 5,
    },
  },
  {
    name: "ShikshaNerd",
    logo: shikshanerd, // You should import logo12 like the others
    description:
      "A platform dedicated to helping students with their academic journey by offering expert advice and resources.",
    industry: "Education",
    testimonial: {
      quote:
        "Fishtail's SEO services and content marketing strategy helped us attract more traffic and improve our conversion rates.",
      author: "Manoj Gupta",
      title: "Founder & CEO",
      rating: 5,
    },
  },
];


export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  // const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [activeClient, setActiveClient] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Handle animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // Animate client counter
      const targetCount = 200;
      const duration = 2000; // 2 seconds
      const interval = 20; // Update every 20ms
      const steps = duration / interval;
      const increment = targetCount / steps;

      let count = 0;
      const timer = setInterval(() => {
        count += increment;
        if (count >= targetCount) {
          setClientCount(targetCount);
          clearInterval(timer);
        } else {
          setClientCount(Math.floor(count));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, controls]);

  // Autoplay testimonials
  useEffect(() => {
    if (!autoplay || isHovering) return;

    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, isHovering, clients.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handlePrev = () => {
    setActiveClient((prev) => (prev - 1 + clients.length) % clients.length);
    setAutoplay(false);
  };

  const handleNext = () => {
    setActiveClient((prev) => (prev + 1) % clients.length);
    setAutoplay(false);
  };

  const handleLogoClick = (index: number) => {
    setActiveClient(index);
    setAutoplay(false);
  };

  return (
    <section
      ref={sectionRef}
      className="py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white border-b border-[#F5F5F5]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-3 text-[#003C8F]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Innovators
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            200+ brands {" "}
            <span className="font-bold text-[#0084FF]">{clientCount}+</span>{" "}
            rely on our expertise to solve complex digital challenges and drive revenue.
          </motion.p>
        </div>

        {/* Client Logos Carousel */}
        <div
          className="mb-12 overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeClient === index ? "scale-110 z-10" : ""
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleLogoClick(index)}
              >
                <div
                  className={`w-full aspect-square flex items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                    activeClient === index
                      ? "bg-[#0084FF]/10 shadow-lg"
                      : "bg-[#F5F5F5] hover:shadow-md"
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={150}
                      height={150}
                      className={`w-16 h-auto sm:w-20 md:w-24 max-h-full object-contain transition-all duration-500 ${
                        activeClient === index
                          ? "grayscale-0"
                          : "grayscale hover:grayscale-0"
                      }`}
                    />

                    {/* Industry badge */}
                    <div
                      className={`absolute -top-2 -right-2 bg-[#0084FF] text-white text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                        activeClient === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {client.industry}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial Section */}
        <div className="relative bg-[#F5F5F5] rounded-xl p-6 md:p-8 mb-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
            <Quote className="w-full h-full text-[#0084FF]" />
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-[#0084FF]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#003C8F]" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-[#0084FF]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#003C8F]" />
            </button>
          </div>

        
          {/* <div
            className="overflow-hidden"
            ref={carouselRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
              >
      
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src={clients[activeClient].logo || "/placeholder.svg"}
                    alt={clients[activeClient].name}
                    width={100}
                    height={100}
                    className="w-16 md:w-20 h-auto object-contain"
                  />
                </div>

              
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < clients[activeClient].testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-[#003C8F] italic mb-4 text-lg">
                    "{clients[activeClient].testimonial.quote}"
                  </p>

                  <div>
                    <p className="font-semibold text-[#0084FF]">
                      {clients[activeClient].testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {clients[activeClient].testimonial.title},{" "}
                      {clients[activeClient].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div> */}

          {/* Pagination dots
          <div className="flex justify-center mt-6 gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeClient === index
                    ? "bg-[#0084FF] w-4"
                    : "bg-gray-300 hover:bg-[#0084FF]/50"
                }`}
                onClick={() => handleLogoClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            Join our growing list of satisfied clients and experience the
            difference
          </p>
          <Link className="px-6 py-2 bg-[#0084FF] hover:bg-[#003C8F] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Request a Free Consultation
          </>
        </motion.div>
      </div>
    </section>
  );
}
