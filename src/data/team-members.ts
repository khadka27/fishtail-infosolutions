

/* eslint-disable @typescript-eslint/no-explicit-any */
import avatar from "@/Images/abhisek.webp"
import type { StaticImageData } from "next/image"





export type TeamMember = {
  name: string;
  position: string;
  avatar: StaticImageData;
  bgColor: string;
  slug: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Rahul Rauniyar",
    position: "CEO of fistail info solutions",

    avatar: abi,

    bgColor: "bg-red-100",
    slug: "rahul-runiyar",
    bio: "Maria has over 10 years of experience in digital marketing and leads our marketing team with innovative strategies that drive results for our clients.",
  },
  {
    name: "Bishal Gupta",
    position: "SEO Specialist",

    avatar: abi,

    bgColor: "bg-blue-300",
    slug: "rajan-rauniyar",
    bio: "Angela specializes in search engine optimization and has helped numerous clients achieve top rankings for competitive keywords.",
  },
  {
    name: "Rahul Gupta",
    position: "SEO Manager",
    avatar: abi,
    bgColor: "bg-blue-500",
    slug: "rahul-gupta",
    bio: "Millie develops content strategies that engage audiences and drive conversions. Her background in journalism helps her create compelling narratives.",
  },
  {
    name: "Abishek Khadka",

    position: "Full Stack Developer",
    avatar: abi,

    bgColor: "bg-green-400",
    slug: "callum-bailey",
    bio: "Callum manages social media campaigns that build brand awareness and community engagement across multiple platforms.",
  },
  {
    name: "Ashish Rauniyar",
    position: "Human Resources Director",

    avatar: abi,

    bgColor: "bg-teal-300",
    slug: "daisy-howarth",
    bio: "Daisy oversees our human resources department, ensuring we attract and retain top talent while maintaining a positive company culture.",
  },
  {
    name: "Pratikshya Sheersh",
    position: "Marketing Specialist",

    avatar: abi,

    bgColor: "bg-red-300",
    slug: "abby-banks",
    bio: "Abby specializes in creating and implementing marketing campaigns that deliver measurable results for our clients.",
  },
  {
    name: "Diwas Gurung",
    position: "Frontend Developer",
    avatar: abi,
    bgColor: "bg-blue-200",
    slug: "maisie-wade",
    bio: "Maisie is an expert in both search engine optimization and search engine marketing, helping clients improve their online visibility.",
  },
  {
    name: "Peter Spencer",
    position: "Web Designer",
    avatar: abi,
    bgColor: "bg-blue-600",
    slug: "peter-spencer",
    bio: "Peter creates beautiful, functional websites that provide excellent user experiences while meeting business objectives.",
  },
];
