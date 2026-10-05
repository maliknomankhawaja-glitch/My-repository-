import React from 'react';
import { SHOP_CATEGORIES } from '../data/shopProducts.ts';

interface MobileCategoryPillsProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const MobileCategoryPills: React.FC<MobileCategoryPillsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="lg:hidden sticky top-[57px] z-30 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/10 px-3 py-2.5">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
        {SHOP_CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-[10.5px] font-sans-clean uppercase tracking-[0.12em] font-medium transition-all duration-200 active:scale-95 touch-manipulation border ${
                isSelected
                  ? 'bg-[#C8A97E] text-[#0C0C0C] border-[#C8A97E] font-semibold shadow-md'
                  : 'bg-[#181818] text-white/70 border-white/10 hover:text-white hover:border-white/25'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
