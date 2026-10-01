import React, { useState, useRef } from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';
import { ShopProduct, ALL_PRODUCTS } from '../data/shopProducts.ts';
import { SizeGuideModal } from './SizeGuideModal.tsx';

// Photorealistic assets for the 8-angle gallery
const IMG_FRONT = '/src/assets/images/mn_suit_black_signature_1790693702392.jpg';
const IMG_BACK = '/src/assets/images/mn_suit_back_profile_1790694103656.jpg';
const IMG_SIDE = '/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg';
const IMG_FABRIC = '/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg';
const IMG_COLLAR = '/src/assets/images/mn_formal_shirt_white_1790693673578.jpg';
const IMG_CUFF = '/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg';
const IMG_TROUSER = '/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg';
const IMG_STYLING = '/src/assets/images/hero_mn_editorial_models_1790693257303.jpg';

// Packaging Assets
const IMG_PACKAGING_UNBOXING = '/src/assets/images/mn_packaging_unboxing_suite_1790694123903.jpg';
const IMG_PACKAGING_BAG = '/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg';

interface ProductDetailPageProps {
  onBackToShop: () => void;
  onAddToBag: (product: ShopProduct, size: string, color: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: ShopProduct) => void;
  product?: ShopProduct | null;
  onCheckout?: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onBackToShop,
  onAddToBag,
  wishlistIds,
  onToggleWishlist,
  onSelectProduct,
  product,
  onCheckout,
}) => {
  const currentProduct = product || ALL_PRODUCTS[0]; // defaults to N.K FABRICS Black Signature Suit

  // Gallery Angles - dynamically tailored with current product images
  const GALLERY_ANGLES = [
    { id: 'front', label: '1. Full Front View', image: currentProduct.primaryImage || IMG_FRONT },
    { id: 'back', label: '2. Full Back View', image: currentProduct.hoverImage || IMG_BACK },
    { id: 'side', label: '3. Profile Silhouette', image: IMG_SIDE },
    { id: 'fabric', label: '4. Fabric Texture Detail', image: IMG_FABRIC },
    { id: 'collar', label: '5. Collar & Shirt Pairing', image: IMG_COLLAR },
    { id: 'cuff', label: '6. Cuffs & Horn Buttons', image: IMG_CUFF },
    { id: 'trouser', label: '7. Trouser Tailoring & Pleats', image: IMG_TROUSER },
    { id: 'styling', label: '8. Complete Outfit Styling', image: IMG_STYLING },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    currentProduct.colors && currentProduct.colors.length > 0
      ? currentProduct.colors[0].name
      : 'Deep Black'
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    currentProduct.sizes && currentProduct.sizes.length > 0
      ? currentProduct.sizes[0]
      : 'M'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('description');
  const [toastNotification, setToastNotification] = useState<string | null>(null);

  // Touch swipe detection for mobile gallery
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 40) {
      // Swiped left -> next
      setActiveImageIndex((prev) => (prev < GALLERY_ANGLES.length - 1 ? prev + 1 : 0));
    } else if (distance < -40) {
      // Swiped right -> prev
      setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ANGLES.length - 1));
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Styling Section Checks
  const [stylingShirtAdded, setStylingShirtAdded] = useState<boolean>(false);
  const [stylingWaistcoatAdded, setStylingWaistcoatAdded] = useState<boolean>(false);

  const isWishlisted = wishlistIds.includes(currentProduct.id);

  const SIZES = currentProduct.sizes && currentProduct.sizes.length > 0
    ? currentProduct.sizes
    : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const COLOR_OPTIONS = currentProduct.colors && currentProduct.colors.length > 0
    ? currentProduct.colors.map((c) => ({
        name: c.name,
        hex: c.hex,
        code: `${c.name} Couture Grade`,
      }))
    : [
        { name: 'Deep Black', hex: '#0C0C0C', code: 'Noir Black 6 C' },
        { name: 'Charcoal', hex: '#1E1E1E', code: 'Anthracite 19-4007' },
        { name: 'Navy', hex: '#121A2A', code: 'Midnight Navy 19-3921' },
        { name: 'Deep Brown', hex: '#251C17', code: 'Espresso 19-1218' },
        { name: 'Grey', hex: '#303030', code: 'Classic Grey 18-0403' },
      ];

  const REVIEWS = [
    {
      id: 'rev-1',
      name: 'Julian Montgomery-Sterling',
      location: 'Mayfair, London',
      rating: 5,
      date: 'September 2026',
      title: 'Savile Row precision at its highest echelon',
      comment:
        'The floating horsehair canvas drapes effortlessly across the shoulders. The lapel pick-stitching and the roped shoulder finish rival anything from Huntsman or Anderson & Sheppard. An uncompromising suit.',
      verified: true,
    },
    {
      id: 'rev-2',
      name: 'Matteo Bellini',
      location: 'Via Montenapoleone, Milan',
      rating: 5,
      date: 'August 2026',
      title: 'Incredible cloth hand and architectural cut',
      comment:
        'Loro Piana’s Super 160s with cashmere infusion gives an extraordinary lightness and deep midnight absorption. The matching waistcoat completes the silhouette with commanding poise.',
      verified: true,
    },
    {
      id: 'rev-3',
      name: 'Taimur Khan',
      location: 'Islamabad / Dubai',
      rating: 5,
      date: 'August 2026',
      title: 'The definitive black-tie gala ensemble',
      comment:
        'Wore this for an international diplomatic reception. The high-rise pleated trousers with side adjusters held their crease impeccably throughout an 8-hour evening. Truly made for your milestone moments.',
      verified: true,
    },
  ];

  const handleAddSuitToBag = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToBag(currentProduct, selectedSize, selectedColor);
    }
    setToastNotification(`Added ${currentProduct.name} (${selectedSize} · ${selectedColor}) to Private Bag`);
    setTimeout(() => setToastNotification(null), 2800);
  };

  const handleBuyNow = () => {
    onAddToBag(currentProduct, selectedSize, selectedColor);
    setToastNotification('Proceeding to VIP Concierge Checkout...');
    if (onCheckout) {
      setTimeout(() => onCheckout(), 250);
    }
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] font-sans-clean pb-24 lg:pb-0">
      {/* Toast Notice */}
      {toastNotification && (
        <div className="fixed top-24 right-6 z-50 bg-[#C8A97E] text-black px-6 py-3.5 shadow-2xl text-xs font-mono font-medium flex items-center gap-2 border border-black/20 animate-in fade-in slide-in-from-top-4">
          <span>✓</span>
          <strong>{toastNotification}</strong>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-4">
        <div className="flex items-center gap-2 text-xs font-sans-clean text-white/50 tracking-wider">
          <button onClick={onBackToShop} className="hover:text-[#C8A97E] transition-colors">
            N.K FABRICS Collection
          </button>
          <span>/</span>
          <button onClick={onBackToShop} className="hover:text-[#C8A97E] transition-colors">
            Suits Atelier
          </button>
          <span>/</span>
          <span className="text-[#C8A97E] font-medium">{currentProduct.name}</span>
        </div>
      </div>

      {/* 1. HERO SECTION: 8-IMAGE GALLERY & PRODUCT PURCHASE MODULE */}
      <section className="max-w-7xl mx-auto px-6 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: IMMERSIVE 8-ANGLE GALLERY */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {/* Main Primary Viewport with Mobile Touch-Swipe */}
            <div
              className="relative h-[420px] xs:h-[480px] sm:h-[680px] md:h-[740px] bg-[#0A0A0A] border border-white/10 overflow-hidden group cursor-zoom-in touch-pan-y"
              onClick={() => setIsZoomModalOpen(true)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={GALLERY_ANGLES[activeImageIndex].image}
                alt={GALLERY_ANGLES[activeImageIndex].label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top brightness-[0.92] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Angle Description Label */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-black/80 backdrop-blur-md px-3 sm:px-3.5 py-1.5 border border-white/10 text-[10px] sm:text-[11px] font-mono uppercase text-[#FAF8F5] tracking-wider flex items-center gap-2 max-w-[85%] truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] shrink-0" />
                <span className="truncate">{GALLERY_ANGLES[activeImageIndex].label}</span>
              </div>

              {/* Mobile Swipe Hint Badge */}
              <div className="sm:hidden absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[9px] font-mono uppercase text-[#C8A97E] tracking-wider pointer-events-none">
                Swipe ↔
              </div>

              {/* Click to Expand Prompt */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 border border-white/10 text-[9px] sm:text-[10px] font-mono uppercase text-white/70 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                Zoom (8K View)
              </div>

              {/* Navigation Arrows for Quick Prev/Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ANGLES.length - 1));
                }}
                className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 text-white/90 hover:text-white flex items-center justify-center border border-white/15 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity active:scale-90"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev < GALLERY_ANGLES.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 text-white/90 hover:text-white flex items-center justify-center border border-white/15 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity active:scale-90"
                aria-label="Next image"
              >
                →
              </button>
            </div>

            {/* Mobile Pagination Dot Bar */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 py-1">
              {GALLERY_ANGLES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeImageIndex === idx ? 'w-5 bg-[#C8A97E]' : 'w-1.5 bg-white/20'
                  }`}
                  aria-label={`View angle ${idx + 1}`}
                />
              ))}
            </div>

            {/* 8-Thumbnail Carousel Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-2.5">
              {GALLERY_ANGLES.map((angle, idx) => (
                <button
                  key={angle.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-20 sm:h-28 overflow-hidden border transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#C8A97E] ring-1 ring-[#C8A97E] opacity-100'
                      : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                  title={angle.label}
                >
                  <img
                    src={angle.image}
                    alt={angle.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/70 text-[8px] font-mono text-center py-0.5 text-white/80 truncate px-0.5">
                    {idx + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTIGUOUS PURCHASE MODULE & PRODUCT INFORMATION */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Header Lockup */}
            <div className="space-y-3 border-b border-white/10 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MNMonogramMaster variant="champagne-gold" size={24} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
                    N.K FABRICS Sartorial Atelier
                  </span>
                </div>

                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Art. NK-SUIT-001
                </div>
              </div>

              <h1 className="font-serif-lux text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] leading-tight tracking-[0.04em]">
                {currentProduct.name}
              </h1>

              <div className="flex items-baseline justify-between pt-1">
                <div className="font-mono text-2xl text-[#FAF8F5] font-semibold">
                  {currentProduct.formattedPrice || '$4,200'}
                </div>
                <span className="text-[11px] font-sans-clean text-[#C8A97E] uppercase tracking-wider">
                  Complimentary Insured Courier
                </span>
              </div>

              <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/80 font-light leading-relaxed pt-2">
                {currentProduct.description ||
                  'A refined tailored silhouette crafted for modern formal occasions, combining timeless structure with contemporary detail. Full floating horsehair canvas, hand-padded lapels, and tailored trousers.'}
              </p>
            </div>

            {/* COLOR SELECTOR */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs font-sans-clean">
                <span className="text-white/60 uppercase tracking-wider text-[11px]">
                  Color: <strong className="text-white font-medium ml-1">{selectedColor}</strong>
                </span>
                <span className="text-[10px] font-mono text-white/40">5 Sartorial Tones</span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                {COLOR_OPTIONS.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col.name)}
                    className={`relative w-9 h-9 sm:w-8 sm:h-8 rounded-full border transition-all flex items-center justify-center touch-manipulation active:scale-95 ${
                      selectedColor === col.name
                        ? 'ring-2 ring-[#C8A97E] scale-110 border-white'
                        : 'border-white/20 hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  >
                    {selectedColor === col.name && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE SELECTOR & SIZE GUIDE */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <div className="flex justify-between items-center text-xs font-sans-clean">
                <span className="text-white/60 uppercase tracking-wider text-[11px]">
                  Size: <strong className="text-white font-medium ml-1">{selectedSize}</strong>
                </span>

                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-xs font-mono uppercase text-[#C8A97E] hover:underline flex items-center gap-1 p-1 touch-manipulation"
                >
                  <span>SIZE GUIDE</span>
                  <span className="text-[10px]">📏</span>
                </button>
              </div>

              {/* Sizes Grid: 3 cols on mobile, 6 on desktop */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {SIZES.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-3 text-xs font-mono font-medium border transition-all min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 ${
                      selectedSize === sz
                        ? 'bg-[#FAF8F5] text-black border-white font-bold'
                        : 'bg-black/40 border-white/15 text-white/70 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              <div className="flex justify-between text-[11px] font-sans-clean text-white/40 pt-1">
                <span>Model is 6&apos;2&quot; wearing size M (40R)</span>
                <span className="text-[#C8A97E]">Made-to-Measure Available</span>
              </div>
            </div>

            {/* QUANTITY & PRIMARY ACTION BUTTONS */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-white/20 px-3 py-3 text-xs font-mono bg-black/40">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-2 text-white/60 hover:text-white"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-2 text-white/60 hover:text-white"
                  >
                    +
                  </button>
                </div>

                {/* ADD TO BAG */}
                <button
                  onClick={handleAddSuitToBag}
                  className="flex-1 py-3.5 px-6 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-all shadow-xl text-center"
                >
                  ADD TO BAG
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => onToggleWishlist(currentProduct.id)}
                  className={`w-12 h-12 flex items-center justify-center border transition-all ${
                    isWishlisted
                      ? 'bg-[#C8A97E] text-black border-[#C8A97E]'
                      : 'border-white/20 text-white/70 hover:text-white hover:border-white/40 bg-black/40'
                  }`}
                  aria-label="Add to Wishlist"
                >
                  <span className="text-lg">{isWishlisted ? '♥' : '♡'}</span>
                </button>
              </div>

              {/* BUY NOW EXPRESS */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 text-xs font-sans-clean uppercase tracking-[0.2em] border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E]/15 transition-all text-center font-medium"
              >
                BUY NOW — EXPRESS CONCIERGE CHECKOUT
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-[11px] font-sans-clean text-white/60">
              <div className="flex items-center gap-2">
                <span className="text-[#C8A97E]">✓</span>
                <span>Includes Rigid Garment Box</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8A97E]">✓</span>
                <span>Unhemmed Trousers for Exact Break</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8A97E]">✓</span>
                <span>Complimentary Worldwide Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8A97E]">✓</span>
                <span>14-Day Private Returns</span>
              </div>
            </div>

            {/* EXPANDABLE ACCORDIONS */}
            <div className="pt-6 border-t border-white/10 divide-y divide-white/10 text-xs font-sans-clean">
              {/* DESCRIPTION */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-4 flex justify-between items-center text-left text-white/90 hover:text-[#C8A97E] transition-colors"
                >
                  <span className="uppercase font-mono text-[11px] tracking-wider">DESCRIPTION</span>
                  <span className="font-mono text-sm">{activeAccordion === 'description' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'description' && (
                  <div className="pb-4 text-white/70 font-light leading-relaxed space-y-2">
                    <p>
                      The N.K FABRICS Signature Suit represents the quintessential harmony between classical Savile Row tailoring and modern Italian lightness. Each suit is constructed with an authentic full floating horsehair canvas that molds organically to the contours of your posture over time.
                    </p>
                    <p>
                      Comes complete with single-breasted two-button jacket, high-rise forward-pleated trousers with side tabs, and matching tailored five-button waistcoat.
                    </p>
                  </div>
                )}
              </div>

              {/* FABRIC & MATERIAL */}
              <div>
                <button
                  onClick={() => toggleAccordion('fabric')}
                  className="w-full py-4 flex justify-between items-center text-left text-white/90 hover:text-[#C8A97E] transition-colors"
                >
                  <span className="uppercase font-mono text-[11px] tracking-wider">FABRIC &amp; MATERIAL</span>
                  <span className="font-mono text-sm">{activeAccordion === 'fabric' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'fabric' && (
                  <div className="pb-4 text-white/70 font-light leading-relaxed space-y-2">
                    <p>• <strong>Primary Cloth</strong>: 90% Super 160s Virgin Wool, 10% Mongolian Cashmere (270g/m).</p>
                    <p>• <strong>Mill Origin</strong>: Loro Piana, Quarona, Piedmont, Italy.</p>
                    <p>• <strong>Internal Lining</strong>: 100% Cupro Bemberg (breathable, anti-static, printed with tone-on-tone N.K FABRICS monogram).</p>
                    <p>• <strong>Hardware</strong>: Solid natural water buffalo horn buttons, laser-engraved with N.K FABRICS atelier signature.</p>
                  </div>
                )}
              </div>

              {/* FIT & TAILORING */}
              <div>
                <button
                  onClick={() => toggleAccordion('fit')}
                  className="w-full py-4 flex justify-between items-center text-left text-white/90 hover:text-[#C8A97E] transition-colors"
                >
                  <span className="uppercase font-mono text-[11px] tracking-wider">FIT &amp; TAILORING</span>
                  <span className="font-mono text-sm">{activeAccordion === 'fit' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'fit' && (
                  <div className="pb-4 text-white/70 font-light leading-relaxed space-y-2">
                    <p>• <strong>Silhouette</strong>: Structured Savile Row cut with slight chest drape and roped shoulder.</p>
                    <p>• <strong>Lapel</strong>: Classic 3.5-inch notch lapel with hand-sewn Milanese buttonhole.</p>
                    <p>• <strong>Trousers</strong>: High rise, double forward pleats, extended 2-button waistband tab, side buckle adjusters, and unfinished hem.</p>
                  </div>
                )}
              </div>

              {/* CARE INSTRUCTIONS */}
              <div>
                <button
                  onClick={() => toggleAccordion('care')}
                  className="w-full py-4 flex justify-between items-center text-left text-white/90 hover:text-[#C8A97E] transition-colors"
                >
                  <span className="uppercase font-mono text-[11px] tracking-wider">CARE INSTRUCTIONS</span>
                  <span className="font-mono text-sm">{activeAccordion === 'care' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'care' && (
                  <div className="pb-4 text-white/70 font-light leading-relaxed space-y-2">
                    <p>• Specialized eco-friendly dry clean only (maximum twice annually).</p>
                    <p>• Steam lightly between wears; hang on the provided wide-shoulder cedar hanger.</p>
                    <p>• Store inside the included breathable archival garment bag.</p>
                  </div>
                )}
              </div>

              {/* DELIVERY */}
              <div>
                <button
                  onClick={() => toggleAccordion('delivery')}
                  className="w-full py-4 flex justify-between items-center text-left text-white/90 hover:text-[#C8A97E] transition-colors"
                >
                  <span className="uppercase font-mono text-[11px] tracking-wider">DELIVERY &amp; TRACKING</span>
                  <span className="font-mono text-sm">{activeAccordion === 'delivery' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'delivery' && (
                  <div className="pb-4 text-white/70 font-light leading-relaxed space-y-2">
                    <p>• <strong>Standard Insured Courier</strong>: 2–4 business days worldwide via DHL Express Valet.</p>
                    <p>• <strong>Signature Required</strong>: Hand-delivered in protective carton with tamper-proof security seal.</p>
                    <p>• <strong>Real-Time Tracking</strong>: Live SMS and email telemetry updates from departure to door.</p>
                  </div>
                )}
              </div>

              {/* RETURNS & EXCHANGES */}
              <div>
                <button
                  onClick={() => toggleAccordion('returns')}
                  className="w-full py-4 flex justify-between items-center text-left text-white/90 hover:text-[#C8A97E] transition-colors"
                >
                  <span className="uppercase font-mono text-[11px] tracking-wider">RETURNS &amp; EXCHANGES</span>
                  <span className="font-mono text-sm">{activeAccordion === 'returns' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'returns' && (
                  <div className="pb-4 text-white/70 font-light leading-relaxed space-y-2">
                    <p>• Complimentary pickup for returns and size exchanges within 14 days of delivery.</p>
                    <p>• Garments must be in original condition with security tags and packaging intact.</p>
                    <p>• Tailoring alteration credit of up to $150 provided upon receipt of tailor invoice.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED SECTION: CRAFTED WITH PRECISION */}
      <section className="py-24 px-6 bg-[#0E0E0E] border-y border-white/10 mt-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#C8A97E]">
              Atelier Savoir-Faire
            </div>
            <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
              CRAFTED WITH PRECISION
            </h2>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 font-light leading-relaxed">
              Every curve, seam, and stitch is calculated to celebrate masculine grace. Take an intimate look inside our garment architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Clean Stitching */}
            <div className="p-8 bg-[#141414] border border-white/10 space-y-4 group hover:border-[#C8A97E]/50 transition-colors">
              <div className="h-56 overflow-hidden bg-black mb-4">
                <img
                  src={IMG_FABRIC}
                  alt="AMF Pick Stitching"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
                01. Precision Detail
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Clean Pick Stitching</h3>
              <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
                Hand-finished 1.5mm AMF pick stitching frames the lapels, pocket flaps, and double vents, securing the internal canvas while creating an unmistakable mark of bespoke pedigree.
              </p>
            </div>

            {/* 2. Refined Floating Canvas Tailoring */}
            <div className="p-8 bg-[#141414] border border-white/10 space-y-4 group hover:border-[#C8A97E]/50 transition-colors">
              <div className="h-56 overflow-hidden bg-black mb-4">
                <img
                  src={IMG_FRONT}
                  alt="Floating Horsehair Canvas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
                02. Architecture
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Floating Canvas Tailoring</h3>
              <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
                Zero synthetic glue or heat fusing. Our full canvas interlining is sewn with natural horsehair and wool chest felt, allowing the jacket to drape fluidly without rigidity.
              </p>
            </div>

            {/* 3. Premium Buttons */}
            <div className="p-8 bg-[#141414] border border-white/10 space-y-4 group hover:border-[#C8A97E]/50 transition-colors">
              <div className="h-56 overflow-hidden bg-black mb-4">
                <img
                  src={IMG_CUFF}
                  alt="Laser-Engraved Horn Buttons"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
                03. Haberdashery
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Genuine Horn Buttons</h3>
              <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
                Carved from solid water buffalo horn, matte burnished, and laser-etched with the N.K monogram. Hand-sewn with thread-shank cross stitching for indestructible permanence.
              </p>
            </div>

            {/* 4. Structured Silhouette */}
            <div className="p-8 bg-[#141414] border border-white/10 space-y-4 group hover:border-[#C8A97E]/50 transition-colors">
              <div className="h-56 overflow-hidden bg-black mb-4">
                <img
                  src={IMG_SIDE}
                  alt="Structured Silhouette"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
                04. Posture
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Structured Silhouette</h3>
              <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
                Lightly padded Savile Row roped shoulders coupled with gentle waist suppression sculpt an athletic V-taper that commands absolute authority in any formal setting.
              </p>
            </div>

            {/* 5. Comfortable Lining */}
            <div className="p-8 bg-[#141414] border border-white/10 space-y-4 group hover:border-[#C8A97E]/50 transition-colors">
              <div className="h-56 overflow-hidden bg-black mb-4">
                <img
                  src={IMG_BACK}
                  alt="Bemberg Cupro Lining"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
                05. Interior Comfort
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Breathable Cupro Lining</h3>
              <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
                Natural cotton linter spun into silk-smooth Bemberg cupro. Absorbs humidity, eliminates static cling, and allows the jacket to glide effortlessly over shirting.
              </p>
            </div>

            {/* 6. Carefully Finished Trousers */}
            <div className="p-8 bg-[#141414] border border-white/10 space-y-4 group hover:border-[#C8A97E]/50 transition-colors">
              <div className="h-56 overflow-hidden bg-black mb-4">
                <img
                  src={IMG_TROUSER}
                  alt="Tailored Trouser Finish"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
                06. Lower Half
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Pleated Dress Trousers</h3>
              <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
                Double forward pleats provide room across the thighs while preserving a razor-sharp crease. Fitted with solid brass side buckle adjusters to eliminate belt bulk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLETE THE LOOK SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Sartorial Ensemble
            </div>
            <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#FAF8F5] tracking-wide mt-1">
              COMPLETE THE LOOK
            </h2>
          </div>
          <p className="text-xs font-sans-clean text-white/60 max-w-md">
            Harmoniously styled by our Savile Row master tailors. Acquire the individual pieces or commission the entire ensemble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-white/10 p-8 sm:p-12">
          {/* Styled Ensemble Photography */}
          <div className="lg:col-span-6 relative h-[480px] bg-black border border-white/10 overflow-hidden">
            <img
              src={IMG_STYLING}
              alt="Complete N.K FABRICS Signature Suit Look"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top brightness-[0.88]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 border border-white/10 text-xs font-sans-clean flex justify-between items-center">
              <span className="text-white font-medium">The Signature Three-Piece Triad</span>
              <span className="font-mono text-[#C8A97E] font-semibold">$5,740 Combined</span>
            </div>
          </div>

          {/* Individual Components Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 divide-y divide-white/10">
              {/* Piece 1: Suit (Currently viewed) */}
              <div className="pt-2 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono text-[#C8A97E] uppercase">Foundation</div>
                  <div className="font-serif-lux text-lg text-white">N.K FABRICS Signature Suit</div>
                  <div className="text-xs font-mono text-white/60">$4,200 (Selected)</div>
                </div>
                <span className="text-xs font-mono text-white/40">✓ Included Above</span>
              </div>

              {/* Piece 2: Formal Shirt */}
              <div className="pt-4 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono text-[#C8A97E] uppercase">Shirting</div>
                  <div className="font-serif-lux text-lg text-white">Royal Poplin Formal Shirt (White)</div>
                  <div className="text-xs font-mono text-white/60">$650</div>
                </div>
                <button
                  onClick={() => {
                    onAddToBag(ALL_PRODUCTS[6], '16.0', 'Crisp White');
                    setStylingShirtAdded(true);
                  }}
                  className={`px-4 py-2 text-xs font-sans-clean uppercase tracking-wider border transition-all ${
                    stylingShirtAdded
                      ? 'bg-[#C8A97E] text-black border-[#C8A97E]'
                      : 'border-white/20 text-white hover:border-[#C8A97E]'
                  }`}
                >
                  {stylingShirtAdded ? '✓ Added' : '+ Add Shirt'}
                </button>
              </div>

              {/* Piece 3: Waistcoat */}
              <div className="pt-4 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono text-[#C8A97E] uppercase">Waistcoat</div>
                  <div className="font-serif-lux text-lg text-white">Tailored Flannel Waistcoat (Charcoal)</div>
                  <div className="text-xs font-mono text-white/60">$890</div>
                </div>
                <button
                  onClick={() => {
                    onAddToBag(ALL_PRODUCTS[10], '40R', 'Charcoal');
                    setStylingWaistcoatAdded(true);
                  }}
                  className={`px-4 py-2 text-xs font-sans-clean uppercase tracking-wider border transition-all ${
                    stylingWaistcoatAdded
                      ? 'bg-[#C8A97E] text-black border-[#C8A97E]'
                      : 'border-white/20 text-white hover:border-[#C8A97E]'
                  }`}
                >
                  {stylingWaistcoatAdded ? '✓ Added' : '+ Add Waistcoat'}
                </button>
              </div>
            </div>

            {/* Add Entire Ensemble Button */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  handleAddSuitToBag();
                  onAddToBag(ALL_PRODUCTS[6], '16.0', 'Crisp White');
                  onAddToBag(ALL_PRODUCTS[10], '40R', 'Charcoal');
                  setStylingShirtAdded(true);
                  setStylingWaistcoatAdded(true);
                  setToastNotification('Added Complete Three-Piece Ensemble ($5,740) to Bag');
                }}
                className="w-full py-4 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#C8A97E] text-black font-semibold hover:bg-[#FAF8F5] transition-colors shadow-2xl text-center"
              >
                Add Complete Look to Shopping Bag ($5,740)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM PACKAGING VISUAL SHOWCASE */}
      <section className="py-24 px-6 bg-[#0E0E0E] border-y border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#C8A97E]">
              Boutique Presentation
            </div>
            <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
              THE N.K FABRICS PACKAGING CEREMONY
            </h2>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 font-light leading-relaxed">
              Every commission arrives as a ceremonial gift to yourself. Packaged in archival 2.5mm grayboard rigid boxes, sealed with champagne gold wax, and hand-signed by your tailor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Unboxing Showcase Image */}
            <div className="relative h-[420px] bg-black border border-white/10 overflow-hidden">
              <img
                src={IMG_PACKAGING_UNBOXING}
                alt="N.K FABRICS Luxury Packaging Suite"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="font-serif-lux text-lg text-[#FAF8F5]">N.K FABRICS Archival Rigid Garment Box</div>
                  <div className="text-xs text-[#C8A97E]">Wrapped in Charcoal Bookcloth with Gold Foil Stamp</div>
                </div>
              </div>
            </div>

            {/* Shopping Bag & Stationery Showcase Image */}
            <div className="relative h-[420px] bg-black border border-white/10 overflow-hidden">
              <img
                src={IMG_PACKAGING_BAG}
                alt="N.K FABRICS Shopping Bag &amp; Tissue"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="font-serif-lux text-lg text-[#FAF8F5]">Textured Ribbed Shopping Tote</div>
                  <div className="text-xs text-[#C8A97E]">38mm Heavy Herringbone Silk Grosgrain Handles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging Details Checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4 text-center text-xs font-sans-clean">
            <div className="p-4 bg-[#141414] border border-white/10 space-y-1">
              <span className="text-[#C8A97E] text-base">🎁</span>
              <div className="text-white font-medium">Garment Box</div>
              <div className="text-[10px] text-white/50">2.5mm Grayboard</div>
            </div>
            <div className="p-4 bg-[#141414] border border-white/10 space-y-1">
              <span className="text-[#C8A97E] text-base">🛍</span>
              <div className="text-white font-medium">Shopping Bag</div>
              <div className="text-[10px] text-white/50">250gsm Ribbed Ivory</div>
            </div>
            <div className="p-4 bg-[#141414] border border-white/10 space-y-1">
              <span className="text-[#C8A97E] text-base">📜</span>
              <div className="text-white font-medium">Archival Tissue</div>
              <div className="text-[10px] text-white/50">Acid-Free Monogram</div>
            </div>
            <div className="p-4 bg-[#141414] border border-white/10 space-y-1">
              <span className="text-[#C8A97E] text-base">🏷</span>
              <div className="text-white font-medium">Clothing Tag</div>
              <div className="text-[10px] text-white/50">600gsm Blind Deboss</div>
            </div>
            <div className="p-4 bg-[#141414] border border-white/10 space-y-1">
              <span className="text-[#C8A97E] text-base">✉️</span>
              <div className="text-white font-medium">Thank-You Card</div>
              <div className="text-[10px] text-white/50">Hand-Calligraphed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY EXPERIENCE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 bg-[#121212] border border-white/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 gap-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
                Concierge Logistics
              </div>
              <h3 className="font-serif-lux text-2xl sm:text-3xl text-[#FAF8F5] mt-1">
                DELIVERY &amp; VALET DISPATCH
              </h3>
            </div>
            <span className="text-xs font-mono text-[#C8A97E]">
              100% Insured Worldwide Transit
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-sans-clean">
            <div className="space-y-2">
              <div className="text-white font-semibold text-sm">Delivery Availability</div>
              <p className="text-white/60 font-light leading-relaxed">
                In-stock sizes dispatch within 24 business hours from our Milan and London fulfillment ateliers. Bespoke Made-to-Measure orders are crafted and delivered within 18 calendar days.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold text-sm">Order Tracking</div>
              <p className="text-white/60 font-light leading-relaxed">
                Receive real-time courier updates via private SMS and email dispatch alerts. Flight transit and customs clearance milestones are monitored directly by your personal atelier concierge.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold text-sm">Secure Packaging</div>
              <p className="text-white/60 font-light leading-relaxed">
                Protected by weather-resistant outer cartons and tamper-evident security foil seals. High-density hangers prevent compression during long-haul aviation transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Client Testimonials
            </div>
            <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#FAF8F5] tracking-wide mt-1">
              CUSTOMER REVIEWS
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#C8A97E] text-base tracking-widest">★★★★★</div>
            <span className="text-xs font-mono text-white/70">5.0 / 5.0 (18 Verified Commissions)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="p-8 bg-[#121212] border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-[#C8A97E] text-sm tracking-widest">★★★★★</div>
                <h4 className="font-serif-lux text-lg text-[#FAF8F5] leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h4>
                <p className="text-xs font-sans-clean text-white/70 font-light leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-sans-clean">
                <div>
                  <div className="text-white font-medium">{rev.name}</div>
                  <div className="text-white/40">{rev.location}</div>
                </div>
                {rev.verified && (
                  <span className="text-[10px] font-mono text-[#C8A97E] uppercase">
                    ✓ Verified Client
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. YOU MAY ALSO LIKE (Recommendations) */}
      <section className="py-24 px-6 bg-[#0B0B0B] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end border-b border-white/10 pb-6">
            <div>
              <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
                Complementary Pieces
              </div>
              <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#FAF8F5] tracking-wide mt-1">
                YOU MAY ALSO LIKE
              </h2>
            </div>
            <button onClick={onBackToShop} className="text-xs font-mono uppercase text-[#C8A97E] hover:underline">
              View All 12 Categories →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_PRODUCTS.slice(1, 5).map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="group bg-[#121212] border border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 hover:border-[#C8A97E]/70 shadow-xl"
              >
                <div className="relative h-72 overflow-hidden bg-black">
                  <img
                    src={prod.primaryImage}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute top-3 right-3 bg-[#C8A97E] text-black px-2.5 py-0.5 text-[10px] font-mono font-semibold">
                    {prod.formattedPrice}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[10px] font-mono text-[#C8A97E] uppercase tracking-wider">
                    {prod.collection}
                  </div>
                  <h3 className="font-serif-lux text-lg text-white group-hover:text-[#C8A97E] transition-colors leading-tight">
                    {prod.name}
                  </h3>
                  <div className="pt-2 text-[11px] font-mono text-white/50 flex justify-between">
                    <span>Inspect Ensemble</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RECENTLY VIEWED PRODUCTS TRACK */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-8">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
            Recently Viewed
          </span>
          <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">From Your Session</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ALL_PRODUCTS.slice(5, 9).map((recent) => (
            <div
              key={recent.id}
              onClick={() => onSelectProduct(recent)}
              className="flex items-center gap-3 p-3 bg-[#121212] border border-white/10 hover:border-white/30 cursor-pointer transition-colors"
            >
              <img
                src={recent.primaryImage}
                alt={recent.name}
                referrerPolicy="no-referrer"
                className="w-14 h-18 object-cover object-top shrink-0 border border-white/10"
              />
              <div className="min-w-0">
                <div className="font-serif-lux text-xs text-white truncate">{recent.name}</div>
                <div className="font-mono text-[11px] text-[#C8A97E] mt-0.5">{recent.formattedPrice}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#121212]/95 backdrop-blur-md border-t border-white/15 p-4 sm:hidden flex items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-mono text-white/50 uppercase">{currentProduct.name}</div>
          <div className="font-mono text-base font-bold text-[#FAF8F5]">{currentProduct.formattedPrice}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSizeGuideOpen(true)}
            className="px-2.5 py-2.5 border border-white/20 text-xs font-mono text-white/70"
          >
            {selectedSize} ▾
          </button>
          <button
            onClick={handleAddSuitToBag}
            className="px-6 py-2.5 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold shadow-xl"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* SIZE GUIDE MODAL */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* ZOOM MODAL FOR 8K GALLERY */}
      {isZoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <button
            onClick={() => setIsZoomModalOpen(false)}
            className="absolute top-6 right-6 text-white text-xl p-2"
          >
            ✕ Close
          </button>
          <img
            src={GALLERY_ANGLES[activeImageIndex].image}
            alt="High-resolution zoomed inspection"
            referrerPolicy="no-referrer"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};
