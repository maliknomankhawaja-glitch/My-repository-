const fs = require('fs');

const IMAGES = {
  BLACK_SUIT: '/src/assets/images/mn_suit_black_signature_1790693702392.jpg',
  NAVY_SUIT: '/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg',
  CHALK_STRIPE: '/src/assets/images/chalk_stripe_suit_1791180278649.jpg',
  EVENING_SUIT: '/src/assets/images/fashion_evening_suit_cut_1790693303536.jpg',
  HERO_MODELS: '/src/assets/images/hero_mn_editorial_models_1790693257303.jpg',
  TRAD_BLACK: '/src/assets/images/founder_couture_hero_1790909201612.jpg',
  EMERALD_SILK: '/src/assets/images/emerald_silk_kameez_1791180291920.jpg',
  PRINCE_COAT: '/src/assets/images/prince_coat_royal_1791180264486.jpg',
  TRAD_IVORY: '/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg',
  TRAD_GREEN: '/src/assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg',
  SHIRT_WHITE: '/src/assets/images/mn_formal_shirt_white_1790693673578.jpg',
  CASUAL_SHIRT: '/src/assets/images/casual_linen_shirt_1791180740922.jpg',
  SUEDE_JACKET: '/src/assets/images/suede_jacket_luxury_1791180724417.jpg',
  TROUSER_CHARCOAL: '/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg',
  ESSENTIALS_POLO: '/src/assets/images/fashion_essentials_polo_trouser_1790693292165.jpg',
  BACK_PROFILE: '/src/assets/images/mn_suit_back_profile_1790694103656.jpg',
  FABRIC_DETAIL: '/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg',
  PACKAGING: '/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg',
  TAG_TEXTURE: '/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg',
};

const allProducts = [];

function add(item) {
  allProducts.push(item);
}

// Write the full catalog generator
console.log('Script initialized.');
