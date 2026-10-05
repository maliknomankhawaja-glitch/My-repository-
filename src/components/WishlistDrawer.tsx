import React from 'react';
import { ShopProduct } from '../data/shopProducts.ts';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  allProducts: ShopProduct[];
  onRemoveFromWishlist: (productId: string) => void;
  onQuickView: (product: ShopProduct) => void;
  onAddToBag: (product: ShopProduct, size: string, color: string) => void;
  onViewFullWishlist: () => void;
  onExploreCollection: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  allProducts,
  onRemoveFromWishlist,
  onQuickView,
  onAddToBag,
  onViewFullWishlist,
  onExploreCollection,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = allProducts.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end max-sm:items-end bg-black/85 backdrop-blur-md transition-all duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-label="Close Wishlist"
      />

      {/* Drawer Container (Side drawer on desktop, bottom sheet on mobile) */}
      <div className="relative w-full max-w-md bg-[#0F0F0F] border-l max-sm:border-l-0 max-sm:border-t max-sm:border-[#C8A97E]/40 max-sm:rounded-t-3xl shadow-2xl h-full max-sm:max-h-[92vh] flex flex-col justify-between z-10 animate-in slide-in-from-right max-sm:slide-in-from-bottom duration-300 ease-out">
        {/* Mobile Drag Indicator */}
        <div className="sm:hidden pt-2 flex justify-center bg-[#121212] rounded-t-3xl">
          <div className="w-12 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#121212]">
          <div className="flex items-center gap-3">
            <MNMonogramMaster variant="champagne-gold" size={26} />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                Private Wardrobe
              </div>
              <h3 className="font-serif-lux text-xl text-[#FAF8F5] tracking-wide">
                Saved Wishlist
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-white/50 px-2 py-0.5 border border-white/10">
              {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'Item' : 'Items'}
            </span>
            <button
              onClick={onClose}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-colors active:scale-95 touch-manipulation"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistedProducts.length === 0 ? (
            /* 6. EMPTY WISHLIST STATE */
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 px-4">
              <div className="relative p-6 border border-[#C8A97E]/30 bg-[#141414] shadow-2xl">
                <div className="absolute -inset-1 border border-[#C8A97E]/10 pointer-events-none" />
                <MNCompactSeal variant="champagne-gold" size={72} />
              </div>

              <div className="space-y-2 max-w-xs">
                <h4 className="font-serif-lux text-2xl text-[#FAF8F5] tracking-wide">
                  YOUR WISHLIST IS WAITING
                </h4>
                <p className="text-xs font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                  Save the pieces you love and return to them whenever you are ready.
                </p>
              </div>

              <div className="pt-2 w-full max-w-xs">
                <button
                  onClick={() => {
                    onClose();
                    onExploreCollection();
                  }}
                  className="w-full py-3.5 px-4 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-lg"
                >
                  EXPLORE COLLECTION
                </button>
              </div>

              <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest pt-4">
                Saved garments remain reserved for your session
              </div>
            </div>
          ) : (
            wishlistedProducts.map((product) => {
              const defaultSize = product.sizes[0] || 'M';
              const defaultColor = product.colors[0]?.name || 'Deep Black';

              return (
                <div
                  key={product.id}
                  className="group flex gap-4 p-4 bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {/* Thumbnail */}
                  <div
                    className="w-20 h-28 bg-black shrink-0 overflow-hidden border border-white/10 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onQuickView(product);
                    }}
                  >
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          className="font-serif-lux text-sm text-[#FAF8F5] leading-snug line-clamp-2 hover:text-[#C8A97E] cursor-pointer"
                          onClick={() => {
                            onClose();
                            onQuickView(product);
                          }}
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-[#C8A97E] hover:text-red-400 text-sm transition-colors shrink-0 p-0.5"
                          title="Remove from wishlist"
                          aria-label="Remove from wishlist"
                        >
                          ♥
                        </button>
                      </div>

                      <div className="font-mono text-xs text-[#C8A97E] font-medium">
                        {product.formattedPrice}
                      </div>

                      <div className="text-[10px] text-white/50">
                        {product.colors.length} Available Colors · Sizes: {product.sizes.slice(0, 3).join(', ')}...
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-2 gap-2">
                      <button
                        onClick={() => {
                          onAddToBag(product, defaultSize, defaultColor);
                        }}
                        className="py-1.5 px-3 text-[11px] font-sans-clean uppercase tracking-wider bg-white text-black hover:bg-[#C8A97E] transition-colors font-medium flex-1 text-center"
                      >
                        Add to Bag
                      </button>

                      <button
                        onClick={() => {
                          onClose();
                          onQuickView(product);
                        }}
                        className="py-1.5 px-2 text-[11px] font-sans-clean uppercase tracking-wider border border-white/20 text-white hover:border-[#C8A97E] transition-colors text-center"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        {wishlistedProducts.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#121212] border-t border-white/10 space-y-2 pb-safe">
            <button
              onClick={() => {
                onClose();
                onViewFullWishlist();
              }}
              className="w-full py-3.5 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-xl block"
            >
              View Full Wishlist Page →
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-[11px] font-sans-clean uppercase tracking-wider border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors text-center"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
