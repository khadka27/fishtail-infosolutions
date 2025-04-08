import avatar from "@/Images/avatar-4.png";
import type { StaticImageData } from "next/image";

export type TeamMember = {
  name: string;
  position: string;
  avatar: StaticImageData | string;
  bgColor: string;
  slug: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Maria Murphy",
    position: "Marketing Director",
    avatar: avatar,
    bgColor: "bg-red-100",
    slug: "maria-murphy",
    bio: "Maria has over 10 years of experience in digital marketing and leads our marketing team with innovative strategies that drive results for our clients.",
  },
  {
    name: "Angela Leibius",
    position: "SEO Specialist",
    avatar: avatar,
    bgColor: "bg-blue-300",
    slug: "angela-leibius",
    bio: "Angela specializes in search engine optimization and has helped numerous clients achieve top rankings for competitive keywords.",
  },
  {
    name: "Millie Brown",
    position: "Content Strategist",
    avatar: avatar,
    bgColor: "bg-blue-500",
    slug: "millie-brown",
    bio: "Millie develops content strategies that engage audiences and drive conversions. Her background in journalism helps her create compelling narratives.",
  },
  {
    name: "Callum Bailey",
    position: "Social Media Manager",
    avatar: avatar,
    bgColor: "bg-green-400",
    slug: "callum-bailey",
    bio: "Callum manages social media campaigns that build brand awareness and community engagement across multiple platforms.",
  },
  {
    name: "Daisy Howarth",
    position: "Human Resources Director",
    avatar: avatar,
    bgColor: "bg-teal-300",
    slug: "daisy-howarth",
    bio: "Daisy oversees our human resources department, ensuring we attract and retain top talent while maintaining a positive company culture.",
  },
  {
    name: "Abby Banks",
    position: "Marketing Specialist",
    avatar: avatar,
    bgColor: "bg-red-300",
    slug: "abby-banks",
    bio: "Abby specializes in creating and implementing marketing campaigns that deliver measurable results for our clients.",
  },
  {
    name: "Maisie Wade",
    position: "SEO and SEM Specialist",
    avatar: avatar,
    bgColor: "bg-blue-200",
    slug: "maisie-wade",
    bio: "Maisie is an expert in both search engine optimization and search engine marketing, helping clients improve their online visibility.",
  },
  {
    name: "Abishek Khadka",
    position: "Full Stack Developer",
    avatar: "../Images/team/Abishek khadka.png", // Replace with your actual image URL
    bgColor: "bg-green-600",
    slug: "abishek-khadka",
    bio: "Abishek is a passionate full-stack developer who builds scalable and efficient web applications, ensuring great user experiences.",
  },
];
