export interface GarmentProduct {
  id: string;
  name: string;
  category: 'formal' | 'traditional' | 'essentials' | 'evening';
  price: string;
  tagline: string;
  colorName: string;
  colorHex: string;
  fabric: string;
  fabricOrigin: string;
  cut: string;
  lapel: string;
  waistcoat: string;
  shirtPairing: string;
  trouserTailoring: string;
  buttonDetails: string;
  stitching: string;
  image: string;
  description: string;
  features: string[];
}

// Generated fashion assets
const HERO_MODELS = '/src/assets/images/hero_mn_editorial_models_1790693257303.jpg';
const FORMAL_SUIT = '/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg';
const TRADITIONAL_SUIT = '/src/assets/images/founder_couture_hero_1790909201612.jpg';
const ESSENTIALS_POLO = '/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg';
const EVENING_SUIT = '/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg';
const FABRIC_TEXTURE = '/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg';
const PACKAGING_IMG = '/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg';
const CHALK_STRIPE = '/src/assets/images/chalk_stripe_suit_1791180278649.jpg';
const PRINCE_COAT = '/src/assets/images/prince_coat_royal_1791180264486.jpg';
const EMERALD_SILK = '/src/assets/images/emerald_silk_kameez_1791180291920.jpg';

export const FASHION_CATEGORIES = [
  {
    id: 'formal',
    title: 'FORMAL',
    subtitle: 'THE SARTORIAL ARCHITECTURE',
    description: 'Premium suits, waistcoats, shirts and tailored trousers.',
    image: FORMAL_SUIT,
    itemCount: '18 Bespoke Commissions',
  },
  {
    id: 'traditional',
    title: 'TRADITIONAL',
    subtitle: 'HERITAGE REIMAGINED',
    description: 'Premium shalwar kameez, kurtas and refined traditional wear.',
    image: TRADITIONAL_SUIT,
    itemCount: '14 Hand-Crafted Silhouettes',
  },
  {
    id: 'essentials',
    title: 'ESSENTIALS',
    subtitle: 'NOBLE CASUAL ELEVATION',
    description: 'Premium T-shirts, polo shirts and everyday refined clothing.',
    image: ESSENTIALS_POLO,
    itemCount: '12 Quiet Luxury Staples',
  },
  {
    id: 'evening',
    title: 'EVENING',
    subtitle: 'GRAND OCCASION WEAR',
    description: 'Elegant formal outfits for special occasions.',
    image: EVENING_SUIT,
    itemCount: '8 Sovereign Ensembles',
  },
];

