import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, SHOP_CATEGORIES, ShopProduct } from '../data/shopProducts.ts';
import { MNMonogramMaster } from './MNLogos.tsx';

interface ShopPageProps {
  onQuickView: (product: ShopProduct) => void;
  onAddToBag: (product: ShopProduct, size: string, color: string) => void;
  onOpenFullDetail: (product: ShopProduct) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  initialCategory?: string;
  initialColor?: string;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onQuickView,
  onAddToBag,
  onOpenFullDetail,
  wishlistIds,
  onToggleWishlist,
  initialCategory = 'all',
  initialColor = 'all',
}) => {
  // Category Selection
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  // Filter States
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);

  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  React.useEffect(() => {
    if (initialColor) {
      setSelectedColor(initialColor);
    }
  }, [initialColor]);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recommended');

  // Mobile Filter Drawer
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Active hover preview colors per product (overrides primary image if user hovers swatch)
  const [activeProductColors, setActiveProductColors] = useState<{ [productId: string]: string }>({});

  // Filter options derived from products
  const COLOR_OPTIONS = ['all', 'Deep Black', 'Midnight Navy', 'Charcoal', 'Ivory', 'Cream', 'Deep Brown'];
  const SIZE_OPTIONS = ['all', '38R', '40R', '42R', '44R', '44L', 'Small (38)', 'Medium (40)', 'Large (42)', '30', '32', '34', '36', 'S', 'M', 'L'];
  const COLLECTION_OPTIONS = ['all', 'Signature Sartorial', 'Pakistani Haute Couture', 'Quiet Luxury', 'Ceremony & Evening'];
  const PRICE_RANGES = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-1000', label: 'Under $1,000' },
    { id: '1000-2500', label: '$1,000 - $2,500' },
    { id: '2500-plus', label: '$2,500+' },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory === 'new-arrivals') {
        if (!product.isNewArrival) return false;
      } else if (selectedCategory !== 'all') {
        if (product.category !== selectedCategory) return false;
      }

      // Color Filter
      if (selectedColor !== 'all') {
        const hasColor = product.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }

      // Size Filter
      if (selectedSize !== 'all') {
        if (!product.sizes.includes(selectedSize)) return false;
      }

      // Collection Filter
      if (selectedCollection !== 'all') {
        if (product.collection !== selectedCollection) return false;
      }

      // Availability Filter
      if (selectedAvailability !== 'all') {
        if (product.availability !== selectedAvailability) return false;
      }

      // Price Range Filter
      if (selectedPriceRange === 'under-1000' && product.price >= 1000) return false;
      if (selectedPriceRange === '1000-2500' && (product.price < 1000 || product.price > 2500)) return false;
      if (selectedPriceRange === '2500-plus' && product.price <= 2500) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0; // recommended
    });
  }, [
    selectedCategory,
    selectedColor,
    selectedSize,
    selectedCollection,
    selectedAvailability,
    selectedPriceRange,
    sortBy,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedColor('all');
    setSelectedSize('all');
    setSelectedCollection('all');
    setSelectedPriceRange('all');
    setSelectedAvailability('all');
    setSortBy('recommended');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedColor !== 'all' ||
    selectedSize !== 'all' ||
    selectedCollection !== 'all' ||
    selectedPriceRange !== 'all' ||
    selectedAvailability !== 'all';

  return (
    <div className="py-12 md:py-20 px-6 max-w-7xl mx-auto space-y-12">
      {/* 1. TOP HEADER SECTION */}
      <div className="text-center space-y-5 max-w-3xl mx-auto pt-4">
        {/* Approved N.K FABRICS Logo */}
        <div className="flex flex-col items-center space-y-3">
          <MNMonogramMaster variant="champagne-gold" size={48} />
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/70 to-transparent" />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif-lux text-3xl sm:text-5xl md:text-6xl text-[#FAF8F5] tracking-[0.06em]">
            THE N.K FABRICS COLLECTION
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-[#E6DFD5] font-light">
            Designed with precision. Made for distinction.
          </p>
        </div>

        <div className="pt-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
          Sartorial Menswear &amp; Pakistani Haute Couture · Bespoke Atelier
        </div>
      </div>

      {/* 2. ELEGANT CATEGORY NAVIGATION BAR */}
      <div className="border-y border-white/10 py-2.5 -mx-6 px-6 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 sm:gap-4 min-w-max px-2">
          {SHOP_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-sans-clean uppercase tracking-[0.18em] sm:tracking-[0.2em] transition-all whitespace-nowrap active:scale-[0.98] ${
                  isSelected
                    ? 'bg-[#C8A97E] text-black font-semibold shadow-md'
                    : 'text-white/65 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. FILTER BAR & SORT CONTROLS */}
      <div className="bg-[#121212] border border-white/10 p-3.5 sm:p-4 space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans-clean">
          {/* Desktop Filter Pills */}
          <div className="hidden lg:flex items-center gap-3 flex-wrap">
            {/* Color Filter Dropdown */}
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="bg-black/60 border border-white/15 px-3 py-2 text-white/80 focus:border-[#C8A97E] focus:outline-none text-xs uppercase tracking-wider"
            >
              <option value="all">Color: All</option>
              {COLOR_OPTIONS.filter((c) => c !== 'all').map((c) => (
                <option key={c} value={c}>
                  Color: {c}
                </option>
              ))}
            </select>

            {/* Size Filter Dropdown */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-black/60 border border-white/15 px-3 py-2 text-white/80 focus:border-[#C8A97E] focus:outline-none text-xs uppercase tracking-wider"
            >
              <option value="all">Size: All</option>
              {SIZE_OPTIONS.filter((s) => s !== 'all').map((s) => (
                <option key={s} value={s}>
                  Size: {s}
                </option>
              ))}
            </select>

            {/* Collection Filter Dropdown */}
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="bg-black/60 border border-white/15 px-3 py-2 text-white/80 focus:border-[#C8A97E] focus:outline-none text-xs uppercase tracking-wider"
            >
              <option value="all">Collection: All</option>
              {COLLECTION_OPTIONS.filter((cl) => cl !== 'all').map((cl) => (
                <option key={cl} value={cl}>
                  {cl}
                </option>
              ))}
            </select>

            {/* Price Filter Dropdown */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="bg-black/60 border border-white/15 px-3 py-2 text-white/80 focus:border-[#C8A97E] focus:outline-none text-xs uppercase tracking-wider"
            >
              {PRICE_RANGES.map((pr) => (
                <option key={pr.id} value={pr.id}>
                  {pr.label}
                </option>
              ))}
            </select>

            {/* Availability */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="bg-black/60 border border-white/15 px-3 py-2 text-white/80 focus:border-[#C8A97E] focus:outline-none text-xs uppercase tracking-wider"
            >
              <option value="all">Availability: All</option>
              <option value="In Stock">In Stock Ready</option>
              <option value="Bespoke Commission">Bespoke Commission</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-[11px] text-[#C8A97E] hover:underline uppercase tracking-wider ml-2"
              >
                Reset All Filters ✕
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle & Sort */}
          <div className="flex lg:hidden items-center justify-between gap-2 w-full">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 border border-white/20 bg-black/40 text-white text-[11px] uppercase tracking-wider active:bg-white/10 transition-colors"
            >
              <span>Filters</span>
              {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-[#C8A97E]" />}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 bg-black/60 border border-white/15 px-2.5 py-2.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider truncate"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="newest">Sort: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Desktop Sort & Count */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <span className="text-[11px] font-mono text-white/40">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Creation' : 'Creations'}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-white/40 text-[11px] uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black/60 border border-white/15 px-3 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-xs uppercase tracking-wider"
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PRODUCT EDITORIAL GRID ($50k Luxury Fashion Aesthetic) */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center space-y-4 border border-white/10 bg-[#121212]">
          <MNMonogramMaster variant="white" size={48} className="opacity-20 mx-auto" />
          <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">No creations match your filters.</h3>
          <p className="text-xs font-sans-clean text-white/50 max-w-sm mx-auto">
            Adjust your refinement options or reset to view our full collection of suits and traditional ensembles.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 text-xs font-sans-clean uppercase tracking-wider bg-[#C8A97E] text-black font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="group relative bg-[#121212] border border-white/10 flex flex-col justify-between transition-all duration-500 hover:border-[#C8A97E]/70 shadow-xl overflow-hidden"
              >
                {/* Image Showcase Container with Two-Image Smooth Transition */}
                <div
                  onClick={() => onOpenFullDetail(product)}
                  className="relative h-[220px] xs:h-[270px] sm:h-[420px] md:h-[480px] lg:h-[500px] overflow-hidden bg-[#0A0A0A] cursor-pointer"
                >
                  {/* Primary Image */}
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top brightness-[0.88] contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                  />

                  {/* Secondary Hover Image (smoothly fades and zooms in on hover!) */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate view`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.92] contrast-[1.05] scale-100 transition-all duration-700 opacity-0 group-hover:scale-105 group-hover:opacity-100"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Badges: Category/New Arrival & Wishlist */}
                  <div className="absolute top-2 left-2 right-2 sm:top-3.5 sm:left-3.5 sm:right-3.5 flex justify-between items-start z-10 pointer-events-none">
                    <div className="flex flex-col gap-1">
                      {product.isNewArrival && (
                        <span className="bg-[#C8A97E] text-black text-[8px] sm:text-[9px] font-mono uppercase tracking-wider px-1.5 sm:px-2 py-0.5 font-semibold">
                          New
                        </span>
                      )}
                      <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-white/70 bg-black/60 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 border border-white/10 hidden xs:inline-block">
                        {product.collection}
                      </span>
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product.id);
                      }}
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all pointer-events-auto active:scale-90 ${
                        isWishlisted
                          ? 'bg-[#C8A97E] text-black border-[#C8A97E]'
                          : 'bg-black/60 text-white/80 border-white/20 hover:text-white hover:border-white/40'
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <span className="text-xs sm:text-sm">{isWishlisted ? '♥' : '♡'}</span>
                    </button>
                  </div>

                  {/* Hover Quick Action Overlay (Desktop) */}
                  <div className="hidden sm:flex absolute bottom-4 left-4 right-4 items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="flex-1 py-3 bg-[#FAF8F5] text-black text-[11px] font-sans-clean uppercase tracking-[0.2em] font-semibold hover:bg-[#C8A97E] transition-colors shadow-2xl text-center"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToBag(product, product.sizes[0] || '40R', product.colors[0]?.name || 'Standard');
                      }}
                      className="px-4 py-3 bg-black/80 border border-white/20 text-[#FAF8F5] text-[11px] font-sans-clean uppercase tracking-wider hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
                      title="Quick Add to Bag"
                    >
                      + Bag
                    </button>
                  </div>
                </div>

                {/* Product Card Body */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-2">
                      <h3
                        onClick={() => onOpenFullDetail(product)}
                        className="font-serif-lux text-xs sm:text-lg text-[#FAF8F5] group-hover:text-[#C8A97E] transition-colors cursor-pointer leading-snug line-clamp-1 sm:line-clamp-2"
                      >
                        {product.name}
                      </h3>
                      <div className="font-mono text-xs sm:text-base text-[#FAF8F5] font-semibold shrink-0">
                        {product.formattedPrice}
                      </div>
                    </div>

                    <p className="hidden sm:block text-xs font-sans-clean text-[#D8D4CC]/70 font-light leading-relaxed line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Available Color Swatches & Fabric Origin */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans-clean">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      {product.colors.slice(0, 4).map((c) => (
                        <span
                          key={c.name}
                          className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-white/30"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <span className="text-[9px] text-white/50">+{product.colors.length - 4}</span>
                      )}
                    </div>

                    <div className="text-[9px] sm:text-[10px] font-mono text-[#C8A97E] uppercase truncate max-w-[80px] sm:max-w-none">
                      {product.fabricOrigin.split(',')[0]}
                    </div>
                  </div>

                  {/* Mobile Quick Action Strip (Touch-friendly on small screens) */}
                  <div className="sm:hidden pt-1 flex items-center gap-1.5">
                    <button
                      onClick={() => onAddToBag(product, product.sizes[0] || '40R', product.colors[0]?.name || 'Standard')}
                      className="flex-1 py-1.5 text-[10px] font-mono uppercase bg-white/10 hover:bg-[#C8A97E] hover:text-black border border-white/15 text-white active:scale-95 transition-all text-center"
                    >
                      + Add to Bag
                    </button>
                    <button
                      onClick={() => onOpenFullDetail(product)}
                      className="py-1.5 px-2 text-[10px] font-mono uppercase bg-transparent text-white/60 hover:text-white border border-white/10 active:scale-95 transition-all text-center"
                    >
                      View
                    </button>
                  </div>

                  {/* Tailoring Micro Specification (Desktop) */}
                  <div className="hidden sm:flex pt-2 text-[11px] font-sans-clean text-white/50 border-t border-white/5 justify-between items-center">
                    <span className="truncate max-w-[200px]">{product.fabric}</span>
                    <button
                      onClick={() => onOpenFullDetail(product)}
                      className="text-white hover:text-[#C8A97E] transition-colors uppercase text-[10px] font-mono shrink-0 ml-2"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 5. LUXURY DETAIL PILLARS BANNER */}
      <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
            PREMIUM FABRICS
          </div>
          <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
            Dormeuil, Loro Piana, Zegna, and hand-loomed pure mulberry raw silk.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
            PRECISION TAILORING
          </div>
          <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
            Full floating horsehair canvas, Milanese buttonholes, and Savile Row drape.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
            REFINED DETAILS
          </div>
          <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
            Laser-engraved genuine buffalo horn buttons and iridescent mother-of-pearl.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
            TIMELESS DESIGN
          </div>
          <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
            Enduring silhouettes made for milestone moments of profound distinction.
          </p>
        </div>
      </div>

      {/* 6. MOBILE BOTTOM-SHEET FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/80 backdrop-blur-sm lg:hidden">
          <div className="w-full bg-[#111111] border-t border-white/20 p-6 space-y-6 max-h-[80vh] overflow-y-auto rounded-t-2xl animate-in slide-in-from-bottom">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="font-serif-lux text-xl text-white">Refine The Collection</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Mobile Filters */}
            <div className="space-y-4 text-xs font-sans-clean">
              <div>
                <label className="text-white/50 uppercase font-mono block mb-2 text-[10px]">Color</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2.5 text-white"
                >
                  <option value="all">All Colors</option>
                  {COLOR_OPTIONS.filter((c) => c !== 'all').map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white/50 uppercase font-mono block mb-2 text-[10px]">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2.5 text-white"
                >
                  <option value="all">All Sizes</option>
                  {SIZE_OPTIONS.filter((s) => s !== 'all').map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white/50 uppercase font-mono block mb-2 text-[10px]">Collection</label>
                <select
                  value={selectedCollection}
                  onChange={(e) => setSelectedCollection(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2.5 text-white"
                >
                  <option value="all">All Collections</option>
                  {COLLECTION_OPTIONS.filter((cl) => cl !== 'all').map((cl) => (
                    <option key={cl} value={cl}>
                      {cl}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white/50 uppercase font-mono block mb-2 text-[10px]">Price</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2.5 text-white"
                >
                  {PRICE_RANGES.map((pr) => (
                    <option key={pr.id} value={pr.id}>
                      {pr.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-white/10">
              <button
                onClick={clearAllFilters}
                className="w-1/2 py-3 border border-white/20 text-white text-xs uppercase"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-1/2 py-3 bg-[#C8A97E] text-black text-xs font-semibold uppercase"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
