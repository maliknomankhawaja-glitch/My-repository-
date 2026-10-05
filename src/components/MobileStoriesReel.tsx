import React, { useState } from 'react';

const FOUNDER_IMG = '/src/assets/images/founder_couture_hero_1790909201612.jpg';
const SUIT_IMG = '/src/assets/images/mn_suit_black_signature_1790693702392.jpg';
const TRAD_IVORY_IMG = '/src/assets/images/mn_traditional_eid_wedding_1790693689026.jpg';
const WAISTCOAT_IMG = '/src/assets/images/fashion_formal_suit_waistcoat_1790693269160.jpg';
const SHIRT_IMG = '/src/assets/images/mn_formal_shirt_white_1790693673578.jpg';
const TROUSER_IMG = '/src/assets/images/mn_trouser_tailored_charcoal_1790693715497.jpg';

export interface MobileStoryItem {
  id: string;
  label: string;
  category: string;
  image: string;
  headline: string;
  tagline: string;
  description: string;
  priceNote?: string;
  actionText: string;
}

const STORIES: MobileStoryItem[] = [
  {
    id: 'founder-noir',
    label: 'Signature',
    category: 'shalwar-kameez',
    image: FOUNDER_IMG,
    headline: 'Imperial Noir Silk Kurta',
    tagline: 'Worn by Malik Noman Khawaja',
    description: '100% Hand-loomed raw mulberry silk with sculptured band mandarin collar and mother-of-pearl buttons. Tailored with Savile Row discipline.',
    priceNote: 'Commission from $1,850',
    actionText: 'Explore Noir Kurta',
  },
  {
    id: 'bespoke-suits',
    label: '3-Piece Suits',
    category: 'suits',
    image: SUIT_IMG,
    headline: 'Savile Row Full-Canvas Suiting',
    tagline: 'Super 150s Merino Wool & Cashmere',
    description: 'Floating horsehair chest canvas that molds permanently to the gentleman’s anatomy over time. Finished with hand-stitched Milanese lapel buttonhole.',
    priceNote: 'Commission from $3,800',
    actionText: 'Browse Suiting',
  },
  {
    id: 'traditional-silk',
    label: 'Ceremonial',
    category: 'shalwar-kameez',
    image: TRAD_IVORY_IMG,
    headline: 'Sovereign Ivory Silk Kameez',
    tagline: 'Giza 87 Egyptian Cotton & Matka Silk',
    description: 'Engineered for royal Eid banquets and ceremonial milestones. Natural silk luster with French seams and tailored side trouser slit.',
    priceNote: 'Commission from $1,450',
    actionText: 'View Traditional Silk',
  },
  {
    id: 'waistcoats',
    label: 'Waistcoats',
    category: 'waistcoats',
    image: WAISTCOAT_IMG,
    headline: 'Horseshoe & Double-Breasted Vests',
    tagline: 'Tailored Waistcoats & Pocket Watch Slits',
    description: 'Designed to sculpt the torso under jackets or worn prominently over traditional shirting. Silk satin back with cinch buckle.',
    priceNote: 'Commission from $890',
    actionText: 'Explore Waistcoats',
  },
  {
    id: 'formal-shirts',
    label: 'Shirting',
    category: 'formal-shirts',
    image: SHIRT_IMG,
    headline: 'Sea Island & Swiss Poplin',
    tagline: '200/2 Thread Count Mother-of-Pearl Shirting',
    description: 'Removable brass collar stays, spread collar geometry, and single-needle needlework for crisp presentation under bespoke lapels.',
    priceNote: 'Commission from $650',
    actionText: 'View Shirting',
  },
  {
    id: 'pleated-trousers',
    label: 'Trousers',
    category: 'trousers',
    image: TROUSER_IMG,
    headline: 'High-Rise Pleated Trousers',
    tagline: 'Side Buckle Adjusters · Forward Pleats',
    description: 'Cut without belt loops for a clean unbroken waistline. Dual side tab brass buckles allow micro-adjustments with 2-inch turn-up cuffs.',
    priceNote: 'Commission from $780',
    actionText: 'Explore Trousers',
  },
];

interface MobileStoriesReelProps {
  onSelectCategory: (category: string) => void;
}