export const SUIT_COLLECTION: GarmentProduct[] = [
  {
    id: 'mn-suit-midnight-navy',
    name: 'The Sovereign Navy Three-Piece',
    category: 'formal',
    price: '$3,850',
    tagline: 'Super 150s Tasmanian Merino Wool with Matching Double-Breasted Waistcoat',
    colorName: 'Midnight Navy',
    colorHex: '#121A2A',
    fabric: 'Super 150s Pure Virgin Tasmanian Wool (260g/m)',
    fabricOrigin: 'Dormeuil Mill, Huddersfield & Biella',
    cut: 'Savile Row Structured Silhouette with Roped Shoulder',
    lapel: 'Broad 3.75-Inch Peak Lapel with Milanese Silk Buttonhole',
    waistcoat: 'Six-Button Double-Breasted Horseshoe Waistcoat with Satin Back',
    shirtPairing: 'Sea Island 200/2 Cotton Poplin in Pure Ivory with French Cuffs',
    trouserTailoring: 'High-Rise, Extended 2-Button Tab Closure, Deep Inward Pleats, Side Buckle Adjusters',
    buttonDetails: 'Hand-Polished Black Buffalo Horn with Micro-Etched N.K FABRICS Monogram',
    stitching: 'Hand-Executed 1.5mm AMF Pick Stitching along Lapels, Flaps, and Vents',
    image: FORMAL_SUIT,
    description: 'The defining statement of modern tailoring. Hand-canvassed with horsehair chest piece for a natural roll that moulds to your posture. Paired with a tailored double-breasted waistcoat that sculpts the chest and creates an impeccable waistline.',
    features: [
      'Full floating horsehair canvas construction',
      'Hand-attached silk armhole sweat shields',
      'Interior silk damask N.K FABRICS woven maker label with tailor serial number',
      'Unfinished trouser hems for bespoke alteration to exact inseam',
    ],
  },
  {
    id: 'mn-suit-noir-black',
    name: 'The Imperial Noir Formal Suit',
    category: 'formal',
    price: '$4,200',
    tagline: 'Deep Midnight Black Wool-Cashmere Blend with Tonal Satin Piping',
    colorName: 'Deep Black',
    colorHex: '#0C0C0C',
    fabric: '90% Super 160s Wool, 10% Mongolian Cashmere (270g/m)',
    fabricOrigin: 'Loro Piana, Quarona, Italy',
    cut: 'Contemporary Tailored 2-Button Single-Breasted Cut',
    lapel: 'Classic 3.25-Inch Notch Lapel with Hand-Basted Silk Facing',
    waistcoat: 'Five-Button Single-Breasted Tailored Waistcoat with Jetted Pockets',
    shirtPairing: 'Egyptian Giza 45 Cotton Twill Shirt with Mother-of-Pearl Buttons',
    trouserTailoring: 'Mid-Rise Flat Front, Side Tabs, 2-Inch Turn-Up Cuff Option',
    buttonDetails: 'Matte Smoky Horn Buttons with Laser-Cut Atelier Rim',
    stitching: 'Precision French Seams and Blind Hems Throughout',
    image: FABRIC_TEXTURE,
    description: 'A masterpiece of deep-black sartorial architecture. Designed for formal state dinners, gala ceremonies, and high-stakes executive presence. The cashmere infusion yields an extraordinarily soft hand and gentle drape under gallery spotlights.',
    features: [
      'Deep black chromatic dye resistant to artificial light flare',
      'Interior passport and cigar pockets with pen sleeve',
      'Pick-stitched cupro lining with subtle champagne contrast thread',
    ],
  },
  {
    id: 'mn-suit-charcoal-flannel',
    name: 'The Mayfair Charcoal Three-Piece',
    category: 'formal',
    price: '$3,600',
    tagline: 'Worsted English Charcoal Flannel with High-V Waistcoat',
    colorName: 'Charcoal',
    colorHex: '#222222',
    fabric: 'English Worsted Flannel (310g/m) with Natural Stretch',
    fabricOrigin: 'Fox Brothers & Co., Somerset, UK',
    cut: 'Traditional Drape Cut with Gentle Waist Suppression',
    lapel: 'Generous Notch Lapel with Flower Loop on Under-Collar',
    waistcoat: 'Five-Button High-V Waistcoat with Watch Chain Buttonhole',
    shirtPairing: 'Pale Blue End-on-End Formal Shirt with Semi-Spread Collar',
    trouserTailoring: 'Classic Tailored Cut, Suspender Buttons Installed, Flat Front',
    buttonDetails: 'Mottled Dark Horn Buttons with 4-Hole Hand-Cross Stitched Thread',
    stitching: 'Single-Needle Clean Edge Topstitch',
    image: HERO_MODELS,
    description: 'The definitive executive power suit. Crafted from legendary Somerset flannel, offering substantial body, flawless crease recovery, and an authoritative presence that commands respect in every boardroom and summit.',
    features: [
      'Substantial flannel drape that sharpens body lines',
      'Double rear vents engineered to prevent bunching when seated',
      'Full cupro lining printed with tonal N.K FABRICS monogram micro-crest',
    ],
  },
  {
    id: 'mn-suit-deep-brown',
    name: 'The Espresso Peak-Lapel Evening Suit',
    category: 'evening',
    price: '$4,100',
    tagline: 'Deep Espresso Brown Wool-Silk with Lustrous Satin Lapel Facing',
    colorName: 'Deep Brown',
    colorHex: '#251C17',
    fabric: '75% Fine Wool, 25% Mulberry Silk (240g/m)',
    fabricOrigin: 'Ermenegildo Zegna Lanificio, Trivero, Italy',
    cut: 'One-Button Cocktail Evening Cut with S-Curve Waistline',
    lapel: 'Silk Satin Faced Dramatic Peak Lapel',
    waistcoat: 'Low-Scoop Evening Waistcoat in Matching Espresso Satin',
    shirtPairing: 'Textured Marcella Piqué Formal Shirt with Covered Placket',
    trouserTailoring: 'Narrower Leg Opening with 18mm Silk Satin Side Braid',
    buttonDetails: 'Fabric-Covered Silk Satin Tuxedo Buttons',
    stitching: 'Ultra-Fine Invisible Hand-Blindstitch',
    image: EVENING_SUIT,
    description: 'An unconventional evening triumph. Replacing traditional black tie with an opulent deep espresso brown that absorbs evening ambient lighting with mesmerizing warmth. Accented with pure silk satin lapels and a matching low-scoop waistcoat.',
    features: [
      'Mulberry silk blend gives off a subtle nocturnal glow',
      'Silk satin braided trouser outseams',
      'Internal smartphone pocket with silk microfiber lens wipe',
    ],
  },
  {
    id: 'mn-suit-dark-grey',
    name: 'The Milanese Dark Grey Sartorial Suit',
    category: 'formal',
    price: '$3,450',
    tagline: 'Anthracite Fine Twill with Modern Soft-Spalla Camicia Shoulder',
    colorName: 'Dark Grey',
    colorHex: '#303030',
    fabric: 'Super 130s All-Season High-Twist Wool (250g/m)',
    fabricOrigin: 'Vitale Barberis Canonico, Biella, Italy',
    cut: 'Neapolitan Soft-Tailored Cut with Shirt-Sleeve Shoulder',
    lapel: 'High Gorge Notch Lapel with Softly Pressed Roll',
    waistcoat: 'Optional Minimalist Single-Breasted V-Vest',
    shirtPairing: 'White Cotton Royal Oxford with Cutaway Collar',
    trouserTailoring: 'Tapered Cut, Single Reverse Pleat, Side Adjusters',
    buttonDetails: 'Natural Dark Buffalo Horn with Matte Buff Finish',
    stitching: 'Continuous Hand-Pick Stitching on All Edges',
    image: FORMAL_SUIT,
    description: 'Lightweight, unstructured shoulder architecture combining Savile Row precision with relaxed Milanese ease. High-twist yarn naturally resists wrinkles during intercontinental travel while retaining crisp creases.',
    features: [
      'Spalla camicia shirt-shoulder for complete arm mobility',
      'Crease-resistant high-twist yarn ideal for frequent flying',
      'Barchetta curved breast pocket for handkerchief flare',
    ],
  },
  {
    id: 'mn-suit-cream-worsted',
    name: 'The Rivera Cream Tropical Three-Piece',
    category: 'evening',
    price: '$3,950',
    tagline: 'Unbleached Cream Worsted Wool with Pearlized Double-Breasted Waistcoat',
    colorName: 'Cream',
    colorHex: '#ECE7DD',
    fabric: 'Tropical High-Ventilation Worsted Wool (220g/m)',
    fabricOrigin: 'Holland & Sherry, Savile Row, London',
    cut: 'Relaxed Imperial Double-Breasted 4x2 Silhouette',
    lapel: 'Sweeping 4-Inch Peak Lapel with Milanese Buttonhole',
    waistcoat: 'Double-Breasted Cream Silk-Wool Horseshoe Waistcoat',
    shirtPairing: 'Fine Off-White Voile Shirt with French Cuffs',
    trouserTailoring: 'High-Waist Hollywood Style with Double Forward Pleats and 2-Inch Cuffs',
    buttonDetails: 'Carved Mother-of-Pearl Buttons with Natural Iridescent Sheen',
    stitching: 'Contrast Ivory Silk Pick Stitching',
    image: ESSENTIALS_POLO,
    description: 'The pinnacle of warm-weather nobility. Woven in an airy open tropical weave that permits breeze while sustaining crisp structure. Finished with lustrous natural mother-of-pearl buttons that catch sunlight effortlessly.',
    features: [
      'Open-weave tropical wool for maximum airflow and cooling',
      'Pure cupro quarter-lining for breathability',
      'Hollywood high-waist trousers with interior grip tape',
    ],
  },
  {
    id: 'mn-suit-chalk-stripe',
    name: 'The Savile Row Chalk Stripe Three-Piece',
    category: 'formal',
    price: '$4,400',
    tagline: 'English Worsted Navy Chalk Stripe with Sculpted High-V Waistcoat',
    colorName: 'Navy Chalk Stripe',
    colorHex: '#152238',
    fabric: 'English Worsted Flannel with Natural Chalk Pinstripe (320g/m)',
    fabricOrigin: 'Fox Brothers & Co., Somerset, UK',
    cut: 'Savile Row Structured Silhouette with Roped Shoulders',
    lapel: 'Classic 3.75-Inch Peak Lapels with Milanese Buttonhole',
    waistcoat: 'Six-Button High-V Waistcoat with Watch Chain Pocket Eyelet',
    shirtPairing: 'Royal Poplin 200/2 White Dress Shirt with French Double Cuffs',
    trouserTailoring: 'High-Rise, Double Forward Pleats, Brass Side Tab Adjusters',
    buttonDetails: 'Hand-Carved Black Buffalo Horn with Micro-Engraved Insignia',
    stitching: '1.5mm AMF Artisan Pick Stitching',
    image: CHALK_STRIPE,
    description: 'The definitive power suit. Sculpted with authentic Savile Row roped shoulders, a hand-padded floating horsehair canvas, and an authoritative chalk stripe flannel woven in Somerset.',
    features: [
      'Genuine English chalk stripe flannel with natural drape',
      'Matching six-button sculpted high-V waistcoat',
      'Double rear vents engineered for crease-free posture',
    ],
  },
];

