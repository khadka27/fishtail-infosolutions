import Link from "next/link"
import { Twitter, Instagram, Facebook, Youtube, Linkedin, VideoIcon as Vimeo } from "lucide-react"

export function SocialMediaDropdown() {
  return (
    <div className="text-gray-700">
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Twitter className="h-6 w-6 text-blue-400 mr-3" />
        <span className="text-base">Twitter</span>
      </Link>

      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Instagram className="h-6 w-6 text-pink-500 mr-3" />
        <span className="text-base">Instagram</span>
      </Link>

      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Facebook className="h-6 w-6 text-blue-600 mr-3" />
        <span className="text-base">Facebook</span>
      </Link>

      <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Youtube className="h-6 w-6 text-red-600 mr-3" />
        <span className="text-base">YouTube</span>
      </Link>

      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Linkedin className="h-6 w-6 text-blue-700 mr-3" />
        <span className="text-base">LinkedIn</span>
      </Link>

      <Link
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <svg className="h-6 w-6 text-red-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 0 0-4.373 23.182c-.011-.937-.019-2.379.327-3.4.353-.97 2.279-6.186 2.279-6.186s-.582-1.175-.582-2.912c0-2.725 1.582-4.767 3.544-4.767 1.673 0 2.478 1.255 2.478 2.759 0 1.68-1.069 4.194-1.625 6.524-.461 1.949.978 3.538 2.89 3.538 3.47 0 6.138-3.662 6.138-8.953 0-4.677-3.349-7.955-8.13-7.955-5.547 0-8.783 4.148-8.783 8.415 0 1.666.652 3.447 1.471 4.432.163.198.188.373.139.576-.152.627-.5 1.978-.568 2.252-.089.37-.294.45-.677.272-2.524-1.175-4.101-4.896-4.101-7.881 0-6.457 4.674-12.374 13.527-12.374 7.098 0 12.622 5.056 12.622 11.823 0 7.053-4.435 12.737-10.596 12.737-2.07 0-4.02-1.078-4.686-2.352 0 0-1.025 3.897-1.269 4.848-.457 1.76-1.698 3.95-2.53 5.289A12 12 0 1 0 12 0z" />
        </svg>
        <span className="text-base">Pinterest</span>
      </Link>

      <Link
        href="https://vimeo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <Vimeo className="h-6 w-6 text-blue-400 mr-3" />
        <span className="text-base">Vimeo</span>
      </Link>

      <Link
        href="https://vk.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-3 hover:bg-gray-100"
      >
        <div className="h-6 w-6 bg-blue-600 text-white rounded flex items-center justify-center mr-3 text-xs font-bold">
          B
        </div>
        <span className="text-base">VK</span>
      </Link>
    </div>
  )
}

