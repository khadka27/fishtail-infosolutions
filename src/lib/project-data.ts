import project1 from "@/Images/case1.png"
import project2 from "@/Images/case2.png"
import project3 from "@/Images/case3.png"
import logo1 from "@/Images/logo1.png"
import logo2 from "@/Images/logo2.png"
import logo3 from "@/Images/logo3.png"
import logo4 from "@/Images/logo4.png"
import logo5 from "@/Images/logo5.png"
import logo6 from "@/Images/logo-6.png"

// Project data structure
export const projects = [
  {
    id: "opertray-division",
    title: "Opertray Division",
    category: "Web Design",
    image: project1,
    bgColor: "bg-cyan-500",
    description:
      "A comprehensive web design project that transformed the client's online presence and user experience.",
  },
  {
    id: "tremely-designs",
    title: "Tremely Designs",
    category: "SEO Optimization",
    image: project2,
    bgColor: "bg-blue-700",
    description: "Strategic SEO optimization that increased organic traffic by 150% and improved search rankings.",
  },
  {
    id: "plainst-tech",
    title: "Plainst Tech",
    category: "Digital Marketing",
    image: project3,
    bgColor: "bg-lime-500",
    description: "A comprehensive digital marketing campaign that boosted brand awareness and customer engagement.",
  },
  {
    id: "maindex-solutions",
    title: "Maindex Solutions",
    category: "Web Development",
    image: project1,
    bgColor: "bg-sky-500",
    description: "Custom web development solutions that streamlined operations and enhanced customer experience.",
  },
  {
    id: "existernal-ltd",
    title: "Existernal Ltd.",
    category: "Analytics",
    image: project2,
    bgColor: "bg-lime-500",
    description: "Data analytics implementation that provided actionable insights and drove strategic decision-making.",
  },
  {
    id: "coderama",
    title: "Coderama",
    category: "App Development",
    image: project3,
    bgColor: "bg-amber-500",
    description: "Mobile app development that expanded the client's digital footprint and user engagement.",
  },
]

// Client logos
export const clientLogos = [
  { name: "University", image: logo1 },
  { name: "Academy", image: logo2 },
  { name: "University Academy", image: logo3 },
  { name: "Athletics", image: logo4 },
  { name: "University Shield", image: logo5 },
  { name: "Cross Sport", image: logo6 },
]

// Get unique categories for filter
export const categories = ["All", ...new Set(projects.map((project) => project.category))]

