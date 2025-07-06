import { StaticImageData } from "next/image";

export interface Project {
     id: string;
     title: string;
     category: string;
     subcategory: string;
     description: string;
     image: StaticImageData | string;
     logo: string;
     bgColor: string;
     stats: string;
     featured: boolean;
}

export interface Testimonial {
     name: string;
     role: string;
     institution: string;
     quote: string;
     rating: number;
     avatar: string;
}