export const TRADITIONAL_COLLECTION = [
  {
    id: 'mn-trad-noir-kurta',
    name: 'The Imperial Noir Shalwar Kameez',
    category: 'traditional',
    price: '$1,850',
    tagline: 'Hand-Spun Raw Mulberry Silk with Tailored Structured Waistcoat',
    fabric: 'Pure Raw Silk with Dense Weave & Heavy Natural Drape',
    details: 'Structured Mandarin Collar with Single-Needle Pick Stitch, Hidden Placket with Hand-Carved Buffalo Horn Buttons, Deep Cuffs with French Cufflink Slits.',
    waistcoatPairing: 'Includes Tailored Charcoal Wool Waistcoat with Silk Collar',
    image: TRADITIONAL_SUIT,
    description: 'A monument of Pakistani luxury heritage. We hand-loom pure mulberry raw silk with deliberate slub textures, then tailor it to Savile Row proportions. The mandarin collar stands firm with custom horsehair interfacing, framed by a tailored waistcoat.',
  },
  {
    id: 'mn-trad-emerald-ensemble',
    name: 'The Viceroy Emerald Raw Silk Kameez Suit',
    category: 'traditional',
    price: '$1,950',
    tagline: 'Imperial Forest Green Raw Silk with Matching Sculpted Waistcoat',
    fabric: '100% Hand-Loomed Raw Mulberry Silk with Natural Slubs (280g/m)',
    details: 'Mandarin Collar with Gold Metallic Piped Boundary, Concealed Mobile Pocket in Side Seam, Horn Buttons with Gold Loop Fasteners.',
    waistcoatPairing: 'Includes Matching Emerald Velvet Waistcoat with Bullion Threadwork',
    image: EMERALD_SILK,
    description: 'An imperial green masterwork created for milestone wedding banquets and royal ceremonies. Handcrafted from heavy raw silk that absorbs evening ambient lighting with mesmerizing depth.',
  },
  {
    id: 'mn-trad-prince-coat-regal',
    name: 'The Sovereign Velvet Royal Prince Coat Suit',
    category: 'traditional',
    price: '$2,850',
    tagline: 'Italian Cotton-Silk Black Velvet with 24K Gold Zardozi Bullion Collar',
    fabric: 'Heavy Venetian Silk-Cotton Velvet (380g/m)',
    details: 'Mandarin Stand Collar Adorned with Handcrafted Gold Bullion Zardozi Embroidery, Solid Gilded Crest Buttons, Tailored Straight Trouser Pajama.',
    waistcoatPairing: 'Structured Full-Canvas Silhouette with Internal Double-Breasted Fastener',
    image: PRINCE_COAT,
    description: 'The supreme formal garment of South Asian aristocratic tradition. Over 90 hours of dedicated artisan hand-embroidery and Savile Row chest padding for an unyielding regal stature.',
  },
  {
    id: 'mn-trad-ivory-royal',
    name: 'The Sovereign Ivory Egyptian Cotton Kameez',
    category: 'traditional',
    price: '$1,450',
    tagline: 'Giza 87 Egyptian Cotton with Micro-Corded Collar & Tailored Trouser Pajama',
    fabric: '200/2 Compact Egyptian Cotton with Silk-Finish Luster',
    details: 'Precision Band Collar with 1mm Embroidered Piping, French Seams, Straight Cut Silhouette with Tailored Side Slits and Concealed Mobile Pocket.',
    waistcoatPairing: 'Pairs with Deep Navy or Midnight Black Tailored Waistcoat',
    image: HERO_MODELS,
    description: 'Crafted from the finest long-staple cotton harvested along the Nile river basin. Delivers an impossibly smooth, cool-to-touch sensation and a sculptural drape that remains crease-free throughout long ceremonial celebrations.',
  },
  {
    id: 'mn-trad-sandstone-ensemble',
    name: 'The Sandstone Textured Silk Kurta Kameez',
    category: 'traditional',
    price: '$1,650',
    tagline: 'Warm Beige Matka Silk with Gold Bullion Collar Accent',
    fabric: 'Hand-Loomed Matka Raw Silk (300g/m)',
    details: 'Band Collar with Discreet N.K FABRICS Champagne Gold Needlepoint, Four-Button Placket with N.K Micro-Engraved Buttons, Tailored Cuffs with Button Closure.',
    waistcoatPairing: 'Pairs with Matching Sandstone Silk Waistcoat with Grosgrain Trim',
    image: ESSENTIALS_POLO,
    description: 'An earthen, regal palette honoring centuries of bespoke South Asian tailoring. The thick texture of Matka silk provides majestic volume and thermal comfort for winter weddings and evening banquets.',
  },
];

