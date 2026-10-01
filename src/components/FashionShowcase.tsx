import React from 'react';
import { FASHION_CATEGORIES } from '../data/fashionData.ts';

interface FashionShowcaseProps {
  onSelectCategory: (categoryId: string) => void;
}

export const FashionShowcase: React.FC<FashionShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section id="collection-showcase" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 sm:space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
        <div className="inline-block text-[10px] sm:text-[11px] font-sans-clean uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C8A97E]">
          Sartorial Portfolio
        </div>
        <h2 className="font-serif-lux text-2xl sm:text-4xl md:text-6xl text-[#FAF8F5] tracking-wide">
          THE N.K FABRICS COLLECTION
        </h2>
        <div className="w-16 h-[1px] bg-[#C8A97E]/40 mx-auto mt-2" />
        <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/70 font-light leading-relaxed max-w-xl mx-auto">
          Four distinct expressions of nobility. From Savile Row structured suiting to imperial Pakistani traditional wear, every piece is sculpted to command reverence.
        </p>
      </div>

      {/* Editorial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {FASHION_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative h-[420px] xs:h-[480px] sm:h-[560px] md:h-[640px] overflow-hidden bg-[#121212] border border-white/10 cursor-pointer shadow-2xl transition-all duration-700 hover:border-[#C8A97E]/70"
          >
            {/* Background Editorial Fashion Image with slow zoom */}
            <img
              src={cat.image}
              alt={`N.K FABRICS ${cat.title} Collection`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top brightness-[0.8] contrast-[1.05] transition-all duration-1000 group-hover:scale-108 group-hover:brightness-[0.7]"
            />

            {/* Gradient Overlays for Cinematic Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20 transition-opacity duration-500 group-hover:via-black/50" />
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 m-3 pointer-events-none" />

            {/* Top Corner Metadata */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-start text-xs font-mono tracking-widest text-[#FAF8F5]/80">
              <span className="uppercase text-[9.5px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-[#C8A97E]">
                {cat.subtitle}
              </span>
              <span className="text-[9.5px] sm:text-[10px] opacity-60">
                {cat.itemCount}
              </span>
            </div>

            {/* Bottom Card Content */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 space-y-2.5 sm:space-y-4">
              <div className="space-y-1 sm:space-y-2">
                <h3 className="font-serif-lux text-2xl sm:text-4xl md:text-5xl text-[#FAF8F5] tracking-[0.06em] sm:tracking-[0.08em] transition-transform duration-500 group-hover:-translate-y-1">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans-clean text-[#E6DFD5]/80 font-light leading-relaxed max-w-md line-clamp-2 sm:line-clamp-none">
                  {cat.description}
                </p>
              </div>

              {/* Reveal Action Bar */}
              <div className="pt-2 flex items-center justify-between border-t border-white/15">
                <span className="text-[10px] sm:text-[11px] font-sans-clean uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A97E] group-hover:text-white transition-colors">
                  Explore {cat.title} Line →
                </span>
                <span className="w-8 h-[1px] bg-[#C8A97E] group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
