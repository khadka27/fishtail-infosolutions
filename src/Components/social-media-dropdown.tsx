import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export function SocialMediaDropdown() {
  return (
    <div className="text-gray-700">
      <Link
        href="https://x.com/fishtailinfo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Twitter className="h-6 w-6 text-blue-400 mr-3" />
        <span className="text-base">Twitter</span>
      </Link>

      <Link
        href="https://www.instagram.com/fishtailinfosolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Instagram className="h-6 w-6 text-pink-500 mr-3" />
        <span className="text-base">Instagram</span>
      </Link>

      <Link
        href="https://www.facebook.com/share/16Hxkk7xAb/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Facebook className="h-6 w-6 text-blue-600 mr-3" />
        <span className="text-base">Facebook</span>
      </Link>

      <Link
        href="https://www.linkedin.com/company/fishtailinfosolutions/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Linkedin className="h-6 w-6 text-blue-700 mr-3" />
        <span className="text-base">LinkedIn</span>
      </Link>
    </div>
  );
}
