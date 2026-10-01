import React from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';

interface NotFoundPageProps {
  onBackHome: () => void;
  onExploreCollection: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onBackHome,
  onExploreCollection,
}) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#0C0C0C] text-[#F4F1EA] px-4 sm:px-6 py-20 font-sans-clean">
      <div className="max-w-lg w-full text-center space-y-8 p-8 sm:p-12 bg-[#121212] border border-white/10 shadow-2xl relative">
        <div className="flex flex-col items-center space-y-3">
          <MNMonogramMaster variant="champagne-gold" size={48} />
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
            N.K FABRICS Atelier
          </div>
        </div>

        <div className="space-y-3">
          <div className="font-mono text-xs text-white/40 uppercase tracking-widest">
            Error 404 · Uncatalogued Archive
          </div>
          <h1 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide">
            PAGE NOT FOUND
          </h1>
          <p className="text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed">
            Looks like this piece belongs somewhere else.
          </p>
        </div>

        <div className="w-16 h-[1px] bg-[#C8A97E]/30 mx-auto" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onBackHome}
            className="w-full sm:w-auto min-h-[44px] px-8 py-3 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] active:scale-[0.98] transition-all touch-manipulation text-center"
          >
            BACK HOME
          </button>
          <button
            onClick={onExploreCollection}
            className="w-full sm:w-auto min-h-[44px] px-8 py-3 text-xs font-sans-clean uppercase tracking-[0.2em] border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] active:scale-[0.98] transition-all touch-manipulation text-center"
          >
            EXPLORE COLLECTION
          </button>
        </div>

        <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest pt-4 border-t border-white/5">
          Savile Row Suiting · Traditional Silk Couture · Everyday Essentials
        </div>
      </div>
    </div>
  );
};
