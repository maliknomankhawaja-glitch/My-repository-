import React from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';

const HERO_MODELS = '/src/assets/images/hero_mn_editorial_models_1790693257303.jpg';

interface HeroProps {
  onExplore: () => void;
  onShopNow: () => void;
}

export const HeroShowroom: React.FC<HeroProps> = ({ onExplore, onShopNow }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Cinematic Editorial Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_MODELS}
          alt="M.N Luxury Suiting and Traditional Haute Couture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.08] scale-100 hover:scale-105 transition-transform duration-[2200ms] ease-out"
        />
        {/* Cinematic Scrims: Dark gradient at top, bottom, and center vignetting */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-[#0C0C0C]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/70 via-transparent to-[#0C0C0C]/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center space-y-8">
        {/* Subtle Brand Insignia */}
        <div className="flex flex-col items-center space-y-3 opacity-95">
          <MNMonogramMaster variant="champagne-gold" size={58} />
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/70 to-transparent" />
        </div>

        {/* Hero Headline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-serif-lux text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] tracking-[0.06em] leading-[1.05] uppercase">
            M.N — MADE FOR YOUR MOMENT
          </h1>

          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#E6DFD5] tracking-wide font-light italic">
            Refined clothing. Distinctive style. Timeless confidence.
          </p>
        </div>

        {/* Core Pillars: Suiting, Waistcoats, Shirts, Traditional Kameez, Trousers */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-sans-clean uppercase tracking-[0.25em] text-[#C8A97E]/90 py-2 border-y border-white/10 max-w-3xl">
          <span>Bespoke Three-Piece Suits</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span>Tailored Waistcoats</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span>Traditional Shalwar Kameez</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span>Handcrafted Kurtas</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span>Sea Island Shirts</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span>Pleated Trousers</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-9 py-4 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-[#0C0C0C] font-semibold hover:bg-[#C8A97E] hover:text-black transition-all duration-300 shadow-xl"
          >
            EXPLORE COLLECTION
          </button>

          <button
            onClick={onShopNow}
            className="w-full sm:w-auto px-9 py-4 text-xs font-sans-clean uppercase tracking-[0.25em] border border-[#C8A97E] text-[#FAF8F5] hover:bg-[#C8A97E]/15 transition-all duration-300 backdrop-blur-sm"
          >
            SHOP NOW
          </button>
        </div>

        {/* Quiet Editorial Tailoring Marker */}
        <div className="pt-8 text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">
          Savile Row Drape · Super 150s Merino &amp; Pure Mulberry Raw Silk · Bespoke Atelier
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono uppercase tracking-widest text-[#C8A97E]">The Collection</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C8A97E] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
