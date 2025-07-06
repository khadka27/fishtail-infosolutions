"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// Define the dropdown menu items for each navigation link
const menuItems = {
     about: [
          { label: "Our Agency", href: "/about" },
          { label: "Our Team", href: "/team" },
          { label: "Pricing Packages", href: "/pricing" },
     ],
     services: [
          { label: "SEO Optimization", href: "/Services/search-engine" },
          { label: "Lead Generation", href: "/Services/lead-generation" },
          { label: "Social Media Marketing", href: "/Services/social-media" },
          { label: "Content Marketing", href: "/Services/content-marketing" },
          { label: "Web Development", href: "/Services/web-development" },
     ],
     projects: [{ label: "Case Studies", href: "/project" }],
     blog: [{ label: "Latest Articles", href: "/blog" }],
     contact: [
          { label: "Get in Touch", href: "/contact" },
          { label: "Instant SEO Services Quote", href: "/contact/seo" },
          {
               label: "Web Development Services Quote",
               href: "/contact/web-dev-quote",
          },
          { label: "Locations", href: "/contact/multiple" },
     ],
};

export function MobileMenu() {
     const [isOpen, setIsOpen] = useState(false);
     const [expandedItems, setExpandedItems] = useState<string[]>([]);

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };

     const toggleExpand = (item: string) => {
          if (expandedItems.includes(item)) {
               setExpandedItems(expandedItems.filter((i) => i !== item));
          } else {
               setExpandedItems([...expandedItems, item]);
          }
     };

     return (
          <div className="md:hidden">
               <button
                    onClick={toggleMenu}
                    className="text-gray-700 hover:text-blue-600 focus:outline-none"
               >
                    <Menu className="h-8 w-8" />
               </button>

               {/* Mobile menu overlay */}
               {isOpen && (
                    <div
                         className="fixed inset-0 z-50 bg-black bg-opacity-50"
                         onClick={toggleMenu}
                    >
                         <div
                              className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg overflow-y-auto"
                              onClick={(e) => e.stopPropagation()}
                         >
                              <div className="flex justify-between items-center p-5 border-b">
                                   <h2 className="text-xl font-bold">Menu</h2>
                                   <button
                                        onClick={toggleMenu}
                                        className="text-gray-500 hover:text-gray-700"
                                   >
                                        <X className="h-7 w-7" />
                                   </button>
                              </div>

                              <nav className="p-5">
                                   <ul className="space-y-3">
                                        {/* About */}
                                        <li className="border-b pb-3">
                                             <div
                                                  className="flex justify-between items-center py-2 cursor-pointer"
                                                  onClick={() =>
                                                       toggleExpand("about")
                                                  }
                                             >
                                                  <span className="font-medium text-lg">
                                                       About
                                                  </span>
                                                  <span className="text-base text-gray-500">
                                                       {expandedItems.includes(
                                                            "about"
                                                       )
                                                            ? "−"
                                                            : "+"}
                                                  </span>
                                             </div>
                                             {expandedItems.includes(
                                                  "about"
                                             ) && (
                                                  <ul className="pl-4 mt-2 space-y-2">
                                                       {menuItems.about.map(
                                                            (item, index) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                 >
                                                                      <Link
                                                                           href={
                                                                                item.href
                                                                           }
                                                                           className="block py-2 text-base text-gray-600 hover:text-blue-600"
                                                                           onClick={
                                                                                toggleMenu
                                                                           }
                                                                      >
                                                                           {
                                                                                item.label
                                                                           }
                                                                      </Link>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             )}
                                        </li>

                                        {/* Services */}
                                        <li className="border-b pb-3">
                                             <div
                                                  className="flex justify-between items-center py-2 cursor-pointer"
                                                  onClick={() =>
                                                       toggleExpand("services")
                                                  }
                                             >
                                                  <span className="font-medium text-lg">
                                                       Services
                                                  </span>
                                                  <span className="text-base text-gray-500">
                                                       {expandedItems.includes(
                                                            "services"
                                                       )
                                                            ? "−"
                                                            : "+"}
                                                  </span>
                                             </div>
                                             {expandedItems.includes(
                                                  "services"
                                             ) && (
                                                  <ul className="pl-4 mt-2 space-y-2">
                                                       {menuItems.services.map(
                                                            (item, index) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                 >
                                                                      <Link
                                                                           href={
                                                                                item.href
                                                                           }
                                                                           className="block py-2 text-base text-gray-600 hover:text-blue-600"
                                                                           onClick={
                                                                                toggleMenu
                                                                           }
                                                                      >
                                                                           {
                                                                                item.label
                                                                           }
                                                                      </Link>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             )}
                                        </li>

                                        {/* Projects */}
                                        <li className="border-b pb-3">
                                             <div
                                                  className="flex justify-between items-center py-2 cursor-pointer"
                                                  onClick={() =>
                                                       toggleExpand("projects")
                                                  }
                                             >
                                                  <span className="font-medium text-lg">
                                                       Projects
                                                  </span>
                                                  <span className="text-base text-gray-500">
                                                       {expandedItems.includes(
                                                            "projects"
                                                       )
                                                            ? "−"
                                                            : "+"}
                                                  </span>
                                             </div>
                                             {expandedItems.includes(
                                                  "projects"
                                             ) && (
                                                  <ul className="pl-4 mt-2 space-y-2">
                                                       {menuItems.projects.map(
                                                            (item, index) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                 >
                                                                      <Link
                                                                           href={
                                                                                item.href
                                                                           }
                                                                           className="block py-2 text-base text-gray-600 hover:text-blue-600"
                                                                           onClick={
                                                                                toggleMenu
                                                                           }
                                                                      >
                                                                           {
                                                                                item.label
                                                                           }
                                                                      </Link>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             )}
                                        </li>

                                        {/* Blog */}
                                        <li className="border-b pb-3">
                                             <div
                                                  className="flex justify-between items-center py-2 cursor-pointer"
                                                  onClick={() =>
                                                       toggleExpand("blog")
                                                  }
                                             >
                                                  <span className="font-medium text-lg">
                                                       Blog
                                                  </span>
                                                  <span className="text-base text-gray-500">
                                                       {expandedItems.includes(
                                                            "blog"
                                                       )
                                                            ? "−"
                                                            : "+"}
                                                  </span>
                                             </div>
                                             {expandedItems.includes(
                                                  "blog"
                                             ) && (
                                                  <ul className="pl-4 mt-2 space-y-2">
                                                       {menuItems.blog.map(
                                                            (item, index) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                 >
                                                                      <Link
                                                                           href={
                                                                                item.href
                                                                           }
                                                                           className="block py-2 text-base text-gray-600 hover:text-blue-600"
                                                                           onClick={
                                                                                toggleMenu
                                                                           }
                                                                      >
                                                                           {
                                                                                item.label
                                                                           }
                                                                      </Link>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             )}
                                        </li>

                                        {/* Contact */}
                                        <li className="border-b pb-3">
                                             <div
                                                  className="flex justify-between items-center py-2 cursor-pointer"
                                                  onClick={() =>
                                                       toggleExpand("contact")
                                                  }
                                             >
                                                  <span className="font-medium text-lg">
                                                       Contact
                                                  </span>
                                                  <span className="text-base text-gray-500">
                                                       {expandedItems.includes(
                                                            "contact"
                                                       )
                                                            ? "−"
                                                            : "+"}
                                                  </span>
                                             </div>
                                             {expandedItems.includes(
                                                  "contact"
                                             ) && (
                                                  <ul className="pl-4 mt-2 space-y-2">
                                                       {menuItems.contact.map(
                                                            (item, index) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                 >
                                                                      <Link
                                                                           href={
                                                                                item.href
                                                                           }
                                                                           className="block py-2 text-base text-gray-600 hover:text-blue-600"
                                                                           onClick={
                                                                                toggleMenu
                                                                           }
                                                                      >
                                                                           {
                                                                                item.label
                                                                           }
                                                                      </Link>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             )}
                                        </li>
                                   </ul>

                                   <div className="mt-8">
                                        <Link
                                             href="/quote"
                                             className="block w-full bg-green-500 text-white text-center py-3 rounded-md hover:bg-green-600 text-base font-medium"
                                             onClick={toggleMenu}
                                        >
                                             FREE QUOTE
                                        </Link>
                                   </div>
                              </nav>
                         </div>
                    </div>
               )}
          </div>
     );
}
