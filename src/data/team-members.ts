import type { StaticImageData } from "next/image";

export type TeamMember = {
  name: string;
  position: string;
  avatar: string | StaticImageData;
  bgColor: string;
  slug: string;
  bio: string;
  department: string;
  email?: string; // Optional
  linkedin?: string; // Optional
  twitter?: string; // Optional
  expertise?: string[]; // Optional
};

export const teamMembers: TeamMember[] = [
  {
    name: "Rahul Rauniyar",
    position: "CEO of Fishtail Info Solutions",
    department: "Management",
    avatar: "/Image/rahul-rauniyar.jpeg",
    bgColor: "bg-red-100",
    slug: "rahul-rauniyar", // Fixed typo in slug
    bio: "Rahul leads Fishtail Info Solutions with over 10 years of experience in digital marketing and innovative strategies that drive results for our clients.",
    email: "rahul@fishtailinfo.com",
    linkedin: "https://linkedin.com/in/rahul-rauniyar",
  },
  {
    name: "Bishal Gupta",
    position: "SEO Specialist",
    department: "SEO",
    avatar: "/Image/bishal-gupta.jpeg",
    bgColor: "bg-blue-300",
    slug: "bishal-gupta", // Fixed incorrect slug
    bio: "Bishal specializes in search engine optimization and has helped numerous clients achieve top rankings for competitive keywords.",
    email: "bishal@fishtailinfo.com",
    expertise: ["SEO", "Keyword Research", "Content Optimization"],
  },
  {
    name: "Rahul Gupta",
    position: "SEO Manager",
    department: "SEO",
    avatar: "/Image/abishek-khadka.png", // Note: Using same image as Abishek
    bgColor: "bg-blue-500",
    slug: "rahul-gupta",
    bio: "Rahul oversees our SEO strategies and implementations, ensuring our clients achieve maximum visibility in search results.",
    email: "rahulg@fishtailinfo.com",
    linkedin: "https://linkedin.com/in/rahul-gupta",
    expertise: ["SEO Strategy", "Analytics", "Team Management"],
  },
  {
    name: "Abishek Khadka",
    position: "Full Stack Developer",
    department: "Development",
    avatar: "/Image/abishek-khadka.png",
    bgColor: "bg-green-400",
    slug: "abishek-khadka", // Fixed incorrect slug
    bio: "Abishek develops robust web applications using modern technologies, ensuring our clients have scalable and maintainable solutions.",
    email: "abishek@fishtailinfo.com",
    linkedin: "https://linkedin.com/in/abishek-khadka",
    expertise: ["React", "Node.js", "Database Design"],
  },
  {
    name: "Ashish Rauniyar",
    position: "Human Resources Director",
    department: "HR",
    avatar: "/Image/ashish.jpeg",
    bgColor: "bg-teal-300",
    slug: "ashish-rauniyar", // Fixed incorrect slug
    bio: "Ashish oversees our human resources department, ensuring we attract and retain top talent while maintaining a positive company culture.",
    email: "ashish@fishtailinfo.com",
    linkedin: "https://linkedin.com/in/ashish-rauniyar",
  },
  {
    name: "Pratikshya Sheersh",
    position: "Marketing Specialist",
    department: "Marketing",
    avatar: "/Image/partikshya.jpeg",
    bgColor: "bg-red-300",
    slug: "pratikshya-sheersh", // Fixed incorrect slug
    bio: "Pratikshya specializes in creating and implementing marketing campaigns that deliver measurable results for our clients.",
    email: "pratikshya@fishtailinfo.com",
    twitter: "https://twitter.com/pratikshya",
    expertise: ["Digital Marketing", "Campaign Management", "Analytics"],
  },
  {
    name: "Diwas Gurung",
    position: "Frontend Developer",
    department: "Development",
    avatar: "/Image/abishek-khadka.png", // Note: Using same image as Abishek
    bgColor: "bg-blue-200",
    slug: "diwas-gurung", // Fixed incorrect slug
    bio: "Diwas creates beautiful, responsive user interfaces using modern frontend technologies like React and Next.js.",
    email: "diwas@fishtailinfo.com",
    linkedin: "https://linkedin.com/in/diwas-gurung",
    expertise: ["React", "CSS", "UI/UX"],
  },
  {
    name: "Peter Spencer",
    position: "Web Designer",
    department: "Design",
    avatar: "/Image/abishek-khadka.png", // Note: Using same image as Abishek
    bgColor: "bg-blue-600",
    slug: "peter-spencer",
    bio: "Peter creates beautiful, functional websites that provide excellent user experiences while meeting business objectives.",
    email: "peter@fishtailinfo.com",
    linkedin: "https://linkedin.com/in/peter-spencer",
    expertise: ["UI Design", "Wireframing", "Prototyping"],
  },
];
