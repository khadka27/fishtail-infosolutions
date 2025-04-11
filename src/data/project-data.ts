// Sample data for the case studies page
export const categories = ["All", "Education", "Lead Generation", "UG Courses", "PG Lead Generation"]

export const projects = [
  {
    id: "eduversity-academy",
    title: "EduVersity Academy",
    category: "Lead Generation",
    subcategory: "Education",
    description:
      "Strategic lead generation campaign for EduVersity Academy increasing qualified student inquiries by 45%.",
    image: "/placeholder.svg?height=300&width=400",
    logo: "/placeholder.svg?height=100&width=200",
    bgColor: "bg-blue-50",
    stats: "45% Increase in Leads",
    featured: true,
  },
  {
    id: "upgrad-education",
    title: "UpGrad Education",
    category: "Lead Generation",
    subcategory: "Education",
    description:
      "Comprehensive digital marketing strategy for UpGrad Education focusing on lead generation and conversion optimization.",
    image: "/placeholder.svg?height=300&width=400",
    logo: "/placeholder.svg?height=100&width=200",
    bgColor: "bg-red-50",
    stats: "38% Higher Conversion Rate",
    featured: true,
  },
  {
    id: "nmims-university",
    title: "NMIMS University",
    category: "Lead Generation",
    subcategory: "Education",
    description:
      "Multi-channel lead generation campaign for NMIMS University targeting prospective students across India.",
    image: "/placeholder.svg?height=300&width=400",
    logo: "/placeholder.svg?height=100&width=200",
    bgColor: "bg-gray-50",
    stats: "52% Growth in Applications",
    featured: true,
  },
  {
    id: "doorasth-shiksha",
    title: "Doorasth Shiksha",
    category: "UG Courses",
    subcategory: "Education",
    description:
      "Targeted campaign for Doorasth Shiksha's undergraduate courses, focusing on student acquisition and brand awareness.",
    image: "/placeholder.svg?height=300&width=400",
    logo: "/placeholder.svg?height=100&width=200",
    bgColor: "bg-indigo-50",
    stats: "65% Increase in Enrollment",
    featured: false,
  },
  {
    id: "shikshanerd",
    title: "ShikshaNerd",
    category: "PG Lead Generation",
    subcategory: "Education",
    description:
      "Specialized lead generation strategy for ShikshaNerd's postgraduate programs targeting working professionals.",
    image: "/placeholder.svg?height=300&width=400",
    logo: "/placeholder.svg?height=100&width=200",
    bgColor: "bg-amber-50",
    stats: "42% Increase in Qualified Leads",
    featured: false,
  },
  {
    id: "manipal-university",
    title: "Manipal University",
    category: "Lead Generation",
    subcategory: "Education",
    description:
      "Comprehensive lead generation and nurturing campaign for Manipal University's various academic programs.",
    image: "/placeholder.svg?height=300&width=400",
    logo: "/placeholder.svg?height=100&width=200",
    bgColor: "bg-emerald-50",
    stats: "58% Higher Enrollment Rate",
    featured: false,
  },
]

export const clientLogos = [
  { name: "EduVersity", image: "/placeholder.svg?height=80&width=120" },
  { name: "UpGrad", image: "/placeholder.svg?height=80&width=120" },
  { name: "NMIMS", image: "/placeholder.svg?height=80&width=120" },
  { name: "Doorasth Shiksha", image: "/placeholder.svg?height=80&width=120" },
  { name: "ShikshaNerd", image: "/placeholder.svg?height=80&width=120" },
  { name: "Manipal University", image: "/placeholder.svg?height=80&width=120" },
]

export const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Director of Admissions",
    institution: "NMIMS University",
    quote:
      "Fishtail InfoSolutions transformed our digital marketing approach. Their team's deep understanding of the education sector and innovative lead generation strategies helped us increase our application numbers by 52% year-over-year. They're not just a vendor but a true partner in our growth.",
    rating: 5,
    avatar: "👨‍🎓",
  },
  {
    name: "Prof. Meera Sharma",
    role: "Marketing Head",
    institution: "UpGrad Education",
    quote:
      "Working with Fishtail has been a game-changer for our online programs. Their data-driven approach and expertise in education marketing helped us achieve a 38% increase in conversion rates while reducing our cost per acquisition.",
    rating: 5,
    avatar: "👩‍🏫",
  },
]

export const marketingStats = [
  { label: "Educational Clients", value: "25+", icon: "🎓" },
  { label: "Lead Increase", value: "48%", icon: "📈" },
  { label: "Enrollment Growth", value: "32%", icon: "👨‍🎓" },
  { label: "ROI Improvement", value: "3.5x", icon: "💰" },
]

export const approachSteps = [
  {
    title: "Research & Strategy",
    description: "We analyze your target audience, competition, and market trends to develop a tailore strategy.",
    icon: "🔍",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Implementation",
    description: "Our team executes multi-channel campaigns designed to reach and engage your ideal students.",
    icon: "🚀",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Optimization & Scaling",
    description: "We continuously monitor, test, and refine to improve performance and scale successful tactics.",
    icon: "📈",
    color: "bg-purple-100 text-purple-800",
  },
]

// Function to get a project by ID
export function getProjectById(id: string) {
  return projects.find((project) => project.id === id) || null
}
