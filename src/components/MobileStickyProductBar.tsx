import React from 'react';
import { ShopProduct } from '../data/shopProducts.ts';

interface MobileStickyProductBarProps {
  product: ShopProduct;
  selectedSize: string;
  selectedColor: string;
  onAddToBag: () => void;
  onOpenSizeGuide: () => void;
}

export const MobileStickyProductBar: React.FC<MobileStickyProductBarProps> = ({
  product,
  selectedSize,
  selectedColor,
  onAddToBag,
  onOpenSizeGuide,
}) => {
  return (
    <div className="lg:hidden fixed bottom-[57px] left-0 right-0 z-30 bg-[#121212]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-2xl transition-all animate-in slide-in-from-bottom-2 duration-300">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Left: Product Thumbnail & Price */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-12 rounded bg-black overflow-hidden border border-white/15 shrink-0">
            <img
              src={product.primaryImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="truncate">
            <div className="text-[11px] font-serif-lux text-[#FAF8F5] truncate font-medium">
              {product.name}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="text-[#C8A97E] font-semibold">{product.formattedPrice}</span>
              <span className="text-white/40">·</span>
              <button
                onClick={onOpenSizeGuide}
                className="text-white/60 underline hover:text-white"
              >
                Size: {selectedSize || 'Choose'}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Quick Add Button */}
        <button
          onClick={onAddToBag}
          className="shrink-0 px-4 py-2.5 bg-[#C8A97E] hover:bg-[#D8BE96] text-[#0C0C0C] text-[10.5px] font-sans-clean uppercase tracking-[0.16em] font-bold transition-all active:scale-95 shadow-lg flex items-center gap-1.5 touch-manipulation"
        >
          <span>Commission</span>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
