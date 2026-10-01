import React from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';

const HERO_MODELS = '/src/assets/images/hero_mn_editorial_models_1790693257303.jpg';

interface HeroProps {
  onExplore: () => void;
  onShopNow: () => void;
}

export const HeroShowroom: React.FC<HeroProps> = ({ onExplore, onShopNow }) => {
  return (
    <section className="relative min-h-[90svh] sm:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Cinematic Editorial Photography with Controlled Focal Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden animate-hero-image">
        <img
          src={HERO_MODELS}
          alt="N.K FABRICS Bespoke Suiting and Traditional Haute Couture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_12%] sm:object-[center_18%] brightness-[0.72] contrast-[1.06] scale-100 transition-transform duration-[2400ms] ease-out hover:scale-105"
        />
        {/* Soft Luxury Editorial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-[#0C0C0C]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/70 via-transparent to-[#0C0C0C]/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-24 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        {/* Brand Monogram Insignia & Maison Origin */}
        <div className="flex flex-col items-center space-y-3 opacity-95 animate-hero-brand">
          <MNMonogramMaster variant="champagne-gold" size={54} />
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
            <span>Savile Row Discipline</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Heritage Silk Couture</span>
          </div>
        </div>

        {/* Hero Editorial Display Headline */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl animate-hero-headline">
          <div className="text-[11px] sm:text-xs font-sans-clean uppercase tracking-[0.3em] text-white/60 font-light">
            The Haute Couture Collection
          </div>
          <h1 className="font-serif-lux text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] tracking-[0.05em] leading-[1.08] uppercase">
            MADE FOR YOUR MOMENT
          </h1>
          <p className="font-serif text-base sm:text-2xl md:text-3xl text-[#E6DFD5]/90 tracking-wide font-light italic max-w-2xl mx-auto">
            Refined clothing. Distinctive style. Timeless confidence.
          </p>
        </div>

        {/* Clean Unboxed Pillars (Anti-slop: No static pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[10px] sm:text-xs font-sans-clean uppercase tracking-[0.2em] text-[#C8A97E] py-2.5 px-4 border-y border-white/10 max-w-3xl bg-black/30 backdrop-blur-xs animate-hero-text">
          <span>Bespoke 3-Piece Suits</span>
          <span aria-hidden="true" className="opacity-30">·</span>
          <span>Tailored Waistcoats</span>
          <span aria-hidden="true" className="opacity-30">·</span>
          <span>Ceremonial Kurtas</span>
          <span aria-hidden="true" className="opacity-30 hidden xs:inline">·</span>
          <span className="hidden xs:inline">Sea Island Shirts</span>
          <span aria-hidden="true" className="opacity-30 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Pleated Trousers</span>
        </div>

        {/* Sophisticated Luxury CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto max-w-xs sm:max-w-none animate-hero-cta">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-sans-clean uppercase tracking-[0.22em] bg-[#FAF8F5] text-[#0C0C0C] font-semibold hover:bg-[#C8A97E] active:scale-[0.98] transition-all duration-300 shadow-2xl flex items-center justify-center touch-manipulation"
          >
            EXPLORE COLLECTION
          </button>

          <button
            onClick={onShopNow}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-sans-clean uppercase tracking-[0.22em] border border-[#C8A97E]/70 text-[#FAF8F5] hover:bg-[#C8A97E]/10 hover:border-[#C8A97E] active:scale-[0.98] transition-all duration-300 backdrop-blur-xs flex items-center justify-center touch-manipulation"
          >
            SHOP NOW
          </button>
        </div>

        {/* Atelier Footnote */}
        <div className="hidden sm:block pt-4 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
          Full-Canvas Floating Horsehair · Super 150s Merino Wool · Raw Mulberry Silk
        </div>
      </div>

      {/* Subtle Downward Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">The Collection</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#C8A97E] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
