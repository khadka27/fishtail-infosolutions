/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
     X,
     Loader2,
     CheckCircle,
     AlertCircle,
     ArrowRight,
     ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Seoptimize from "@/Images/seo_specialist_workplace-optimized.png";

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
];

// Comprehensive phone validation patterns for all countries
const PHONE_PATTERNS: Record<string, RegExp> = {
     // North America
     "+1": /^[2-9]\d{2}[2-9]\d{2}\d{4}$/, // US/Canada (10 digits)

     // Europe
     "+44": /^[1-9]\d{8,9}$/, // UK (9-10 digits after country code)
     "+33": /^[1-9]\d{8}$/, // France (9 digits)
     "+49": /^[1-9]\d{10,11}$/, // Germany (10-11 digits)
     "+39": /^[0-9]\d{6,11}$/, // Italy (6-11 digits)
     "+34": /^[6-9]\d{8}$/, // Spain (9 digits, mobile starts with 6-9)
     "+31": /^[1-9]\d{8}$/, // Netherlands (9 digits)
     "+41": /^[1-9]\d{8}$/, // Switzerland (9 digits)
     "+43": /^[1-9]\d{8,12}$/, // Austria (9-13 digits)
     "+32": /^[1-9]\d{7,8}$/, // Belgium (8-9 digits)
     "+45": /^[2-9]\d{7}$/, // Denmark (8 digits)
     "+46": /^[1-9]\d{7,9}$/, // Sweden (8-10 digits)
     "+47": /^[2-9]\d{7}$/, // Norway (8 digits)
     "+358": /^[1-9]\d{6,11}$/, // Finland (7-12 digits)
     "+351": /^[1-9]\d{8}$/, // Portugal (9 digits)
     "+30": /^[1-9]\d{9}$/, // Greece (10 digits)
     "+48": /^[1-9]\d{8}$/, // Poland (9 digits)
     "+420": /^[1-9]\d{8}$/, // Czech Republic (9 digits)
     "+36": /^[1-9]\d{7,8}$/, // Hungary (8-9 digits)
     "+40": /^[1-9]\d{8}$/, // Romania (9 digits)
     "+359": /^[1-9]\d{7,8}$/, // Bulgaria (8-9 digits)
     "+385": /^[1-9]\d{7,8}$/, // Croatia (8-9 digits)
     "+386": /^[1-9]\d{7}$/, // Slovenia (8 digits)
     "+421": /^[1-9]\d{8}$/, // Slovakia (9 digits)
     "+372": /^[1-9]\d{6,7}$/, // Estonia (7-8 digits)
     "+371": /^[1-9]\d{7}$/, // Latvia (8 digits)
     "+370": /^[1-9]\d{7}$/, // Lithuania (8 digits)
     "+353": /^[1-9]\d{7,8}$/, // Ireland (8-9 digits)
     "+354": /^[1-9]\d{6,7}$/, // Iceland (7-8 digits)
     "+352": /^[1-9]\d{5,10}$/, // Luxembourg (6-11 digits)
     "+377": /^[1-9]\d{7,8}$/, // Monaco (8-9 digits)
     "+378": /^[1-9]\d{5,9}$/, // San Marino (6-10 digits)
     "+376": /^[1-9]\d{5,8}$/, // Andorra (6-9 digits)
     "+423": /^[1-9]\d{6,7}$/, // Liechtenstein (7-8 digits)

     // Eastern Europe & Russia
     "+7": /^[3-9]\d{9}$/, // Russia/Kazakhstan (10 digits)
     "+380": /^[1-9]\d{8}$/, // Ukraine (9 digits)
     "+375": /^[1-9]\d{8}$/, // Belarus (9 digits)
     "+373": /^[1-9]\d{7}$/, // Moldova (8 digits)

     // Asia
     "+81": /^[1-9]\d{9,10}$/, // Japan (10-11 digits)
     "+82": /^[1-9]\d{7,8}$/, // South Korea (8-9 digits)
     "+86": /^1[3-9]\d{9}$/, // China (11 digits, mobile starts with 1)
     "+91": /^[6-9]\d{9}$/, // India (10 digits, mobile starts with 6-9)
     "+92": /^[1-9]\d{9,10}$/, // Pakistan (10-11 digits)
     "+93": /^[1-9]\d{8}$/, // Afghanistan (9 digits)
     "+880": /^[1-9]\d{9,10}$/, // Bangladesh (10-11 digits)
     "+94": /^[1-9]\d{8}$/, // Sri Lanka (9 digits)
     "+95": /^[1-9]\d{7,9}$/, // Myanmar (8-10 digits)
     "+960": /^[1-9]\d{6}$/, // Maldives (7 digits)
     "+975": /^[1-9]\d{6,7}$/, // Bhutan (7-8 digits)
     "+977": /^[1-9]\d{7,9}$/, // Nepal (8-10 digits)
     "+98": /^[1-9]\d{9}$/, // Iran (10 digits)

     // Southeast Asia
     "+66": /^[1-9]\d{7,8}$/, // Thailand (8-9 digits)
     "+84": /^[1-9]\d{8,9}$/, // Vietnam (9-10 digits)
     "+856": /^[1-9]\d{7,9}$/, // Laos (8-10 digits)
     "+855": /^[1-9]\d{7,8}$/, // Cambodia (8-9 digits)
     "+60": /^[1-9]\d{7,9}$/, // Malaysia (8-10 digits)
     "+65": /^[1-9]\d{7}$/, // Singapore (8 digits)
     "+62": /^[1-9]\d{8,11}$/, // Indonesia (9-12 digits)
     "+63": /^[1-9]\d{9}$/, // Philippines (10 digits)
     "+673": /^[1-9]\d{6}$/, // Brunei (7 digits)
     "+670": /^[1-9]\d{6,7}$/, // East Timor (7-8 digits)

     // Oceania
     "+61": /^[2-478]\d{8}$/, // Australia (9 digits)
     "+64": /^[2-9]\d{7,9}$/, // New Zealand (8-10 digits)
     "+679": /^[1-9]\d{6}$/, // Fiji (7 digits)
     "+676": /^[1-9]\d{4,6}$/, // Tonga (5-7 digits)
     "+685": /^[1-9]\d{4,6}$/, // Samoa (5-7 digits)
     "+684": /^[1-9]\d{6}$/, // American Samoa (7 digits)
     "+687": /^[1-9]\d{5}$/, // New Caledonia (6 digits)
     "+689": /^[1-9]\d{7}$/, // French Polynesia (8 digits)
     "+678": /^[1-9]\d{6}$/, // Vanuatu (7 digits)
     "+677": /^[1-9]\d{4,6}$/, // Solomon Islands (5-7 digits)
     "+675": /^[1-9]\d{6,7}$/, // Papua New Guinea (7-8 digits)

     // South America
     "+55": /^[1-9]{2}9?\d{8}$/, // Brazil (10-11 digits)
     "+52": /^[1-9]\d{9}$/, // Mexico (10 digits)
     "+54": /^[1-9]\d{9,10}$/, // Argentina (10-11 digits)
     "+56": /^[1-9]\d{8}$/, // Chile (9 digits)
     "+57": /^[1-9]\d{9}$/, // Colombia (10 digits)
     "+51": /^[1-9]\d{8}$/, // Peru (9 digits)
     "+58": /^[1-9]\d{9}$/, // Venezuela (10 digits)
     "+593": /^[1-9]\d{7,8}$/, // Ecuador (8-9 digits)
     "+595": /^[1-9]\d{8}$/, // Paraguay (9 digits)
     "+598": /^[1-9]\d{7}$/, // Uruguay (8 digits)
     "+591": /^[1-9]\d{7}$/, // Bolivia (8 digits)
     "+592": /^[1-9]\d{6}$/, // Guyana (7 digits)
     "+597": /^[1-9]\d{5,6}$/, // Suriname (6-7 digits)
     "+594": /^[1-9]\d{8}$/, // French Guiana (9 digits)

     // Africa
     "+27": /^[1-9]\d{8}$/, // South Africa (9 digits)
     "+20": /^[1-9]\d{8,9}$/, // Egypt (9-10 digits)
     "+234": /^[1-9]\d{9}$/, // Nigeria (10 digits)
     "+254": /^[1-9]\d{8}$/, // Kenya (9 digits)
     "+233": /^[1-9]\d{8}$/, // Ghana (9 digits)
     "+212": /^[1-9]\d{8}$/, // Morocco (9 digits)
     "+216": /^[1-9]\d{7}$/, // Tunisia (8 digits)
     "+213": /^[1-9]\d{8}$/, // Algeria (9 digits)
     "+218": /^[1-9]\d{8}$/, // Libya (9 digits)
     "+249": /^[1-9]\d{8}$/, // Sudan (9 digits)
     "+251": /^[1-9]\d{8}$/, // Ethiopia (9 digits)
     "+256": /^[1-9]\d{8}$/, // Uganda (9 digits)
     "+255": /^[1-9]\d{8}$/, // Tanzania (9 digits)
     "+250": /^[1-9]\d{8}$/, // Rwanda (9 digits)
     "+257": /^[1-9]\d{7}$/, // Burundi (8 digits)
     "+260": /^[1-9]\d{8}$/, // Zambia (9 digits)
     "+263": /^[1-9]\d{8}$/, // Zimbabwe (9 digits)
     "+265": /^[1-9]\d{7,8}$/, // Malawi (8-9 digits)
     "+266": /^[1-9]\d{7}$/, // Lesotho (8 digits)
     "+267": /^[1-9]\d{7}$/, // Botswana (8 digits)
     "+268": /^[1-9]\d{7}$/, // Eswatini (8 digits)
     "+264": /^[1-9]\d{7}$/, // Namibia (8 digits)
     "+258": /^[1-9]\d{8}$/, // Mozambique (9 digits)
     "+261": /^[1-9]\d{8}$/, // Madagascar (9 digits)
     "+230": /^[1-9]\d{6,7}$/, // Mauritius (7-8 digits)
     "+248": /^[1-9]\d{6}$/, // Seychelles (7 digits)
     "+262": /^[1-9]\d{8}$/, // Réunion (9 digits)
     "+269": /^[1-9]\d{6}$/, // Comoros (7 digits)
     "+290": /^[1-9]\d{3}$/, // Saint Helena (4 digits)

     // Middle East
     "+971": /^[1-9]\d{7,8}$/, // UAE (8-9 digits)
     "+966": /^[1-9]\d{8}$/, // Saudi Arabia (9 digits)
     "+965": /^[1-9]\d{7}$/, // Kuwait (8 digits)
     "+974": /^[1-9]\d{7}$/, // Qatar (8 digits)
     "+973": /^[1-9]\d{7}$/, // Bahrain (8 digits)
     "+968": /^[1-9]\d{7}$/, // Oman (8 digits)
     "+967": /^[1-9]\d{8}$/, // Yemen (9 digits)
     "+964": /^[1-9]\d{9}$/, // Iraq (10 digits)
     "+963": /^[1-9]\d{8}$/, // Syria (9 digits)
     "+961": /^[1-9]\d{6,7}$/, // Lebanon (7-8 digits)
     "+972": /^[1-9]\d{7,8}$/, // Israel (8-9 digits)
     "+970": /^[1-9]\d{7,8}$/, // Palestine (8-9 digits)
     "+962": /^[1-9]\d{7,8}$/, // Jordan (8-9 digits)
     "+90": /^[1-9]\d{9}$/, // Turkey (10 digits)

     // Central Asia & Caucasus
     "+995": /^[1-9]\d{8}$/, // Georgia (9 digits)
     "+374": /^[1-9]\d{7}$/, // Armenia (8 digits)
     "+994": /^[1-9]\d{8}$/, // Azerbaijan (9 digits)
     "+992": /^[1-9]\d{8}$/, // Tajikistan (9 digits)
     "+996": /^[1-9]\d{8}$/, // Kyrgyzstan (9 digits)
     "+998": /^[1-9]\d{8}$/, // Uzbekistan (9 digits)
     "+993": /^[1-9]\d{7}$/, // Turkmenistan (8 digits)

     // Pacific Islands
     "+691": /^[1-9]\d{6}$/, // Micronesia (7 digits)
     "+692": /^[1-9]\d{6}$/, // Marshall Islands (7 digits)
     "+680": /^[1-9]\d{6}$/, // Palau (7 digits)
     "+683": /^[1-9]\d{3}$/, // Niue (4 digits)
     "+682": /^[1-9]\d{4}$/, // Cook Islands (5 digits)
     "+686": /^[1-9]\d{4}$/, // Kiribati (5 digits)
     "+688": /^[1-9]\d{4}$/, // Tuvalu (5 digits)
     "+674": /^[1-9]\d{6}$/, // Nauru (7 digits)
};

