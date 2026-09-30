import React, { useState } from 'react';
import { ShopProduct } from '../data/shopProducts.ts';
import { MNMonogramMaster } from './MNLogos.tsx';

interface QuickViewProps {
  product: ShopProduct | null;
  onClose: () => void;
  onAddToBag: (product: ShopProduct, size: string, color: string) => void;
  onOpenFullDetail: (product: ShopProduct) => void;
}

export const QuickViewModal: React.FC<QuickViewProps> = ({
  product,
  onClose,
  onAddToBag,
  onOpenFullDetail,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '40R');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [activeImage, setActiveImage] = useState<string>(product.primaryImage);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToBag(product, selectedSize, selectedColor);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#111111] border border-[#C8A97E]/40 shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center text-white/60 hover:text-white bg-black/60 border border-white/10 transition-colors"
          aria-label="Close Quick View"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image & Angle Selector */}
          <div className="md:col-span-6 bg-[#080808] flex flex-col justify-between p-6">
            <div className="relative h-[420px] md:h-[480px] overflow-hidden">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Tag bottom-left */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] font-mono text-[#C8A97E] uppercase">
                <MNMonogramMaster variant="champagne-gold" size={16} />
                <span>{product.collection}</span>
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => setActiveImage(product.primaryImage)}
                className={`w-16 h-20 border overflow-hidden transition-all ${
                  activeImage === product.primaryImage
                    ? 'border-[#C8A97E] ring-1 ring-[#C8A97E]'
                    : 'border-white/15 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={product.primaryImage}
                  alt="Primary view"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </button>

              <button
                onClick={() => setActiveImage(product.hoverImage)}
                className={`w-16 h-20 border overflow-hidden transition-all ${
                  activeImage === product.hoverImage
                    ? 'border-[#C8A97E] ring-1 ring-[#C8A97E]'
                    : 'border-white/15 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={product.hoverImage}
                  alt="Secondary detail view"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:col-span-6 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                  M.N Sartorial Collection
                </span>
                <h3 className="font-serif-lux text-2xl sm:text-3xl text-[#FAF8F5] mt-1">
                  {product.name}
                </h3>
                <div className="text-xl font-mono text-[#FAF8F5] mt-2 font-semibold">
                  {product.formattedPrice}
                </div>
              </div>

              <p className="text-xs font-sans-clean text-[#D8D4CC]/80 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex justify-between text-xs font-sans-clean">
                  <span className="text-white/50">Selected Color:</span>
                  <span className="text-white font-medium">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-sans-clean transition-all ${
                        selectedColor === c.name
                          ? 'border-[#C8A97E] bg-[#C8A97E]/10 text-white'
                          : 'border-white/15 text-white/60 hover:border-white/30'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-sans-clean">
                  <span className="text-white/50">Select Size:</span>
                  <span className="text-[#C8A97E] text-[11px]">Bespoke Made-to-Measure Available</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-2 text-xs font-mono border transition-all ${
                        selectedSize === sz
                          ? 'bg-white text-black font-semibold border-white'
                          : 'border-white/15 text-white/70 hover:border-white/30'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tailoring Details */}
              <div className="space-y-1 pt-2 border-t border-white/10 text-[11px] font-sans-clean text-white/60">
                <div className="flex justify-between">
                  <span className="text-white/40">Fabric:</span>
                  <span className="text-white/90 text-right">{product.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Mill Origin:</span>
                  <span className="text-[#C8A97E] text-right">{product.fabricOrigin}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={handleAdd}
                className="w-full py-3.5 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors shadow-xl"
              >
                {addedNotice ? '✓ Added to Private Bag' : 'Add to Bag'}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenFullDetail(product);
                }}
                className="w-full py-3 text-xs font-sans-clean uppercase tracking-[0.2em] border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors text-center"
              >
                View Full Sartorial Specifications →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
