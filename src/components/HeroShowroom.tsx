import React from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';

const HERO_MODELS = '/src/assets/images/hero_mn_editorial_models_1790693257303.jpg';

interface HeroProps {
  onExplore: () => void;
  onShopNow: () => void;
}

export const HeroShowroom: React.FC<HeroProps> = ({ onExplore, onShopNow }) => {
  return (
    <section className="relative min-h-[85svh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Cinematic Editorial Photography with Mobile-Optimized Focal Crop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_MODELS}
          alt="N.K FABRICS Luxury Suiting and Traditional Haute Couture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_16%] sm:object-[center_20%] brightness-[0.70] sm:brightness-[0.74] contrast-[1.08] scale-100 hover:scale-105 transition-transform duration-[2200ms] ease-out"
        />
        {/* Cinematic Scrims: Multi-layer vignetting for maximum contrast on mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/45 to-[#0C0C0C]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/75 via-transparent to-[#0C0C0C]/75" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        {/* Prominent N.K FABRICS Brand Monogram Insignia */}
        <div className="flex flex-col items-center space-y-2.5 sm:space-y-3 opacity-95">
          <div className="sm:hidden">
            <MNMonogramMaster variant="champagne-gold" size={46} />
          </div>
          <div className="hidden sm:block">
            <MNMonogramMaster variant="champagne-gold" size={58} />
          </div>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/70 to-transparent" />
        </div>

        {/* Hero Headline */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <h1 className="font-serif-lux text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FAF8F5] tracking-[0.06em] leading-[1.12] sm:leading-[1.05] uppercase drop-shadow-md">
            N.K FABRICS — MADE FOR YOUR MOMENT
          </h1>

          <p className="font-serif text-base sm:text-2xl md:text-3xl text-[#E6DFD5] tracking-wide font-light italic max-w-2xl mx-auto drop-shadow">
            Refined clothing. Distinctive style. Timeless confidence.
          </p>
        </div>

        {/* Core Pillars: Suiting, Waistcoats, Shirts, Traditional Kameez, Trousers */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[10px] sm:text-xs font-sans-clean uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A97E]/95 py-2 px-3 border-y border-white/10 max-w-3xl bg-black/30 backdrop-blur-xs">
          <span>Bespoke 3-Piece Suits</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span>Tailored Waistcoats</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span>Traditional Shalwar Kameez</span>
          <span aria-hidden="true" className="opacity-40 hidden xs:inline">·</span>
          <span className="hidden xs:inline">Sea Island Shirts</span>
          <span aria-hidden="true" className="opacity-40 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Pleated Trousers</span>
        </div>

        {/* Large Touch-Friendly Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto max-w-xs sm:max-w-none">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto min-h-[50px] px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-[#0C0C0C] font-semibold hover:bg-[#C8A97E] hover:text-black active:scale-[0.98] transition-all duration-200 shadow-2xl flex items-center justify-center"
          >
            EXPLORE COLLECTION
          </button>

          <button
            onClick={onShopNow}
            className="w-full sm:w-auto min-h-[50px] px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-sans-clean uppercase tracking-[0.25em] border border-[#C8A97E] text-[#FAF8F5] hover:bg-[#C8A97E]/15 active:scale-[0.98] transition-all duration-200 backdrop-blur-sm flex items-center justify-center"
          >
            SHOP NOW
          </button>
        </div>

        {/* Quiet Editorial Tailoring Marker (shown on tablet and desktop to keep mobile above-the-fold clean) */}
        <div className="hidden sm:block pt-6 text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">
          Savile Row Drape · Super 150s Merino &amp; Pure Mulberry Raw Silk · Bespoke Atelier
        </div>
      </div>

      {/* Downward Scroll Indicator (hidden on tiny screens to avoid viewport clutter) */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono uppercase tracking-widest text-[#C8A97E]">The Collection</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C8A97E] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
