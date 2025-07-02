export const servicesData = [
  // Hair & Chemical Services
  {
    id: 'baby-cut',
    title: 'Baby Cut',
    description: 'Gentle hair trimming for maintaining healthy hair length',
    image: './babyCut.webp',
    category: 'Hair & Chemical',
    features: ['Precision cutting', 'Hair styling', 'Professional tools'],
    detailed: {
      fullDescription: 'Our baby cut service focuses on gentle trimming to maintain healthy hair while preserving length. Perfect for those who want to keep their hair healthy without dramatic changes.',
      benefits: ['Removes split ends', 'Maintains hair health', 'Professional styling'],
      duration: '30-45 minutes'
    }
  },
  {
    id: 'basic-cut',
    title: 'Basic Cut',
    description: 'Classic hair cutting service for everyday styling',
    image: './cut.jpeg',
    category: 'Hair & Chemical',
    features: ['Style consultation', 'Precision cutting', 'Basic styling'],
    detailed: {
      fullDescription: 'Our basic cut service includes consultation, precision cutting, and basic styling to give you a fresh, polished look.',
      benefits: ['Fresh new look', 'Professional cutting', 'Style advice'],
      duration: '45-60 minutes'
    }
  },
  {
    id: 'advance-cut',
    title: 'Advance Cut',
    description: 'Sophisticated cutting techniques for trendy and modern styles',
    image: './cut2.jpeg',
    category: 'Hair & Chemical',
    features: ['Advanced techniques', 'Trend consultation', 'Premium styling'],
    detailed: {
      fullDescription: 'Advanced cutting service using the latest techniques and trends. Includes detailed consultation and premium styling.',
      benefits: ['Trendy styles', 'Advanced techniques', 'Premium finish'],
      duration: '60-90 minutes'
    }
  },
  {
    id: 'split-ends-sitting',
    title: 'Split Ends Manually',
    description: 'Manual split end removal for healthier hair',
    image: './splitEnd.jpg',
    category: 'Hair & Chemical',
    features: ['Manual removal', 'Hair analysis', 'Conditioning treatment']
  },
  {
    id: 'split-ends-machine',
    title: 'Split Ends (Machine)',
    description: 'Advanced machine treatment for split end removal',
    image: './split2.png',
    category: 'Hair & Chemical',
    features: ['Machine treatment', 'Precision removal', 'Deep conditioning']
  },
  {
    id: 'head-wash-loreal',
    title: 'Head Wash ',
    description: 'Premium hair washing with L\'Oreal , Wella products',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    category: 'Hair & Chemical',
    brands: ['L\'Oreal / Wella'],
    features: ['Premium products', 'Scalp massage', 'Deep cleansing']
  },
 

  // Hair Styling
  {
    id: 'pressing-crimping',
    title: 'Pressing / Crimping',
    description: 'Heat styling for smooth, sleek or textured hair',
    image: './pressing.jpeg',
    category: 'Hair Styling',
    features: ['Heat protection', 'Long-lasting results', 'Versatile styling']
  },
  {
    id: 'curls',
    title: 'Curls',
    description: 'Beautiful curl creation for bouncy, voluminous hair',
    image: './curls.jpg',
    category: 'Hair Styling',
    features: ['Volume enhancement', 'Long-lasting curls', 'Heat protection']
  },
  {
    id: 'blow-dry-straight',
    title: 'Blow Dry (Straight)',
    description: 'Professional blow drying for sleek, straight hair',
    image: './blow.jpg',
    category: 'Hair Styling',
    features: ['Smooth finish', 'Frizz control', 'Long-lasting style']
  },
  {
    id: 'blow-dry-curl',
    title: 'Blow Dry (Curl)',
    description: 'Professional blow drying with curl formation',
    image: './curls2.webp',
    category: 'Hair Styling',
    features: ['Bouncy curls', 'Volume boost', 'Professional finish']
  },

  // Hair Spa
  {
    id: 'hair-spa-matrix',
    title: 'Hair Spa (Matrix)',
    description: 'Luxurious hair spa treatment with Matrix products',
    image: './spa1.jpeg',
    category: 'Hair Spa',
    brands: ['Matrix'],
    features: ['Deep conditioning', 'Scalp massage', 'Hair repair']
  },
  {
    id: 'hair-spa-loreal',
    title: 'Hair Spa (L\'Oreal)',
    description: 'Premium hair spa experience with L\'Oreal treatments',
    image: './spa2.webp',
    category: 'Hair Spa',
    brands: ['L\'Oreal'],
    features: ['Intensive treatment', 'Scalp therapy', 'Hair strengthening']
  },
  {
    id: 'hair-spa-wella',
    title: 'Hair Spa (Wella)',
    description: 'Professional hair spa with Wella\'s advanced formulas',
    image: './spa3.jpg',
    category: 'Hair Spa',
    brands: ['Wella'],
    features: ['Professional treatment', 'Deep nourishment', 'Repair therapy']
  },

  // Global Colour
  {
    id: 'global-colour-matrix',
    title: 'Global Colours ',
    description: 'Full hair coloring with Matrix , L\'Oreal and Wella professional colours',
    image: './hair.jpeg',
    category: 'Global Colour & Fashion Shades',
    brands: ['Matrix / L\'Oreal / Wella'],
    features: ['Full coverage', 'Long-lasting color', 'Professional application']
  },
 

  // Fashion Shades
  {
    id: 'fashion-shades-normal',
    title: 'Fashion Shades (Normal)',
    description: 'Trendy color highlights and creative coloring',
    image: './hair2.jpeg',
    category: 'Global Colour & Fashion Shades',
    features: ['Creative colors', 'Trend-focused', 'Artistic application']
  },
  {
    id: 'fashion-shades-blond',
    title: 'Fashion Shades (Blond)',
    description: 'Specialized blonde coloring and highlighting',
    image: 'hair3.jpeg',
    category: 'Global Colour & Fashion Shades',
    features: ['Blonde expertise', 'Toning service', 'Damage protection']
  },
  

  // Highlights & Treatments
  {
    id: 'highlights',
    title: 'Highlights',
    description: 'Professional hair highlighting for dimension and style',
    image: './highlioght.jpeg',
    category: 'Highlights / Root Touch-Up / Rebonding',
    features: ['Dimensional color', 'Expert placement', 'Natural effects']
  },
  {
    id: 'root-touch-up',
    title: 'Root Touch-Up',
    description: 'Maintain your color with professional root touch-up',
    image: './root.png',
    category: 'Highlights / Root Touch-Up / Rebonding',
    features: ['Color matching', 'Seamless blend', 'Quick service']
  },
  {
    id: 'rebonding',
    title: 'Rebonding',
    description: 'Permanent hair straightening for smooth, sleek hair',
    image: './rebound.jpeg',
    category: 'Highlights / Root Touch-Up / Rebonding',
    features: ['Permanent results', 'Frizz elimination', 'Long-lasting smooth hair']
  },

  // Facial Services
  {
    id: 'fruits-facial',
    title: 'Fruits Facial',
    description: 'Natural fruit-based facial for glowing skin',
    image: './facial2.jpeg',
    category: 'Facial & Cheryl\'s Facial',
    features: ['Natural ingredients', 'Vitamin-rich', 'Gentle cleansing']
  },
  {
    id: 'gold-facial',
    title: 'Gold Facial',
    description: 'Luxurious gold facial for anti-aging and radiance',
    image: './gold.webp',
    category: 'Facial & Cheryl\'s Facial',
    features: ['Anti-aging', 'Luxury treatment', 'Radiance boost']
  },
  {
    id: 'insta-fair-facial',
    title: 'Insta Fair Facial',
    description: 'Instant fairness and brightening facial treatment',
    image: './facial5.jpeg',
    category: 'Facial & Cheryl\'s Facial',
    features: ['Instant results', 'Skin brightening', 'Even tone']
  },
  {
    id: 'bridal-facial',
    title: 'Bridal Facial',
    description: 'Complete bridal facial package for your special day',
    image: './facial.jpeg',
    category: 'Facial & Cheryl\'s Facial',
    features: ['Bridal glow', 'Multi-step treatment', 'Long-lasting results']
  },
  {
    id: 'vitamin-c-facial',
    title: 'Vitamin C Facial',
    description: 'Antioxidant-rich facial for healthy, glowing skin',
    image: 'https://images.pexels.com/photos/3998013/pexels-photo-3998013.jpeg',
    category: 'Facial & Cheryl\'s Facial',
    features: ['Antioxidant boost', 'Collagen support', 'Natural glow']
  },

  // Cheryl's Facial
  {
    id: 'oxy-blast-facial',
    title: 'Lotus Citrus Facial',
    description:  'Brightening facial with the goodness of citrus for clear, radiant skin',
    image: './facial6.jpeg',
    category: 'Facial & Cheryl\'s Facial',
    brands: ['Lotus'],
    features: ['Citrus extract', 'Skin brightening', 'Deep cleansing']
  },
  {
    id: 'vita-lift-facial',
    title: 'Aroma Magic Facial',
    description: 'Aromatherapy facial to relax, rejuvenate, and nourish the skin',
    image: './facial5.jpeg',
    category: 'Facial & Cheryl\'s Facial',
    brands: ['Aroma Magic'],
    features:  ['Essential oils', 'Relaxing effect', 'Skin nourishment']
  },

  // Manicure & Pedicure
  {
    id: 'basic-manicure',
    title: 'Basic Manicure',
    description: 'Essential nail care and grooming for hands',
    image: './mani.jpeg',
    category: 'Manicure & Pedicure',
    features: ['Nail shaping', 'Cuticle care', 'Polish application']
  },
  {
    id: 'crystal-manicure',
    title: 'Crystal Manicure',
    description: 'Premium manicure with crystal treatments',
    image: './mani2.jpeg',
    category: 'Manicure & Pedicure',
    features: ['Crystal treatment', 'Luxurious care', 'Extended wear']
  },
  {
    id: 'vlcc-manicure',
    title: 'VLCC Manicure',
    description: 'Professional manicure with VLCC products',
    image: './mani3.jpeg',
    category: 'Manicure & Pedicure',
    brands: ['VLCC'],
    features: ['Professional products', 'Advanced treatment', 'Long-lasting results']
  },
  {
    id: 'basic-pedicure',
    title: 'Basic Pedicure',
    description: 'Essential foot care and nail grooming',
    image: './pedi1.webp',
    category: 'Manicure & Pedicure',
    features: ['Foot care', 'Nail grooming', 'Relaxing treatment']
  },
  {
    id: 'crystal-pedicure',
    title: 'Crystal Pedicure',
    description: 'Luxurious pedicure with crystal treatments',
    image: './pedi5.jpeg',
    category: 'Manicure & Pedicure',
    features: ['Crystal therapy', 'Deep cleansing', 'Moisturizing treatment']
  },
  {
    id: 'vlcc-pedicure',
    title: 'VLCC Pedicure',
    description: 'Professional pedicure with VLCC expertise',
    image: './pedi2.webp',
    category: 'Manicure & Pedicure',
    brands: ['VLCC'],
    features: ['Professional grade', 'Advanced formulas', 'Comprehensive care']
  }
];

export const categories = [
  'Waxing',
  'Hair & Chemical',
  'Hair Styling',
  'Hair Spa',
  'Global Colour & Fashion Shades',
  'Highlights / Root Touch-Up / Rebonding',
  'Facial & Cheryl\'s Facial',
  'Manicure & Pedicure'
];