interface QuotePopupProps {
     isOpen: boolean;
     onClose: () => void;
}

interface FormData {
     websiteUrl: string;
     name: string;
     email: string;
     phone: string;
     countryCode: string;
     company: string;
     details: string;
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
     });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState<{
          success: boolean;
          message: string;
     } | null>(null);
     const [currentStep, setCurrentStep] = useState(1);
     const [formErrors, setFormErrors] = useState<
          Partial<Record<keyof FormData, string>>
     >({});
     const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
     const [countrySearchTerm, setCountrySearchTerm] = useState("");

     const formRef = useRef<HTMLFormElement>(null);
     const modalRef = useRef<HTMLDivElement>(null);
     const countryDropdownRef = useRef<HTMLDivElement>(null);

     // Initialize EmailJS once when component mounts
     useEffect(() => {
          const publicKey =
               process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ??
               "Bc-i5YdvnKq246_sc";
          emailjs.init(publicKey);

          if (isOpen) {
               const handleEsc = (e: KeyboardEvent) => {
                    if (e.key === "Escape") {
                         if (isCountryDropdownOpen) {
                              setIsCountryDropdownOpen(false);
                         } else {
                              onClose();
                         }
                    }
               };
               const handleClickOutside = (e: MouseEvent) => {
                    if (
                         modalRef.current &&
                         !modalRef.current.contains(e.target as Node)
                    ) {
                         onClose();
                    }
                    if (
                         countryDropdownRef.current &&
                         !countryDropdownRef.current.contains(e.target as Node)
                    ) {
                         setIsCountryDropdownOpen(false);
                    }
               };

               document.body.style.overflow = "hidden";
               window.addEventListener("keydown", handleEsc);
               document.addEventListener("mousedown", handleClickOutside);

               return () => {
                    document.body.style.overflow = "";
                    window.removeEventListener("keydown", handleEsc);
                    document.removeEventListener(
                         "mousedown",
                         handleClickOutside
                    );
               };
          }
     }, [isOpen, onClose, isCountryDropdownOpen]);

     useEffect(() => {
          if (!isOpen) {
               setSubmitStatus(null);
               setCurrentStep(1);
               setFormErrors({});
               setIsCountryDropdownOpen(false);
               setCountrySearchTerm("");
          }
     }, [isOpen]);

     const validatePhone = (phone: string, countryCode: string): boolean => {
          if (!phone) return true; // Phone is optional

          // Remove all non-digit characters
          const cleanPhone = phone.replace(/\D/g, "");

          const pattern = PHONE_PATTERNS[countryCode];

          if (pattern) {
               return pattern.test(cleanPhone);
          }

          // Basic validation for countries without specific patterns
          // Most phone numbers are between 7-15 digits
          return cleanPhone.length >= 7 && cleanPhone.length <= 15;
     };

     const formatPhoneNumber = (phone: string, countryCode: string): string => {
          const cleanPhone = phone.replace(/\D/g, "");

          // Format based on country
          switch (countryCode) {
               case "+1": // US/Canada
                    if (cleanPhone.length === 10) {
                         return `(${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(
                              3,
                              6
                         )}-${cleanPhone.slice(6)}`;
                    }
                    break;
               case "+44": // UK
                    if (cleanPhone.length === 10) {
                         return `${cleanPhone.slice(0, 4)} ${cleanPhone.slice(
                              4,
                              7
                         )} ${cleanPhone.slice(7)}`;
                    }
                    break;
               case "+33": // France
                    if (cleanPhone.length === 9) {
                         return `${cleanPhone.slice(0, 1)} ${cleanPhone.slice(
                              1,
                              3
                         )} ${cleanPhone.slice(3, 5)} ${cleanPhone.slice(
                              5,
                              7
                         )} ${cleanPhone.slice(7)}`;
                    }
                    break;
               case "+49": // Germany
                    if (cleanPhone.length >= 10) {
                         return `${cleanPhone.slice(0, 3)} ${cleanPhone.slice(
                              3,
                              6
                         )} ${cleanPhone.slice(6)}`;
                    }
                    break;
               default:
                    // Basic formatting for other countries
                    if (cleanPhone.length >= 8) {
                         const mid = Math.floor(cleanPhone.length / 2);
                         return `${cleanPhone.slice(0, mid)} ${cleanPhone.slice(
                              mid
                         )}`;
                    }
          }

          return cleanPhone;
     };

     const validateForm = (step: number): boolean => {
          const errors: Partial<Record<keyof FormData, string>> = {};

          if (step === 1) {
               if (!formData.websiteUrl) {
                    errors.websiteUrl = "Website URL is required";
               } else if (
                    !/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}$/i.test(
                         formData.websiteUrl
                    )
               ) {
                    errors.websiteUrl = "Please enter a valid URL";
               }
          } else if (step === 2) {
               if (!formData.name) {
                    errors.name = "Name is required";
               }
               if (!formData.email) {
                    errors.email = "Email is required";
               } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    errors.email = "Please enter a valid email address";
               }
               if (
                    formData.phone &&
                    !validatePhone(formData.phone, formData.countryCode)
               ) {
                    const countryName =
                         COUNTRY_CODES.find(
                              (c) => c.code === formData.countryCode
                         )?.name || "selected country";
                    errors.phone = `Please enter a valid phone number for ${countryName}`;
               }
          }

          setFormErrors(errors);
          return Object.keys(errors).length === 0;
     };

     const handleCountrySelect = (countryCode: string) => {
          setFormData((prev) => ({ ...prev, countryCode }));
          setIsCountryDropdownOpen(false);
          setCountrySearchTerm("");
          if (formErrors.phone) {
               setFormErrors((prev) => {
                    const updated = { ...prev };
                    delete updated.phone;
                    return updated;
               });
          }
     };

     const filteredCountries = COUNTRY_CODES.filter(
          (country) =>
               country.name
                    .toLowerCase()
                    .includes(countrySearchTerm.toLowerCase()) ||
               country.code.includes(countrySearchTerm) ||
               country.country
                    .toLowerCase()
                    .includes(countrySearchTerm.toLowerCase())
     );

     const handleInputChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
          const { name, value } = e.target;

          if (name === "phone") {
               // Only allow digits, spaces, parentheses, and dashes
               const cleanValue = value.replace(/[^\d\s$$$$-]/g, "");
               setFormData((prev) => ({ ...prev, [name]: cleanValue }));
          } else {
               setFormData((prev) => ({ ...prev, [name]: value }));
          }

          if (formErrors[name as keyof FormData]) {
               setFormErrors((prev) => {
                    const updated = { ...prev };
                    delete updated[name as keyof FormData];
                    return updated;
               });
          }
     };

     const handleNextStep = () => {
          if (validateForm(currentStep)) setCurrentStep((prev) => prev + 1);
     };

     const handlePrevStep = () => {
          setCurrentStep((prev) => Math.max(1, prev - 1));
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          if (
               !formRef.current ||
               !(formRef.current instanceof HTMLFormElement)
          ) {
               console.error("Form reference is invalid.");
               return;
          }
          if (!validateForm(currentStep)) return;

          setIsSubmitting(true);
          setSubmitStatus(null);

          try {
               const serviceId =
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ??
                    "service_nxr837d";
               const templateId =
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ??
                    "template_3resqzt";

               const response = await emailjs.sendForm(
                    serviceId,
                    templateId,
                    formRef.current
               );
               console.log("Email sent successfully:", response);

               setSubmitStatus({
                    success: true,
                    message: "Thank you! Your request has been submitted. We'll get back to you soon with your free SEO analysis.",
               });
               setFormData({
                    websiteUrl: "",
                    name: "",
                    email: "",
                    phone: "",
                    countryCode: "+1",
                    company: "",
                    details: "",
               });
               setTimeout(() => onClose(), 3000);
          } catch (error) {
               console.error("Failed to send email:", error);
               setSubmitStatus({
                    success: false,
                    message: "Sorry, there was a problem submitting your request. Please try again later.",
               });
          } finally {
               setIsSubmitting(false);
          }
     };

     const renderStepIndicator = () => (
          <div className="flex items-center justify-center mb-6">
               {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                         <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                                   step < currentStep
                                        ? "bg-[#0084FF] text-white"
                                        : step === currentStep
                                        ? "bg-white border-2 border-[#0084FF] text-[#0084FF]"
                                        : "bg-gray-200 text-gray-500"
                              }`}
                         >
                              {step < currentStep ? (
                                   <CheckCircle className="w-5 h-5" />
                              ) : (
                                   step
                              )}
                         </div>
                         {step < 3 && (
                              <div
                                   className={`w-12 h-1 ${
                                        step < currentStep
                                             ? "bg-[#0084FF]"
                                             : "bg-gray-200"
                                   }`}
                              />
                         )}
                    </div>
               ))}
          </div>
     );

     const renderFormStep = () => {
          switch (currentStep) {
               case 1:
                    return (
                         <>
                              <h3 className="text-xl font-medium text-gray-800 mb-4">
                                   Website Information
                              </h3>
                              <div className="mb-4">
                                   <label
                                        htmlFor="websiteUrl"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                   >
                                        Website URL{" "}
                                        <span className="text-red-500">*</span>
                                   </label>
                                   <input
                                        type="url"
                                        id="websiteUrl"
                                        name="websiteUrl"
                                        placeholder="www.yourwebsite.com"
                                        required
                                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 ${
                                             formErrors.websiteUrl
                                                  ? "border-red-500 bg-red-50"
                                                  : "border-gray-300"
                                        }`}
                                        value={formData.websiteUrl}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                   />
                                   {formErrors.websiteUrl && (
                                        <p className="mt-1 text-sm text-red-500 flex items-center">
                                             <AlertCircle className="w-4 h-4 mr-1" />
                                             {formErrors.websiteUrl}
                                        </p>
                                   )}
                              </div>
                              <div className="mb-4">
                                   <label
                                        htmlFor="details"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                   >
                                        What are your main SEO goals?
                                   </label>
                                   <textarea
                                        id="details"
                                        name="details"
                                        rows={4}
                                        placeholder="Tell us about your SEO challenges and goals..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200"
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                   />
                              </div>
                         </>
                    );
               case 2:
                    return (
                         <>
                              <h3 className="text-xl font-medium text-gray-800 mb-4">
                                   Contact Information
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                   <div>
                                        <label
                                             htmlFor="name"
                                             className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                             Name{" "}
                                             <span className="text-red-500">
                                                  *
                                             </span>
                                        </label>
                                        <input
                                             type="text"
                                             id="name"
                                             name="name"
                                             required
                                             className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 ${
                                                  formErrors.name
                                                       ? "border-red-500 bg-red-50"
                                                       : "border-gray-300"
                                             }`}
                                             value={formData.name}
                                             onChange={handleInputChange}
                                             disabled={isSubmitting}
                                        />
                                        {formErrors.name && (
                                             <p className="mt-1 text-sm text-red-500 flex items-center">
                                                  <AlertCircle className="w-4 h-4 mr-1" />
                                                  {formErrors.name}
                                             </p>
                                        )}
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="email"
                                             className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                             Email{" "}
                                             <span className="text-red-500">
                                                  *
                                             </span>
                                        </label>
                                        <input
                                             type="email"
                                             id="email"
                                             name="email"
                                             required
                                             className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 ${
                                                  formErrors.email
                                                       ? "border-red-500 bg-red-50"
                                                       : "border-gray-300"
                                             }`}
                                             value={formData.email}
                                             onChange={handleInputChange}
                                             disabled={isSubmitting}
                                        />
                                        {formErrors.email && (
                                             <p className="mt-1 text-sm text-red-500 flex items-center">
                                                  <AlertCircle className="w-4 h-4 mr-1" />
                                                  {formErrors.email}
                                             </p>
                                        )}
                                   </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                   <div>
                                        <label
                                             htmlFor="phone"
                                             className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                             Phone Number
                                        </label>
                                        <div
                                             className="flex relative"
                                             ref={countryDropdownRef}
                                        >
                                             <button
                                                  type="button"
                                                  onClick={() =>
                                                       setIsCountryDropdownOpen(
                                                            !isCountryDropdownOpen
                                                       )
                                                  }
                                                  className={`flex items-center px-3 py-3 border rounded-l-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 min-w-[120px] ${
                                                       formErrors.phone
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                  }`}
                                                  disabled={isSubmitting}
                                             >
                                                  <span className="mr-2">
                                                       {
                                                            COUNTRY_CODES.find(
                                                                 (c) =>
                                                                      c.code ===
                                                                      formData.countryCode
                                                            )?.flag
                                                       }
                                                  </span>
                                                  <span className="text-sm font-medium mr-1">
                                                       {formData.countryCode}
                                                  </span>
                                                  <ChevronDown
                                                       className={`w-4 h-4 transition-transform ${
                                                            isCountryDropdownOpen
                                                                 ? "rotate-180"
                                                                 : ""
                                                       }`}
                                                  />
                                             </button>

                                             {isCountryDropdownOpen && (
                                                  <div className="absolute top-full left-0 z-50 w-96 bg-white border border-gray-300 rounded-md shadow-lg max-h-80 overflow-hidden">
                                                       <div className="p-3 border-b bg-gray-50">
                                                            <input
                                                                 type="text"
                                                                 placeholder="Search countries..."
                                                                 value={
                                                                      countrySearchTerm
                                                                 }
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      setCountrySearchTerm(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      )
                                                                 }
                                                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] text-sm"
                                                                 autoFocus
                                                            />
                                                       </div>
                                                       <div className="max-h-60 overflow-y-auto">
                                                            {filteredCountries.length >
                                                            0 ? (
                                                                 filteredCountries.map(
                                                                      (
                                                                           country,
                                                                           index
                                                                      ) => (
                                                                           <button
                                                                                key={`${country.code}-${country.country}-${index}`}
                                                                                type="button"
                                                                                onClick={() =>
                                                                                     handleCountrySelect(
                                                                                          country.code
                                                                                     )
                                                                                }
                                                                                className={`w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center transition-colors ${
                                                                                     formData.countryCode ===
                                                                                     country.code
                                                                                          ? "bg-blue-100"
                                                                                          : ""
                                                                                }`}
                                                                           >
                                                                                <span className="mr-3 text-lg">
                                                                                     {
                                                                                          country.flag
                                                                                     }
                                                                                </span>
                                                                                <span className="mr-3 font-medium text-blue-600 min-w-[60px]">
                                                                                     {
                                                                                          country.code
                                                                                     }
                                                                                </span>
                                                                                <span className="text-sm text-gray-700 truncate">
                                                                                     {
                                                                                          country.name
                                                                                     }
                                                                                </span>
                                                                           </button>
                                                                      )
                                                                 )
                                                            ) : (
                                                                 <div className="px-4 py-3 text-gray-500 text-sm">
                                                                      No
                                                                      countries
                                                                      found
                                                                 </div>
                                                            )}
                                                       </div>
                                                  </div>
                                             )}

                                             <input
                                                  type="tel"
                                                  id="phone"
                                                  name="phone"
                                                  placeholder="Enter phone number"
                                                  className={`flex-1 px-4 py-3 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200 ${
                                                       formErrors.phone
                                                            ? "border-red-500 bg-red-50"
                                                            : "border-gray-300"
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
                                             (optional){" "}
                                             {formData.phone &&
                                                  `Format: ${formatPhoneNumber(
                                                       formData.phone,
                                                       formData.countryCode
                                                  )}`}
                                        </p>
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="company"
                                             className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                             Company
                                        </label>
                                        <input
                                             type="text"
                                             id="company"
                                             name="company"
                                             placeholder="Your company name"
                                             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0084FF] transition-all duration-200"
                                             value={formData.company}
                                             onChange={handleInputChange}
                                             disabled={isSubmitting}
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                             (optional)
                                        </p>
                                   </div>
                              </div>
                         </>
                    );
               case 3:
                    return (
                         <>
                              <h3 className="text-xl font-medium text-gray-800 mb-4">
                                   Confirm Your Information
                              </h3>
                              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                             <p className="text-sm text-gray-500">
                                                  Website URL
                                             </p>
                                             <p className="font-medium">
                                                  {formData.websiteUrl}
                                             </p>
                                        </div>
                                        <div>
                                             <p className="text-sm text-gray-500">
                                                  Name
                                             </p>
                                             <p className="font-medium">
                                                  {formData.name}
                                             </p>
                                        </div>
                                        <div>
                                             <p className="text-sm text-gray-500">
                                                  Email
                                             </p>
                                             <p className="font-medium">
                                                  {formData.email}
                                             </p>
                                        </div>
                                        <div>
                                             <p className="text-sm text-gray-500">
                                                  Phone
                                             </p>
                                             <p className="font-medium">
                                                  {formData.phone
                                                       ? `${
                                                              COUNTRY_CODES.find(
                                                                   (c) =>
                                                                        c.code ===
                                                                        formData.countryCode
                                                              )?.flag
                                                         } ${
                                                              formData.countryCode
                                                         } ${formatPhoneNumber(
                                                              formData.phone,
                                                              formData.countryCode
                                                         )}`
                                                       : "Not provided"}
                                             </p>
                                        </div>
                                        <div>
                                             <p className="text-sm text-gray-500">
                                                  Company
                                             </p>
                                             <p className="font-medium">
                                                  {formData.company ||
                                                       "Not provided"}
                                             </p>
                                        </div>
                                   </div>
                                   {formData.details && (
                                        <div className="mt-4">
                                             <p className="text-sm text-gray-500">
                                                  SEO Goals
                                             </p>
                                             <p className="font-medium">
                                                  {formData.details}
                                             </p>
                                        </div>
                                   )}
                              </div>
                              <div className="bg-blue-50 border-l-4 border-[#0084FF] p-4 mb-6">
                                   <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <div>
                                             <p className="text-sm text-gray-700 font-medium mb-1">
                                                  What happens next?
                                             </p>
                                             <ul className="text-sm text-gray-600 space-y-1">
                                                  <li>
                                                       • Our SEO experts will
                                                       analyze your website
                                                       within 2-3 business days
                                                  </li>
                                                  <li>
                                                       • You'll receive a
                                                       comprehensive report with
                                                       actionable
                                                       recommendations
                                                  </li>
                                                  <li>
                                                       • We'll identify
                                                       opportunities to improve
                                                       your search rankings and
                                                       traffic
                                                  </li>
                                                  <li>
                                                       • No obligation - this
                                                       analysis is completely
                                                       free
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </>
                    );
               default:
                    return null;
          }
     };

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
                              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                         >
                              <motion.div
                                   ref={modalRef}
                                   className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                                   initial={{ scale: 0.95, y: 10 }}
                                   animate={{ scale: 1, y: 0 }}
                                   exit={{ scale: 0.95, opacity: 0 }}
                                   transition={{
                                        type: "spring",
                                        damping: 25,
                                        stiffness: 300,
                                   }}
                              >
                                   <div className="bg-[#0084FF] py-6 px-6 sm:px-8 relative text-white">
                                        <button
                                             onClick={onClose}
                                             className="absolute right-4 top-4 p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                                             aria-label="Close popup"
                                             disabled={isSubmitting}
                                        >
                                             <X className="h-5 w-5" />
                                        </button>
                                        <div className="flex flex-col sm:flex-row items-center gap-6">
                                             <div className="flex-1">
                                                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                                       FREE Website SEO Analysis
                                                  </h2>
                                                  <p className="text-sm sm:text-base text-white/90">
                                                       Our team will review your
                                                       website&apos;s SEO
                                                       performance and provide
                                                       actionable
                                                       recommendations to boost
                                                       your rankings and
                                                       traffic.
                                                  </p>
                                             </div>
                                             <div className="flex-shrink-0 hidden sm:block">
                                                  <div className="bg-white/20 p-3 rounded-full">
                                                       <Image
                                                            src={
                                                                 Seoptimize ||
                                                                 "/placeholder.svg?height=80&width=80&query=SEO analysis illustration"
                                                            }
                                                            alt="SEO Analysis Illustration"
                                                            width={80}
                                                            height={80}
                                                            className="object-contain"
                                                            priority
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                                        {submitStatus && (
                                             <motion.div
                                                  initial={{
                                                       opacity: 0,
                                                       y: -10,
                                                  }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  className={`mb-6 p-4 rounded-md ${
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
                                                       <p>
                                                            {
                                                                 submitStatus.message
                                                            }
                                                       </p>
                                                  </div>
                                             </motion.div>
                                        )}

                                        {renderStepIndicator()}

                                        <form
                                             ref={formRef}
                                             onSubmit={handleSubmit}
                                             className="quote-form-email"
                                        >
                                             <AnimatePresence mode="wait">
                                                  <motion.div
                                                       key={currentStep}
                                                       initial={{
                                                            opacity: 0,
                                                            x: 20,
                                                       }}
                                                       animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                       }}
                                                       exit={{
                                                            opacity: 0,
                                                            x: -20,
                                                       }}
                                                       transition={{
                                                            duration: 0.3,
                                                       }}
                                                  >
                                                       {renderFormStep()}
                                                  </motion.div>
                                             </AnimatePresence>

                                             {/* Hidden inputs to include all data */}
                                             <input
                                                  type="hidden"
                                                  name="websiteUrl"
                                                  value={formData.websiteUrl}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="details"
                                                  value={formData.details}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="name"
                                                  value={formData.name}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="email"
                                                  value={formData.email}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="phone"
                                                  value={
                                                       formData.phone
                                                            ? `${formData.countryCode} ${formData.phone}`
                                                            : ""
                                                  }
                                             />
                                             <input
                                                  type="hidden"
                                                  name="company"
                                                  value={formData.company}
                                             />
                                             <input
                                                  type="hidden"
                                                  name="countryCode"
                                                  value={formData.countryCode}
                                             />

                                             <div className="flex justify-between items-center mt-8">
                                                  {currentStep > 1 ? (
                                                       <button
                                                            type="button"
                                                            onClick={
                                                                 handlePrevStep
                                                            }
                                                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50"
                                                            disabled={
                                                                 isSubmitting
                                                            }
                                                       >
                                                            Back
                                                       </button>
                                                  ) : (
                                                       <button
                                                            type="button"
                                                            onClick={onClose}
                                                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50"
                                                            disabled={
                                                                 isSubmitting
                                                            }
                                                       >
                                                            Cancel
                                                       </button>
                                                  )}
                                                  {currentStep < 3 ? (
                                                       <motion.button
                                                            type="button"
                                                            onClick={
                                                                 handleNextStep
                                                            }
                                                            className="bg-[#0084FF] hover:bg-[#0066cc] text-white py-2.5 px-8 rounded-md flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 focus:ring-offset-2"
                                                            whileHover={{
                                                                 scale: 1.02,
                                                            }}
                                                            whileTap={{
                                                                 scale: 0.98,
                                                            }}
                                                            disabled={
                                                                 isSubmitting
                                                            }
                                                       >
                                                            <span>
                                                                 Continue
                                                            </span>
                                                            <ArrowRight className="h-4 w-4 ml-1" />
                                                       </motion.button>
                                                  ) : (
                                                       <motion.button
                                                            type="submit"
                                                            className="bg-[#0084FF] hover:bg-[#0066cc] text-white py-2.5 px-8 rounded-md flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 focus:ring-offset-2"
                                                            disabled={
                                                                 isSubmitting
                                                            }
                                                            whileHover={{
                                                                 scale: 1.02,
                                                            }}
                                                            whileTap={{
                                                                 scale: 0.98,
                                                            }}
                                                       >
                                                            {isSubmitting ? (
                                                                 <>
                                                                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                                      Sending...
                                                                 </>
                                                            ) : (
                                                                 <span>
                                                                      Submit
                                                                      Request
                                                                 </span>
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
     );
}
