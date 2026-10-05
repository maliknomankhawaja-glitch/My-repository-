export interface ShopProduct {
  id: string;
  name: string;
  category: 
    | 'suits'
    | 'waistcoats'
    | 'formal-shirts'
    | 'casual-shirts'
    | 'trousers'
    | 'kurtas'
    | 'shalwar-kameez'
    | 'polo-shirts'
    | 't-shirts'
    | 'jackets'
    | 'sweaters'
    | 'accessories';
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  price: number;
  formattedPrice: string;
  tagline: string;
  description: string;
  primaryImage: string;
  hoverImage: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  fabric: string;
  fabricOrigin: string;
  fit?: 'Slim Fit' | 'Tailored Regular' | 'Relaxed Drape' | 'Classic Formal';
  occasion?: string;
  collection: string;
  availability: 'In Stock' | 'Bespoke Commission';
  stockUnits?: number;
  subType?: string;
  tailoringNotes: string[];
}

export const SHOP_CATEGORIES = [
  { id: 'all', label: 'All Creations (282)' },
  { id: 'new-arrivals', label: 'New Arrivals' },
  { id: 'best-sellers', label: 'Best Sellers' },
  { id: 'suits', label: 'Suits (44)' },
  { id: 'waistcoats', label: 'Waistcoats (26)' },
  { id: 'formal-shirts', label: 'Formal Shirts (26)' },
  { id: 'casual-shirts', label: 'Casual Shirts (22)' },
  { id: 'trousers', label: 'Trousers & Pants (26)' },
  { id: 'kurtas', label: 'Kurtas (26)' },
  { id: 'shalwar-kameez', label: 'Shalwar Kameez (26)' },
  { id: 'jackets', label: 'Jackets (16)' },
  { id: 'polo-shirts', label: 'Polo Shirts (16)' },
  { id: 't-shirts', label: 'T-Shirts (16)' },
  { id: 'sweaters', label: 'Sweaters & Knitwear (16)' },
  { id: 'accessories', label: 'Accessories (22)' },
];

export const SHOP_COLLECTIONS = [
  'All Collections',
  'Signature Collection',
  'Premium Collection',
  'Formal Collection',
  'Wedding Collection',
  'Eid Collection',
  'Traditional Collection',
  'Business Collection',
  'Evening Collection',
  'Summer Collection',
  'Winter Collection',
  'Essential Collection',
  'Limited Edition',
  'N.K FABRICS Essentials',
];

