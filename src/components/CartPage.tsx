import React, { useState } from 'react';
import { CartItem } from './CartDrawer.tsx';
import { ShopProduct, ALL_PRODUCTS } from '../data/shopProducts.ts';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';
import { ProductRecommendations } from './ProductRecommendations.tsx';

interface CartPageProps {
  items: CartItem[];
  savedForLaterItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onSaveForLater: (item: CartItem) => void;
  onMoveToBag: (item: CartItem) => void;
  onRemoveSavedItem: (id: string) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
  onExploreNewArrivals: () => void;
  onQuickView: (product: ShopProduct) => void;
  onAddToBag: (product: ShopProduct, size: string, color: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  items,
  savedForLaterItems,
  onUpdateQuantity,
  onRemoveItem,
  onSaveForLater,
  onMoveToBag,
  onRemoveSavedItem,
  onCheckout,
  onContinueShopping,
  onExploreNewArrivals,
  onQuickView,
  onAddToBag,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [promoError, setPromoError] = useState<string | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const discountAmount = promoApplied ? Math.round(subtotal * 0.1) : 0; // 10% VIP Atelier Welcome
  const finalTotal = subtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    if (promoCode.trim().toUpperCase() === 'MN10' || promoCode.trim().toUpperCase() === 'VIP') {
      setPromoApplied(true);
      setPromoError(null);
    } else {
      setPromoError('Invalid bespoke privilege code. Try "MN10" for VIP concierge access.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] font-sans-clean">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs font-sans-clean text-white/50 tracking-wider">
          <button onClick={onContinueShopping} className="hover:text-[#C8A97E] transition-colors">
            M.N Collection
          </button>
          <span>/</span>
          <span className="text-[#C8A97E] font-medium">Your Shopping Bag</span>
        </div>
      </div>

      {/* Main Cart Workspace */}
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-10">
        {/* Large Elegant Heading */}
        <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E] mb-1">
              Private Wardrobe Bag
            </div>
            <h1 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
              YOUR SHOPPING BAG
            </h1>
          </div>
          <div className="text-xs font-mono text-white/50">
            {totalCount} {totalCount === 1 ? 'Creation' : 'Creations'} · Insured Worldwide Valet
          </div>
        </div>

        {items.length === 0 ? (
          /* 4. EMPTY SHOPPING BAG STATE */
          <div className="py-24 px-6 bg-[#121212] border border-white/10 text-center space-y-8 my-8 shadow-2xl">
            <div className="relative inline-block p-8 border border-[#C8A97E]/30 bg-[#161616] shadow-2xl mx-auto">
              <div className="absolute -inset-1.5 border border-[#C8A97E]/10 pointer-events-none" />
              <MNCompactSeal variant="champagne-gold" size={90} />
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#FAF8F5] tracking-wide">
                YOUR BAG IS EMPTY
              </h2>
              <p className="text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                Discover refined pieces designed for your next moment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
              <button
                onClick={onContinueShopping}
                className="w-full sm:w-auto py-3.5 px-8 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-xl"
              >
                EXPLORE COLLECTION
              </button>
              <button
                onClick={onExploreNewArrivals}
                className="w-full sm:w-auto py-3.5 px-8 text-xs font-sans-clean uppercase tracking-[0.25em] border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors text-center"
              >
                NEW ARRIVALS
              </button>
            </div>

            <div className="pt-8 border-t border-white/5 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] font-mono text-white/40 uppercase">
              <div>Bespoke Three-Piece Suits</div>
              <div>Egyptian Cotton Shirts</div>
              <div>Pakistani Ceremonial Silk</div>
            </div>
          </div>
        ) : (
          /* Populated Cart Workspace: 2-Column Responsive Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT: PRODUCTS LIST (8 COLUMNS) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Product Items Table Header (Desktop) */}
              <div className="hidden sm:grid grid-cols-12 text-[11px] font-sans-clean uppercase tracking-wider text-white/50 border-b border-white/10 pb-3 px-4">
                <div className="col-span-6">Creation</div>
                <div className="col-span-2 text-center">Unit Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-white/10 border-y border-white/10">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="py-6 px-2 sm:px-4 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center group transition-colors hover:bg-white/[0.02]"
                  >
                    {/* Creation Details (Col 6) */}
                    <div className="w-full sm:col-span-6 flex gap-4 items-center">
                      <div className="w-24 h-32 bg-black shrink-0 overflow-hidden border border-white/10">
                        <img
                          src={item.product.primaryImage}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="space-y-1.5 min-w-0 flex-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
                          {item.product.collection}
                        </span>
                        <h3 className="font-serif-lux text-base sm:text-lg text-[#FAF8F5] leading-snug line-clamp-2">
                          {item.product.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-white/60 pt-1">
                          <span>
                            Size: <strong className="text-white font-medium">{item.size}</strong>
                          </span>
                          <span>·</span>
                          <span>
                            Color: <strong className="text-white font-medium">{item.color}</strong>
                          </span>
                        </div>

                        {/* Save for later & Remove links */}
                        <div className="flex items-center gap-4 text-[11px] font-sans-clean pt-2">
                          <button
                            onClick={() => onSaveForLater(item)}
                            className="text-white/60 hover:text-[#C8A97E] transition-colors underline-offset-2 hover:underline"
                          >
                            Save for Later
                          </button>
                          <span className="text-white/20">|</span>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-white/40 hover:text-red-400 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Unit Price (Col 2) */}
                    <div className="w-full sm:w-auto sm:col-span-2 text-left sm:text-center text-xs sm:text-sm font-mono text-white/70">
                      <span className="sm:hidden text-white/40 text-xs mr-2">Unit Price:</span>
                      {item.product.formattedPrice}
                    </div>

                    {/* Quantity Stepper (Col 2) */}
                    <div className="w-full sm:w-auto sm:col-span-2 flex items-center justify-between sm:justify-center">
                      <span className="sm:hidden text-white/40 text-xs">Quantity:</span>
                      <div className="flex items-center border border-white/20 bg-black/50 text-xs font-mono">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-white font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Subtotal (Col 2) */}
                    <div className="w-full sm:w-auto sm:col-span-2 text-left sm:text-right font-mono text-sm sm:text-base text-[#FAF8F5] font-semibold">
                      <span className="sm:hidden text-white/40 text-xs mr-2">Subtotal:</span>
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Link */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={onContinueShopping}
                  className="text-xs font-sans-clean uppercase tracking-wider text-white/70 hover:text-[#C8A97E] flex items-center gap-2 transition-colors"
                >
                  <span>←</span>
                  <span>Continue Exploring Collection</span>
                </button>
                <div className="text-[11px] font-mono text-white/40">
                  Item count: {totalCount}
                </div>
              </div>

              {/* SAVED FOR LATER SECTION */}
              {savedForLaterItems.length > 0 && (
                <div className="pt-12 mt-12 border-t border-white/10 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h2 className="font-serif-lux text-2xl text-[#FAF8F5]">
                      SAVED FOR LATER ({savedForLaterItems.length})
                    </h2>
                    <span className="text-xs font-sans-clean text-white/50">
                      Moved from active bag
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {savedForLaterItems.map((saved) => (
                      <div
                        key={saved.id}
                        className="flex gap-4 p-4 bg-[#121212] border border-white/10"
                      >
                        <img
                          src={saved.product.primaryImage}
                          alt={saved.product.name}
                          referrerPolicy="no-referrer"
                          className="w-18 h-24 object-cover object-top border border-white/10"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="space-y-1">
                            <h4 className="font-serif-lux text-sm text-[#FAF8F5] line-clamp-1">
                              {saved.product.name}
                            </h4>
                            <div className="font-mono text-xs text-[#C8A97E]">
                              {saved.product.formattedPrice}
                            </div>
                            <div className="text-[10px] text-white/50">
                              Size: {saved.size} · {saved.color}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-white/5">
                            <button
                              onClick={() => onMoveToBag(saved)}
                              className="text-xs font-sans-clean uppercase tracking-wider text-[#C8A97E] hover:underline"
                            >
                              Move to Bag
                            </button>
                            <button
                              onClick={() => onRemoveSavedItem(saved.id)}
                              className="text-[11px] text-white/40 hover:text-red-400"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: 3. CART SUMMARY (4 COLUMNS) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="p-8 bg-[#141414] border border-white/10 space-y-6 shadow-2xl">
                <div className="border-b border-white/10 pb-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                    Concierge Order
                  </div>
                  <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">
                    ORDER SUMMARY
                  </h3>
                </div>

                {/* Subtotal, Shipping, Total */}
                <div className="space-y-3.5 text-xs font-sans-clean">
                  <div className="flex justify-between items-center text-white/70">
                    <span>Subtotal</span>
                    <span className="font-mono text-sm text-[#FAF8F5]">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-white/70">
                    <div className="space-y-0.5">
                      <span>Insured Worldwide Shipping</span>
                      <span className="text-[10px] text-[#C8A97E] block">
                        DHL Express Valet Delivery
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#C8A97E] uppercase">
                      Complimentary
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-white/70">
                    <div className="space-y-0.5">
                      <span>Archival Packaging Suite</span>
                      <span className="text-[10px] text-white/40 block">
                        Rigid Box, Garment Bag &amp; Cedar Hanger
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#C8A97E] uppercase">
                      Included
                    </span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between items-center text-[#C8A97E] border-t border-white/5 pt-2">
                      <span>VIP Concierge Privilege (10%)</span>
                      <span className="font-mono text-sm">
                        -${discountAmount.toLocaleString()}
                      </span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/15 flex justify-between items-baseline">
                    <span className="text-sm uppercase tracking-wider text-white font-medium">
                      Estimated Total
                    </span>
                    <span className="text-2xl font-mono text-[#FAF8F5] font-bold">
                      ${finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Prominent Checkout Button */}
                <button
                  onClick={onCheckout}
                  className="w-full py-4 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-xl block"
                >
                  PROCEED TO CHECKOUT
                </button>

                {/* Bespoke VIP Promo Form */}
                <form onSubmit={handleApplyPromo} className="pt-2 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-sans-clean text-white/60">
                    Have a VIP Concierge Privilege Code?
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. MN10"
                      className="flex-1 bg-black/60 border border-white/15 px-3 py-2 text-xs font-mono uppercase text-white placeholder-white/30 focus:outline-none focus:border-[#C8A97E]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 border border-white/20 text-xs font-sans-clean uppercase tracking-wider hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <div className="text-[11px] font-mono text-[#C8A97E]">
                      ✓ VIP Privilege code &quot;{promoCode.toUpperCase()}&quot; applied.
                    </div>
                  )}
                  {promoError && (
                    <div className="text-[11px] font-mono text-red-400">
                      {promoError}
                    </div>
                  )}
                </form>

                {/* Shipping & Atelier Assurance Dossier */}
                <div className="p-4 bg-black/40 border border-white/10 space-y-2.5 text-[11px] font-sans-clean text-white/60">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[#C8A97E]">✦</span>
                    <strong className="font-medium text-xs">M.N Atelier Assurances:</strong>
                  </div>
                  <p>• Complimentary worldwide DHL Express insured courier dispatch.</p>
                  <p>• 14-day private concierge returns with complimentary home collection.</p>
                  <p>• Up to $150 bespoke tailoring alteration allowance for made-to-measure break.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 7. PRODUCT RECOMMENDATIONS: YOU MAY ALSO LIKE */}
      <ProductRecommendations
        title="YOU MAY ALSO LIKE"
        subtitle="Sartorial creations handpicked to complete your wardrobe"
        excludeIds={items.map((i) => i.product.id)}
        onQuickView={onQuickView}
        onAddToBag={onAddToBag}
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
      />

      {/* 9. MOBILE STICKY CHECKOUT BAR (WHEN CART HAS ITEMS) */}
      {items.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-[#121212]/95 backdrop-blur-md border-t border-white/15 p-4 lg:hidden flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono text-white/50 uppercase">
              Total ({totalCount} {totalCount === 1 ? 'item' : 'items'})
            </div>
            <div className="font-mono text-lg font-bold text-[#FAF8F5]">
              ${finalTotal.toLocaleString()}
            </div>
          </div>

          <button
            onClick={onCheckout}
            className="flex-1 py-3 px-6 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-xl"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};
