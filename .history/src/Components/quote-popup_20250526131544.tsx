"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Loader2, CheckCircle, AlertCircle, ArrowRight, ChevronDown } from 'lucide-react'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import Seoptimize from "@/Images/seo_specialist_workplace-optimized.png"

const COUNTRY_CODES = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland" },
  { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
  { code: "+30", country: "GR", flag: "🇬🇷", name: "Greece" },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland" },
  { code: "+420", country: "CZ", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+36", country: "HU", flag: "🇭🇺", name: "Hungary" },
  { code: "+40", country: "RO", flag: "🇷🇴", name: "Romania" },
  { code: "+359", country: "BG", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+385", country: "HR", flag: "🇭🇷", name: "Croatia" },
  { code: "+386", country: "SI", flag: "🇸🇮", name: "Slovenia" },
  { code: "+421", country: "SK", flag: "🇸🇰", name: "Slovakia" },
  { code: "+372", country: "EE", flag: "🇪🇪", name: "Estonia" },
  { code: "+371", country: "LV", flag: "🇱🇻", name: "Latvia" },
  { code: "+370", country: "LT", flag: "🇱🇹", name: "Lithuania" },
  { code: "+353", country: "IE", flag: "🇮🇪", name: "Ireland" },
  { code: "+354", country: "IS", flag: "🇮🇸", name: "Iceland" },
  { code: "+352", country: "LU", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+377", country: "MC", flag: "🇲🇨", name: "Monaco" },
  { code: "+378", country: "SM", flag: "🇸🇲", name: "San Marino" },
  { code: "+39", country: "VA", flag: "🇻🇦", name: "Vatican City" },
  { code: "+376", country: "AD", flag: "🇦🇩", name: "Andorra" },
  { code: "+423", country: "LI", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+380", country: "UA", flag: "🇺🇦", name: "Ukraine" },
  { code: "+375", country: "BY", flag: "🇧🇾", name: "Belarus" },
  { code: "+373", country: "MD", flag: "🇲🇩", name: "Moldova" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+51", country: "PE", flag: "🇵🇪", name: "Peru" },
  { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
  { code: "+593", country: "EC", flag: "🇪🇨", name: "Ecuador" },
  { code: "+595", country: "PY", flag: "🇵🇾", name: "Paraguay" },
  { code: "+598", country: "UY", flag: "🇺🇾", name: "Uruguay" },
  { code: "+591", country: "BO", flag: "🇧🇴", name: "Bolivia" },
  { code: "+592", country: "GY", flag: "🇬🇾", name: "Guyana" },
  { code: "+597", country: "SR", flag: "🇸🇷", name: "Suriname" },
  { code: "+594", country: "GF", flag: "🇬🇫", name: "French Guiana" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", country: "KE", flag: "🇰🇪", name: "Kenya" },
  { code: "+233", country: "GH", flag: "🇬🇭", name: "Ghana" },
  { code: "+212", country: "MA", flag: "🇲🇦", name: "Morocco" },
  { code: "+216", country: "TN", flag: "🇹🇳", name: "Tunisia" },
  { code: "+213", country: "DZ", flag: "🇩🇿", name: "Algeria" },
  { code: "+218", country: "LY", flag: "🇱🇾", name: "Libya" },
  { code: "+249", country: "SD", flag: "🇸🇩", name: "Sudan" },
  { code: "+251", country: "ET", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+256", country: "UG", flag: "🇺🇬", name: "Uganda" },
  { code: "+255", country: "TZ", flag: "🇹🇿", name: "Tanzania" },
  { code: "+250", country: "RW", flag: "🇷🇼", name: "Rwanda" },
  { code: "+257", country: "BI", flag: "🇧🇮", name: "Burundi" },
  { code: "+260", country: "ZM", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", country: "ZW", flag: "🇿🇼", name: "Zimbabwe" },
  { code: "+265", country: "MW", flag: "🇲🇼", name: "Malawi" },
  { code: "+266", country: "LS", flag: "🇱🇸", name: "Lesotho" },
  { code: "+267", country: "BW", flag: "🇧🇼", name: "Botswana" },
  { code: "+268", country: "SZ", flag: "🇸🇿", name: "Eswatini" },
  { code: "+264", country: "NA", flag: "🇳🇦", name: "Namibia" },
  { code: "+258", country: "MZ", flag: "🇲🇿", name: "Mozambique" },
  { code: "+261", country: "MG", flag: "🇲🇬", name: "Madagascar" },
  { code: "+230", country: "MU", flag: "🇲🇺", name: "Mauritius" },
  { code: "+248", country: "SC", flag: "🇸🇨", name: "Seychelles" },
  { code: "+262", country: "RE", flag: "🇷🇪", name: "Réunion" },
  { code: "+269", country: "KM", flag: "🇰🇲", name: "Comoros" },
  { code: "+290", country: "SH", flag: "🇸🇭", name: "Saint Helena" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait" },
  { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar" },
  { code: "+973", country: "BH", flag: "🇧🇭", name: "Bahrain" },
  { code: "+968", country: "OM", flag: "🇴🇲", name: "Oman" },
  { code: "+967", country: "YE", flag: "🇾🇪", name: "Yemen" },
  { code: "+964", country: "IQ", flag: "🇮🇶", name: "Iraq" },
  { code: "+963", country: "SY", flag: "🇸🇾", name: "Syria" },
  { code: "+961", country: "LB", flag: "🇱🇧", name: "Lebanon" },
  { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
  { code: "+970", country: "PS", flag: "🇵🇸", name: "Palestine" },
  { code: "+962", country: "JO", flag: "🇯🇴", name: "Jordan" },
  { code: "+98", country: "IR", flag: "🇮🇷", name: "Iran" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "+995", country: "GE", flag: "🇬🇪", name: "Georgia" },
  { code: "+374", country: "AM", flag: "🇦🇲", name: "Armenia" },
  { code: "+994", country: "AZ", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+992", country: "TJ", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+996", country: "KG", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+998", country: "UZ", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+993", country: "TM", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+7", country: "KZ", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+93", country: "AF", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+92", country: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", country: "BD", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", country: "LK", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+960", country: "MV", flag: "🇲🇻", name: "Maldives" },
  { code: "+975", country: "BT", flag: "🇧🇹", name: "Bhutan" },
  { code: "+977", country: "NP", flag: "🇳🇵", name: "Nepal" },
  { code: "+95", country: "MM", flag: "🇲🇲", name: "Myanmar" },
  { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
  { code: "+856", country: "LA", flag: "🇱🇦", name: "Laos" },
  { code: "+855", country: "KH", flag: "🇰🇭", name: "Cambodia" },
  { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
  { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+673", country: "BN", flag: "🇧🇳", name: "Brunei" },
  { code: "+670", country: "TL", flag: "🇹🇱", name: "East Timor" },
]

const PHONE_PATTERNS: Record<string, RegExp> = {
  // North America
  "+1": /^\+1[2-9]\d{2}[2-9]\d{2}\d{4}$/, // US/Canada - 10 digits after country code
  
  // Europe
  "+44": /^\+44[1-9]\d{8,9}$/, // UK - 9-10 digits
  "+33": /^\+33[1-9]\d{8}$/, // France - 9 digits
  "+49": /^\+49[1-9]\d{10,11}$/, // Germany - 10-11 digits
  "+39": /^\+39\d{6,11}$/, // Italy - 6-11 digits
  "+34": /^\+34[6-9]\d{8}$/, // Spain - 9 digits
  "+31": /^\+31[1-9]\d{8}$/, // Netherlands - 9 digits
  "+41": /^\+41[1-9]\d{8}$/, // Switzerland - 9 digits
  "+43": /^\+43[1-9]\d{8,12}$/, // Austria - 8-12 digits
  "+32": /^\+32[1-9]\d{7,8}$/, // Belgium - 8-9 digits
  "+45": /^\+45[2-9]\d{7}$/, // Denmark - 8 digits
  "+46": /^\+46[1-9]\d{7,9}$/, // Sweden - 8-10 digits
  "+47": /^\+47[2-9]\d{7}$/, // Norway - 8 digits
  "+358": /^\+358[1-9]\d{6,10}$/, // Finland - 7-11 digits
  "+351": /^\+351[1-9]\d{8}$/, // Portugal - 9 digits
  "+30": /^\+30[2-9]\d{9}$/, // Greece - 10 digits
  "+48": /^\+48[1-9]\d{8}$/, // Poland - 9 digits
  "+420": /^\+420[1-9]\d{8}$/, // Czech Republic - 9 digits
  "+36": /^\+36[1-9]\d{7,8}$/, // Hungary - 8-9 digits
  "+40": /^\+40[2-9]\d{8}$/, // Romania - 9 digits
  "+359": /^\+359[2-9]\d{7,8}$/, // Bulgaria - 8-9 digits
  "+385": /^\+385[1-9]\d{7,8}$/, // Croatia - 8-9 digits
  "+386": /^\+386[1-9]\d{7}$/, // Slovenia - 8 digits
  "+421": /^\+421[2-9]\d{8}$/, // Slovakia - 9 digits
  "+372": /^\+372[3-9]\d{6,7}$/, // Estonia - 7-8 digits
  "+371": /^\+371[2-9]\d{7}$/, // Latvia - 8 digits
  "+370": /^\+370[3-9]\d{7}$/, // Lithuania - 8 digits
  "+353": /^\+353[1-9]\d{7,8}$/, // Ireland - 8-9 digits
  "+354": /^\+354[4-9]\d{6}$/, // Iceland - 7 digits
  "+352": /^\+352[2-9]\d{5,10}$/, // Luxembourg - 6-11 digits
  "+377": /^\+377[4-9]\d{7}$/, // Monaco - 8 digits
  "+378": /^\+378[0-9]\d{5,9}$/, // San Marino - 6-10 digits
  "+376": /^\+376[3-9]\d{5}$/, // Andorra - 6 digits
  "+423": /^\+423[2-9]\d{6}$/, // Liechtenstein - 7 digits
  
  // Eastern Europe & Russia
  "+7": /^\+7[3-9]\d{9}$/, // Russia/Kazakhstan - 10 digits
  "+380": /^\+380[3-9]\d{8}$/, // Ukraine - 9 digits
  "+375": /^\+375[1-9]\d{8}$/, // Belarus - 9 digits
  "+373": /^\+373[2-9]\d{7}$/, // Moldova - 8 digits
  "+995": /^\+995[3-9]\d{8}$/, // Georgia - 9 digits
  "+374": /^\+374[1-9]\d{7}$/, // Armenia - 8 digits
  "+994": /^\+994[1-9]\d{8}$/, // Azerbaijan - 9 digits
  "+992": /^\+992[3-9]\d{8}$/, // Tajikistan - 9 digits
  "+996": /^\+996[3-9]\d{8}$/, // Kyrgyzstan - 9 digits
  "+998": /^\+998[3-9]\d{8}$/, // Uzbekistan - 9 digits
  "+993": /^\+993[1-9]\d{7}$/, // Turkmenistan - 8 digits
  
  // Asia
  "+81": /^\+81[1-9]\d{9,10}$/, // Japan - 10-11 digits
  "+82": /^\+82[1-9]\d{8,9}$/, // South Korea - 9-10 digits
  "+86": /^\+86[1]\d{10}$/, // China - 11 digits
  "+91": /^\+91[6-9]\d{9}$/, // India - 10 digits
  "+93": /^\+93[7]\d{8}$/, // Afghanistan - 9 digits
  "+92": /^\+92[3]\d{9}$/, // Pakistan - 10 digits
  "+880": /^\+880[1]\d{9}$/, // Bangladesh - 10 digits
  "+94": /^\+94[7]\d{8}$/, // Sri Lanka - 9 digits
  "+960": /^\+960[7-9]\d{6}$/, // Maldives - 7 digits
  "+975": /^\+975[1-9]\d{7}$/, // Bhutan - 8 digits
  "+977": /^\+977[9]\d{9}$/, // Nepal - 10 digits
  "+95": /^\+95[9]\d{8,9}$/, // Myanmar - 9-10 digits
  "+66": /^\+66[6-9]\d{8}$/, // Thailand - 9 digits
  "+84": /^\+84[3-9]\d{8,9}$/, // Vietnam - 9-10 digits
  "+856": /^\+856[2]\d{9}$/, // Laos - 10 digits
  "+855": /^\+855[1-9]\d{7,8}$/, // Cambodia - 8-9 digits
  "+60": /^\+60[1]\d{8,9}$/, // Malaysia - 9-10 digits
  "+65": /^\+65[6-9]\d{7}$/, // Singapore - 8 digits
  "+62": /^\+62[8]\d{8,11}$/, // Indonesia - 9-12 digits
  "+63": /^\+63[9]\d{9}$/, // Philippines - 10 digits
  "+673": /^\+673[2-8]\d{6}$/, // Brunei - 7 digits
  "+670": /^\+670[7]\d{7}$/, // East Timor - 8 digits
  
  // Oceania
  "+61": /^\+61[2-478]\d{8}$/, // Australia - 9 digits
  "+64": /^\+64[2-9]\d{7,9}$/, // New Zealand - 8-10 digits
  
  // South America
  "+55": /^\+55[1-9]{2}9?\d{8}$/, // Brazil - 10-11 digits
  "+52": /^\+52[1-9]\d{9}$/, // Mexico - 10 digits
  "+54": /^\+54[1-9]\d{9,10}$/, // Argentina - 10-11 digits
  "+56": /^\+56[2-9]\d{8}$/, // Chile - 9 digits
  "+57": /^\+57[3]\d{9}$/, // Colombia - 10 digits
  "+51": /^\+51[9]\d{8}$/, // Peru - 9 digits
  "+58": /^\+58[4]\d{9}$/, // Venezuela - 10 digits
  "+593": /^\+593[9]\d{8}$/, // Ecuador - 9 digits
  "+595": /^\+595[9]\d{8}$/, // Paraguay - 9 digits
  "+598": /^\+598[9]\d{7}$/, // Uruguay - 8 digits
  "+591": /^\+591[6-7]\d{7}$/, // Bolivia - 8 digits
  "+592": /^\+592[6]\d{6}$/, // Guyana - 7 digits
  "+597": /^\+597[6-8]\d{6}$/, // Suriname - 7 digits
  "+594": /^\+594[6]\d{8}$/, // French Guiana - 9 digits
  
  // Africa
  "+27": /^\+27[1-9]\d{8}$/, // South Africa - 9 digits
  "+20": /^\+20[1]\d{9}$/, // Egypt - 10 digits
  "+234": /^\+234[7-9]\d{9}$/, // Nigeria - 10 digits
  "+254": /^\+254[7]\d{8}$/, // Kenya - 9 digits
  "+233": /^\+233[2-5]\d{8}$/, // Ghana - 9 digits
  "+212": /^\+212[5-7]\d{8}$/, // Morocco - 9 digits
  "+216": /^\+216[2-9]\d{7}$/, // Tunisia - 8 digits
  "+213": /^\+213[5-7]\d{8}$/, // Algeria - 9 digits
  "+218": /^\+218[9]\d{8}$/, // Libya - 9 digits
  "+249": /^\+249[9]\d{8}$/, // Sudan - 9 digits
  "+251": /^\+251[9]\d{8}$/, // Ethiopia - 9 digits
  "+256": /^\+256[7]\d{8}$/, // Uganda - 9 digits
  "+255": /^\+255[6-7]\d{8}$/, // Tanzania - 9 digits
  "+250": /^\+250[7]\d{8}$/, // Rwanda - 9 digits
  "+257": /^\+257[6-7]\d{7}$/, // Burundi - 8 digits
  "+260": /^\+260[9]\d{8}$/, // Zambia - 9 digits
  "+263": /^\+263[7]\d{8}$/, // Zimbabwe - 9 digits
  "+265": /^\+265[8-9]\d{7}$/, // Malawi - 8 digits
  "+266": /^\+266[2-6]\d{7}$/, // Lesotho - 8 digits
  "+267": /^\+267[7]\d{7}$/, // Botswana - 8 digits
  "+268": /^\+268[7-8]\d{7}$/, // Eswatini - 8 digits
  "+264": /^\+264[6-8]\d{7}$/, // Namibia - 8 digits
  "+258": /^\+258[8]\d{8}$/, // Mozambique - 9 digits
  "+261": /^\+261[3]\d{8}$/, // Madagascar - 9 digits
  "+230": /^\+230[5-9]\d{7}$/, // Mauritius - 8 digits
  "+248": /^\+248[2-4]\d{6}$/, // Seychelles - 7 digits
  "+262": /^\+262[6-7]\d{8}$/, // Réunion - 9 digits
  "+269": /^\+269[3-7]\d{6}$/, // Comoros - 7 digits
  "+290": /^\+290[2-4]\d{3}$/, // Saint Helena - 4 digits
  
  // Middle East
  "+971": /^\+971[5]\d{8}$/, // UAE - 9 digits
  "+966": /^\+966[5]\d{8}$/, // Saudi Arabia - 9 digits
  "+965": /^\+965[5-9]\d{7}$/, // Kuwait - 8 digits
  "+974": /^\+974[3-7]\d{7}$/, // Qatar - 8 digits
  "+973": /^\+973[3-9]\d{7}$/, // Bahrain - 8 digits
  "+968": /^\+968[7-9]\d{7}$/, // Oman - 8 digits
  "+967": /^\+967[7]\d{8}$/, // Yemen - 9 digits
  "+964": /^\+964[7]\d{9}$/, // Iraq - 10 digits
  "+963": /^\+963[9]\d{8}$/, // Syria - 9 digits
  "+961": /^\+961[3-9]\d{7}$/, // Lebanon - 8 digits
  "+972": /^\+972[5]\d{8}$/, // Israel - 9 digits
  "+970": /^\+970[5-9]\d{8}$/, // Palestine - 9 digits
  "+962": /^\+962[7]\d{8}$/, // Jordan - 9 digits
  "+98": /^\+98[9]\d{9}$/, // Iran - 10 digits
  "+90": /^\+90[5]\d{9}$/, // Turkey - 10 digits
}

interface QuotePopupProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  websiteUrl: string
  name: string
  email: string
  phone: string
  countryCode: string
  company: string
  details: string
}

export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [formData, setFormData] = useState<FormData>({
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    company: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus<{
    success: boolean;
  message: string
}
| null>(null)
const [currentStep, setCurrentStep] = useState(1)
const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({})
const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
const [countrySearchTerm, setCountrySearchTerm] = useState("")

const formRef = useRef<HTMLFormElement>(null)
const modalRef = useRef<HTMLDivElement>(null)

// Initialize EmailJS once when component mounts\
useEffect(() => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "Bc-i5YdvnKq246_sc"
  emailjs.init(publicKey)

  if (isOpen) {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isCountryDropdownOpen) {
          setIsCountryDropdownOpen(false)
        } else {
          onClose()
        }
      }
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEsc)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }
}, [isOpen, onClose, isCountryDropdownOpen])

useEffect(() => {
  if (!isOpen) {
    setSubmitStatus(null)
    setCurrentStep(1)
    setFormErrors({})
  }
}, [isOpen])

const validatePhone = (phone: string, countryCode: string): boolean => {
  if (!phone) return true // Phone is optional

  const fullPhone = `${countryCode}${phone}`
  const pattern = PHONE_PATTERNS[countryCode]

  if (pattern) {
    return pattern.test(fullPhone)
  }

  // Basic validation for countries without specific patterns
  return /^\+\d{7,15}$/.test(fullPhone)
}

const validateForm = (step: number): boolean => {
  const errors: Partial<Record<keyof FormData, string>> = {}

  if (step === 1) {
    if (!formData.websiteUrl) {
      errors.websiteUrl = "Website URL is required"
    } else if (!/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}$/i.test(formData.websiteUrl)) {
      errors.websiteUrl = "Please enter a valid URL"
    }
  } else if (step === 2) {
    if (!formData.name) {
      errors.name = "Name is required"
    }
    if (!formData.email) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    if (formData.phone && !validatePhone(formData.phone, formData.countryCode)) {
      errors.phone = "Please enter a valid phone number for the selected country"
    }
  }

  setFormErrors(errors)
  return Object.keys(errors).length === 0
}

const handleCountrySelect = (countryCode: string) => {
  setFormData((prev) => ({ ...prev, countryCode }))
  setIsCountryDropdownOpen(false)
  setCountrySearchTerm("")
  if (formErrors.phone) {
    setFormErrors((prev) => {
      const updated = { ...prev }
      delete updated.phone
      return updated
    })
  }
}

const filteredCountries = COUNTRY_CODES.filter(
  (country) =>
    country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) || country.code.includes(countrySearchTerm),
)

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

