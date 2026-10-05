import React, { useState } from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isOpen) return null;

  const SIZES_DATA = [
    {
      size: 'XS',
      eu: '46',
      us: '36',
      chestIn: '36 - 38',
      chestCm: '91 - 96',
      waistIn: '30 - 31',
      waistCm: '76 - 79',
      shoulderIn: '17.2',
      shoulderCm: '43.7',
      sleeveIn: '33.5',
      sleeveCm: '85.1',
      inseamIn: '32.0',
      inseamCm: '81.3',
    },
    {
      size: 'S',
      eu: '48',
      us: '38',
      chestIn: '38 - 40',
      chestCm: '96 - 101',
      waistIn: '32 - 33',
      waistCm: '81 - 84',
      shoulderIn: '17.7',
      shoulderCm: '45.0',
      sleeveIn: '34.0',
      sleeveCm: '86.4',
      inseamIn: '32.5',
      inseamCm: '82.5',
    },
    {
      size: 'M',
      eu: '50',
      us: '40',
      chestIn: '40 - 42',
      chestCm: '101 - 107',
      waistIn: '34 - 35',
      waistCm: '86 - 89',
      shoulderIn: '18.2',
      shoulderCm: '46.2',
      sleeveIn: '34.5',
      sleeveCm: '87.6',
      inseamIn: '33.0',
      inseamCm: '83.8',
    },
    {
      size: 'L',
      eu: '52',
      us: '42',
      chestIn: '42 - 44',
      chestCm: '107 - 112',
      waistIn: '36 - 37',
      waistCm: '91 - 94',
      shoulderIn: '18.7',
      shoulderCm: '47.5',
      sleeveIn: '35.0',
      sleeveCm: '88.9',
      inseamIn: '33.5',
      inseamCm: '85.1',
    },
    {
      size: 'XL',
      eu: '54',
      us: '44',
      chestIn: '44 - 46',
      chestCm: '112 - 117',
      waistIn: '38 - 40',
      waistCm: '96 - 102',
      shoulderIn: '19.2',
      shoulderCm: '48.8',
      sleeveIn: '35.5',
      sleeveCm: '90.2',
      inseamIn: '34.0',
      inseamCm: '86.4',
    },
    {
      size: 'XXL',
      eu: '56',
      us: '46',
      chestIn: '46 - 48',
      chestCm: '117 - 122',
      waistIn: '41 - 43',
      waistCm: '104 - 109',
      shoulderIn: '19.7',
      shoulderCm: '50.0',
      sleeveIn: '36.0',
      sleeveCm: '91.4',
      inseamIn: '34.5',
      inseamCm: '87.6',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center max-sm:items-end justify-center p-0 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#111111] border border-[#C8A97E]/40 max-sm:border-x-0 max-sm:border-b-0 max-sm:rounded-t-3xl shadow-2xl p-6 sm:p-10 my-auto max-sm:my-0 max-sm:max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 max-sm:slide-in-from-bottom duration-200">
        {/* Mobile Drag Handle */}
        <div className="sm:hidden -mt-2 mb-4 flex justify-center">
          <div className="w-12 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white border border-white/10 transition-colors rounded-full sm:rounded-none"
          aria-label="Close Size Guide"
        >
          ✕
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                <MNMonogramMaster variant="champagne-gold" size={18} />
                <span>Atelier Measurement Standard</span>
              </div>
              <h3 className="font-serif-lux text-2xl sm:text-3xl text-[#FAF8F5]">
                Tailoring &amp; Size Guide
              </h3>
            </div>

            {/* Unit Toggle */}
            <div className="flex items-center p-1 bg-black/60 border border-white/15 text-xs font-mono">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 transition-all ${
                  unit === 'inches' ? 'bg-[#C8A97E] text-black font-semibold' : 'text-white/60 hover:text-white'
                }`}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 transition-all ${
                  unit === 'cm' ? 'bg-[#C8A97E] text-black font-semibold' : 'text-white/60 hover:text-white'
                }`}
              >
                Centimetres
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans-clean border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-[10px] font-mono uppercase tracking-wider text-white/40">
                  <th className="py-3 px-2">Size</th>
                  <th className="py-3 px-2">UK / US</th>
                  <th className="py-3 px-2">Chest</th>
                  <th className="py-3 px-2">Trouser Waist</th>
                  <th className="py-3 px-2">Shoulder</th>
                  <th className="py-3 px-2">Sleeve</th>
                  <th className="py-3 px-2">Inseam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {SIZES_DATA.map((row) => (
                  <tr key={row.size} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-2 font-mono font-bold text-[#C8A97E]">{row.size}</td>
                    <td className="py-3 px-2 text-white/70">{row.us}R ({row.eu})</td>
                    <td className="py-3 px-2 text-white font-medium">
                      {unit === 'inches' ? `${row.chestIn}"` : `${row.chestCm} cm`}
                    </td>
                    <td className="py-3 px-2 text-white">
                      {unit === 'inches' ? `${row.waistIn}"` : `${row.waistCm} cm`}
                    </td>
                    <td className="py-3 px-2 text-white/70">
                      {unit === 'inches' ? `${row.shoulderIn}"` : `${row.shoulderCm} cm`}
                    </td>
                    <td className="py-3 px-2 text-white/70">
                      {unit === 'inches' ? `${row.sleeveIn}"` : `${row.sleeveCm} cm`}
                    </td>
                    <td className="py-3 px-2 text-white/70">
                      {unit === 'inches' ? `${row.inseamIn}"` : `${row.inseamCm} cm`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fitting Notes */}
          <div className="p-4 bg-black/50 border border-white/10 space-y-2 text-xs font-sans-clean text-white/70">
            <div className="font-semibold text-white text-xs uppercase tracking-wider font-mono text-[#C8A97E]">
              Bespoke Made-to-Measure Guarantee
            </div>
            <p className="text-[11px] leading-relaxed font-light">
              All N.K FABRICS suit trousers arrive with generous 2-inch inlay seam allowances and unhemmed cuffs, enabling your personal tailor or our atelier master to finish the break to your exact shoe height. Made-to-Measure orders include virtual concierge measurement consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
