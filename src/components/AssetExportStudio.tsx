import React, { useState } from 'react';
import { MNMonogramMaster, MNWordmark, MNCompactSeal, MNMonogramLinear, LogoVariant } from './MNLogos.tsx';

interface ExportItem {
  id: string;
  title: string;
  category: 'Monogram' | 'Wordmark' | 'Seal' | 'Modern';
  recommendedFor: string;
  component: (variant: LogoVariant) => React.ReactNode;
  svgCodeGenerator: (variant: LogoVariant) => string;
}

export const AssetExportStudio: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<LogoVariant>('champagne-gold');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Raw SVG generators for true vector export
  const getMonogramSvg = (variant: LogoVariant) => {
    const isGold = variant === 'champagne-gold';
    const fill = isGold ? 'url(#mnChampagneGold)' : variant === 'white' ? '#FAF8F5' : '#0C0C0C';
    const defs = isGold
      ? `<defs>
    <linearGradient id="mnChampagneGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5EBDC" />
      <stop offset="25%" stop-color="#D8BE96" />
      <stop offset="50%" stop-color="#C8A97E" />
      <stop offset="75%" stop-color="#EADECB" />
      <stop offset="100%" stop-color="#B39062" />
    </linearGradient>
  </defs>`
      : '';

    return `<svg width="512" height="512" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  <g fill="${fill}" fill-rule="evenodd" clip-rule="evenodd">
    <!-- Letter M Left Pillar -->
    <path d="M 32 46 H 64 V 51 H 52 V 149 H 64 V 154 H 32 V 149 H 44 V 51 H 32 V 46 Z" />
    <!-- Letter M Hairline Diagonal -->
    <path d="M 50 46 L 89 144 H 94 L 54 46 H 50 Z" />
    <!-- Letter M Ascending Diagonal -->
    <path d="M 88 144 L 126 46 H 132 L 94 144 H 88 Z" />
    <!-- Letter N Diagonal Weave -->
    <path d="M 104 46 H 112 L 158 149 V 154 H 146 L 102 51 V 46 H 104 Z" />
    <!-- Letter N Right Pillar -->
    <path d="M 148 46 H 178 V 51 H 166 V 149 H 178 V 154 H 148 V 149 H 160 V 51 H 148 V 46 Z" />
    <!-- Letter M Right Vertical Stem -->
    <path d="M 124 46 H 136 V 149 H 124 V 46 Z" opacity="0.95" />
    <!-- Signature Period -->
    <circle cx="187" cy="151.5" r="3.5" />
  </g>
</svg>`;
  };

  const getSealSvg = (variant: LogoVariant) => {
    const isGold = variant === 'champagne-gold';
    const fill = isGold ? 'url(#mnSealGold)' : variant === 'white' ? '#FAF8F5' : '#0C0C0C';
    const defs = isGold
      ? `<defs>
    <linearGradient id="mnSealGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5EBDC" />
      <stop offset="50%" stop-color="#C8A97E" />
      <stop offset="100%" stop-color="#B39062" />
    </linearGradient>
  </defs>`
      : '';

    return `<svg width="512" height="512" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  <circle cx="120" cy="120" r="114" stroke="${fill}" stroke-width="1.2" opacity="0.8" />
  <circle cx="120" cy="120" r="108" stroke="${fill}" stroke-width="0.75" stroke-dasharray="3 3" opacity="0.5" />
  <circle cx="120" cy="120" r="82" stroke="${fill}" stroke-width="0.8" opacity="0.6" />
  <g transform="translate(45, 45) scale(0.75)">
    <g fill="${fill}" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M 32 50 H 64 V 54 H 52 V 146 H 64 V 150 H 32 V 146 H 44 V 54 H 32 V 50 Z" />
      <path d="M 50 50 L 89 142 H 94 L 54 50 H 50 Z" />
      <path d="M 88 142 L 126 50 H 132 L 94 142 H 88 Z" />
      <path d="M 104 50 H 112 L 158 146 V 150 H 146 L 102 54 V 50 H 104 Z" />
      <path d="M 148 50 H 178 V 54 H 166 V 146 H 178 V 150 H 148 V 146 H 160 V 54 H 148 V 50 Z" />
      <path d="M 124 50 H 136 V 146 H 124 V 50 Z" opacity="0.9" />
      <circle cx="187" cy="148" r="3.5" />
    </g>
  </g>
</svg>`;
  };

  const getLinearSvg = (variant: LogoVariant) => {
    const isGold = variant === 'champagne-gold';
    const stroke = isGold ? '#C8A97E' : variant === 'white' ? '#FAF8F5' : '#0C0C0C';
    return `<svg width="512" height="512" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g stroke="${stroke}" stroke-width="5.5" stroke-linecap="square" stroke-linejoin="miter">
    <line x1="42" y1="154" x2="42" y2="46" />
    <line x1="42" y1="46" x2="88" y2="154" />
    <line x1="88" y1="154" x2="134" y2="46" />
    <line x1="134" y1="46" x2="168" y2="154" />
    <line x1="168" y1="154" x2="168" y2="46" />
  </g>
  <circle cx="184" cy="151" r="4" fill="${stroke}" />
</svg>`;
  };

  const ASSETS: ExportItem[] = [
    {
      id: 'master-monogram',
      title: 'Primary M.N Monogram',
      category: 'Monogram',
      recommendedFor: 'Suit interior label, blazer crest, garment hangtags, rigid gift boxes, favicon',
      component: (v) => <MNMonogramMaster variant={v} size={110} />,
      svgCodeGenerator: getMonogramSvg,
    },
    {
      id: 'atelier-seal',
      title: 'Compact Atelier Seal',
      category: 'Seal',
      recommendedFor: 'Laser engraved horn buttons, wax seals, brass cufflinks, social profile avatars',
      component: (v) => <MNCompactSeal variant={v} size={120} />,
      svgCodeGenerator: getSealSvg,
    },
    {
      id: 'modern-linear',
      title: 'Architectural Ribbon Mark',
      category: 'Modern',
      recommendedFor: 'Hardware metal zipper pulls, technical athletic knitwear, micro-stamping',
      component: (v) => <MNMonogramLinear variant={v} size={110} />,
      svgCodeGenerator: getLinearSvg,
    },
    {
      id: 'full-wordmark',
      title: 'M.N Wordmark Lockup',
      category: 'Wordmark',
      recommendedFor: 'Storefront facade, garment exterior hangtags, website header, shopping bags',
      component: (v) => <MNWordmark variant={v} size="md" subtitle="MAISON DE COUTURE" />,
      svgCodeGenerator: getMonogramSvg, // fallback
    },
  ];

  const handleCopySvg = (item: ExportItem) => {
    const code = item.svgCodeGenerator(selectedVariant);
    navigator.clipboard.writeText(code);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadSvg = (item: ExportItem) => {
    const code = item.svgCodeGenerator(selectedVariant);
    const blob = new Blob([code], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MN_${item.id}_${selectedVariant}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12">
      {/* Intro & Variant Switcher */}
      <div className="flex flex-wrap items-end justify-between border-b border-white/10 pb-6 gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
            Production Vector Vault
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[#FAF8F5]">
            Master Identity Assets &amp; Vector Exports
          </h2>
          <p className="text-xs font-sans-clean text-white/60">
            Download crisp, infinitely scalable vector SVGs or copy clean code directly into Figma, Illustrator, or garment embroidery digitizing workflows.
          </p>
        </div>

        {/* Variant selector */}
        <div className="flex items-center gap-2 p-1.5 bg-[#161616] border border-white/10">
          {[
            { id: 'champagne-gold', label: 'Champagne Gold' },
            { id: 'black', label: 'Noir Black' },
            { id: 'white', label: 'Pure Ivory' },
          ].map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVariant(v.id as LogoVariant)}
              className={`px-3 py-1.5 text-xs font-sans-clean uppercase tracking-wider transition-all ${
                selectedVariant === v.id
                  ? 'bg-[#C8A97E] text-black font-medium'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Asset Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ASSETS.map((item) => (
          <div
            key={item.id}
            className="p-8 bg-[#121212] border border-white/10 flex flex-col justify-between space-y-6 group hover:border-[#C8A97E]/50 transition-all"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-white/40 uppercase">
                  Vector Scalable (SVG)
                </span>
              </div>

              <h3 className="font-serif-lux text-2xl text-[#FAF8F5] mb-2">{item.title}</h3>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                {item.recommendedFor}
              </p>
            </div>

            {/* Visual Canvas Display */}
            <div
              className={`h-52 flex items-center justify-center p-6 border border-white/5 transition-colors duration-300 ${
                selectedVariant === 'black'
                  ? 'bg-[#FAF8F5]'
                  : selectedVariant === 'white'
                  ? 'bg-[#0A0A0A]'
                  : 'bg-[#181818]'
              }`}
            >
              {item.component(selectedVariant)}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/10">
              <button
                onClick={() => handleCopySvg(item)}
                className="flex-1 py-2.5 px-4 text-xs font-sans-clean uppercase tracking-wider border border-white/20 text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all text-center"
              >
                {copiedId === item.id ? '✓ SVG Copied!' : 'Copy SVG Code'}
              </button>

              <button
                onClick={() => handleDownloadSvg(item)}
                className="flex-1 py-2.5 px-4 text-xs font-sans-clean uppercase tracking-wider bg-[#C8A97E] text-black font-semibold hover:bg-[#DFCDB5] transition-all text-center"
              >
                Download .SVG
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
