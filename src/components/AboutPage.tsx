import React from 'react';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';

// Image Assets
import IMG_HERO from '../assets/images/hero_mn_editorial_models_1790693257303.jpg';
import IMG_SUIT_FORMAL from '../assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg';
import IMG_TRADITIONAL from '../assets/images/fashion_traditional_shalwar_kameez_1790693280444.jpg';
import IMG_WEDDING_EID from '../assets/images/mn_traditional_eid_wedding_1790693689026.jpg';
import IMG_FABRIC from '../assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg';
import IMG_BUTTON_CUFF from '../assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg';
import IMG_TROUSER from '../assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg';
import IMG_COLLAR from '../assets/images/mn_formal_shirt_white_1790693673578.jpg';
import IMG_SUIT_BACK from '../assets/images/mn_suit_back_profile_1790694103656.jpg';

interface AboutPageProps {
  onExploreCollection: () => void;
  onExploreNewArrivals: () => void;
  onExploreSuits: () => void;
  onExploreTraditional: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onExploreCollection,
  onExploreNewArrivals,
  onExploreSuits,
  onExploreTraditional,
}) => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] font-sans-clean selection:bg-[#C8A97E] selection:text-black">
      {/* 1. ABOUT N.K FABRICS HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Editorial Image with Luxury Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMG_HERO}
            alt="The N.K Standard"
            className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0C0C0C]/40 to-[#0C0C0C]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C8A97E]/30 bg-black/50 backdrop-blur-md">
            <MNMonogramMaster variant="champagne-gold" size={20} />
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
              N.K FABRICS Atelier
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif-lux text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] tracking-[0.06em] leading-[1.05]">
              THE N.K STANDARD
            </h1>
            <p className="font-serif-lux text-xl sm:text-2xl md:text-3xl text-[#E6DFD5] italic font-light tracking-wide max-w-2xl mx-auto">
              Refined clothing. Distinctive style. Timeless confidence.
            </p>
          </div>

          <div className="max-w-xl mx-auto pt-2">
            <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
              N.K FABRICS exists to craft pieces that honor the human form through balanced proportion, rigorous tailoring, and architectural poise. Every garment is conceived for moments that demand quiet distinction.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreCollection}
              className="w-full sm:w-auto py-3.5 px-8 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors shadow-2xl"
            >
              EXPLORE COLLECTION
            </button>
            <button
              onClick={onExploreSuits}
              className="w-full sm:w-auto py-3.5 px-8 text-xs font-sans-clean uppercase tracking-[0.25em] border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
            >
              THE SUIT ATELIER
            </button>
          </div>
        </div>
      </section>

      {/* 2. BRAND STORY SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
                Maison Origins &amp; Heritage
              </span>
              <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
                OUR STORY
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base font-sans-clean text-[#D8D4CC]/85 font-light leading-relaxed">
              <p>
                N.K FABRICS represents refined personal style. We believe that true distinction requires no exclamation; it speaks through the poise of an unhurried cut, the substance of virgin wool, and the subtle resonance of an architecturally balanced shoulder.
              </p>
              <p>
                Every piece in the collection is designed with unwavering attention to proportion, detail, fabric, and finishing. By respecting classic tailoring while stripping away superfluous ornament, we create clothing that combines modern sophistication with enduring relevance.
              </p>
              <p>
                Equally central to our house is our deep reverence for traditional Pakistani dressing. We celebrate garments like the Shalwar Kameez and ceremonial Kurtas by presenting them through a contemporary luxury perspective—elevating heritage silhouettes with clean lines, structured collars, and exceptional textiles.
              </p>
              <p className="text-[#C8A97E] italic font-serif-lux text-base sm:text-lg">
                Our ultimate goal is clothing that feels confident, elegant, and lasting rather than driven by short-lived trends.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/15 p-2 bg-[#121212] shadow-2xl">
              <img
                src={IMG_SUIT_FORMAL}
                alt="N.K FABRICS Atelier Tailoring"
                className="w-full h-auto object-cover object-top border border-white/10"
              />
              <div className="p-4 bg-[#141414] border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                    Sovereign Tailoring
                  </div>
                  <div className="font-serif-lux text-sm text-[#FAF8F5]">
                    Three-Piece Floating Canvas
                  </div>
                </div>
                <MNCompactSeal variant="champagne-gold" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE N.K FABRICS PHILOSOPHY (3 PILLARS) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
            Foundational Tenets
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
            THE N.K FABRICS PHILOSOPHY
          </h2>
          <p className="text-xs sm:text-sm font-sans-clean text-white/50 max-w-lg mx-auto font-light">
            Three sovereign principles that govern every stitch, cut, and pattern in our maison.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Precision */}
          <div className="p-8 sm:p-10 bg-[#121212] border border-white/10 flex flex-col justify-between space-y-6 hover:border-[#C8A97E]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#C8A97E] tracking-widest">
                01 / PILLAR
              </div>
              <h3 className="font-serif-lux text-2xl sm:text-3xl text-[#FAF8F5] tracking-wider">
                PRECISION
              </h3>
              <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                Every detail matters, from proportion to finishing. A millimeter in lapel stance or trouser break defines the dialogue between the garment and the wearer. We obsess over the millimeter.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Balanced Balance · Exact Silhouette
            </div>
          </div>

          {/* Pillar 2: Character */}
          <div className="p-8 sm:p-10 bg-[#121212] border border-white/10 flex flex-col justify-between space-y-6 hover:border-[#C8A97E]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#C8A97E] tracking-widest">
                02 / PILLAR
              </div>
              <h3 className="font-serif-lux text-2xl sm:text-3xl text-[#FAF8F5] tracking-wider">
                CHARACTER
              </h3>
              <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                Clothing should express individual style without unnecessary excess. Authentic confidence emerges from self-assured simplicity, commanding respect without demanding attention.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Quiet Strength · Distinct Identity
            </div>
          </div>

          {/* Pillar 3: Timelessness */}
          <div className="p-8 sm:p-10 bg-[#121212] border border-white/10 flex flex-col justify-between space-y-6 hover:border-[#C8A97E]/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#C8A97E] tracking-widest">
                03 / PILLAR
              </div>
              <h3 className="font-serif-lux text-2xl sm:text-3xl text-[#FAF8F5] tracking-wider">
                TIMELESSNESS
              </h3>
              <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                Create pieces designed to remain relevant beyond a single season. We design for perpetuity—creating future heirlooms that endure both in structural longevity and aesthetic integrity.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Beyond Seasons · Lasting Dignity
            </div>
          </div>
        </div>
      </section>

      {/* 4. CRAFTSMANSHIP SECTION (EDITORIAL SEQUENCE) */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="border-b border-white/10 pb-6 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
              Sartorial Anatomy
            </span>
            <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide mt-1">
              CRAFTED WITH PRECISION
            </h2>
          </div>
          <p className="text-xs font-sans-clean text-white/50 max-w-md font-light">
            An intimate inspection of the components, textiles, and finishing methods shaping the N.K FABRICS collection.
          </p>
        </div>

        {/* Editorial Sequence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1: Fabric Texture */}
          <div className="bg-[#141414] border border-white/10 overflow-hidden group">
            <div className="h-64 bg-black overflow-hidden">
              <img
                src={IMG_FABRIC}
                alt="Fabric Texture"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Fabric Texture &amp; Hand
              </span>
              <h4 className="font-serif-lux text-lg text-[#FAF8F5]">
                Virgin Wool &amp; Raw Silk Blends
              </h4>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                Carefully selected weaves offering rich tactile depth, breathable drape, and natural wrinkle recovery.
              </p>
            </div>
          </div>

          {/* Item 2: Tailoring Details */}
          <div className="bg-[#141414] border border-white/10 overflow-hidden group">
            <div className="h-64 bg-black overflow-hidden">
              <img
                src={IMG_SUIT_BACK}
                alt="Tailoring Details"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Tailoring &amp; Silhouette
              </span>
              <h4 className="font-serif-lux text-lg text-[#FAF8F5]">
                Architectural Pagoda Posture
              </h4>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                Sculpted shoulder pitch, floating chest canvas drape, and dual side vents ensuring fluid movement.
              </p>
            </div>
          </div>

          {/* Item 3: Collar Construction */}
          <div className="bg-[#141414] border border-white/10 overflow-hidden group">
            <div className="h-64 bg-black overflow-hidden">
              <img
                src={IMG_COLLAR}
                alt="Collar Construction"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Collar Construction
              </span>
              <h4 className="font-serif-lux text-lg text-[#FAF8F5]">
                Semi-Spread &amp; Mandarin Bands
              </h4>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                Reinforced collar bands tailored to frame the neck and collarbone with clean, non-collapsing integrity.
              </p>
            </div>
          </div>

          {/* Item 4: Cuffs & Horn Buttons */}
          <div className="bg-[#141414] border border-white/10 overflow-hidden group">
            <div className="h-64 bg-black overflow-hidden">
              <img
                src={IMG_BUTTON_CUFF}
                alt="Cuffs & Buttons"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Haberdashery Finishing
              </span>
              <h4 className="font-serif-lux text-lg text-[#FAF8F5]">
                Cuffs &amp; Horn Buttons
              </h4>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                Natural horn buttons engraved with subtle N.K hallmarks, hand-sewn with functional working cuff slits.
              </p>
            </div>
          </div>

          {/* Item 5: Trouser Finishing */}
          <div className="bg-[#141414] border border-white/10 overflow-hidden group">
            <div className="h-64 bg-black overflow-hidden">
              <img
                src={IMG_TROUSER}
                alt="Trouser Finishing"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Trouser Finishing
              </span>
              <h4 className="font-serif-lux text-lg text-[#FAF8F5]">
                Forward Pleats &amp; Side Buckles
              </h4>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                High-rise waistband engineering with side adjusters, continuous front crease line, and tailored hem breaks.
              </p>
            </div>
          </div>

          {/* Item 6: Traditional Garment Needlework */}
          <div className="bg-[#141414] border border-white/10 overflow-hidden group">
            <div className="h-64 bg-black overflow-hidden">
              <img
                src={IMG_WEDDING_EID}
                alt="Traditional Garment Details"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Traditional Garment Details
              </span>
              <h4 className="font-serif-lux text-lg text-[#FAF8F5]">
                Fine Plackets &amp; Silk Needling
              </h4>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                Delicate tone-on-tone stitching on formal kurtas, straight plackets, and coordinating formal waistcoats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUITING EXPERIENCE */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="border border-white/15 p-2 bg-[#121212] shadow-2xl">
              <img
                src={IMG_SUIT_FORMAL}
                alt="The N.K FABRICS Formal Suit"
                className="w-full h-auto object-cover object-top border border-white/10"
              />
              <div className="p-4 bg-[#141414] border-t border-white/10 flex items-center justify-between text-xs font-sans-clean">
                <span className="text-[#C8A97E] uppercase tracking-wider font-mono text-[10px]">
                  Bespoke Formal Suit Ensemble
                </span>
                <span className="text-white/60">Strictly Three-Piece Suits &amp; Trousers</span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
                Formal Suiting Architecture
              </span>
              <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
                THE SUITING EXPERIENCE
              </h2>
            </div>

            <p className="text-sm sm:text-base font-sans-clean text-[#D8D4CC]/85 font-light leading-relaxed">
              N.K FABRICS takes an architectural approach to formal suiting. Rather than following transient fashion cycles, we engineer suits around balanced proportions, clean silhouettes, and comfortable movement that allows the wearer to remain composed through long formal gatherings.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                <span className="text-[#C8A97E] font-bold mt-0.5">✦</span>
                <span><strong>Clean Proportions:</strong> High armholes, natural shoulder drape, and balanced chest suppression.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                <span className="text-[#C8A97E] font-bold mt-0.5">✦</span>
                <span><strong>Carefully Selected Fabrics:</strong> Fine virgin wools offering smooth handle, resilience, and all-season thermal breathability.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                <span className="text-[#C8A97E] font-bold mt-0.5">✦</span>
                <span><strong>Coordinated Trousers:</strong> High-rise waistbands with forward pleats and brass side adjusters for a continuous trouser line.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                <span className="text-[#C8A97E] font-bold mt-0.5">✦</span>
                <span><strong>Optional Waistcoats:</strong> Five-button tailored waistcoats providing commanding three-piece presence.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onExploreSuits}
                className="py-3 px-8 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors"
              >
                VIEW FORMAL SUITS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRADITION, REFINED (PAKISTANI TRADITIONAL LINE) */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
            Heritage Haute Couture
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
            TRADITION, REFINED
          </h2>
          <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/80 max-w-xl mx-auto font-light leading-relaxed">
            Pakistani traditional clothing presented with a refined contemporary aesthetic. Celebrating heritage craft through clean restraint and sovereign fabrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Card 1: Shalwar Kameez & Kurtas */}
          <div className="bg-[#121212] border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="h-72 bg-black overflow-hidden border border-white/10">
                <img
                  src={IMG_TRADITIONAL}
                  alt="Premium Shalwar Kameez"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Daily Elegance &amp; Festive Wear
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">
                Premium Shalwar Kameez &amp; Kurtas
              </h3>
              <p className="text-xs sm:text-sm font-sans-clean text-white/70 font-light leading-relaxed">
                Cleanly tailored collars, sharp plackets, and fluid drape crafted from pure raw silk and fine long-staple cottons. Designed to maintain crisp structure across festive and milestone gatherings.
              </p>
            </div>
            <button
              onClick={onExploreTraditional}
              className="py-2.5 px-4 text-xs font-sans-clean uppercase tracking-wider border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors text-center"
            >
              Explore Shalwar Kameez
            </button>
          </div>

          {/* Card 2: Wedding & Eid Collection */}
          <div className="bg-[#121212] border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="h-72 bg-black overflow-hidden border border-white/10">
                <img
                  src={IMG_WEDDING_EID}
                  alt="Wedding & Eid Collection"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                Ceremonial Occasions
              </span>
              <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">
                Wedding &amp; Eid Collection
              </h3>
              <p className="text-xs sm:text-sm font-sans-clean text-white/70 font-light leading-relaxed">
                Ceremonial waistcoats with mandarin bands, jacquard raw silk tunics, and matching formal trousers. An elevated aesthetic honoring cultural grandeur through sober, modern elegance.
              </p>
            </div>
            <button
              onClick={onExploreTraditional}
              className="py-2.5 px-4 text-xs font-sans-clean uppercase tracking-wider border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors text-center"
            >
              Explore Ceremonial Ensembles
            </button>
          </div>
        </div>
      </section>

      {/* 7. N.K FABRICS DETAILS (EDITORIAL STATEMENTS) */}
      <section className="py-28 md:py-36 px-6 bg-[#090909] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-[#C8A97E]">
            The Sovereign Standard
          </div>

          <div className="space-y-6">
            <h2 className="font-serif-lux text-3xl sm:text-5xl md:text-6xl text-[#FAF8F5] tracking-[0.08em] leading-tight">
              DESIGNED WITH INTENTION.
            </h2>
            <h2 className="font-serif-lux text-3xl sm:text-5xl md:text-6xl text-[#C8A97E] tracking-[0.08em] leading-tight">
              DEFINED BY DETAIL.
            </h2>
            <h2 className="font-serif-lux text-3xl sm:text-5xl md:text-6xl text-[#E6DFD5] italic tracking-[0.08em] leading-tight">
              MADE FOR YOUR MOMENT.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans-clean text-white/50 max-w-lg mx-auto font-light leading-relaxed pt-4">
            Clothing that remains true to the wearer: dignified in silence, commanding in posture, and timeless in every memory.
          </p>
        </div>
      </section>

      {/* 8. BRAND VALUES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
            Core Convictions
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
            BRAND VALUES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Value 1: Quality */}
          <div className="p-8 bg-[#121212] border border-white/10 space-y-4 hover:border-white/30 transition-colors">
            <div className="text-[11px] font-mono text-[#C8A97E]">01</div>
            <h3 className="font-serif-lux text-xl text-[#FAF8F5]">QUALITY</h3>
            <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
              Focus on thoughtful product design, structural integrity, and flawless finishing. We never compromise on seam density or fabric grade.
            </p>
          </div>

          {/* Value 2: Confidence */}
          <div className="p-8 bg-[#121212] border border-white/10 space-y-4 hover:border-white/30 transition-colors">
            <div className="text-[11px] font-mono text-[#C8A97E]">02</div>
            <h3 className="font-serif-lux text-xl text-[#FAF8F5]">CONFIDENCE</h3>
            <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
              Clothing should help create a polished personal presence that feels effortless, commanding quiet respect without theatrical noise.
            </p>
          </div>

          {/* Value 3: Simplicity */}
          <div className="p-8 bg-[#121212] border border-white/10 space-y-4 hover:border-white/30 transition-colors">
            <div className="text-[11px] font-mono text-[#C8A97E]">03</div>
            <h3 className="font-serif-lux text-xl text-[#FAF8F5]">SIMPLICITY</h3>
            <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
              Luxury should feel refined, not excessive. The purest luxury is the absence of unnecessary elements and the mastery of essential lines.
            </p>
          </div>

          {/* Value 4: Individuality */}
          <div className="p-8 bg-[#121212] border border-white/10 space-y-4 hover:border-white/30 transition-colors">
            <div className="text-[11px] font-mono text-[#C8A97E]">04</div>
            <h3 className="font-serif-lux text-xl text-[#FAF8F5]">INDIVIDUALITY</h3>
            <p className="text-xs font-sans-clean text-white/60 font-light leading-relaxed">
              N.K FABRICS pieces should allow personal style to stand out. Our silhouettes serve as the architectural frame for the client’s own presence.
            </p>
          </div>
        </div>
      </section>

      {/* 10. ABOUT PAGE CTA */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center space-y-8">
        <div className="relative inline-block p-6 border border-[#C8A97E]/30 bg-[#141414] shadow-2xl mx-auto">
          <MNCompactSeal variant="champagne-gold" size={72} />
        </div>

        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C8A97E]">
            Experience The Maison
          </span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl text-[#FAF8F5] tracking-wide">
            DISCOVER N.K FABRICS
          </h2>
          <p className="text-sm font-sans-clean text-[#D8D4CC]/80 font-light max-w-md mx-auto leading-relaxed">
            Explore the collection and find pieces made for your moment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onExploreCollection}
            className="w-full sm:w-auto py-4 px-10 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors shadow-2xl"
          >
            EXPLORE COLLECTION
          </button>
          <button
            onClick={onExploreNewArrivals}
            className="w-full sm:w-auto py-4 px-10 text-xs font-sans-clean uppercase tracking-[0.25em] border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
          >
            SHOP NEW ARRIVALS
          </button>
        </div>

        <div className="pt-8 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          Savile Row Suiting · Traditional Pakistani Haute Couture · Luxury Essentials
        </div>
      </section>
    </div>
  );
};
