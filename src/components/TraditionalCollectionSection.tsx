import React from 'react';
import { TRADITIONAL_COLLECTION } from '../data/fashionData.ts';

interface TraditionalSectionProps {
  onSelectTrad: (item: any) => void;
}

export const TraditionalCollectionSection: React.FC<TraditionalSectionProps> = ({ onSelectTrad }) => {
  return (
    <section id="traditional-collection" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
        <div className="inline-block text-[10px] sm:text-[11px] font-sans-clean uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C8A97E]">
          Heritage Haute Couture
        </div>
        <h2 className="font-serif-lux text-2xl sm:text-4xl md:text-5xl text-[#FAF8F5] tracking-wide">
          THE TRADITIONAL PAKISTANI COLLECTION
        </h2>
        <div className="w-16 h-[1px] bg-[#C8A97E]/40 mx-auto mt-2" />
        <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/70 font-light leading-relaxed">
          Imperial Shalwar Kameez and tailored Kurtas hand-loomed from pure raw mulberry silk and Giza 87 Egyptian cotton. Accented with structured waistcoats, mandarin collars, and single-needle needlework.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {TRADITIONAL_COLLECTION.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectTrad(item)}
            className="group bg-[#121212] border border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 hover:border-[#C8A97E]/80 shadow-2xl hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-[340px] xs:h-[400px] sm:h-[460px] md:h-[480px] overflow-hidden bg-[#0A0A0A]">
              <img
                src={item.image}
                alt={`${item.name} - Hand-tailored from ${item.fabric} with ${item.details}`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top brightness-[0.85] contrast-[1.05] transition-transform duration-1000 group-hover:scale-108"
              />
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-xs text-[#FAF8F5] border border-white/10 px-2.5 sm:px-3 py-1 text-[10.5px] sm:text-[11px] font-mono font-medium">
                {item.price}
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 bg-black/70 backdrop-blur-sm border border-white/10 text-xs font-sans-clean text-[#FAF8F5]">
                <div className="text-[10px] font-mono uppercase text-[#C8A97E]">Handcrafted Fabric</div>
                <div className="truncate font-light text-white/80">{item.fabric}</div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif-lux text-xl sm:text-2xl text-[#FAF8F5] group-hover:text-[#C8A97E] transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-2 sm:pt-3 border-t border-white/10 space-y-1.5 sm:space-y-2 text-xs font-sans-clean text-white/60">
                <div>
                  <strong className="text-white/80 block text-[10.5px] sm:text-[11px]">Sartorial Details:</strong>
                  <span className="text-[10.5px] sm:text-[11px] text-white/60 leading-relaxed block mt-0.5">{item.details}</span>
                </div>
                <div>
                  <strong className="text-[#C8A97E] block text-[10.5px] sm:text-[11px]">Waistcoat Pairing:</strong>
                  <span className="text-[10.5px] sm:text-[11px] text-white/70 block mt-0.5">{item.waistcoatPairing}</span>
                </div>
              </div>

              <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#C8A97E]">
                <span>Commission Traditional Outfit</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
