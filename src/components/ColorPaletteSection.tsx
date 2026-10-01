import React, { useState } from 'react';
import { MNMonogramMaster, MNWordmark } from './MNLogos.tsx';

interface ColorSwatch {
  name: string;
  category: 'Primary' | 'Secondary' | 'Luxury Accent';
  hex: string;
  rgb: string;
  cmyk: string;
  pantone: string;
  role: string;
  material: string;
  textColor: string;
  border?: boolean;
}

const PALETTE: ColorSwatch[] = [
  {
    name: 'Deep Black',
    category: 'Primary',
    hex: '#0C0C0C',
    rgb: '12, 12, 12',
    cmyk: '75, 68, 67, 90',
    pantone: 'Pantone Black 6 C',
    role: 'Primary garment canvas, formal evening suiting, exterior boutique architecture, luxury gift boxes',
    material: 'Midnight super 150s wool, grosgrain silk ribbon, matte coated bookcloth',
    textColor: '#FAF8F5',
  },
  {
    name: 'Ivory',
    category: 'Primary',
    hex: '#FAF8F5',
    rgb: '250, 248, 245',
    cmyk: '1, 1, 2, 0',
    pantone: 'Pantone 11-0601 TCX',
    role: 'Crisp formal shirting, archival tissue paper, light shopping totes, digital editorial field',
    material: 'Sea Island 200/2 cotton poplin, mulberry silk lining, 600gsm cotton cardstock',
    textColor: '#0C0C0C',
    border: true,
  },
  {
    name: 'Off-White',
    category: 'Primary',
    hex: '#F4F1EA',
    rgb: '244, 241, 234',
    cmyk: '2, 2, 5, 1',
    pantone: 'Pantone 11-0104 TCX',
    role: 'Garment hangtags, tailored linen summer waistcoats & suiting, interior garment labels, cert envelopes',
    material: 'Irish linen, hand-milled textured paper, unbleached cotton twill',
    textColor: '#0C0C0C',
    border: true,
  },
  {
    name: 'Charcoal',
    category: 'Secondary',
    hex: '#1E1E1E',
    rgb: '30, 30, 30',
    cmyk: '70, 65, 64, 75',
    pantone: 'Pantone 19-4007 TCX',
    role: 'Sartorial business suiting, horn buttons, flannel trousers, interior pocket linings',
    material: 'Worsted flannel, genuine water buffalo horn, matte cardstock',
    textColor: '#FAF8F5',
  },
  {
    name: 'Warm Beige',
    category: 'Secondary',
    hex: '#E6DFD5',
    rgb: '230, 223, 213',
    cmyk: '6, 7, 12, 0',
    pantone: 'Pantone 13-1008 TCX',
    role: 'Cashmere knitwear, overcoats, garment dust bags, seasonal lookbook covers',
    material: 'Grade-A Mongolian cashmere, suede elbow patches, organic cotton flannel',
    textColor: '#1A1A1A',
    border: true,
  },
  {
    name: 'Champagne Gold',
    category: 'Luxury Accent',
    hex: '#C8A97E',
    rgb: '200, 169, 126',
    cmyk: '17, 27, 52, 6',
    pantone: 'Pantone 14-1036 TCX',
    role: 'Very subtle metallic foil stamping, metallic embroidery thread, brass cufflinks, zipper pulls',
    material: 'Kurz Luxor 428 hot-stamping foil, Madeira lurex thread, 18K satin-brushed brass',
    textColor: '#0C0C0C',
  },
];

