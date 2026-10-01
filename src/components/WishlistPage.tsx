import React, { useState } from 'react';
import { ShopProduct, ALL_PRODUCTS } from '../data/shopProducts.ts';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';
import { ProductRecommendations } from './ProductRecommendations.tsx';

interface WishlistPageProps {
  wishlistIds: string[];
  allProducts: ShopProduct[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToBag: (product: ShopProduct, size: string, color: string) => void;
  onQuickView: (product: ShopProduct) => void;
  onExploreCollection: () => void;
  onToggleWishlist: (productId: string) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({
  wishlistIds,
  allProducts,
  onRemoveFromWishlist,
  onAddToBag,
  onQuickView,
  onExploreCollection,
  onToggleWishlist,
}) => {
  const wishlistedProducts = allProducts.filter((p) => wishlistIds.includes(p.id));

  // Track chosen sizes and colors for wishlist items prior to adding to bag
  const [selectedSizes, setSelectedSizes] = useState<{ [productId: string]: string }>({});
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: string }>({});

  const handleSelectSize = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleSelectColor = (productId: string, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const handleAddWishlistItemToBag = (product: ShopProduct) => {
    const chosenSize = selectedSizes[product.id] || product.sizes[0] || 'M';
    const chosenColor = selectedColors[product.id] || product.colors[0]?.name || 'Deep Black';
    onAddToBag(product, chosenSize, chosenColor);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] font-sans-clean">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs font-sans-clean text-white/50 tracking-wider">
          <button onClick={onExploreCollection} className="hover:text-[#C8A97E] transition-colors">
            N.K FABRICS Collection
          </button>
          <span>/</span>
          <span className="text-[#C8A97E] font-medium">Your Wishlist</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-10">
        {/* Large Elegant Heading */}
        <div className="border-b border-white/10 pb-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E] mb-1">
              Private Curated Wardrobe
            </div>
            <h1 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
              YOUR WISHLIST
            </h1>
          </div>
          <div className="text-xs font-mono text-white/50">
            {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'Saved Creation' : 'Saved Creations'}
          </div>
        </div>

        {wishlistedProducts.length === 0 ? (
          /* 6. EMPTY WISHLIST STATE */
          <div className="py-24 px-6 bg-[#121212] border border-white/10 text-center space-y-8 my-8 shadow-2xl">
            {/* Subtle N.K FABRICS Visual Treatment */}
            <div className="relative inline-block p-8 border border-[#C8A97E]/30 bg-[#161616] shadow-2xl mx-auto">
              <div className="absolute -inset-1.5 border border-[#C8A97E]/10 pointer-events-none" />
              <MNCompactSeal variant="champagne-gold" size={90} />
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#FAF8F5] tracking-wide">
                YOUR WISHLIST IS WAITING
              </h2>
              <p className="text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                Save the pieces you love and return to them whenever you are ready.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreCollection}
                className="py-3.5 px-8 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-xl"
              >
                EXPLORE COLLECTION
              </button>
            </div>

            <div className="pt-8 border-t border-white/5 max-w-md mx-auto text-[11px] font-mono text-white/40 uppercase">
              Save your favorite bespoke suits, waistcoats &amp; traditional apparel
            </div>
          </div>
        ) : (
          /* 5. POPULATED WISHLIST GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistedProducts.map((product) => {
              const currentChosenSize = selectedSizes[product.id] || product.sizes[0] || 'M';
              const currentChosenColor = selectedColors[product.id] || product.colors[0]?.name || 'Deep Black';

              return (
                <div
                  key={product.id}
                  className="group bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#C8A97E]/70 transition-all duration-300 shadow-xl"
                >
                  {/* Image with Hover Second Image */}
                  <div
                    className="relative h-80 sm:h-96 bg-black overflow-hidden cursor-pointer"
                    onClick={() => onQuickView(product)}
                  >
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                    />
                    <img
                      src={product.hoverImage || product.primaryImage}
                      alt={`${product.name} alternate view`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />

                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFromWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-[#C8A97E] hover:text-red-400 hover:border-red-400 flex items-center justify-center transition-colors shadow-lg"
                      title="Remove from Wishlist"
                      aria-label="Remove from Wishlist"
                    >
                      <span className="text-base">♥</span>
                    </button>

                    {/* Quick View Prompt */}
                    <div className="absolute bottom-3 inset-x-3 bg-black/80 backdrop-blur-md py-2.5 text-center text-[10px] font-sans-clean uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                      Quick View Atelier Look
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-[#C8A97E] uppercase tracking-wider">
                        {product.collection}
                      </div>
                      <h3
                        onClick={() => onQuickView(product)}
                        className="font-serif-lux text-xl text-[#FAF8F5] leading-snug hover:text-[#C8A97E] transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <div className="font-mono text-sm text-[#FAF8F5] font-semibold pt-0.5">
                        {product.formattedPrice}
                      </div>
                      <p className="text-xs font-sans-clean text-white/60 font-light line-clamp-2 pt-1">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Available Colors with Swatches */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="flex justify-between items-center text-[11px] font-sans-clean text-white/60">
                        <span>Color: <strong className="text-white font-medium">{currentChosenColor}</strong></span>
                        <span className="text-[10px] font-mono text-white/40">{product.colors.length} Tones</span>
                      </div>
                      <div className="flex items-center gap-2.5 py-1">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => handleSelectColor(product.id, c.name)}
                            className={`w-6 h-6 rounded-full border transition-all touch-manipulation ${
                              currentChosenColor === c.name
                                ? 'ring-2 ring-[#C8A97E] scale-110 border-white'
                                : 'border-white/20 hover:scale-105 opacity-80 hover:opacity-100'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                            aria-label={`Select color ${c.name}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size Selector Information */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[11px] font-sans-clean text-white/60">
                        <span>Select Size:</span>
                        <span className="text-[10px] font-mono text-[#C8A97E]">Ready to Ship</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSelectSize(product.id, sz)}
                            className={`min-w-[36px] min-h-[36px] px-3 py-1.5 text-xs font-mono border transition-all flex items-center justify-center active:scale-95 touch-manipulation ${
                              currentChosenSize === sz
                                ? 'bg-white text-black border-white font-semibold'
                                : 'bg-black/30 border-white/15 text-white/70 hover:border-white/40 hover:text-white'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Add to Bag & Remove */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={() => handleAddWishlistItemToBag(product)}
                        className="w-full py-3 px-4 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-all text-center shadow-lg"
                      >
                        Add to Bag
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="w-full py-2 text-[11px] font-sans-clean uppercase tracking-wider text-white/40 hover:text-red-400 transition-colors text-center"
                      >
                        Remove from Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 7. PRODUCT RECOMMENDATIONS: YOU MAY ALSO LIKE */}
      <ProductRecommendations
        title="YOU MAY ALSO LIKE"
        subtitle="Pieces designed to complement your saved wardrobe selections"
        excludeIds={wishlistIds}
        onQuickView={onQuickView}
        onAddToBag={onAddToBag}
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
      />
    </div>
  );
};
