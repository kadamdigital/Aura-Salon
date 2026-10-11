/**
 * Realistic Salon Menu Data with Illustrative Pricing in Indian Rupees (₹)
 * Note: Sample prices for fictional salon; may vary by hair length, stylist, and treatment requirements.
 */

export const SERVICE_CATEGORIES = [
  {
    id: "haircuts",
    name: "Haircuts & Styling",
    description: "Precision cutting, texture shaping, and signature blowouts tailored to your face structure."
  },
  {
    id: "colour",
    name: "Hair Colour",
    description: "Dimensional balayage, radiant globals, and delicate tonal glazes using premium colorants."
  },
  {
    id: "treatments",
    name: "Hair Treatments",
    description: "Intensive moisture therapies, scalp rejuvenation, and smoothing rituals."
  },
  {
    id: "skin",
    name: "Skin & Beauty",
    description: "Curated facials, meticulous brow artistry, and luminous event makeup."
  },
  {
    id: "grooming",
    name: "Grooming & Waxing",
    description: "Refined beard sculpting, clean contouring, and smooth botanical waxing."
  }
];

export const SALON_SERVICES = [
  // A. Haircuts and Styling
  {
    id: "womens-haircut",
    categoryId: "haircuts",
    name: "Women's Haircut",
    description: "Custom consultation, precision haircut, and gentle blowout tailored to your natural texture.",
    price: "₹800 onwards",
    rawPrice: 800,
    duration: "45 mins",
    popular: true
  },
  {
    id: "mens-haircut",
    categoryId: "haircuts",
    name: "Men's Haircut",
    description: "Tailored scissor or clipper fade, scalp cleanse, neck taper, and matte styling finish.",
    price: "₹400 onwards",
    rawPrice: 400,
    duration: "30 mins",
    popular: false
  },
  {
    id: "kids-haircut",
    categoryId: "haircuts",
    name: "Kids' Haircut",
    description: "Gentle, patient styling for young guests up to 12 years with a fun, comfortable experience.",
    price: "₹350 onwards",
    rawPrice: 350,
    duration: "30 mins",
    popular: false
  },
  {
    id: "blow-dry-styling",
    categoryId: "haircuts",
    name: "Blow Dry & Styling",
    description: "Volumising or sleek blowout using thermal protection and botanical finishing serums.",
    price: "₹600 onwards",
    rawPrice: 600,
    duration: "40 mins",
    popular: false
  },
  {
    id: "wash-cut-finish",
    categoryId: "haircuts",
    name: "Wash, Cut & Finish",
    description: "Aromatherapy hair wash, deep conditioning rinse, designer haircut, and luxury blowout.",
    price: "₹1,000 onwards",
    rawPrice: 1000,
    duration: "60 mins",
    popular: true
  },
  {
    id: "special-occasion-hairstyling",
    categoryId: "haircuts",
    name: "Special Occasion Hairstyling",
    description: "Editorial updos, Hollywood waves, or intricate braided textures for galas, soirées, and celebrations.",
    price: "₹1,500 onwards",
    rawPrice: 1500,
    duration: "75 mins",
    popular: false
  },

  // B. Hair Colour
  {
    id: "root-touch-up",
    categoryId: "colour",
    name: "Root Touch-Up",
    description: "Seamless grey coverage or regrowth tint blending perfectly into your existing base shade.",
    price: "₹1,500 onwards",
    rawPrice: 1500,
    duration: "60 mins",
    popular: false
  },
  {
    id: "global-hair-colour",
    categoryId: "colour",
    name: "Global Hair Colour",
    description: "Rich, uniform all-over tone with luminous shine and nourishing bond-reinforcing care.",
    price: "₹2,500 onwards",
    rawPrice: 2500,
    duration: "90 mins",
    popular: true
  },
  {
    id: "highlights-balayage",
    categoryId: "colour",
    name: "Highlights / Balayage",
    description: "Freehand sun-kissed placement or foil highlights for seamless gradient dimension and depth.",
    price: "₹4,000 onwards",
    rawPrice: 400,
    duration: "150 mins",
    popular: true
  },
  {
    id: "fashion-colour-consultation",
    categoryId: "colour",
    name: "Fashion Colour Consultation",
    description: "One-on-one strand test and shade planning for pastel, vivid, or high-contrast transformations.",
    price: "₹500",
    rawPrice: 500,
    duration: "25 mins",
    popular: false
  },
  {
    id: "toner-gloss-treatment",
    categoryId: "colour",
    name: "Toner / Gloss Treatment",
    description: "Neutralises brassiness, refreshes faded mid-lengths, and infuses multi-dimensional mirror gloss.",
    price: "₹1,200 onwards",
    rawPrice: 1200,
    duration: "40 mins",
    popular: false
  },

  // C. Hair Treatments
  {
    id: "deep-conditioning",
    categoryId: "treatments",
    name: "Deep Conditioning",
    description: "Intense moisture replenishment infused with plant lipids for dry, heat-stressed strands.",
    price: "₹900 onwards",
    rawPrice: 900,
    duration: "45 mins",
    popular: false
  },
  {
    id: "hair-spa",
    categoryId: "treatments",
    name: "Hair Spa",
    description: "Luxurious scalp massage, nutrient-rich botanical mask, and micro-mist steam for strand vitality.",
    price: "₹1,200 onwards",
    rawPrice: 1200,
    duration: "60 mins",
    popular: true
  },
  {
    id: "frizz-control-treatment",
    categoryId: "treatments",
    name: "Frizz Control Treatment",
    description: "Seals cuticles against humidity, softens coarse texture, and restores manageable softness.",
    price: "₹2,500 onwards",
    rawPrice: 2500,
    duration: "90 mins",
    popular: false
  },
  {
    id: "keratin-smoothing-consultation",
    categoryId: "treatments",
    name: "Keratin / Smoothing Consultation",
    description: "Diagnostic hair assessment and custom formulation recommendation for prolonged smoothing.",
    price: "₹500",
    rawPrice: 500,
    duration: "30 mins",
    popular: false
  },
  {
    id: "scalp-care-treatment",
    categoryId: "treatments",
    name: "Scalp Care Treatment",
    description: "Purifying exfoliation, clarifying botanical rinse, and calming hydration for a balanced scalp barrier.",
    price: "₹1,000 onwards",
    rawPrice: 1000,
    duration: "50 mins",
    popular: false
  },

  // D. Skin and Beauty
  {
    id: "express-facial",
    categoryId: "skin",
    name: "Express Facial",
    description: "Targeted cleanse, gentle enzymatic exfoliation, and radiance mask for an immediate glow.",
    price: "₹1,000 onwards",
    rawPrice: 1000,
    duration: "35 mins",
    popular: false
  },
  {
    id: "deep-cleansing-facial",
    categoryId: "skin",
    name: "Deep Cleansing Facial",
    description: "Pore clarification, blackhead relief, purifying steam, and balancing clay mask for congested skin.",
    price: "₹1,500 onwards",
    rawPrice: 1500,
    duration: "60 mins",
    popular: true
  },
  {
    id: "hydrating-facial",
    categoryId: "skin",
    name: "Hydrating Facial",
    description: "Hyaluronic acid infusion, cold stone drainage massage, and moisture shield for supple, plump skin.",
    price: "₹1,800 onwards",
    rawPrice: 1800,
    duration: "60 mins",
    popular: false
  },
  {
    id: "clean-up",
    categoryId: "skin",
    name: "Clean-Up",
    description: "Quick skin refresh with gentle scrubbing, steam, and soothing floral toner for everyday upkeep.",
    price: "₹700 onwards",
    rawPrice: 700,
    duration: "30 mins",
    popular: false
  },
  {
    id: "threading",
    categoryId: "skin",
    name: "Threading",
    description: "Delicate organic cotton thread hair removal for upper lip, chin, or forehead with precision.",
    price: "₹100 onwards",
    rawPrice: 100,
    duration: "15 mins",
    popular: false
  },
  {
    id: "eyebrow-shaping",
    categoryId: "skin",
    name: "Eyebrow Shaping",
    description: "Architectural brow mapping and clean threading to frame your facial proportions naturally.",
    price: "₹150 onwards",
    rawPrice: 150,
    duration: "20 mins",
    popular: true
  },
  {
    id: "professional-makeup",
    categoryId: "skin",
    name: "Professional Makeup",
    description: "Custom skin prep, seamless base application, and defined features for cocktail evenings or parties.",
    price: "₹2,500 onwards",
    rawPrice: 2500,
    duration: "75 mins",
    popular: false
  },

  // E. Grooming and Waxing
  {
    id: "beard-trim-shape",
    categoryId: "grooming",
    name: "Beard Trim & Shape",
    description: "Sharp contour edging, length balance, warm towel press, and nourishing conditioning oil finish.",
    price: "₹250 onwards",
    rawPrice: 250,
    duration: "25 mins",
    popular: true
  },
  {
    id: "beard-styling",
    categoryId: "grooming",
    name: "Beard Styling",
    description: "Artistic sculpting, fade integration into sideburns, and hot-towel essential oil ritual.",
    price: "₹400 onwards",
    rawPrice: 400,
    duration: "35 mins",
    popular: false
  },
  {
    id: "underarm-waxing",
    categoryId: "grooming",
    name: "Underarm Waxing",
    description: "Gentle sensitive-skin peel-off wax followed by cooling aloe vera calamine soothing emulsion.",
    price: "₹250 onwards",
    rawPrice: 250,
    duration: "15 mins",
    popular: false
  },
  {
    id: "full-arm-waxing",
    categoryId: "grooming",
    name: "Full Arm Waxing",
    description: "Smooth, clean hair removal using skin-kind chocolate or rica wax formulas.",
    price: "₹500 onwards",
    rawPrice: 500,
    duration: "30 mins",
    popular: false
  },
  {
    id: "full-leg-waxing",
    categoryId: "grooming",
    name: "Full Leg Waxing",
    description: "Silky finish with post-depilatory cooling hydration to soothe and soften the skin.",
    price: "₹800 onwards",
    rawPrice: 800,
    duration: "45 mins",
    popular: true
  }
];