export const ALL_PRODUCTS: ShopProduct[] = [
  {
    "id": "nk-suit-chalk-stripe-power",
    "name": "N.K FABRICS Savile Row Chalk Stripe Three-Piece",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 4400,
    "formattedPrice": "$4,400",
    "tagline": "English Worsted Navy Chalk Stripe with Sculpted High-V Waistcoat",
    "description": "The commanding boardroom authority. Heavyweight English chalk stripe flannel with roped structured shoulders, hand-sewn buttonholes, and a matching six-button waistcoat with watch chain pocket.",
    "primaryImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Navy Chalk Stripe",
        "hex": "#152238"
      },
      {
        "name": "Charcoal Chalk Stripe",
        "hex": "#2B2B2B"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "English Worsted Flannel with Natural Chalk Pinstripe (320g/m)",
    "fabricOrigin": "Fox Brothers & Co., Somerset, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Authentic Savile Row roped shoulder head",
      "High-V sculpted waistcoat with watch chain eyelet",
      "Flat-front trousers with forward pleats and brass side adjusters"
    ]
  },
  {
    "id": "nk-suit-black-signature",
    "name": "N.K FABRICS Black Signature Three-Piece Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 4200,
    "formattedPrice": "$4,200",
    "tagline": "Super 160s Virgin Wool with Silk Satin Details & Tailored Waistcoat",
    "description": "The definitive black-tie power suit. Hand-padded floating horsehair canvas ensures an immaculate roll across the chest, paired with a matching five-button tailored waistcoat and sharp pleated dress trousers.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Midnight Charcoal",
        "hex": "#1C1C1E"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 160s Virgin Wool & Cashmere (270g/m)",
    "fabricOrigin": "Loro Piana, Quarona, Italy",
    "fit": "Tailored Regular",
    "occasion": "Evening Black-Tie",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Full floating horsehair canvas construction",
      "Hand-carved buffalo horn buttons with micro-engraved insignia",
      "Pick-stitched lapels and interior cupro pocket linings"
    ]
  },
  {
    "id": "nk-suit-midnight-navy-db",
    "name": "N.K FABRICS Midnight Navy Peak-Lapel Three-Piece",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 3850,
    "formattedPrice": "$3,850",
    "tagline": "Super 150s Tasmanian Merino Wool with Matching Double-Breasted Waistcoat",
    "description": "Sculpted in the quintessential Savile Row silhouette with roped shoulders, a broad 3.75-inch peak lapel, and a matching six-button double-breasted waistcoat that contours the torso effortlessly.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_suit_back_profile_1790694103656.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#121A2A"
      },
      {
        "name": "Dark Navy",
        "hex": "#0B1320"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 150s Tasmanian Merino Wool (250g/m)",
    "fabricOrigin": "Scabal, Huddersfield, England",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Formal Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Milanese hand-sewn lapel buttonhole",
      "Double rear vents engineered for sitting ease",
      "High-rise double forward-pleated trousers with 2-inch cuffs"
    ]
  },
  {
    "id": "nk-suit-mayfair-charcoal-flannel",
    "name": "N.K FABRICS Mayfair Charcoal Flannel Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3600,
    "formattedPrice": "$3,600",
    "tagline": "English Worsted Flannel with 5-Button High-V Waistcoat",
    "description": "The quintessential British executive suit. Tailored from soft yet resilient worsted flannel, delivering exceptional drape, crease recovery, and understated gravitas.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Charcoal",
        "hex": "#242424"
      },
      {
        "name": "Anthracite",
        "hex": "#333333"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Worsted Wool Flannel (310g/m)",
    "fabricOrigin": "Huddersfield Fine Worsteds, Yorkshire, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Gentle waist suppression with natural drape chest",
      "Generous notch lapels with flower loop on under-collar",
      "Suspender buttons installed inside trouser waistband"
    ]
  },
  {
    "id": "nk-suit-venetian-velvet-tux",
    "name": "N.K FABRICS Venetian Midnight Velvet Tuxedo",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 4600,
    "formattedPrice": "$4,600",
    "tagline": "Silk-Cotton Italian Velvet with Corded Silk Shawl Collar",
    "description": "The pinnacle of black-tie opulence. Handcrafted from heavy Venetian cotton-silk velvet with an extraordinary nocturnal luster, finished with deep grosgrain shawl lapels.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Midnight Velvet Noir",
        "hex": "#0A0A0A"
      },
      {
        "name": "Royal Navy Velvet",
        "hex": "#0B1526"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Italian Silk Velvet with Heavy Luster (360g/m)",
    "fabricOrigin": "Redaelli Velluti, Como, Italy",
    "fit": "Tailored Regular",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Continuous corded silk shawl lapel",
      "Fabric-covered silk tuxedo buttons",
      "Pure silk trouser side stripe braid"
    ]
  },
  {
    "id": "nk-suit-emerald-silk-evening",
    "name": "N.K FABRICS Royal Emerald Silk-Blend Evening Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 4350,
    "formattedPrice": "$4,350",
    "tagline": "Imperial Forest Emerald Wool-Silk with Black Satin Peak Lapels",
    "description": "A sovereign evening creation. Woven from a blend of ultra-fine wool and mulberry silk in an imperial forest emerald hue, framed by jet black silk satin peak lapels.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Forest Emerald",
        "hex": "#0E281E"
      },
      {
        "name": "Nocturne Green",
        "hex": "#091A14"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Super 150s Wool & Mulberry Silk (250g/m)",
    "fabricOrigin": "Dormeuil, France & UK",
    "fit": "Slim Fit",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Contrast midnight silk peak lapels",
      "Matching emerald low-cut waistcoat",
      "Jet black satin braided trousers"
    ]
  },
  {
    "id": "nk-suit-prince-of-wales-glen",
    "name": "N.K FABRICS Prince of Wales Glen Plaid Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 4150,
    "formattedPrice": "$4,150",
    "tagline": "Classic Glen Urquhart Plaid with Subtle Sky Blue Deco Overcheck",
    "description": "The timeless aristocrat pattern. Cut with soft Neapolitan shoulders and high gorge lapels, accented by a subtle sky blue overcheck woven from high-twist tropical wool.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "colors": [
      {
        "name": "Glen Plaid Grey",
        "hex": "#4A4A4A"
      },
      {
        "name": "Charcoal Deco",
        "hex": "#2E2E2E"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 140s High-Twist Wool (260g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Spalla camicia shirt-sleeve shoulder for natural comfort",
      "Barchetta curved breast pocket for silk flare",
      "Matching double-breasted 6-button vest included"
    ]
  },
  {
    "id": "nk-suit-espresso-peak-evening",
    "name": "N.K FABRICS Espresso Peak-Lapel Evening Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 4100,
    "formattedPrice": "$4,100",
    "tagline": "Deep Espresso Wool-Silk with Lustrous Silk Satin Lapels",
    "description": "An unconventional evening triumph. Replaces standard black tie with an opulent deep espresso brown that absorbs nocturnal ambient light with velvety warmth.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Deep Espresso",
        "hex": "#251C17"
      },
      {
        "name": "Dark Chocolate",
        "hex": "#1C1512"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "75% Fine Wool, 25% Mulberry Silk (240g/m)",
    "fabricOrigin": "Ermenegildo Zegna Lanificio, Trivero, Italy",
    "fit": "Tailored Regular",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 20,
    "tailoringNotes": [
      "Silk satin faced dramatic sweeping peak lapels",
      "Low-scoop evening waistcoat with covered satin buttons",
      "Silk satin braided trouser outseams"
    ]
  },
  {
    "id": "nk-suit-sovereign-camel-drape",
    "name": "N.K FABRICS Sovereign Camel Drape Suit",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 4800,
    "formattedPrice": "$4,800",
    "tagline": "100% Baby Camelhair & Cashmere with Natural Horn Buttons",
    "description": "An exceptional cold-weather monument. Woven from Mongolian baby camelhair and cashmere, creating an unparalleled golden luster, thermal insulation, and cloud-like handfeel.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Golden Camel",
        "hex": "#B88B4A"
      },
      {
        "name": "Warm Taupe",
        "hex": "#8B7355"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Baby Camelhair & Mongolian Cashmere (380g/m)",
    "fabricOrigin": "Piacenza 1733, Biella, Italy",
    "fit": "Classic Formal",
    "occasion": "Everyday Luxury",
    "collection": "Winter Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Colossal notch lapels with Milanese buttonholes",
      "Mottled honey horn buttons",
      "Interior silk ticket pocket with custom monogram"
    ]
  },
  {
    "id": "nk-suit-oxford-birdseye-drape",
    "name": "N.K FABRICS Oxford Navy Birdseye Drape Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3550,
    "formattedPrice": "$3,550",
    "tagline": "Micro-Textured Birdseye High-Twist Wool All-Season Suit",
    "description": "The sharpest everyday business suit. The micro-birdseye weave introduces visual depth while the high-twist yarns resist rumpling during long international flights.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "colors": [
      {
        "name": "Oxford Navy",
        "hex": "#162842"
      },
      {
        "name": "Steel Blue",
        "hex": "#263D5C"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 130s Pure Wool Birdseye (260g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Biella",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 20,
    "tailoringNotes": [
      "Two-button front with 3.5-inch notch lapels",
      "Lightly roped shoulder construction",
      "Includes matching 5-button high-V waistcoat"
    ]
  },
  {
    "id": "nk-suit-westminster-db-charcoal",
    "name": "N.K FABRICS Westminster 6x2 Double-Breasted Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3950,
    "formattedPrice": "$3,950",
    "tagline": "Heavyweight Worsted Twill with Sweeping 4-Inch Peak Lapels",
    "description": "The classic British power silhouette. Six-button double-breasted arrangement with deep waist suppression and high armholes, finished with hand-padded floating canvas.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Charcoal Grey",
        "hex": "#222222"
      },
      {
        "name": "Midnight Blue",
        "hex": "#101726"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Heavy British Worsted Wool Twill (340g/m)",
    "fabricOrigin": "Huddersfield Fine Worsteds, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 37,
    "tailoringNotes": [
      "Traditional 6x2 button stance with 4-inch sweeping peak lapels",
      "Reinforced Milanese lapel flower loop",
      "Fishtail back trousers designed for button suspenders"
    ]
  },
  {
    "id": "nk-suit-riviera-taupe-silk-linen",
    "name": "N.K FABRICS Riviera Taupe Silk-Linen Summer Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3650,
    "formattedPrice": "$3,650",
    "tagline": "Unstructured Neapolitan Cut in Italian Silk-Linen Blend",
    "description": "Effortless Mediterranean sprezzatura. Unlined construction with open-weave Irish linen and mulberry silk that breathes in high summer while draping with architectural crispness.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Warm Taupe",
        "hex": "#A89F91"
      },
      {
        "name": "Sandstone",
        "hex": "#C2B8A3"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "55% Irish Linen, 45% Mulberry Silk (230g/m)",
    "fabricOrigin": "Baird McNutt, Northern Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 37,
    "tailoringNotes": [
      "Completely unlined quarter-back construction",
      "Patch hip pockets with curved barchetta lines",
      "Drawstring side-tab convertible trousers"
    ]
  },
  {
    "id": "nk-suit-ivory-tropical-formal",
    "name": "N.K FABRICS Ivory Tropical Formal Two-Piece Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3950,
    "formattedPrice": "$3,950",
    "tagline": "Tropical High-Ventilation Worsted Wool with Pearlized Waistcoat",
    "description": "The pinnacle of warm-weather aristocracy. An airy open tropical weave creates unparalleled breathability, finished with carved mother-of-pearl buttons and Hollywood high-waist double-pleat trousers.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Ivory",
        "hex": "#FAF8F5"
      },
      {
        "name": "Cream",
        "hex": "#ECE7DD"
      }
    ],
    "sizes": [
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Tropical High-Ventilation Worsted Wool (220g/m)",
    "fabricOrigin": "Holland & Sherry, Savile Row",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Quarter-lined cupro interior for maximum cooling ventilation",
      "Double-breasted four-button jacket with peak lapels",
      "Hollywood high-waist trousers with 2-inch turn-up cuffs"
    ]
  },
  {
    "id": "nk-suit-milanese-anthracite-2pc",
    "name": "N.K FABRICS Milanese Dark Grey Sartorial Two-Piece",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3450,
    "formattedPrice": "$3,450",
    "tagline": "Anthracite High-Twist Wool with Neapolitan Soft Shoulder",
    "description": "Engineered for seamless continental travel. Unstructured spalla camicia shirt-shoulder construction allows total freedom of motion while high-twist wool naturally sheds creases.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Dark Grey",
        "hex": "#303030"
      },
      {
        "name": "Charcoal",
        "hex": "#1E1E1E"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 130s High-Twist All-Season Wool (250g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Biella",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Barchetta curved chest pocket for handkerchief flare",
      "Single-pleat tapered trousers with side tab adjusters",
      "Bespoke floating canvas interlining"
    ]
  },
  {
    "id": "nk-suit-bordeaux-velvet-dinner",
    "name": "N.K FABRICS Bordeaux Velvet Dinner Suit",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 4500,
    "formattedPrice": "$4,500",
    "tagline": "Deep Wine Silk Velvet with Grosgrain Peak Lapels & Trousers",
    "description": "A theatrical triumph for galas and seasonal premieres. Deep bordeaux velvet cut in a single-button evening stance with satin-faced grosgrain peak lapels.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Deep Bordeaux",
        "hex": "#4A0E17"
      },
      {
        "name": "Midnight Wine",
        "hex": "#33080F"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Italian Cotton-Silk Velvet (350g/m)",
    "fabricOrigin": "Pontoglio 1883, Brescia, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Grosgrain faced peak lapels",
      "Single-button evening stance with covered buttons",
      "Midnight braided evening trousers"
    ]
  },
  {
    "id": "nk-suit-light-grey-sharkskin",
    "name": "N.K FABRICS Light Grey Sharkskin Executive Two-Piece",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3500,
    "formattedPrice": "$3,500",
    "tagline": "Lustrous Super 150s Sharkskin Twill with Roped Shoulder",
    "description": "The sharp modern executive suit. The twill weave alternates light and dark threads for a silvery metallic depth that commands daytime conference presence.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "colors": [
      {
        "name": "Light Grey Sharkskin",
        "hex": "#8C929D"
      },
      {
        "name": "Silver Slate",
        "hex": "#A2A8B3"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 150s Merino Wool Sharkskin (260g/m)",
    "fabricOrigin": "Loro Piana, Quarona, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Roped shoulder head with hand-padded canvas",
      "Slanted hacking hip pockets with ticket pocket",
      "Side buckle tab forward pleated trousers"
    ]
  },
  {
    "id": "nk-suit-solaro-sunburst-twill",
    "name": "N.K FABRICS Solaro Sunburst Herringbone Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3900,
    "formattedPrice": "$3,900",
    "tagline": "Original British Solaro Fabric with Iridescent Copper-Green Luster",
    "description": "Legendary among bespoke connoisseurs. Woven with olive-green face yarns and crimson-brick reverse threads, creating an extraordinary two-tone sunburst reflection in daylight.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Solaro Olive-Copper",
        "hex": "#635B48"
      },
      {
        "name": "Bronze Sand",
        "hex": "#7D7055"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Original Wool Solaro Twill (290g/m)",
    "fabricOrigin": "Smith Woollens, Savile Row, London",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Premium Collection",
    "availability": "In Stock",
    "stockUnits": 27,
    "tailoringNotes": [
      "Classic 3-roll-2 button stance",
      "Unlined body with bound silk seams",
      "High-rise Hollywood waistband trousers"
    ]
  },
  {
    "id": "nk-suit-chocolate-brown-flannel",
    "name": "N.K FABRICS Chocolate Brown Flannel Three-Piece",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3750,
    "formattedPrice": "$3,750",
    "tagline": "Rich Chocolate Wool Flannel with Double-Breasted Waistcoat",
    "description": "A sophisticated departure from navy and grey. Heavyweight wool flannel dyed in an appetizing bitter chocolate tone, paired with a sculpted 6-button vest.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Bitter Chocolate",
        "hex": "#2A1C16"
      },
      {
        "name": "Roasted Espresso",
        "hex": "#221611"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "English Worsted Flannel (320g/m)",
    "fabricOrigin": "Fox Brothers, Somerset, UK",
    "fit": "Classic Formal",
    "occasion": "Everyday Luxury",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 25,
    "tailoringNotes": [
      "Matching 6-button double-breasted vest with lapel",
      "Real dark horn buttons with cross stitch",
      "Turn-up 2-inch trouser cuffs"
    ]
  },
  {
    "id": "nk-suit-pearl-grey-wedding",
    "name": "N.K FABRICS Pearl Grey Wedding Ceremony Suit",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 4300,
    "formattedPrice": "$4,300",
    "tagline": "Super 160s Pearl Grey Wool-Silk with Embroidered Silk Vest",
    "description": "Engineered for grand wedding occasions. A pale silvery pearl grey with exceptional light refraction, accompanied by an ivory and champagne damask waistcoat.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Pearl Grey",
        "hex": "#B8BCC4"
      },
      {
        "name": "Platinum Silver",
        "hex": "#D2D6DE"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 160s Wool & Mulberry Silk (250g/m)",
    "fabricOrigin": "Dormeuil, France & UK",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Includes embroidered silk wedding waistcoat",
      "Mother-of-pearl buttons with metal shank",
      "Silk-lined pleated trousers"
    ]
  },
  {
    "id": "nk-suit-glen-check-charcoal",
    "name": "N.K FABRICS Glen Check Charcoal Three-Piece",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3850,
    "formattedPrice": "$3,850",
    "tagline": "Black & White Micro Glen Check with Tonal Charcoal Waistcoat",
    "description": "Subtle, distinguished, and timeless. The dense houndstooth and glen plaid arrangement gives immense depth while reading as sophisticated grey from a distance.",
    "primaryImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Charcoal Glen Check",
        "hex": "#353535"
      },
      {
        "name": "Steel Check",
        "hex": "#484848"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 140s Pure Wool (280g/m)",
    "fabricOrigin": "Huddersfield Fine Worsteds, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "5-button high-V vest with jetted watch pocket",
      "Pick stitched lapels",
      "Extended waistband tab trousers"
    ]
  },
  {
    "id": "nk-suit-royal-navy-4x2-db",
    "name": "N.K FABRICS Royal Navy Double-Breasted 4x2 Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3700,
    "formattedPrice": "$3,700",
    "tagline": "Modern 4x2 Button Stance in High-Twist Travel Gabardine",
    "description": "A sleeker, lower button stance that elongates the neck and torso. The high-twist gabardine wool repels moisture and recovers completely from packing in luggage.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_suit_back_profile_1790694103656.jpg",
    "colors": [
      {
        "name": "Royal Navy",
        "hex": "#111D30"
      },
      {
        "name": "Deep Indigo",
        "hex": "#0B1422"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "High-Twist Pure Wool Gabardine (270g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Biella",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Modern 4x2 double-breasted arrangement with sweeping peak lapels",
      "Unfinished trouser cuffs for tailored break",
      "Natural horn buttons"
    ]
  },
  {
    "id": "nk-suit-tobacco-linen-2pc",
    "name": "N.K FABRICS Tobacco Linen Two-Piece Summer Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3350,
    "formattedPrice": "$3,350",
    "tagline": "Pure Irish Linen in Rich Tobacco Khaki with Patch Pockets",
    "description": "The gentleman\u2019s summer uniform. Heavy Irish linen that acquires noble character with each wear, featuring unlined spalla camicia construction and patch pockets.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Tobacco Khaki",
        "hex": "#6E553B"
      },
      {
        "name": "Golden Wheat",
        "hex": "#876D4E"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Pure Irish Linen (280g/m)",
    "fabricOrigin": "Baird McNutt, Northern Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "Quarter back lining for maximum ventilation",
      "Dual patch hip pockets and barchetta breast pocket",
      "Double pleat trousers with side adjusters"
    ]
  },
  {
    "id": "nk-suit-forest-green-flannel",
    "name": "N.K FABRICS Forest Green Flannel Three-Piece",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 4100,
    "formattedPrice": "$4,100",
    "tagline": "Subtle Forest Green Wool Flannel with High-V Lapelled Waistcoat",
    "description": "A distinguished country-house formal suit. In low indoor light it registers as charcoal; in natural sunlight it reveals an enchanting deep botanical forest emerald hue.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Deep Forest Green",
        "hex": "#16281D"
      },
      {
        "name": "Hunter Green",
        "hex": "#0F1E15"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "English Wool Flannel (330g/m)",
    "fabricOrigin": "Fox Brothers, Somerset, UK",
    "fit": "Classic Formal",
    "occasion": "Everyday Luxury",
    "collection": "Winter Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Includes lapelled 6-button waistcoat",
      "Real horn buttons with cross stitch",
      "Side tab buckle trousers"
    ]
  },
  {
    "id": "nk-suit-sandstone-worsted-2pc",
    "name": "N.K FABRICS Sandstone Worsted Two-Piece Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3450,
    "formattedPrice": "$3,450",
    "tagline": "Light Sandstone Merino Twill with Soft Structured Shoulders",
    "description": "Neutral, crisp, and aristocratic. Woven from high-twist merino wool in a warm sandstone tint, pairing effortlessly with crisp white or pale blue formal shirting.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Sandstone Beige",
        "hex": "#D2C3B0"
      },
      {
        "name": "Oatmeal",
        "hex": "#E0D4C3"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Super 130s All-Season Merino Wool (250g/m)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Soft shoulder padding with clean roll",
      "Half-lined interior in cupro",
      "Flat front tapered trousers"
    ]
  },
  {
    "id": "nk-suit-shadow-windowpane-charcoal",
    "name": "N.K FABRICS Shadow Windowpane Charcoal Three-Piece",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3950,
    "formattedPrice": "$3,950",
    "tagline": "Charcoal Wool with Ghost Windowpane Grid & Horseshoe Waistcoat",
    "description": "Architectural minimalism. An almost imperceptible shadow grid adds vertical proportion to the gentleman\u2019s stature, completed by a low-scoop horseshoe vest.",
    "primaryImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Shadow Windowpane",
        "hex": "#242426"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 150s Fine Worsted Wool (270g/m)",
    "fabricOrigin": "Scabal, Huddersfield, England",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 36,
    "tailoringNotes": [
      "Horseshoe 4-button vest",
      "Slanted hacking pockets with ticket pocket",
      "Side buckle forward pleat trousers"
    ]
  },
  {
    "id": "nk-suit-midnight-grosgrain-shawl",
    "name": "N.K FABRICS Midnight Tuxedo with Grosgrain Shawl",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 4400,
    "formattedPrice": "$4,400",
    "tagline": "Deep Midnight Blue Barathea Wool with Ribbed Grosgrain Lapels",
    "description": "The Savile Row alternative to satin. Ribbed silk grosgrain facing provides a tactile, matte texture that reflects photography flash evenly without shine.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#0B1220"
      },
      {
        "name": "Deep Black",
        "hex": "#090909"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Pure Wool Barathea (290g/m)",
    "fabricOrigin": "Holland & Sherry, Savile Row",
    "fit": "Tailored Regular",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Grosgrain faced continuous shawl collar",
      "Jetted pockets with no flaps",
      "Silk grosgrain braided trouser seams"
    ]
  },
  {
    "id": "nk-suit-cashmere-flannel-anthracite",
    "name": "N.K FABRICS Cashmere Flannel Anthracite Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 4650,
    "formattedPrice": "$4,650",
    "tagline": "85% Super 160s Wool, 15% Cashmere with High-V Waistcoat",
    "description": "The height of cold-weather luxury. An ultra-soft flannel weave enriched with Mongolian cashmere, providing sublime insulation and an unbroken fluid silhouette.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Anthracite Flannel",
        "hex": "#262626"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Wool-Cashmere Flannel (330g/m)",
    "fabricOrigin": "Piacenza 1733, Biella, Italy",
    "fit": "Classic Formal",
    "occasion": "Everyday Luxury",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 29,
    "tailoringNotes": [
      "Full floating canvas with natural horsehair chest piece",
      "Pick-stitched wide peak lapels",
      "Hollywood high-rise trousers"
    ]
  },
  {
    "id": "nk-suit-cream-silk-linen-wedding",
    "name": "N.K FABRICS Cream Silk-Linen Wedding Three-Piece",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 4500,
    "formattedPrice": "$4,500",
    "tagline": "Mulberry Silk, Linen & Wool with Floral Damask Silk Waistcoat",
    "description": "Designed for summer garden weddings and luxury destination ceremonies. An opulent ivory cream weave paired with a custom floral damask silk vest.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Ivory Cream",
        "hex": "#FAF5EC"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "40% Silk, 35% Linen, 25% Wool (240g/m)",
    "fabricOrigin": "Loro Piana, Quarona, Italy",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Includes matching floral damask silk vest",
      "Carved mother-of-pearl buttons with gold shank",
      "Double forward pleat trousers"
    ]
  },
  {
    "id": "nk-suit-english-herringbone-charcoal",
    "name": "N.K FABRICS English Herringbone Charcoal Two-Piece",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3600,
    "formattedPrice": "$3,600",
    "tagline": "Textured Fine Herringbone Weave in Super 140s British Wool",
    "description": "Classic British texture with modern lightweight wearability. The fine chevron weave reflects light symmetrically across the chest.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Charcoal Herringbone",
        "hex": "#2D2D2D"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 140s British Worsted Wool (280g/m)",
    "fabricOrigin": "Huddersfield Fine Worsteds, UK",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Milanese lapel buttonhole",
      "Two-button single-breasted stance with curved barchetta chest pocket",
      "Side buckle tab trousers"
    ]
  },
  {
    "id": "nk-suit-imperial-burgundy-3pc",
    "name": "N.K FABRICS Imperial Burgundy Three-Piece Suit",
    "category": "suits",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 4250,
    "formattedPrice": "$4,250",
    "tagline": "Deep Wine Super 150s Merino Wool with Tonal Waistcoat",
    "description": "A regal evening and reception ensemble. Deep wine burgundy wool crafted with an immaculate canvas roll, paired with a matching five-button tailored vest.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Imperial Burgundy",
        "hex": "#3F121C"
      },
      {
        "name": "Deep Claret",
        "hex": "#2F0B13"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Super 150s Tasmanian Merino Wool (260g/m)",
    "fabricOrigin": "Scabal, England",
    "fit": "Slim Fit",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Broad 3.75-inch peak lapels",
      "Matching 5-button tailored vest",
      "Flat front dress trousers with side adjusters"
    ]
  },
  {
    "id": "nk-suit-steel-blue-microcheck-2pc",
    "name": "N.K FABRICS Steel Blue Micro-Check Two-Piece",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 3500,
    "formattedPrice": "$3,500",
    "tagline": "Modern Steel Blue Wool with Micro Houndstooth Check",
    "description": "Subtle color dimension for contemporary formal environments. High-twist wool prevents creases while the subtle steel blue hue sets the wearer apart.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Steel Blue",
        "hex": "#2F4056"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 130s High-Twist Wool (250g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Neapolitan soft shoulder",
      "Flap hip pockets with ticket pocket",
      "Single-pleat trousers"
    ]
  },
  {
    "id": "nk-suit-midnight-velvet-gala-3pc",
    "name": "N.K FABRICS Midnight Velvet 3-Piece Black Tie Suit",
    "category": "suits",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 4900,
    "formattedPrice": "$4,900",
    "tagline": "Venetian Black Velvet with Double-Breasted Silk Waistcoat",
    "description": "The supreme formal ceremony monument. Heavy Italian velvet with an incomparable luster, complete with a six-button pure silk satin vest and braided trousers.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Venetian Black",
        "hex": "#070707"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Silk-Cotton Velvet & Pure Como Silk (380g/m)",
    "fabricOrigin": "Como & Milan, Italy",
    "fit": "Tailored Regular",
    "occasion": "Evening Black-Tie",
    "collection": "Limited Edition",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Includes 6-button silk satin waistcoat",
      "Silk grosgrain peak lapels",
      "Side braided black-tie trousers"
    ]
  },
    {
      "id": "nk-suit-ivory-dinner-two-piece",
      "name": "N.K FABRICS Ivory Silk-Faille Two-Piece Dinner Suit",
      "category": "suits",
      "isNewArrival": true,
      "isBestSeller": true,
      "price": 3950,
      "formattedPrice": "$3,950",
      "tagline": "Natural Ivory Wool-Silk Blend with Grosgrain Peak Lapels",
      "description": "The peak of warm-weather gala ceremony. Crafted from a heavyweight Italian wool-silk faille that resists creasing, featuring sculpted satin peak lapels and midnight trousers with satin braid.",
      "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
      "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
      "colors": [
        {
          "name": "Natural Ivory",
          "hex": "#F8F6F0"
        },
        {
          "name": "Cream White",
          "hex": "#FFFDD0"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "70% Virgin Wool, 30% Mulberry Silk Faille (290g/m)",
      "fabricOrigin": "Vitale Barberis Canonico, Biella, Italy",
      "fit": "Tailored Regular",
      "occasion": "Wedding & Gala",
      "collection": "Wedding Collection",
      "availability": "In Stock",
      "stockUnits": 28,
      "subType": "2-Piece",
      "tailoringNotes": [
        "Ivory silk-faille jacket paired with midnight black braided trousers",
        "Hand-sewn Milanese buttonhole on left lapel",
        "Full floating horsehair canvas drape"
      ]
    },
  {
      "id": "nk-suit-chocolate-flannel-db",
      "name": "N.K FABRICS Chocolate Brown Double-Breasted Three-Piece",
      "category": "suits",
      "isNewArrival": true,
      "isBestSeller": false,
      "price": 4350,
      "formattedPrice": "$4,350",
      "tagline": "Rich Cocoa Flannel with 6x2 Double-Breasted Silhouette & Vest",
      "description": "An aristocratic cold-weather monument. Spun from double-milled English wool flannel in deep cocoa brown with sweeping 4.5-inch peak lapels, a matching 5-button waistcoat, and high-rise double-pleated trousers.",
      "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
      "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
      "colors": [
        {
          "name": "Chocolate Brown",
          "hex": "#3B2219"
        },
        {
          "name": "Espresso",
          "hex": "#231714"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "English Worsted Flannel 340g/m",
      "fabricOrigin": "Fox Brothers & Co., Somerset, UK",
      "fit": "Classic Formal",
      "occasion": "Everyday Luxury",
      "collection": "Winter Collection",
      "availability": "In Stock",
      "stockUnits": 22,
      "subType": "3-Piece",
      "tailoringNotes": [
        "6x2 double-breasted button stance with roll to bottom button",
        "Includes tailored high-V waistcoat with watch-chain eyelet",
        "Double forward pleat trousers with 2-inch turn-up cuffs"
      ]
    },
  {
      "id": "nk-suit-forest-green-two-piece",
      "name": "N.K FABRICS Forest Green Sartorial Two-Piece Suit",
      "category": "suits",
      "isNewArrival": false,
      "isBestSeller": true,
      "price": 3650,
      "formattedPrice": "$3,650",
      "tagline": "Super 150s Merino Wool in Deep Pine Green with Notch Lapel",
      "description": "Sartorial individuality crafted for the modern gentleman. Deep pine forest tone with subtle depth in daylight, horn buttons, dual vents, and clean flat-front trousers with brass side buckles.",
      "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
      "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
      "colors": [
        {
          "name": "Forest Green",
          "hex": "#1C352D"
        },
        {
          "name": "Dark Olive",
          "hex": "#2A342B"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Super 150s Pure Australian Merino Wool (260g/m)",
      "fabricOrigin": "Dormeuil, Paris & Huddersfield",
      "fit": "Slim Fit",
      "occasion": "Business & Boardroom",
      "collection": "Premium Collection",
      "availability": "In Stock",
      "stockUnits": 34,
      "subType": "2-Piece",
      "tailoringNotes": [
        "Slanted flapped pockets with exterior ticket pocket",
        "Side waist adjusters eliminating the need for belts",
        "Soft natural shoulder pad with roped sleevehead"
      ]
    },
  {
      "id": "nk-suit-royal-brocade-wedding-three-piece",
      "name": "N.K FABRICS Royal Brocade Wedding Three-Piece Suit",
      "category": "suits",
      "isNewArrival": true,
      "isBestSeller": true,
      "price": 5200,
      "formattedPrice": "$5,200",
      "tagline": "Woven Silk Brocade with Hand-Zari Shawl Collar & Jeweled Buttons",
      "description": "The majestic groom's masterpiece. Intricate tone-on-tone metallic zari silk jacquard woven in antique gold and obsidian, complemented by an embroidered horseshoe waistcoat and silk-lined dress trousers.",
      "primaryImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
      "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
      "colors": [
        {
          "name": "Royal Gold Brocade",
          "hex": "#A38047"
        },
        {
          "name": "Obsidian Gold",
          "hex": "#1F1A14"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Hand-Loomed Silk Brocade with Pure Gold Zari Thread (360g/m)",
      "fabricOrigin": "Varanasi Silk Guild & N.K Master Looms",
      "fit": "Tailored Regular",
      "occasion": "Wedding & Gala",
      "collection": "Wedding Collection",
      "availability": "In Stock",
      "stockUnits": 16,
      "subType": "3-Piece",
      "tailoringNotes": [
        "Hand-embroidered zardozi micro-lapel accents",
        "Includes sculpted horseshoe brocade waistcoat",
        "Custom 18K gold-plated shank buttons"
      ]
    },
  {
      "id": "nk-suit-french-navy-sharkskin",
      "name": "N.K FABRICS French Navy Sharkskin Two-Piece Suit",
      "category": "suits",
      "isNewArrival": false,
      "isBestSeller": true,
      "price": 3450,
      "formattedPrice": "$3,450",
      "tagline": "Two-Tone Micro-Twill Sharkskin with High Luster & Wrinkle Recovery",
      "description": "The quintessential international business suit. The distinctive two-tone sharkskin twill weave provides dimensional depth under office and natural lighting, pairing effortlessly with crisp white shirting.",
      "primaryImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
      "hoverImage": "/src/assets/images/mn_suit_back_profile_1790694103656.jpg",
      "colors": [
        {
          "name": "French Navy",
          "hex": "#1B2A4A"
        },
        {
          "name": "Steel Blue",
          "hex": "#2F4858"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Super 130s High-Twist Sharkskin Wool (275g/m)",
      "fabricOrigin": "Reda 1865, Valle Mosso, Italy",
      "fit": "Tailored Regular",
      "occasion": "Business & Boardroom",
      "collection": "Business Collection",
      "availability": "In Stock",
      "stockUnits": 36,
      "subType": "2-Piece",
      "tailoringNotes": [
        "Curved chest pocket (Barchetta pocket) hand-stitched",
        "High armholes for unrestricted movement during travel",
        "Flat-front trousers with inner rubber shirt-grip waistband"
      ]
    },
  {
      "id": "nk-suit-sandstone-linen-silk-three-piece",
      "name": "N.K FABRICS Sandstone Linen-Silk Summer Three-Piece",
      "category": "suits",
      "isNewArrival": true,
      "isBestSeller": false,
      "price": 3800,
      "formattedPrice": "$3,800",
      "tagline": "Irish Linen & Mulberry Silk with Unconstructed Drape",
      "description": "Relaxed opulence designed for Mediterranean and destination summer weddings. Natural sandstone tone breathes freely in humid climates while maintaining structured elegance with its matching linen vest.",
      "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
      "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
      "colors": [
        {
          "name": "Sandstone Beige",
          "hex": "#D6C4A5"
        },
        {
          "name": "Warm Oat",
          "hex": "#E4D9C7"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "55% Irish Linen, 45% Raw Mulberry Silk (260g/m)",
      "fabricOrigin": "Baird McNutt, Ballymena, Northern Ireland",
      "fit": "Relaxed Drape",
      "occasion": "Resort & Casual",
      "collection": "Summer Collection",
      "availability": "In Stock",
      "stockUnits": 25,
      "subType": "3-Piece",
      "tailoringNotes": [
        "Half-lined with breathable cupro butterfly lining",
        "Horn buttons in natural honey mottle",
        "Single-pleat trousers with 4cm cuffs"
      ]
    },
  {
      "id": "nk-suit-charcoal-windowpane-two-piece",
      "name": "N.K FABRICS Charcoal Windowpane Two-Piece Suit",
      "category": "suits",
      "isNewArrival": false,
      "isBestSeller": false,
      "price": 3750,
      "formattedPrice": "$3,750",
      "tagline": "Subtle Chalk Windowpane on Deep Charcoal English Flannel",
      "description": "Understated power suiting. The generous chalk grid adds height and breadth to the torso, complemented by genuine horn buttons, functional surgeon's cuffs, and side tab trousers.",
      "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
      "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
      "colors": [
        {
          "name": "Charcoal Windowpane",
          "hex": "#2D2D2D"
        },
        {
          "name": "Anthracite",
          "hex": "#383838"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "100% Super 140s Wool Worsted Flannel (300g/m)",
      "fabricOrigin": "Scabal, Brussels & Huddersfield",
      "fit": "Classic Formal",
      "occasion": "Business & Boardroom",
      "collection": "Signature Collection",
      "availability": "In Stock",
      "stockUnits": 29,
      "subType": "2-Piece",
      "tailoringNotes": [
        "Flawless pattern matching across lapels, pockets, and seams",
        "Hand-padded chest canvas with natural horsehair",
        "Trousers feature forward pleats and internal suspender buttons"
      ]
    },
  {
      "id": "nk-suit-deep-burgundy-velvet-lapel",
      "name": "N.K FABRICS Deep Burgundy Velvet-Lapel Three-Piece",
      "category": "suits",
      "isNewArrival": true,
      "isBestSeller": true,
      "price": 4600,
      "formattedPrice": "$4,600",
      "tagline": "Midnight Wool with Contrast Italian Burgundy Velvet Lapels & Vest",
      "description": "A commanding gala and banquet suit. Midnight black worsted wool jacket framed by lush wine-burgundy velvet lapels, accompanied by a matching burgundy velvet horseshoe waistcoat.",
      "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
      "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
      "colors": [
        {
          "name": "Midnight Burgundy",
          "hex": "#4A1521"
        },
        {
          "name": "Deep Bordeaux",
          "hex": "#361119"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Super 160s Wool paired with Venetian Silk Velvet (330g/m)",
      "fabricOrigin": "Zegna & Pontoglio, Italy",
      "fit": "Tailored Regular",
      "occasion": "Evening Black-Tie",
      "collection": "Evening Collection",
      "availability": "In Stock",
      "stockUnits": 19,
      "subType": "3-Piece",
      "tailoringNotes": [
        "Sculpted velvet shawl lapel with silk grosgrain piping",
        "Four-button double-breasted velvet waistcoat",
        "Braided evening trousers with silk galon stripe"
      ]
    },
  {
      "id": "nk-suit-tropical-beige-two-piece",
      "name": "N.K FABRICS Tropical Beige High-Twist Two-Piece",
      "category": "suits",
      "isNewArrival": false,
      "isBestSeller": false,
      "price": 3200,
      "formattedPrice": "$3,200",
      "tagline": "4-Ply High-Twist Crease-Resistant Wool in Desert Sandstone",
      "description": "The ultimate globe-trotter's suit. Woven with an open four-ply twist that allows air circulation while naturally popping out creases after hours of business flights and meetings.",
      "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
      "hoverImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
      "colors": [
        {
          "name": "Tropical Beige",
          "hex": "#C7B299"
        },
        {
          "name": "Desert Sand",
          "hex": "#B8A389"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "4-Ply High-Twist Tropical Worsted (250g/m)",
      "fabricOrigin": "Hardy Minnis / Huddersfield Fine Worsteds, UK",
      "fit": "Tailored Regular",
      "occasion": "Business & Boardroom",
      "collection": "Essential Collection",
      "availability": "In Stock",
      "stockUnits": 38,
      "subType": "2-Piece",
      "tailoringNotes": [
        "Quarter-lined construction for ultra-lightweight travel",
        "Wrinkle rebound technology naturally recovers overnight on hanger",
        "Modern flat-front trouser with hidden expandable waistband"
      ]
    },
  {
      "id": "nk-suit-midnight-blue-jacquard-three-piece",
      "name": "N.K FABRICS Midnight Blue Silk-Jacquard Three-Piece",
      "category": "suits",
      "isNewArrival": true,
      "isBestSeller": true,
      "price": 4900,
      "formattedPrice": "$4,900",
      "tagline": "Micro-Floral Jacquard with Satin Peak Lapels & Coordinated Vest",
      "description": "Red carpet nobility. Tone-on-tone midnight floral jacquard weaves catch candle and chandelier light with profound mystery, paired with a matching high-sheen vest and formal trousers.",
      "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
      "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
      "colors": [
        {
          "name": "Midnight Jacquard",
          "hex": "#0E1A2B"
        },
        {
          "name": "Sapphire Floral",
          "hex": "#162742"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Como Silk & Worsted Wool Jacquard (310g/m)",
      "fabricOrigin": "Como, Lombardy, Italy",
      "fit": "Slim Fit",
      "occasion": "Wedding & Gala",
      "collection": "Limited Edition",
      "availability": "In Stock",
      "stockUnits": 15,
      "subType": "3-Piece",
      "tailoringNotes": [
        "Silk satin peak lapels with hand-rolled borders",
        "Satin fabric-covered buttons on jacket and waistcoat",
        "Unvented jacket for pure black-tie evening silhouette"
      ]
    },
  {
      "id": "nk-suit-slate-grey-db-two-piece",
      "name": "N.K FABRICS Slate Grey Double-Breasted Two-Piece",
      "category": "suits",
      "isNewArrival": false,
      "isBestSeller": false,
      "price": 3600,
      "formattedPrice": "$3,600",
      "tagline": "Classic 6x2 Double-Breasted in Super 140s Slate Blue-Grey",
      "description": "Pure European statesman aesthetic. Subtle slate tint adds distinctive character over standard greys, featuring bold peak lapels, horn buttons, and tailored trousers with side adjusters.",
      "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
      "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
      "colors": [
        {
          "name": "Slate Grey",
          "hex": "#5C6773"
        },
        {
          "name": "Steel Grey",
          "hex": "#4A525D"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Super 140s Tasmanian Wool (280g/m)",
      "fabricOrigin": "Loro Piana, Quarona, Italy",
      "fit": "Classic Formal",
      "occasion": "Business & Boardroom",
      "collection": "Formal Collection",
      "availability": "In Stock",
      "stockUnits": 31,
      "subType": "2-Piece",
      "tailoringNotes": [
        "Broad 4.25-inch peak lapels pointing toward shoulder points",
        "Functional working cuff buttonholes with hand kissing buttons",
        "Double forward-pleated trousers with 1.75-inch cuffs"
      ]
    },
  {
      "id": "nk-suit-caramel-gabardine-three-piece",
      "name": "N.K FABRICS Caramel Worsted Gabardine Three-Piece",
      "category": "suits",
      "isNewArrival": true,
      "isBestSeller": false,
      "price": 4100,
      "formattedPrice": "$4,100",
      "tagline": "High-Density Worsted Gabardine with 5-Button Tailored Vest",
      "description": "Warm, rich, and impeccably smooth. Dense twill gabardine offers sublime drape that never wrinkles, presented in a tailored three-piece configuration suited for daytime receptions and autumn galas.",
      "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
      "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
      "colors": [
        {
          "name": "Caramel Brown",
          "hex": "#8A5A36"
        },
        {
          "name": "Tobacco Tan",
          "hex": "#70482B"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "High-Density Pure Wool Gabardine (320g/m)",
      "fabricOrigin": "Holland & Sherry, Savile Row & Peebles",
      "fit": "Tailored Regular",
      "occasion": "Wedding & Gala",
      "collection": "Signature Collection",
      "availability": "In Stock",
      "stockUnits": 27,
      "subType": "3-Piece",
      "tailoringNotes": [
        "Includes matched 5-button notch-lapel waistcoat",
        "Genuine light horn buttons carved in Scotland",
        "Flat-front trousers with brass side tab adjusters"
      ]
    },
  {
    "id": "nk-wc-navy-double-breasted",
    "name": "N.K FABRICS Formal Double-Breasted Horseshoe Waistcoat",
    "category": "waistcoats",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 950,
    "formattedPrice": "$950",
    "tagline": "Six-Button Horseshoe Silhouette in Super 150s Merino Wool",
    "description": "The crowning touch for modern formal suiting. The horseshoe neckline highlights dress shirt collars and ties while sculpting a tailored midsection.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#121A2A"
      },
      {
        "name": "Deep Black",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Super 150s Pure Wool with Silk Satin Back",
    "fabricOrigin": "Dormeuil, France & UK",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Six-button double-breasted arrangement",
      "Adjustable cinch buckle on silk back panel",
      "Four welt pockets for pocket watch and chain"
    ]
  },
  {
    "id": "nk-wc-noir-jamawar-brocade",
    "name": "N.K FABRICS Imperial Noir Jamawar Brocade Waistcoat",
    "category": "waistcoats",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1250,
    "formattedPrice": "$1,250",
    "tagline": "Pure Silk Brocade with Hand-Finished Mandarin Collar & Gold Thread",
    "description": "Worn with distinction over black or ivory traditional kurtas. Tailored from dense pure silk Jamawar with subtle raised paisley embossing and miniature gold thread piping.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
    "colors": [
      {
        "name": "Noir Jamawar",
        "hex": "#0A0A0A"
      },
      {
        "name": "Charcoal Brocade",
        "hex": "#1C1C1C"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Silk Jamawar Brocade",
    "fabricOrigin": "Heritage Mills, Lahore",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Structured mandarin collar that stands firm against the neck",
      "Fabric-covered silk buttons with gold loop eyelets"
    ]
  },
  {
    "id": "nk-wc-high-v-charcoal-flannel",
    "name": "N.K FABRICS High-V Flannel Waistcoat (Charcoal)",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 890,
    "formattedPrice": "$890",
    "tagline": "Five-Button Tailored Vest with Watch Chain Buttonhole",
    "description": "Cut from worsted flannel to pair seamlessly with three-piece suits or over white formal shirting and traditional kurtas.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Charcoal",
        "hex": "#242424"
      },
      {
        "name": "Black",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "English Worsted Flannel",
    "fabricOrigin": "Somerset, UK",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Five-button front with horn buttons",
      "Full cupro lining printed with tonal N.K FABRICS crest"
    ]
  },
  {
    "id": "nk-wc-emerald-velvet-mandarin",
    "name": "N.K FABRICS Royal Emerald Silk-Velvet Mandarin Waistcoat",
    "category": "waistcoats",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1180,
    "formattedPrice": "$1,180",
    "tagline": "Italian Cotton-Silk Velvet with Mandarin Stand Collar",
    "description": "An opulent ceremonial layer. Deep forest emerald velvet absorbs ambient lighting with deep warmth, accented by gold metallic filigree button details.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg",
    "colors": [
      {
        "name": "Emerald Velvet",
        "hex": "#0E281E"
      },
      {
        "name": "Forest Velvet",
        "hex": "#071810"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Silk-Cotton Velvet with Lustrous Pile (340g/m)",
    "fabricOrigin": "Pontoglio, Brescia, Italy",
    "fit": "Slim Fit",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Mandarin collar with gold thread bullion edge",
      "Pure silk satin back with engraved brass buckle"
    ]
  },
  {
    "id": "nk-wc-ceremonial-gold-ivory",
    "name": "N.K FABRICS Ceremonial Silk Waistcoat (Ivory & Gold)",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1100,
    "formattedPrice": "$1,100",
    "tagline": "Pure Raw Silk with Hand-Piped Champagne Gold Threadwork",
    "description": "Engineered specifically for Pakistani wedding banquets, Eid celebrations, and formal ceremonies. Worn elegantly over black or ivory shalwar kameez.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Ivory & Gold",
        "hex": "#FAF8F5"
      },
      {
        "name": "Deep Black & Gold",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Pure Raw Mulberry Silk with Metallic Gilt Thread",
    "fabricOrigin": "Heritage Mills, Lahore",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "In Stock",
    "stockUnits": 20,
    "tailoringNotes": [
      "Stand collar with hand-piped champagne gold metallic trim",
      "Real horn buttons with gold thread loops"
    ]
  },
  {
    "id": "nk-wc-black-silk-satin-horseshoe",
    "name": "N.K FABRICS Black Silk Satin Horseshoe Tuxedo Vest",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 980,
    "formattedPrice": "$980",
    "tagline": "Deep Scoop Horseshoe Cut with Fabric-Covered Satin Buttons",
    "description": "Engineered specifically for black-tie dinner suits. The low-scoop horseshoe cut reveals maximum pleated shirt front and Marcella piqu\u00e9 bib.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Silk Satin Black",
        "hex": "#0B0B0B"
      },
      {
        "name": "Midnight Blue",
        "hex": "#0E1624"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Pure Mulberry Silk Duchess Satin (Como)",
    "fabricOrigin": "Como, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 26,
    "tailoringNotes": [
      "Three-button low-scoop front",
      "Satin back with adjustable cinch belt"
    ]
  },
  {
    "id": "nk-wc-vintage-donegal-tweed",
    "name": "N.K FABRICS Donegal Houndstooth Wool Tweed Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 880,
    "formattedPrice": "$880",
    "tagline": "Pure Irish Wool Tweed with Natural Flecks & Leather Knot Buttons",
    "description": "Rugged country nobility. Woven in Donegal with colorful natural wool neps, finished with woven leather knot buttons and four tailored welt pockets.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Donegal Grey",
        "hex": "#3C3C3C"
      },
      {
        "name": "Heather Moss",
        "hex": "#3B4032"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Pure Irish Donegal Wool Tweed (380g/m)",
    "fabricOrigin": "Donegal, Ireland",
    "fit": "Classic Formal",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "Hand-woven leather knot buttons",
      "Four functional welt watch and pen pockets"
    ]
  },
  {
    "id": "nk-wc-champagne-gold-damask",
    "name": "N.K FABRICS Champagne Gold Damask Silk Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1150,
    "formattedPrice": "$1,150",
    "tagline": "Lustrous Damask Floral Micro-Weave with Mother-of-Pearl Buttons",
    "description": "The regal daytime banquet waistcoat. Woven in Como from silk and cotton with subtle tone-on-tone damask floral patterns that shimmer in natural light.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Champagne Damask",
        "hex": "#E2D5BE"
      },
      {
        "name": "Ivory Gold",
        "hex": "#F0E6D2"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "70% Silk, 30% Cotton Damask Weave (220g/m)",
    "fabricOrigin": "Como, Italy",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Carved mother-of-pearl buttons with gold shank",
      "Mandarin collar with satin piped boundary"
    ]
  },
  {
    "id": "nk-wc-burgundy-silk-jacquard",
    "name": "N.K FABRICS Imperial Burgundy Silk Jacquard Waistcoat",
    "category": "waistcoats",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1050,
    "formattedPrice": "$1,050",
    "tagline": "Intricate Royal Paisley Micro-Jacquard in Deep Wine Luster",
    "description": "A striking evening accent for black-tie suits and reception sherwanis. Rich burgundy silk with a fine self-toned jacquard relief.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Imperial Burgundy",
        "hex": "#4A111E"
      },
      {
        "name": "Ruby Noir",
        "hex": "#360913"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Pure Como Mulberry Silk Jacquard",
    "fabricOrigin": "Como, Italy",
    "fit": "Slim Fit",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Shawl lapel styling on waistcoat front",
      "Satin-faced lower welt pockets"
    ]
  },
  {
    "id": "nk-wc-slate-blue-wool-silk",
    "name": "N.K FABRICS Milanese Slate Grey Silk-Wool Vest",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 920,
    "formattedPrice": "$920",
    "tagline": "Super 150s Wool-Silk with 5-Button High-V Stance",
    "description": "Versatile executive elegance. Pairs seamlessly with navy and charcoal tailored suits, adding layered depth for boardroom meetings.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Slate Grey",
        "hex": "#4A525D"
      },
      {
        "name": "Steel Blue",
        "hex": "#3B4856"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 150s Wool & Mulberry Silk",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Pick-stitched V-neckline",
      "Mother-of-pearl smoked buttons"
    ]
  },
  {
    "id": "nk-wc-sandstone-matka-mandarin",
    "name": "N.K FABRICS Sandstone Matka Raw Silk Mandarin Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 980,
    "formattedPrice": "$980",
    "tagline": "Coarse Hand-Loomed Matka Silk with Subtle Slub Texture",
    "description": "Textured warmth for festive Eid and daytime ceremonies. Features a high mandarin stand collar that frames the jawline impeccably.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sandstone",
        "hex": "#D4C3AC"
      },
      {
        "name": "Oatmeal",
        "hex": "#E0D2BD"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Matka Raw Silk (280g/m)",
    "fabricOrigin": "Heritage Looms, Lahore",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "In Stock",
    "stockUnits": 17,
    "tailoringNotes": [
      "Carved bone buttons with brass eyelets",
      "Pure cotton interior lining for breathability"
    ]
  },
  {
    "id": "nk-wc-black-barathea-single",
    "name": "N.K FABRICS Black Barathea Wool Single-Breasted Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 850,
    "formattedPrice": "$850",
    "tagline": "Traditional Five-Button Stance in Pure English Wool Barathea",
    "description": "The quintessential black suit companion. Deep, matte black barathea that avoids artificial sheen under bright conference lighting.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "100% Pure British Wool Barathea (290g/m)",
    "fabricOrigin": "Yorkshire, UK",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Jetted double pockets",
      "Hand-stitched buttonholes with silk gimp"
    ]
  },
  {
    "id": "nk-wc-cream-linen-summer",
    "name": "N.K FABRICS Riviera Cream Irish Linen Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 790,
    "formattedPrice": "$790",
    "tagline": "Pure Irish Linen with Horn Buttons & Bemberg Silk Back",
    "description": "Warm-weather formal layering. Breathable open-weave Irish linen that keeps the torso cool while maintaining crisp structural integrity.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Cream Linen",
        "hex": "#F2ECE1"
      },
      {
        "name": "Natural Ecru",
        "hex": "#E5DCB"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Irish Linen (240g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Natural horn buttons with matte finish",
      "Lightweight cupro lining"
    ]
  },
  {
    "id": "nk-wc-midnight-pinstripe-vest",
    "name": "N.K FABRICS Savile Row Chalk Pinstripe Wool Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 920,
    "formattedPrice": "$920",
    "tagline": "English Worsted Flannel with Chalk Pinstripe & Pocket Watch Slit",
    "description": "Boardroom authority. Worn with matching chalk stripe trousers or contrasting solid navy suits to create an unmistakable executive profile.",
    "primaryImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Navy Pinstripe",
        "hex": "#142033"
      },
      {
        "name": "Charcoal Pinstripe",
        "hex": "#252528"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "English Worsted Flannel (310g/m)",
    "fabricOrigin": "Somerset, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Dedicated horizontal watch chain pocket slit",
      "Curved bottom points designed to cover trouser waistband"
    ]
  },
  {
    "id": "nk-wc-gold-zari-brocade-mandarin",
    "name": "N.K FABRICS Sovereign Gold Zari Brocade Mandarin Waistcoat",
    "category": "waistcoats",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1350,
    "formattedPrice": "$1,350",
    "tagline": "Metallic Gold Bullion Threadwork on Raw Mulberry Silk",
    "description": "The ultimate wedding groom layer. Hand-embroidered zardozi metallic wire along the collar and placket over heavy raw silk.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
    "colors": [
      {
        "name": "Antique Gold",
        "hex": "#D4AF37"
      },
      {
        "name": "Royal Champagne",
        "hex": "#E6CA65"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Pure Silk with Real Metallic Zari Thread",
    "fabricOrigin": "Varanasi & Lahore Master Guilds",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Full hand-stitched zardozi embroidery",
      "Concealed magnetic placket with ornamental face buttons"
    ]
  },
  {
    "id": "nk-wc-chocolate-suede-vest",
    "name": "N.K FABRICS Florence Calf Suede Tailored Vest",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1200,
    "formattedPrice": "$1,200",
    "tagline": "Ultra-Supple Italian Calf Suede with Horn Buttons",
    "description": "Tactile luxury for autumn and winter. Featherweight suede with a velvety nap, tailored with high-V gorge and satin back.",
    "primaryImage": "/src/assets/images/suede_jacket_luxury_1791180724417.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#2E1E17"
      },
      {
        "name": "Warm Taupe",
        "hex": "#5E4A3B"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Genuine Italian Calf Suede",
    "fabricOrigin": "Tuscany, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 22,
    "tailoringNotes": [
      "Genuine buffalo horn buttons",
      "Satin lining with inner chest pocket"
    ]
  },
  {
    "id": "nk-wc-ivory-waffle-marcella",
    "name": "N.K FABRICS Marcella Piqu\u00e9 White-Tie Evening Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 890,
    "formattedPrice": "$890",
    "tagline": "Pure Cotton Marcella Waffle Bib with Low-Scoop Evening Stance",
    "description": "Strict white-tie formal protocol. Heavy Marcella waffle piqu\u00e9 with four mother-of-pearl buttons and adjustable back neck strap.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Crisp White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Giza Cotton Marcella Piqu\u00e9",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Low-scoop front cut",
      "Removable button shank mechanism for formal laundering"
    ]
  },
  {
    "id": "nk-wc-prince-of-wales-plaid-vest",
    "name": "N.K FABRICS Glen Plaid High-V Wool Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 940,
    "formattedPrice": "$940",
    "tagline": "Fine Glen Check Worsted Wool with Deco Blue Overcheck",
    "description": "British heritage styling. The intricate black and white glen plaid is accented by a subtle sky blue deco thread.",
    "primaryImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Glen Plaid Grey",
        "hex": "#4A4A4A"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 140s Wool (270g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Five-button stance with notched hem",
      "Bemberg cupro lining"
    ]
  },
  {
    "id": "nk-wc-royal-indigo-raw-silk",
    "name": "N.K FABRICS Royal Indigo Slub Silk Mandarin Waistcoat",
    "category": "waistcoats",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1080,
    "formattedPrice": "$1,080",
    "tagline": "Natural Indigo-Dyed Raw Silk with Silver Thread Piping",
    "description": "Rich, nocturnal South Asian grandeur. The deep sapphire indigo hue is framed by microscopic 1mm silver bullion piping.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Royal Indigo",
        "hex": "#13213B"
      },
      {
        "name": "Midnight Blue",
        "hex": "#0A1322"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Pure Hand-Spun Raw Mulberry Silk",
    "fabricOrigin": "Lahore Heritage Silk Weavers",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Silver bullion metallic thread piping",
      "Mother-of-pearl buttons with hand-sewn loop fasteners"
    ]
  },
  {
    "id": "nk-wc-houndstooth-monochrome-db",
    "name": "N.K FABRICS Monochrome Houndstooth Double-Breasted Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 960,
    "formattedPrice": "$960",
    "tagline": "Micro Puppytooth Pure Wool with Peak Lapels & 6-Button Closure",
    "description": "Dapper vintage tailoring. The double-breasted arrangement features small lapels and a straight hem that sits flush over trouser waistbands.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Black & White Houndstooth",
        "hex": "#333333"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Super 130s Pure Wool (280g/m)",
    "fabricOrigin": "Fox Brothers, UK",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 30,
    "tailoringNotes": [
      "Six-button double-breasted front with small peak lapels",
      "Buckle adjuster at back"
    ]
  },
  {
    "id": "nk-wc-forest-green-velvet-db",
    "name": "N.K FABRICS Bespoke Forest Velvet Double-Breasted Waistcoat",
    "category": "waistcoats",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1190,
    "formattedPrice": "$1,190",
    "tagline": "Heavy Cotton-Silk Velvet in Deep Hunter Green with Shawl Lapel",
    "description": "Commanding evening flair. The rich green velvet pile creates remarkable visual depth under soft lighting, styled with shawl lapels.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#142B1E"
      },
      {
        "name": "Deep Emerald",
        "hex": "#0C1C13"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Italian Cotton-Silk Velvet (360g/m)",
    "fabricOrigin": "Redaelli Velluti, Como",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Double-breasted four-button closure with shawl lapel",
      "Covered velvet buttons"
    ]
  },
  {
    "id": "nk-wc-platinum-silk-wedding",
    "name": "N.K FABRICS Platinum Silver Silk Wedding Waistcoat",
    "category": "waistcoats",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1220,
    "formattedPrice": "$1,220",
    "tagline": "Lustrous Metallic Silk Weave with Engraved Silver Filigree Buttons",
    "description": "Conceived for high-society wedding ceremonies. Shimmering platinum silver silk tailored with a flattering V-line and silk satin back.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Platinum Silver",
        "hex": "#C8CCD4"
      },
      {
        "name": "Pearl White",
        "hex": "#E8ECF2"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Pure Silk & Lurex Blend (230g/m)",
    "fabricOrigin": "Como, Italy",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 27,
    "tailoringNotes": [
      "Engraved silver filigree metal buttons",
      "Contrasting silk welt pockets"
    ]
  },
    {
      "id": "nk-wc-royal-jamawar-gold",
      "name": "N.K FABRICS Royal Gold Jamawar Wedding Waistcoat",
      "category": "waistcoats",
      "isNewArrival": true,
      "isBestSeller": true,
      "price": 1150,
      "formattedPrice": "$1,150",
      "tagline": "Hand-Woven Antique Gold Jamawar with Zari Paisley Weave",
      "description": "An opulent ceremonial waistcoat designed to be worn over traditional raw silk kurtas or paired under formal suits. Detailed with mandarin collar and hand-crafted zardozi buttons.",
      "primaryImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
      "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
      "colors": [
        {
          "name": "Antique Gold Jamawar",
          "hex": "#C5A059"
        },
        {
          "name": "Royal Copper",
          "hex": "#9E5B32"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Pure Silk Jamawar with Metallic Threading",
      "fabricOrigin": "Lahore Heritage Guild & Kashmir Looms",
      "fit": "Tailored Regular",
      "occasion": "Wedding & Gala",
      "collection": "Wedding Collection",
      "availability": "In Stock",
      "stockUnits": 24,
      "subType": "Traditional",
      "tailoringNotes": [
        "Mandarin band collar with micro-piping",
        "Silk cupro back with adjustable metal slider buckle"
      ]
    },
  {
      "id": "nk-wc-double-breasted-black-satin",
      "name": "N.K FABRICS Black Silk Satin Double-Breasted Waistcoat",
      "category": "waistcoats",
      "isNewArrival": false,
      "isBestSeller": true,
      "price": 890,
      "formattedPrice": "$890",
      "tagline": "6-Button Evening Satin Waistcoat with Shawl Neckline",
      "description": "The classic black-tie accessory. Smooth Italian silk satin in deep obsidian, tailored with a graceful low shawl curve to exhibit pleated evening shirting.",
      "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
      "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
      "colors": [
        {
          "name": "Obsidian Black Satin",
          "hex": "#080808"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "100% Pure Italian Como Silk Satin",
      "fabricOrigin": "Como, Italy",
      "fit": "Classic Formal",
      "occasion": "Evening Black-Tie",
      "collection": "Formal Collection",
      "availability": "In Stock",
      "stockUnits": 32,
      "subType": "Double-Breasted",
      "tailoringNotes": [
        "Low horseshoe shawl collar",
        "Fabric-covered satin buttons with reinforced stitching"
      ]
    },
  {
      "id": "nk-wc-emerald-velvet-embroidered",
      "name": "N.K FABRICS Emerald Velvet Embroidered Waistcoat",
      "category": "waistcoats",
      "isNewArrival": true,
      "isBestSeller": false,
      "price": 1050,
      "formattedPrice": "$1,050",
      "tagline": "Deep Emerald Silk Velvet with Delicate Gold Thread Borders",
      "description": "Rich jewel-toned formal waistcoat with delicate tone-on-tone corded embroidery along the placket and mandarin collar. Designed for winter celebrations and festive occasions.",
      "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
      "hoverImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
      "colors": [
        {
          "name": "Royal Emerald Velvet",
          "hex": "#143D2B"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "Venetian Silk Velvet with Gold Thread Embroidery",
      "fabricOrigin": "Venice, Italy",
      "fit": "Slim Fit",
      "occasion": "Ceremony & Eid",
      "collection": "Eid Collection",
      "availability": "In Stock",
      "stockUnits": 20,
      "subType": "Embroidered",
      "tailoringNotes": [
        "Corded gold leaf embroidery on collar and pockets",
        "Hidden interior ticket pocket"
      ]
    },
  {
      "id": "nk-wc-raw-silk-charcoal-formal",
      "name": "N.K FABRICS Raw Silk Charcoal Formal Waistcoat",
      "category": "waistcoats",
      "isNewArrival": false,
      "isBestSeller": false,
      "price": 780,
      "formattedPrice": "$780",
      "tagline": "Hand-Spun Slub Raw Silk with Horn Button Placket",
      "description": "Distinctive slub raw silk texture that catches subtle lighting with organic elegance. Styled with a tailored V-neck and welt pockets.",
      "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
      "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
      "colors": [
        {
          "name": "Charcoal Slub Silk",
          "hex": "#2B2D2F"
        },
        {
          "name": "Slate Grey",
          "hex": "#45484D"
        }
      ],
      "sizes": [
        "38R",
        "40R",
        "42R",
        "44R",
        "46L"
      ],
      "fabric": "100% Hand-Spun Mulberry Raw Silk",
      "fabricOrigin": "Swat Valley & Punjab Looms",
      "fit": "Tailored Regular",
      "occasion": "Everyday Luxury",
      "collection": "Signature Collection",
      "availability": "In Stock",
      "stockUnits": 26,
      "subType": "Solid",
      "tailoringNotes": [
        "Structured horsehair chest interfacing",
        "Adjustable back cinch strap"
      ]
    },
  {
    "id": "nk-fs-white-royal-poplin",
    "name": "N.K FABRICS Royal Poplin Formal Shirt (White)",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 650,
    "formattedPrice": "$650",
    "tagline": "Swiss Giza 45 Cotton with French Cuffs & Brass Stays",
    "description": "Immaculate white dress shirt woven from ultra-long-staple Egyptian cotton. Structured semi-spread collar, French double cuffs, and genuine iridescent mother-of-pearl buttons.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Crisp White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Ivory",
        "hex": "#FAF8F5"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0",
      "17.5"
    ],
    "fabric": "100% Giza 45 Egyptian Cotton Poplin (200/2 count)",
    "fabricOrigin": "Thomas Mason, Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Removable solid brass engraved collar stays included",
      "22 stitches per inch single-needle tailoring",
      "French double cuffs designed for cufflinks"
    ]
  },
  {
    "id": "nk-fs-sky-blue-end-on-end",
    "name": "N.K FABRICS End-on-End Formal Shirt (Sky Blue)",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 680,
    "formattedPrice": "$680",
    "tagline": "Two-Tone Zephyr Weave with Modern Spread Collar",
    "description": "Interweaves white and azure yarns to produce an ethereal two-tone depth that pairs harmoniously with charcoal and navy bespoke suiting.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#D0E2EE"
      },
      {
        "name": "French Blue",
        "hex": "#9BB8D3"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "Super 160s Egyptian Cotton End-on-End",
    "fabricOrigin": "Alumo, Appenzell, Switzerland",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Spread collar designed for full or half Windsor knots",
      "Australian mother-of-pearl buttons cross-stitched by hand"
    ]
  },
  {
    "id": "nk-fs-marcella-pique-evening",
    "name": "N.K FABRICS Marcella Piqu\u00e9 Evening Dress Shirt",
    "category": "formal-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 750,
    "formattedPrice": "$750",
    "tagline": "Formal White-Tie Evening Shirt with Stud Front & Wing Collar",
    "description": "The pinnacle of nocturnal formality. Heavy waffle-textured Marcella bib front with convertible stud placket, finished with a classic wing collar.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Pure White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0",
      "17.5"
    ],
    "fabric": "Giza 45 Cotton with Marcella Piqu\u00e9 Waffle Bib Front",
    "fabricOrigin": "Thomas Mason Bespoke",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Wing collar with interlining that sustains crisp stance through banquets",
      "Removable studs slot (compatible with studs or standard buttons)"
    ]
  },
  {
    "id": "nk-fs-fine-bengal-stripe",
    "name": "N.K FABRICS Fine Bengal Stripe Business Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 620,
    "formattedPrice": "$620",
    "tagline": "Alternating Navy & White Precision Bengal Stripe",
    "description": "An executive sartorial classic. Clean 1/8-inch navy stripes on an Egyptian cotton poplin ground, equipped with a semi-spread collar.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Navy & White Stripe",
        "hex": "#2A4465"
      },
      {
        "name": "Sky & White Stripe",
        "hex": "#638BB8"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "2-Ply Egyptian Cotton Poplin (140/2)",
    "fabricOrigin": "Albini Group, Bergamo, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Pattern matched across shoulder yoke and split placket",
      "Two-button mitered cuffs"
    ]
  },
  {
    "id": "nk-fs-nocturne-black-silk-voile",
    "name": "N.K FABRICS Nocturne Silk-Voile Evening Shirt",
    "category": "formal-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 780,
    "formattedPrice": "$780",
    "tagline": "Pure Silk Voile with Hidden Placket & Dark Mother-of-Pearl Buttons",
    "description": "Created for black-tie galas and cocktail evenings. Translucent black mulberry silk voile with a whisper-light hand and midnight mother-of-pearl buttons.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0B0B0B"
      },
      {
        "name": "Nocturne Charcoal",
        "hex": "#1C1C1C"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "100% Mulberry Silk Voile (110g/m)",
    "fabricOrigin": "Como, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Concealed placket with dark smoked mother-of-pearl buttons",
      "Clean semi-spread collar with soft interlining"
    ]
  },
  {
    "id": "nk-fs-sea-island-ivory-herringbone",
    "name": "N.K FABRICS Sea Island Ivory Herringbone Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 690,
    "formattedPrice": "$690",
    "tagline": "West Indian Sea Island Cotton in Fine Micro-Herringbone Weave",
    "description": "The rarest cotton in the world. Harvested exclusively in the West Indies, offering cashmere-like softness and a refined micro-herringbone zigzag luster.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Ivory Herringbone",
        "hex": "#FAF7F0"
      },
      {
        "name": "Alabaster",
        "hex": "#F0ECE0"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0",
      "17.5"
    ],
    "fabric": "100% Certified West Indian Sea Island Cotton",
    "fabricOrigin": "Wisica Certified / Thomas Mason",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Micro-herringbone weave reflects light three-dimensionally",
      "French double cuffs with hand-stitched buttonholes"
    ]
  },
  {
    "id": "nk-fs-ambassador-micro-twill",
    "name": "N.K FABRICS Ambassador Micro-Twill Shirt (White)",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 720,
    "formattedPrice": "$720",
    "tagline": "High-Luster Compact Twill with Hand-Rolled French Cuffs",
    "description": "The executive favorite. The diagonal micro-twill weave gives off a radiant luster that stays crisp under suiting throughout 14-hour days.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Crisp White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Pale Blue",
        "hex": "#E2EDF7"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "Super 180s Compact Egyptian Giza Twill",
    "fabricOrigin": "Alumo, Switzerland",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Split-yoke shoulder for natural upper-back curvature",
      "Solid brass engraved collar stays"
    ]
  },
  {
    "id": "nk-fs-pale-rose-royal-oxford",
    "name": "N.K FABRICS Pale Rose Royal Oxford Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 640,
    "formattedPrice": "$640",
    "tagline": "Subtle Powder Pink Royal Oxford with Spread Collar",
    "description": "A distinguished continental statement. The delicate powder pink shade enlivens grey and navy suiting while the royal Oxford weave provides rich visual weight.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Pale Rose Pink",
        "hex": "#F7E7E7"
      },
      {
        "name": "Blush Ivory",
        "hex": "#FAF0F0"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "2-Ply Royal Oxford Cotton (120/2)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Clean semi-spread collar with removable brass stays",
      "Double-stitched side seams with reinforced pentagonal gusset"
    ]
  },
  {
    "id": "nk-fs-charcoal-pinpoint-oxford",
    "name": "N.K FABRICS Charcoal Pinpoint Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 620,
    "formattedPrice": "$620",
    "tagline": "Fine Pinpoint Oxford Weave in Deep Anthracite Grey",
    "description": "A modern monochromatic option. Deep grey pinpoint cotton that pairs sharply with black suits and silk knit neckwear.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Charcoal Grey",
        "hex": "#383838"
      },
      {
        "name": "Smoke Grey",
        "hex": "#555555"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "100% Giza Cotton Pinpoint Oxford",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Slim Fit",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 29,
    "tailoringNotes": [
      "English cutaway collar",
      "Single rounded barrel cuffs with horn buttons"
    ]
  },
  {
    "id": "nk-fs-cream-silk-blend-formal",
    "name": "N.K FABRICS Cream Silk-Cotton Spread Collar Shirt",
    "category": "formal-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 710,
    "formattedPrice": "$710",
    "tagline": "Lustrous 50% Mulberry Silk, 50% Egyptian Cotton Twill",
    "description": "The ultimate wedding guest and reception shirt. A warm ivory cream sheen that catches celebration candlelight with graceful elegance.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Warm Cream",
        "hex": "#F5EFE3"
      },
      {
        "name": "Champagne Ivory",
        "hex": "#ECE3D0"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "50% Mulberry Silk, 50% Egyptian Cotton",
    "fabricOrigin": "Como & Bergamo, Italy",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "French double cuffs with hand-stitched bar tacks",
      "Mother-of-pearl buttons with gold thread loops"
    ]
  },
  {
    "id": "nk-fs-navy-micro-houndstooth",
    "name": "N.K FABRICS Navy Micro-Houndstooth Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 660,
    "formattedPrice": "$660",
    "tagline": "Microscopic Scale Navy & White Houndstooth Weave",
    "description": "Reads as a textured powder blue from two steps away. The fine micro-houndstooth adds textural intrigue under plain worsted suiting.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Navy Micro-Check",
        "hex": "#283B54"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "2-Ply Egyptian Cotton (160/2)",
    "fabricOrigin": "Alumo, Switzerland",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Extreme cutaway collar designed for large tie knots",
      "Curved hem with reinforced side gussets"
    ]
  },
  {
    "id": "nk-fs-pleated-bib-tuxedo-white",
    "name": "N.K FABRICS Classic Pleated-Bib Tuxedo Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 760,
    "formattedPrice": "$760",
    "tagline": "0.5cm Accordion Pleats in Giza 87 Egyptian Cotton",
    "description": "The definitive black-tie evening standard. Twelve precision razor-pleats flank the front placket, fastened with convertible black onyx studs.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Crisp White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0",
      "17.5"
    ],
    "fabric": "Giza 87 Egyptian Cotton with Pleated Voile Bib",
    "fabricOrigin": "Thomas Mason Bespoke",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Turn-down formal collar with rigid interlining",
      "French double cuffs with rounded corners"
    ]
  },
  {
    "id": "nk-fs-ice-blue-royal-twill",
    "name": "N.K FABRICS Ice Blue Sovereign Royal Twill Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 670,
    "formattedPrice": "$670",
    "tagline": "Frosty Ice Blue Compact Twill with Luminous Sheen",
    "description": "A crisp visual tonic against midnight navy suits. The light-refracting diagonal twill weave gives an immaculate smooth front throughout the day.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Ice Blue",
        "hex": "#E3EDF7"
      },
      {
        "name": "Glacier Blue",
        "hex": "#D4E4F5"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "Super 160s Egyptian Giza Twill",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 22,
    "tailoringNotes": [
      "Wide spread collar with removable brass stays",
      "Two-button mitered cuffs"
    ]
  },
  {
    "id": "nk-fs-black-poplin-french-cuff",
    "name": "N.K FABRICS Midnight Noir Poplin Dress Shirt",
    "category": "formal-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 660,
    "formattedPrice": "$660",
    "tagline": "Ultra-Black Mercerized Cotton with French Double Cuffs",
    "description": "Deep, saturated black that retains its dark pigment without fading. Engineered for nocturnal formal events, paired with silver or gold cufflinks.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Jet Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "100% Giza 87 Mercerized Cotton Poplin",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Concealed fly placket",
      "Dark smoked iridescent mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-fs-french-blue-hairline-stripe",
    "name": "N.K FABRICS French Blue Hairline Stripe Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 630,
    "formattedPrice": "$630",
    "tagline": "Microscopic Hairline Stripe in Egyptian Giza 45 Cotton",
    "description": "Sophisticated micro-geometry. The ultra-fine lines create an optical illusion of solid soft blue, revealing its meticulous striped craft up close.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "French Blue Stripe",
        "hex": "#41638A"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "2-Ply Egyptian Cotton Hairline Weave (140/2)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Semi-spread collar with 3.25-inch collar points",
      "Single-needle stitching throughout"
    ]
  },
  {
    "id": "nk-fs-silver-grey-end-on-end",
    "name": "N.K FABRICS Silver Grey End-on-End Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 650,
    "formattedPrice": "$650",
    "tagline": "Alternating White & Charcoal Threads in a Fine Weave",
    "description": "A modern cool-neutral shirt that sits brilliantly under charcoal and black suiting. Mother-of-pearl buttons provide a gleaming finish.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Silver Grey",
        "hex": "#A8ADB5"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "Super 140s Egyptian Cotton",
    "fabricOrigin": "Alumo, Switzerland",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Medium spread collar with 8.5cm point spread",
      "Two-button rounded cuff"
    ]
  },
  {
    "id": "nk-fs-white-dobby-micro-check",
    "name": "N.K FABRICS White Dobby Geometric Micro-Check Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 680,
    "formattedPrice": "$680",
    "tagline": "Tone-on-Tone Raised Dobby Weave with Visual Depth",
    "description": "An understated white shirt with three-dimensional interest. The subtle dobby jacquard texture catches natural sunlight with refined distinction.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "White Dobby",
        "hex": "#FAF9F7"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "100% Giza 45 Cotton Dobby Jacquard",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 20,
    "tailoringNotes": [
      "French double cuffs with hand-stitched buttonholes",
      "Removable brass stays"
    ]
  },
  {
    "id": "nk-fs-classic-white-tab-collar",
    "name": "N.K FABRICS Savile Row Tab-Collar Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 690,
    "formattedPrice": "$690",
    "tagline": "Traditional Collar Tab with Snap Fastener & French Cuffs",
    "description": "Pushes tie knots forward and upward into a prominent, proud arch. Crafted from heavyweight Swiss poplin for boardroom distinction.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Pure White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "200/2 Swiss Cotton Poplin",
    "fabricOrigin": "Alumo, Switzerland",
    "fit": "Slim Fit",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Point collar with snap tab closure under tie knot",
      "French double cuffs"
    ]
  },
  {
    "id": "nk-fs-sky-blue-royal-oxford",
    "name": "N.K FABRICS Sky Blue Royal Oxford Dress Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 640,
    "formattedPrice": "$640",
    "tagline": "Heavyweight Royal Basketweave with Cutaway Collar",
    "description": "Substantial body with unmatched drape. The basketweave texture provides tactile luxury while remaining crisp under heavy worsted suit jackets.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sky Blue Oxford",
        "hex": "#7FA4C4"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "2-Ply Royal Oxford Cotton (120/2)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Cutaway collar with wide tie spread",
      "Curved hem for secure tucking"
    ]
  },
  {
    "id": "nk-fs-lavender-end-on-end",
    "name": "N.K FABRICS Pale Lavender End-on-End Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 650,
    "formattedPrice": "$650",
    "tagline": "Subtle Violet and White Interwoven Zephyr Yarns",
    "description": "A patrician choice for spring and summer formal wear. The delicate lilac shade complements grey flannel and navy wool suits with quiet warmth.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "colors": [
      {
        "name": "Pale Lavender",
        "hex": "#D4CCE0"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "Super 150s Egyptian Cotton End-on-End",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Spread collar with removable stays",
      "Mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-fs-ecru-silk-cashmere-shirt",
    "name": "N.K FABRICS Ecru Silk-Cashmere Evening Dress Shirt",
    "category": "formal-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 790,
    "formattedPrice": "$790",
    "tagline": "85% Giza Cotton, 15% Cashmere with French Cuffs",
    "description": "Soft as a cloud. An ultra-fine blend of Egyptian cotton and Mongolian cashmere in a warm ecru hue, designed for winter galas and black-tie dinners.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Warm Ecru",
        "hex": "#EFE9DE"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "85% Giza Cotton, 15% Cashmere (Albiate)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Winter Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "French double cuffs with hand-stitched eyelets",
      "Extreme thermal softness"
    ]
  },
  {
    "id": "nk-fs-graph-check-navy-white",
    "name": "N.K FABRICS Executive Graph Check Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 620,
    "formattedPrice": "$620",
    "tagline": "Clean 5mm Navy Windowpane Grid on Pure White Poplin",
    "description": "A contemporary executive look. The crisp geometry adds focus and proportion beneath solid charcoal and navy bespoke suiting.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Navy Graph Check",
        "hex": "#223854"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "100% Giza Cotton Poplin (140/2)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Spread collar",
      "Pattern-matched split shoulder yoke"
    ]
  },
  {
    "id": "nk-fs-ivory-silk-pleated-ceremony",
    "name": "N.K FABRICS Ivory Silk Pleated Ceremony Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 780,
    "formattedPrice": "$780",
    "tagline": "Mulberry Silk Crepe de Chine with Micro-Pleated Bib",
    "description": "An imperial wedding shirt. Fluid mulberry silk crepe that drapes around the torso with regal weight, finished with a subtle pleated front.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Ivory Silk",
        "hex": "#F7F3E9"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "100% Pure Mulberry Silk Crepe (16 Momme)",
    "fabricOrigin": "Como, Italy",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 27,
    "tailoringNotes": [
      "Micro-pleated bib with concealed fly front",
      "Mother-of-pearl buttons with gold loops"
    ]
  },
  {
    "id": "nk-fs-white-twill-double-cuff",
    "name": "N.K FABRICS Monarch White Heavy Twill Dress Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 670,
    "formattedPrice": "$670",
    "tagline": "Opaque 2-Ply Diagonal Twill with Semi-Spread Collar",
    "description": "100% zero-translucency white twill. Perfect under photographic strobes and camera lights, delivering a pristine white presence without show-through.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Opaque White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0",
      "17.5"
    ],
    "fabric": "2-Ply Heavy Egyptian Twill (120/2)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Semi-spread collar with brass stays",
      "French double cuffs with monogram slot"
    ]
  },
  {
    "id": "nk-fs-blue-white-university-stripe",
    "name": "N.K FABRICS Blue University Bengal Stripe Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 630,
    "formattedPrice": "$630",
    "tagline": "Medium 4mm Blue & White Stripe in Crisp Cotton Poplin",
    "description": "The definitive city shirt. Pair with navy chalk stripe or charcoal flannel suits for an authoritative, timeless British silhouette.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "colors": [
      {
        "name": "City Blue Stripe",
        "hex": "#33527A"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "Super 140s Egyptian Cotton Poplin",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Cutaway collar with 3.5-inch leaf points",
      "Mitered single cuffs"
    ]
  },
  {
    "id": "nk-fs-pure-white-pin-collar",
    "name": "N.K FABRICS Savile Row Gold Pin-Collar Formal Shirt",
    "category": "formal-shirts",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 720,
    "formattedPrice": "$720",
    "tagline": "Collar Eyelets Accommodating Solid 18K Gold Plated Bar Pin",
    "description": "The ultimate bespoke statement. Includes a solid brass gold-plated collar bar that lifts the necktie knot into a sculptured arch.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Crisp White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0"
    ],
    "fabric": "200/2 Swiss Cotton Poplin",
    "fabricOrigin": "Alumo, Switzerland",
    "fit": "Slim Fit",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Collar eyelets with included 18K gold-plated screw-bar collar pin",
      "French double cuffs"
    ]
  },
  {
    "id": "nk-cs-sandstone-linen-overshirt",
    "name": "N.K FABRICS Sandstone Pure Irish Linen Overshirt",
    "category": "casual-shirts",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 580,
    "formattedPrice": "$580",
    "tagline": "Heavyweight Irish Linen with Dual Chest Patch Pockets",
    "description": "The cornerstone of relaxed sartorial dressing. Open-collar construction in breathable Irish linen, tailored with horn buttons and straight hem with side vents for wearing untucked.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Sandstone Taupe",
        "hex": "#C2B199"
      },
      {
        "name": "Oatmeal",
        "hex": "#D8CEBF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Heavyweight Irish Linen (260g/m)",
    "fabricOrigin": "Baird McNutt, Northern Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Dual chest flap patch pockets with horn button closures",
      "Straight hem with side vents for untucked wear",
      "Soft unlined spread collar"
    ]
  },
  {
    "id": "nk-cs-classic-white-oxford-bd",
    "name": "N.K FABRICS Signature Heavyweight Oxford Button-Down",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 460,
    "formattedPrice": "$460",
    "tagline": "American Long-Staple Supima Cotton in Classic 3-Inch Collar Roll",
    "description": "The definitive Ivy-style classic. Heavyweight Oxford cloth with an authentic soft collar roll, mother-of-pearl buttons, and back box pleat with locker loop.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Oxford White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Long-Staple Supima Cotton Oxford",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Unlined button-down collar with natural 3-inch roll",
      "Center back box pleat and locker loop",
      "Generous curved hem"
    ]
  },
  {
    "id": "nk-cs-sky-blue-oxford-bd",
    "name": "N.K FABRICS Sky Blue Heavyweight Oxford Button-Down",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 460,
    "formattedPrice": "$460",
    "tagline": "Classic Melange Oxford Weave in Heritage Sky Blue",
    "description": "The timeless weekend staple. Dense basketweave cotton that softens and acquires personal character with every wash, finished with mother-of-pearl buttons.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#8BB1D4"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Long-Staple Supima Cotton Oxford",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Chalk white genuine mother-of-pearl buttons",
      "Single rounded chest pocket",
      "Unlined cuffs for easy rolling"
    ]
  },
  {
    "id": "nk-cs-navy-indigo-linen-shirt",
    "name": "N.K FABRICS Indigo-Dyed Pure Linen Casual Shirt",
    "category": "casual-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 520,
    "formattedPrice": "$520",
    "tagline": "Deep Indigo Raw Linen with Natural Texture & Camp Collar",
    "description": "Rich, saturated indigo hue that breathes effortlessly in Mediterranean heat. Styled with a retro camp collar and mother-of-pearl buttons.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Deep Indigo",
        "hex": "#1C2B42"
      },
      {
        "name": "Washed Navy",
        "hex": "#283C5A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Pure Normandy Linen",
    "fabricOrigin": "Normandy, France",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Convertible camp open collar",
      "Straight hem with side vents",
      "Natural mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-cs-olive-safari-overshirt",
    "name": "N.K FABRICS Tuscan Olive Cotton-Linen Safari Overshirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 620,
    "formattedPrice": "$620",
    "tagline": "Military-Inspired Four-Pocket Field Shirt in Cotton-Linen Twill",
    "description": "Rugged elegance. Four button-through bellows pockets on the front provide ample storage while the breathable cotton-linen twill holds a crisp, structured drape.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/suede_jacket_luxury_1791180724417.jpg",
    "colors": [
      {
        "name": "Tuscan Olive",
        "hex": "#3D4435"
      },
      {
        "name": "Khaki Tan",
        "hex": "#7A6B53"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "60% Linen, 40% Egyptian Cotton (280g/m)",
    "fabricOrigin": "Tuscany, Italy",
    "fit": "Relaxed Drape",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Four front bellows pockets with buttoned flaps",
      "Internal waist drawstring for adjustable suppression",
      "Dark horn buttons"
    ]
  },
  {
    "id": "nk-cs-madras-check-linen",
    "name": "N.K FABRICS Heritage Multicolored Madras Linen Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 480,
    "formattedPrice": "$480",
    "tagline": "Authentic Hand-Woven Madras Plaid with Relaxed Spread Collar",
    "description": "Vibrant summer elegance. Traditional Madras plaid interweaving navy, burgundy, and ecru yarns, washed for a super-soft lived-in handfeel.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Heritage Madras Plaid",
        "hex": "#5A333A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Pure Indian Handloom Linen",
    "fabricOrigin": "Chennai Artisans & N.K FABRICS",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Soft unlined button-down collar",
      "Single chest patch pocket with pen slot"
    ]
  },
  {
    "id": "nk-cs-espresso-corduroy-overshirt",
    "name": "N.K FABRICS Fine-Wale Espresso Cotton Corduroy Overshirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 540,
    "formattedPrice": "$540",
    "tagline": "Baby Corduroy 18-Wale in Rich Roasted Espresso Brown",
    "description": "Warm, tactile layering for autumn. Velvety 18-wale micro-corduroy woven from Italian cotton, finished with dark horn buttons and twin flap pockets.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#2D1F18"
      },
      {
        "name": "Cognac Tan",
        "hex": "#5E3E2B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Fine-Wale Italian Cotton Corduroy",
    "fabricOrigin": "Brescia, Italy",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Dual chest pockets with buttoned flaps",
      "Hand-stitched horn buttons",
      "Satin-lined collar band for neck comfort"
    ]
  },
  {
    "id": "nk-cs-resort-camp-collar-ivory",
    "name": "N.K FABRICS Riviera Camp-Collar Silk-Linen Resort Shirt",
    "category": "casual-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 590,
    "formattedPrice": "$590",
    "tagline": "Unstructured Open-Collar Shirt in 55% Silk, 45% Linen",
    "description": "The definitive seaside luxury shirt. Fluid silk drape combined with the cooling properties of open-weave linen, finished with a retro one-piece holiday collar.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Ivory Silk-Linen",
        "hex": "#F7F3E9"
      },
      {
        "name": "Oatmeal",
        "hex": "#E2DACB"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "55% Mulberry Silk, 45% Linen (190g/m)",
    "fabricOrigin": "Como & Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Continuous camp collar with no neckband",
      "Straight hem designed strictly for untucked wear",
      "Carved Australian mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-cs-chambray-selvedge-workshirt",
    "name": "N.K FABRICS Japanese Selvedge Chambray Casual Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 490,
    "formattedPrice": "$490",
    "tagline": "Authentic 5oz Shuttle-Loomed Selvedge Chambray with Triple Stitching",
    "description": "Artisanal workwear elevated to luxury. Shuttle-loomed on vintage Toyoda looms with white selvedge ID line along the side gussets and triple-needle chainstitching.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Washed Chambray Blue",
        "hex": "#5B7A9C"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Japanese Selvedge Cotton Chambray (5oz)",
    "fabricOrigin": "Kojima, Okayama, Japan",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Triple-needle chainstitched seams with run-off thread detail",
      "Selvedge side seam gussets",
      "Catseye urea buttons"
    ]
  },
  {
    "id": "nk-cs-black-washed-linen-casual",
    "name": "N.K FABRICS Nocturne Washed Linen Button-Down",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 510,
    "formattedPrice": "$510",
    "tagline": "Pre-Washed Black Irish Linen with Relaxed Texture",
    "description": "Sleek, dark, and summery. Enzyme-washed to achieve a velvety soft matte surface that drapes effortlessly over tailored shorts or linen trousers.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Irish Linen Enzyme Washed",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Hidden button-down collar points",
      "Smoked dark mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-cs-flannel-buffalo-check-navy",
    "name": "N.K FABRICS Navy & Charcoal Brushed Flannel Casual Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 480,
    "formattedPrice": "$480",
    "tagline": "Double-Brushed Heavyweight Cotton Flannel for Winter Warmth",
    "description": "Supreme cold-weather comfort. Fluffy double-brushed cotton flannel in a muted navy and charcoal buffalo check that feels like cashmere against the skin.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Navy & Charcoal Check",
        "hex": "#232C3A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Double-Brushed Cotton Flannel (240g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 37,
    "tailoringNotes": [
      "Twin chest buttoned flap pockets",
      "Reinforced elbow patches in self fabric",
      "Matte horn buttons"
    ]
  },
  {
    "id": "nk-cs-terry-cloth-resort-shirt",
    "name": "N.K FABRICS French Terry Resort Button-Up Shirt",
    "category": "casual-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 470,
    "formattedPrice": "$470",
    "tagline": "Pure Cotton Knit Terry Cloth with Camp Collar",
    "description": "Designed for yacht decks and poolside terraces. Ultra-absorbent looped cotton terry cloth that replaces standard shirting with casual, tactile luxury.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Off-White Terry",
        "hex": "#F4EFE6"
      },
      {
        "name": "Navy Blue",
        "hex": "#141E30"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Cotton Knitted Loop Terry (220g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Camp collar with loop closure",
      "Breathable looped pile texture",
      "Natural mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-cs-striped-poplin-relaxed",
    "name": "N.K FABRICS Green & White Awning Stripe Relaxed Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 450,
    "formattedPrice": "$450",
    "tagline": "Bold 8mm Awning Stripe in Crisp Egyptian Cotton Poplin",
    "description": "Mediterranean holiday flair. Broad green and white deckchair stripes cut in an oversized relaxed silhouette with dropped shoulders and a curved hem.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Forest Green Stripe",
        "hex": "#2B4A34"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Egyptian Cotton Poplin (120/2)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "Wide spread collar with soft unlined construction",
      "Dropped shoulder seam for easy drape"
    ]
  },
  {
    "id": "nk-cs-wool-overshirt-charcoal",
    "name": "N.K FABRICS Melton Wool CPO Overshirt (Charcoal)",
    "category": "casual-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 690,
    "formattedPrice": "$690",
    "tagline": "Heavy 16oz British Melton Wool with Satin Sleeve Lining",
    "description": "A hybrid between jacket and shirt. Heavyweight Melton wool that repels wind and light rain, designed to layer over t-shirts and knitwear.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Charcoal Melton",
        "hex": "#262626"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% British Pure Wool Melton (16oz)",
    "fabricOrigin": "Abraham Moon, Yorkshire, UK",
    "fit": "Relaxed Drape",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Twin anchor-engraved horn buttons on chest pockets",
      "Satin-lined sleeves for smooth layering",
      "Straight hem"
    ]
  },
  {
    "id": "nk-cs-botanical-print-silk-shirt",
    "name": "N.K FABRICS Botanical Nocturne Printed Silk Resort Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 680,
    "formattedPrice": "$680",
    "tagline": "Monochrome Hand-Printed Mulberry Silk Crepe de Chine",
    "description": "Evening resort elegance. Fluid black silk crepe with subtle cream botanical leaf motifs, cut with an open camp collar and French seams.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Nocturne Botanical",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Pure Mulberry Silk Crepe (18 Momme)",
    "fabricOrigin": "Como, Italy",
    "fit": "Relaxed Drape",
    "occasion": "Evening Black-Tie",
    "collection": "Limited Edition",
    "availability": "In Stock",
    "stockUnits": 17,
    "tailoringNotes": [
      "Hand-screen printed in Como",
      "Genuine mother-of-pearl buttons",
      "Straight split hem"
    ]
  },
  {
    "id": "nk-cs-denim-western-shirt-raw",
    "name": "N.K FABRICS Selvedge Raw Denim Western Casual Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 530,
    "formattedPrice": "$530",
    "tagline": "8oz Japanese Deep Indigo Raw Denim with Mother-of-Pearl Snaps",
    "description": "Elevated Western tailoring. Slanted sawtooth chest pockets, shaped Western shoulder yokes, and genuine iridescent mother-of-pearl snap fasteners.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Raw Indigo",
        "hex": "#162238"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Japanese Selvedge Denim (8oz)",
    "fabricOrigin": "Kojima, Japan",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Mother-of-pearl snap buttons throughout",
      "Sawtooth double flap pockets",
      "Shaped front and back Western yokes"
    ]
  },
  {
    "id": "nk-cs-linen-band-collar-white",
    "name": "N.K FABRICS Mandarin Band-Collar Pure Linen Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 490,
    "formattedPrice": "$490",
    "tagline": "Pure French Linen with Clean Stand Collar & Popover Placket",
    "description": "Minimalist warm-weather tailoring. Three-button popover placket and a crisp mandarin band collar that channels quiet luxury.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Pure White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Natural Ecru",
        "hex": "#E8E1D2"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% French Normandy Linen",
    "fabricOrigin": "France",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Three-button popover half-placket",
      "Unstructured mandarin stand collar",
      "Single chest pocket"
    ]
  },
  {
    "id": "nk-cs-micro-gingham-navy-white",
    "name": "N.K FABRICS Executive Navy Gingham Poplin Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 460,
    "formattedPrice": "$460",
    "tagline": "Micro 2mm Navy Gingham Check with Button-Down Collar",
    "description": "Smart-casual perfection. Worn under sweaters or with chinos for effortless Friday elegance without losing sartorial sharpness.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Navy Gingham",
        "hex": "#1B2E4B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Long-Staple Egyptian Cotton (120/2)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Button-down collar with 3-inch roll",
      "Genuine mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-cs-cashmere-cotton-flannel",
    "name": "N.K FABRICS Cashmere-Enriched Cotton Flannel Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 640,
    "formattedPrice": "$640",
    "tagline": "85% Cotton, 15% Cashmere in Warm Camel Heather",
    "description": "Unsurpassed softness. A blend of brushed cotton and Grade-A cashmere that delivers cozy thermal performance with zero bulk.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Camel Heather",
        "hex": "#A88D6A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "85% Cotton, 15% Cashmere (Albiate)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Soft spread collar with removable stays",
      "Mother-of-pearl smoked buttons"
    ]
  },
  {
    "id": "nk-cs-khaki-poplin-military-shirt",
    "name": "N.K FABRICS Field Khaki High-Density Poplin Shirt",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 480,
    "formattedPrice": "$480",
    "tagline": "Structured 140s Cotton Poplin with Shoulder Epaulettes",
    "description": "Sharp utilitarian styling. Finished with military shoulder epaulettes, dual pleated chest pockets, and a buttoned storm placket.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Field Khaki",
        "hex": "#736852"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Super 140s Compact Cotton Poplin",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Shoulder epaulettes with horn buttons",
      "Dual pleated bellows chest pockets"
    ]
  },
  {
    "id": "nk-cs-linen-guayabera-ivory",
    "name": "N.K FABRICS Four-Pocket Linen Guayabera Shirt",
    "category": "casual-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 570,
    "formattedPrice": "$570",
    "tagline": "Pure Linen with Vertical Alforzas Pleats & Split Hem",
    "description": "The aristocratic tropical dress shirt. Four patch pockets and precision vertical micro-pleating (alforzas) down front and back.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Ivory Linen",
        "hex": "#F9F5EC"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Pure Irish Linen (230g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Four front patch pockets with decorative buttons",
      "Vertical alforzas tuck pleating",
      "Side buttoned vents"
    ]
  },
  {
    "id": "nk-cs-navy-silk-bowling-shirt",
    "name": "N.K FABRICS Retro Silk Bowling Camp Shirt (Navy)",
    "category": "casual-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 620,
    "formattedPrice": "$620",
    "tagline": "Heavy 22-Momme Silk Twill with Contrast Cream Piping",
    "description": "Vintage elegance modernized. Dense silk twill in deep midnight navy with ivory piping along the camp collar and chest pocket.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#0D172B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Pure Mulberry Silk Twill (22 Momme)",
    "fabricOrigin": "Como, Italy",
    "fit": "Relaxed Drape",
    "occasion": "Evening Black-Tie",
    "collection": "Limited Edition",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "Contrast cream silk piping along collar and pocket",
      "Straight boxy hem with side vents"
    ]
  },
  {
    "id": "nk-tr-english-flannel-charcoal",
    "name": "N.K FABRICS English Flannel Pleated Dress Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 780,
    "formattedPrice": "$780",
    "tagline": "High-Rise Double Forward Pleats with Brass Side Tab Buckles",
    "description": "Crafted without belt loops for a clean unbroken line. Dual brass side-adjuster buckles allow micro-fit refinement while forward pleats ensure absolute ease when seated.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Charcoal",
        "hex": "#2B2B2B"
      },
      {
        "name": "Deep Black",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "100% English Worsted Wool Flannel (310g/m)",
    "fabricOrigin": "Fox Brothers & Co., Somerset, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 30,
    "tailoringNotes": [
      "High-rise waistline sitting naturally at the naval",
      "Interior waistband curtain with rubberized shirt gripper tape",
      "2-inch turn-up cuffs with hand-blindstitched hems"
    ]
  },
  {
    "id": "nk-tr-gurkha-buckle-olive",
    "name": "N.K FABRICS Savile Row Gurkha Trousers (Olive)",
    "category": "trousers",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 850,
    "formattedPrice": "$850",
    "tagline": "Cross-Over Cinch Belted Waistband in High-Twist Wool Gabardine",
    "description": "The definitive Gurkha silhouette. Features the iconic overlapping self-belt with dual brass buckles, forward deep pleats, and a relaxed taper down to a clean cuff.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Military Olive",
        "hex": "#3B4234"
      },
      {
        "name": "Tobacco Khaki",
        "hex": "#7A6245"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "High-Twist Wool Gabardine (280g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Biella",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Iconic Gurkha overlapping waist cinch with solid brass buckles",
      "Dual forward pleats with high rise",
      "Fishtail rear waist notch"
    ]
  },
  {
    "id": "nk-tr-black-tuxedo-silk-braid",
    "name": "N.K FABRICS Silk-Satin Braided Tuxedo Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 920,
    "formattedPrice": "$920",
    "tagline": "Midnight Black Barathea Wool with 20mm Silk Satin Side Braid",
    "description": "Strict black-tie formal trousers. Cut with no belt loops and flat front, featuring a 20mm Como silk satin stripe down each outseam and hidden side tab buckles.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#0B0B0B"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "Pure Wool Barathea with Silk Satin Trim (290g/m)",
    "fabricOrigin": "Dormeuil, UK & France",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "Continuous 20mm silk satin side braid along both legs",
      "Suspender buttons installed inside the curtain waistband",
      "Unfinished bottoms for custom tailoring"
    ]
  },
  {
    "id": "nk-tr-cream-tropical-worsted",
    "name": "N.K FABRICS Cream Tropical Worsted High-Waist Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 820,
    "formattedPrice": "$820",
    "tagline": "High-Ventilation Open Weave with Hollywood High-Waistband",
    "description": "Warm-weather perfection. Woven with high-twist yarns that encourage airflow while sustaining a crisp center crease from morning to evening.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Cream",
        "hex": "#ECE7DD"
      },
      {
        "name": "Sand Beige",
        "hex": "#DED7C8"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "Tropical Worsted Wool (220g/m)",
    "fabricOrigin": "Holland & Sherry, Savile Row",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 30,
    "tailoringNotes": [
      "Double forward pleats with generous leg drape",
      "Lined to the knee in pure breathable cupro",
      "2-inch turn-up cuffs"
    ]
  },
  {
    "id": "nk-tr-navy-travel-gabardine",
    "name": "N.K FABRICS Midnight Navy High-Twist Gabardine Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 750,
    "formattedPrice": "$750",
    "tagline": "Water-Repellent Merino Gabardine with Single Pleat",
    "description": "The workhorse of the traveling gentleman. Densely woven wool gabardine that naturally sheds moisture and wrinkles, tailored with side tab adjusters.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#121A2A"
      },
      {
        "name": "Ink Blue",
        "hex": "#0E1724"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "Super 130s Wool Gabardine (270g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Biella",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 27,
    "tailoringNotes": [
      "Single forward pleat with gentle taper to hem",
      "Slanted front coin pocket",
      "Horn button closures"
    ]
  },
  {
    "id": "nk-tr-sand-irish-linen-pleat",
    "name": "N.K FABRICS Mediterranean Sand Irish Linen Trousers",
    "category": "trousers",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 740,
    "formattedPrice": "$740",
    "tagline": "Pure Irish Linen with Dual Forward Pleats & Side Buckles",
    "description": "The ultimate holiday trouser. Heavyweight Irish linen that drapes fluidly without becoming flimsy, finished with a 2-inch cuff that anchors the hem.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sand Beige",
        "hex": "#D6CBB8"
      },
      {
        "name": "Off-White",
        "hex": "#F0ECE1"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "100% Pure Irish Linen (260g/m)",
    "fabricOrigin": "Baird McNutt, Northern Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Side tab brass adjusters replacing belt loops",
      "2-inch turn-up cuffs with hand-blindstitching",
      "Half-lined in soft cotton"
    ]
  },
  {
    "id": "nk-tr-houndstooth-dress-trouser",
    "name": "N.K FABRICS English Houndstooth Dress Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 790,
    "formattedPrice": "$790",
    "tagline": "Micro Black & White Houndstooth Wool with High Rise",
    "description": "A sartorial staple that pairs with jackets, black suits, or cashmere knitwear. Woven in a micro puppytooth scale that reads as textured grey from afar.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Black & White Houndstooth",
        "hex": "#3E3E3E"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "Super 140s Pure Wool (280g/m)",
    "fabricOrigin": "Fox Brothers & Co., UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 37,
    "tailoringNotes": [
      "High rise with extended waistband tab and corozo button",
      "Double forward pleats",
      "Side buckle tab adjusters"
    ]
  },
  {
    "id": "nk-tr-tobacco-cotton-twill-chino",
    "name": "N.K FABRICS Sartorial Officer Cotton Chino (Tobacco)",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 580,
    "formattedPrice": "$580",
    "tagline": "Heavy 10oz Italian Cotton Twill with Extended Waist Tab",
    "description": "An elevated casual essential. Military-grade heavy cotton twill tailored with sartorial discipline, featuring side adjusters, coin pocket, and clean flat front.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Tobacco Khaki",
        "hex": "#735B42"
      },
      {
        "name": "Stone Beige",
        "hex": "#C2B6A3"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "100% Heavy Italian Cotton Twill (10oz)",
    "fabricOrigin": "Albiate 1830, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "Extended waistband tab with hidden button",
      "Pick stitching along side seams",
      "Clean straight leg taper"
    ]
  },
  {
    "id": "nk-tr-dark-navy-flat-front-suit",
    "name": "N.K FABRICS Mayfair Flat-Front Navy Dress Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 720,
    "formattedPrice": "$720",
    "tagline": "Super 150s Worsted Wool with Belt Loops & Slanted Pockets",
    "description": "Clean, modern, and uncluttered. Tailored flat-front silhouette designed for gentlemen who prefer wearing leather dress belts with business attire.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Dark Navy",
        "hex": "#101B2E"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "Super 150s Pure Merino Wool (250g/m)",
    "fabricOrigin": "Loro Piana, Italy",
    "fit": "Slim Fit",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Belt loops engineered for 30mm dress belts",
      "Slanted side pockets with bartack reinforcement",
      "Clean plain bottom hem"
    ]
  },
  {
    "id": "nk-tr-chocolate-brown-wool-trouser",
    "name": "N.K FABRICS Chocolate Brown High-Twist Wool Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 760,
    "formattedPrice": "$760",
    "tagline": "Deep Bitter Chocolate 4-Ply Wool with Single Reverse Pleat",
    "description": "A rich, warm tone for boardroom elegance. Heavy 4-ply high-twist wool resists wrinkles and hangs like an iron column.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Bitter Chocolate",
        "hex": "#2D1F18"
      },
      {
        "name": "Espresso",
        "hex": "#21150F"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "4-Ply High-Twist Wool Fresco (340g/m)",
    "fabricOrigin": "Smith Woollens, London",
    "fit": "Classic Formal",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Single reverse pleat",
      "Fishtail back notch for button suspenders",
      "2-inch turn-up cuffs"
    ]
  },
  {
    "id": "nk-tr-white-denim-sartorial",
    "name": "N.K FABRICS Selvedge White Denim Sartorial Trousers",
    "category": "trousers",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 620,
    "formattedPrice": "$620",
    "tagline": "12oz Japanese White Selvedge Denim Tailored with Slanted Pockets",
    "description": "Where luxury tailoring meets raw denim. Cut with trousers-style slanted pockets and a high rise rather than traditional 5-pocket jean styling.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Chalk White",
        "hex": "#FAF8F5"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "100% Japanese Selvedge Cotton Denim (12oz)",
    "fabricOrigin": "Kojima, Japan",
    "fit": "Tailored Regular",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Slanted dress trousers pockets",
      "Internal selvedge outseam visible when cuffed",
      "Corozo nut buttons"
    ]
  },
  {
    "id": "nk-tr-chalk-stripe-pleated-navy",
    "name": "N.K FABRICS Savile Row Chalk Stripe Flannel Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 840,
    "formattedPrice": "$840",
    "tagline": "Heavy English Worsted Navy Flannel with Natural Chalk Pinstripe",
    "description": "Matching the iconic three-piece suit or worn as a standalone statement with knitwear. Double forward pleats and brass side adjusters.",
    "primaryImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Navy Chalk Stripe",
        "hex": "#152238"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "English Worsted Flannel (320g/m)",
    "fabricOrigin": "Fox Brothers, Somerset, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Side tab brass buckles",
      "Fishtail rear back waistband with suspender buttons",
      "2-inch turn-up cuffs"
    ]
  },
  {
    "id": "nk-tr-light-grey-sharkskin-trouser",
    "name": "N.K FABRICS Light Grey Sharkskin Executive Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 740,
    "formattedPrice": "$740",
    "tagline": "Super 150s Sharkskin Wool with Silvery Metallic Luster",
    "description": "The ultimate formal coordinate. Crisp center creases remain sharp throughout international travel thanks to the resilient two-tone twill weave.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Light Grey Sharkskin",
        "hex": "#9AA0AC"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "Super 150s Merino Wool Sharkskin",
    "fabricOrigin": "Loro Piana, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Extended waistband tab with hidden horn button",
      "Single pleat front with tapered leg"
    ]
  },
  {
    "id": "nk-tr-bordeaux-wool-silk-gala",
    "name": "N.K FABRICS Bordeaux Wool-Silk Evening Dress Trousers",
    "category": "trousers",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 890,
    "formattedPrice": "$890",
    "tagline": "Deep Wine Wool-Silk with 10mm Satin Waistband & Side Trim",
    "description": "Rich and nocturnal. Tailored with a silk satin waistband and outseam trim, designed to anchor velvet dinner jackets and silk evening shirts.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Bordeaux Wine",
        "hex": "#44101A"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "75% Wool, 25% Silk (260g/m)",
    "fabricOrigin": "Dormeuil, France & UK",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Satin-faced waistband",
      "10mm satin outseam piping",
      "Jetted rear pockets without buttons"
    ]
  },
  {
    "id": "nk-tr-olive-wool-flannel-trouser",
    "name": "N.K FABRICS Forest Olive Heavy Flannel Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 790,
    "formattedPrice": "$790",
    "tagline": "English Wool Flannel with Forward Pleats & Cinch Buckles",
    "description": "A sophisticated country-house trouser. Deep moss olive green that pairs naturally with camel coats, navy knitwear, and brown leather shoes.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Forest Olive",
        "hex": "#2E3D2A"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "Pure Wool Flannel (330g/m)",
    "fabricOrigin": "Fox Brothers, UK",
    "fit": "Classic Formal",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Double forward pleats",
      "Side brass adjusters",
      "2-inch cuffs"
    ]
  },
  {
    "id": "nk-tr-drawstring-linen-resort",
    "name": "N.K FABRICS Riviera Silk-Linen Drawstring Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 690,
    "formattedPrice": "$690",
    "tagline": "Elasticated Back with Flat Front & Internal Drawstring",
    "description": "Pure holiday sprezzatura. The comfort of an elasticated waistband concealed behind a tailored flat front with an interior silk drawstring.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Natural Sandstone",
        "hex": "#C7B9A3"
      },
      {
        "name": "Midnight Navy",
        "hex": "#141E30"
      }
    ],
    "sizes": [
      "S (30-31)",
      "M (32-33)",
      "L (34-35)",
      "XL (36-38)"
    ],
    "fabric": "55% Irish Linen, 45% Silk (220g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 30,
    "tailoringNotes": [
      "Concealed internal braided drawstring",
      "Quarter-top side pockets",
      "Relaxed leg with gentle taper"
    ]
  },
  {
    "id": "nk-tr-anthracite-cashmere-flannel",
    "name": "N.K FABRICS Anthracite Cashmere-Wool Dress Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 950,
    "formattedPrice": "$950",
    "tagline": "85% Super 160s Wool, 15% Mongolian Cashmere Flannel",
    "description": "Peak cold-weather luxury. Unimaginable handfeel and insulation, cut with a high rise and forward pleats for effortless drape.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Anthracite Grey",
        "hex": "#252525"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "Wool-Cashmere Flannel (320g/m)",
    "fabricOrigin": "Piacenza 1733, Italy",
    "fit": "Classic Formal",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Hollywood high-rise waistband",
      "Lined with pure cupro to the knee",
      "Fishtail back with suspender buttons"
    ]
  },
  {
    "id": "nk-tr-black-poplin-summer-trouser",
    "name": "N.K FABRICS Black Tropical High-Twist Wool Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 710,
    "formattedPrice": "$710",
    "tagline": "Open-Weave High-Twist Tropical Wool in Solid Pitch Black",
    "description": "A black formal trouser engineered for sweltering heat. The high-twist porous weave permits breeze while remaining pitch black under bright sun.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "Tropical High-Twist Wool (210g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Italy",
    "fit": "Slim Fit",
    "occasion": "Everyday Luxury",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 21,
    "tailoringNotes": [
      "Flat front with clean lines",
      "Side tab buckles",
      "Plain bottom hem"
    ]
  },
  {
    "id": "nk-tr-sandstone-linen-suit-trouser",
    "name": "N.K FABRICS Sandstone Irish Linen Suit Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 730,
    "formattedPrice": "$730",
    "tagline": "Pure Heavy Linen with 2-Inch Turn-Up Cuffs & High Rise",
    "description": "Tailored to match N.K FABRICS summer jackets or worn alone with dress shirts. Features an extended waist tab with hidden hook closure.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Sandstone Taupe",
        "hex": "#D1C4B0"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "100% Pure Irish Linen (270g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Extended waistband tab with hidden slide hook",
      "2-inch turn-up cuffs",
      "Pick-stitched fly seam"
    ]
  },
  {
    "id": "nk-tr-charcoal-puppytooth-wool",
    "name": "N.K FABRICS Charcoal Puppytooth High-Rise Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 780,
    "formattedPrice": "$780",
    "tagline": "Micro Checkered Wool Twill with Double Forward Pleats",
    "description": "The quintessential Savile Row pattern. Reads as a textured solid grey, offering visual richness under navy, black, and camel jackets.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Charcoal Puppytooth",
        "hex": "#363636"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "Super 140s Pure Wool (290g/m)",
    "fabricOrigin": "Huddersfield Fine Worsteds, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Deep forward pleats that open gently when seated",
      "Side tab brass adjusters",
      "2-inch cuffs"
    ]
  },
  {
    "id": "nk-tr-ivory-wool-silk-ceremony",
    "name": "N.K FABRICS Ivory Wool-Silk Ceremony Dress Trousers",
    "category": "trousers",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 880,
    "formattedPrice": "$880",
    "tagline": "Lustrous Wool & Mulberry Silk Barathea in Pure Ivory",
    "description": "Created for grand daytime receptions and milestone wedding banquets. Impossibly clean drape with zero translucency.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Pure Ivory",
        "hex": "#FDFBF5"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "Super 150s Wool & Silk Barathea (260g/m)",
    "fabricOrigin": "Holland & Sherry, Savile Row",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Full cupro lining preventing transparency",
      "Double pleats with side tab adjusters",
      "Turn-up cuffs"
    ]
  },
  {
    "id": "nk-tr-navy-cotton-garment-dyed",
    "name": "N.K FABRICS Navy Garment-Dyed Cotton Chino Pants",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 560,
    "formattedPrice": "$560",
    "tagline": "Italian Stretch Cotton Twill Garment-Dyed for Soft Lived-In Color",
    "description": "The ultimate smart casual trouser. 98% cotton with 2% elastane for unrestricted mobility during weekend travel, tailored with trousers-grade finish.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Washed Navy",
        "hex": "#1B2A3E"
      },
      {
        "name": "Dark Ink",
        "hex": "#121D2C"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "98% Cotton, 2% Elastane Twill (290g/m)",
    "fabricOrigin": "Albiate, Italy",
    "fit": "Slim Fit",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 22,
    "tailoringNotes": [
      "Garment-dyed in Milan for subtle seam fading",
      "Split back waistband for tailor alteration",
      "Horn buttons"
    ]
  },
  {
    "id": "nk-tr-khaki-gurkha-linen",
    "name": "N.K FABRICS Mediterranean Khaki Gurkha Linen Trousers",
    "category": "trousers",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 780,
    "formattedPrice": "$780",
    "tagline": "Heavy Irish Linen with Iconic Cross-Over Gurkha Buckles",
    "description": "Military history meets summer aristocracy. The overlapping self-belt creates an eye-catching waistline when worn with tucked linen shirts or polos.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Khaki Tan",
        "hex": "#8C775E"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "100% Pure Irish Linen (280g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Cross-over Gurkha waistband with double brass buckles",
      "Forward pleats",
      "2-inch cuffs"
    ]
  },
  {
    "id": "nk-tr-grey-hopsack-travel-trouser",
    "name": "N.K FABRICS Anthracite Wool Hopsack Travel Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 720,
    "formattedPrice": "$720",
    "tagline": "High-Ventilation Open Hopsack Weave with Natural Stretch",
    "description": "The most resilient travel trouser in existence. Wrinkles disappear within 15 minutes of hanging, making it indispensable for global itineraries.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Anthracite Hopsack",
        "hex": "#333333"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "High-Twist Wool Hopsack (280g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Single pleat front with belt loops",
      "Internal curtain waistband with shirt grip"
    ]
  },
  {
    "id": "nk-tr-shadow-check-black-dress",
    "name": "N.K FABRICS Midnight Shadow Check Formal Trousers",
    "category": "trousers",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 810,
    "formattedPrice": "$810",
    "tagline": "Super 150s Black Wool with Tone-on-Tone Windowpane Relief",
    "description": "An architectural dark trouser with three-dimensional depth. Subtle tonally woven grid that catches light during movement.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Midnight Shadow Check",
        "hex": "#141416"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "Super 150s Worsted Wool (260g/m)",
    "fabricOrigin": "Scabal, Huddersfield, England",
    "fit": "Slim Fit",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Side tab adjusters without belt loops",
      "Flat front with sharp crease",
      "Hand-stitched hems"
    ]
  },
  {
    "id": "nk-tr-raw-denim-sartorial-trouser",
    "name": "N.K FABRICS 13oz Japanese Selvedge Denim Dress Trousers",
    "category": "trousers",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 650,
    "formattedPrice": "$650",
    "tagline": "Raw Indigo Selvedge Denim Cut in High-Rise Double-Pleat Tailoring",
    "description": "Denim elevated to haute couture. Hand-tailored like a bespoke wool trouser with forward pleats, side brass adjusters, and turn-up cuffs showing the red selvedge ID line.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "colors": [
      {
        "name": "Raw Deep Indigo",
        "hex": "#101C30"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "fabric": "100% Japanese Selvedge Cotton Denim (13oz)",
    "fabricOrigin": "Kurabo Mills, Okayama, Japan",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Double forward pleats",
      "Red selvedge ticker visible on 2-inch turn-up cuffs",
      "Brass side adjusters"
    ]
  },
  {
    "id": "nk-kt-sandstone-slub-silk",
    "name": "N.K FABRICS Sandstone Slub Silk Traditional Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1250,
    "formattedPrice": "$1,250",
    "tagline": "Textured Slub Raw Silk with Single-Needle Pick Stitch",
    "description": "An essential for sophisticated gatherings. Hand-loomed raw silk with natural slub variations gives an unmistakable tactile presence, paired with a mandarin band collar and mother-of-pearl buttons.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Sandstone",
        "hex": "#D4C4B0"
      },
      {
        "name": "Oatmeal",
        "hex": "#E2D8C9"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Pure Raw Mulberry Silk (240g/m)",
    "fabricOrigin": "Heritage Mills, Lahore",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Concealed placket with carved mother-of-pearl buttons",
      "High side slits with reinforced hand-sewn bar tacks",
      "Can be paired with matching trousers or off-white shalwar"
    ]
  },
  {
    "id": "nk-kt-shadow-black-chikankari",
    "name": "N.K FABRICS Shadow Black Hand-Embroidered Chikankari Kurta",
    "category": "kurtas",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 1450,
    "formattedPrice": "$1,450",
    "tagline": "Tonal Black-on-Black Hand-Embroidered Chikankari on Fine Georgette Cotton",
    "description": "A masterpiece of subtle artisan dexterity. Delicate floral and geometric shadow embroidery hand-stitched by generational artisans onto high-twist black cotton voile.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Shadow Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Charcoal Noir",
        "hex": "#1A1A1A"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "High-Twist Fine Cotton Voile with Silk Threadwork",
    "fabricOrigin": "Heritage Embroidery Guild, Lahore",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Over 80 hours of hand-embroidery per garment",
      "Silk satin piping on band collar",
      "Concealed snap placket with mother-of-pearl face buttons"
    ]
  },
  {
    "id": "nk-kt-minimalist-noir-cotton",
    "name": "N.K FABRICS Minimalist Noir Egyptian Poplin Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 950,
    "formattedPrice": "$950",
    "tagline": "140s Compact Cotton Poplin with Hidden Placket",
    "description": "Clean, sculptural, and unembellished. A masterclass in minimalist design focusing on sharp shoulder lines, a firm mandarin collar, and a modern straight hem with side vents.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Charcoal",
        "hex": "#222222"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "Super 140s Compact Egyptian Cotton (160g/m)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Slim Fit",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 17,
    "tailoringNotes": [
      "Concealed placket with horn buttons",
      "Straight cut modern silhouette with tailored chest taper",
      "Side in-seam pockets"
    ]
  },
  {
    "id": "nk-kt-royal-ivory-giza-pique",
    "name": "N.K FABRICS Royal Ivory Giza Piqu\u00e9 Kurta",
    "category": "kurtas",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1150,
    "formattedPrice": "$1,150",
    "tagline": "Fine Marcella Waffle Texture with Clean Stand Collar",
    "description": "Borrowing the texture of formal white-tie evening shirts. Crisp Egyptian Marcella piqu\u00e9 waffle fabric delivers a sculptured collar and three-dimensional visual texture.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Ivory Piqu\u00e9",
        "hex": "#FDFBF7"
      },
      {
        "name": "Alabaster",
        "hex": "#F2ECE1"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "Giza 45 Egyptian Cotton Marcella Piqu\u00e9",
    "fabricOrigin": "Albini Group, Bergamo, Italy",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Stiffened stand collar with double horsehair interlining",
      "Genuine Australian mother-of-pearl buttons",
      "French cuff slits"
    ]
  },
  {
    "id": "nk-kt-saffron-silk-ceremonial",
    "name": "N.K FABRICS Imperial Saffron Silk Festival Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1380,
    "formattedPrice": "$1,380",
    "tagline": "Warm Saffron Raw Silk with Champagne Gold Zari Border",
    "description": "Radiant and sovereign. Spun from warm golden saffron mulberry raw silk, detailed with microscopic gold bullion zari threads woven into the cuffs and neckline.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Imperial Saffron",
        "hex": "#D99B26"
      },
      {
        "name": "Deep Ochre",
        "hex": "#B87A18"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Hand-Loomed Raw Silk with Zari Metallic Accent (250g/m)",
    "fabricOrigin": "Heritage Weavers, Lahore",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Micro metallic zari bullion borders on collar and cuffs",
      "Pairs elegantly with cream or black trousers",
      "Handmade fabric loop buttons"
    ]
  },
  {
    "id": "nk-kt-slate-blue-bandhgala",
    "name": "N.K FABRICS Slate Blue Bandhgala Short Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1280,
    "formattedPrice": "$1,280",
    "tagline": "Modern Mid-Thigh Length in High-Twist Wool-Silk Blend",
    "description": "Designed for the modern gentleman who wears traditional tailoring with tailored wool trousers. Features a high structured bandhgala collar with horn buttons.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Slate Blue",
        "hex": "#2C3E55"
      },
      {
        "name": "Dusty Indigo",
        "hex": "#1E2B3C"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "70% Wool, 30% Mulberry Silk (210g/m)",
    "fabricOrigin": "Biella & Lahore Artisans",
    "fit": "Slim Fit",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Mid-thigh length cut specifically for wearing over tailored trousers",
      "Dual side tab waist suppression adjusters",
      "Chest pocket with silk piping"
    ]
  },
  {
    "id": "nk-kt-emerald-needlepoint-silk",
    "name": "N.K FABRICS Emerald Green Needlepoint Silk Kurta",
    "category": "kurtas",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1350,
    "formattedPrice": "$1,350",
    "tagline": "Pure Raw Silk with Intricate Single-Needle Leaf Embroidery",
    "description": "Refined royal greenery. The deep emerald green cloth is accented with delicate tone-on-tone leaf needlepoint along the placket, embodying understated nobility.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg",
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#0B291E"
      },
      {
        "name": "Bottle Green",
        "hex": "#071C14"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Dense Raw Silk with Natural Slubs (260g/m)",
    "fabricOrigin": "Heritage Silk Guild, Lahore",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Tone-on-tone single needle embroidery along chest line",
      "Concealed smartphone pocket inside right side seam",
      "Horn button closures"
    ]
  },
  {
    "id": "nk-kt-raw-oatmeal-handloom",
    "name": "N.K FABRICS Raw Oatmeal Handloom Textured Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1050,
    "formattedPrice": "$1,050",
    "tagline": "Unbleached Organic Cotton-Silk with Natural Texture",
    "description": "Purity of noble raw textiles. Unbleached organic cotton spun together with wild tussar silk for an earthy, textured hand that breathes effortlessly.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Raw Oatmeal",
        "hex": "#D8CEBE"
      },
      {
        "name": "Bone Ivory",
        "hex": "#EBE5D8"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "70% Hand-Spun Organic Cotton, 30% Wild Tussar Silk",
    "fabricOrigin": "Punjab Traditional Looms",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 21,
    "tailoringNotes": [
      "Hand-stitched bone buttons",
      "Soft unpadded band collar for maximum ease",
      "French seams throughout"
    ]
  },
  {
    "id": "nk-kt-pearl-white-eid-embroidered",
    "name": "N.K FABRICS Sovereign Pearl White Embroidered Eid Kurta",
    "category": "kurtas",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 1390,
    "formattedPrice": "$1,390",
    "tagline": "Swiss Voile Cotton with Delicate Resham Thread Floral Work",
    "description": "Created for sacred Eid morning prayers and celebratory family banquets. Crisp Swiss voile adorned with subtle ivory resham thread embroidery.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Pearl White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Ultra-Fine Swiss Cotton Voile (140g/m)",
    "fabricOrigin": "Appenzell, Switzerland & Lahore",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Tone-on-tone fine resham thread embroidery on collar and cuffs",
      "Australian mother-of-pearl buttons",
      "Lightweight and semi-translucent structure"
    ]
  },
  {
    "id": "nk-kt-midnight-indigo-kashmiri",
    "name": "N.K FABRICS Midnight Indigo Kashmiri Ari-Work Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1550,
    "formattedPrice": "$1,550",
    "tagline": "Pure Raw Silk with Traditional Kashmiri Needlework on Placket",
    "description": "Regal North-Indian and Kashmiri artistry. Intricate swirling flora hand-stitched with fine silk needles along the neckline and cuffs.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Midnight Indigo",
        "hex": "#121F38"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Hand-Spun Raw Mulberry Silk",
    "fabricOrigin": "Srinagar & Lahore Artisans",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Traditional Collection",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Over 65 hours of ari-needle hand embroidery",
      "Mother-of-pearl buttons with hand-twisted silk eyelets"
    ]
  },
  {
    "id": "nk-kt-sandstone-linen-band-collar",
    "name": "N.K FABRICS Multan Sandstone Pure Linen Short Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 980,
    "formattedPrice": "$980",
    "tagline": "Northern Irish Linen Tailored in Contemporary Short Silhouette",
    "description": "Designed for modern daytime gatherings. Heavy pure linen that stays crisp under heat, cut to a modern mid-thigh hemline with deep side pockets.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sandstone Linen",
        "hex": "#C8BBA5"
      },
      {
        "name": "Natural Beige",
        "hex": "#DDD2BD"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Pure Irish Linen (250g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "Mandarin band collar with 1-button neck clasp",
      "Dual side pockets with reinforced corners",
      "Short tailored length"
    ]
  },
  {
    "id": "nk-kt-deep-plum-silk-brocade",
    "name": "N.K FABRICS Imperial Plum Silk Brocade Wedding Kurta",
    "category": "kurtas",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1480,
    "formattedPrice": "$1,480",
    "tagline": "Rich Jewel-Toned Plum Raw Silk with Subtle Paisley Micro-Brocade",
    "description": "An aristocratic evening wedding statement. The deep violet plum shade reflects warmth under chandeliers, framed by gold metallic piped edges.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Imperial Plum",
        "hex": "#3A142D"
      },
      {
        "name": "Royal Violet",
        "hex": "#280D1F"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Mulberry Silk Brocade (260g/m)",
    "fabricOrigin": "Heritage Weavers, Lahore",
    "fit": "Slim Fit",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Gold bullion metallic edge piping on collar",
      "Carved horn buttons with gold loop fasteners"
    ]
  },
  {
    "id": "nk-kt-ivory-matka-gold-button",
    "name": "N.K FABRICS Sovereign Ivory Matka Silk Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1290,
    "formattedPrice": "$1,290",
    "tagline": "Heavy Matka Silk with 18K Gold PVD Gilded Monogram Buttons",
    "description": "Substantial, statuesque raw silk that holds an immaculate vertical column drape. Accented with solid brass buttons gilded in 18K champagne gold.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Ivory Matka",
        "hex": "#FBF7ED"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Heavyweight Matka Raw Silk (290g/m)",
    "fabricOrigin": "Lahore Master Looms",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "Custom 18K gold-plated N.K monogram crest buttons",
      "Structured collar with double horsehair interlining",
      "Tailored French cuffs"
    ]
  },
  {
    "id": "nk-kt-charcoal-geometric-jacquard",
    "name": "N.K FABRICS Charcoal Geometric Silk-Cotton Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1190,
    "formattedPrice": "$1,190",
    "tagline": "Tone-on-Tone Jacquard Diamond Weave with Structured Collar",
    "description": "Modern dark sophistication. Woven on precision jacquard looms to create a subtle geometric diamond relief in deep charcoal grey.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Charcoal Jacquard",
        "hex": "#262628"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "60% Mulberry Silk, 40% Egyptian Cotton (220g/m)",
    "fabricOrigin": "Como & Lahore",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Concealed snap placket with mother-of-pearl face buttons",
      "Structured band collar"
    ]
  },
  {
    "id": "nk-kt-sky-blue-egyptian-cotton",
    "name": "N.K FABRICS Sky Blue Giza 87 Egyptian Cotton Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 920,
    "formattedPrice": "$920",
    "tagline": "Silky-Smooth 200/2 Egyptian Cotton with Single-Needle Seams",
    "description": "Unmatched daytime comfort. Egyptian cotton that glides coolly against the skin, finished with an elegant straight hem and French cuff slits.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#D4E4F2"
      },
      {
        "name": "Glacier Blue",
        "hex": "#E5EFF7"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Giza 87 Egyptian Cotton (Silk Finish)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Mandarin collar with 1mm edge stitching",
      "Mother-of-pearl buttons",
      "Deep in-seam pockets"
    ]
  },
  {
    "id": "nk-kt-olive-raw-silk-festive",
    "name": "N.K FABRICS Forest Olive Raw Silk Festive Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1320,
    "formattedPrice": "$1,320",
    "tagline": "Heavy Slub Raw Mulberry Silk in Deep Forest Olive",
    "description": "Earthy South Asian grandeur. The natural slub variations of hand-spun raw silk are highlighted by subtle tonal needlepoint on the placket.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Forest Olive",
        "hex": "#233826"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Raw Mulberry Silk (Heavy Drape)",
    "fabricOrigin": "Lahore Silk Guild",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "In Stock",
    "stockUnits": 30,
    "tailoringNotes": [
      "Tonal needlepoint detailing on neckline",
      "Carved dark buffalo horn buttons"
    ]
  },
  {
    "id": "nk-kt-gold-tissue-silk-wedding",
    "name": "N.K FABRICS Champagne Gold Tissue Silk Wedding Kurta",
    "category": "kurtas",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1590,
    "formattedPrice": "$1,590",
    "tagline": "Lustrous Metallic Tissue Silk with Zari Bullion Neckline",
    "description": "Designed specifically for wedding banquets and groomsmen ceremonies. An opulent champagne gold sheen that glimmers radiantly.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
    "colors": [
      {
        "name": "Champagne Gold",
        "hex": "#E2D1AB"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Silk & Lurex Tissue Weave (230g/m)",
    "fabricOrigin": "Varanasi Master Looms",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Zari bullion hand-embroidery on mandarin collar",
      "Concealed magnetic placket with crystal buttons"
    ]
  },
  {
    "id": "nk-kt-steel-grey-compact-twill",
    "name": "N.K FABRICS Steel Grey Compact Twill Formal Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 960,
    "formattedPrice": "$960",
    "tagline": "Wrinkle-Resistant Fine Diagonal Cotton Twill",
    "description": "Business and daytime formal readiness. Diagonal twill that resists creases throughout long banquets, paired with a firm stand collar.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Steel Grey",
        "hex": "#3C4048"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Long-Staple Egyptian Cotton Twill",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 33,
    "tailoringNotes": [
      "Firm stand collar with double interlining",
      "Hidden placket with real horn buttons"
    ]
  },
  {
    "id": "nk-kt-terracotta-raw-silk",
    "name": "N.K FABRICS Terracotta Raw Silk Ceremonial Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1340,
    "formattedPrice": "$1,340",
    "tagline": "Warm Terracotta Rust Raw Silk with Gold Piping Accents",
    "description": "A vibrant autumnal festive creation. Hand-spun raw silk in rich terracotta rust, accented with subtle gold thread piping along the placket.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Terracotta Rust",
        "hex": "#9E4733"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Raw Mulberry Silk (260g/m)",
    "fabricOrigin": "Heritage Mills, Lahore",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "In Stock",
    "stockUnits": 21,
    "tailoringNotes": [
      "Gold thread piping along collar and cuffs",
      "Handmade horn button fasteners"
    ]
  },
  {
    "id": "nk-kt-black-velvet-collar-kurta",
    "name": "N.K FABRICS Imperial Noir Kurta with Silk-Velvet Collar",
    "category": "kurtas",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1280,
    "formattedPrice": "$1,280",
    "tagline": "Super 140s Cotton Poplin with Venetian Velvet Stand Collar",
    "description": "Subtle contrast of textures. Crisp, high-count black cotton poplin adorned with an opulent Italian silk-cotton velvet mandarin stand collar.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Black on Black Velvet",
        "hex": "#080808"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "140s Egyptian Cotton with Italian Silk Velvet Collar",
    "fabricOrigin": "Albini & Pontoglio, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Venetian black velvet mandarin stand collar",
      "Dark smoked mother-of-pearl buttons",
      "French cuff slits"
    ]
  },
  {
    "id": "nk-kt-powder-pink-chanderi-silk",
    "name": "N.K FABRICS Powder Pink Chanderi Silk Festive Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1420,
    "formattedPrice": "$1,420",
    "tagline": "Lightweight Chanderi Silk with Sheer Luster & Zari Booti",
    "description": "Ethereal springtime celebratory elegance. Pure Chanderi silk with miniature gold zari booti motifs woven into the ground.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Powder Pink",
        "hex": "#EAD4D8"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Pure Chanderi Silk with Fine Zari Motif (180g/m)",
    "fabricOrigin": "Heritage Guild, Lahore",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 26,
    "tailoringNotes": [
      "Hand-loomed gold zari booti motifs throughout",
      "Mother-of-pearl buttons with pink thread loops"
    ]
  },
  {
    "id": "nk-kt-navy-raw-silk-formal",
    "name": "N.K FABRICS Midnight Navy Raw Mulberry Silk Kurta",
    "category": "kurtas",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1290,
    "formattedPrice": "$1,290",
    "tagline": "Dense Hand-Loomed Navy Raw Silk with Mother-of-Pearl Buttons",
    "description": "Classic South Asian evening nobility. Rich midnight navy raw silk that drapes cleanly, paired with a firm collar and side seam pockets.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#101A2C"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Hand-Spun Raw Mulberry Silk (260g/m)",
    "fabricOrigin": "Heritage Weavers, Lahore",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Genuine Australian mother-of-pearl buttons",
      "Mandarin stand collar with pick stitching",
      "French seams throughout"
    ]
  },
    {
      "id": "nk-kurta-ivory-chanderi-silk",
      "name": "N.K FABRICS Ivory Chanderi Silk Festive Kurta",
      "category": "kurtas",
      "isNewArrival": true,
      "isBestSeller": true,
      "price": 750,
      "formattedPrice": "$750",
      "tagline": "Fine Chanderi Silk-Cotton with Sheer Luster & Zari Neckline",
      "description": "Featherlight festival luxury. Translucent Chanderi silk fabric with gold zari border running down the placket, designed to pair over tailored churidar or silk pajama.",
      "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
      "hoverImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
      "colors": [
        {
          "name": "Ivory Gold",
          "hex": "#FBF7ED"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "Chanderi Silk-Cotton with Gold Zari Border",
      "fabricOrigin": "Madhya Pradesh Looms",
      "fit": "Tailored Regular",
      "occasion": "Ceremony & Eid",
      "collection": "Eid Collection",
      "availability": "In Stock",
      "stockUnits": 29,
      "subType": "Festive",
      "tailoringNotes": [
        "Pure cotton inner lining for comfort and opacity",
        "Hand-sewn gold thread tassels on placket"
      ]
    },
  {
      "id": "nk-kurta-black-onyx-embroidered",
      "name": "N.K FABRICS Black Onyx Hand-Embroidered Kurta",
      "category": "kurtas",
      "isNewArrival": false,
      "isBestSeller": true,
      "price": 820,
      "formattedPrice": "$820",
      "tagline": "Jet Black Mercerized Cotton with Tone-on-Tone Silk Needlework",
      "description": "The definitive nighttime kurta. Crafted from high-sheen mercerized cotton featuring intricate monochrome threadwork across the yoke and collar.",
      "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
      "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
      "colors": [
        {
          "name": "Jet Black",
          "hex": "#080808"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "100% Mercerized Egyptian Cotton (180g/m)",
      "fabricOrigin": "Alexandria, Egypt",
      "fit": "Slim Fit",
      "occasion": "Evening Black-Tie",
      "collection": "Formal Collection",
      "availability": "In Stock",
      "stockUnits": 35,
      "subType": "Embroidered",
      "tailoringNotes": [
        "Intricate Kashmiri aari threadwork along chest yoke",
        "Concealed placket with mother-of-pearl buttons"
      ]
    },
  {
      "id": "nk-kurta-forest-green-festive-linen",
      "name": "N.K FABRICS Forest Green Festive Linen Kurta",
      "category": "kurtas",
      "isNewArrival": true,
      "isBestSeller": false,
      "price": 680,
      "formattedPrice": "$680",
      "tagline": "Pure Emerald Linen with Minimalist Mandarin Collar",
      "description": "Subtle elegance tailored from high-grade Irish linen. Pairs effortlessly under traditional waistcoats or stands on its own for daytime ceremonies.",
      "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
      "hoverImage": "/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg",
      "colors": [
        {
          "name": "Forest Green",
          "hex": "#1A3828"
        },
        {
          "name": "Olive Green",
          "hex": "#2E3A2B"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "100% Pure Irish Linen (190g/m)",
      "fabricOrigin": "Ballymena, Northern Ireland",
      "fit": "Tailored Regular",
      "occasion": "Resort & Casual",
      "collection": "Summer Collection",
      "availability": "In Stock",
      "stockUnits": 31,
      "subType": "Minimalist",
      "tailoringNotes": [
        "Natural coconut shell buttons",
        "Two side seam pockets and one chest welt pocket"
      ]
    },
  {
      "id": "nk-kurta-sand-gold-raw-silk",
      "name": "N.K FABRICS Sand Gold Raw Silk Kurta",
      "category": "kurtas",
      "isNewArrival": false,
      "isBestSeller": false,
      "price": 790,
      "formattedPrice": "$790",
      "tagline": "Lustrous Golden Raw Silk with Antique Brass Button Accents",
      "description": "A stately festive garment woven from pure raw silk with a warm golden sheen. Rich tactile texture and flawless clean drape.",
      "primaryImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
      "hoverImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
      "colors": [
        {
          "name": "Sand Gold",
          "hex": "#CDB07B"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "100% Hand-Spun Raw Mulberry Silk",
      "fabricOrigin": "Punjab Silk Looms",
      "fit": "Classic Formal",
      "occasion": "Wedding & Gala",
      "collection": "Traditional Collection",
      "availability": "In Stock",
      "stockUnits": 25,
      "subType": "Raw Silk",
      "tailoringNotes": [
        "Stitched with antique brass coin buttons",
        "Side slit reinforcement with bar tacking"
      ]
    },
  {
    "id": "nk-sk-signature-noir-silk",
    "name": "N.K FABRICS Signature Noir Raw Silk Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 1850,
    "formattedPrice": "$1,850",
    "tagline": "Pure Hand-Spun Raw Mulberry Silk with Tailored Structured Stance",
    "description": "A monument of Pakistani luxury heritage. We hand-loom pure mulberry raw silk with deliberate slub textures, then tailor it to Savile Row proportions. The mandarin collar stands firm with custom horsehair interfacing.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Charcoal Silk",
        "hex": "#1E1E1E"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Mulberry Raw Silk (Heavy Drape)",
    "fabricOrigin": "Heritage Silk Weavers, Lahore",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Structured mandarin band collar with single-needle pick stitch",
      "Concealed mobile and cigar pocket in side seam",
      "French cuff slits for cufflinks"
    ]
  },
  {
    "id": "nk-sk-viceroy-emerald-suit",
    "name": "N.K FABRICS Viceroy Emerald Raw Silk Kameez Suit",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 1950,
    "formattedPrice": "$1,950",
    "tagline": "Imperial Forest Emerald Raw Silk with Matching Structured Waistcoat",
    "description": "Tailored for grand wedding banquets and state ceremonies. Dense hand-loomed raw silk with natural slubs in an imperial forest green hue, paired with a sculpted matching waistcoat with gold bullion embroidery.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg",
    "colors": [
      {
        "name": "Viceroy Emerald",
        "hex": "#0F2D22"
      },
      {
        "name": "Deep Olive Silk",
        "hex": "#1E2B1E"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Raw Mulberry Silk (Dense Handloom)",
    "fabricOrigin": "Heritage Silk Guild, Lahore",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Hand-carved horn buttons with gold thread loops",
      "Mandarin collar reinforced with double horsehair interfacing",
      "Straight tailored trouser pajama with side vents"
    ]
  },
  {
    "id": "nk-sk-royal-egyptian-giza87",
    "name": "N.K FABRICS Royal Egyptian Cotton Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1450,
    "formattedPrice": "$1,450",
    "tagline": "200/2 Compact Giza 87 Cotton with Silk-Finish Luster",
    "description": "Crafted from the finest long-staple cotton harvested along the Nile river basin. Delivers an impossibly smooth, cool-to-touch sensation and a sculptural drape that remains crease-free throughout long ceremonial celebrations.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Pure Ivory",
        "hex": "#FAF8F5"
      },
      {
        "name": "Warm Beige",
        "hex": "#E6DFD5"
      },
      {
        "name": "Soft Ice Blue",
        "hex": "#E5ECF2"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Giza 87 Egyptian Cotton (Silk Sheen)",
    "fabricOrigin": "Thomas Mason Bespoke",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "In Stock",
    "stockUnits": 25,
    "tailoringNotes": [
      "Micro-corded band collar with 1mm embroidered piping",
      "French seams and hand-rolled hems",
      "Includes matching tailored pleated shalwar"
    ]
  },
  {
    "id": "nk-sk-wedding-collection-matka",
    "name": "N.K FABRICS Imperial Matka Silk Wedding Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 2400,
    "formattedPrice": "$2,400",
    "tagline": "Heavyweight Matka Raw Silk with Matching Embroidered Waistcoat",
    "description": "The sovereign wedding ensemble. Heavyweight raw silk tailored with royal discipline, accompanied by a matching structured waistcoat finished with champagne gold bullion threadwork.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Imperial Ivory",
        "hex": "#FAF8F5"
      },
      {
        "name": "Midnight Noir",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "Custom Made-to-Measure",
      "Medium (40)",
      "Large (42)"
    ],
    "fabric": "Heavy Matka Raw Silk & Fine Wool Blend",
    "fabricOrigin": "Heritage Mills, Lahore & Florence",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Includes two-piece shalwar kameez plus tailored silk waistcoat",
      "Over 60 hours of dedicated artisan handwork",
      "Hand-stitched bullion embroidery"
    ]
  },
  {
    "id": "nk-sk-sovereign-pearl-white-eid",
    "name": "N.K FABRICS Sovereign Pearl White Eid Kameez Suit",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1650,
    "formattedPrice": "$1,650",
    "tagline": "Lustrous Silk-Cotton Twill with Silver-Piped Mandarin Collar",
    "description": "Designed exclusively for festive milestone Eid celebrations. Blended mulberry silk and long-staple cotton with a pearlized sheen, accented with 1mm silver bullion piping along the collar and concealed placket.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Pearl White",
        "hex": "#FDFCFA"
      },
      {
        "name": "Alabaster",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "60% Mulberry Silk, 40% Egyptian Cotton (220g/m)",
    "fabricOrigin": "Como & Punjab Artisans",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Silver bullion metallic thread hand-piping on collar and cuffs",
      "Real mother-of-pearl buttons carved from Australian oyster shells",
      "Tailored matching pleated shalwar with drawstring closure"
    ]
  },
  {
    "id": "nk-sk-aristocrat-steel-grey",
    "name": "N.K FABRICS Aristocrat Steel Grey Compact Twill Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1550,
    "formattedPrice": "$1,550",
    "tagline": "Compact High-Count Egyptian Twill with Soft Fluid Drape",
    "description": "An authoritative daytime formal ensemble. Woven in a fine diagonal twill that repels creasing, tailored with a clean concealed placket and French cufflink slits for cufflinks.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Steel Grey",
        "hex": "#3E424B"
      },
      {
        "name": "Anthracite",
        "hex": "#2A2C31"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "Giza 45 Long-Staple Cotton Twill (180g/m)",
    "fabricOrigin": "Albini Group, Bergamo, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 22,
    "tailoringNotes": [
      "Concealed magnetic placket with hand-sewn button reinforcements",
      "Dual deep in-seam pockets with velvet coin sleeve",
      "Matching straight cut shalwar"
    ]
  },
  {
    "id": "nk-sk-sapphire-indigo-raw-silk",
    "name": "N.K FABRICS Royal Sapphire Indigo Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1880,
    "formattedPrice": "$1,880",
    "tagline": "Deep Sapphire Raw Silk with Tonal Geometric Stand Collar",
    "description": "Imbued with the grandeur of Mughal evening courts. Dyed with natural indigo and hand-loomed with rich textural slubs, finished with tonal needlepoint along the stand collar.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Sapphire Indigo",
        "hex": "#131F38"
      },
      {
        "name": "Midnight Navy",
        "hex": "#0B1324"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "Pure Raw Silk with Indigo Yarn Dye (Heavy Weight)",
    "fabricOrigin": "Lahore Heritage Silk Weavers",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Tonal geometric embroidery on band collar and chest placket",
      "French seam needlework throughout",
      "Includes matching tailored shalwar"
    ]
  },
  {
    "id": "nk-sk-champagne-matka-ceremony",
    "name": "N.K FABRICS Champagne Gold Matka Silk Ceremony Suit",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 2200,
    "formattedPrice": "$2,200",
    "tagline": "Heavy Matka Silk with Gold Bullion Threadwork & Pajama Trouser",
    "description": "The definitive royal groom and milestone banquet ensemble. Tailored from coarse-spun Matka raw silk with an opulent champagne luster that drapes with statuesque majesty.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Champagne Gold",
        "hex": "#E3D3B5"
      },
      {
        "name": "Desert Sand",
        "hex": "#CBB48C"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Hand-Loomed Matka Raw Silk (300g/m)",
    "fabricOrigin": "Varanasi & Lahore Master Guilds",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Champagne gold metallic bullion embroidery on cuffs and collar",
      "Includes tailored trouser pajama and matching dupatta wrap",
      "Horn buttons with gold loops"
    ]
  },
  {
    "id": "nk-sk-obsidian-slub-silk",
    "name": "N.K FABRICS Obsidian Slub Raw Silk Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1900,
    "formattedPrice": "$1,900",
    "tagline": "Charcoal Slub Raw Silk with Matte Horn Button Accents",
    "description": "Understated dark nobility. Charcoal raw silk woven with pronounced natural slub yarns, paired with matte carved buffalo horn buttons and a sharp mandarin collar.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Obsidian Charcoal",
        "hex": "#1C1C1E"
      },
      {
        "name": "Pitch Black",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "Dense Raw Mulberry Silk with Natural Texture (280g/m)",
    "fabricOrigin": "Heritage Mills, Lahore",
    "fit": "Tailored Regular",
    "occasion": "Formal Collection",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Dual chest pen and spectacles pockets inside placket",
      "Reinforced side slits with hand-stitched bartacks",
      "Includes matching slub silk shalwar"
    ]
  },
  {
    "id": "nk-sk-multan-sandstone-linen",
    "name": "N.K FABRICS Multan Sandstone Pure Irish Linen Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1400,
    "formattedPrice": "$1,400",
    "tagline": "Pure Irish Linen with Natural Breathability & Crisp Stance",
    "description": "Crafted for summer palaces and daytime celebrations. Pure Irish linen harvested and spun in Northern Ireland, then tailored with Pakistani ceremonial discipline.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sandstone Beige",
        "hex": "#D6C8B4"
      },
      {
        "name": "Desert Dune",
        "hex": "#BCAC98"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Pure Irish Linen (240g/m)",
    "fabricOrigin": "Baird McNutt, Northern Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 21,
    "tailoringNotes": [
      "Natural linen crease memory that softens with age",
      "Unlined cuffs with button tab roll-up option",
      "Matching linen shalwar"
    ]
  },
  {
    "id": "nk-sk-deep-plum-mulberry-silk",
    "name": "N.K FABRICS Regal Plum Mulberry Silk Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1980,
    "formattedPrice": "$1,980",
    "tagline": "Deep Violet Plum Raw Silk with Fine Gold Zardozi Collar Accent",
    "description": "Nocturnal richness. Hand-woven mulberry silk in deep jewel-toned plum, accented by a 1cm gold zardozi bullion embroidered collar band.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Regal Plum",
        "hex": "#3D1530"
      },
      {
        "name": "Nocturne Violet",
        "hex": "#2A0B21"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Mulberry Raw Silk (270g/m)",
    "fabricOrigin": "Heritage Weavers, Lahore",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Gold zardozi bullion embroidery on mandarin collar",
      "French cuff slits with silk loop fasteners",
      "Matching straight pajama trousers"
    ]
  },
  {
    "id": "nk-sk-classic-white-latha-cotton",
    "name": "N.K FABRICS Imperial White Egyptian Latha Cotton Suit",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1350,
    "formattedPrice": "$1,350",
    "tagline": "High-Density Egyptian Latha Weave with Crisp Glazed Finish",
    "description": "The quintessential traditional Pakistani white suit. Crisp, starched-feel Egyptian latha cotton that stays immaculate through humid celebrations.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Optical White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Compact Glazed Egyptian Cotton (180g/m)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "In Stock",
    "stockUnits": 27,
    "tailoringNotes": [
      "Traditional band collar with mother-of-pearl buttons",
      "Classic pleated shalwar with drawcord waistband",
      "Clean French seams"
    ]
  },
  {
    "id": "nk-sk-black-boski-silk-suit",
    "name": "N.K FABRICS Imperial Black Boski Silk Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 2100,
    "formattedPrice": "$2,100",
    "tagline": "Traditional Spun Silk Boski with Featherweight Fluidity",
    "description": "The revered Boski tradition. Spun silk yarns create an unmatched buttery drape that flows gracefully with every stride, finished with horn buttons.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
    "colors": [
      {
        "name": "Deep Boski Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Spun Boski Silk (Heavy 10-Pound Weight)",
    "fabricOrigin": "Heritage Boski Guild, Punjab",
    "fit": "Relaxed Drape",
    "occasion": "Ceremony & Eid",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Traditional loose tailored drape with fluid movement",
      "Handmade loop button fasteners",
      "Includes authentic Boski silk shalwar"
    ]
  },
  {
    "id": "nk-sk-ivory-boski-ceremonial",
    "name": "N.K FABRICS Imperial Ivory Boski Silk Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 2100,
    "formattedPrice": "$2,100",
    "tagline": "Heavyweight Spun Silk Boski in Natural Creamy Ivory",
    "description": "The gold standard of Pakistani summer luxury. Pure Boski silk with an authentic butter-yellow undertone that cools down high heat instantly.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Authentic Boski Ivory",
        "hex": "#FDF8E8"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Heavyweight Spun Boski Silk (10-Pound)",
    "fabricOrigin": "Punjab Master Boski Weavers",
    "fit": "Relaxed Drape",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Buttery handfeel with natural thermal regulation",
      "Mandarin stand collar with pick stitching",
      "Includes matching Boski shalwar"
    ]
  },
  {
    "id": "nk-sk-smoke-grey-karandi-winter",
    "name": "N.K FABRICS Smoke Grey Pure Karandi Winter Suit",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1650,
    "formattedPrice": "$1,650",
    "tagline": "Hand-Spun Pakistani Karandi Cotton-Silk for Winter Banquets",
    "description": "Substantial winter warmth. Hand-spun Karandi combines silk and cotton into a textured, tactile cloth that offers majestic thermal insulation.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Smoke Grey Karandi",
        "hex": "#4A4E57"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "70% Hand-Spun Cotton, 30% Wild Raw Silk (Karandi 320g/m)",
    "fabricOrigin": "Khyber & Punjab Heritage Guild",
    "fit": "Classic Formal",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 21,
    "tailoringNotes": [
      "Dense Karandi texture with thermal insulation",
      "Carved horn buttons with metal shanks",
      "Straight trouser pajama with side slits"
    ]
  },
  {
    "id": "nk-sk-forest-green-matka-suit",
    "name": "N.K FABRICS Forest Green Matka Raw Silk Ensemble",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1920,
    "formattedPrice": "$1,920",
    "tagline": "Rich Jewel-Toned Dark Green Raw Silk with Matching Pajama",
    "description": "Created for evening wedding receptions and autumn festivals. Deep botanical green that absorbs lighting with majestic dignity.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg",
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#102B1D"
      },
      {
        "name": "Hunter Green",
        "hex": "#0A1E14"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Matka Raw Silk (280g/m)",
    "fabricOrigin": "Heritage Weavers, Lahore",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 36,
    "tailoringNotes": [
      "Concealed button placket with mother-of-pearl face buttons",
      "Straight tailored trouser pajama with reinforced seams"
    ]
  },
  {
    "id": "nk-sk-navy-giza-cotton-eid",
    "name": "N.K FABRICS Midnight Navy Egyptian Cotton Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1480,
    "formattedPrice": "$1,480",
    "tagline": "Silky-Smooth Giza 87 Cotton with Tone-on-Tone Piping",
    "description": "Understated midnight grandeur. Woven from Egyptian cotton with a high-luster finish, framed by subtle 1mm navy silk piping on the collar.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#0E192D"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Egyptian Giza 87 Cotton (200/2)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Ceremony & Eid",
    "collection": "Eid Collection",
    "availability": "In Stock",
    "stockUnits": 29,
    "tailoringNotes": [
      "Micro silk piping on collar and placket",
      "Mother-of-pearl buttons",
      "Includes tailored matching shalwar"
    ]
  },
  {
    "id": "nk-sk-terracotta-raw-silk-festive",
    "name": "N.K FABRICS Terracotta Raw Mulberry Silk Kameez Suit",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1890,
    "formattedPrice": "$1,890",
    "tagline": "Hand-Loomed Warm Rust Silk with Gold Thread Neckline Accent",
    "description": "Vibrant, festive, and imperial. Hand-spun raw silk in rich terracotta rust, paired with matching tailored shalwar.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Terracotta Rust",
        "hex": "#A04D36"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Mulberry Raw Silk",
    "fabricOrigin": "Lahore Silk Guild",
    "fit": "Classic Formal",
    "occasion": "Ceremony & Eid",
    "collection": "Traditional Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Subtle gold thread border on mandarin stand collar",
      "Horn buttons with hand-twisted thread loops"
    ]
  },
  {
    "id": "nk-sk-oatmeal-linen-pajama-suit",
    "name": "N.K FABRICS Raw Oatmeal Irish Linen Kameez & Pajama",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1420,
    "formattedPrice": "$1,420",
    "tagline": "Pure Heavyweight Linen with Straight Trouser Pajama",
    "description": "Contemporary South Asian minimalist tailoring. Earthy unbleached Irish linen tailored with a modern straight trouser pajama rather than loose shalwar.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Raw Oatmeal",
        "hex": "#D4C8B5"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "X-Large (44)"
    ],
    "fabric": "100% Pure Irish Linen (260g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Straight trouser pajama with side tab adjusters and cuff slits",
      "Carved bone buttons",
      "French seams"
    ]
  },
  {
    "id": "nk-sk-charcoal-silk-wool-ceremonial",
    "name": "N.K FABRICS Charcoal Silk-Wool Ceremonial Kameez Suit",
    "category": "shalwar-kameez",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1950,
    "formattedPrice": "$1,950",
    "tagline": "60% Fine Wool, 40% Mulberry Silk for Autumn Formal Occasions",
    "description": "A substantial seasonal ensemble. The wool-silk blend provides architectural drape and structured shoulder lines while breathing naturally.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "colors": [
      {
        "name": "Charcoal Silk-Wool",
        "hex": "#2B2B2E"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "60% Merino Wool, 40% Mulberry Silk (250g/m)",
    "fabricOrigin": "Biella & Lahore Artisans",
    "fit": "Classic Formal",
    "occasion": "Formal Collection",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 29,
    "tailoringNotes": [
      "Mandarin band collar reinforced with double horsehair interfacing",
      "Matching straight cut pajama trousers with pockets"
    ]
  },
  {
    "id": "nk-sk-gold-zari-wedding-kameez",
    "name": "N.K FABRICS Imperial Gold Zari Embroidered Wedding Suit",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 2600,
    "formattedPrice": "$2,600",
    "tagline": "Heavy Matka Silk with Handcrafted 24K Gold Zardozi Border",
    "description": "The ultimate groom couture ensemble. Over 90 hours of hand-embroidery with metallic bullion gold wire along the collar, placket, and sleeve hems.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
    "colors": [
      {
        "name": "Antique Ivory & Gold",
        "hex": "#FAF6EC"
      }
    ],
    "sizes": [
      "Custom Made-to-Measure",
      "Medium (40)",
      "Large (42)"
    ],
    "fabric": "Pure Matka Raw Silk with Real Metallic Zari Thread",
    "fabricOrigin": "Varanasi Master Looms & N.K FABRICS Atelier",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "90 hours of dedicated hand zardozi bullion embroidery",
      "Includes matching embroidered silk dupatta wrap and tailored trouser pajama",
      "Solid gilded crest buttons"
    ]
  },
  {
    "id": "nk-sk-midnight-black-chikankari-suit",
    "name": "N.K FABRICS Nocturne Black Chikankari Shalwar Kameez",
    "category": "shalwar-kameez",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1780,
    "formattedPrice": "$1,780",
    "tagline": "Tone-on-Tone Hand-Embroidered Chikankari on Swiss Voile",
    "description": "Subtle, mysterious nocturnal artistry. Delicate shadow embroidery hand-stitched by master artisans across the entire front chest panel.",
    "primaryImage": "/src/assets/images/founder_couture_hero_1790909201612.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Shadow Black",
        "hex": "#080808"
      }
    ],
    "sizes": [
      "Small (38)",
      "Medium (40)",
      "Large (42)",
      "Custom Bespoke"
    ],
    "fabric": "100% Swiss Cotton Voile with Silk Threadwork",
    "fabricOrigin": "Appenzell & Lahore Embroidery Guild",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Full front panel hand-embroidered chikankari work",
      "Concealed snap placket with mother-of-pearl face buttons",
      "Includes matching tailored black shalwar"
    ]
  },
    {
      "id": "nk-sk-maroon-silk-ceremonial",
      "name": "N.K FABRICS Royal Maroon Raw Silk Shalwar Kameez",
      "category": "shalwar-kameez",
      "isNewArrival": true,
      "isBestSeller": true,
      "price": 1250,
      "formattedPrice": "$1,250",
      "tagline": "Hand-Loomed Mulberry Raw Silk with Subtle Tone-on-Tone Stitching",
      "description": "A ceremonial tour de force. Heavyweight hand-spun mulberry raw silk with a structured fall, accompanied by an immaculate band collar, hand-finished placket, and deep pleated shalwar.",
      "primaryImage": "/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg",
      "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
      "colors": [
        {
          "name": "Royal Maroon",
          "hex": "#581825"
        },
        {
          "name": "Wine Red",
          "hex": "#42121B"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "100% Heavy Mulberry Raw Silk (240g/m)",
      "fabricOrigin": "Swat & Multan Artisan Cooperatives",
      "fit": "Tailored Regular",
      "occasion": "Wedding & Gala",
      "collection": "Traditional Collection",
      "availability": "In Stock",
      "stockUnits": 30,
      "subType": "Ceremonial",
      "tailoringNotes": [
        "Rigid buckram-lined band collar retaining shape",
        "Concealed button placket with mother-of-pearl closures",
        "Traditional pleated shalwar with drawstring waist"
      ]
    },
  {
      "id": "nk-sk-textured-offwhite-giza",
      "name": "N.K FABRICS Textured Off-White Egyptian Giza Shalwar Kameez",
      "category": "shalwar-kameez",
      "isNewArrival": false,
      "isBestSeller": true,
      "price": 980,
      "formattedPrice": "$980",
      "tagline": "Ultra-Fine Giza Cotton in Micro-Textured Waffle Weave",
      "description": "The definitive Eid and Jumu'ah ensemble. Woven from long-staple Egyptian cotton for effortless breathability and silky handfeel, finished with contrast horn buttons.",
      "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
      "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
      "colors": [
        {
          "name": "Off-White Cream",
          "hex": "#F7F5EE"
        },
        {
          "name": "Ivory",
          "hex": "#FAF8F2"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "100% Long-Staple Egyptian Giza 87 Cotton (160g/m)",
      "fabricOrigin": "Nile Delta & Swiss Finishing",
      "fit": "Classic Formal",
      "occasion": "Ceremony & Eid",
      "collection": "Eid Collection",
      "availability": "In Stock",
      "stockUnits": 42,
      "subType": "Cotton",
      "tailoringNotes": [
        "Stiff interlining collar and French cuffs option",
        "Precision twin-needle stitching on side vents",
        "Reinforced pocket bags with secure mobile pouch"
      ]
    },
  {
      "id": "nk-sk-dark-olive-linen",
      "name": "N.K FABRICS Dark Olive Irish Linen Shalwar Kameez",
      "category": "shalwar-kameez",
      "isNewArrival": true,
      "isBestSeller": false,
      "price": 890,
      "formattedPrice": "$890",
      "tagline": "Pure Irish Linen in Earthy Olive with Soft Enzyme Wash",
      "description": "Contemporary ethnic refinement. Milled from breathable pure linen that softens with every wear, featuring clean lines, band collar, and relaxed trouser cut.",
      "primaryImage": "/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg",
      "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
      "colors": [
        {
          "name": "Dark Olive Green",
          "hex": "#353D32"
        },
        {
          "name": "Earthy Taupe",
          "hex": "#4A473E"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "100% Pure Irish Linen (200g/m)",
      "fabricOrigin": "Baird McNutt, Northern Ireland",
      "fit": "Relaxed Drape",
      "occasion": "Resort & Casual",
      "collection": "Summer Collection",
      "availability": "In Stock",
      "stockUnits": 28,
      "subType": "Linen",
      "tailoringNotes": [
        "Pre-shrunk enzyme wash for zero shrinkage",
        "Natural shell buttons with cross-stitching"
      ]
    },
  {
      "id": "nk-sk-navy-raw-silk-formal",
      "name": "N.K FABRICS Royal Navy Raw Silk Ceremonial Suit",
      "category": "shalwar-kameez",
      "isNewArrival": false,
      "isBestSeller": true,
      "price": 1190,
      "formattedPrice": "$1,190",
      "tagline": "Lustrous Deep Navy Raw Silk with Hand-Embroidered Cuffs",
      "description": "Commanding midnight aesthetics. Tailored from premium mulberry raw silk with understated matte embroidery on the cuffs and collar, perfect for formal evening celebrations.",
      "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
      "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
      "colors": [
        {
          "name": "Royal Navy Blue",
          "hex": "#111D33"
        },
        {
          "name": "Midnight Black",
          "hex": "#0A0D14"
        }
      ],
      "sizes": [
        "Small (38)",
        "Medium (40)",
        "Large (42)",
        "X-Large (44)"
      ],
      "fabric": "100% Hand-Spun Raw Mulberry Silk (230g/m)",
      "fabricOrigin": "Punjab Silk Weavers Guild",
      "fit": "Tailored Regular",
      "occasion": "Wedding & Gala",
      "collection": "Signature Collection",
      "availability": "In Stock",
      "stockUnits": 33,
      "subType": "Ceremonial",
      "tailoringNotes": [
        "Hand-embroidered geometric motifs along cuffs",
        "Seamless clean hem with side pocket access"
      ]
    },
  {
    "id": "nk-po-silk-cotton-cream",
    "name": "N.K FABRICS 18-Gauge Silk-Cotton Knitted Polo (Cream)",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 520,
    "formattedPrice": "$520",
    "tagline": "18-Gauge Silk & Sea Island Cotton Knitted Open Collar Polo",
    "description": "The essence of quiet luxury. Hand-linked on 18-gauge machines from mulberry silk and long-staple cotton, finished with a seamless placket and ribbed cuffs.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Warm Cream",
        "hex": "#EDE8DF"
      },
      {
        "name": "Midnight Navy",
        "hex": "#141E2E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "55% Mulberry Silk, 45% Long-Staple Cotton (18-Gauge Knit)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Resort & Casual",
    "collection": "Quiet Luxury",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Fully fashioned seamless collar and placket",
      "Ribbed cuffs and waistband that hug gently without pinching"
    ]
  },
  {
    "id": "nk-po-noir-merino-wool",
    "name": "N.K FABRICS Noir Extra-Fine Worsted Merino Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 560,
    "formattedPrice": "$560",
    "tagline": "Super 160s Worsted Merino Wool with Genuine Mother-of-Pearl Buttons",
    "description": "Worn comfortably beneath sport coats or as a standalone statement. Temperature-regulating merino wool with natural elasticity and an ultra-fine hand.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Charcoal",
        "hex": "#222222"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Super 160s Worsted Merino Wool (190g/m)",
    "fabricOrigin": "Zegna Baruffa, Biella, Italy",
    "fit": "Slim Fit",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "Three-button placket with real smoked mother-of-pearl buttons",
      "Natural wrinkle recovery and odor resistance"
    ]
  },
  {
    "id": "nk-po-longsleeve-resort-cashmere",
    "name": "N.K FABRICS Long-Sleeve Cashmere-Silk Resort Polo",
    "category": "polo-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 680,
    "formattedPrice": "$680",
    "tagline": "Long-Sleeve Ribbed Polo in Mongolian Cashmere & Mulberry Silk",
    "description": "A luxurious transition piece. Combines the softness of Grade-A cashmere with the gentle drape of mulberry silk, finished with tailored shirt-style cuffs.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sandstone",
        "hex": "#D8CEBE"
      },
      {
        "name": "Midnight Navy",
        "hex": "#111A29"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "70% Silk, 30% Mongolian Cashmere",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Mitered shirt-style cuffs with mother-of-pearl buttons",
      "Camp-style open collar with zero buttons"
    ]
  },
  {
    "id": "nk-po-emerald-silk-knit",
    "name": "N.K FABRICS Imperial Emerald Knitted Silk Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 540,
    "formattedPrice": "$540",
    "tagline": "18-Gauge Pure Silk Knit with Contrast Champagne Collar Edge",
    "description": "Distinctive jewel-tone nobility. Emerald green pure silk knit detailed with a delicate champagne gold micro-stripe along the knitted collar.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Emerald",
        "hex": "#0F2B20"
      },
      {
        "name": "Nocturne Green",
        "hex": "#071A12"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Pure Mulberry Silk Knit",
    "fabricOrigin": "Como, Italy",
    "fit": "Slim Fit",
    "occasion": "Ceremony & Eid",
    "collection": "Wedding Collection",
    "availability": "In Stock",
    "stockUnits": 25,
    "tailoringNotes": [
      "Contrast champagne gold tipping on collar edge",
      "Three-button hand-finished placket"
    ]
  },
  {
    "id": "nk-po-johnny-collar-navy-pique",
    "name": "N.K FABRICS Johnny Collar Sea Island Cotton Piqu\u00e9 Polo",
    "category": "polo-shirts",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 480,
    "formattedPrice": "$480",
    "tagline": "Buttonless Johnny Collar in Heavyweight Egyptian Piqu\u00e9 Knit",
    "description": "The clean, contemporary polo. Buttonless V-neckline that rolls naturally without button clutter, crafted from breathable honeycomb cotton piqu\u00e9.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#101C30"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Sea Island Long-Staple Cotton Piqu\u00e9 (220g/m)",
    "fabricOrigin": "Thomas Mason, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Clean buttonless Johnny open collar",
      "Ribbed collar and sleeve bands that retain structure"
    ]
  },
  {
    "id": "nk-po-waffle-knit-longsleeve-grey",
    "name": "N.K FABRICS Charcoal Waffle-Knit Long-Sleeve Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 590,
    "formattedPrice": "$590",
    "tagline": "Superfine Merino Wool Honeycomb Knit with Horn Buttons",
    "description": "Textured thermal luxury. Three-dimensional honeycomb knit that breathes naturally while trapping warm air close to the torso.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Charcoal Melange",
        "hex": "#323236"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Super 140s Merino Wool (Honeycomb Weave)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Three-button placket with dark buffalo horn buttons",
      "Ribbed cuffs that push up securely on the forearm"
    ]
  },
  {
    "id": "nk-po-retro-striped-resort-polo",
    "name": "N.K FABRICS Riviera Deco-Stripe Silk-Cotton Polo",
    "category": "polo-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 560,
    "formattedPrice": "$560",
    "tagline": "Vertical Knit Retro Stripe in Ivory and Tobacco Brown",
    "description": "Vintage Mediterranean leisure. Knitted vertical block stripes inspired by 1960s Portofino, finished with a spread open collar.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Ivory & Tobacco",
        "hex": "#EADEC9"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "60% Silk, 40% Egyptian Cotton",
    "fabricOrigin": "Como, Italy",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Knitted vertical block stripes with zero printing",
      "Open spread collar with relaxed fit"
    ]
  },
  {
    "id": "nk-po-zip-neck-merino-black",
    "name": "N.K FABRICS Nocturne Quarter-Zip Merino Wool Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 580,
    "formattedPrice": "$580",
    "tagline": "Super 150s Merino Wool with Solid Champagne Gold Zipper",
    "description": "Modern athletic tailoring. Minimalist metal zipper replaces buttons, delivering a sleek, unbroken collar line that looks sharp under jackets.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Super 150s Worsted Merino Wool (190g/m)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Concealed gold Lampo zipper mechanism",
      "Fine rib collar with shape retention"
    ]
  },
  {
    "id": "nk-po-sandstone-linen-knit",
    "name": "N.K FABRICS Sandstone Pure Knitted Linen Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 490,
    "formattedPrice": "$490",
    "tagline": "Airy Linen Slub Knit with Mother-of-Pearl Three-Button Placket",
    "description": "The ultimate high-summer polo. Knitted from delicate linen yarns with natural slub textures, offering cooling ventilation in tropical heat.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Sandstone Taupe",
        "hex": "#CDBFA8"
      },
      {
        "name": "Natural Ecru",
        "hex": "#E0D6C3"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Pure Knitted French Linen (170g/m)",
    "fabricOrigin": "Normandy, France",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Lightweight knitted linen with natural cooling drape",
      "Australian mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-po-french-blue-mercerized-pique",
    "name": "N.K FABRICS French Blue Double-Mercerized Piqu\u00e9 Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 460,
    "formattedPrice": "$460",
    "tagline": "Ultra-Smooth Double-Mercerized Egyptian Cotton with Silk Luster",
    "description": "Radiant color depth and silky handfeel. The double-mercerization process locks in the French blue dye, preventing fading after repeated wear.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "French Blue",
        "hex": "#365D88"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Giza 87 Double-Mercerized Cotton",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 24,
    "tailoringNotes": [
      "Double-mercerized silky sheen",
      "Interlined woven shirt collar that never curls"
    ]
  },
  {
    "id": "nk-po-olive-cashmere-knit",
    "name": "N.K FABRICS Tuscan Olive Cashmere Short-Sleeve Polo",
    "category": "polo-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 690,
    "formattedPrice": "$690",
    "tagline": "Featherweight 1-Ply Mongolian Cashmere in Deep Olive Green",
    "description": "Decadently soft luxury. Spun from ultra-fine 1-ply worsted cashmere for warm weather, offering a cloud-like touch against bare skin.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Tuscan Olive",
        "hex": "#3B4834"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% 1-Ply Featherweight Mongolian Cashmere",
    "fabricOrigin": "Cariaggi, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Seamless fully fashioned knit",
      "Three horn buttons with cross stitch"
    ]
  },
  {
    "id": "nk-po-burgundy-silk-pique",
    "name": "N.K FABRICS Imperial Burgundy Silk-Cotton Piqu\u00e9 Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 530,
    "formattedPrice": "$530",
    "tagline": "Textured Honeycomb Piqu\u00e9 in Rich Imperial Wine",
    "description": "Sophisticated weekend depth. Woven from a rich blend of silk and cotton in a micro-honeycomb piqu\u00e9 that pairs with grey or cream trousers.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Imperial Burgundy",
        "hex": "#481320"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "50% Mulberry Silk, 50% Giza Cotton",
    "fabricOrigin": "Como, Italy",
    "fit": "Slim Fit",
    "occasion": "Wedding & Gala",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Mother-of-pearl buttons with burgundy thread",
      "Ribbed cuffs with contrast tipping"
    ]
  },
  {
    "id": "nk-po-terry-cloth-resort-navy",
    "name": "N.K FABRICS Navy Terry Toweling Open-Collar Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 450,
    "formattedPrice": "$450",
    "tagline": "Pure Cotton Terry Toweling Knit for Beachside Relaxation",
    "description": "Inspired by vintage 1970s Saint-Tropez. Plush looped cotton terry cloth that absorbs ocean spray while delivering effortless sartorial style.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "colors": [
      {
        "name": "Riviera Navy",
        "hex": "#142036"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Cotton Knitted Loop Terry (230g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "Camp open neckline without buttons",
      "Breathable looped pile fabric"
    ]
  },
  {
    "id": "nk-po-chocolate-fine-merino",
    "name": "N.K FABRICS Espresso Chocolate Extra-Fine Merino Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 550,
    "formattedPrice": "$550",
    "tagline": "Deep Roasted Chocolate Brown in Super 160s Merino Knit",
    "description": "A luxurious neutral staple. Deep espresso brown that adds rich warmth beneath camel coats, suede jackets, and charcoal tailoring.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#281912"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Super 160s Extra-Fine Merino Wool",
    "fabricOrigin": "Zegna Baruffa, Italy",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Natural horn buttons with laser engraving",
      "Seamless rib cuffs and hem"
    ]
  },
  {
    "id": "nk-po-white-knit-dress-collar",
    "name": "N.K FABRICS White Knitted Polo with Woven Shirt Collar",
    "category": "polo-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 490,
    "formattedPrice": "$490",
    "tagline": "Knitted Mercerized Cotton Body with Crisp Woven Poplin Collar",
    "description": "The ultimate hybrid polo. Combines the comfort of a knitted tee body with the crisp, firm collar of a bespoke dress shirt.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Optical White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Body: 100% Mercerized Cotton Knit / Collar: 100% Giza Poplin",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Slim Fit",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Firm woven shirt collar that stays upright under suit jackets",
      "Removable brass stays inside collar points"
    ]
  },
  {
    "id": "nk-po-powder-blue-cashmere-silk",
    "name": "N.K FABRICS Powder Blue Cashmere-Silk Knitted Polo",
    "category": "polo-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 690,
    "formattedPrice": "$690",
    "tagline": "Featherweight Cashmere and Mulberry Silk in Pale Azure",
    "description": "An ethereal springtime luxury. The pale azure hue complements grey flannel and tan trousers with aristocratic distinction.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Powder Blue",
        "hex": "#A8C2DC"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "70% Silk, 30% Mongolian Cashmere",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Mother-of-pearl buttons with silk loop fasteners",
      "Hand-linked shoulders"
    ]
  },
  {
    "id": "nk-ts-giza87-mercerized-black",
    "name": "N.K FABRICS Giza 87 Mercerized T-Shirt (Black)",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 320,
    "formattedPrice": "$320",
    "tagline": "Double-Mercerized Giza 87 Cotton with Silk Luster & Bound Neck",
    "description": "The definitive luxury tee. Spun from rare Giza 87 Egyptian cotton and double-mercerized for an intense, silky luster and immaculate shape retention over hundreds of wears.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Giza 87 Egyptian Cotton (180g/m)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Double-needle hem and sleeve finish with blind stitch",
      "Bound neckline that never stretches or wrinkles"
    ]
  },
  {
    "id": "nk-ts-giza87-mercerized-white",
    "name": "N.K FABRICS Giza 87 Mercerized T-Shirt (White)",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 320,
    "formattedPrice": "$320",
    "tagline": "Double-Mercerized Ultra-White Long-Staple Cotton",
    "description": "Crisp, radiant, and heavy enough to prevent translucency. Designed to layer beneath bespoke jackets or stand alone with pleated trousers.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Optical White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Giza 87 Double-Mercerized Egyptian Cotton",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Zero side seams for seamless cylindrical silhouette",
      "Embroidered tonal micro-monogram on left rib"
    ]
  },
  {
    "id": "nk-ts-giza87-mercerized-charcoal",
    "name": "N.K FABRICS Giza 87 Mercerized T-Shirt (Charcoal)",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 320,
    "formattedPrice": "$320",
    "tagline": "Deep Charcoal Grey Mercerized Cotton with Micro-Neckband",
    "description": "An executive casual essential. The deep anthracite charcoal shade absorbs lighting with rich depth, pairing flawlessly with grey and black tailoring.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Anthracite Charcoal",
        "hex": "#262626"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Giza 87 Double-Mercerized Cotton",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Tailored sleeve angle designed to flatter bicep silhouette",
      "Blind-stitched hems"
    ]
  },
  {
    "id": "nk-ts-heavyweight-280gsm-navy",
    "name": "N.K FABRICS Heavyweight 280gsm Relaxed Cotton Tee (Navy)",
    "category": "t-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 340,
    "formattedPrice": "$340",
    "tagline": "Substantial 280g/m Combed Cotton with Dropped Shoulder Fit",
    "description": "Thick, architectural drape. Heavyweight single jersey that never clings, maintaining a clean boxy silhouette over tailored trousers and chinos.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Deep Navy",
        "hex": "#101B2E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Long-Staple Combed Cotton (280g/m Heavyweight)",
    "fabricOrigin": "Portugal",
    "fit": "Relaxed Drape",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Dropped shoulder seam with boxy modern chest cut",
      "Heavy 2.5cm ribbed collar with elastane reinforcement"
    ]
  },
  {
    "id": "nk-ts-heavyweight-280gsm-white",
    "name": "N.K FABRICS Heavyweight 280gsm Relaxed Cotton Tee (White)",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 340,
    "formattedPrice": "$340",
    "tagline": "100% Opaque Heavyweight Architectural Cotton Crewneck",
    "description": "The holy grail of white tees. Absolute zero translucency, heavy clean drape that drapes away from the torso, and an unyielding reinforced crew collar.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Opaque Chalk White",
        "hex": "#FDFDFD"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Long-Staple Combed Cotton (280g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Relaxed Drape",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 28,
    "tailoringNotes": [
      "Complete opacity with dense 280gsm weight",
      "Pre-shrunk fabric ensuring zero wash shrinkage"
    ]
  },
  {
    "id": "nk-ts-silk-cotton-blend-noir",
    "name": "N.K FABRICS Silk-Cotton Luxury Crewneck Tee (Noir)",
    "category": "t-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 380,
    "formattedPrice": "$380",
    "tagline": "55% Mulberry Silk, 45% Mercerized Giza Cotton Jersey",
    "description": "The ultimate luxury t-shirt. The addition of mulberry silk creates a cool, liquid handfeel and an elegant fluid drape that elevates standard casualwear.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Nocturne Noir",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "55% Mulberry Silk, 45% Giza Cotton (170g/m)",
    "fabricOrigin": "Como, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Liquid silk drape with subtle nocturnal sheen",
      "Ultra-flat bonded hem for invisible under-jacket lines"
    ]
  },
  {
    "id": "nk-ts-sandstone-slub-cotton",
    "name": "N.K FABRICS Sandstone Slub Cotton Textured Tee",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 290,
    "formattedPrice": "$290",
    "tagline": "Organic Slub Cotton Jersey with Natural Uneven Texture",
    "description": "Organic, tactile simplicity. Subtle horizontal slub variations woven into the yarn provide visual depth and relaxed casual character.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Sandstone Taupe",
        "hex": "#C5B6A0"
      },
      {
        "name": "Oatmeal",
        "hex": "#DDD3C3"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Organic Slub Cotton (200g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Tactile slub yarn texture with soft handfeel",
      "Raw edge chest pocket with bartack reinforcement"
    ]
  },
  {
    "id": "nk-ts-olive-supima-crewneck",
    "name": "N.K FABRICS Tuscan Olive Supima Cotton Crewneck",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 310,
    "formattedPrice": "$310",
    "tagline": "American Supima Extra-Long Staple Cotton in Deep Olive",
    "description": "Subtle earthy sophistication. Made from certified Supima cotton known for extra-long fibers that provide twice the strength of regular cotton.",
    "primaryImage": "/src/assets/images/emerald_silk_kameez_1791180291920.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Tuscan Olive",
        "hex": "#3A4432"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Certified American Supima Cotton (190g/m)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "Vibrant reactive dye that resists fading",
      "Reinforced neck tape from shoulder to shoulder"
    ]
  },
  {
    "id": "nk-ts-espresso-brown-heavyweight",
    "name": "N.K FABRICS Espresso Brown 260gsm Heavyweight Tee",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 330,
    "formattedPrice": "$330",
    "tagline": "Roasted Coffee Bean Brown in Dense Compact Jersey",
    "description": "A warm, rich tone for autumn layering. Pairs seamlessly beneath camel coats, olive jackets, and dark grey tailored trousers.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#281B15"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Long-Staple Cotton (260g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 26,
    "tailoringNotes": [
      "Dense 260gsm jersey with smooth peach finish",
      "Twin needle coverstitch at hem and cuffs"
    ]
  },
  {
    "id": "nk-ts-french-blue-mercerized",
    "name": "N.K FABRICS French Blue Mercerized Giza Tee",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 320,
    "formattedPrice": "$320",
    "tagline": "Luminous French Blue with Silky Soft Mercerized Finish",
    "description": "A striking color pop under tailored jackets. Double-mercerized for an intense, silky luster that catches natural light with elegance.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "French Blue",
        "hex": "#365983"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Giza 87 Mercerized Cotton (180g/m)",
    "fabricOrigin": "Albini Group, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 18,
    "tailoringNotes": [
      "Silky mercerized luster",
      "Bound micro-neckband"
    ]
  },
  {
    "id": "nk-ts-pocket-tee-heavy-white",
    "name": "N.K FABRICS White Heavyweight Sartorial Pocket Tee",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 340,
    "formattedPrice": "$340",
    "tagline": "260gsm Cotton with Sculpted Mitered Chest Pocket",
    "description": "The elevated workwear tee. Features a tailored mitered chest pocket with an internal pen divider and substantial 260gsm cotton fabric.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Chalk White",
        "hex": "#FAFAFA"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Heavy Combed Cotton (260g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 27,
    "tailoringNotes": [
      "Mitered chest pocket with hidden pen sleeve",
      "Reinforced collar rib"
    ]
  },
  {
    "id": "nk-ts-waffle-knit-crewneck-grey",
    "name": "N.K FABRICS Grey Melange Waffle-Knit Cotton Long-Sleeve Tee",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 360,
    "formattedPrice": "$360",
    "tagline": "Textured Honeycomb Cotton Knit for Layering",
    "description": "Breathable thermal waffle texture. Worn beneath casual shirts or as an elevated weekend tee over tailored trousers.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Grey Melange",
        "hex": "#7A7E86"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Combed Cotton Waffle Knit (240g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 22,
    "tailoringNotes": [
      "Honeycomb waffle texture with natural stretch",
      "Ribbed cuffs that stay in place"
    ]
  },
  {
    "id": "nk-ts-burgundy-silk-cotton-tee",
    "name": "N.K FABRICS Imperial Burgundy Silk-Cotton Crewneck",
    "category": "t-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 380,
    "formattedPrice": "$380",
    "tagline": "55% Silk, 45% Cotton in Deep Jewel-Toned Wine",
    "description": "Nocturnal richness. The subtle sheen of mulberry silk transforms this tee into a valid black-tie cocktail layering piece beneath evening jackets.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Imperial Burgundy",
        "hex": "#42101B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "55% Mulberry Silk, 45% Giza Cotton",
    "fabricOrigin": "Como, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Saturated jewel-tone dye",
      "Blind-stitched seamless hems"
    ]
  },
  {
    "id": "nk-ts-oatmeal-heather-cotton-linen",
    "name": "N.K FABRICS Oatmeal Cotton-Linen Breathable Tee",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 310,
    "formattedPrice": "$310",
    "tagline": "70% Cotton, 30% French Linen in Natural Oatmeal Heather",
    "description": "Cooling linen properties combined with the soft familiarity of cotton. Natural slubs provide a casual, earthy texture.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Oatmeal Heather",
        "hex": "#D4C9B8"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "70% Long-Staple Cotton, 30% French Linen (190g/m)",
    "fabricOrigin": "France & Portugal",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Breathable cotton-linen blend",
      "Self-fabric crew neckband"
    ]
  },
  {
    "id": "nk-ts-oversized-boxy-charcoal",
    "name": "N.K FABRICS Boxy Oversized Heavyweight Tee (Charcoal)",
    "category": "t-shirts",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 350,
    "formattedPrice": "$350",
    "tagline": "Substantial 300gsm Heavyweight Cotton with Dropped Shoulder",
    "description": "Contemporary street-luxe architecture. Heavy 300gsm combed cotton jersey that hangs completely square with wide elbow-length sleeves.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Washed Charcoal",
        "hex": "#2D2D30"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Ultra-Heavyweight Combed Cotton (300g/m)",
    "fabricOrigin": "Portugal",
    "fit": "Relaxed Drape",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Architectural boxy silhouette with dropped shoulders",
      "Wide elbow-length sleeve opening"
    ]
  },
  {
    "id": "nk-ts-striped-breton-navy-white",
    "name": "N.K FABRICS Breton Nautical Striped Long-Sleeve Tee",
    "category": "t-shirts",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 360,
    "formattedPrice": "$360",
    "tagline": "Heavy 240gsm Cotton with Boatneck Collar & Navy Stripes",
    "description": "Timeless French naval heritage. Horizontal 2cm navy and white nautical stripes with an authentic boatneck neckline and straight hem.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Navy & White Stripe",
        "hex": "#162238"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Heavy Breton Cotton Jersey (240g/m)",
    "fabricOrigin": "Brittany, France",
    "fit": "Tailored Regular",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Authentic wide boatneck collar",
      "Yarn-dyed horizontal nautical stripes",
      "Side hem vents"
    ]
  },
  {
    "id": "nk-jk-suede-harrington-espresso",
    "name": "N.K FABRICS Florence Calf Suede Harrington Jacket",
    "category": "jackets",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 2450,
    "formattedPrice": "$2,450",
    "tagline": "Supple Italian Calf Suede with Double-Zip & Ribbed Collar Trim",
    "description": "The pinnacle of casual outerwear luxury. Featherweight Italian calf suede with a velvety nap, tailored with a dual two-way Lampo zipper and clean buttoned flap pockets.",
    "primaryImage": "/src/assets/images/suede_jacket_luxury_1791180724417.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#281A14"
      },
      {
        "name": "Cognac Tan",
        "hex": "#583D2A"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Ultra-Soft Italian Calf Suede",
    "fabricOrigin": "Tuscany, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Two-way solid brass Lampo zipper gilded in champagne gold",
      "Ribbed wool-cashmere interior collar stand and cuffs",
      "Silk cupro lining with dual interior pockets"
    ]
  },
  {
    "id": "nk-jk-royal-prince-coat-black",
    "name": "N.K FABRICS Sovereign Royal Velvet Prince Coat",
    "category": "jackets",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 2850,
    "formattedPrice": "$2,850",
    "tagline": "Midnight Black Velvet Prince Coat with Gold Zardozi Bullion Collar",
    "description": "The crowning jewel of South Asian formal royalty. Tailored in an authoritative structured prince coat silhouette from deep Italian silk-cotton velvet, adorned with handcrafted 24K gold bullion zardozi embroidery on the mandarin collar and French cuffs.",
    "primaryImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Midnight Velvet Noir",
        "hex": "#080808"
      },
      {
        "name": "Royal Navy Velvet",
        "hex": "#0B132B"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L",
      "Custom Bespoke"
    ],
    "fabric": "Heavy Venetian Silk-Cotton Velvet (380g/m)",
    "fabricOrigin": "Redaelli Velluti, Como & Lahore Royal Guild",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Over 90 hours of hand-guided zardozi gold bullion embroidery",
      "Full floating chest canvas with military waist suppression",
      "Solid brass engraved crest buttons gilded in 18K champagne gold"
    ]
  },
  {
    "id": "nk-jk-jamawar-wedding-sherwani",
    "name": "N.K FABRICS Imperial Jamawar Wedding Sherwani Jacket",
    "category": "jackets",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 3400,
    "formattedPrice": "$3,400",
    "tagline": "Woven Pure Silk Jamawar Brocade with Hand-Cut Crystal Buttons",
    "description": "An heirloom wedding creation. Woven from genuine pure silk Jamawar with intricate paisley and royal crest motifs, structured with Savile Row chest padding for an unyielding regal stance.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/prince_coat_royal_1791180264486.jpg",
    "colors": [
      {
        "name": "Antique Gold Jamawar",
        "hex": "#CDB788"
      },
      {
        "name": "Ivory Silver Brocade",
        "hex": "#E2DCD0"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "Custom Bespoke"
    ],
    "fabric": "100% Pure Mulberry Silk Jamawar Brocade",
    "fabricOrigin": "Varanasi Master Weavers & N.K FABRICS Atelier",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Wedding Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Hand-set crystal and filigree metal buttons",
      "Full silk cupro interior lining printed with N.K FABRICS monogram",
      "Accompanied by custom velvet garment storage trunk"
    ]
  },
  {
    "id": "nk-jk-midnight-velvet-smoking",
    "name": "N.K FABRICS Midnight Velvet Smoking Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 2200,
    "formattedPrice": "$2,200",
    "tagline": "Heavy Venetian Cotton Velvet with Quilted Silk Shawl Lapels",
    "description": "The pinnacle of private club luxury. Tailored from lustrous midnight black Italian cotton velvet, finished with a hand-quilted diamond silk shawl collar and braided frog closures.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Deep Burgundy",
        "hex": "#2A0808"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Heavy Cotton Velvet (380g/m)",
    "fabricOrigin": "Pontoglio 1883, Brescia, Italy",
    "fit": "Tailored Regular",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "Quilted silk satin shawl collar and matching turn-back cuffs",
      "Handmade silk frog toggle closure",
      "Two jetted lower pockets"
    ]
  },
  {
    "id": "nk-jk-casablanca-dinner-jacket",
    "name": "N.K FABRICS Casablanca Ivory Silk Dinner Jacket",
    "category": "jackets",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 2450,
    "formattedPrice": "$2,450",
    "tagline": "Unbleached Wool-Silk Barathea with Sweeping Shawl Collar",
    "description": "The golden age of warm-weather black tie. Woven in an ivory barathea that resists yellowing under lighting, finished with a curved shawl collar and carved mother-of-pearl buttons.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Ivory Barathea",
        "hex": "#FDFBF5"
      },
      {
        "name": "Alabaster",
        "hex": "#F4ECE0"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "Fine Wool & Mulberry Silk Barathea (260g/m)",
    "fabricOrigin": "Holland & Sherry, Savile Row",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Continuous sweeping shawl collar without break",
      "Single-button evening stance with jetted pockets",
      "Silk-faced covered buttons"
    ]
  },
  {
    "id": "nk-jk-cashmere-linen-safari",
    "name": "N.K FABRICS Florence Field Safari Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 2100,
    "formattedPrice": "$2,100",
    "tagline": "Cashmere-Linen Twill with Internal Drawstring & Four Bellows Pockets",
    "description": "A sartorial reinterpretation of traditional fieldwear. Blends the breathability of Irish linen with the silky drape of Mongolian cashmere, tailored with horn buttons and an internal drawstring.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Olive Drab",
        "hex": "#3E4433"
      },
      {
        "name": "Espresso Brown",
        "hex": "#2F231D"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "60% Irish Linen, 40% Cashmere (290g/m)",
    "fabricOrigin": "Piacenza 1733, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 36,
    "tailoringNotes": [
      "Four pleated bellows pockets with button flap closures",
      "Action back shoulder pleats for driving comfort",
      "Dark horn buttons"
    ]
  },
  {
    "id": "nk-jk-leather-bomber-navy",
    "name": "N.K FABRICS Nappa Leather Ribbed Flight Bomber Jacket",
    "category": "jackets",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 2600,
    "formattedPrice": "$2,600",
    "tagline": "Buttery French Lambskin Nappa with Cashmere Ribbed Hem",
    "description": "A luxurious aviation monument. Hand-selected French lambskin nappa leather with an impossibly supple temper, paired with 100% cashmere ribbed hem and storm collar.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/suede_jacket_luxury_1791180724417.jpg",
    "colors": [
      {
        "name": "Midnight Navy Nappa",
        "hex": "#0F1A2C"
      },
      {
        "name": "Pitch Black Nappa",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Full-Grain French Lambskin Nappa Leather",
    "fabricOrigin": "Annonay Tanneries, France",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "100% cashmere knit ribbed collar, cuffs, and hem",
      "Heavyweight brass two-way Lampo zipper",
      "Dual snap-down storm flap pockets"
    ]
  },
  {
    "id": "nk-jk-quilted-microfiber-riding",
    "name": "N.K FABRICS Quilted Equestrian Diamond Riding Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1650,
    "formattedPrice": "$1,650",
    "tagline": "Water-Repellent Micro-Suede Quilting with Corduroy Collar",
    "description": "Aristocratic British sporting heritage. Matte diamond-quilted microfiber shell lined with lightweight insulation, finished with an English corduroy collar and snap storm flap.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "British Racing Green",
        "hex": "#1B3120"
      },
      {
        "name": "Midnight Navy",
        "hex": "#121F33"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Water-Repellent Microfiber Twill with Primaloft Insulation",
    "fabricOrigin": "Lancashire, UK",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "English corduroy collar and pocket trim",
      "Dual rear snap riding vents",
      "Brass snap buttons engraved with N.K FABRICS insignia"
    ]
  },
  {
    "id": "nk-jk-cashmere-overcoat-camel",
    "name": "N.K FABRICS Double-Face Cashmere Winter Overcoat",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 3200,
    "formattedPrice": "$3,200",
    "tagline": "Pure Mongolian Double-Face Cashmere with Colossal Lapels",
    "description": "A monumental winter overcoat designed to be worn over bespoke suiting. Hand-split double-face cashmere that requires zero synthetic interlining, falling gracefully to the knee.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Golden Camel",
        "hex": "#B88A4A"
      },
      {
        "name": "Charcoal Flannel",
        "hex": "#282828"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "100% Pure Double-Face Cashmere (520g/m)",
    "fabricOrigin": "Piacenza 1733, Biella, Italy",
    "fit": "Classic Formal",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Tailored with sufficient chest allowance to layer over suits",
      "Hand-finished pick stitching along colossal lapels",
      "Genuine unpolished horn buttons"
    ]
  },
  {
    "id": "nk-jk-unstructured-hopsack-sport",
    "name": "N.K FABRICS Unstructured Navy Hopsack Sport Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1950,
    "formattedPrice": "$1,950",
    "tagline": "Open-Weave High-Twist Wool with Shirt-Sleeve Shoulder",
    "description": "The most versatile tailored sport jacket in the gentleman\u2019s wardrobe. Completely unlined hopsack wool allows total airflow, pairing seamlessly with both flannel trousers and casual pants.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Classic Navy",
        "hex": "#142238"
      },
      {
        "name": "Steel Blue",
        "hex": "#27384E"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Super 120s High-Ventilation Wool Hopsack (270g/m)",
    "fabricOrigin": "Vitale Barberis Canonico, Biella",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 30,
    "tailoringNotes": [
      "Quarter-lined back with hand-finished French seams",
      "Patch hip pockets and barchetta breast pocket",
      "Smoked mother-of-pearl buttons"
    ]
  },
  {
    "id": "nk-jk-shearling-aviator-jacket",
    "name": "N.K FABRICS Merino Shearling Winter Aviator Jacket",
    "category": "jackets",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 3600,
    "formattedPrice": "$3,600",
    "tagline": "Thick Spanish Merino Shearling with Full-Grain Leather Outer",
    "description": "Unyielding warmth in extreme cold. Plush 15mm Spanish merino sheepskin shearling with a crackled dark brown leather finish and heavy brass buckle collars.",
    "primaryImage": "/src/assets/images/suede_jacket_luxury_1791180724417.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Espresso Shearling",
        "hex": "#2A1A12"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Spanish Merino Lambskin Shearling",
    "fabricOrigin": "Zaragoza, Spain",
    "fit": "Relaxed Drape",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Plush 15mm natural shearling collar with dual leather buckle straps",
      "Heavyweight brass zip mechanism",
      "Leather welt handwarmer pockets"
    ]
  },
  {
    "id": "nk-jk-linen-field-jacket-sand",
    "name": "N.K FABRICS Mediterranean Sand Linen Field Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1850,
    "formattedPrice": "$1,850",
    "tagline": "Heavy Irish Linen with Storm Placket & Four Bellows Pockets",
    "description": "The ultimate warm-weather adventure layer. Heavyweight linen washed to drape with relaxed authority, featuring an interior waist cinch cord and military storm flap.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Sandstone Linen",
        "hex": "#C5B59D"
      },
      {
        "name": "Olive Drab",
        "hex": "#444A38"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "100% Heavy Pure Irish Linen (320g/m)",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Four large front bellows pockets with hidden snaps",
      "Storm flap front over two-way brass zipper",
      "Internal drawstring waist"
    ]
  },
  {
    "id": "nk-jk-harrington-cotton-twill-navy",
    "name": "N.K FABRICS Classic Navy Water-Repellent Harrington Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1450,
    "formattedPrice": "$1,450",
    "tagline": "Storm-Proof Cotton Gabardine with Signature Silk Tartan Lining",
    "description": "The perennial British icon. High-density waterproof cotton gabardine styled with a stand collar, raglan sleeves for ease of movement, and silk tartan interior.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/suede_jacket_luxury_1791180724417.jpg",
    "colors": [
      {
        "name": "Deep Navy",
        "hex": "#111A2B"
      },
      {
        "name": "British Khaki",
        "hex": "#7A6B53"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Weather-Resistant Compact Cotton Gabardine (280g/m)",
    "fabricOrigin": "Lancashire, UK",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 28,
    "tailoringNotes": [
      "Raglan sleeves for unrestricted arm motion",
      "Two-button stand collar with horn buttons",
      "Silk tartan interior body lining with scalloped back umbrella vent"
    ]
  },
  {
    "id": "nk-jk-down-quilted-vest-cashmere",
    "name": "N.K FABRICS Cashmere-Flannel Quilted Down Gilet Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1550,
    "formattedPrice": "$1,550",
    "tagline": "Pure Wool-Cashmere Flannel Stuffed with 800-Fill Goose Down",
    "description": "Thermal core warmth for autumn and spring mornings. Cashmere flannel outer shell repels chill while 800-fill white goose down insulates with featherweight lightness.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "colors": [
      {
        "name": "Anthracite Flannel",
        "hex": "#242424"
      },
      {
        "name": "Navy Blue",
        "hex": "#101B2E"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "fabric": "90% Wool, 10% Cashmere with 800-Fill White Goose Down",
    "fabricOrigin": "Biella, Italy & Austria",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "Genuine 800-fill Austrian white goose down",
      "Dual-entry fleece-lined handwarmer pockets",
      "Stand collar with internal rib knit"
    ]
  },
  {
    "id": "nk-jk-wool-chore-jacket-charcoal",
    "name": "N.K FABRICS Savile Row Wool Flannel Chore Jacket",
    "category": "jackets",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 1680,
    "formattedPrice": "$1,680",
    "tagline": "Heavy English Wool Flannel with Three Patch Pockets",
    "description": "Workwear heritage reimagined through bespoke tailoring. Dense flannel with hand-sewn buttonholes, unlined construction, and three patch utility pockets.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Charcoal Flannel",
        "hex": "#2A2A2A"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "100% British Wool Flannel (340g/m)",
    "fabricOrigin": "Fox Brothers, Somerset, UK",
    "fit": "Relaxed Drape",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Three exterior patch pockets with barchetta curvature",
      "Real unpolished horn buttons",
      "Single rear vent"
    ]
  },
  {
    "id": "nk-jk-black-wool-overcoat-chesterfield",
    "name": "N.K FABRICS Nocturne Black Chesterfield Overcoat",
    "category": "jackets",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 2950,
    "formattedPrice": "$2,950",
    "tagline": "Super 150s Melton Wool with Black Velvet Upper Collar",
    "description": "The definitive formal overcoat for white-tie and black-tie evenings. Impeccable knee-length tailoring with a concealed button fly placket and velvet top collar.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Nocturne Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R",
      "46L"
    ],
    "fabric": "Heavy British Melton Wool (480g/m)",
    "fabricOrigin": "Huddersfield Fine Worsteds, UK",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Formal Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Venetian black velvet upper collar",
      "Fly front concealing horn buttons",
      "Single deep rear walking vent"
    ]
  },
  {
    "id": "nk-sw-cashmere-crewneck-sandstone",
    "name": "N.K FABRICS 18-Gauge Cashmere Crewneck Sweater",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 920,
    "formattedPrice": "$920",
    "tagline": "Pure 2-Ply Mongolian Cashmere in Warm Sandstone Beige",
    "description": "Whisper-light yet intensely warm. Knitted on precision 18-gauge Japanese machines with zero side seams for a sculpted, second-skin silhouette.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Sandstone Beige",
        "hex": "#D8CBB7"
      },
      {
        "name": "Deep Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Navy",
        "hex": "#162032"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% 2-Ply Grade-A Mongolian Cashmere",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Fully fashioned seamless construction",
      "Ribbed cuffs and hem with elastane memory thread",
      "Self-finished crew neckline"
    ]
  },
  {
    "id": "nk-sw-cashmere-turtleneck-noir",
    "name": "N.K FABRICS Fine-Gauge Cashmere Turtleneck (Black)",
    "category": "sweaters",
    "isNewArrival": true,
    "isBestSeller": true,
    "price": 980,
    "formattedPrice": "$980",
    "tagline": "18-Gauge Worsted Cashmere Rollneck for Tailored Layering",
    "description": "The quintessential sartorial cold-weather staple. Designed with a close-fitting rollneck collar that stands firm beneath bespoke suit jackets and coats.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Charcoal",
        "hex": "#1F1F1F"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Grade-A Mongolian Cashmere",
    "fabricOrigin": "Cariaggi Fine Yarns, Marche, Italy",
    "fit": "Slim Fit",
    "occasion": "Evening Black-Tie",
    "collection": "Winter Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Double-folded ribbed turtleneck that never sags",
      "Sleek underarm taper to eliminate bunching under suit jackets",
      "Ultra-soft handfeel"
    ]
  },
  {
    "id": "nk-sw-shawl-cardigan-cableknit",
    "name": "N.K FABRICS Cashmere Shawl-Collar Cableknit Cardigan",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1450,
    "formattedPrice": "$1,450",
    "tagline": "Heavy 8-Ply Ribbed Cashmere with Carved Buffalo Horn Buttons",
    "description": "Substantial, protective, and supremely luxurious. Knitted from eight plies of pure Mongolian cashmere with a generous ribbed shawl collar and welt pockets.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "colors": [
      {
        "name": "Oatmeal Heather",
        "hex": "#CDBFA8"
      },
      {
        "name": "Navy Blue",
        "hex": "#121C2B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% 8-Ply Mongolian Cashmere (Heavy Weight 650g)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Relaxed Drape",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 19,
    "tailoringNotes": [
      "Generous shawl collar with horn toggle button closure",
      "Hand-sewn horn buttons with genuine leather backing washers",
      "Deep waist welt pockets"
    ]
  },
  {
    "id": "nk-sw-quarter-zip-silk-cashmere",
    "name": "N.K FABRICS Silk-Cashmere Quarter-Zip Pullover",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 890,
    "formattedPrice": "$890",
    "tagline": "70% Cashmere, 30% Silk with Leather Pull & Lampo Zipper",
    "description": "The modern executive travel layer. Ultra-smooth Italian Lampo zipper finished with a hand-stitched leather pull tab and ribbed mock neck.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Slate Blue",
        "hex": "#2E3D52"
      },
      {
        "name": "Espresso",
        "hex": "#2B1E19"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "70% Grade-A Cashmere, 30% Mulberry Silk",
    "fabricOrigin": "Loro Piana Yarns, Quarona, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 26,
    "tailoringNotes": [
      "Satin gold Lampo zipper mechanism from Milan",
      "Hand-stitched calfskin leather zipper pull",
      "Ribbed cuffs and waistband"
    ]
  },
  {
    "id": "nk-sw-vneck-merino-navy",
    "name": "N.K FABRICS Super 160s Worsted Merino V-Neck Sweater",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 680,
    "formattedPrice": "$680",
    "tagline": "Ultra-Fine Worsted Merino Wool Designed for Shirt & Tie Pairing",
    "description": "Calculated specifically for the gentleman\u2019s neckwear. The V-neckline reveals shirt collars and tie knots with razor-sharp geometric precision.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#0E1728"
      },
      {
        "name": "Anthracite",
        "hex": "#222222"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Super 160s Australian Merino Wool (Zegna Baruffa)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Business & Boardroom",
    "collection": "Formal Collection",
    "availability": "In Stock",
    "stockUnits": 23,
    "tailoringNotes": [
      "V-neck angle cut to expose shirt collar band and tie knot",
      "Fine gauge that fits under tailored suit jackets without bulk"
    ]
  },
  {
    "id": "nk-sw-chunky-fisherman-crewneck",
    "name": "N.K FABRICS Donegal Flecked Wool Fisherman Sweater",
    "category": "sweaters",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 850,
    "formattedPrice": "$850",
    "tagline": "Heavy 5-Gauge Irish Wool Knit with Authentic Honeycomb Stitching",
    "description": "Rugged coastal warmth. Knitted in Ireland from pure wool flecked with colorful Donegal tweed neps, featuring traditional honeycomb and cable stitches.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Donegal Cream",
        "hex": "#EDE6D8"
      },
      {
        "name": "Moss Green",
        "hex": "#2E382A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Pure Irish Wool (5-Gauge Heavy Knit)",
    "fabricOrigin": "Donegal, Ireland",
    "fit": "Relaxed Drape",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Heavy 5-gauge cable and honeycomb stitch",
      "Ribbed crewneck and cuffs with natural elasticity"
    ]
  },
  {
    "id": "nk-sw-milano-stitch-cardigan-black",
    "name": "N.K FABRICS Milano-Stitch Structured Knit Cardigan",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 960,
    "formattedPrice": "$960",
    "tagline": "Dense Architectural Milano Rib with Horn Buttons & V-Neck",
    "description": "Knitted with jacket-like body. The dense Milano rib stitch prevents sagging, giving this cardigan the crisp architecture of outerwear.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Deep Black",
        "hex": "#080808"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Extra-Fine Worsted Merino Wool (Milano Rib)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 38,
    "tailoringNotes": [
      "Dense Milano rib knit with architectural structure",
      "Real buffalo horn buttons",
      "Dual tailored patch pockets"
    ]
  },
  {
    "id": "nk-sw-cashmere-crewneck-burgundy",
    "name": "N.K FABRICS Imperial Burgundy Cashmere Crewneck",
    "category": "sweaters",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 920,
    "formattedPrice": "$920",
    "tagline": "Grade-A Mongolian Cashmere in Rich Jewel-Toned Wine",
    "description": "An opulent holiday colorway. Knitted from two-ply worsted cashmere yarns that retain their lofty softness and resist pilling over years of wear.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Imperial Burgundy",
        "hex": "#44111D"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% 2-Ply Mongolian Cashmere",
    "fabricOrigin": "Cariaggi, Italy",
    "fit": "Tailored Regular",
    "occasion": "Wedding & Gala",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Saturated jewel-tone dye",
      "Reinforced saddle shoulder seams",
      "Ribbed cuffs and hem"
    ]
  },
  {
    "id": "nk-sw-silk-linen-summer-knit",
    "name": "N.K FABRICS Riviera Silk-Linen Lightweight Summer Sweater",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 740,
    "formattedPrice": "$740",
    "tagline": "Open-Knit Breathable Blend of Mulberry Silk and French Linen",
    "description": "The ultimate breezy evening knit. Spun from mulberry silk and open-weave linen to provide thermal regulation over polo shirts on coastal evenings.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "colors": [
      {
        "name": "Sandstone Ecru",
        "hex": "#DDD4C4"
      },
      {
        "name": "Navy Blue",
        "hex": "#141E30"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "55% Mulberry Silk, 45% French Linen",
    "fabricOrigin": "Como & Normandy",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 29,
    "tailoringNotes": [
      "Open airy stitch permitting air circulation",
      "Rolled edge collar and cuffs"
    ]
  },
  {
    "id": "nk-sw-cashmere-polo-sweater-collar",
    "name": "N.K FABRICS Long-Sleeve Cashmere Polo Collar Sweater",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 950,
    "formattedPrice": "$950",
    "tagline": "Seamless Knit with Camp-Style Shirt Collar & 3 Horn Buttons",
    "description": "Sprezzatura knitwear. Merges the formal stance of a shirt collar with the cloud-like comfort of pure Mongolian cashmere.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Warm Taupe",
        "hex": "#665345"
      },
      {
        "name": "Midnight Navy",
        "hex": "#0F1A2A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Grade-A Mongolian Cashmere",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 32,
    "tailoringNotes": [
      "Fully fashioned shirt-style collar",
      "Genuine carved horn buttons",
      "Seamless shoulder construction"
    ]
  },
  {
    "id": "nk-sw-mockneck-merino-charcoal",
    "name": "N.K FABRICS Fine-Gauge Charcoal Merino Mockneck",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 720,
    "formattedPrice": "$720",
    "tagline": "Super 160s Merino Wool with 4cm Clean Mock Neckline",
    "description": "The modern minimalist alternative to the turtleneck. Sits cleanly at the base of the neck, creating an athletic, streamlined silhouette under suit jackets.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Charcoal Melange",
        "hex": "#28282B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Super 160s Worsted Merino Wool",
    "fabricOrigin": "Zegna Baruffa, Italy",
    "fit": "Slim Fit",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "4cm stand mock neckline with shape-memory elastic",
      "Fine 18-gauge knit for smooth layering"
    ]
  },
  {
    "id": "nk-sw-cashmere-hoodie-luxury",
    "name": "N.K FABRICS Sovereign Double-Knit Cashmere Lounge Hoodie",
    "category": "sweaters",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 1150,
    "formattedPrice": "$1,150",
    "tagline": "Heavy 4-Ply Pure Cashmere with Drawstring Hood & Kangaroo Pocket",
    "description": "The ultimate private jet and travel layer. Pure cashmere knit with an internal jersey face, solid brass eyelets, and hand-stitched kangaroo pocket.",
    "primaryImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Heather Oatmeal",
        "hex": "#D4CBBF"
      },
      {
        "name": "Pitch Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% 4-Ply Grade-A Mongolian Cashmere",
    "fabricOrigin": "Biella, Italy",
    "fit": "Relaxed Drape",
    "occasion": "Resort & Casual",
    "collection": "Limited Edition",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Cashmere knitted drawstring with metal aglets",
      "Seamless front kangaroo hand pocket",
      "Double-layer cashmere hood"
    ]
  },
  {
    "id": "nk-sw-cableknit-crewneck-ivory",
    "name": "N.K FABRICS Heavy Ivory Cashmere Cableknit Crewneck",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 1280,
    "formattedPrice": "$1,280",
    "tagline": "6-Ply Hand-Guided Cable Stitch in Unbleached Virgin Cashmere",
    "description": "Sculptural three-dimensional knitwear. Traditional rope and diamond cables hand-guided on manual flatbed machines using unbleached ivory cashmere.",
    "primaryImage": "/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Unbleached Ivory",
        "hex": "#FAF5EC"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% 6-Ply Virgin Cashmere",
    "fabricOrigin": "Piacenza 1733, Italy",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 36,
    "tailoringNotes": [
      "Intricate dimensional rope cable pattern",
      "Heavyweight thermal retention",
      "Hand-linked crewneck collar"
    ]
  },
  {
    "id": "nk-sw-vneck-cashmere-camel",
    "name": "N.K FABRICS Golden Camel Cashmere V-Neck Sweater",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 940,
    "formattedPrice": "$940",
    "tagline": "Pure Mongolian Cashmere in Classic Camel Tan",
    "description": "Warm, aristocratic, and timeless. Complements white and light blue shirting with soft golden warmth beneath navy and charcoal suiting.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Golden Camel",
        "hex": "#B58D56"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% 2-Ply Mongolian Cashmere",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 16,
    "tailoringNotes": [
      "Deep V-neck cut for tie display",
      "Ribbed waistband and cuffs",
      "Zero-pilling worsted yarns"
    ]
  },
  {
    "id": "nk-sw-waffle-knit-thermal-navy",
    "name": "N.K FABRICS Merino Wool Waffle-Knit Thermal Crewneck",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 780,
    "formattedPrice": "$780",
    "tagline": "Dimensional Waffle Honeycomb Texture in Super 140s Wool",
    "description": "Traps air within miniature knitted pockets for supreme warmth without weight. Modern waffle texture that pairs effortlessly with tailored chinos.",
    "primaryImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "hoverImage": "/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#101B2E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Super 140s Merino Wool (Waffle Knit)",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Essential Collection",
    "availability": "In Stock",
    "stockUnits": 34,
    "tailoringNotes": [
      "Three-dimensional thermal honeycomb stitch",
      "Raglan sleeves for enhanced shoulder movement"
    ]
  },
  {
    "id": "nk-sw-button-front-knit-vest",
    "name": "N.K FABRICS Cashmere-Wool Sleeveless V-Neck Vest",
    "category": "sweaters",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 650,
    "formattedPrice": "$650",
    "tagline": "Four-Button Fine-Gauge Knitted Vest for Business Layering",
    "description": "The lightweight alternative to a fabric waistcoat. Slips over dress shirts under suit jackets to provide torso warmth while keeping arms free.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Charcoal Heather",
        "hex": "#303030"
      },
      {
        "name": "Navy Blue",
        "hex": "#141E30"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "70% Merino Wool, 30% Mongolian Cashmere",
    "fabricOrigin": "Biella, Italy",
    "fit": "Slim Fit",
    "occasion": "Business & Boardroom",
    "collection": "Business Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Four real horn button closures",
      "Dual jetted micro-pockets",
      "Ribbed V-neckline"
    ]
  },
  {
    "id": "nk-acc-champagne-gold-cufflinks",
    "name": "N.K FABRICS 18K Champagne Gold Atelier Cufflinks",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 520,
    "formattedPrice": "$520",
    "tagline": "Solid Brass with 18K Champagne Gold PVD Satin Coating",
    "description": "Micro-engraved with the sovereign N.K monogram and atelier seal. Features a smooth whale-tail toggle mechanism engineered for French cuff shirts.",
    "primaryImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Champagne Gold",
        "hex": "#C8A97E"
      },
      {
        "name": "Sterling Silver",
        "hex": "#E2E2E2"
      }
    ],
    "sizes": [
      "One Size (16mm diameter)"
    ],
    "fabric": "Jewelry Grade Brass with 18K PVD Satin Gilding",
    "fabricOrigin": "Arezzo Gold Atelier, Italy",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 22,
    "tailoringNotes": [
      "Engraved with N.K FABRICS atelier circular seal",
      "Packaged in bespoke velvet presentation box",
      "Whale-tail toggle mechanism"
    ]
  },
  {
    "id": "nk-acc-silk-tie-midnight-navy",
    "name": "N.K FABRICS 7-Fold Mulberry Silk Tie (Midnight Navy)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 360,
    "formattedPrice": "$360",
    "tagline": "Untipped Hand-Rolled 7-Fold Pure Silk Twill",
    "description": "The zenith of haberdashery neckwear. Made from a single generous square of heavyweight Como silk, folded onto itself seven times without synthetic interlining.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#121A2A"
      },
      {
        "name": "Deep Black",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "8.5cm Width \u00d7 150cm Length"
    ],
    "fabric": "100% Heavyweight Como Silk Twill (36oz)",
    "fabricOrigin": "Como, Italy",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Pure 7-fold construction without synthetic canvas",
      "Hand-rolled edges with self-fabric keeper loop",
      "Pure Como silk"
    ]
  },
  {
    "id": "nk-acc-french-boxcalf-belt",
    "name": "N.K FABRICS Full-Grain French Calfskin Dress Belt (Black)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 450,
    "formattedPrice": "$450",
    "tagline": "30mm Feathered Edge French Boxcalf with Solid Brass Buckle",
    "description": "Hand-burnished feathered edge belt cut from French boxcalf leather, lined with soft nubuck and secured by a solid brass buckle plated in satin champagne palladium.",
    "primaryImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Nero Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Espresso Brown",
        "hex": "#2A1C16"
      }
    ],
    "sizes": [
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "Full-Grain French Boxcalf Leather",
    "fabricOrigin": "Tanneries d\u2019Annonay, France",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 39,
    "tailoringNotes": [
      "Solid brass buckle with satin palladium finish",
      "Five teardrop adjustment holes with beveled edges",
      "Nubuck leather interior lining"
    ]
  },
  {
    "id": "nk-acc-pocket-square-trio",
    "name": "N.K FABRICS Silk Pocket Square Trio (Hand-Rolled)",
    "category": "accessories",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 340,
    "formattedPrice": "$340",
    "tagline": "Set of Three Hand-Rolled Mulberry Silk Pocket Squares",
    "description": "Includes Champagne Gold Monogram, Sovereign White Hand-Piped, and Midnight Paisley squares. Each hem is rolled by hand with 4 stitches per centimeter.",
    "primaryImage": "/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Gold / White / Midnight",
        "hex": "#C8A97E"
      }
    ],
    "sizes": [
      "42cm \u00d7 42cm (Classic Large Flare)"
    ],
    "fabric": "100% Como Silk Twill (14 Momme)",
    "fabricOrigin": "Como, Italy",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Hand-rolled contrasting edges that flare with sculptural volume",
      "Presented in rigid embossed gold presentation box"
    ]
  },
  {
    "id": "nk-acc-reversible-cashmere-scarf",
    "name": "N.K FABRICS Reversible Double-Face Cashmere Scarf",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 680,
    "formattedPrice": "$680",
    "tagline": "Two-Tone Charcoal & Camel Pure Mongolian Cashmere with Fringed Hem",
    "description": "Finished with a natural teasel ripple water-finish that gives an iridescent wave across the surface. Reversible two-tone charcoal and camel weave.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Charcoal & Camel",
        "hex": "#3A3A3A"
      },
      {
        "name": "Navy & Grey",
        "hex": "#162238"
      }
    ],
    "sizes": [
      "45cm \u00d7 190cm"
    ],
    "fabric": "100% Pure Mongolian Cashmere with Teasel Finish",
    "fabricOrigin": "Johnstons of Elgin, Scotland",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Natural dried teasel thistle brushed ripple finish",
      "Hand-twisted fringe ends",
      "Reversible double-face design"
    ]
  },
  {
    "id": "nk-acc-solid-brass-collar-stays",
    "name": "N.K FABRICS Engraved Solid Brass Collar Stays (Trio Set)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 180,
    "formattedPrice": "$180",
    "tagline": "Solid Heavyweight Brass with Laser-Etched N.K Monogram",
    "description": "Set of three pairs (2.25\", 2.5\", and 2.75\") of substantial solid brass stays that give dress shirt collars an unyielding, crisp roll under jacket lapels.",
    "primaryImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Champagne Brass",
        "hex": "#C8A97E"
      }
    ],
    "sizes": [
      "Three Pairs: 2.25\", 2.5\", 2.75\""
    ],
    "fabric": "Heavyweight Solid Brass (3mm Thickness)",
    "fabricOrigin": "Birmingham Jewellery Quarter, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 31,
    "tailoringNotes": [
      "Includes saddle leather protective travel sheath",
      "Laser-etched with N.K FABRICS Savile Row crest"
    ]
  },
  {
    "id": "nk-acc-grenadine-tie-burgundy",
    "name": "N.K FABRICS Grenadine Grossa Silk Tie (Burgundy)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 380,
    "formattedPrice": "$380",
    "tagline": "Hand-Woven Italian Silk Grenadine on Historical Wooden Looms",
    "description": "The ultimate textured neckwear favored by bespoke gentlemen. The porous honeycomb grenadine grossa weave anchors collar points with tactile gravitas.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Bordeaux Burgundy",
        "hex": "#4A111E"
      },
      {
        "name": "Forest Green",
        "hex": "#142E1F"
      }
    ],
    "sizes": [
      "8.5cm Width \u00d7 150cm Length"
    ],
    "fabric": "100% Pure Italian Grenadine Grossa Silk",
    "fabricOrigin": "Fermo Fossati, Como, Italy",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Woven on 19th-century wooden shuttle looms in Como",
      "Untipped hand-rolled edges with wool interlining"
    ]
  },
  {
    "id": "nk-acc-black-onyx-formal-studs",
    "name": "N.K FABRICS Black Onyx & 18K Gold Tuxedo Stud Set",
    "category": "accessories",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 480,
    "formattedPrice": "$480",
    "tagline": "Natural Black Onyx Gemstones in 18K Gold-Plated Mountings",
    "description": "Strict black-tie evening essentials. Includes four shirt front studs and matching swivel cufflinks with natural cabochon black onyx stone faces.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Gold & Black Onyx",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "Four Studs & Two Cufflinks Set"
    ],
    "fabric": "Natural Black Onyx with 18K Gold Plated Brass",
    "fabricOrigin": "Arezzo, Italy",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Spring-loaded stud back mechanism for easy insertion",
      "Delivered in leather jewelry travel case"
    ]
  },
  {
    "id": "nk-acc-french-leather-bifold-wallet",
    "name": "N.K FABRICS Full-Grain Boxcalf Bifold Wallet (Nero)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 420,
    "formattedPrice": "$420",
    "tagline": "French Boxcalf Leather with Eight Card Slots & Cash Divider",
    "description": "Ultra-slim formal wallet engineered to sit flush inside suit jacket interior breast pockets without creating awkward exterior bulges.",
    "primaryImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Nero Black",
        "hex": "#0C0C0C"
      },
      {
        "name": "Cognac Brown",
        "hex": "#583D2A"
      }
    ],
    "sizes": [
      "11cm \u00d7 9.5cm (Ultra-Slim 7mm Profile)"
    ],
    "fabric": "Full-Grain French Boxcalf Leather & Moire Silk Lining",
    "fabricOrigin": "France & Florence, Italy",
    "fit": "Classic Formal",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 20,
    "tailoringNotes": [
      "Ultra-slim 7mm profile for suit jacket pocket fit",
      "Hand-painted and burnished edges",
      "Gold foil embossed N.K FABRICS seal"
    ]
  },
  {
    "id": "nk-acc-silk-evening-bow-tie",
    "name": "N.K FABRICS Self-Tie Mulberry Silk Satin Bow Tie (Black)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 240,
    "formattedPrice": "$240",
    "tagline": "Pure Silk Duchess Satin with Adjustable Collar Slider",
    "description": "Authentic self-tie bow tie with generous butterfly proportion (2.75 inches). Finished with adjustable brass hook slider for neck sizes 14.5 to 18.5.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "colors": [
      {
        "name": "Duchess Satin Black",
        "hex": "#080808"
      }
    ],
    "sizes": [
      "Adjustable 14.5\" - 18.5\" Neck"
    ],
    "fabric": "100% Pure Como Silk Duchess Satin",
    "fabricOrigin": "Como, Italy",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "In Stock",
    "stockUnits": 28,
    "tailoringNotes": [
      "Authentic self-tie butterfly shape",
      "Calibrated satin luster designed to match tuxedo lapels"
    ]
  },
  {
    "id": "nk-acc-irish-linen-pocket-square",
    "name": "N.K FABRICS Hand-Rolled Irish Linen Pocket Square (White)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 160,
    "formattedPrice": "$160",
    "tagline": "Pure Northern Irish Linen with Hand-Rolled Contrast Navy Edge",
    "description": "The cornerstone of sartorial pocket wear. Crisp, absorbent Irish linen that folds into sharp TV folds or casual puff folds without slipping.",
    "primaryImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "White with Navy Edge",
        "hex": "#FFFFFF"
      },
      {
        "name": "White with White Edge",
        "hex": "#FAFAFA"
      }
    ],
    "sizes": [
      "40cm \u00d7 40cm"
    ],
    "fabric": "100% Pure Irish Linen",
    "fabricOrigin": "Baird McNutt, Ireland",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 27,
    "tailoringNotes": [
      "100% hand-rolled edges taking 30 minutes of needlework",
      "Holds geometric architectural folds with crisp stance"
    ]
  },
  {
    "id": "nk-acc-suede-dress-belt-espresso",
    "name": "N.K FABRICS Italian Calf Suede Dress Belt (Espresso)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 420,
    "formattedPrice": "$420",
    "tagline": "32mm Feathered Suede with Brushed Satin Palladium Buckle",
    "description": "Rich, matte, and tactile. Lined with vegetable-tanned French vachetta leather, designed to pair with suede shoes and flannel tailoring.",
    "primaryImage": "/src/assets/images/suede_jacket_luxury_1791180724417.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Espresso Brown",
        "hex": "#2B1D16"
      },
      {
        "name": "Snuff Suede",
        "hex": "#634E3C"
      }
    ],
    "sizes": [
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "100% Italian Calf Suede & Vachetta Lining",
    "fabricOrigin": "Florence, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 30,
    "tailoringNotes": [
      "Feathered edge with tone-on-tone perimeter stitching",
      "Brushed palladium buckle"
    ]
  },
  {
    "id": "nk-acc-silk-evening-dress-scarf",
    "name": "N.K FABRICS Silk Evening Tubular Dress Scarf (Black & Ivory)",
    "category": "accessories",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 580,
    "formattedPrice": "$580",
    "tagline": "Double-Sided Jacquard Silk Tubular Scarf with Hand-Knotted Fringe",
    "description": "The pinnacle of black-tie winter elegance. Tubular double-faced Como silk draped casually over dinner suits, finished with 10cm hand-knotted macram\u00e9 fringe.",
    "primaryImage": "/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg",
    "hoverImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "colors": [
      {
        "name": "Black & Ivory Jacquard",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "35cm \u00d7 180cm + 10cm Fringe"
    ],
    "fabric": "100% Heavy Mulberry Silk Jacquard",
    "fabricOrigin": "Como, Italy",
    "fit": "Classic Formal",
    "occasion": "Evening Black-Tie",
    "collection": "Evening Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Hand-knotted macram\u00e9 silk fringe",
      "Tubular double-layer construction for plush drape"
    ]
  },
  {
    "id": "nk-acc-sterling-silver-cufflinks",
    "name": "N.K FABRICS Sterling Silver 925 Monogram Cufflinks",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 540,
    "formattedPrice": "$540",
    "tagline": "Solid 925 Sterling Silver with Hand-Engraved Guilloch\u00e9 Sunburst",
    "description": "Master jeweler craftsmanship. Solid hallmarked sterling silver featuring engine-turned guilloch\u00e9 ray engraving and an oval monogram center.",
    "primaryImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "hoverImage": "/src/assets/images/mn_formal_shirt_white_1790693673578.jpg",
    "colors": [
      {
        "name": "Polished Sterling Silver",
        "hex": "#E8E8E8"
      }
    ],
    "sizes": [
      "One Size (18mm \u00d7 13mm Oval)"
    ],
    "fabric": "Solid 925 Hallmarked Sterling Silver (18.5g)",
    "fabricOrigin": "Birmingham Jewellery Quarter, UK",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 17,
    "tailoringNotes": [
      "Engine-turned guilloch\u00e9 pattern",
      "Hallmarked with British Assay Office silver stamps",
      "Swivel torpedo back"
    ]
  },
  {
    "id": "nk-acc-egyptian-cotton-dress-socks",
    "name": "N.K FABRICS Mercerized Egyptian Cotton Dress Socks (Trio Pack)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 190,
    "formattedPrice": "$190",
    "tagline": "Set of Three Over-the-Calf Socks in Navy, Charcoal, and Black",
    "description": "Engineered never to fall down. Knitted in Italy on 240-needle machines using Fil d\u2019\u00c9cosse mercerized Egyptian cotton with hand-linked seamless toes.",
    "primaryImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Navy / Charcoal / Black",
        "hex": "#161E2E"
      }
    ],
    "sizes": [
      "Medium (UK 7-9 / US 8-10)",
      "Large (UK 10-12 / US 11-13)"
    ],
    "fabric": "100% Fil d\u2019\u00c9cosse Double-Mercerized Egyptian Cotton",
    "fabricOrigin": "Brescia, Italy",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 15,
    "tailoringNotes": [
      "Over-the-calf height staying up throughout 16-hour days",
      "Hand-linked seamless toe eliminating rubbing friction",
      "Reinforced heel and toe cups"
    ]
  },
  {
    "id": "nk-acc-cashmere-winter-socks",
    "name": "N.K FABRICS Grade-A Pure Cashmere Winter Socks (Charcoal)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 220,
    "formattedPrice": "$220",
    "tagline": "85% Mongolian Cashmere, 15% Stretch Nylon for Shape Memory",
    "description": "The ultimate winter indulgence for gentlemen. Ultra-soft Mongolian cashmere keeping feet blissfully warm inside bespoke dress shoes.",
    "primaryImage": "/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Charcoal Cashmere",
        "hex": "#2F2F32"
      }
    ],
    "sizes": [
      "Medium (US 8-10)",
      "Large (US 11-13)"
    ],
    "fabric": "85% Grade-A Mongolian Cashmere, 15% Nylon",
    "fabricOrigin": "Biella, Italy",
    "fit": "Tailored Regular",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 22,
    "tailoringNotes": [
      "Hand-linked toe seam",
      "Ribbed leg providing gentle stay-up hold"
    ]
  },
  {
    "id": "nk-acc-silk-knit-tie-black",
    "name": "N.K FABRICS Italian Silk Knit Square-End Tie (Black)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 320,
    "formattedPrice": "$320",
    "tagline": "Knitted Cri de la Soie Silk on Vintage Tubular Knitting Machines",
    "description": "Crunchy, tactile silk knit that bridges formal and casual wear. The characteristic crunchy handfeel (cri de la soie) pairs impeccably with flannel suits.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg",
    "colors": [
      {
        "name": "Pitch Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Midnight Navy",
        "hex": "#101B2E"
      }
    ],
    "sizes": [
      "6.5cm Width \u00d7 148cm Length"
    ],
    "fabric": "100% Pure Italian Knitted Silk",
    "fabricOrigin": "Como, Italy",
    "fit": "Tailored Regular",
    "occasion": "Everyday Luxury",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 25,
    "tailoringNotes": [
      "Authentic square bottom hem",
      "Unlined tubular knit with grosgrain neckband for collar comfort"
    ]
  },
  {
    "id": "nk-acc-cashmere-flannel-tie-grey",
    "name": "N.K FABRICS English Cashmere Flannel Tie (Mid-Grey)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 340,
    "formattedPrice": "$340",
    "tagline": "90% Wool, 10% Cashmere Flannel Untipped Necktie",
    "description": "Matte cold-weather sophistication. Brushed wool-cashmere flannel with soft hand-rolled edges, offering substantial texture under chalk stripe suiting.",
    "primaryImage": "/src/assets/images/hero_mn_editorial_models_1790693257303.jpg",
    "hoverImage": "/src/assets/images/chalk_stripe_suit_1791180278649.jpg",
    "colors": [
      {
        "name": "Mid-Grey Flannel",
        "hex": "#666668"
      }
    ],
    "sizes": [
      "8.5cm Width \u00d7 150cm Length"
    ],
    "fabric": "90% English Wool, 10% Cashmere Flannel",
    "fabricOrigin": "Somerset, UK & Como, Italy",
    "fit": "Classic Formal",
    "occasion": "Winter Collection",
    "collection": "Winter Collection",
    "availability": "In Stock",
    "stockUnits": 35,
    "tailoringNotes": [
      "Untipped hand-rolled edges",
      "Self-fabric keeper loop and hand-basted bar tacks"
    ]
  },
  {
    "id": "nk-acc-champagne-lapel-pin",
    "name": "N.K FABRICS Champagne Gold Rose Flower Lapel Pin",
    "category": "accessories",
    "isNewArrival": true,
    "isBestSeller": false,
    "price": 260,
    "formattedPrice": "$260",
    "tagline": "Hand-Cast Solid Brass Gilded in 18K Champagne Gold with Boutonni\u00e8re Stem",
    "description": "The subtle mark of distinction. A sculptured miniature rose bud cast in solid brass with an extended needle pin designed to slide into bespoke lapel flower loops.",
    "primaryImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "hoverImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "colors": [
      {
        "name": "Champagne Gold",
        "hex": "#C8A97E"
      }
    ],
    "sizes": [
      "12mm Flower Head \u00d7 65mm Pin Stem"
    ],
    "fabric": "Solid Brass with 18K PVD Champagne Gold Gilding",
    "fabricOrigin": "Arezzo, Italy",
    "fit": "Classic Formal",
    "occasion": "Wedding & Gala",
    "collection": "Signature Collection",
    "availability": "Bespoke Commission",
    "stockUnits": 6,
    "tailoringNotes": [
      "Designed specifically to slide through Milanese lapel buttonholes",
      "Protective safety end cap included"
    ]
  },
  {
    "id": "nk-acc-french-calfskin-cardholder",
    "name": "N.K FABRICS Slim Boxcalf Cardholder with Monogram (Black)",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": true,
    "price": 280,
    "formattedPrice": "$280",
    "tagline": "Four Card Slots with Central Cash Pocket in French Boxcalf",
    "description": "Ultra-compact cardholder measuring just 4mm thickness. Hand-painted edges with gold hot-stamped N.K FABRICS atelier emblem.",
    "primaryImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg",
    "colors": [
      {
        "name": "Nero Black",
        "hex": "#0A0A0A"
      }
    ],
    "sizes": [
      "10cm \u00d7 7cm (4mm Ultra-Slim)"
    ],
    "fabric": "100% Full-Grain French Boxcalf Leather",
    "fabricOrigin": "France",
    "fit": "Classic Formal",
    "occasion": "Everyday Luxury",
    "collection": "N.K FABRICS Essentials",
    "availability": "In Stock",
    "stockUnits": 28,
    "tailoringNotes": [
      "Four card slots with central lined banknote sleeve",
      "Hand-burnished edges"
    ]
  },
  {
    "id": "nk-acc-long-coat-breast-wallet",
    "name": "N.K FABRICS Executive Long Coat Breast Pocket Wallet",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 520,
    "formattedPrice": "$520",
    "tagline": "Twelve Card Slots, Dual Banknote Sleeves in Full-Grain Boxcalf",
    "description": "The gentleman\u2019s traditional coat wallet. Sits completely flat inside suit jacket breast pockets, holding unfolded international currency and cards.",
    "primaryImage": "/src/assets/images/mn_suit_black_signature_1790693702392.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Nero Black",
        "hex": "#080808"
      },
      {
        "name": "Espresso Brown",
        "hex": "#251710"
      }
    ],
    "sizes": [
      "18.5cm \u00d7 9.5cm (Flat Profile)"
    ],
    "fabric": "Full-Grain French Calfskin with Silk Lining",
    "fabricOrigin": "Florence, Italy",
    "fit": "Classic Formal",
    "occasion": "Business & Boardroom",
    "collection": "Signature Collection",
    "availability": "In Stock",
    "stockUnits": 17,
    "tailoringNotes": [
      "Twelve credit card slots and two full-length currency sleeves",
      "Designed to fit suit interior breast pockets without bulging"
    ]
  },
  {
    "id": "nk-acc-braided-leather-belt-brown",
    "name": "N.K FABRICS Hand-Braided Vegetable Tanned Leather Belt",
    "category": "accessories",
    "isNewArrival": false,
    "isBestSeller": false,
    "price": 390,
    "formattedPrice": "$390",
    "tagline": "35mm Hand-Woven Italian Saddle Leather with Solid Brass Buckle",
    "description": "Artisanal flexibility. Platted by hand from supple vegetable-tanned bridle leather, allowing the buckle prong to pass through any point for customized fit.",
    "primaryImage": "/src/assets/images/casual_linen_shirt_1791180740922.jpg",
    "hoverImage": "/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg",
    "colors": [
      {
        "name": "Chestnut Brown",
        "hex": "#543621"
      },
      {
        "name": "Black Leather",
        "hex": "#0C0C0C"
      }
    ],
    "sizes": [
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "fabric": "100% Vegetable-Tanned Italian Bridle Leather",
    "fabricOrigin": "Tuscany, Italy",
    "fit": "Tailored Regular",
    "occasion": "Resort & Casual",
    "collection": "Summer Collection",
    "availability": "In Stock",
    "stockUnits": 26,
    "tailoringNotes": [
      "Solid brass buckle with satin antique brass finish",
      "Micro-adjustable braided weave without pre-punched holes"
    ]
  }
];
