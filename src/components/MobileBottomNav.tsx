import React from 'react';

interface MobileBottomNavProps {
  activeView: string;
  onNavigateHome: () => void;
  onNavigateShop: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  cartCount: number;
  wishlistCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeView,
  onNavigateHome,
  onNavigateShop,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onOpenAccount,
  cartCount,
  wishlistCount,
}) => {
  const isHomeActive = activeView === 'showroom';
  const isShopActive = activeView === 'shop' || activeView === 'pdp';
  const isWishlistActive = activeView === 'wishlist';
  const isCartActive = activeView === 'cart' || activeView === 'checkout';

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-xl border-t border-white/10 pb-safe transition-transform duration-300 shadow-[0_-10px_35px_rgba(0,0,0,0.85)]"
    >
      <div className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-around">
        {/* 1. SHOWROOM / HOME */}
        <button
          onClick={onNavigateHome}
          className={`flex-1 py-1.5 px-1 flex flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-90 touch-manipulation ${
            isHomeActive ? 'text-[#C8A97E]' : 'text-white/60 hover:text-white/90'
          }`}
        >
          <div className="relative">
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth={isHomeActive ? '2.2' : '1.75'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5z" />
            </svg>
            {isHomeActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8A97E] shadow-[0_0_8px_#C8A97E]" />
            )}
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.14em] font-medium leading-none">
            Maison
          </span>
        </button>

        {/* 2. COLLECTION / SHOP */}
        <button
          onClick={onNavigateShop}
          className={`flex-1 py-1.5 px-1 flex flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-90 touch-manipulation ${
            isShopActive ? 'text-[#C8A97E]' : 'text-white/60 hover:text-white/90'
          }`}
        >
          <div className="relative">
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth={isShopActive ? '2.2' : '1.75'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            {isShopActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8A97E] shadow-[0_0_8px_#C8A97E]" />
            )}
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.14em] font-medium leading-none">
            Catalog
          </span>
        </button>

        {/* 3. SEARCH QUICK TRIGGER */}
        <button
          onClick={onOpenSearch}
          className="flex-1 py-1.5 px-1 flex flex-col items-center justify-center gap-1 text-white/60 hover:text-white/90 active:scale-90 transition-all duration-200 touch-manipulation"
        >
          <div className="relative">
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.14em] font-medium leading-none">
            Search
          </span>
        </button>

        {/* 4. SAVED / WISHLIST WITH BADGE */}
        <button
          onClick={onOpenWishlist}
          className={`flex-1 py-1.5 px-1 flex flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-90 touch-manipulation ${
            isWishlistActive ? 'text-[#C8A97E]' : 'text-white/60 hover:text-white/90'
          }`}
        >
          <div className="relative">
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth={isWishlistActive ? '2.2' : '1.75'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[15px] h-[15px] px-1 rounded-full bg-[#C8A97E] text-[#0C0C0C] text-[8.5px] font-mono font-bold flex items-center justify-center shadow-md">
                {wishlistCount}
              </span>
            )}
            {isWishlistActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8A97E] shadow-[0_0_8px_#C8A97E]" />
            )}
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.14em] font-medium leading-none">
            Saved
          </span>
        </button>

        {/* 5. PRIVATE BAG / CART WITH BADGE */}
        <button
          onClick={onOpenCart}
          className={`flex-1 py-1.5 px-1 flex flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-90 touch-manipulation ${
            isCartActive ? 'text-[#C8A97E]' : 'text-white/60 hover:text-white/90'
          }`}
        >
          <div className="relative">
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth={isCartActive ? '2.2' : '1.75'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[16px] h-[16px] px-1 rounded-full bg-[#FAF8F5] text-[#0C0C0C] text-[8.5px] font-mono font-bold flex items-center justify-center shadow-lg border border-black/40">
                {cartCount}
              </span>
            )}
            {isCartActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8A97E] shadow-[0_0_8px_#C8A97E]" />
            )}
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.14em] font-medium leading-none">
            Bag
          </span>
        </button>
      </div>
    </nav>
  );
};
