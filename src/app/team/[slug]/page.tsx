/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import avatar from "@/Images/avatar-4.png";
// import { teamMembers } from "@/data/team-members";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Generate metadata for each team member dynamically
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const teamMember = teamMembers.find((member) => member.slug === slug);

//   if (!teamMember) {
//     return {
//       title: "Team Member Not Found",
//       description: "The requested team member profile could not be found.",
//     };
//   }

//   return {
//     title: `${teamMember.name} - ${teamMember.position} | Our Team`,
//     description: `Learn more about ${
//       teamMember.name
//     }, our ${teamMember.position.toLowerCase()} with expertise in digital marketing and strategy.`,
//   };
// }

// export default async function TeamMemberPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const teamMember = teamMembers.find((member) => member.slug === slug);

//   if (!teamMember) {
//     notFound();
//   }

//   // Find the index of the current team member
//   const currentIndex = teamMembers.findIndex((member) => member.slug === slug);

//   // Calculate previous and next team member indices
//   const prevIndex =
//     currentIndex > 0 ? currentIndex - 1 : teamMembers.length - 1;
//   const nextIndex =
//     currentIndex < teamMembers.length - 1 ? currentIndex + 1 : 0;

//   // Get previous and next team members
//   const prevMember = teamMembers[prevIndex];
//   const nextMember = teamMembers[nextIndex];

//   return (
//     <>
//       {/* Team Member Profile */}
//       <div className="max-w-6xl mx-auto py-16 px-4">
//         <div className="flex flex-col md:flex-row gap-8 md:gap-16">
//           {/* Profile Image - Left Column */}
//           <div className="w-full md:w-1/3">
//             <Image
//               src={teamMember.avatar || "/placeholder.svg"}
//               alt={teamMember.name}
//               width={400}
//               height={400}
//               className="w-full h-auto"
//               unoptimized
//             />
//           </div>

//           {/* Profile Content - Right Column */}
//           <div className="w-full md:w-2/3">
//             <h1 className="text-4xl md:text-5xl font-light text-gray-700 mb-6">
//               {teamMember.name}
//             </h1>
//             <p className="text-gray-600">
//               Etiam porta sem malesuada magna mollis euismod. Integer posuere
//               erat a ante venenatis dapibus posuere velit aliquet. Fusce
//               dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
//               ut fermentum massa justo sit amet risus. Nulla vitae elit libero,
//               a pharetra augue. Sed posuere consectetur est at lobortis.
//               Vestibulum id ligula porta felis euismod semper.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="border-t border-b border-gray-200 py-4">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center">
//             <Link
//               href={`/team/${prevMember.slug}`}
//               className="flex items-center text-blue-500 hover:text-blue-700"
//             >
//               <ChevronLeft className="h-4 w-4 mr-1" />
//               <span>Prev. Staff</span>
//             </Link>

//             <Link href="/team" className="text-blue-500 hover:text-blue-700">
//               All Staff
//             </Link>

//             <Link
//               href={`/team/${nextMember.slug}`}
//               className="flex items-center text-blue-500 hover:text-blue-700"
//             >
//               <span>Next Staff</span>
//               <ChevronRight className="h-4 w-4 ml-1" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Testimonial Section */}
//       <div className="bg-blue-400 py-16 text-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
//             <div className="mb-8 md:mb-0">
//               <div className="flex items-center mb-6">
//                 <h2 className="text-xl mr-4">What clients say</h2>
//                 <Link
//                   href="#"
//                   className="text-sm border-b border-white hover:border-transparent"
//                 >
//                   See all testimonials
//                 </Link>
//               </div>
//               <div className="max-w-2xl">
//                 <blockquote className="text-2xl font-light mb-4">
//                   &quot;My company&apos;s Google rankings and overall site
//                   traffic improved dramatically after just a few months of
//                   working with this agency. The service we&apos;ve received from
//                   their team has consistently been above and beyond our
//                   expectations.&quot;
//                 </blockquote>
//               </div>
//             </div>