export const ESSENTIALS_COLLECTION = [
  {
    id: 'mn-ess-knit-polo',
    name: 'The Royal Cashmere-Silk Knit Polo',
    price: '$780',
    tagline: '18-Gauge Seamless Knit in Off-White Cream',
    fabric: '70% Grade-A Mongolian Cashmere, 30% Mulberry Silk',
    details: 'One-Piece Self-Fabric Shirt Collar, Mother-of-Pearl 3-Button Placket, Ribbed Hem Designed to Be Worn Untucked or Tucked into Tailored Trousers.',
    image: ESSENTIALS_POLO,
  },
  {
    id: 'mn-ess-pleated-trouser',
    name: 'The Riviera High-Rise Pleated Trousers',
    price: '$890',
    tagline: 'Super 130s High-Twist Charcoal Wool with Extended Tab',
    fabric: '100% Wool Fresco High-Twist (280g/m)',
    details: 'Double Forward Pleats, Side Buckle Adjusters, Deep 4cm Turn-Up Cuff, Slanted Side Pockets, Split Rear Fishtail Waistband for Suspenders.',
    image: FORMAL_SUIT,
  },
  {
    id: 'mn-ess-formal-shirt',
    name: 'The Savile Row French Cuff Shirt',
    price: '$650',
    tagline: 'Swiss Giza 45 Cotton Poplin in Crisp Ivory',
    fabric: '100% Giza 45 Long-Staple Egyptian Cotton',
    details: 'Semi-Spread Collar with Removable Brass Stays, Double French Cuffs with N.K FABRICS Laser-Engraved Cufflink Slots, 22 Stitches per Inch.',
    image: FABRIC_TEXTURE,
  },
  {
    id: 'mn-ess-pima-tee',
    name: 'The Heavyweight Mercerized Pima T-Shirt',
    price: '$380',
    tagline: '280gsm Ultra-Fine Peruvian Pima Cotton in Deep Noir',
    fabric: '100% Long-Staple Mercerized Pima Cotton',
    details: 'Ribbed Bound Crewneck Collar that Never Sags, Subtle Blind Hems, Embroidered Tone-on-Tone N.K FABRICS Monogram at Left Hip Hem.',
    image: HERO_MODELS,
  },
];
