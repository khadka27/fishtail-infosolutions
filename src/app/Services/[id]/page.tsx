import { Header } from "@/Components/Header";
import { Footer } from "@/Components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/Components/ui/button";

// Service data (would typically come from a database or API)
const services = {
  "industry-news": {
    title: "Industry News",
    description:
      "Up-to-date industry related posts that inform, educate and entertain readers leading to an increase in social media engagement, improve your online reputation and gain credibility.",
    longDescription: `
      <p>Our Industry News service keeps your audience informed with the latest developments, trends, and innovations in your field. We research, write, and publish timely articles that position your brand as a thought leader and trusted source of information.</p>
      
      <h3>Benefits of our Industry News service:</h3>
      <ul>
        <li>Establish your brand as an authority in your industry</li>
        <li>Increase website traffic through regular, relevant content</li>
        <li>Improve SEO rankings with fresh, keyword-rich content</li>
        <li>Boost social media engagement with shareable news articles</li>
        <li>Build trust with your audience through consistent, valuable information</li>
      </ul>
      
      <h3>Our process:</h3>
      <ol>
        <li>Research trending topics and developments in your industry</li>
        <li>Identify news angles that align with your brand and audience interests</li>
        <li>Create well-written, informative articles with proper citations</li>
        <li>Optimize content for search engines and readability</li>
        <li>Publish and promote across your digital channels</li>
      </ol>
      
      <p>Whether you need weekly industry updates, monthly trend reports, or breaking news coverage, our team of experienced writers can deliver high-quality content that keeps your audience engaged and positions your brand as an industry leader.</p>
    `,
    image: "/placeholder.svg?height=400&width=600&text=Industry+News",
    features: [
      "Timely and relevant industry updates",
      "SEO-optimized content",
      "Social media ready format",
      "Fact-checked and properly sourced information",
      "Custom publishing schedule to meet your needs",
    ],
  },
  "case-studies": {
    title: "Case Studies",
    description:
      "Inspire confidence in your target audience with in-depth reports to summarize projects from start to finish and explicitly document the results achieved in performance measures.",
    longDescription: `
      <p>Our Case Studies service transforms your successful projects into compelling stories that showcase your expertise and results. We create detailed, persuasive case studies that highlight your problem-solving abilities and the concrete benefits you deliver to clients.</p>
      
      <h3>Benefits of our Case Studies service:</h3>
      <ul>
        <li>Build credibility with potential clients by showcasing real results</li>
        <li>Provide social proof of your expertise and effectiveness</li>
        <li>Create valuable content for multiple marketing channels</li>
        <li>Support sales teams with persuasive materials</li>
        <li>Differentiate your business from competitors</li>
      </ul>
      
      <h3>Our process:</h3>
      <ol>
        <li>Interview key stakeholders to gather project details</li>
        <li>Develop a narrative structure that highlights challenges, solutions, and results</li>
        <li>Create a compelling case study with supporting data and testimonials</li>
        <li>Design professional layouts with charts, graphs, and visuals</li>
        <li>Deliver in multiple formats for various marketing channels</li>
      </ol>
      
      <p>Our case studies are designed to be versatile marketing assets that can be used on your website, in sales presentations, as downloadable resources, and across social media to demonstrate your value proposition with concrete examples.</p>
    `,
    image: "/placeholder.svg?height=400&width=600&text=Case+Studies",
    features: [
      "Professional interview process",
      "Data visualization and graphic design",
      "Multiple format options (PDF, web, presentation)",
      "SEO-optimized for digital publishing",
      "Strategic distribution recommendations",
    ],
  },
  // Additional services would be defined here
};

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const service = services[params.id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">
              The service you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center text-white hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
          <p className="text-xl">{service.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: service.longDescription }}
            />

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