//             <div className="flex flex-col items-center">
//               <div className="w-20 h-20 rounded-full overflow-hidden mb-2 bg-blue-300">
//                 <Image
//                   src={avatar || "/placeholder.svg"}
//                   alt="Matthew Lee"
//                   width={80}
//                   height={80}
//                   className="w-full h-full object-cover"
//                   unoptimized
//                 />
//               </div>
//               <div className="text-center">
//                 <p className="font-medium">Matthew Lee</p>
//                 <p className="text-sm text-blue-100">IT department</p>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial Navigation Dots */}
//           <div className="flex justify-center mt-12">
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className={`w-2 h-2 rounded-full mx-1 ${
//                   i === 0 ? "bg-white" : "bg-blue-200"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Easy Share Section (hidden but included for completeness) */}
//       <div className="hidden">
//         [easy-share counters=1 counter_pos=&quot;inside&quot;
//         native=&quot;no&quot; hide_total=&quot;yes&quot;
//         fullwidth=&quot;yes&quot; fullwidth_fix=&quot;100&quot;]
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";
import avatar from "@/Images/avatar-4.png";
import { teamMembers } from "@/data/team-members";

// Skills component
const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

// Testimonial component
const Testimonial = ({
  quote,
  author,
  position,
  image,
  active,
}: {
  quote: string;
  author: string;
  position: string;
  image: any;
  active: boolean;
}) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
        >
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <h2 className="text-xl mr-4">What clients say</h2>
              <Link
                href="#"
                className="text-sm border-b border-white hover:border-transparent transition-colors"
              >
                See all testimonials
              </Link>
            </div>
            <div className="max-w-2xl">
              <blockquote className="text-2xl font-light mb-4">
                &quot;{quote}&quot;
              </blockquote>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-2 bg-blue-300 shadow-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="text-center">
              <p className="font-medium">{author}</p>
              <p className="text-sm text-blue-100">{position}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Project card component
const ProjectCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all"
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=200&width=300"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link
          href="#"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
        >
          View project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teamMember = teamMembers.find((member) => member.slug === slug);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!teamMember) {
    notFound();
  }

  // Find the index of the current team member
  const currentIndex = teamMembers.findIndex((member) => member.slug === slug);

  // Calculate previous and next team member indices
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : teamMembers.length - 1;
  const nextIndex =
    currentIndex < teamMembers.length - 1 ? currentIndex + 1 : 0;

  // Get previous and next team members
  const prevMember = teamMembers[prevIndex];
  const nextMember = teamMembers[nextIndex];

  // Sample testimonials
  const testimonials = [
    {
      quote:
        "My company's Google rankings and overall site traffic improved dramatically after just a few months of working with this agency. The service we've received from their team has consistently been above and beyond our expectations.",
      author: "Matthew Lee",
      position: "IT department",
      image: avatar,
    },
    {
      quote:
        "Working with this team has transformed our digital presence. Their strategic approach and attention to detail is unmatched in the industry.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      image: avatar,
    },
    {
      quote:
        "The expertise and professionalism shown by this team member helped us achieve results we didn't think were possible. Highly recommended!",
      author: "David Chen",
      position: "CEO, TechStart",
      image: avatar,
    },
  ];

  // Sample projects
  const projects = [
    {
      title: "E-commerce SEO Overhaul",
      description:
        "Complete SEO strategy and implementation for a major retail client, resulting in 150% increase in organic traffic.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Local Business Campaign",
      description:
        "Targeted local SEO and PPC campaign for a chain of restaurants, boosting foot traffic by 75%.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Content Marketing Strategy",
      description:
        "Developed and executed a comprehensive content strategy that doubled engagement metrics.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  // Sample skills
  const skills = [
    { skill: "SEO Strategy", level: 95 },
    { skill: "Content Marketing", level: 90 },
    { skill: "Social Media Management", level: 85 },
    { skill: "PPC Campaigns", level: 80 },
    { skill: "Analytics & Reporting", level: 92 },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
          >
            {/* Profile Image - Left Column */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full transform translate-x-4 translate-y-4 -z-10"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <Image
                    src={teamMember.avatar || "/placeholder.svg"}
                    alt={teamMember.name}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-full shadow-xl"
                    unoptimized
                  />
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center mt-6 space-x-4">
                <motion.a
                  whileHover={{ y: -3, color: "#0077B5" }}
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: "#1DA1F2" }}
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: "#4267B2" }}
                  href="#"
                  className="text-gray-500 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, color: "#EA4335" }}
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>

            {/* Profile Content - Right Column */}
            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {teamMember.position}
                </div>
                <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  {teamMember.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Etiam porta sem malesuada magna mollis euismod. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
                    <span>8+ years experience</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2 text-blue-500" />
                    <span>Google Analytics Certified</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                    <span>15+ successful projects</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md"
                >
                  Contact {teamMember.name.split(" ")[0]}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills & Expertise Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">
              Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-6">
                  Core Competencies
                </h3>
                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.skill}
                    level={skill.level}
                  />
                ))}
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-6">
                  Areas of Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    "Search Engine Optimization",
                    "Content Strategy",
                    "Digital Marketing",
                    "Social Media Management",
                    "Analytics & Reporting",
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <Star className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{area}</h4>
                        <p className="text-gray-600 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-light text-gray-800">
                Featured Projects
              </h2>
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-700 flex items-center transition-colors"
              >
                View all projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-b border-gray-200 py-4 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div whileHover={{ x: -3 }}>
              <Link
                href={`/team/${prevMember.slug}`}
                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Previous Team Member</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/team"
                className="text-blue-500 hover:text-blue-700 transition-colors px-4 py-2 border border-blue-200 rounded-md hover:bg-blue-50"
              >
                All Team Members
              </Link>
            </motion.div>

            <motion.div whileHover={{ x: 3 }}>
              <Link
                href={`/team/${nextMember.slug}`}
                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
              >
                <span>Next Team Member</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-blue-500 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
              active={index === activeTestimonial}
            />
          ))}

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-12">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                className={`w-3 h-3 rounded-full mx-1.5 focus:outline-none ${
                  i === activeTestimonial ? "bg-white" : "bg-blue-300"
                }`}
                onClick={() => setActiveTestimonial(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Ready to work with {teamMember.name}?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch today to discuss how {teamMember.name.split(" ")[0]}{" "}
              can help your business achieve its digital marketing goals and
              drive measurable results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-blue-500 mr-3" />
                <h2 className="text-2xl font-light text-gray-800">
                  Schedule a Meeting
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Choose a convenient time to discuss your project with{" "}
                {teamMember.name}. Our calendar is updated in real-time to show
                availability.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md flex items-center"
              >
                View Calendar <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>

            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="text-center p-4 bg-blue-50 rounded-md mb-4">
                <h3 className="font-medium text-gray-800">April 2025</h3>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={i}
                    className="text-center text-sm text-gray-500 py-2"
                  >
                    {day}
                  </div>
                ))}
                {Array.from({ length: 30 }, (_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: "#EBF5FF" }}
                    className={`text-center py-2 rounded-md cursor-pointer ${
                      [2, 5, 12, 15, 22, 25].includes(i)
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
