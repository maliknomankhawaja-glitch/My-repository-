import React, { useState, useEffect, useRef } from 'react';
import { ALL_PRODUCTS, ShopProduct } from '../data/shopProducts.ts';
import { MNMonogramMaster } from './MNLogos.tsx';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ShopProduct) => void;
  onSearchCategory: (category: string) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSearchCategory,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Popular / Curated Search Suggestions
  const POPULAR_SEARCHES = [
    { label: 'Black Suit', category: 'suits' },
    { label: 'Kurta', category: 'kurtas' },
    { label: 'Formal Shirt', category: 'formal-shirts' },
    { label: 'Waistcoat', category: 'waistcoats' },
    { label: 'Shalwar Kameez', category: 'shalwar-kameez' },
    { label: 'Tailored Trousers', category: 'trousers' },
  ];

  // Auto-focus when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter products based on query
  const matchingProducts = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return ALL_PRODUCTS.filter((product) => {
      return (
        product.name.toLowerCase().includes(trimmed) ||
        product.category.toLowerCase().includes(trimmed) ||
        product.collection.toLowerCase().includes(trimmed) ||
        product.tagline.toLowerCase().includes(trimmed) ||
        product.fabric.toLowerCase().includes(trimmed) ||
        product.colors.some((c) => c.name.toLowerCase().includes(trimmed))
      );
    }).slice(0, 6);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Header bar */}
      <div className="max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <MNMonogramMaster variant="champagne-gold" size={26} />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
            N.K FABRICS Search
          </span>
        </div>

        <button
          onClick={onClose}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white border border-white/15 px-3 py-2 transition-colors active:scale-95 touch-manipulation"
          aria-label="Close Search (ESC)"
        >
          <span className="hidden sm:inline">ESC</span>
          <span className="text-base sm:text-xs">✕</span>
        </button>
      </div>

      {/* Main search workspace */}
      <div className="max-w-4xl mx-auto w-full px-6 py-10 md:py-16 flex-1 overflow-y-auto">
        {/* Large Input Field */}
        <div className="relative border-b-2 border-white/20 focus-within:border-[#C8A97E] transition-colors pb-3">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search suits, kurtas, shirting, waistcoats..."
            className="w-full bg-transparent text-xl sm:text-3xl md:text-4xl font-serif-lux text-[#FAF8F5] placeholder-white/20 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-sm font-mono p-1"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Popular Searches */}
        {!query && (
          <div className="mt-10 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#C8A97E]">
              Popular Sartorial Searches
            </div>
            <div className="flex flex-wrap gap-2.5">
              {POPULAR_SEARCHES.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setQuery(item.label);
                  }}
                  className="px-4 py-2 bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 hover:border-[#C8A97E]/60 text-xs font-sans-clean text-white/80 transition-all rounded-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Real-time Search Suggestions */}
        {query && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8A97E]">
                {matchingProducts.length}{' '}
                {matchingProducts.length === 1 ? 'Creation Found' : 'Creations Found'}
              </span>
              <span className="text-[10px] font-sans-clean text-white/40">
                Select a garment to view full atelier details
              </span>
            </div>

            {matchingProducts.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-serif-lux text-xl text-white/80">
                  No creations matching &ldquo;{query}&rdquo;
                </p>
                <p className="text-xs font-sans-clean text-white/50 max-w-sm mx-auto">
                  Try searching for &ldquo;Black Suit&rdquo;, &ldquo;Kurta&rdquo;, &ldquo;Formal Shirt&rdquo;, or &ldquo;Waistcoat&rdquo;.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                    className="group bg-[#121212] border border-white/10 hover:border-[#C8A97E] transition-all duration-300 p-3 cursor-pointer flex gap-3.5 items-center"
                  >
                    <div className="w-16 h-22 bg-black shrink-0 overflow-hidden border border-white/10">
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[9px] font-mono text-[#C8A97E] uppercase tracking-wider block">
                        {product.collection}
                      </span>
                      <h4 className="font-serif-lux text-sm text-[#FAF8F5] leading-snug line-clamp-1 group-hover:text-[#C8A97E] transition-colors">
                        {product.name}
                      </h4>
                      <div className="font-mono text-xs text-white/80">
                        {product.formattedPrice}
                      </div>
                      <div className="text-[10px] text-white/40 truncate">
                        {product.colors.map((c) => c.name).join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer hint */}
      <div className="border-t border-white/5 py-4 px-6 text-center text-[10px] font-mono text-white/40 uppercase tracking-widest">
        N.K FABRICS Savile Row Suiting &amp; Pakistani Haute Couture
      </div>
    </div>
  );
};
