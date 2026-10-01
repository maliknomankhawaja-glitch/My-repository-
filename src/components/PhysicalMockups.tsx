import React, { useState } from 'react';
import { MNMonogramMaster, MNCompactSeal, MNWordmark, MNMonogramLinear } from './MNLogos.tsx';

// Image assets generated previously
const PACKAGING_IMG = '/src/assets/images/mn_luxury_packaging_showcase_1790692669800.jpg';
const FABRIC_IMG = '/src/assets/images/mn_luxury_suit_fabric_detail_1790692683058.jpg';
const TAG_IMG = '/src/assets/images/mn_luxury_woven_tag_texture_1790692696445.jpg';

export const PhysicalMockups: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'suit-label' | 'hangtag' | 'buttons' | 'packaging' | 'embroidery' | 'digital'>('suit-label');

  return (
    <div className="space-y-12">
      {/* Sub-navigation tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-white/10">
        {[
          { id: 'suit-label', label: 'Bespoke Suit Label' },
          { id: 'hangtag', label: '600gsm Cotton Hangtag' },
          { id: 'buttons', label: 'Horn Button & Cufflink' },
          { id: 'packaging', label: 'Rigid Box & Shopping Bag' },
          { id: 'embroidery', label: 'Lapel & Shirt Embroidery' },
          { id: 'digital', label: 'Favicon & Social Avatar' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-sans-clean transition-all duration-300 border ${
              activeTab === tab.id
                ? 'border-[#C8A97E] text-[#F4F1EA] bg-[#C8A97E]/10'
                : 'border-transparent text-white/50 hover:text-white/80 hover:border-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. BESPOKE SUIT INTERIOR WOVEN DAMASK LABEL */}
      {activeTab === 'suit-label' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-[#141414] p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
            {/* Herringbone wool fabric simulation backdrop */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2c2c2c_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/60 pointer-events-none" />

            {/* Suiting breast pocket lining & pick stitching */}
            <div className="relative z-10 max-w-md mx-auto">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E]/70 mb-3 text-center">
                Interior Pocket · Left Breast Lining
              </div>

              {/* The Damask Silk Woven Label */}
              <div className="bg-[#0A0A0A] border-y-2 border-[#1A1A1A] p-6 shadow-2xl relative">
                {/* Pick stitching border */}
                <div className="absolute inset-2 border border-dashed border-[#C8A97E]/30 pointer-events-none" />

                <div className="flex flex-col items-center justify-center text-center space-y-3 py-2">
                  {/* Subtle woven logo */}
                  <MNMonogramMaster variant="champagne-gold" size={68} />
                  
                  <div>
                    <h3 className="font-serif-lux text-xl tracking-[0.22em] text-[#FAF8F5]">N.K FABRICS</h3>
                    <p className="font-sans-clean text-[9px] uppercase tracking-[0.35em] text-[#C8A97E]">
                      HAUTE COUTURE SARTORIAL
                    </p>
                  </div>

                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent my-1" />

                  <div className="text-[9px] font-sans-clean text-white/50 tracking-[0.2em] uppercase leading-relaxed">
                    <div>Savile Row, London · Via Montenapoleone, Milan</div>
                    <div className="text-[8px] text-white/40 mt-1">Super 150s Pure Cashmere &amp; Wool</div>
                    <div className="text-[8px] text-[#C8A97E]/80 mt-1.5 font-mono">SPECIMEN NO. NK-2026-084</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Craftsmanship Specification
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#FAF8F5] leading-tight">
              High-Density Damask Silk Woven Garment Label
            </h3>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
              Crafted with ultra-fine 50-denier silk warp threads. The intertwined N.K ligature is reproduced at 0.15mm thread precision, ensuring that the razor-thin serifs and champagne gold metallic yarn remain pristine over decades of dry cleaning and wear.
            </p>
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-sans-clean text-white/60">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Placement</span>
                <span className="text-[#FAF8F5]">Interior right breast pocket & collar stand</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Weave Type</span>
                <span className="text-[#FAF8F5]">High-Definition Jacquard Damask (End-Fold)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Thread Colors</span>
                <span className="text-[#FAF8F5]">Noir Black, Champagne Lurex (#C8A97E)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/40">Stitch Count</span>
                <span className="text-[#FAF8F5]">120 picks per centimetre</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. 600GSM COTTON HANGTAG */}
      {activeTab === 'hangtag' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-[#171717] p-8 md:p-12 border border-white/10 relative overflow-hidden flex items-center justify-center">
            {/* Wax cord & safety pin */}
            <div className="relative">
              <div className="w-1 h-12 bg-[#2D2A26] mx-auto" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] mx-auto -mt-1 border border-[#333]" />

              {/* Tag Body */}
              <div className="w-64 bg-[#F4F1EA] text-[#0C0C0C] p-8 shadow-2xl relative border border-[#E6DFD5] -mt-1 flex flex-col items-center text-center">
                {/* Brass eyelet */}
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#B39366] bg-[#0C0C0C] mx-auto mb-6" />

                <div className="my-auto space-y-4">
                  <MNMonogramMaster variant="black" size={60} />
                  
                  <div>
                    <div className="font-serif-lux text-2xl tracking-[0.2em] text-[#0C0C0C]">N.K</div>
                    <div className="font-sans-clean text-[9px] uppercase tracking-[0.4em] text-[#666]">
                      ATELIER PRIVÉ
                    </div>
                  </div>

                  <div className="w-12 h-[1px] bg-black/20 mx-auto" />

                  {/* Blind deboss simulation */}
                  <div className="text-[10px] font-sans-clean uppercase tracking-[0.2em] text-[#555] leading-relaxed">
                    Pure Craftsmanship<br />Hand-Finished in Italy
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 w-full text-[8px] font-mono tracking-widest text-[#777] flex justify-between">
                  <span>LOT 014</span>
                  <span>100% CASHMERE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Retail Presentation
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#FAF8F5] leading-tight">
              600gsm Cotton Hangtag with Blind Deboss & Foil
            </h3>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
              Letterpressed on Italian FSC-certified cotton paper with a tactile, pillowy surface. The N.K monogram features a multi-level 3D blind deboss, while the atelier typography is hot-stamped with genuine matte champagne gold foil.
            </p>
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-sans-clean text-white/60">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Paper Weight</span>
                <span className="text-[#FAF8F5]">600gsm Heavyweight Cotton (Double-Mounted)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Finishing</span>
                <span className="text-[#FAF8F5]">Deep Blind Deboss + Matte Foil Stamping</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Fastener</span>
                <span className="text-[#FAF8F5]">Braided Waxed Silk Cord with Antique Brass Bulb Pin</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/40">Edge Treatment</span>
                <span className="text-[#FAF8F5]">Beveled edge with hand-gilded champagne trim</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. LASER ENGRAVED HORN BUTTON & CUFFLINK */}
      {activeTab === 'buttons' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-[#121212] p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-around gap-8">
            {/* Genuine Water Buffalo Horn Button (Suit Front) */}
            <div className="flex flex-col items-center space-y-3">
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#24211D] via-[#141311] to-[#0A0A09] shadow-2xl border border-[#3A352F] flex items-center justify-center p-3">
                {/* Horn button rim bevel */}
                <div className="w-full h-full rounded-full border border-black/80 flex items-center justify-center relative shadow-inner">
                  {/* Subtle rim engraving */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="buttonTextUpper"
                      d="M 12 50 A 38 38 0 0 1 88 50"
                      fill="none"
                    />
                    <path
                      id="buttonTextLower"
                      d="M 88 50 A 38 38 0 0 1 12 50"
                      fill="none"
                    />
                    <text fill="#6E6254" fontSize="4.2" fontFamily="Plus Jakarta Sans" letterSpacing="0.25em" fontWeight="600">
                      <textPath href="#buttonTextUpper" startOffset="50%" textAnchor="middle">
                        N.K ATELIER
                      </textPath>
                    </text>
                    <text fill="#5A5044" fontSize="3.8" fontFamily="Plus Jakarta Sans" letterSpacing="0.22em">
                      <textPath href="#buttonTextLower" startOffset="50%" textAnchor="middle">
                        SAVILE ROW
                      </textPath>
                    </text>
                  </svg>

                  {/* Button 4 Thread Holes */}
                  <div className="grid grid-cols-2 gap-3 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#050505] shadow-inner border border-black" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#050505] shadow-inner border border-black" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#050505] shadow-inner border border-black" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#050505] shadow-inner border border-black" />
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-sans-clean uppercase tracking-[0.2em] text-[#C8A97E]">
                32L Horn Jacket Button
              </span>
            </div>

            {/* Brushed Champagne Gold Cufflink */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#F5EBDC] via-[#C8A97E] to-[#8C6D45] p-1 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#181818] border border-[#C8A97E]/40 flex items-center justify-center p-2 relative shadow-inner">
                  <MNMonogramMaster variant="champagne-gold" size={54} />
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#C8A97E]/30" />
                </div>
              </div>
              <span className="text-[11px] font-sans-clean uppercase tracking-[0.2em] text-[#C8A97E]">
                Sartorial Brass Cufflink
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Hardware & Haberdashery
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#FAF8F5] leading-tight">
              Laser-Engraved Natural Horn & Gilded Accessories
            </h3>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
              Every detail is engineered for permanence. Jacket buttons are carved from ethically sourced solid water buffalo horn, matte burnished, and circular-engraved with micro laser etching. Formal cufflinks feature the sovereign N.K monogram set into solid jewelry brass.
            </p>
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-sans-clean text-white/60">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Button Material</span>
                <span className="text-[#FAF8F5]">Genuine Unpolished Matte Horn (Corozo alternative)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Engraving Depth</span>
                <span className="text-[#FAF8F5]">0.25mm Precision Optical Fiber Laser</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Metal Plating</span>
                <span className="text-[#FAF8F5]">18K Champagne Gold PVD Satin Coating</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/40">Durability</span>
                <span className="text-[#FAF8F5]">Resistant to steam, moisture, and thermal dry clean</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. RIGID BOX & SHOPPING BAG */}
      {activeTab === 'packaging' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 relative overflow-hidden group">
            {/* Generated photo mockup of luxury packaging */}
            <img
              src={PACKAGING_IMG}
              alt="N.K FABRICS Luxury Packaging Showcase"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <div className="font-serif-lux text-xl text-[#FAF8F5]">N.K FABRICS ATELIER PACKAGING SUITE</div>
                <div className="text-xs font-sans-clean text-[#C8A97E] tracking-wider uppercase">
                  Rigid Hinged Suit Presentation Box & Off-White Textured Tote
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Boutique Unboxing
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#FAF8F5] leading-tight">
              Architectural Packaging & Protective Presentation
            </h3>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
              Designed to evoke the ceremonial experience of acquiring haute couture. Deep charcoal soft-touch paper wraps a 2.5mm grayboard chassis, lined with acid-free ivory archival tissue printed with a muted watermarked monogram.
            </p>
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-sans-clean text-white/60">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Box Architecture</span>
                <span className="text-[#FAF8F5]">Rigid Magnetic Clasp Book-Style Suit Box</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Shopping Bag</span>
                <span className="text-[#FAF8F5]">250gsm Textured Ivory Ribbed Kraft Paper</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Ribbon Handle</span>
                <span className="text-[#FAF8F5]">38mm Heavy Herringbone Grosgrain Silk</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/40">Foil Stamp</span>
                <span className="text-[#FAF8F5]">Kurz Luxor Champagne Gold 428 Micro-Emboss</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. LAPEL & SHIRT EMBROIDERY */}
      {activeTab === 'embroidery' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 relative overflow-hidden group">
            <img
              src={FABRIC_IMG}
              alt="Bespoke Suit Wool Fabric Detail"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
              {/* Overlay simulation of delicate silk embroidery */}
              <div className="bg-black/60 backdrop-blur-md p-8 border border-white/10 text-center max-w-sm">
                <MNMonogramMaster variant="champagne-gold" size={72} />
                <div className="font-serif-lux text-xl text-[#FAF8F5] mt-2">N.K</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-[#C8A97E] mt-1">
                  Hand-Piped Gold Bullion Embroidery
                </div>
                <div className="text-[10px] text-white/50 font-sans-clean mt-2">
                  Suit Lapel Insignia &amp; Shirt Breast Placement
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Tailoring Detail
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#FAF8F5] leading-tight">
              Micro-Stitch Embroidery for Suiting &amp; Shirting
            </h3>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
              For bespoke formal suits, formal Sea Island cotton shirts, and bespoke trousers, the monogram is rendered in tonal silk or discreet champagne bullion wire. The structural balance of the N.K letterforms prevents thread clustering, maintaining crisp delineation.
            </p>
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-sans-clean text-white/60">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Shirt Cuff Size</span>
                <span className="text-[#FAF8F5]">9mm height (Subtle tone-on-tone French cuff)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Suit Lapel Insignia</span>
                <span className="text-[#FAF8F5]">38mm height (Hand-embroidered gold wire)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Thread Material</span>
                <span className="text-[#FAF8F5]">Madeira Metallic No. 40 or 100% Pure Mulberry Silk</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/40">Underlay Support</span>
                <span className="text-[#FAF8F5]">Tear-away water-soluble stabilizer (Zero stiffness)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. FAVICON & SOCIAL MEDIA AVATAR */}
      {activeTab === 'digital' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-[#141414] p-8 md:p-12 border border-white/10 space-y-8">
            {/* Browser Tab Chrome Mockup */}
            <div className="bg-[#1C1C1C] rounded-t-lg border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-[#242424] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="ml-4 flex items-center gap-2 bg-[#1C1C1C] px-3 py-1 rounded text-xs text-white/80 max-w-xs border border-white/5">
                  {/* 16px Favicon in action! */}
                  <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center p-0.5">
                    <MNMonogramMaster variant="champagne-gold" size={14} showPeriod={false} />
                  </div>
                  <span className="truncate text-[11px] font-sans-clean">N.K FABRICS Maison de Haute Couture</span>
                </div>
              </div>
              <div className="p-4 text-center text-xs text-white/40 font-mono">
                16px &amp; 32px Micro-Favicon in Retina Browser Chrome
              </div>
            </div>

            {/* Social Media Circular Profile Avatars */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 rounded-full bg-[#0A0A0A] border-2 border-[#C8A97E] flex items-center justify-center shadow-xl p-3">
                  <MNMonogramMaster variant="champagne-gold" size={54} />
                </div>
                <span className="text-[10px] font-sans-clean uppercase tracking-wider text-white/50">
                  Instagram / Threads (120px)
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 rounded-full bg-[#FAF8F5] border-2 border-[#D8CFC4] flex items-center justify-center shadow-xl p-3">
                  <MNMonogramMaster variant="black" size={54} />
                </div>
                <span className="text-[10px] font-sans-clean uppercase tracking-wider text-white/50">
                  Editorial Light Profile
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 rounded-full bg-[#181818] border border-white/20 flex items-center justify-center shadow-xl p-2">
                  <MNCompactSeal variant="champagne-gold" size={78} />
                </div>
                <span className="text-[10px] font-sans-clean uppercase tracking-wider text-white/50">
                  Atelier Official Seal
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Digital Ecosystem
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#FAF8F5] leading-tight">
              Micro-Scale Optical Legibility
            </h3>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
              Unlike generic fashion marks that collapse into illegible noise when scaled down, the high-contrast geometry of N.K has been optically tuned to retain immediate letter recognition at 16×16 pixels for favicons and 64×64 pixels on mobile retina screens.
            </p>
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-sans-clean text-white/60">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Favicon Formats</span>
                <span className="text-[#FAF8F5]">SVG (vector), ICO (16/32/48px), PNG (192/512px)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Apple Touch Icon</span>
                <span className="text-[#FAF8F5]">180×180px PNG with solid #0C0C0C background</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/40">Social Avatar Safe Zone</span>
                <span className="text-[#FAF8F5]">80% central circular diameter padding</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/40">Contrast Score</span>
                <span className="text-[#FAF8F5]">16.8:1 AAA compliant against black canvas</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
