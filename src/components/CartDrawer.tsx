import React from 'react';
import { ShopProduct } from '../data/shopProducts.ts';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';

export interface CartItem {
  id: string; // unique item instance id
  product: ShopProduct;
  size: string;
  color: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onSaveForLater: (item: CartItem) => void;
  onCheckout: () => void;
  onViewFullCart: () => void;
  onExploreCollection: () => void;
  onExploreNewArrivals: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onSaveForLater,
  onCheckout,
  onViewFullCart,
  onExploreCollection,
  onExploreNewArrivals,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-md transition-all duration-300">
      {/* Backdrop click to close */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-label="Close Shopping Bag"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#0F0F0F] border-l border-white/10 shadow-2xl h-full flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300 ease-out">
        {/* Header Lockup */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121212]">
          <div className="flex items-center gap-3">
            <MNMonogramMaster variant="champagne-gold" size={26} />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                N.K FABRICS
              </div>
              <h3 className="font-serif-lux text-xl text-[#FAF8F5] tracking-wide">
                Shopping Bag
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-white/50 px-2 py-0.5 border border-white/10">
              {totalCount} {totalCount === 1 ? 'Item' : 'Items'}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Complimentary Insured Courier Status */}
        <div className="px-6 py-2.5 bg-[#161616] border-b border-white/5 flex items-center justify-between text-xs font-sans-clean">
          <div className="flex items-center gap-2 text-white/70 text-[11px]">
            <span className="text-[#C8A97E]">✦</span>
            <span>Complimentary Insured Courier</span>
          </div>
          <span className="text-[10px] font-mono text-[#C8A97E] uppercase tracking-wider">
            Worldwide Delivery
          </span>
        </div>

        {/* Scrollable Items Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            /* 4. EMPTY SHOPPING BAG STATE */
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 px-4">
              {/* Subtle N.K FABRICS Visual Treatment */}
              <div className="relative p-6 border border-[#C8A97E]/30 bg-[#141414] shadow-2xl">
                <div className="absolute -inset-1 border border-[#C8A97E]/10 pointer-events-none" />
                <MNCompactSeal variant="champagne-gold" size={72} />
              </div>

              <div className="space-y-2 max-w-xs">
                <h4 className="font-serif-lux text-2xl text-[#FAF8F5] tracking-wide">
                  YOUR BAG IS EMPTY
                </h4>
                <p className="text-xs font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                  Discover refined pieces designed for your next moment.
                </p>
              </div>

              <div className="space-y-2.5 w-full max-w-xs pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onExploreCollection();
                  }}
                  className="w-full py-3 px-4 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center"
                >
                  EXPLORE COLLECTION
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onExploreNewArrivals();
                  }}
                  className="w-full py-3 px-4 text-xs font-sans-clean uppercase tracking-[0.2em] border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors text-center"
                >
                  NEW ARRIVALS
                </button>
              </div>

              <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest pt-4">
                Bespoke Suiting · Formal Shirting · Traditional Pakistani Couture
              </div>
            </div>
          ) : (
            /* Populated Cart Items */
            items.map((item) => (
              <div
                key={item.id}
                className="group relative flex gap-4 p-4 bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-28 bg-black shrink-0 overflow-hidden border border-white/10">
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif-lux text-sm text-[#FAF8F5] leading-snug line-clamp-2">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-white/40 hover:text-red-400 text-sm transition-colors shrink-0 p-0.5"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="font-mono text-xs text-[#C8A97E] font-medium">
                      {item.product.formattedPrice}
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-sans-clean text-white/60">
                      <span>Size: <strong className="text-white font-normal">{item.size}</strong></span>
                      <span>·</span>
                      <span className="truncate">{item.color}</span>
                    </div>
                  </div>

                  {/* Quantity Stepper & Save for Later */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-2">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-white/15 bg-black/40 text-xs font-mono">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Actions: Save for Later & Remove */}
                    <div className="flex items-center gap-3 text-[11px] font-sans-clean">
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
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-6 bg-[#121212] border-t border-white/10 space-y-4">
            {/* Packaging Assurance */}
            <div className="p-3 bg-black/60 border border-[#C8A97E]/30 flex items-center gap-3 text-[11px] font-sans-clean text-white/70">
              <span className="text-[#C8A97E]">🎁</span>
              <span>Includes Archival Rigid Presentation Box &amp; Cedar Hanger</span>
            </div>

            {/* Subtotal Display */}
            <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
              <div>
                <span className="text-xs font-sans-clean uppercase tracking-widest text-white/60 block">
                  Subtotal
                </span>
                <span className="text-[10px] text-white/40">Taxes calculated at checkout</span>
              </div>
              <span className="text-2xl font-mono text-[#FAF8F5] font-semibold">
                ${subtotal.toLocaleString()}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={onCheckout}
                className="w-full py-4 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-xl block"
              >
                CHECKOUT
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onViewFullCart();
                  }}
                  className="w-full py-2.5 px-3 text-[11px] font-sans-clean uppercase tracking-wider border border-white/20 text-white/80 hover:text-white hover:border-[#C8A97E] transition-colors text-center"
                >
                  View Full Bag →
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-3 text-[11px] font-sans-clean uppercase tracking-wider border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors text-center"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            <div className="text-[9px] font-mono text-center text-white/40 uppercase tracking-widest pt-1">
              Complimentary Worldwide Shipping · 14-Day Private Returns
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
