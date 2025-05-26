/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import {
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Zap,
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"

const LEAD_GENERATION_SERVICES = [
  { id: "email-campaigns", label: "Email Lead Generation", icon: "📧" },
  { id: "content-marketing", label: "Content Marketing & Lead Magnets", icon: "📝" },
  { id: "social-media", label: "Social Media Lead Generation", icon: "📱" },
  { id: "paid-advertising", label: "Paid Advertising (PPC/Social)", icon: "💰" },
  { id: "seo-organic", label: "SEO & Organic Lead Generation", icon: "🔍" },
  { id: "landing-pages", label: "Landing Page Optimization", icon: "🎯" },
  { id: "lead-nurturing", label: "Lead Nurturing & Automation", icon: "🤖" },
  { id: "crm-integration", label: "CRM Integration & Management", icon: "⚙️" },
]

const BUSINESS_SIZES = [
  { id: "startup", label: "Startup (1-10 employees)" },
  { id: "small", label: "Small Business (11-50 employees)" },
  { id: "medium", label: "Medium Business (51-200 employees)" },
  { id: "large", label: "Large Business (200+ employees)" },
  { id: "enterprise", label: "Enterprise (1000+ employees)" },
]

const MONTHLY_BUDGETS = [
  { id: "under-1k", label: "Under $1,000" },
  { id: "1k-5k", label: "$1,000 - $5,000" },
  { id: "5k-10k", label: "$5,000 - $10,000" },
  { id: "10k-25k", label: "$10,000 - $25,000" },
  { id: "25k-plus", label: "$25,000+" },
]

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
  { code: "+679", country: "FJ", flag: "🇫🇯", name: "Fiji" },
  { code: "+676", country: "TO", flag: "🇹🇴", name: "Tonga" },
  { code: "+685", country: "WS", flag: "🇼🇸", name: "Samoa" },
  { code: "+684", country: "AS", flag: "🇦🇸", name: "American Samoa" },
  { code: "+687", country: "NC", flag: "🇳🇨", name: "New Caledonia" },
  { code: "+689", country: "PF", flag: "🇵🇫", name: "French Polynesia" },
  { code: "+678", country: "VU", flag: "🇻🇺", name: "Vanuatu" },
  { code: "+677", country: "SB", flag: "🇸🇧", name: "Solomon Islands" },
  { code: "+675", country: "PG", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+691", country: "FM", flag: "🇫🇲", name: "Micronesia" },
  { code: "+692", country: "MH", flag: "🇲🇭", name: "Marshall Islands" },
  { code: "+680", country: "PW", flag: "🇵🇼", name: "Palau" },
  { code: "+683", country: "NU", flag: "🇳🇺", name: "Niue" },
  { code: "+682", country: "CK", flag: "🇨🇰", name: "Cook Islands" },
  { code: "+686", country: "KI", flag: "🇰🇮", name: "Kiribati" },
  { code: "+688", country: "TV", flag: "🇹🇻", name: "Tuvalu" },
  { code: "+674", country: "NR", flag: "🇳🇷", name: "Nauru" },
]

const PHONE_PATTERNS: Record<string, RegExp> = {
  "+1": /^[2-9]\d{2}[2-9]\d{2}\d{4}$/, // US/Canada
  "+44": /^[1-9]\d{8,9}$/, // UK
  "+33": /^[1-9]\d{8}$/, // France
  "+49": /^[1-9]\d{10,11}$/, // Germany
  "+39": /^[0-9]\d{6,11}$/, // Italy
  "+34": /^[6-9]\d{8}$/, // Spain
  "+31": /^[1-9]\d{8}$/, // Netherlands
  "+41": /^[1-9]\d{8}$/, // Switzerland
  "+43": /^[1-9]\d{8,12}$/, // Austria
  "+32": /^[1-9]\d{7,8}$/, // Belgium
  "+45": /^[2-9]\d{7}$/, // Denmark
  "+46": /^[1-9]\d{7,9}$/, // Sweden
  "+47": /^[2-9]\d{7}$/, // Norway
  "+358": /^[1-9]\d{6,11}$/, // Finland
  "+351": /^[1-9]\d{8}$/, // Portugal
  "+30": /^[1-9]\d{9}$/, // Greece
  "+48": /^[1-9]\d{8}$/, // Poland
  "+420": /^[1-9]\d{8}$/, // Czech Republic
  "+36": /^[1-9]\d{7,8}$/, // Hungary
  "+40": /^[1-9]\d{8}$/, // Romania
  "+359": /^[1-9]\d{7,8}$/, // Bulgaria
  "+385": /^[1-9]\d{7,8}$/, // Croatia
  "+386": /^[1-9]\d{7}$/, // Slovenia
  "+421": /^[1-9]\d{8}$/, // Slovakia
  "+372": /^[1-9]\d{6,7}$/, // Estonia
  "+371": /^[1-9]\d{7}$/, // Latvia
  "+370": /^[1-9]\d{7}$/, // Lithuania
  "+353": /^[1-9]\d{7,8}$/, // Ireland
  "+354": /^[1-9]\d{6,7}$/, // Iceland
  "+352": /^[1-9]\d{5,10}$/, // Luxembourg
  "+377": /^[1-9]\d{7,8}$/, // Monaco
  "+378": /^[1-9]\d{5,9}$/, // San Marino
  "+376": /^[1-9]\d{5,8}$/, // Andorra
  "+423": /^[1-9]\d{6,7}$/, // Liechtenstein
  "+7": /^[3-9]\d{9}$/, // Russia/Kazakhstan
  "+380": /^[1-9]\d{8}$/, // Ukraine
  "+375": /^[1-9]\d{8}$/, // Belarus
  "+373": /^[1-9]\d{7}$/, // Moldova
  "+81": /^[1-9]\d{9,10}$/, // Japan
  "+82": /^[1-9]\d{7,8}$/, // South Korea
  "+86": /^1[3-9]\d{9}$/, // China
  "+91": /^[6-9]\d{9}$/, // India
  "+92": /^[1-9]\d{9,10}$/, // Pakistan
  "+93": /^[1-9]\d{8}$/, // Afghanistan
  "+880": /^[1-9]\d{9,10}$/, // Bangladesh
  "+94": /^[1-9]\d{8}$/, // Sri Lanka
  "+95": /^[1-9]\d{7,9}$/, // Myanmar
  "+960": /^[1-9]\d{6}$/, // Maldives
  "+975": /^[1-9]\d{6,7}$/, // Bhutan
  "+977": /^[1-9]\d{7,9}$/, // Nepal
  "+98": /^[1-9]\d{9}$/, // Iran
  "+66": /^[1-9]\d{7,8}$/, // Thailand
  "+84": /^[1-9]\d{8,9}$/, // Vietnam
  "+856": /^[1-9]\d{7,9}$/, // Laos
  "+855": /^[1-9]\d{7,8}$/, // Cambodia
  "+60": /^[1-9]\d{7,9}$/, // Malaysia
  "+65": /^[1-9]\d{7}$/, // Singapore
  "+62": /^[1-9]\d{8,11}$/, // Indonesia
  "+63": /^[1-9]\d{9}$/, // Philippines
  "+673": /^[1-9]\d{6}$/, // Brunei
  "+670": /^[1-9]\d{6,7}$/, // East Timor
  "+61": /^[2-478]\d{8}$/, // Australia
  "+64": /^[2-9]\d{7,9}$/, // New Zealand
  "+679": /^[1-9]\d{6}$/, // Fiji
  "+676": /^[1-9]\d{4,6}$/, // Tonga
  "+685": /^[1-9]\d{4,6}$/, // Samoa
  "+684": /^[1-9]\d{6}$/, // American Samoa
  "+687": /^[1-9]\d{5}$/, // New Caledonia
  "+689": /^[1-9]\d{7}$/, // French Polynesia
  "+678": /^[1-9]\d{6}$/, // Vanuatu
  "+677": /^[1-9]\d{4,6}$/, // Solomon Islands
  "+675": /^[1-9]\d{6,7}$/, // Papua New Guinea
  "+55": /^[1-9]{2}9?\d{8}$/, // Brazil
  "+52": /^[1-9]\d{9}$/, // Mexico
  "+54": /^[1-9]\d{9,10}$/, // Argentina
  "+56": /^[1-9]\d{8}$/, // Chile
  "+57": /^[1-9]\d{9}$/, // Colombia
  "+51": /^[1-9]\d{8}$/, // Peru
  "+58": /^[1-9]\d{9}$/, // Venezuela
  "+593": /^[1-9]\d{7,8}$/, // Ecuador
  "+595": /^[1-9]\d{8}$/, // Paraguay
  "+598": /^[1-9]\d{7}$/, // Uruguay
  "+591": /^[1-9]\d{7}$/, // Bolivia
  "+592": /^[1-9]\d{6}$/, // Guyana
  "+597": /^[1-9]\d{5,6}$/, // Suriname
  "+594": /^[1-9]\d{8}$/, // French Guiana
  "+27": /^[1-9]\d{8}$/, // South Africa
  "+20": /^[1-9]\d{8,9}$/, // Egypt
  "+234": /^[1-9]\d{9}$/, // Nigeria
  "+254": /^[1-9]\d{8}$/, // Kenya
  "+233": /^[1-9]\d{8}$/, // Ghana
  "+212": /^[1-9]\d{8}$/, // Morocco
  "+216": /^[1-9]\d{7}$/, // Tunisia
  "+213": /^[1-9]\d{8}$/, // Algeria
  "+218": /^[1-9]\d{8}$/, // Libya
  "+249": /^[1-9]\d{8}$/, // Sudan
  "+251": /^[1-9]\d{8}$/, // Ethiopia
  "+256": /^[1-9]\d{8}$/, // Uganda
  "+255": /^[1-9]\d{8}$/, // Tanzania
  "+250": /^[1-9]\d{8}$/, // Rwanda
  "+257": /^[1-9]\d{7}$/, // Burundi
  "+260": /^[1-9]\d{8}$/, // Zambia
  "+263": /^[1-9]\d{8}$/, // Zimbabwe
  "+265": /^[1-9]\d{7,8}$/, // Malawi
  "+266": /^[1-9]\d{7}$/, // Lesotho
  "+267": /^[1-9]\d{7}$/, // Botswana
  "+268": /^[1-9]\d{7}$/, // Eswatini
  "+264": /^[1-9]\d{7}$/, // Namibia
  "+258": /^[1-9]\d{8}$/, // Mozambique
  "+261": /^[1-9]\d{8}$/, // Madagascar
  "+230": /^[1-9]\d{6,7}$/, // Mauritius
  "+248": /^[1-9]\d{6}$/, // Seychelles
  "+262": /^[1-9]\d{8}$/, // Réunion
  "+269": /^[1-9]\d{6}$/, // Comoros
  "+290": /^[1-9]\d{3}$/, // Saint Helena
  "+971": /^[1-9]\d{7,8}$/, // UAE
  "+966": /^[1-9]\d{8}$/, // Saudi Arabia
  "+965": /^[1-9]\d{7}$/, // Kuwait
  "+974": /^[1-9]\d{7}$/, // Qatar
  "+973": /^[1-9]\d{7}$/, // Bahrain
  "+968": /^[1-9]\d{7}$/, // Oman
  "+967": /^[1-9]\d{8}$/, // Yemen
  "+964": /^[1-9]\d{9}$/, // Iraq
  "+963": /^[1-9]\d{8}$/, // Syria
  "+961": /^[1-9]\d{6,7}$/, // Lebanon
  "+972": /^[1-9]\d{7,8}$/, // Israel
  "+970": /^[1-9]\d{7,8}$/, // Palestine
  "+962": /^[1-9]\d{7,8}$/, // Jordan
  "+90": /^[1-9]\d{9}$/, // Turkey
  "+995": /^[1-9]\d{8}$/, // Georgia
  "+374": /^[1-9]\d{7}$/, // Armenia
  "+994": /^[1-9]\d{8}$/, // Azerbaijan
  "+992": /^[1-9]\d{8}$/, // Tajikistan
  "+996": /^[1-9]\d{8}$/, // Kyrgyzstan
  "+998": /^[1-9]\d{8}$/, // Uzbekistan
  "+993": /^[1-9]\d{7}$/, // Turkmenistan
  "+691": /^[1-9]\d{6}$/, // Micronesia
  "+692": /^[1-9]\d{6}$/, // Marshall Islands
  "+680": /^[1-9]\d{6}$/, // Palau
  "+683": /^[1-9]\d{3}$/, // Niue
  "+682": /^[1-9]\d{4}$/, // Cook Islands
  "+686": /^[1-9]\d{4}$/, // Kiribati
  "+688": /^[1-9]\d{4}$/, // Tuvalu
  "+674": /^[1-9]\d{6}$/, // Nauru
}

interface LeadGenerationPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  company: string
  website: string
  phone: string
  countryCode: string
  businessSize: string
  monthlyBudget: string
  services: string[]
  currentChallenges: string
  goals: string
  timeline: string
}

