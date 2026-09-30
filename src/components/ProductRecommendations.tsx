import React from 'react';
import { ShopProduct, ALL_PRODUCTS } from '../data/shopProducts.ts';

interface ProductRecommendationsProps {
  currentCategory?: string;
  excludeIds?: string[];
  onQuickView: (product: ShopProduct) => void;
  onAddToBag: (product: ShopProduct, size: string, color: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  title?: string;
  subtitle?: string;
}

export const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({
  currentCategory,
  excludeIds = [],
  onQuickView,
  onAddToBag,
  wishlistIds,
  onToggleWishlist,
  title = 'YOU MAY ALSO LIKE',
  subtitle = 'Curated sartorial pairings tailored for distinction',
}) => {
  // Filter products by category similarity or flagship recommendations, excluding already selected items
  const recommendations = React.useMemo(() => {
    let pool = ALL_PRODUCTS.filter((p) => !excludeIds.includes(p.id));
    if (currentCategory && currentCategory !== 'all') {
      const sameCategory = pool.filter((p) => p.category === currentCategory);
      if (sameCategory.length >= 2) {
        pool = [...sameCategory, ...pool.filter((p) => p.category !== currentCategory)];
      }
    }
    return pool.slice(0, 4);
  }, [currentCategory, excludeIds]);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 gap-4 mb-10">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
            Atelier Recommendations
          </div>
          <h3 className="font-serif-lux text-2xl sm:text-3xl text-[#FAF8F5] tracking-wide mt-1">
            {title}
          </h3>
        </div>
        <p className="text-xs font-sans-clean text-white/50 max-w-sm">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((prod) => {
          const isWishlisted = wishlistIds.includes(prod.id);
          const defaultSize = prod.sizes[0] || 'M';
          const defaultColor = prod.colors[0]?.name || 'Standard';

          return (
            <div
              key={prod.id}
              className="group bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#C8A97E]/70 transition-all duration-300 shadow-xl"
            >
              {/* Product Image with Hover Second Image */}
              <div
                className="relative h-72 sm:h-80 bg-black overflow-hidden cursor-pointer"
                onClick={() => onQuickView(prod)}
              >
                <img
                  src={prod.primaryImage}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                />
                <img
                  src={prod.hoverImage || prod.primaryImage}
                  alt={`${prod.name} alternate view`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(prod.id);
                  }}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isWishlisted
                      ? 'bg-[#C8A97E] text-black shadow-lg scale-105'
                      : 'bg-black/60 text-white/70 hover:text-white border border-white/15'
                  }`}
                  aria-label="Save to Wishlist"
                >
                  <span className="text-sm">{isWishlisted ? '♥' : '♡'}</span>
                </button>

                {/* Quick View Prompt */}
                <div className="absolute bottom-3 inset-x-3 bg-black/80 backdrop-blur-md py-2 text-center text-[10px] font-sans-clean uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                  Quick View
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#C8A97E] uppercase tracking-wider">
                    {prod.collection}
                  </div>
                  <h4
                    onClick={() => onQuickView(prod)}
                    className="font-serif-lux text-base text-[#FAF8F5] leading-snug hover:text-[#C8A97E] transition-colors cursor-pointer line-clamp-2"
                  >
                    {prod.name}
                  </h4>
                  <div className="font-mono text-xs text-[#FAF8F5] font-semibold pt-0.5">
                    {prod.formattedPrice}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 pt-1">
                  {prod.colors.slice(0, 4).map((c) => (
                    <span
                      key={c.name}
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                  {prod.colors.length > 4 && (
                    <span className="text-[10px] font-mono text-white/40">
                      +{prod.colors.length - 4}
                    </span>
                  )}
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={() => onAddToBag(prod, defaultSize, defaultColor)}
                  className="w-full py-2.5 px-3 text-[11px] font-sans-clean uppercase tracking-[0.2em] bg-transparent border border-white/20 text-white hover:bg-[#FAF8F5] hover:text-black hover:border-white transition-all text-center"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
