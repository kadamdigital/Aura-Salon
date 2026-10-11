/**
 * AURA SALON — Brand Configuration & Business Placeholders
 * 
 * Edit this file to customize business details, contact information,
 * and WhatsApp booking routing.
 */

export const SALON_CONFIG = {
  brandName: "AURA SALON",
  tagline: "A Little Luxury. A Whole New You.",
  eyebrow: "YOUR BEAUTY, REIMAGINED",
  subheading: "Thoughtful hair, beauty and grooming experiences designed around you.",
  locationDetail: "Your neighbourhood beauty destination.",
  portfolioAttribution: "Website concept by Kadam Digital",

  // CONTACT & LOCATION (Placeholders — customize for real deployment)
  address: "Add salon address, Mumbai, Maharashtra",
  addressNotes: "Valet parking available upon request. Advance appointments recommended.",
  phone: "+91 98200 00000",
  email: "concierge@aurasalon.example.com",

  // WHATSAPP BOOKING CONFIGURATION:
  // Set to a valid Indian international number format without '+' or spaces, e.g. "919820000000".
  // Leave empty ("") to show the demo guidance modal when visitors click WhatsApp booking.
  whatsappNumber: "", 

  // OPERATING HOURS
  hours: {
    weekday: "10:00 AM – 8:00 PM",
    weekdayDays: "Monday – Saturday",
    weekend: "11:00 AM – 6:00 PM",
    weekendDays: "Sunday"
  },

  // TIME SLOTS FOR APPOINTMENTS
  timeSlots: [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM"
  ],

  // SOCIAL LINKS (Configurable destinations)
  socialLinks: [
    { name: "Instagram", url: "https://instagram.com", handle: "@aurasalon.official" },
    { name: "Facebook", url: "https://facebook.com", handle: "Aura Salon Luxury" },
    { name: "Pinterest", url: "https://pinterest.com", handle: "aurasalon_looks" }
  ]
};
