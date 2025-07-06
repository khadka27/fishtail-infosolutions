"use client";

import { useState, useEffect } from "react";

export function useMobile() {
     const [isMobile, setIsMobile] = useState<boolean | null>(null);

     useEffect(() => {
          // Function to check if the screen is mobile
          const checkMobile = () => {
               setIsMobile(window.innerWidth < 768);
          };

          // Initial check
          checkMobile();

          // Add event listener for window resize
          window.addEventListener("resize", checkMobile);

          // Cleanup
          return () => window.removeEventListener("resize", checkMobile);
     }, []);

     return isMobile;
}