export function LeadGenerationPopup({ isOpen, onClose }: LeadGenerationPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    countryCode: "+1",
    businessSize: "",
    monthlyBudget: "",
    services: [],
    currentChallenges: "",
    goals: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [countrySearchTerm, setCountrySearchTerm] = useState("")

  const formRef = useRef<HTMLFormElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const countryDropdownRef = useRef<HTMLDivElement>(null)

  const validatePhone = (phone: string, countryCode: string): boolean => {
    if (!phone) return true // Phone is optional

    const cleanPhone = phone.replace(/\D/g, "")
    const pattern = PHONE_PATTERNS[countryCode]

    if (pattern) {
      return pattern.test(cleanPhone)
    }

    return cleanPhone.length >= 7 && cleanPhone.length <= 15
  }

  const formatPhoneNumber = (phone: string, countryCode: string): string => {
    const cleanPhone = phone.replace(/\D/g, "")

    switch (countryCode) {
      case "+1":
        if (cleanPhone.length === 10) {
          return `(${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(3, 6)}-${cleanPhone.slice(6)}`
        }
        break
      case "+44":
        if (cleanPhone.length === 10) {
          return `${cleanPhone.slice(0, 4)} ${cleanPhone.slice(4, 7)} ${cleanPhone.slice(7)}`
        }
        break
      case "+33":
        if (cleanPhone.length === 9) {
          return `${cleanPhone.slice(0, 1)} ${cleanPhone.slice(1, 3)} ${cleanPhone.slice(3, 5)} ${cleanPhone.slice(5, 7)} ${cleanPhone.slice(7)}`
        }
        break
      case "+49":
        if (cleanPhone.length >= 10) {
          return `${cleanPhone.slice(0, 3)} ${cleanPhone.slice(3, 6)} ${cleanPhone.slice(6)}`
        }
        break
      default:
        if (cleanPhone.length >= 8) {
          const mid = Math.floor(cleanPhone.length / 2)
          return `${cleanPhone.slice(0, mid)} ${cleanPhone.slice(mid)}`
        }
    }

    return cleanPhone
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
      country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
      country.code.includes(countrySearchTerm) ||
      country.country.toLowerCase().includes(countrySearchTerm.toLowerCase()),
  )

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
        if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
          setIsCountryDropdownOpen(false)
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
      setIsCountryDropdownOpen(false)
      setCountrySearchTerm("")
    }
  }, [isOpen])

  const validateForm = (step: number): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {}

    if (step === 1) {
      if (!formData.name) errors.name = "Name is required"
      if (!formData.email) {
        errors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address"
      }
      if (!formData.company) errors.company = "Company name is required"
      if (formData.phone && !validatePhone(formData.phone, formData.countryCode)) {
        const countryName = COUNTRY_CODES.find((c) => c.code === formData.countryCode)?.name || "selected country"
        errors.phone = `Please enter a valid phone number for ${countryName}`
      }
    } else if (step === 2) {
      if (!formData.businessSize) errors.businessSize = "Please select your business size"
      if (!formData.monthlyBudget) errors.monthlyBudget = "Please select your monthly budget"
      if (formData.services.length === 0) errors.services = "Please select at least one service"
    } else if (step === 3) {
      if (!formData.currentChallenges) errors.currentChallenges = "Please describe your current challenges"
      if (!formData.goals) errors.goals = "Please describe your goals"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      const cleanValue = value.replace(/[^\d\s()+-]/g, "")
      setFormData((prev) => ({ ...prev, [name]: cleanValue }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => {
        const updated = { ...prev }
        delete updated[name as keyof FormData]
        return updated
      })
    }
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
    if (formErrors.services) {
      setFormErrors((prev) => {
        const updated = { ...prev }
        delete updated.services
        return updated
      })
    }
  }

  const handleNextStep = () => {
    if (validateForm(currentStep)) setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current || !(formRef.current instanceof HTMLFormElement)) {
      console.error("Form reference is invalid.")
      return
    }
    if (!validateForm(currentStep)) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_nxr837d"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_3resqzt"

      const response = await emailjs.sendForm(serviceId, templateId, formRef.current)
      console.log("Email sent successfully:", response)

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your lead generation consultation request has been submitted. Our team will contact you within 24 hours with a custom strategy proposal.",
      })
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        phone: "",
        countryCode: "+1",
        businessSize: "",
        monthlyBudget: "",
        services: [],
        currentChallenges: "",
        goals: "",
        timeline: "",
      })
      setTimeout(() => onClose(), 4000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus({
        success: false,
        message: "Sorry, there was a problem submitting your request. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
              step < currentStep
                ? "bg-blue-600 text-white"
                : step === currentStep
                  ? "bg-white border-2 border-blue-600 text-blue-600"
                  : "bg-gray-200 text-gray-500"
            }`}
          >
            {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
          </div>
          {step < 4 && <div className={`w-16 h-1 ${step < currentStep ? "bg-blue-600" : "bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  )

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's Get Started</h3>
              <p className="text-gray-600">Tell us about yourself and your company</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="John Smith"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="john@company.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.company ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Your Company Inc."
                />
                {formErrors.company && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.company}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.website}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="https://yourcompany.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex relative" ref={countryDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className={`flex items-center px-3 py-3 border rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 min-w-[120px] ${
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isSubmitting}
                  >
                    <span className="mr-2">{COUNTRY_CODES.find((c) => c.code === formData.countryCode)?.flag}</span>
                    <span className="text-sm font-medium mr-1">{formData.countryCode}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isCountryDropdownOpen && (
                    <div className="absolute top-full left-0 z-50 w-96 bg-white border border-gray-300 rounded-md shadow-lg max-h-80 overflow-hidden">
                      <div className="p-3 border-b bg-gray-50">
                        <input
                          type="text"
                          placeholder="Search countries..."
                          value={countrySearchTerm}
                          onChange={(e) => setCountrySearchTerm(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          autoFocus
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country, index) => (
                            <button
                              key={`${country.code}-${country.country}-${index}`}
                              type="button"
                              onClick={() => handleCountrySelect(country.code)}
                              className={`w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center transition-colors ${
                                formData.countryCode === country.code ? "bg-blue-100" : ""
                              }`}
                            >
                              <span className="mr-3 text-lg">{country.flag}</span>
                              <span className="mr-3 font-medium text-blue-600 min-w-[60px]">{country.code}</span>
                              <span className="text-sm text-gray-700 truncate">{country.name}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-gray-500 text-sm">No countries found</div>
                        )}
                      </div>
                    </div>
                  )}

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    className={`flex-1 px-4 py-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      formErrors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.phone && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.phone}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  (optional) {formData.phone && `Format: ${formatPhoneNumber(formData.phone, formData.countryCode)}`}
                </p>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Business Details</h3>
              <p className="text-gray-600">Help us understand your business size and budget</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Business Size <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {BUSINESS_SIZES.map((size) => (
                    <label
                      key={size.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.businessSize === size.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="businessSize"
                        value={size.id}
                        checked={formData.businessSize === size.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.businessSize === size.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.businessSize === size.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{size.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.businessSize && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.businessSize}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Monthly Marketing Budget <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {MONTHLY_BUDGETS.map((budget) => (
                    <label
                      key={budget.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.monthlyBudget === budget.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="monthlyBudget"
                        value={budget.id}
                        checked={formData.monthlyBudget === budget.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.monthlyBudget === budget.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.monthlyBudget === budget.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{budget.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.monthlyBudget && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.monthlyBudget}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Services Interested In <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {LEAD_GENERATION_SERVICES.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.services.includes(service.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center ${
                          formData.services.includes(service.id) ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.services.includes(service.id) && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className="mr-2">{service.icon}</span>
                      <span className="text-sm font-medium">{service.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.services && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.services}
                  </p>
                )}
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Goals & Challenges</h3>
              <p className="text-gray-600">Help us understand your current situation and objectives</p>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Lead Generation Challenges <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.currentChallenges ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Describe your current challenges with lead generation, such as low conversion rates, poor lead quality, lack of qualified leads, etc."
                />
                {formErrors.currentChallenges && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.currentChallenges}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Generation Goals <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.goals ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.goals}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="What are your lead generation goals? (e.g., increase leads by 50%, improve lead quality, reduce cost per lead, etc.)"
                />
                {formErrors.goals && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.goals}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP - Need to start immediately</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-plus-months">6+ months</option>
                </select>
              </div>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Review Your Information</h3>
              <p className="text-gray-600">Please review your details before submitting</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium">{formData.company}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <p className="font-medium">{formData.website || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Size</p>
                  <p className="font-medium">
                    {BUSINESS_SIZES.find((s) => s.id === formData.businessSize)?.label || "Not selected"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly Budget</p>
                  <p className="font-medium">
                    {MONTHLY_BUDGETS.find((b) => b.id === formData.monthlyBudget)?.label || "Not selected"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">
                    {formData.phone
                      ? `${COUNTRY_CODES.find((c) => c.code === formData.countryCode)?.flag} ${formData.countryCode} ${formatPhoneNumber(formData.phone, formData.countryCode)}`
                      : "Not provided"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Services of Interest</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {formData.services.map((serviceId) => {
                    const service = LEAD_GENERATION_SERVICES.find((s) => s.id === serviceId)
                    return (
                      <span
                        key={serviceId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        <span className="mr-1">{service?.icon}</span>
                        {service?.label}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Challenges</p>
                <p className="font-medium">{formData.currentChallenges}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Goals</p>
                <p className="font-medium">{formData.goals}</p>
              </div>
              {formData.timeline && (
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-medium">{formData.timeline}</p>
                </div>
              )}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <div className="flex items-start">
                <Zap className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800 font-medium mb-1">What happens next?</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Our lead generation experts will review your requirements</li>
                    <li>• We'll prepare a custom strategy proposal within 24 hours</li>
                    <li>• Schedule a consultation to discuss your personalized plan</li>
                    <li>• Get started with a proven lead generation system</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8 relative text-white">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close popup"
                  disabled={isSubmitting}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">Boost Your Lead Generation</h2>
                  <p className="text-blue-100">Get a custom lead generation strategy tailored to your business goals</p>
                </div>
              </div>

              <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.success
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    <div className="flex items-start">
                      {submitStatus.success ? (
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  </motion.div>
                )}

                {renderStepIndicator()}

                <form ref={formRef} onSubmit={handleSubmit} className="lead-generation-form">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderFormStep()}
                    </motion.div>
                  </AnimatePresence>

                  {/* Hidden inputs for EmailJS */}
                  <input type="hidden" name="name" value={formData.name} />
                  <input type="hidden" name="email" value={formData.email} />
                  <input type="hidden" name="company" value={formData.company} />
                  <input type="hidden" name="website" value={formData.website} />
                  <input type="hidden" name="phone" value={formData.phone} />
                  <input type="hidden" name="businessSize" value={formData.businessSize} />
                  <input type="hidden" name="monthlyBudget" value={formData.monthlyBudget} />
                  <input type="hidden" name="services" value={formData.services.join(", ")} />
                  <input type="hidden" name="currentChallenges" value={formData.currentChallenges} />
                  <input type="hidden" name="goals" value={formData.goals} />
                  <input type="hidden" name="timeline" value={formData.timeline} />
                  <input type="hidden" name="countryCode" value={formData.countryCode} />
                  <input
                    type="hidden"
                    name="phone"
                    value={formData.phone ? `${formData.countryCode} ${formData.phone}` : ""}
                  />

                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                    )}
                    {currentStep < 4 ? (
                      <motion.button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                      >
                        <span>Continue</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <span>Get My Custom Strategy</span>
                        )}
                      </motion.button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Loader2, CheckCircle, AlertCircle, ArrowRight, Users, Target, TrendingUp, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"

const LEAD_GENERATION_SERVICES = [
  { id: "email-campaigns", label: "Email Lead Generation", icon: "📧" },
  { id: "content-marketing", label: "Content Marketing & Lead Magnets", icon: "📝" },
  { id: "social-media", label: "Social Media Lead Generation", icon: "📱" },
  { id: "paid-advertising", label: "Paid Advertising (PPC/Social)", icon: "💰" },
  { id: "seo-organic", label: "SEO & Organic Lead Generation", icon: "🔍" },
  { id: "landing-pages", label: "Landing Page Optimization", icon: "🎯" },
  { id: "lead-nurturing", label: "Lead Nurturing & Automation", icon: "🤖" },
  { id: "crm-integration", label: "CRM Integration & Management", icon: "⚙️" },
]

const BUSINESS_SIZES = [
  { id: "startup", label: "Startup (1-10 employees)" },
  { id: "small", label: "Small Business (11-50 employees)" },
  { id: "medium", label: "Medium Business (51-200 employees)" },
  { id: "large", label: "Large Business (200+ employees)" },
  { id: "enterprise", label: "Enterprise (1000+ employees)" },
]

const MONTHLY_BUDGETS = [
  { id: "under-1k", label: "Under $1,000" },
  { id: "1k-5k", label: "$1,000 - $5,000" },
  { id: "5k-10k", label: "$5,000 - $10,000" },
  { id: "10k-25k", label: "$10,000 - $25,000" },
  { id: "25k-plus", label: "$25,000+" },
]

interface LeadGenerationPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  company: string
  website: string
  phone: string
  businessSize: string
  monthlyBudget: string
  services: string[]
  currentChallenges: string
  goals: string
  timeline: string
}

export function LeadGenerationPopup({ isOpen, onClose }: LeadGenerationPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    businessSize: "",
    monthlyBudget: "",
    services: [],
    currentChallenges: "",
    goals: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const formRef = useRef<HTMLFormElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "Bc-i5YdvnKq246_sc"
    emailjs.init(publicKey)

    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
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
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus(null)
      setCurrentStep(1)
      setFormErrors({})
    }
  }, [isOpen])

  const validateForm = (step: number): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {}

    if (step === 1) {
      if (!formData.name) errors.name = "Name is required"
      if (!formData.email) {
        errors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address"
      }
      if (!formData.company) errors.company = "Company name is required"
    } else if (step === 2) {
      if (!formData.businessSize) errors.businessSize = "Please select your business size"
      if (!formData.monthlyBudget) errors.monthlyBudget = "Please select your monthly budget"
      if (formData.services.length === 0) errors.services = "Please select at least one service"
    } else if (step === 3) {
      if (!formData.currentChallenges) errors.currentChallenges = "Please describe your current challenges"
      if (!formData.goals) errors.goals = "Please describe your goals"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => {
        const updated = { ...prev }
        delete updated[name as keyof FormData]
        return updated
      })
    }
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
    if (formErrors.services) {
      setFormErrors((prev) => {
        const updated = { ...prev }
        delete updated.services
        return updated
      })
    }
  }

  const handleNextStep = () => {
    if (validateForm(currentStep)) setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current || !(formRef.current instanceof HTMLFormElement)) {
      console.error("Form reference is invalid.")
      return
    }
    if (!validateForm(currentStep)) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_nxr837d"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_3resqzt"

      const response = await emailjs.sendForm(serviceId, templateId, formRef.current)
      console.log("Email sent successfully:", response)

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your lead generation consultation request has been submitted. Our team will contact you within 24 hours with a custom strategy proposal.",
      })
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        phone: "",
        businessSize: "",
        monthlyBudget: "",
        services: [],
        currentChallenges: "",
        goals: "",
        timeline: "",
      })
      setTimeout(() => onClose(), 4000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus({
        success: false,
        message: "Sorry, there was a problem submitting your request. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
              step < currentStep
                ? "bg-blue-600 text-white"
                : step === currentStep
                  ? "bg-white border-2 border-blue-600 text-blue-600"
                  : "bg-gray-200 text-gray-500"
            }`}
          >
            {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
          </div>
          {step < 4 && <div className={`w-16 h-1 ${step < currentStep ? "bg-blue-600" : "bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  )

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Let&apos;s Get Started</h3>
              <p className="text-gray-600">Tell us about yourself and your company</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="John Smith"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="john@company.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.company ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Your Company Inc."
                />
                {formErrors.company && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.company}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.website}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="https://yourcompany.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Business Details</h3>
              <p className="text-gray-600">Help us understand your business size and budget</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Business Size <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {BUSINESS_SIZES.map((size) => (
                    <label
                      key={size.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.businessSize === size.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="businessSize"
                        value={size.id}
                        checked={formData.businessSize === size.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.businessSize === size.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.businessSize === size.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{size.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.businessSize && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.businessSize}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Monthly Marketing Budget <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {MONTHLY_BUDGETS.map((budget) => (
                    <label
                      key={budget.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.monthlyBudget === budget.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="monthlyBudget"
                        value={budget.id}
                        checked={formData.monthlyBudget === budget.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          formData.monthlyBudget === budget.id ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.monthlyBudget === budget.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{budget.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.monthlyBudget && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.monthlyBudget}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Services Interested In <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {LEAD_GENERATION_SERVICES.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.services.includes(service.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center ${
                          formData.services.includes(service.id) ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {formData.services.includes(service.id) && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <span className="mr-2">{service.icon}</span>
                      <span className="text-sm font-medium">{service.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.services && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.services}
                  </p>
                )}
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Goals & Challenges</h3>
              <p className="text-gray-600">Help us understand your current situation and objectives</p>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Lead Generation Challenges <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.currentChallenges ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Describe your current challenges with lead generation, such as low conversion rates, poor lead quality, lack of qualified leads, etc."
                />
                {formErrors.currentChallenges && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.currentChallenges}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Generation Goals <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formErrors.goals ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  value={formData.goals}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="What are your lead generation goals? (e.g., increase leads by 50%, improve lead quality, reduce cost per lead, etc.)"
                />
                {formErrors.goals && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formErrors.goals}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP - Need to start immediately</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-plus-months">6+ months</option>
                </select>
              </div>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Review Your Information</h3>
              <p className="text-gray-600">Please review your details before submitting</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium">{formData.company}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <p className="font-medium">{formData.website || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Size</p>
                  <p className="font-medium">
                    {BUSINESS_SIZES.find((s) => s.id === formData.businessSize)?.label || "Not selected"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly Budget</p>
                  <p className="font-medium">
                    {MONTHLY_BUDGETS.find((b) => b.id === formData.monthlyBudget)?.label || "Not selected"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Services of Interest</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {formData.services.map((serviceId) => {
                    const service = LEAD_GENERATION_SERVICES.find((s) => s.id === serviceId)
                    return (
                      <span
                        key={serviceId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        <span className="mr-1">{service?.icon}</span>
                        {service?.label}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Challenges</p>
                <p className="font-medium">{formData.currentChallenges}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Goals</p>
                <p className="font-medium">{formData.goals}</p>
              </div>
              {formData.timeline && (
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-medium">{formData.timeline}</p>
                </div>
              )}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <div className="flex items-start">
                <Zap className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800 font-medium mb-1">What happens next?</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Our lead generation experts will review your requirements</li>
                    <li>• We&lsquo;ll prepare a custom strategy proposal within 24 hours</li>
                    <li>• Schedule a consultation to discuss your personalized plan</li>
                    <li>• Get started with a proven lead generation system</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8 relative text-white">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close popup"
                  disabled={isSubmitting}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">Boost Your Lead Generation</h2>
                  <p className="text-blue-100">Get a custom lead generation strategy tailored to your business goals</p>
                </div>
              </div>

              <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.success
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    <div className="flex items-start">
                      {submitStatus.success ? (
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  </motion.div>
                )}

                {renderStepIndicator()}

                <form ref={formRef} onSubmit={handleSubmit} className="lead-generation-form">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderFormStep()}
                    </motion.div>
                  </AnimatePresence>

                  {/* Hidden inputs for EmailJS */}
                  <input type="hidden" name="name" value={formData.name} />
                  <input type="hidden" name="email" value={formData.email} />
                  <input type="hidden" name="company" value={formData.company} />
                  <input type="hidden" name="website" value={formData.website} />
                  <input type="hidden" name="phone" value={formData.phone} />
                  <input type="hidden" name="businessSize" value={formData.businessSize} />
                  <input type="hidden" name="monthlyBudget" value={formData.monthlyBudget} />
                  <input type="hidden" name="services" value={formData.services.join(", ")} />
                  <input type="hidden" name="currentChallenges" value={formData.currentChallenges} />
                  <input type="hidden" name="goals" value={formData.goals} />
                  <input type="hidden" name="timeline" value={formData.timeline} />

                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                    )}
                    {currentStep < 4 ? (
                      <motion.button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                      >
                        <span>Continue</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <span>Get My Custom Strategy</span>
                        )}
                      </motion.button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