export const ColorPaletteSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(PALETTE[5]); // default Champagne Gold
  const [previewBg, setPreviewBg] = useState<string>('#0C0C0C');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(`${label}: ${text}`);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="space-y-12">
      {/* Editorial introduction */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
          Chromatic Architecture
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-[#FAF8F5]">
          A Timeless Palette of Natural Fibers & Gilded Metallurgy
        </h2>
        <p className="text-sm font-sans-clean text-[#D8D4CC]/70 leading-relaxed font-light">
          Strictly devoid of artificial neon or saturated dyes. N.K FABRICS&apos;s color system is rooted in the organic noble materials of traditional sartorial tailoring: midnight wools, raw bleached silks, bleached cotton cardstock, and understated champagne gold bullion.
        </p>
      </div>

      {/* Copy Notification Toast */}
      {copiedCode && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#C8A97E] text-black px-4 py-2.5 shadow-2xl text-xs font-mono font-medium flex items-center gap-2 animate-bounce">
          <span>✓ Copied to clipboard:</span>
          <strong>{copiedCode}</strong>
        </div>
      )}

      {/* 6-Color Swatch Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PALETTE.map((color) => {
          const isSelected = selectedColor.name === color.name;
          return (
            <div
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`border transition-all duration-300 cursor-pointer overflow-hidden group ${
                isSelected
                  ? 'border-[#C8A97E] shadow-xl shadow-black/60 bg-[#161616]'
                  : 'border-white/10 hover:border-white/30 bg-[#121212]'
              }`}
            >
              {/* Swatch Color Bar */}
              <div
                className="h-32 w-full p-4 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: color.hex, color: color.textColor }}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-black/20 backdrop-blur-sm rounded-sm">
                    {color.category}
                  </span>
                  <span className="text-xs font-mono font-semibold">{color.hex}</span>
                </div>
                <div className="font-serif-lux text-xl font-medium tracking-wide">
                  {color.name}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="p-5 space-y-4 text-xs font-sans-clean">
                <div className="space-y-1.5 text-white/70">
                  <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                    <span className="text-white/40 font-mono text-[10px]">RGB</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(`rgb(${color.rgb})`, `${color.name} RGB`);
                      }}
                      className="font-mono text-white/80 hover:text-[#C8A97E] transition-colors"
                      title="Click to copy RGB"
                    >
                      {color.rgb}
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                    <span className="text-white/40 font-mono text-[10px]">CMYK</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(color.cmyk, `${color.name} CMYK`);
                      }}
                      className="font-mono text-white/80 hover:text-[#C8A97E] transition-colors"
                      title="Click to copy CMYK"
                    >
                      {color.cmyk}
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-white/40 font-mono text-[10px]">PANTONE</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(color.pantone, `${color.name} Pantone`);
                      }}
                      className="font-mono text-[#C8A97E] hover:underline"
                      title="Click to copy Pantone"
                    >
                      {color.pantone}
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] text-white/50 leading-relaxed">
                  <strong className="text-white/80 block mb-0.5 font-medium">Material Context:</strong>
                  {color.material}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Substrate Inspection Studio */}
      <div className="p-8 bg-[#141414] border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">Substrate Contrast Inspection</h3>
            <p className="text-xs font-sans-clean text-white/50 mt-1">
              Test how the N.K FABRICS logo and wordmark render against each of the brand&apos;s specified background tones.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-white/40 uppercase mr-1">Canvas:</span>
            {PALETTE.map((c) => (
              <button
                key={c.name}
                onClick={() => setPreviewBg(c.hex)}
                className={`w-7 h-7 rounded-sm border transition-all ${
                  previewBg === c.hex ? 'ring-2 ring-[#C8A97E] scale-110' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Canvas */}
        <div
          className="min-h-[240px] p-10 flex flex-col md:flex-row items-center justify-around gap-8 transition-colors duration-500 border border-white/10"
          style={{ backgroundColor: previewBg }}
        >
          {/* Champagne Gold on this canvas */}
          <div className="flex flex-col items-center space-y-3">
            <MNMonogramMaster variant="champagne-gold" size={90} />
            <span
              className="text-[10px] font-mono uppercase tracking-widest opacity-60"
              style={{ color: previewBg === '#FAF8F5' || previewBg === '#F4F1EA' || previewBg === '#E6DFD5' ? '#000' : '#fff' }}
            >
              Champagne Gold Accent
            </span>
          </div>

          {/* Deep Black on this canvas */}
          <div className="flex flex-col items-center space-y-3">
            <MNMonogramMaster variant="black" size={90} />
            <span
              className="text-[10px] font-mono uppercase tracking-widest opacity-60"
              style={{ color: previewBg === '#FAF8F5' || previewBg === '#F4F1EA' || previewBg === '#E6DFD5' ? '#000' : '#fff' }}
            >
              Noir Monochrome
            </span>
          </div>

          {/* White on this canvas */}
          <div className="flex flex-col items-center space-y-3">
            <MNMonogramMaster variant="white" size={90} />
            <span
              className="text-[10px] font-mono uppercase tracking-widest opacity-60"
              style={{ color: previewBg === '#FAF8F5' || previewBg === '#F4F1EA' || previewBg === '#E6DFD5' ? '#000' : '#fff' }}
            >
              Pure Ivory Reversal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
