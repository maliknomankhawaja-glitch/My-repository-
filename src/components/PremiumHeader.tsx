import React, { useState, useEffect, useRef } from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';

// Mega Menu Editorial Images
import IMG_MEGA_SUIT from '../assets/images/mn_suit_black_signature_1790693702392.jpg';
import IMG_MEGA_TRAD from '../assets/images/mn_traditional_eid_wedding_1790693689026.jpg';
import IMG_MEGA_FORMAL from '../assets/images/fashion_evening_suit_cut_1790693303536.jpg';

interface PremiumHeaderProps {
  onNavigateHome: () => void;
  onNavigateShop: (category?: string, color?: string) => void;
  onNavigateAbout: () => void;
  onNavigateCart: () => void;
  onNavigateWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  cartCount: number;
  wishlistCount: number;
  activeView: string;
}

export const PremiumHeader: React.FC<PremiumHeaderProps> = ({
  onNavigateHome,
  onNavigateShop,
  onNavigateAbout,
  onNavigateCart,
  onNavigateWishlist,
  onOpenSearch,
  onOpenAccount,
  cartCount,
  wishlistCount,
  activeView,
}) => {
  // Sticky Scroll Detection
  const [isScrolled, setIsScrolled] = useState(false);

  // Active Mega Menu hover state ('suits' | 'formal' | 'traditional' | null)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile Menu Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Mega Menu Hover Handlers with gentle debounce
  const handleMouseEnterNav = (menuKey: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setActiveMegaMenu(menuKey);
  };

  const handleMouseLeaveNav = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div className="bg-[#0A0A0A] border-b border-white/5 py-1.5 px-6 text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] text-center flex items-center justify-between select-none">
        <span className="hidden md:inline text-white/40">Savile Row · Milan · Lahore</span>
        <div className="flex-1 text-center">
          Complimentary Insured Courier Worldwide · Made for Your Moment
        </div>
        <span className="hidden md:inline text-white/40">Private Atelier Appointments</span>
      </div>

      {/* 2. STICKY MAIN HEADER */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'h-16 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'h-20 bg-[#0C0C0C] border-b border-white/10'
        }`}
        onMouseLeave={handleMouseLeaveNav}
      >
        <div className="max-w-7xl mx-auto h-full px-3.5 sm:px-6 flex items-center justify-between">
          {/* LEFT: N.K FABRICS BRAND LOGO */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 sm:gap-3 group text-left transition-opacity hover:opacity-90"
              aria-label="N.K FABRICS Homepage"
            >
              <MNMonogramMaster variant="champagne-gold" size={isScrolled ? 24 : 28} />
              <div className="flex flex-col">
                <span
                  className={`font-serif-lux text-[#FAF8F5] tracking-[0.18em] sm:tracking-[0.2em] font-semibold leading-none transition-all duration-300 ${
                    isScrolled ? 'text-base sm:text-xl' : 'text-lg sm:text-2xl'
                  }`}
                >
                  N.K FABRICS
                </span>
                <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#C8A97E]/80 mt-1">
                  Haute Couture &amp; Textiles
                </span>
              </div>
            </button>
          </div>

          {/* CENTER: DESKTOP NAVIGATION BAR */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] font-sans-clean uppercase tracking-[0.2em]">
            {/* NEW ARRIVALS */}
            <button
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateShop('new-arrivals');
              }}
              className="py-2 text-white/80 hover:text-[#C8A97E] transition-colors relative group"
            >
              <span>NEW ARRIVALS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* SUITS (MEGA MENU TRIGGER) */}
            <button
              onMouseEnter={() => handleMouseEnterNav('suits')}
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateShop('suits');
              }}
              className={`py-2 transition-colors relative group flex items-center gap-1 ${
                activeMegaMenu === 'suits' ? 'text-[#C8A97E]' : 'text-white/80 hover:text-[#C8A97E]'
              }`}
            >
              <span>SUITS</span>
              <span className="text-[8px] text-white/40">▾</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 ${
                  activeMegaMenu === 'suits' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            {/* FORMAL (MEGA MENU TRIGGER) */}
            <button
              onMouseEnter={() => handleMouseEnterNav('formal')}
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateShop('formal-shirts');
              }}
              className={`py-2 transition-colors relative group flex items-center gap-1 ${
                activeMegaMenu === 'formal' ? 'text-[#C8A97E]' : 'text-white/80 hover:text-[#C8A97E]'
              }`}
            >
              <span>FORMAL</span>
              <span className="text-[8px] text-white/40">▾</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 ${
                  activeMegaMenu === 'formal' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            {/* TRADITIONAL (MEGA MENU TRIGGER) */}
            <button
              onMouseEnter={() => handleMouseEnterNav('traditional')}
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateShop('shalwar-kameez');
              }}
              className={`py-2 transition-colors relative group flex items-center gap-1 ${
                activeMegaMenu === 'traditional' ? 'text-[#C8A97E]' : 'text-white/80 hover:text-[#C8A97E]'
              }`}
            >
              <span>TRADITIONAL</span>
              <span className="text-[8px] text-white/40">▾</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 ${
                  activeMegaMenu === 'traditional' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            {/* SHIRTS */}
            <button
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateShop('formal-shirts');
              }}
              className="py-2 text-white/80 hover:text-[#C8A97E] transition-colors relative group"
            >
              <span>SHIRTS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* TROUSERS */}
            <button
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateShop('trousers');
              }}
              className="py-2 text-white/80 hover:text-[#C8A97E] transition-colors relative group"
            >
              <span>TROUSERS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* ACCESSORIES */}
            <button
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateShop('accessories');
              }}
              className="py-2 text-white/80 hover:text-[#C8A97E] transition-colors relative group"
            >
              <span>ACCESSORIES</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* ABOUT N.K FABRICS */}
            <button
              onClick={() => {
                setActiveMegaMenu(null);
                onNavigateAbout();
              }}
              className={`py-2 transition-colors relative group ${
                activeView === 'about' ? 'text-[#C8A97E] font-medium' : 'text-white/80 hover:text-[#C8A97E]'
              }`}
            >
              <span>ABOUT N.K</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 ${
                  activeView === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          </nav>

          {/* RIGHT UTILITY ICONS: SEARCH, ACCOUNT, WISHLIST, SHOPPING BAG, MENU TOGGLE */}
          <div className="flex items-center gap-1 sm:gap-4 md:gap-6">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-[#C8A97E] active:text-[#C8A97E] transition-colors group p-2.5 min-w-[44px] min-h-[44px] touch-manipulation active:scale-95"
              title="Search Creations (ESC)"
              aria-label="Search Creations"
            >
              <svg
                className="w-4 h-4 text-white/75 group-hover:text-[#C8A97E] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="hidden xl:inline text-[10px] uppercase font-mono tracking-widest text-white/50 group-hover:text-[#C8A97E]">
                Search
              </span>
            </button>

            {/* Account Icon (Desktop) */}
            <button
              onClick={onOpenAccount}
              className="hidden sm:flex items-center gap-1.5 text-xs text-white/70 hover:text-[#C8A97E] transition-colors group p-2 min-h-[44px]"
              title="Client Account &amp; Concierge"
              aria-label="Client Account &amp; Concierge"
            >
              <svg
                className="w-4 h-4 text-white/70 group-hover:text-[#C8A97E] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="hidden xl:inline text-[10px] uppercase font-mono tracking-widest text-white/50 group-hover:text-[#C8A97E]">
                Account
              </span>
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={onNavigateWishlist}
              className="relative flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-[#C8A97E] active:text-[#C8A97E] transition-colors group p-2.5 min-w-[44px] min-h-[44px] touch-manipulation active:scale-95"
              title="Saved Wishlist"
              aria-label="Saved Wishlist"
            >
              <span className="text-sm transition-transform duration-200 group-hover:scale-110">
                ♡
              </span>
              <span className="hidden xl:inline text-[10px] uppercase font-mono tracking-widest text-white/50 group-hover:text-[#C8A97E]">
                Wishlist
              </span>
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-0.5 sm:static font-mono text-[9px] bg-[#C8A97E] text-black font-semibold rounded-full w-4 h-4 flex items-center justify-center -ml-0.5 animate-in zoom-in-50 duration-200">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={onNavigateCart}
              className="relative flex items-center gap-1.5 sm:gap-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C8A97E]/50 px-2.5 sm:px-3 py-2 transition-all group min-h-[44px] touch-manipulation active:scale-95"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <svg
                className="w-3.5 h-3.5 text-white/75 group-hover:text-[#C8A97E] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              <span className="hidden xs:inline text-[10px] font-mono text-white/80 group-hover:text-[#C8A97E] uppercase tracking-wider">
                Bag
              </span>
              <span className="font-mono text-[10px] text-[#C8A97E] font-bold">
                ({cartCount})
              </span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/80 hover:text-white border border-white/10 active:bg-white/10 transition-colors focus:outline-none touch-manipulation active:scale-95"
              aria-label="Toggle Mobile Navigation"
            >
              {isMobileMenuOpen ? (
                <span className="text-base font-mono block w-5 h-5 leading-none">✕</span>
              ) : (
                <div className="space-y-1 w-5">
                  <span className="block w-5 h-[1.5px] bg-white" />
                  <span className="block w-4 h-[1.5px] bg-white ml-auto" />
                  <span className="block w-5 h-[1.5px] bg-white" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* 3. MEGA MENU DROPDOWNS */}
        {activeMegaMenu && (
          <div
            onMouseEnter={() => handleMouseEnterNav(activeMegaMenu)}
            onMouseLeave={handleMouseLeaveNav}
            className="absolute top-full left-0 right-0 bg-[#0E0E0E]/98 backdrop-blur-2xl border-b border-white/15 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-2"
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              {/* SUITS MEGA MENU */}
              {activeMegaMenu === 'suits' && (
                <div className="grid grid-cols-12 gap-10 items-start">
                  {/* Category Links */}
                  <div className="col-span-3 space-y-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
                      Sartorial Suiting
                    </div>
                    <ul className="space-y-2.5 text-xs font-sans-clean tracking-wider">
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('suits');
                          }}
                          className="text-white hover:text-[#C8A97E] transition-colors"
                        >
                          Signature Suits (All)
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('waistcoats');
                          }}
                          className="text-white/70 hover:text-[#C8A97E] transition-colors"
                        >
                          Tailored Waistcoats
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Curated Suit Palette */}
                  <div className="col-span-4 space-y-4 border-l border-white/5 pl-8">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
                      Palette &amp; Cloth
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 text-xs font-sans-clean text-white/70">
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('suits', 'Deep Black');
                        }}
                        className="text-left hover:text-[#C8A97E] flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-black border border-white/20" />
                        <span>Black</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('suits', 'Midnight Navy');
                        }}
                        className="text-left hover:text-[#C8A97E] flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#121c2c] border border-white/20" />
                        <span>Navy</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('suits', 'Charcoal');
                        }}
                        className="text-left hover:text-[#C8A97E] flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a] border border-white/20" />
                        <span>Charcoal</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('suits', 'Slate Grey');
                        }}
                        className="text-left hover:text-[#C8A97E] flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#525252] border border-white/20" />
                        <span>Grey</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('suits', 'Deep Brown');
                        }}
                        className="text-left hover:text-[#C8A97E] flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3d2f25] border border-white/20" />
                        <span>Deep Brown</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('suits', 'Ivory');
                        }}
                        className="text-left hover:text-[#C8A97E] flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#f4f1ea] border border-white/20" />
                        <span>Ivory</span>
                      </button>
                    </div>
                  </div>

                  {/* Editorial Image Showcase */}
                  <div className="col-span-5 flex gap-4 bg-[#141414] border border-white/10 p-3">
                    <img
                      src={IMG_MEGA_SUIT}
                      alt="N.K FABRICS Suit Tailoring"
                      className="w-36 h-48 object-cover object-top border border-white/10"
                    />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#C8A97E]">
                          Savile Row Heritage
                        </span>
                        <h4 className="font-serif-lux text-base text-[#FAF8F5] leading-snug mt-1">
                          The N.K FABRICS Three-Piece Floating Canvas Suit
                        </h4>
                        <p className="text-[11px] font-sans-clean text-white/50 mt-1 font-light leading-relaxed">
                          Hand-molded chest canvas, high-rise trousers, and five-button waistcoat.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('suits');
                        }}
                        className="text-left text-xs font-mono uppercase tracking-wider text-[#C8A97E] hover:underline"
                      >
                        Explore Suit Atelier →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TRADITIONAL MEGA MENU */}
              {activeMegaMenu === 'traditional' && (
                <div className="grid grid-cols-12 gap-10 items-start">
                  <div className="col-span-4 space-y-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
                      Pakistani Haute Couture
                    </div>
                    <ul className="space-y-2.5 text-xs font-sans-clean tracking-wider">
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('shalwar-kameez');
                          }}
                          className="text-white hover:text-[#C8A97E] transition-colors"
                        >
                          Shalwar Kameez
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('kurtas');
                          }}
                          className="text-white hover:text-[#C8A97E] transition-colors"
                        >
                          Kurtas
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('waistcoats');
                          }}
                          className="text-white hover:text-[#C8A97E] transition-colors"
                        >
                          Formal Waistcoats
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-3 space-y-4 border-l border-white/5 pl-8">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
                      Ceremonial Milestones
                    </div>
                    <ul className="space-y-2.5 text-xs font-sans-clean tracking-wider text-white/70">
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('shalwar-kameez');
                          }}
                          className="hover:text-[#C8A97E] transition-colors"
                        >
                          Eid Collection
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('shalwar-kameez');
                          }}
                          className="hover:text-[#C8A97E] transition-colors"
                        >
                          Wedding Collection
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-5 flex gap-4 bg-[#141414] border border-white/10 p-3">
                    <img
                      src={IMG_MEGA_TRAD}
                      alt="Pakistani Traditional Line"
                      className="w-36 h-48 object-cover object-top border border-white/10"
                    />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#C8A97E]">
                          Tradition, Refined
                        </span>
                        <h4 className="font-serif-lux text-base text-[#FAF8F5] leading-snug mt-1">
                          Pure Raw Silk Shalwar Kameez &amp; Kurtas
                        </h4>
                        <p className="text-[11px] font-sans-clean text-white/50 mt-1 font-light leading-relaxed">
                          Clean plackets, structured mandarin bands, and fluid ceremonial drape.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('shalwar-kameez');
                        }}
                        className="text-left text-xs font-mono uppercase tracking-wider text-[#C8A97E] hover:underline"
                      >
                        Explore Traditional Line →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* FORMAL MEGA MENU */}
              {activeMegaMenu === 'formal' && (
                <div className="grid grid-cols-12 gap-10 items-start">
                  <div className="col-span-4 space-y-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
                      Formal Foundations
                    </div>
                    <ul className="space-y-2.5 text-xs font-sans-clean tracking-wider">
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('formal-shirts');
                          }}
                          className="text-white hover:text-[#C8A97E] transition-colors"
                        >
                          Formal Shirts (Egyptian Cotton)
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('trousers');
                          }}
                          className="text-white hover:text-[#C8A97E] transition-colors"
                        >
                          Tailored Dress Trousers
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onNavigateShop('suits');
                          }}
                          className="text-white hover:text-[#C8A97E] transition-colors"
                        >
                          Evening &amp; Black-Tie Wear
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-3 space-y-4 border-l border-white/5 pl-8">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
                      Sartorial Details
                    </div>
                    <div className="text-xs font-sans-clean text-white/60 space-y-1.5 leading-relaxed font-light">
                      <p>• High-rise waistbands with side adjusters</p>
                      <p>• Semi-spread collar with removable brass stays</p>
                      <p>• Mother-of-pearl buttons with shank stitching</p>
                    </div>
                  </div>

                  <div className="col-span-5 flex gap-4 bg-[#141414] border border-white/10 p-3">
                    <img
                      src={IMG_MEGA_FORMAL}
                      alt="Formal Evening Wear"
                      className="w-36 h-48 object-cover object-top border border-white/10"
                    />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#C8A97E]">
                          Formal Architecture
                        </span>
                        <h4 className="font-serif-lux text-base text-[#FAF8F5] leading-snug mt-1">
                          Tailored Trousers &amp; Formal Shirting
                        </h4>
                        <p className="text-[11px] font-sans-clean text-white/50 mt-1 font-light leading-relaxed">
                          Clean lines and enduring fabrics designed for milestone formal occasions.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveMegaMenu(null);
                          onNavigateShop('formal-shirts');
                        }}
                        className="text-left text-xs font-mono uppercase tracking-wider text-[#C8A97E] hover:underline"
                      >
                        View Formal Collection →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 4. EXPANDABLE MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-x-0 bottom-0 ${isScrolled ? 'top-16' : 'top-20'} z-50 bg-[#0C0C0C]/98 backdrop-blur-2xl overflow-y-auto px-5 py-6 pb-safe flex flex-col justify-between animate-in fade-in slide-in-from-top-3 duration-250`}>
          <div className="space-y-6">
            {/* Mobile Header Brand & Close Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <MNMonogramMaster variant="champagne-gold" size={26} />
                <span className="font-serif-lux text-base text-[#FAF8F5] tracking-[0.18em]">
                  N.K FABRICS
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-1.5 py-1 px-2.5 border border-white/15 text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] hover:text-white hover:border-[#C8A97E] active:scale-95 transition-all"
                aria-label="Close Menu"
              >
                <span>✕</span>
                <span>Close</span>
              </button>
            </div>

            {/* Quick action bar: Search, Wishlist, Bag, Account */}
            <div className="grid grid-cols-2 gap-2.5 pb-2 text-xs font-mono">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="py-3 px-3 bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 flex items-center justify-center gap-2 text-white/90 active:border-[#C8A97E] transition-colors"
              >
                <span>🔍 Search</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateWishlist();
                }}
                className="py-3 px-3 bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 flex items-center justify-center gap-2 text-white/90 active:border-[#C8A97E] transition-colors"
              >
                <span>♡ Wishlist ({wishlistCount})</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateCart();
                }}
                className="py-3 px-3 bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 flex items-center justify-center gap-2 text-white/90 active:border-[#C8A97E] transition-colors"
              >
                <span>🛍 Bag ({cartCount})</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAccount();
                }}
                className="py-3 px-3 bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 flex items-center justify-center gap-2 text-white/90 active:border-[#C8A97E] transition-colors"
              >
                <span>👤 Concierge</span>
              </button>
            </div>

            {/* Navigation links & accordions */}
            <div className="space-y-1 divide-y divide-white/5 pt-1">
              {/* New Arrivals */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateShop('new-arrivals');
                }}
                className="w-full py-4 text-left font-serif-lux text-lg text-white hover:text-[#C8A97E] active:text-[#C8A97E] flex items-center justify-between"
              >
                <span>New Arrivals</span>
                <span className="text-[10px] font-mono text-[#C8A97E] uppercase tracking-wider">New</span>
              </button>

              {/* Suits Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('suits')}
                  className="w-full py-4 flex justify-between items-center text-left font-serif-lux text-lg text-white hover:text-[#C8A97E]"
                >
                  <span>Suits</span>
                  <span className="text-sm font-mono text-[#C8A97E] w-6 h-6 flex items-center justify-center">
                    {mobileExpandedSection === 'suits' ? '−' : '+'}
                  </span>
                </button>
                {mobileExpandedSection === 'suits' && (
                  <div className="pl-4 pb-3 space-y-2.5 text-sm font-sans-clean text-white/70 animate-in fade-in duration-200">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('suits');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Signature Suits
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('suits', 'Deep Black');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Black Suits
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('suits', 'Midnight Navy');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Navy Suits
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('suits', 'Charcoal');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Charcoal Suits
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('waistcoats');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Tailored Waistcoats
                    </button>
                  </div>
                )}
              </div>

              {/* Formal Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('formal')}
                  className="w-full py-4 flex justify-between items-center text-left font-serif-lux text-lg text-white hover:text-[#C8A97E]"
                >
                  <span>Formal Shirting &amp; Trousers</span>
                  <span className="text-sm font-mono text-[#C8A97E] w-6 h-6 flex items-center justify-center">
                    {mobileExpandedSection === 'formal' ? '−' : '+'}
                  </span>
                </button>
                {mobileExpandedSection === 'formal' && (
                  <div className="pl-4 pb-3 space-y-2.5 text-sm font-sans-clean text-white/70 animate-in fade-in duration-200">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('formal-shirts');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Formal Shirts (Sea Island &amp; Giza 45)
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('trousers');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Pleated Wool Trousers
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('suits');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Evening Gala Wear
                    </button>
                  </div>
                )}
              </div>

              {/* Traditional Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('traditional')}
                  className="w-full py-4 flex justify-between items-center text-left font-serif-lux text-lg text-white hover:text-[#C8A97E]"
                >
                  <span>Traditional Pakistani Attire</span>
                  <span className="text-sm font-mono text-[#C8A97E] w-6 h-6 flex items-center justify-center">
                    {mobileExpandedSection === 'traditional' ? '−' : '+'}
                  </span>
                </button>
                {mobileExpandedSection === 'traditional' && (
                  <div className="pl-4 pb-3 space-y-2.5 text-sm font-sans-clean text-white/70 animate-in fade-in duration-200">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('shalwar-kameez');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Shalwar Kameez (Raw Mulberry Silk)
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('kurtas');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Kurtas (Handcrafted Egyptian Cotton)
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('waistcoats');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Ceremonial Waistcoats
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('shalwar-kameez');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Eid Collection
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigateShop('shalwar-kameez');
                      }}
                      className="block py-1 hover:text-[#C8A97E]"
                    >
                      Wedding Couture
                    </button>
                  </div>
                )}
              </div>

              {/* Accessories */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateShop('accessories');
                }}
                className="w-full py-4 text-left font-serif-lux text-lg text-white hover:text-[#C8A97E]"
              >
                Accessories &amp; Leather
              </button>

              {/* About N.K FABRICS */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateAbout();
                }}
                className="w-full py-4 text-left font-serif-lux text-lg text-[#C8A97E] flex items-center justify-between"
              >
                <span>About N.K FABRICS</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Bottom mobile info with safe-area spacing */}
          <div className="pt-6 border-t border-white/10 text-center space-y-2">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Complimentary Insured Courier Worldwide · 14-Day Returns
            </div>
            <div className="text-xs font-mono text-[#C8A97E]">
              concierge@nkfabrics.com · London &amp; Lahore Ateliers
            </div>
          </div>
        </div>
      )}
    </>
  );
};
