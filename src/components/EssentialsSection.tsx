import React from 'react';
import { ESSENTIALS_COLLECTION } from '../data/fashionData.ts';

interface EssentialsProps {
  onSelectItem: (item: any) => void;
}

export const EssentialsSection: React.FC<EssentialsProps> = ({ onSelectItem }) => {
  return (
    <section id="essentials-collection" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#C8A97E]">
            Quiet Luxury &amp; Sartorial Staples
          </div>
          <h2 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
            THE ESSENTIALS COLLECTION
          </h2>
          <p className="text-sm font-sans-clean text-[#D8D4CC]/70 font-light leading-relaxed">
            Everyday refinement engineered with the same uncompromising discipline as our bespoke suiting. Silk-cashmere knitwear, Swiss Giza 45 formal shirts, and high-rise pleated wool trousers.
          </p>
        </div>

        <div className="text-right hidden md:block">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E] block">
            Noble Materials
          </span>
          <span className="text-xs font-serif text-white/80">
            Grade-A Mongolian Cashmere · Swiss Poplin
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ESSENTIALS_COLLECTION.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group bg-[#121212] border border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 hover:border-[#C8A97E]/80 shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-80 overflow-hidden bg-[#0A0A0A]">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05] transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute top-3 right-3 bg-[#C8A97E] text-black px-2.5 py-0.5 text-[10px] font-mono font-semibold">
                {item.price}
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div>
                <h3 className="font-serif-lux text-xl text-[#FAF8F5] group-hover:text-[#C8A97E] transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="text-[11px] font-sans-clean text-[#C8A97E] uppercase tracking-wider mt-1">
                  {item.tagline}
                </p>
              </div>

              <p className="text-xs font-sans-clean text-white/60 font-light line-clamp-2">
                {item.details}
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono uppercase text-white/70 group-hover:text-white">
                <span>View Details</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
