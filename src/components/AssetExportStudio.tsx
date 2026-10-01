import React, { useState } from 'react';
import { NKMonogramMaster, NKWordmark, NKCompactSeal, NKMonogramLinear, LogoVariant } from './MNLogos.tsx';

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

  // Raw SVG generators for true vector export of N.K FABRICS
  const getMonogramSvg = (variant: LogoVariant) => {
    const isGold = variant === 'champagne-gold';
    const fill = isGold ? 'url(#nkChampagneGold)' : variant === 'white' ? '#FAF8F5' : '#0C0C0C';
    const defs = isGold
      ? `<defs>
    <linearGradient id="nkChampagneGold" x1="0%" y1="0%" x2="100%" y2="100%">
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
    <!-- Letter N Left Column & Roman Serifs -->
    <path d="M 32 44 H 64 V 49 H 52 V 151 H 64 V 156 H 32 V 151 H 44 V 49 H 32 V 44 Z" />
    <!-- Letter N Primary Diagonal Traverse -->
    <path d="M 46 44 H 56 L 114 151 V 156 H 104 L 46 49 V 44 Z" />
    <!-- Letter N Right Column & K Shared Spine -->
    <path d="M 104 44 H 132 V 49 H 120 V 151 H 132 V 156 H 104 V 151 H 114 V 49 H 104 V 44 Z" />
    <!-- Letter K Upper Ascending Arm -->
    <path d="M 112 102 L 158 49 H 146 V 44 H 178 V 49 H 168 L 123 108 L 112 102 Z" />
    <!-- Letter K Lower Descending Leg -->
    <path d="M 116 98 L 126 94 L 168 151 H 178 V 156 H 146 V 151 H 156 L 122 106 L 116 98 Z" />
    <!-- Optical interlock cut & ligature accent -->
    <path d="M 115 95 L 121 101 L 117 106 L 111 100 Z" opacity="0.9" />
    <!-- Signature N.K Atelier Dot -->
    <circle cx="186" cy="153.5" r="3.5" />
  </g>
</svg>`;
  };

  const getSealSvg = (variant: LogoVariant) => {
    const isGold = variant === 'champagne-gold';
    const fill = isGold ? 'url(#nkSealGold)' : variant === 'white' ? '#FAF8F5' : '#0C0C0C';
    const defs = isGold
      ? `<defs>
    <linearGradient id="nkSealGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5EBDC" />
      <stop offset="25%" stop-color="#D8BE96" />
      <stop offset="50%" stop-color="#C8A97E" />
      <stop offset="75%" stop-color="#EADECB" />
      <stop offset="100%" stop-color="#B39062" />
    </linearGradient>
  </defs>`
      : '';

    return `<svg width="512" height="512" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  <circle cx="120" cy="120" r="114" stroke="${fill}" stroke-width="1.2" opacity="0.8" />
  <circle cx="120" cy="120" r="108" stroke="${fill}" stroke-width="0.75" stroke-dasharray="3 3" opacity="0.5" />
  <circle cx="120" cy="120" r="82" stroke="${fill}" stroke-width="0.8" opacity="0.6" />
  <path id="sealUpperExport" d="M 32 120 A 88 88 0 0 1 208 120" fill="none" />
  <path id="sealLowerExport" d="M 208 120 A 88 88 0 0 1 32 120" fill="none" />
  <text fill="${fill}" font-size="8.5" font-family="Plus Jakarta Sans, sans-serif" letter-spacing="0.32em" font-weight="500">
    <textPath href="#sealUpperExport" startOffset="50%" text-anchor="middle">N.K FABRICS · ATELIER</textPath>
  </text>
  <text fill="${fill}" font-size="7.5" font-family="Plus Jakarta Sans, sans-serif" letter-spacing="0.28em" opacity="0.75">
    <textPath href="#sealLowerExport" startOffset="50%" text-anchor="middle">HAUTE COUTURE &amp; LUXURY TEXTILES</textPath>
  </text>
  <g transform="translate(45, 45) scale(0.75)">
    <g fill="${fill}" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M 32 44 H 64 V 49 H 52 V 151 H 64 V 156 H 32 V 151 H 44 V 49 H 32 V 44 Z" />
      <path d="M 46 44 H 56 L 114 151 V 156 H 104 L 46 49 V 44 Z" />
      <path d="M 104 44 H 132 V 49 H 120 V 151 H 132 V 156 H 104 V 151 H 114 V 49 H 104 V 44 Z" />
      <path d="M 112 102 L 158 49 H 146 V 44 H 178 V 49 H 168 L 123 108 L 112 102 Z" />
      <path d="M 116 98 L 126 94 L 168 151 H 178 V 156 H 146 V 151 H 156 L 122 106 L 116 98 Z" />
      <circle cx="186" cy="153.5" r="3.5" />
    </g>
  </g>
</svg>`;
  };

  const getLinearSvg = (variant: LogoVariant) => {
    const isGold = variant === 'champagne-gold';
    const stroke = isGold ? '#C8A97E' : variant === 'white' ? '#FAF8F5' : '#0C0C0C';
    return `<svg width="512" height="512" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g stroke="${stroke}" stroke-width="5.5" stroke-linecap="square" stroke-linejoin="miter">
    <line x1="42" y1="156" x2="42" y2="44" />
    <line x1="42" y1="44" x2="114" y2="156" />
    <line x1="114" y1="44" x2="114" y2="156" />
    <line x1="114" y1="102" x2="164" y2="44" />
    <line x1="114" y1="102" x2="164" y2="156" />
  </g>
  <circle cx="182" cy="153.5" r="4" fill="${stroke}" />
</svg>`;
  };

  const getWordmarkSvg = (variant: LogoVariant) => {
    const isGold = variant === 'champagne-gold';
    const fill = isGold ? '#C8A97E' : variant === 'white' ? '#FAF8F5' : '#0C0C0C';
    const subFill = isGold ? '#C8A97E' : variant === 'white' ? '#D8D4CC' : '#555555';
    return `<svg width="800" height="240" viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="400" y="125" text-anchor="middle" font-family="Bodoni Moda, Cormorant Garamond, serif" font-size="52" letter-spacing="0.22em" fill="${fill}">N.K FABRICS</text>
  <text x="400" y="165" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="12" letter-spacing="0.42em" font-weight="300" fill="${subFill}" opacity="0.85">HAUTE COUTURE &amp; LUXURY TEXTILES</text>
</svg>`;
  };

  const ASSETS: ExportItem[] = [
    {
      id: 'master-monogram',
      title: 'Primary N.K Monogram',
      category: 'Monogram',
      recommendedFor: 'Suit interior label, traditional clothing tags, garment hangtags, rigid gift boxes, favicon',
      component: (v) => <NKMonogramMaster variant={v} size={110} />,
      svgCodeGenerator: getMonogramSvg,
    },
    {
      id: 'atelier-seal',
      title: 'Compact Atelier Seal',
      category: 'Seal',
      recommendedFor: 'Laser engraved horn buttons, wax seals, brass cufflinks, social profile avatars',
      component: (v) => <NKCompactSeal variant={v} size={120} />,
      svgCodeGenerator: getSealSvg,
    },
    {
      id: 'modern-linear',
      title: 'Architectural Ribbon Mark',
      category: 'Modern',
      recommendedFor: 'Hardware metal zipper pulls, technical athletic knitwear, micro-stamping',
      component: (v) => <NKMonogramLinear variant={v} size={110} />,
      svgCodeGenerator: getLinearSvg,
    },
    {
      id: 'full-wordmark',
      title: 'N.K FABRICS Wordmark Lockup',
      category: 'Wordmark',
      recommendedFor: 'Storefront facade, garment exterior hangtags, website header, shopping bags',
      component: (v) => <NKWordmark variant={v} size="md" subtitle="HAUTE COUTURE & LUXURY TEXTILES" />,
      svgCodeGenerator: getWordmarkSvg,
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
    link.download = `NK_FABRICS_${item.id}_${selectedVariant}.svg`;
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
            Download crisp, infinitely scalable vector SVGs or copy clean code directly into Figma, Illustrator, or garment embroidery digitizing workflows for N.K FABRICS.
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
