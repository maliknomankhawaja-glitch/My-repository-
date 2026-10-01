import React, { useState } from 'react';
import { SUIT_COLLECTION, GarmentProduct } from '../data/fashionData.ts';

interface SuitSectionProps {
  onSelectSuit: (suit: GarmentProduct) => void;
}

export const SuitCollectionSection: React.FC<SuitSectionProps> = ({ onSelectSuit }) => {
  const [selectedColor, setSelectedColor] = useState<string>('All');
  const [selectedCut, setSelectedCut] = useState<string>('All');

  const COLOR_OPTIONS = ['All', 'Black', 'Charcoal', 'Navy', 'Deep brown', 'Dark grey', 'Cream'];
  const CUT_OPTIONS = ['All', '3-Piece with Waistcoat', 'Double-Breasted', 'Single-Breasted'];

  const filteredSuits = SUIT_COLLECTION.filter((suit) => {
    const matchColor =
      selectedColor === 'All' ||
      suit.colorName.toLowerCase().includes(selectedColor.toLowerCase()) ||
      (selectedColor === 'Black' && suit.colorName.includes('Black')) ||
      (selectedColor === 'Deep brown' && suit.colorName.includes('Deep Brown'));

    const matchCut =
      selectedCut === 'All' ||
      (selectedCut === '3-Piece with Waistcoat' && suit.waistcoat) ||
      (selectedCut === 'Double-Breasted' && suit.cut.includes('Double-Breasted')) ||
      (selectedCut === 'Single-Breasted' && suit.cut.includes('Single-Breasted'));

    return matchColor && matchCut;
  });

  return (
    <section id="suit-collection" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 sm:pb-8 gap-4 sm:gap-6">
        <div className="space-y-2 sm:space-y-3 max-w-2xl">
          <div className="inline-block text-[10px] sm:text-[11px] font-sans-clean uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C8A97E]">
            Maison Suiting Atelier
          </div>
          <h2 className="font-serif-lux text-2xl sm:text-4xl md:text-5xl text-[#FAF8F5] tracking-wide">
            THE N.K FABRICS SUIT COLLECTION
          </h2>
          <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/70 font-light leading-relaxed">
            Full-canvas bespoke suits, tailored waistcoats, and matched trousers. Cut from Super 150s Merino wool and cashmere weaves. Zero blazers — strictly complete, unified sartorial architecture.
          </p>
        </div>

        {/* Tailoring Badge */}
        <div className="text-right hidden md:block">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
            Craftsmanship Standard
          </span>
          <span className="text-xs font-serif text-white/80">
            Full Floating Horsehair Canvas · Hand-Padded Lapels
          </span>
        </div>
      </div>

      {/* Filter Bar: Color Tones and Silhouette Cuts */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 bg-[#141414] border border-white/10 text-xs font-sans-clean">
        {/* Colors */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-white/40 uppercase tracking-wider text-[10px] font-mono mr-1">Tones:</span>
          {COLOR_OPTIONS.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedColor(c)}
              className={`min-h-[34px] px-2.5 sm:px-3 py-1.5 transition-all text-xs touch-manipulation active:scale-95 ${
                selectedColor === c
                  ? 'bg-[#C8A97E] text-black font-semibold'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cuts */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
          <span className="text-white/40 uppercase tracking-wider text-[10px] font-mono mr-1">Silhouette:</span>
          {CUT_OPTIONS.map((cut) => (
            <button
              key={cut}
              onClick={() => setSelectedCut(cut)}
              className={`min-h-[34px] px-2.5 sm:px-3 py-1.5 transition-all text-xs touch-manipulation active:scale-95 ${
                selectedCut === cut
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {cut}
            </button>
          ))}
        </div>
      </div>

      {/* Suits Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {filteredSuits.map((suit) => (
          <div
            key={suit.id}
            onClick={() => onSelectSuit(suit)}
            className="group bg-[#121212] border border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 hover:border-[#C8A97E]/80 shadow-2xl hover:-translate-y-1"
          >
            {/* Suit Image Frame with Zoom */}
            <div className="relative h-[340px] xs:h-[400px] sm:h-[460px] md:h-[480px] overflow-hidden bg-[#0A0A0A]">
              <img
                src={suit.image}
                alt={`${suit.name} - ${suit.cut} hand-tailored from ${suit.fabric}`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top brightness-[0.88] contrast-[1.05] transition-transform duration-1000 group-hover:scale-108"
              />

              {/* Color swatch & unboxed price */}
              <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none z-10">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xs px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-white/90">
                  <span className="w-2 h-2 rounded-full border border-white/40" style={{ backgroundColor: suit.colorHex }} />
                  <span>{suit.colorName}</span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-medium text-[#FAF8F5] bg-black/50 backdrop-blur-xs px-2 py-1 border border-white/10">
                  {suit.price}
                </div>
              </div>

              {/* Subtle hover overlay button */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <span className="px-6 py-3 bg-[#FAF8F5] text-black text-xs font-sans-clean uppercase tracking-[0.2em] font-semibold shadow-2xl">
                  Inspect Sartorial Details
                </span>
              </div>
            </div>

            {/* Suit Details Card Body */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-serif-lux text-xl sm:text-2xl text-[#FAF8F5] group-hover:text-[#C8A97E] transition-colors leading-tight">
                  {suit.name}
                </h3>
                <p className="text-xs font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed line-clamp-2">
                  {suit.tagline}
                </p>
              </div>

              {/* Architectural Technical Specifications */}
              <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px] font-sans-clean text-white/60">
                <div className="flex justify-between">
                  <span className="text-white/40">Lapel Style:</span>
                  <span className="text-white/90 text-right truncate max-w-[200px]">{suit.lapel.split('with')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Waistcoat:</span>
                  <span className="text-[#C8A97E] text-right truncate max-w-[200px]">{suit.waistcoat.split('with')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Shirt Pairing:</span>
                  <span className="text-white/80 text-right truncate max-w-[200px]">{suit.shirtPairing.split('in')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Buttons:</span>
                  <span className="text-white/70 text-right truncate max-w-[200px]">{suit.buttonDetails.split('with')[0]}</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#C8A97E]">
                <span>View Construction &amp; Fabric</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
