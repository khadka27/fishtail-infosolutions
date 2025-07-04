/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          domains: [
               "img.freepik.com",
               "cdn-icons-png.freepik.com",
               "www.freepik.com",
               "fishtail-infosolutions.vercel.app",
               "fishtailinfosolutions.com",
          ],
          // Add this to ensure proper static image handling
          dangerouslyAllowSVG: true,
          contentDispositionType: "attachment",
          contentSecurityPolicy:
               "default-src 'self'; script-src 'none'; sandbox;",
          // If you need to optimize remotely hosted images from unknown domains
          remotePatterns: [
               {
                    protocol: "https",
                    hostname: "**",
               },
          ],
     },
};

module.exports = nextConfig;
