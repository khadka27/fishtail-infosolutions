import type { StaticImageData } from "next/image";

export type TeamMember = {
  name: string;
  position: string;
  avatar: string | StaticImageData;
  bgColor: string;
  slug: string;
  bio: string;
  department: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  expertise?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Rahul Rauniyar",
    position: "CEO of Fishtail Info Solutions",
    department: "Management",
    avatar: "/Image/rahul-rauniyar.jpeg",
    bgColor: "bg-red-100",
    slug: "rahul-rauniyar",
    bio: "Rahul leads Fishtail Info Solutions with over 10 years of experience in digital marketing and innovative strategies that drive results for our clients.",
    email: "rahul@fishtailinfosolutions.com",
    linkedin: "https://linkedin.com/in/rahul-rauniyar",
  },
  {
    name: "Bikash Gupta",
    position: "SEO Specialist",
    department: "SEO",
    avatar: "/Image/bikash-gupta.jpeg",
    bgColor: "bg-blue-300",
    slug: "bikash-gupta",
    bio: "Bikash specializes in search engine optimization and has helped numerous clients achieve top rankings for competitive keywords.",
    email: "bikash@fishtailinfosolutions.com",
    expertise: ["SEO", "Keyword Research", "Content Optimization"],
  },
  {
    name: "Rahul Gupta",
    position: "Senior Content Writer",
    department: "Content",
    avatar: "/Image/rahul-gupta.jpg",
    bgColor: "bg-blue-500",
    slug: "rahul-gupta",
    bio: "Rahul crafts in-depth content strategies that align with brand goals and resonate with target audiences. With strong editorial experience, he elevates brand voice across all channels.",
    email: "rahul@fishtailinfosolutions.com",
    linkedin: "https://linkedin.com/in/rahul-gupta",
    expertise: ["Content Strategy", "SEO Writing", "Team Management"],
  },
  {
    name: "Abishek Khadka",
    position: "Full Stack Developer",
    department: "Development",
    avatar: "/Image/abishek-khadka.png",
    bgColor: "bg-green-400",
    slug: "abishek-khadka",
    bio: "Abishek develops robust web applications using modern technologies, ensuring our clients have scalable and maintainable solutions. He is highly skilled in React and Next.js with backend integration.",
    email: "abishekkhadka@fishtailinfosolutions.com",
    linkedin: "https://linkedin.com/in/khadka27",
    expertise: ["React", "Next.js", "Node.js", "Database Design"],
  },
  {
    name: "Ashish Rauniyar",
    position: "Human Resources Director",
    department: "HR",
    avatar: "/Image/ashish.jpeg",
    bgColor: "bg-teal-300",
    slug: "ashish-rauniyar",
    bio: "Ashish oversees our human resources department, ensuring we attract and retain top talent while maintaining a positive company culture.",
    email: "ashish@fishtailinfosolutions.com",
    linkedin: "https://linkedin.com/in/ashish-rauniyar",
  },
  {
    name: "Pratikshya Sheersh",
    position: "Marketing Specialist",
    department: "Marketing",
    avatar: "/Image/partikshya.jpeg",
    bgColor: "bg-red-300",
    slug: "pratikshya-sheersh",
    bio: "Pratikshya specializes in creating and implementing marketing campaigns that deliver measurable results for our clients.",
    email: "pratikshya@fishtailinfo.com",
    twitter: "https://twitter.com/pratikshya",
    expertise: ["Digital Marketing", "Campaign Management", "Analytics"],
  },
  {
    name: "Diwas Gurung",
    position: "Frontend Developer",
    department: "Development",
    avatar: "/Image/diwas-gurung.jpg",
    bgColor: "bg-blue-200",
    slug: "diwas-gurung",
    bio: "Diwas creates beautiful, responsive user interfaces using modern frontend technologies like React and Next.js.",
    email: "diwasgrg@fishtailinfosolutions.com",
    linkedin: "https://linkedin.com/in/diwas-gurung",
    expertise: ["React", "CSS", "UI/UX"],
  },

  {
    name: "Mamata Bhattarai",
    position: "Jr. Content Writer",
    department: "Content",
    avatar: "/Image/mamata-bhattarai.jpg",
    bgColor: "bg-yellow-200",
    slug: "mamata-bhattarai",
    bio: "Mamata is passionate about crafting compelling content that connects with audiences and boosts brand storytelling. She is skilled in transforming ideas into engaging blog posts and SEO-rich web pages. Her attention to detail ensures content is always polished and professional.",
    email: "mamata@fishtailinfosolutions.com",
    expertise: ["Blog Writing", "SEO Content", "Proofreading"],
  },
  {
    name: "Tilamsmi Subedi",
    position: "Jr. Content Writer",
    department: "Content",
    avatar: "/Image/tilamsmi-subadhi.jpg",
    bgColor: "bg-purple-200",
    slug: "tilamsmi-subadhi",
    bio: "Tilamsmi contributes creative and engaging content to support client SEO goals and build consistent messaging. Her writing style is clear, impactful, and tailored to specific brand voices. She’s always researching new trends to keep content fresh and relevant.",
    email: "tilamsmi@fishtailinfosolutions.com",
    expertise: ["Content Research", "SEO Writing", "Grammar Editing"],
  },
  {
    name: "Sadikshya Budhathoki",
    position: "Jr. Content Writer",
    department: "Content",
    avatar: "/Image/sadikshya-budhathoki.jpg",
    bgColor: "bg-pink-200",
    slug: "sadikshya-budhathoki",
    bio: "Sadikshya delivers polished content that blends creativity with optimization to enhance digital visibility. She excels at turning complex topics into easy-to-read articles that engage readers. Her strength lies in crafting content strategies that build brand trust.",
    email: "sadikshya@fishtailinfosolutions.com",
    expertise: ["Copywriting", "Content Strategy", "Editing"],
  },
  {
    name: "Prity Thapa",
position: "Jr. Content Writer",
department: "Content",
avatar: "/Image/prity-thapa.jpg",
bgColor: "bg-pink-200",
slug: "prity-thapa",
bio: "Prity brings a fresh voice to the content team with her knack for clear and compelling storytelling. She specializes in creating engaging content that aligns with brand goals and connects with target audiences. Her dedication to learning and adapting makes her a valuable asset in dynamic content projects.",
email: "prity@fishtailinfosolutions.com",
expertise: ["Copywriting", "Content Strategy", "Editing"],

  },
];
