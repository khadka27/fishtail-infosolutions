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
     facebook?: string;
     github?: string;
     expertise?: string[];
     experience?: string[];
     projects?: string[];
     skills?: { skill: string; level: number }[];
};

export const teamMembers: TeamMember[] = [
     {
          name: "Rahul Rauniyar",
          position: "CEO of Fishtail Info Solutions",
          department: "Management",
          avatar: "/Image/rahul-rauniyar.jpg",
          bgColor: "",
          slug: "rahul-rauniyar",
          bio: "Rahul leads Fishtail Info Solutions with over 10 years of experience in digital marketing and innovative strategies that drive results for our clients.",
          email: "rahul@fishtailinfosolutions.com",
          linkedin: "https://in.linkedin.com/in/geekishrahul",
          twitter: "https://x.com/GeekishRahul",
          facebook: "https://www.facebook.com/GeekishRahul/",
          experience: ["10+ years in Digital Marketing"],
          projects: ["20 + Projects"],
          expertise: [
               "Digital Marketing Strategy",
               "SEO & SEM",
               "Content Marketing",
          ],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 95,
               },
               {
                    skill: "Content Marketing",
                    level: 90,
               },
               {
                    skill: "Social Media Management",
                    level: 85,
               },
               {
                    skill: "PPC Campaigns",
                    level: 80,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 92,
               },
          ],
     },
     {
          name: "Bikash Gupta",
          position: "SEO Specialist",
          department: "SEO",
          avatar: "/Image/bikash.png",
          bgColor: "",
          slug: "bikash-gupta",
          bio: "Bikash specializes in search engine optimization and has helped numerous clients achieve top rankings for competitive keywords.",
          email: "bikash@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "https://www.facebook.com/viikash.k?mibextid=JRoKGi",
          experience: ["1+ years in Digital Marketing"],
          projects: ["2+ Projects"],
          expertise: ["SEO", "Keyword Research", "Content Optimization"],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 90,
               },
               {
                    skill: "Content Marketing",
                    level: 85,
               },
               {
                    skill: "PPC Campaigns",
                    level: 70,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 80,
               },
          ],
     },
     {
          name: "Rahul Gupta",
          position: "Senior Content Writer",
          department: "Content",
          avatar: "/Image/rahul.png",
          bgColor: "",
          slug: "rahul-gupta",
          bio: "Rahul crafts in-depth content strategies that align with brand goals and resonate with target audiences. With strong editorial experience, he elevates brand voice across all channels.",
          email: "guptarahul@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "",
          experience: ["1+ years in Digital Marketing"],
          projects: ["2+ Projects"],
          expertise: ["Content Strategy", "SEO Writing", "Team Management"],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 85,
               },
               {
                    skill: "Content Marketing",
                    level: 90,
               },
               {
                    skill: "Social Media Management",
                    level: 80,
               },
               {
                    skill: "PPC Campaigns",
                    level: 75,
               },
          ],
     },
     {
          name: "Aakriti Rouniyar",
          position: "HR/SEO Analyst",
          department: "Management",
          avatar: "/Image/aakriti.png",
          bgColor: "",
          slug: "rouniyar-aakriti",
          bio: "Aakriti is experienced in HR and Finance, now expanding skills in SEO to contribute to digital marketing growth.",
          email: "aakriti@fishtailinfosolutions.com",
          linkedin: "https://www.linkedin.com/in/aakriti-rouniyar",
          twitter: "",
          facebook: "",
          experience: ["1+ years in Digital Marketing"],
          projects: ["2+ Projects"],
          expertise: ["Content Strategy", "SEO Writing", "Team Management"],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 75,
               },
               {
                    skill: "Content Marketing",
                    level: 60,
               },
               {
                    skill: "Social Media Management",
                    level: 70,
               },
               {
                    skill: "PPC Campaigns",
                    level: 65,
               },
          ],
     },
     {
          name: "Abishek Khadka",
          position: "Full Stack Developer",
          department: "Development",
          avatar: "/Image/abishek.png",
          bgColor: "bg-green-400",
          slug: "abishek-khadka",
          bio: "Abishek develops robust web applications using modern technologies, ensuring our clients have scalable and maintainable solutions. He is highly skilled in React and Next.js with backend integration.",
          email: "abishekkhadka@fishtailinfosolutions.com",
          linkedin: "https://linkedin.com/in/khadka27",
          twitter: "",
          facebook: "https://facebook.com/khadka27",
          github: "https://github.com/khadka27",
          expertise: ["React", "Next.js", "Node.js", "Database Design"],
          experience: ["1+ years in Web Development"],
          projects: ["8+ Projects"],
          skills: [
               { skill: "React.js", level: 90 },
               { skill: "Next.js", level: 90 },
               { skill: "Node.js", level: 85 },
               { skill: "Express.js", level: 80 },
               { skill: "MongoDB / PostgreSQL / mysql", level: 75 },
               { skill: "RESTful API / API Integration", level: 80 },
               { skill: "Prisma ORM / Mongoose", level: 75 },
               { skill: "Tailwind CSS / Bootstrap", level: 85 },
               { skill: "Git & GitHub", level: 80 },
               { skill: "Deployment (Vercel, DigitalOcean)", level: 70 },
          ],
     },
     {
          name: "Aashish Rauniyar",
          position: "Software Developer | Project Manager ",
          department: "Development",
          avatar: "/Image/asis.png",
          bgColor: "",
          slug: "ashish-rauniyar",
          bio: "Aashish is a passionate Software Developer and Project Manager with a strong foundation in building scalable web applications. With hands-on experience in full-stack development and DevOps practices, he excels at leading cross-functional teams to deliver high-quality software solutions on time and within scope. Known for his collaborative mindset and technical leadership, Aashish bridges the gap between development and project execution seamlessly.",
          email: "ashish@fishtailinfosolutions.com",
          linkedin: "https://linkedin.com/in/aashishprasadgupta",
          twitter: "",
          facebook: "",
          github: "https://github.com/AashishRauniyar",
          experience: ["1.5+ years in Software Development"],
          projects: ["5+ Employee Projects"],
          expertise: ["FrontEnd", "BackEnd", "DevOps", "Project Management"],
          skills: [
               {
                    skill: "DevOps",
                    level: 60,
               },
               {
                    skill: "FullStack Development",
                    level: 65,
               },
               {
                    skill: "Project Management",
                    level: 70,
               },
          ],
     },

     {
          name: "Elvik Sharma",
          position: "Software Developer",
          department: "Development",
          avatar: "/Image/elvik.png",
          bgColor: "",
          slug: "elvik-sharma",
          bio: "Elvik Sharma is a software developer with a passion for building web and mobile applications. He is also skilled in video editing and UI design. He is a quick learner and a team player.",
          email: "elvik@fishtailinfosolutions.com",
          linkedin: "https://www.linkedin.com/in/elvik-sharma-13b52b202/",
          twitter: "",
          facebook: "https://www.facebook.com/elvik111/",
          github: "https://github.com/elviks",
          experience: ["1+ years in Software Development"],
          projects: ["10+ Projects"],
          expertise: [
               "React",
               "Next",
               "React Native",
               "Express",
               "MongoDB",
               "UI/UX",
          ],
          skills: [
               {
                    skill: "React",
                    level: 75,
               },
               {
                    skill: "Next",
                    level: 60,
               },
               {
                    skill: "React Native",
                    level: 70,
               },
               {
                    skill: "MongoDB",
                    level: 70,
               },
               {
                    skill: "ExpressJs",
                    level: 60,
               },
               {
                    skill: "UI/UX",
                    level: 70,
               },
          ],
     },
     {
          name: "Pratikshya Srish",
          position: "Senior Content Writer",
          department: "Content",
          avatar: "/Image/pratikshya.png",
          bgColor: "",
          slug: "pratikshya-sheersh",
          bio: "Pratikshya specializes in creating and implementing marketing campaigns that deliver measurable results for our clients.",
          email: "pratikshya@fishtailinfo.com",
          linkedin: "https://www.linkedin.com/in/pratiksha-srish-175102256/",
          twitter: "",
          facebook: "",
          experience: ["1+ years in Digital Marketing"],
          projects: ["2+ Projects"],
          expertise: ["Digital Marketing", "Campaign Management", "Analytics"],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 75,
               },
               {
                    skill: "Content Marketing",
                    level: 80,
               },
               {
                    skill: "PPC Campaigns",
                    level: 90,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 85,
               },
          ],
     },
     {
          name: "Mamata Bhattarai",
          position: "Jr. Content Writer",
          department: "Content",
          avatar: "/Image/mamta.png",
          bgColor: "",
          slug: "mamata-bhattarai",
          bio: "Mamata is passionate about crafting compelling content that connects with audiences and boosts brand storytelling. She is skilled in transforming ideas into engaging blog posts and SEO-rich web pages. Her attention to detail ensures content is always polished and professional.",
          email: "mamata@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "",
          experience: ["1+ years in Content Writing"],
          projects: ["1+ Projects"],
          expertise: ["Blog Writing", "SEO Content", "Proofreading"],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 50,
               },
               {
                    skill: "Content Marketing",
                    level: 60,
               },
               {
                    skill: "PPC Campaigns",
                    level: 55,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 60,
               },
          ],
     },
     {
          name: "Tilasmi Subedi",
          position: "Content Writer / Video Content Creator",
          department: "Content",
          avatar: "/Image/tilasmi.png",
          bgColor: "",
          slug: "tilamsmi-subadhi",
          bio: "Tilami Subedi creates story and make video edits and handels facebook, youtube channels.",
          email: "tilamsmi@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "https://www.facebook.com/tilasmi.subedi.3",
          experience: ["1+ years in Video Creation"],
          projects: ["1+ Projects"],
          expertise: [
               "Content Writing",
               "Video Creation",
               "Content Generation",
          ],
          skills: [
               {
                    skill: "Video Creation",
                    level: 85,
               },
               {
                    skill: "Content Generation",
                    level: 65,
               },
               {
                    skill: "Content Writing",
                    level: 75,
               },
          ],
     },
     {
          name: "Anjana Poudel",
          position: "Content Writer / Video Content Creator",
          department: "Content",
          avatar: "/Image/anjana.png",
          bgColor: "",
          slug: "anjana-poudel",
          bio: "Anjana Poudel is an intern specializing in content creation, video editing, website management, and SEO. She is passionate about digital media and love creating engaging, impactful online content.",
          email: "anjanapoudel@fishtailinfosolutions.com",
          linkedin: "https://www.linkedin.com/in/anjanapoudel/",
          twitter: "",
          facebook: "",
          experience: ["1+ years in Content Writing"],
          projects: ["1+ Projects"],
          expertise: ["Content Research", "SEO Writing", "Grammar Editing"],
          skills: [
               {
                    skill: "Content Creation",
                    level: 65,
               },
               {
                    skill: "Video Editing",
                    level: 70,
               },
               {
                    skill: "SEO",
                    level: 50,
               },
               {
                    skill: "Digital Marketing",
                    level: 60,
               },
          ],
     },
     {
          name: "Sadikshya Budhathoki",
          position: "Jr. Content Writer",
          department: "Content",
          avatar: "/Image/sadikshya.png",
          bgColor: "",
          slug: "sadikshya-budhathoki",
          bio: "Sadikshya delivers polished content that blends creativity with optimization to enhance digital visibility. She excels at turning complex topics into easy-to-read articles that engage readers. Her strength lies in crafting content strategies that build brand trust.",
          email: "sadikshya@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "",
          experience: ["1+ years in Content Writing"],
          projects: ["1+ Projects"],
          expertise: ["Copywriting", "Content Strategy", "Editing"],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 50,
               },
               {
                    skill: "Content Marketing",
                    level: 40,
               },
               {
                    skill: "Social Media Management",
                    level: 70,
               },
               {
                    skill: "PPC Campaigns",
                    level: 80,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 92,
               },
          ],
     },
     {
          name: "Prity Thapa",
          position: "Jr. Content Writer",
          department: "Content",
          avatar: "/Image/prity.png",
          bgColor: "",
          slug: "prity-thapa",
          bio: "Prity brings a fresh voice to the content team with her knack for clear and compelling storytelling. She specializes in creating engaging content that aligns with brand goals and connects with target audiences. Her dedication to learning and adapting makes her a valuable asset in dynamic content projects.",
          email: "prity@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "",
          experience: ["1+ years in Content Writing"],
          projects: ["1+ Projects"],
          expertise: ["Copywriting", "Content Strategy", "Editing"],
          skills: [
               {
                    skill: "Content writing",
                    level: 60,
               },
               {
                    skill: "SEO Optimization",
                    level: 75,
               },
               {
                    skill: "Research",
                    level: 70,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 55,
               },
          ],
     },
     {
          name: "Monika Gharti",
          position: "Jr. Content Writer",
          department: "Content",
          avatar: "/Image/monika.png",
          bgColor: "",
          slug: "monika-gharti",
          bio: "Monika Gharti is a driven SEO content writer with a strong foundation in SEO principles, keyword research, and content optimization. Passionate about crafting compelling, search-engine-friendly content, she is eager to grow her expertise and contribute to digital success through content that connects with both audiences and algorithms.",
          email: "monikagrg@fishtailinfosolutions.com",
          linkedin: "www.linkedin.com/in/monika-gharti-08457735b",
          twitter: "",
          facebook:
               "https://www.facebook.com/share/1AnX5takge/?mibextid=wwXIfr",
          experience: ["Fresher"],
          projects: [""],
          expertise: [
               "SEO content writing",
               "strategic keyword research",
               "on-page content optimization",
          ],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 40,
               },
               {
                    skill: "Content Marketing",
                    level: 55,
               },
               {
                    skill: "PPC Campaigns",
                    level: 40,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 45,
               },
          ],
     },

     {
          name: "Bishal Kumar Gupta",
          position: "Jr. Content Writer",
          department: "Content",
          avatar: "/Image/bishal.png",
          bgColor: "",
          slug: "bishal-kumar-gupta",
          bio: "Bishal Kumar Gupta is a motivated SEO content writer with a solid understanding of SEO fundamentals, keyword analysis, and content optimization. He is enthusiastic about creating engaging and search-engine-optimized content that resonates with audiences and performs well algorithmically. Eager to expand he skills, he aims to contribute to digital growth through impactful content strategies.",
          email: "bishal@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "",
          experience: ["Fresher"],
          projects: [""],
          expertise: [
               "SEO content writing",
               "strategic keyword research",
               "on-page content optimization",
          ],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 50,
               },
               {
                    skill: "Content Marketing",
                    level: 65,
               },
               {
                    skill: "PPC Campaigns",
                    level: 50,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 65,
               },
          ],
     },
     {
          name: "Muna Pun",
          position: "Jr. Content Writer",
          department: "Content",
          avatar: "/Image/muna.png",
          bgColor: "",
          slug: "muna-pun",
          bio: "Muna Pun is a motivated SEO content writer with a solid grasp of SEO basics, keyword research, and content optimization. Eager to learn and grow, she’s focused on creating engaging content that ranks well on search engines.",
          email: "munapun@fishtailinfosolutions.com",
          linkedin: "",
          twitter: "",
          facebook: "",
          experience: ["Fresher"],
          projects: [""],
          expertise: [
               "SEO content writing",
               "strategic keyword research",
               "on-page content optimization",
          ],
          skills: [
               {
                    skill: "SEO Strategy",
                    level: 40,
               },
               {
                    skill: "Content Marketing",
                    level: 55,
               },
               {
                    skill: "PPC Campaigns",
                    level: 40,
               },
               {
                    skill: "Analytics & Reporting",
                    level: 45,
               },
          ],
     },
     {
          name: "Karuna Thapa",
          position: "SEO Analyst/ Video Content Creator",
          department: "Content",
          avatar: "/Image/karuna.png",
          bgColor: "",
          slug: "karuna-thapa",
          bio: "Karuna Thapa is an intern focused on content creation, video editing, website management, and SEO. With a strong passion for digital media, Karuna enjoys crafting engaging and meaningful online content that connects with audiences and makes an impact.",
          email: "karuna@fishtailinfosolutions.com",
          linkedin: "https://www.linkedin.com/in/karunathapa/",
          twitter: "",
          facebook: "",
          experience: ["Fresher"],
          projects: [""],
          expertise: [
               "Content Writing",
               "Video Creation",
               "Content Generation",
          ],
          skills: [
               {
                    skill: "Video Creation",
                    level: 75,
               },
               {
                    skill: "Content Generation",
                    level: 60,
               },
               {
                    skill: "Content Writing",
                    level: 75,
               },
          ],
     },

];
