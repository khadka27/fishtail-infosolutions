import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/footer";
import { Button } from "@/Components/ui/button";

// This would typically come from a database or API
const getProjectData = (id: string) => {
  const projects = {
    "opertray-division": {
      title: "Opertray Division",
      category: "Web Design",
      description:
        "A complete website redesign for Opertray Division, focusing on user experience and conversion optimization.",
      imageUrl:
        "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge:
        "The client needed a modern website that would better showcase their products and improve lead generation.",
      solution:
        "We created a responsive design with clear call-to-actions and an intuitive navigation structure.",
      results:
        "50% increase in time on site, 35% increase in lead generation, and 25% increase in conversion rate.",
    },
    "tremely-designs": {
      title: "Tremely Designs",
      category: "SEO Optimization",
      description:
        "Comprehensive SEO strategy for Tremely Designs to improve their search engine rankings and organic traffic.",
      imageUrl:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge:
        "The client was struggling to rank for key industry terms and had low organic traffic.",
      solution:
        "We implemented a comprehensive SEO strategy including technical SEO, content optimization, and link building.",
      results:
        "First page rankings for 15 target keywords, 120% increase in organic traffic, and 85% increase in organic leads.",
    },
    "plainst-tech": {
      title: "Plainst Tech",
      category: "Digital Marketing",
      description:
        "Integrated digital marketing campaign for Plainst Tech to increase brand awareness and lead generation.",
      imageUrl:
        "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge:
        "The client needed to increase brand awareness and generate more qualified leads.",
      solution:
        "We created a multi-channel digital marketing campaign including PPC, social media, and email marketing.",
      results:
        "200% increase in brand mentions, 75% increase in qualified leads, and 40% increase in sales.",
    },
    "maindex-solutions": {
      title: "Maindex Solutions",
      category: "Web Development",
      description:
        "Custom web application development for Maindex Solutions to streamline their internal processes.",
      imageUrl:
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge:
        "The client needed a custom web application to automate their manual processes and improve efficiency.",
      solution:
        "We developed a custom web application with user-friendly interfaces and powerful backend functionality.",
      results:
        "65% reduction in processing time, 80% reduction in errors, and 45% increase in productivity.",
    },
    "existernal-ltd": {
      title: "Existernal Ltd.",
      category: "Analytics",
      description:
        "Advanced analytics implementation for Existernal Ltd. to better understand their customer behavior.",
      imageUrl:
        "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge:
        "The client lacked visibility into customer behavior and couldn't make data-driven decisions.",
      solution:
        "We implemented advanced analytics tracking and created custom dashboards for key business metrics.",
      results:
        "Comprehensive understanding of customer journey, 30% increase in conversion rate, and 25% increase in average order value.",
    },
    coderama: {
      title: "Coderama",
      category: "App Development",
      description:
        "Mobile app development for Coderama to extend their digital presence to mobile platforms.",
      imageUrl:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge:
        "The client needed a mobile app to complement their web platform and reach users on mobile devices.",
      solution:
        "We developed a cross-platform mobile app with a seamless user experience and integration with their existing systems.",
      results:
        "50,000+ app downloads in the first month, 4.8/5 average rating, and 60% increase in user engagement.",
    },
  };

  return projects[id as keyof typeof projects] || null;
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/">
              <Button>Back to Home</Button>
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
            href="/"
            className="inline-flex items-center text-white hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-blue-200">{project.category}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-8">{project.description}</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  The Challenge
                </h3>
                <p className="text-gray-700">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  Our Solution
                </h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  The Results
                </h3>
                <p className="text-gray-700">{project.results}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg">Request Similar Project</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