export const MobileStoriesReel: React.FC<MobileStoriesReelProps> = ({ onSelectCategory }) => {
  const [activeStory, setActiveStory] = useState<MobileStoryItem | null>(null);

  const handleOpenStory = (story: MobileStoryItem) => {
    setActiveStory(story);
  };

  const handleCloseStory = () => {
    setActiveStory(null);
  };

  const handleStoryAction = (category: string) => {
    setActiveStory(null);
    onSelectCategory(category);
  };

  return (
    <div className="lg:hidden w-full bg-[#0E0E0E] border-b border-white/10 py-3 px-3">
      {/* Scrollable Story Bubbles */}
      <div className="flex items-center gap-3.5 overflow-x-auto scrollbar-none py-1 px-1">
        {STORIES.map((story) => {
          const isFounder = story.id === 'founder-noir';
          return (
            <button
              key={story.id}
              onClick={() => handleOpenStory(story)}
              className="flex flex-col items-center gap-1.5 shrink-0 group touch-manipulation focus:outline-none"
              aria-label={`View story: ${story.headline}`}
            >
              {/* Gold Ring Avatar */}
              <div
                className={`relative p-[2px] rounded-full transition-transform duration-300 group-active:scale-95 ${
                  isFounder
                    ? 'bg-gradient-to-tr from-[#F3E7D3] via-[#C8A97E] to-[#B69263] shadow-[0_0_12px_rgba(200,169,126,0.5)]'
                    : 'bg-gradient-to-tr from-[#C8A97E] via-white/40 to-[#C8A97E]/30'
                }`}
              >
                <div className="w-[58px] h-[58px] rounded-full overflow-hidden bg-black p-[1.5px]">
                  <img
                    src={story.image}
                    alt={story.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {isFounder && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#C8A97E] text-black text-[7.5px] font-mono font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                    Face
                  </span>
                )}
              </div>
              {/* Bubble Label */}
              <span
                className={`text-[10px] font-sans-clean font-medium tracking-tight truncate max-w-[64px] text-center ${
                  isFounder ? 'text-[#C8A97E] font-semibold' : 'text-white/80'
                }`}
              >
                {story.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* FULL-SCREEN MOBILE STORY VIEWER MODAL */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200">
          {/* Top Progress Bar & Header */}
          <div className="p-4 pt-safe flex flex-col gap-3 relative z-20">
            {/* Story Progress Bar */}
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-full h-full bg-[#C8A97E] animate-[pulse_2s_infinite]" />
            </div>

            {/* Close & Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C8A97E]">
                  <img
                    src={activeStory.image}
                    alt={activeStory.headline}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-serif-lux text-[#FAF8F5] font-semibold">
                    {activeStory.headline}
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-[#C8A97E]">
                    {activeStory.tagline}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseStory}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all text-xs"
                aria-label="Close Story"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Central Full-Bleed Media Visual */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-[#C8A97E]/40 shadow-2xl">
              <img
                src={activeStory.image}
                alt={activeStory.headline}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_20%] brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Bottom Inset Story Overlay */}
              <div className="absolute bottom-4 inset-x-4 space-y-2 text-left">
                {activeStory.priceNote && (
                  <span className="inline-block bg-[#C8A97E] text-black font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    {activeStory.priceNote}
                  </span>
                )}
                <h3 className="font-serif-lux text-xl text-[#FAF8F5] leading-tight">
                  {activeStory.headline}
                </h3>
                <p className="text-xs font-sans-clean text-[#E6DFD5]/90 font-light leading-relaxed">
                  {activeStory.description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Sheet */}
          <div className="p-4 pb-safe space-y-2 relative z-20">
            <button
              onClick={() => handleStoryAction(activeStory.category)}
              className="w-full py-3.5 bg-[#FAF8F5] text-black text-xs font-sans-clean uppercase tracking-[0.2em] font-semibold hover:bg-[#C8A97E] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>{activeStory.actionText}</span>
              <span>→</span>
            </button>
            <button
              onClick={handleCloseStory}
              className="w-full py-2 text-white/50 text-[10px] font-mono uppercase tracking-wider text-center hover:text-white"
            >
              Swipe or tap to dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
