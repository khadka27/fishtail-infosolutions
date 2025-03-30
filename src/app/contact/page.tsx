import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react'
import MapWrapper from "@/Components/map-wrapper"
import ContactForm from "@/Components/contact-form"
import { officeLocations } from "@/data/locations"

export default function ContactPage() {
  // Ensure nepalOffice is valid before passing it to MapWrapper
  const nepalOffice = officeLocations.find((loc) => loc.country === "Nepal")

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-5xl font-light text-gray-700 mb-4 md:mb-0">Contact Us</h1>
          <p className="text-gray-500">Get in touch with our team</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full">
        <MapWrapper
          locations={nepalOffice ? [nepalOffice] : []}
          initialZoom={15}
          height="320px"
          showLocationTabs={false}
        />
      </div>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <h3 className="text-xl text-gray-700">+977 61 123456</h3>
              <p className="text-sm text-gray-500">Monday–Friday 9am-6pm</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MessageSquare className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <h3 className="text-xl text-gray-700">fishtailinfosolutions</h3>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <h3 className="text-xl text-blue-400 hover:text-blue-500">
                <a href="mailto:rahul@fistailinfosolutions">rahul@fistailinfosolutions</a>
              </h3>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <h3 className="text-xl text-gray-700">Prithivi Chowk, Street 31</h3>
              <p className="text-gray-700">Pokhara</p>
              <p className="text-gray-700">Nepal</p>
              <p className="text-sm text-gray-500 mt-2">Our office is open:</p>
              <p className="text-sm text-gray-500">Mon to Fri from 8am to 6pm</p>
            </div>
          </div>
        </div>

        {/* Contact Form with EmailJS and export functionality */}
        <ContactForm 
          
          
        />
      </div>
    </div>
  )
}

