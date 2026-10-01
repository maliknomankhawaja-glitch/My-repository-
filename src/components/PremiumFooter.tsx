import React, { useState } from 'react';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';

interface PremiumFooterProps {
  onNavigateShop: (category?: string) => void;
  onNavigateAbout: (section?: string) => void;
  onNavigateCart: () => void;
  onNavigateWishlist: () => void;
  onOpenAccount: () => void;
  onOpenSizeGuide: () => void;
  onOpenShippingInfo: () => void;
  onOpenContact: () => void;
}

export const PremiumFooter: React.FC<PremiumFooterProps> = ({
  onNavigateShop,
  onNavigateAbout,
  onNavigateCart,
  onNavigateWishlist,
  onOpenAccount,
  onOpenSizeGuide,
  onOpenShippingInfo,
  onOpenContact,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setIsSubscribed(true);
    setEmailError(null);
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 text-[#F4F1EA] font-sans-clean">
      {/* 8. NEWSLETTER AREA ABOVE FOOTER */}
      <section className="border-b border-white/10 py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
            Private Gazette
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-lux text-2xl sm:text-4xl text-[#FAF8F5] tracking-wide">
              STAY IN THE WORLD OF N.K FABRICS
            </h2>
            <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/75 font-light max-w-lg mx-auto leading-relaxed">
              Discover new collections, refined essentials, and the latest from N.K FABRICS.
            </p>
          </div>

          {isSubscribed ? (
            <div className="p-4 bg-[#141414] border border-[#C8A97E]/40 text-xs font-sans-clean text-[#C8A97E] max-w-md mx-auto animate-in fade-in duration-300">
              ✓ Thank you for subscribing. You will receive private collection notifications from the atelier.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(null);
                  }}
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#121212] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C8A97E] transition-colors"
                />
                <button
                  type="submit"
                  className="py-3 px-8 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors shrink-0"
                >
                  SUBSCRIBE
                </button>
              </div>
              {emailError && (
                <div className="text-[11px] font-mono text-red-400 text-left pt-1">
                  {emailError}
                </div>
              )}
            </form>
          )}

          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest pt-2">
            Dispatched selectively · Zero unnecessary correspondence
          </div>
        </div>
      </section>

      {/* 7. MAIN 4-COLUMN FOOTER LINKS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* COLUMN 1: SHOP */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs font-sans-clean text-white/70">
              <li>
                <button
                  onClick={() => onNavigateShop('new-arrivals')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateShop('suits')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Suits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateShop('formal-shirts')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Formal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateShop('shalwar-kameez')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Traditional
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateShop('formal-shirts')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Shirts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateShop('trousers')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Trousers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateShop('accessories')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: N.K FABRICS */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
              N.K FABRICS
            </h4>
            <ul className="space-y-2.5 text-xs font-sans-clean text-white/70">
              <li>
                <button
                  onClick={() => onNavigateAbout()}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  About N.K FABRICS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateAbout('story')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateAbout('craftsmanship')}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Craftsmanship
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Contact Atelier
                </button>
              </li>
              <li>
                <a
                  href="/MN_Luxury_Brand_Identity_Preview.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A97E] transition-colors text-left block"
                >
                  Brand Identity Manual ↗
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: HELP */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
              HELP
            </h4>
            <ul className="space-y-2.5 text-xs font-sans-clean text-white/70">
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenShippingInfo}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Worldwide Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenShippingInfo}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  14-Day Returns
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Concierge FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: ACCOUNT */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C8A97E] border-b border-white/10 pb-2">
              ACCOUNT
            </h4>
            <ul className="space-y-2.5 text-xs font-sans-clean text-white/70">
              <li>
                <button
                  onClick={onOpenAccount}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  My Account
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAccount}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Orders &amp; Commissions
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateWishlist}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Wishlist
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateCart}
                  className="hover:text-[#C8A97E] transition-colors text-left"
                >
                  Shopping Bag
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 9. FOOTER BRAND AREA */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-3">
              <MNMonogramMaster variant="champagne-gold" size={32} />
              <div className="font-serif-lux text-2xl text-[#FAF8F5] tracking-[0.18em]">
                N.K FABRICS
              </div>
            </div>
            <p className="font-serif-lux italic text-sm text-[#D8D4CC]/85">
              &ldquo;Refined clothing. Distinctive style. Timeless confidence.&rdquo;
            </p>
            <p className="text-[11px] font-sans-clean text-white/40 leading-relaxed font-light">
              Haute Couture house and luxury textile atelier rooted in classical tailoring and Pakistani heritage craftsmanship.
            </p>
          </div>

          {/* Social Platforms */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
              Follow The Maison
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-white/60">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C8A97E] transition-colors flex items-center gap-1.5"
                aria-label="Instagram"
              >
                <span>Instagram</span>
              </a>
              <span>·</span>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C8A97E] transition-colors flex items-center gap-1.5"
                aria-label="Pinterest"
              >
                <span>Pinterest</span>
              </a>
              <span>·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C8A97E] transition-colors flex items-center gap-1.5"
                aria-label="LinkedIn"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER BOTTOM BAR */}
      <div className="bg-[#050505] border-t border-white/5 py-6 px-6 text-xs text-white/40 font-sans-clean">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <div>
            © 2026 N.K FABRICS. ALL RIGHTS RESERVED. SAVILE ROW · MILAN · LAHORE · ISLAMABAD.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/50">
            <button
              onClick={onOpenShippingInfo}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenShippingInfo}
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span>·</span>
            <button
              onClick={onOpenShippingInfo}
              className="hover:text-white transition-colors"
            >
              Bespoke Tailoring Charter
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center text-[9px] font-mono text-white/20 uppercase tracking-widest mt-3">
          Constitutional Rule: Strictly Bespoke Suiting &amp; Traditional Haute Couture · No Blazers / No Underwear
        </div>
      </div>
    </footer>
  );
};
