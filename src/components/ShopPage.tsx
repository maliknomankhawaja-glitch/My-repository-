import React, { useState, useMemo, useEffect } from 'react';
import { ALL_PRODUCTS, SHOP_CATEGORIES, SHOP_COLLECTIONS, ShopProduct } from '../data/shopProducts.ts';
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

const ITEMS_PER_PAGE = 24;

export const ShopPage: React.FC<ShopPageProps> = ({
  onQuickView,
  onAddToBag,
  onOpenFullDetail,
  wishlistIds,
  onToggleWishlist,
  initialCategory = 'all',
  initialColor = 'all',
}) => {
  // Navigation & Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedFit, setSelectedFit] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [selectedSubType, setSelectedSubType] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recommended');

  // Browsing Mode: 'numbered' pagination vs 'load-more' continuous
  const [browseMode, setBrowseMode] = useState<'numbered' | 'load-more'>('numbered');

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Mobile Filter Drawer
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Active hover preview colors per product (overrides primary image if user hovers swatch)
  const [activeProductColors, setActiveProductColors] = useState<{ [productId: string]: string }>({});

  // Active selected size per product card for 1-click addition
  const [activeProductSizes, setActiveProductSizes] = useState<{ [productId: string]: string }>({});

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setCurrentPage(1);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialColor) {
      setSelectedColor(initialColor);
      setCurrentPage(1);
    }
  }, [initialColor]);

  // Reset pagination when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    searchQuery,
    selectedColor,
    selectedSize,
    selectedCollection,
    selectedOccasion,
    selectedFit,
    selectedFabric,
    selectedSubType,
    selectedPriceRange,
    selectedAvailability,
    sortBy,
  ]);

  // Derived unique filter options
  const COLOR_OPTIONS = [
    'all',
    'Black',
    'Navy',
    'Charcoal',
    'Grey',
    'White',
    'Ivory',
    'Cream',
    'Emerald',
    'Burgundy',
    'Chocolate',
    'Camel',
    'Sandstone',
    'Olive',
    'Blue',
  ];

  const SIZE_OPTIONS = [
    'all',
    '38R', '40R', '42R', '44R', '46L',
    'Small (38)', 'Medium (40)', 'Large (42)', 'X-Large (44)',
    '15.0', '15.5', '16.0', '16.5', '17.0',
    '30', '32', '34', '36', '38',
    'S', 'M', 'L', 'XL', 'XXL',
  ];

  const FIT_OPTIONS = [
    'all',
    'Slim Fit',
    'Tailored Regular',
    'Relaxed Drape',
    'Classic Formal',
  ];

  const OCCASION_OPTIONS = [
    'all',
    'Wedding & Gala',
    'Business & Boardroom',
    'Ceremony & Eid',
    'Evening Black-Tie',
    'Resort & Casual',
    'Everyday Luxury',
  ];

  const FABRIC_OPTIONS = [
    { id: 'all', label: 'Fabric: All' },
    { id: 'wool', label: 'Worsted Wool & Flannel' },
    { id: 'silk', label: 'Mulberry Silk & Brocade' },
    { id: 'linen', label: 'Pure Irish Linen' },
    { id: 'cotton', label: 'Egyptian Giza Cotton' },
    { id: 'cashmere', label: 'Cashmere & Wool Blends' },
    { id: 'velvet', label: 'Italian Silk Velvet' },
  ];

  const SUBTYPE_OPTIONS = [
    { id: 'all', label: 'Silhouettes: All' },
    { id: '2-Piece', label: '2-Piece Ensembles' },
    { id: '3-Piece', label: '3-Piece Ensembles' },
    { id: 'Double-Breasted', label: 'Double-Breasted Cuts' },
    { id: 'Wedding', label: 'Wedding & Ceremonial' },
    { id: 'Traditional', label: 'Traditional & Festive' },
  ];

  const PRICE_RANGES = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-500', label: 'Under $500' },
    { id: '500-1500', label: '$500 - $1,500' },
    { id: '1500-3000', label: '$1,500 - $3,000' },
    { id: '3000-plus', label: '$3,000+' },
  ];

  // Filtering & Sorting Engine
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesFabric = product.fabric.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        const matchesSub = product.subType?.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesTagline && !matchesFabric && !matchesCat && !matchesSub) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory === 'new-arrivals') {
        if (!product.isNewArrival) return false;
      } else if (selectedCategory === 'best-sellers') {
        if (!product.isBestSeller) return false;
      } else if (selectedCategory !== 'all') {
        if (product.category !== selectedCategory) return false;
      }

      // 3. Sub-type / Cut Filter
      if (selectedSubType !== 'all') {
        if (product.subType !== selectedSubType && !product.name.toLowerCase().includes(selectedSubType.toLowerCase())) {
          return false;
        }
      }

      // 4. Color Filter
      if (selectedColor !== 'all') {
        const hasColor = product.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }

      // 5. Size Filter
      if (selectedSize !== 'all') {
        if (!product.sizes.includes(selectedSize)) return false;
      }

      // 6. Collection Filter
      if (selectedCollection !== 'all') {
        if (selectedCollection === 'New Arrivals' && !product.isNewArrival) return false;
        if (selectedCollection === 'Best Sellers' && !product.isBestSeller) return false;
        if (selectedCollection !== 'New Arrivals' && selectedCollection !== 'Best Sellers') {
          if (product.collection !== selectedCollection) return false;
        }
      }

      // 7. Occasion Filter
      if (selectedOccasion !== 'all') {
        if (product.occasion !== selectedOccasion) return false;
      }

      // 8. Fit Filter
      if (selectedFit !== 'all') {
        if (product.fit !== selectedFit) return false;
      }

      // 9. Fabric Filter
      if (selectedFabric !== 'all') {
        const fabLower = product.fabric.toLowerCase();
        if (selectedFabric === 'wool' && !fabLower.includes('wool') && !fabLower.includes('worsted') && !fabLower.includes('flannel')) return false;
        if (selectedFabric === 'silk' && !fabLower.includes('silk') && !fabLower.includes('brocade') && !fabLower.includes('jamawar')) return false;
        if (selectedFabric === 'linen' && !fabLower.includes('linen')) return false;
        if (selectedFabric === 'cotton' && !fabLower.includes('cotton') && !fabLower.includes('giza')) return false;
        if (selectedFabric === 'cashmere' && !fabLower.includes('cashmere')) return false;
        if (selectedFabric === 'velvet' && !fabLower.includes('velvet')) return false;
      }

      // 10. Availability Filter
      if (selectedAvailability === 'In Stock') {
        if (product.availability !== 'In Stock') return false;
      } else if (selectedAvailability === 'high-stock') {
        if (product.availability !== 'In Stock' || (product.stockUnits || 0) < 20) return false;
      } else if (selectedAvailability === 'Bespoke Commission') {
        if (product.availability !== 'Bespoke Commission') return false;
      }

      // 11. Price Range Filter
      if (selectedPriceRange === 'under-500' && product.price >= 500) return false;
      if (selectedPriceRange === '500-1500' && (product.price < 500 || product.price > 1500)) return false;
      if (selectedPriceRange === '1500-3000' && (product.price < 1500 || product.price > 3000)) return false;
      if (selectedPriceRange === '3000-plus' && product.price <= 3000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === 'popular') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      if (sortBy === 'stock-high') return (b.stockUnits || 20) - (a.stockUnits || 20);
      return 0; // recommended
    });
  }, [
    selectedCategory,
    searchQuery,
    selectedColor,
    selectedSize,
    selectedCollection,
    selectedOccasion,
    selectedFit,
    selectedFabric,
    selectedSubType,
    selectedAvailability,
    selectedPriceRange,
    sortBy,
  ]);

  // Paginated Slicing
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const visibleProducts = useMemo(() => {
    if (browseMode === 'load-more') {
      return filteredProducts.slice(0, currentPage * ITEMS_PER_PAGE);
    }
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage, browseMode]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedColor('all');
    setSelectedSize('all');
    setSelectedCollection('all');
    setSelectedOccasion('all');
    setSelectedFit('all');
    setSelectedFabric('all');
    setSelectedSubType('all');
    setSelectedPriceRange('all');
    setSelectedAvailability('all');
    setSortBy('recommended');
    setCurrentPage(1);
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    selectedColor !== 'all' ||
    selectedSize !== 'all' ||
    selectedCollection !== 'all' ||
    selectedOccasion !== 'all' ||
    selectedFit !== 'all' ||
    selectedFabric !== 'all' ||
    selectedSubType !== 'all' ||
    selectedPriceRange !== 'all' ||
    selectedAvailability !== 'all';

  const scrollToCatalogTop = () => {
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
      {/* 1. TOP HEADER SECTION */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="flex flex-col items-center space-y-2">
          <MNMonogramMaster variant="champagne-gold" size={44} />
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/70 to-transparent" />
        </div>

        <div className="space-y-1.5">
          <h1 className="font-serif-lux text-2xl sm:text-4xl md:text-5xl text-[#FAF8F5] tracking-[0.06em]">
            THE N.K FABRICS WARDROBE
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-[#E6DFD5] font-light">
            Sartorial suiting, noble textiles, and bespoke craftsmanship.
          </p>
        </div>

        <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.28em] text-[#C8A97E]">
          {ALL_PRODUCTS.length} Unique Haute Couture Creations · Savile Row &amp; Traditional Guilds
        </div>
      </div>

      {/* 2. SEARCH & LIVE CATEGORY NAVIGATION RAIL */}
      <div className="space-y-3">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search suiting, silk kurtas, fabrics, cuts..."
            className="w-full bg-[#141414] border border-white/15 px-4 py-2.5 pl-10 text-xs text-white placeholder-white/40 focus:border-[#C8A97E] focus:outline-none transition-colors shadow-inner"
          />
          <svg
            className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Scrollable Category Navigation */}
        <div className="border-y border-white/10 py-2 -mx-4 px-4 sm:-mx-6 sm:px-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-max px-2">
            {SHOP_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-[10.5px] sm:text-[11px] font-sans-clean uppercase tracking-[0.16em] transition-all whitespace-nowrap active:scale-[0.98] rounded-sm ${
                    isSelected
                      ? 'bg-[#C8A97E] text-black font-semibold shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. MULTI-TIER FILTER BAR & SORT CONTROLS */}
      <div className="bg-[#121212] border border-white/10 p-3.5 sm:p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs font-sans-clean">
          {/* Desktop Filter Dropdowns */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            {/* Collection Filter */}
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              <option value="all">Collection: All</option>
              {SHOP_COLLECTIONS.filter((cl) => cl !== 'All Collections').map((cl) => (
                <option key={cl} value={cl}>
                  {cl}
                </option>
              ))}
            </select>

            {/* Silhouette / Subtype Filter */}
            <select
              value={selectedSubType}
              onChange={(e) => setSelectedSubType(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              {SUBTYPE_OPTIONS.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.label}
                </option>
              ))}
            </select>

            {/* Fabric Filter */}
            <select
              value={selectedFabric}
              onChange={(e) => setSelectedFabric(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              {FABRIC_OPTIONS.map((fb) => (
                <option key={fb.id} value={fb.id}>
                  {fb.label}
                </option>
              ))}
            </select>

            {/* Occasion Filter */}
            <select
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              <option value="all">Occasion: All</option>
              {OCCASION_OPTIONS.filter((o) => o !== 'all').map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>

            {/* Fit Filter */}
            <select
              value={selectedFit}
              onChange={(e) => setSelectedFit(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              <option value="all">Fit: All</option>
              {FIT_OPTIONS.filter((f) => f !== 'all').map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>

            {/* Color Filter */}
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              <option value="all">Color: All</option>
              {COLOR_OPTIONS.filter((c) => c !== 'all').map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Size Filter */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              <option value="all">Size: All</option>
              {SIZE_OPTIONS.filter((s) => s !== 'all').map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              {PRICE_RANGES.map((pr) => (
                <option key={pr.id} value={pr.id}>
                  {pr.label}
                </option>
              ))}
            </select>

            {/* Availability / Stock */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider"
            >
              <option value="all">Stock &amp; Availability</option>
              <option value="In Stock">In Stock (Ready to Ship)</option>
              <option value="high-stock">High Stock (&gt;20 Units)</option>
              <option value="Bespoke Commission">Bespoke Commission</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-[11px] text-[#C8A97E] hover:underline uppercase tracking-wider ml-1"
              >
                Reset ✕
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle Button */}
          <div className="flex lg:hidden items-center justify-between gap-2 w-full">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-white/20 bg-black/40 text-white text-[11px] uppercase tracking-wider active:bg-white/10 transition-colors"
            >
              <span>Filters &amp; Refine</span>
              {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-[#C8A97E]" />}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 bg-black/60 border border-white/15 px-2 py-2 text-white/80 focus:border-[#C8A97E] focus:outline-none text-[11px] uppercase tracking-wider truncate"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="stock-high">Sort: Stock (Highest Available)</option>
              <option value="newest">Sort: Newest</option>
              <option value="popular">Sort: Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Desktop Sort & View Toggle */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            {/* View Mode Toggle (Page by Page vs Continuous) */}
            <div className="flex items-center border border-white/15 bg-black/50 p-0.5 rounded-sm">
              <button
                onClick={() => setBrowseMode('numbered')}
                className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider transition-all ${
                  browseMode === 'numbered'
                    ? 'bg-[#C8A97E] text-black font-semibold shadow-xs'
                    : 'text-white/60 hover:text-white'
                }`}
                title="Page-by-page browsing with numbered pagination"
              >
                Pages
              </button>
              <button
                onClick={() => setBrowseMode('load-more')}
                className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider transition-all ${
                  browseMode === 'load-more'
                    ? 'bg-[#C8A97E] text-black font-semibold shadow-xs'
                    : 'text-white/60 hover:text-white'
                }`}
                title="Continuous browsing with Load More"
              >
                Continuous
              </button>
            </div>

            <span className="text-[11px] font-mono text-white/50">
              {filteredProducts.length} Creations
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-white/40 text-[11px] uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black/60 border border-white/15 px-2.5 py-1.5 text-white/80 focus:border-[#C8A97E] focus:outline-none text-xs uppercase tracking-wider"
              >
                <option value="recommended">Recommended</option>
                <option value="stock-high">Stock: Highest Available</option>
                <option value="newest">Newest Arrivals</option>
                <option value="popular">Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PRODUCT EDITORIAL GRID */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center space-y-4 border border-white/10 bg-[#121212]">
          <MNMonogramMaster variant="white" size={48} className="opacity-20 mx-auto" />
          <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">No creations match your filters.</h3>
          <p className="text-xs font-sans-clean text-white/50 max-w-sm mx-auto">
            Adjust your refinement options or reset to view our complete collection of suiting, formal shirting, and traditional ensembles.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 text-xs font-sans-clean uppercase tracking-wider bg-[#C8A97E] text-black font-semibold hover:bg-[#D8BE96] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {visibleProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const activeColorName = activeProductColors[product.id] || (product.colors[0]?.name ?? 'Standard');
              const selectedProductSize = activeProductSizes[product.id] || product.sizes[0] || 'Standard';

              return (
                <div
                  key={product.id}
                  className="group relative bg-[#121212] border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-[#C8A97E]/70 shadow-lg overflow-hidden"
                >
                  {/* Image Showcase Container with Two-Image Smooth Transition */}
                  <div
                    onClick={() => onOpenFullDetail(product)}
                    className="relative h-[220px] xs:h-[270px] sm:h-[370px] md:h-[400px] overflow-hidden bg-[#0A0A0A] cursor-pointer"
                  >
                    {/* Primary Image */}
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top brightness-[0.9] contrast-[1.04] transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                    />

                    {/* Secondary Hover Image */}
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} alternate view`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.93] contrast-[1.04] scale-100 transition-all duration-700 opacity-0 group-hover:scale-105 group-hover:opacity-100"
                    />

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

                    {/* Top Status & Wishlist Trigger */}
                    <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 flex justify-between items-start z-10 pointer-events-none">
                      <div className="flex flex-col gap-1 pointer-events-none">
                        {product.isNewArrival && (
                          <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.2em] bg-[#C8A97E] text-black px-1.5 py-0.5 font-bold shadow-md">
                            New
                          </span>
                        )}
                        {product.isBestSeller && !product.isNewArrival && (
                          <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.2em] bg-white/90 text-black px-1.5 py-0.5 font-bold shadow-md">
                            Best Seller
                          </span>
                        )}
                        {product.subType && (
                          <span className="text-[7.5px] sm:text-[8px] font-mono uppercase tracking-[0.16em] bg-black/70 backdrop-blur-md text-white/90 border border-white/15 px-1.5 py-0.5">
                            {product.subType}
                          </span>
                        )}
                      </div>

                      {/* Top Right Wishlist & Quick View Icons */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickView(product);
                          }}
                          className="sm:hidden w-7 h-7 flex items-center justify-center backdrop-blur-md border border-white/15 bg-black/60 text-white/80 active:scale-90"
                          aria-label="Quick View"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(product.id);
                          }}
                          className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center backdrop-blur-md border transition-all duration-300 active:scale-90 ${
                            isWishlisted
                              ? 'bg-[#C8A97E] text-black border-[#C8A97E]'
                              : 'bg-black/50 text-white/80 border-white/15 hover:border-[#C8A97E]/70 hover:text-white'
                          }`}
                          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          <span className={`text-xs transition-transform duration-200 ${isWishlisted ? 'scale-110' : ''}`}>
                            {isWishlisted ? '♥' : '♡'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Quick View Trigger on Hover (Desktop) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="hidden sm:flex absolute bottom-3 inset-x-3 py-2 bg-black/85 hover:bg-[#C8A97E] text-white hover:text-black text-[10px] font-mono uppercase tracking-widest border border-white/20 transition-all opacity-0 group-hover:opacity-100 justify-center items-center backdrop-blur-sm z-20"
                    >
                      Quick View
                    </button>
                  </div>

                  {/* Product Metadata & Purchasing Section */}
                  <div className="p-3 sm:p-4 space-y-2 bg-[#121212] flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Badge & Collection Lockup */}
                      <div className="flex items-center justify-between text-[8.5px] font-mono uppercase tracking-wider mb-1">
                        <span className="text-white/60 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-xs truncate max-w-[110px]">
                          {product.category.replace('-', ' ')}
                        </span>
                        <span className="text-[#C8A97E] truncate max-w-[130px]">{product.collection}</span>
                      </div>

                      {/* Product Title */}
                      <h3
                        onClick={() => onOpenFullDetail(product)}
                        className="font-serif-lux text-xs sm:text-sm text-[#FAF8F5] leading-snug line-clamp-1 cursor-pointer hover:text-[#C8A97E] transition-colors"
                      >
                        {product.name}
                      </h3>

                      {/* Tagline / Subtitle */}
                      <p className="text-[10px] sm:text-[11px] font-sans-clean text-white/50 line-clamp-1 mt-0.5 font-light">
                        {product.tagline}
                      </p>

                      {/* Live Stock Availability Badge */}
                      <div className="mt-1.5 flex items-center justify-between">
                        {product.availability === 'In Stock' ? (
                          <span className="inline-flex items-center gap-1 text-[8.5px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 rounded-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            In Stock ({product.stockUnits || 24} Available)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[8.5px] font-mono text-[#C8A97E] bg-[#C8A97E]/10 border border-[#C8A97E]/25 px-1.5 py-0.5 rounded-xs">
                            ◆ Bespoke Commission
                          </span>
                        )}
                        {product.fit && (
                          <span className="text-[8px] font-mono text-white/40 uppercase hidden sm:inline">
                            {product.fit}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Color Swatches */}
                    {product.colors && product.colors.length > 0 && (
                      <div className="flex items-center gap-1.5 pt-1">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            onClick={() =>
                              setActiveProductColors((prev) => ({ ...prev, [product.id]: c.name }))
                            }
                            className={`w-3 h-3 rounded-full border transition-all ${
                              activeColorName === c.name
                                ? 'border-[#C8A97E] scale-125 ring-1 ring-[#C8A97E]'
                                : 'border-white/30 hover:border-white'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                            aria-label={`Select color ${c.name}`}
                          />
                        ))}
                        <span className="text-[8.5px] font-mono text-white/40 ml-1 truncate">
                          {activeColorName}
                        </span>
                      </div>
                    )}

                    {/* Size Availability Chips for Quick Selection */}
                    {product.sizes && product.sizes.length > 0 && (
                      <div className="space-y-1 pt-1.5 border-t border-white/5">
                        <div className="flex items-center justify-between text-[8px] font-mono uppercase text-white/40">
                          <span>Sizes:</span>
                          <span className="text-[#C8A97E] font-medium">{selectedProductSize}</span>
                        </div>
                        <div className="flex items-center gap-1 flex-wrap">
                          {product.sizes.slice(0, 4).map((sz) => {
                            const isChosen = selectedProductSize === sz;
                            return (
                              <button
                                key={sz}
                                onClick={() =>
                                  setActiveProductSizes((prev) => ({ ...prev, [product.id]: sz }))
                                }
                                className={`px-1.5 py-0.5 text-[8px] font-mono transition-all rounded-xs ${
                                  isChosen
                                    ? 'bg-[#C8A97E] text-black font-semibold'
                                    : 'bg-black/60 text-white/70 border border-white/10 hover:border-white/30'
                                }`}
                              >
                                {sz}
                              </button>
                            );
                          })}
                          {product.sizes.length > 4 && (
                            <span className="text-[7.5px] text-white/30 font-mono">
                              +{product.sizes.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Price and Cart Actions */}
                    <div className="pt-2 border-t border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-mono text-xs sm:text-sm font-semibold text-[#FAF8F5]">
                          {product.formattedPrice}
                        </div>
                        <span className="text-[8.5px] font-mono uppercase text-white/50">
                          {product.availability === 'In Stock' ? 'Ready to Ship' : 'Made to Measure'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => {
                            onAddToBag(product, selectedProductSize, activeColorName);
                          }}
                          className="min-h-[34px] py-1.5 px-2 text-[10px] font-sans-clean uppercase tracking-[0.14em] font-semibold bg-[#FAF8F5] text-black hover:bg-[#C8A97E] active:scale-95 transition-all text-center flex items-center justify-center touch-manipulation"
                        >
                          + Bag
                        </button>
                        <button
                          onClick={() => onOpenFullDetail(product)}
                          className="min-h-[34px] py-1.5 px-2 text-[10px] font-mono uppercase bg-transparent text-white/70 hover:text-white border border-white/15 active:scale-95 transition-all text-center flex items-center justify-center touch-manipulation"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. PAGINATION & LOAD MORE SYSTEM */}
          {browseMode === 'numbered' ? (
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] font-mono text-white/50">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} creations
              </div>

              {/* Numbered Page Buttons */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((p) => Math.max(1, p - 1));
                    scrollToCatalogTop();
                  }}
                  className="px-2.5 py-1.5 text-xs font-mono uppercase border border-white/15 disabled:opacity-25 disabled:pointer-events-none hover:border-[#C8A97E] text-white/80 transition-colors"
                >
                  « Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                  .map((page, idx, arr) => {
                    const prevPage = arr[idx - 1];
                    const showEllipsis = prevPage && page - prevPage > 1;
                    return (
                      <React.Fragment key={page}>
                        {showEllipsis && <span className="px-1 text-white/30 font-mono text-xs">…</span>}
                        <button
                          onClick={() => {
                            setCurrentPage(page);
                            scrollToCatalogTop();
                          }}
                          className={`w-7 h-7 sm:w-8 sm:h-8 text-xs font-mono transition-all ${
                            currentPage === page
                              ? 'bg-[#C8A97E] text-black font-semibold shadow-md'
                              : 'bg-black/50 text-white/70 border border-white/10 hover:border-white/30'
                          }`}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                    );
                  })}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    scrollToCatalogTop();
                  }}
                  className="px-2.5 py-1.5 text-xs font-mono uppercase border border-white/15 disabled:opacity-25 disabled:pointer-events-none hover:border-[#C8A97E] text-white/80 transition-colors"
                >
                  Next »
                </button>
              </div>

              <button
                onClick={() => setBrowseMode('load-more')}
                className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] hover:underline"
              >
                Switch to Continuous Flow ↓
              </button>
            </div>
          ) : (
            <div className="pt-8 text-center space-y-3">
              {visibleProducts.length < filteredProducts.length ? (
                <>
                  <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-8 py-3.5 bg-[#FAF8F5] text-black text-xs font-sans-clean uppercase tracking-[0.2em] font-semibold hover:bg-[#C8A97E] active:scale-[0.98] transition-all shadow-xl"
                  >
                    Load More Creations ({visibleProducts.length} of {filteredProducts.length})
                  </button>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Showing {visibleProducts.length} of {filteredProducts.length} pieces · Page {currentPage} of {totalPages}
                  </div>
                </>
              ) : (
                <div className="text-xs font-mono text-white/50 uppercase tracking-widest py-4">
                  ✦ All {filteredProducts.length} Creations Loaded
                </div>
              )}
              <div>
                <button
                  onClick={() => {
                    setBrowseMode('numbered');
                    setCurrentPage(1);
                    scrollToCatalogTop();
                  }}
                  className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] hover:underline"
                >
                  Switch to Numbered Pages (1, 2, 3...)
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. LUXURY DETAIL PILLARS BANNER */}
      <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C8A97E]">
            PREMIUM TEXTILES
          </div>
          <p className="text-[11px] font-sans-clean text-white/60 font-light leading-relaxed">
            Dormeuil, Loro Piana, Scabal, Thomas Mason, and hand-loomed raw mulberry silk.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C8A97E]">
            PRECISION TAILORING
          </div>
          <p className="text-[11px] font-sans-clean text-white/60 font-light leading-relaxed">
            Full floating horsehair canvas, Milanese buttonholes, and Savile Row drape.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C8A97E]">
            REFINED ACCENTS
          </div>
          <p className="text-[11px] font-sans-clean text-white/60 font-light leading-relaxed">
            Laser-engraved buffalo horn, 18K champagne gold PVD, and natural mother-of-pearl.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C8A97E]">
            TIMELESS COUTURE
          </div>
          <p className="text-[11px] font-sans-clean text-white/60 font-light leading-relaxed">
            Enduring silhouettes made for milestone moments of profound distinction.
          </p>
        </div>
      </div>

      {/* 6. MOBILE BOTTOM-SHEET FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/85 backdrop-blur-sm lg:hidden">
          <div className="w-full bg-[#111111] border-t border-white/20 p-5 space-y-4 max-h-[85vh] overflow-y-auto rounded-t-2xl animate-in slide-in-from-bottom duration-300">
            {/* Drag Handle */}
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto" />

            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="font-serif-lux text-lg text-white">Refine The Wardrobe</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Mobile Filters List */}
            <div className="space-y-3.5 text-xs font-sans-clean">
              {/* Category */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  {SHOP_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Silhouette / Sub-Type */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Silhouette / Cut</label>
                <select
                  value={selectedSubType}
                  onChange={(e) => setSelectedSubType(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  {SUBTYPE_OPTIONS.map((st) => (
                    <option key={st.id} value={st.id}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fabric */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Fabric</label>
                <select
                  value={selectedFabric}
                  onChange={(e) => setSelectedFabric(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  {FABRIC_OPTIONS.map((fb) => (
                    <option key={fb.id} value={fb.id}>
                      {fb.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Collection */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Collection</label>
                <select
                  value={selectedCollection}
                  onChange={(e) => setSelectedCollection(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  <option value="all">All Collections</option>
                  {SHOP_COLLECTIONS.filter((cl) => cl !== 'All Collections').map((cl) => (
                    <option key={cl} value={cl}>
                      {cl}
                    </option>
                  ))}
                </select>
              </div>

              {/* Occasion */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Occasion</label>
                <select
                  value={selectedOccasion}
                  onChange={(e) => setSelectedOccasion(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  <option value="all">All Occasions</option>
                  {OCCASION_OPTIONS.filter((o) => o !== 'all').map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability & Stock */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Availability &amp; Stock</label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  <option value="all">All Stock Statuses</option>
                  <option value="In Stock">In Stock (Ready to Ship)</option>
                  <option value="high-stock">High Stock (&gt;20 Units)</option>
                  <option value="Bespoke Commission">Bespoke Commission</option>
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Color</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  <option value="all">All Colors</option>
                  {COLOR_OPTIONS.filter((c) => c !== 'all').map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  <option value="all">All Sizes</option>
                  {SIZE_OPTIONS.filter((s) => s !== 'all').map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-white/50 uppercase font-mono block mb-1 text-[10px]">Price</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full bg-black border border-white/15 p-2 text-white text-xs"
                >
                  {PRICE_RANGES.map((pr) => (
                    <option key={pr.id} value={pr.id}>
                      {pr.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-white/10 flex gap-2">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 py-2.5 border border-white/20 text-white/70 hover:text-white uppercase font-mono text-[10px]"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-1 py-2.5 bg-[#C8A97E] text-black font-semibold uppercase text-[10px] tracking-wider"
                >
                  Apply Filters ({filteredProducts.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
