import React, { useState } from 'react';
import { MNWordmark } from './MNLogos.tsx';

const SUB_BRANDS = [
  {
    tier: 'N.K BESPOKE',
    category: "Master Suiting & Savile Row Commissions",
    spec: 'Full canvas hand-padded lapels, basted fitting, 80 hours handcraft',
    font: 'Bodoni Moda / Cormorant Garamond',
  },
  {
    tier: 'N.K SARTORIAL',
    category: 'Formal Shirts, Trousers & Structured Suits',
    spec: 'Fine Egyptian Giza 45 cotton, mother-of-pearl buttons, single-needle stitching',
    font: 'Bodoni Moda / Cormorant Garamond',
  },
  {
    tier: 'N.K TRADITIONAL',
    category: 'Heritage Ceremony & Traditional Luxury Attire',
    spec: 'Hand-loomed brocades, pure zardozi gold embroidery, imperial silks',
    font: 'Bodoni Moda / Cormorant Garamond',
  },
  {
    tier: 'N.K CASUAL',
    category: 'Noble Knitwear & Weekend Cashmere',
    spec: '12-gauge 2-ply Mongolian cashmere, seamless knit, horn toggle fasteners',
    font: 'Plus Jakarta Sans',
  },
  {
    tier: 'N.K ACCESSORIES',
    category: 'Handmade Footwear, Silk Ties & Fine Leatherware',
    spec: 'Goodyear welted French calfskin, 7-fold hand-rolled silk foulard',
    font: 'Plus Jakarta Sans',
  },
];

export const TypographySection: React.FC = () => {
  const [testText, setTestText] = useState('THE ARCHITECTURE OF SARTORIAL EXCELLENCE');
  const [serifFont, setSerifFont] = useState<'bodoni' | 'cormorant'>('bodoni');

  return (
    <div className="space-y-12">
      {/* Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
          Typographic System
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-[#FAF8F5]">
          Bespoke Serifs &amp; Restrained Modern Sans
        </h2>
        <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
          The typographic voice of N.K FABRICS alternates between statuesque Roman serif displays for brand statements and razor-sharp, whisper-quiet sans-serif typography for technical haberdashery specifications and digital utility.
        </p>
      </div>

      {/* Font Family 1: High-Fashion Serif Specimen */}
      <div className="p-8 md:p-10 bg-[#141414] border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
              Primary Display Serif
            </span>
            <h3 className="font-serif-lux text-2xl md:text-3xl text-[#FAF8F5] mt-1">
              Bodoni Moda & Cormorant Garamond
            </h3>
          </div>
          <div className="text-xs font-sans-clean text-white/50">
            Intended for: Wordmark, Brand Headlines, Collection Titles, Certificate of Authenticity
          </div>
        </div>

        {/* Large specimen */}
        <div className="space-y-4 py-4">
          <div className="font-serif-lux text-4xl md:text-6xl text-[#FAF8F5] leading-tight tracking-[0.02em]">
            Precision. Silhouette. Uncompromising Heritage.
          </div>
          <div className="font-serif-lux italic text-2xl md:text-3xl text-[#C8A97E] font-light">
            “True luxury whispers through the perfect fall of cashmere and the quiet discipline of a single stitch.”
          </div>
        </div>

        {/* Character set showcase */}
        <div className="p-4 bg-black/40 border border-white/5 space-y-2">
          <div className="text-[10px] font-mono text-white/40 uppercase">Display Character Set (Roman &amp; Numbers)</div>
          <div className="font-serif-lux text-lg md:text-xl text-white/80 tracking-widest break-all">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </div>
          <div className="font-serif-lux text-lg md:text-xl text-white/60 tracking-widest">
            0 1 2 3 4 5 6 7 8 9 · &amp; § № — /
          </div>
        </div>
      </div>

      {/* Font Family 2: Clean Supporting Sans */}
      <div className="p-8 md:p-10 bg-[#141414] border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A97E]">
              Supporting Sans-Serif
            </span>
            <h3 className="font-sans-clean text-2xl text-[#FAF8F5] mt-1 font-semibold">
              Plus Jakarta Sans
            </h3>
          </div>
          <div className="text-xs font-sans-clean text-white/50">
            Intended for: Garment specifications, fabric compositions, care tags, UI controls
          </div>
        </div>

        {/* Specimen table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-white/40 uppercase">Micro Specification (9px / 0.35em)</span>
            <p className="font-sans-clean text-[10px] uppercase tracking-[0.35em] text-[#C8A97E]">
              100% PURE ESCORIAL WOOL · DRY CLEAN ONLY
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-white/40 uppercase">Body Prose (14px / 1.6)</span>
            <p className="font-sans-clean text-sm text-white/70 font-light leading-relaxed">
              Every canvas is hand-stitched with horsehair interlining to drape naturally over the wearer&apos;s shoulders.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-white/40 uppercase">Tabular Numerals (14px)</span>
            <p className="font-mono text-sm text-white/90 tabular-nums">
              LOT: NK-2026/89 · GAUGE: 12 · COUNT: 2/60Nm
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Type Tester */}
      <div className="p-8 bg-[#161616] border border-white/10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#C8A97E]">
            Interactive Typography Sandbox
          </span>
          <span className="text-xs text-white/40 font-sans-clean">
            Type custom headline or tailoring garment text below
          </span>
        </div>

        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Enter text to preview..."
          className="w-full bg-black/50 border border-white/20 px-4 py-3 text-sm text-white font-sans-clean focus:border-[#C8A97E] focus:outline-none"
        />

        <div className="pt-6 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-white/40 uppercase">Display Serif (Large)</span>
            <div className="font-serif-lux text-3xl md:text-5xl text-[#FAF8F5] tracking-wide">
              {testText || 'N.K FABRICS Atelier de Couture'}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-white/40 uppercase">All-Caps Letterspaced Serif</span>
            <div className="font-serif-lux text-xl md:text-2xl text-[#C8A97E] tracking-[0.25em] uppercase">
              {testText || 'N.K FABRICS Haute Couture'}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-white/40 uppercase">Supporting Clean Sans-Serif</span>
            <div className="font-sans-clean text-xs md:text-sm text-white/80 uppercase tracking-[0.3em] font-light">
              {testText || 'Bespoke Sartorial Atelier'}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Brand Architecture Lockups */}
      <div className="space-y-4">
        <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Sub-Brand Tier Architecture</h3>
        <p className="text-xs font-sans-clean text-white/60">
          How the N.K FABRICS brand identity extends across clothing categories without fragmenting brand equity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {SUB_BRANDS.map((item) => (
            <div key={item.tier} className="p-6 bg-[#121212] border border-white/10 space-y-3">
              <div className="border-b border-white/10 pb-3">
                <div className="font-serif-lux text-xl tracking-[0.18em] text-[#FAF8F5]">
                  {item.tier}
                </div>
                <div className="text-[10px] font-sans-clean uppercase tracking-[0.2em] text-[#C8A97E] mt-0.5">
                  {item.category}
                </div>
              </div>
              <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
                {item.spec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
