"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar() {
     const [searchTerm, setSearchTerm] = useState("");
     const [isFocused, setIsFocused] = useState(false);

     const handleSearch = (e: React.FormEvent) => {
          e.preventDefault();
          // In a real app, you would implement search functionality
          console.log("Searching for:", searchTerm);
     };

     const clearSearch = () => {
          setSearchTerm("");
     };

     return (
          <form onSubmit={handleSearch} className="relative flex-1">
               <div
                    className={`relative flex items-center transition-all ${
                         isFocused ? "ring-2 ring-[#0084FF]/50 rounded-lg" : ""
                    }`}
               >
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                         type="text"
                         placeholder="Search articles..."
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                         onFocus={() => setIsFocused(true)}
                         onBlur={() => setIsFocused(false)}
                         className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none"
                    />
                    {searchTerm && (
                         <button
                              type="button"
                              onClick={clearSearch}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              aria-label="Clear search"
                         >
                              <X className="h-4 w-4" />
                         </button>
                    )}
               </div>

               {/* Search suggestions - shown when input is focused and has content */}
               {isFocused && searchTerm && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                         <div className="p-2 text-sm text-gray-500">
                              Suggested searches:
                         </div>
                         {[
                              "SEO tips",
                              "Link building",
                              "Content marketing",
                              "Technical SEO",
                         ]
                              .filter((suggestion) =>
                                   suggestion
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                              )
                              .map((suggestion) => (
                                   <button
                                        key={suggestion}
                                        type="button"
                                        onClick={() =>
                                             setSearchTerm(suggestion)
                                        }
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                   >
                                        {suggestion}
                                   </button>
                              ))}
                    </div>
               )}
          </form>
     );
}
