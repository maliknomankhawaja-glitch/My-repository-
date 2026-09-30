import React from 'react';

export type LogoVariant = 'champagne-gold' | 'black' | 'white' | 'charcoal' | 'raw';

interface LogoProps {
  variant?: LogoVariant;
  size?: number | string;
  className?: string;
  showPeriod?: boolean;
}

/**
 * Champagne Gold gradient definition component - restrained, subtle, never flashy
 */
export const GoldGradientDef: React.FC<{ id?: string }> = ({ id = 'nkChampagneGold' }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F5EBDC" />
      <stop offset="25%" stopColor="#D8BE96" />
      <stop offset="50%" stopColor="#C8A97E" />
      <stop offset="75%" stopColor="#EADECB" />
      <stop offset="100%" stopColor="#B39062" />
    </linearGradient>
    <linearGradient id={`${id}-subtle`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#DFCDB5" />
      <stop offset="50%" stopColor="#C8A97E" />
      <stop offset="100%" stopColor="#BA976B" />
    </linearGradient>
    <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.25" />
    </filter>
  </defs>
);

const getFillAndStroke = (variant: LogoVariant, gradientId = 'nkChampagneGold') => {
  switch (variant) {
    case 'champagne-gold':
      return { fill: `url(#${gradientId})`, stroke: `url(#${gradientId})` };
    case 'black':
      return { fill: '#0C0C0C', stroke: '#0C0C0C' };
    case 'white':
      return { fill: '#FAF8F5', stroke: '#FAF8F5' };
    case 'charcoal':
      return { fill: '#1F1F1F', stroke: '#1F1F1F' };
    case 'raw':
    default:
      return { fill: 'currentColor', stroke: 'currentColor' };
  }
};

/**
 * 1. PRIMARY N.K MONOGRAM (Master Haute Couture Interlocking Ligature)
 * An original, statuesque interlock of Roman 'N' and 'K' with optical balance,
 * high-contrast calligraphic stems, hairline serifs, woven textile relief, and an embedded atelier dot.
 * Works seamlessly large on the homepage, small in navigation, and on luxury garment tags.
 */
export const NKMonogramMaster: React.FC<LogoProps> = ({
  variant = 'champagne-gold',
  size = 120,
  className = '',
  showPeriod = true,
}) => {
  const gradientId = `nkGold-${React.useId().replace(/:/g, '')}`;
  const { fill } = getFillAndStroke(variant, gradientId);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-all duration-300 ${className}`}
      aria-label="N.K FABRICS Master Monogram"
    >
      {variant === 'champagne-gold' && <GoldGradientDef id={gradientId} />}
      
      {/* 
        N.K FABRICS BESPOKE MASTER MONOGRAM GEOMETRY:
        - The 'N' features an architectural left pillar with Roman bracketed serifs,
          a high-contrast razor diagonal sweeping downwards to the right axis.
        - The 'K' interlocks organically along the right spine: its upper arm reaches
          upward with Roman terminal serifs, while its lower calligraphic leg sweeps
          downward with statuesque weight and precision foot serif.
        - Subtle negative space relief where the strokes overlap, creating an unmistakable
          haute couture woven textile emblem.
      */}
      <g fill={fill} fillRule="evenodd" clipRule="evenodd">
        {/* Letter N Left Column & Roman Serifs */}
        <path d="M 32 44 H 64 V 49 H 52 V 151 H 64 V 156 H 32 V 151 H 44 V 49 H 32 V 44 Z" />

        {/* Letter N Primary Diagonal Traverse (Thick modulated descent) */}
        <path d="M 46 44 H 56 L 114 151 V 156 H 104 L 46 49 V 44 Z" />

        {/* 
          Letter N Right Vertical Pillar & K Shared Spine:
          Anchors the central-right axis from y: 44 to y: 156.
          With bracketed serifs at top.
        */}
        <path d="M 104 44 H 132 V 49 H 120 V 151 H 132 V 156 H 104 V 151 H 114 V 49 H 104 V 44 Z" />

        {/* 
          Letter K Upper Ascending Arm:
          Branches from the junction at x: 114, y: 100 up towards x: 164, y: 44.
          Features a crisp Roman terminal serif at the top right.
        */}
        <path d="M 112 102 L 158 49 H 146 V 44 H 178 V 49 H 168 L 123 108 L 112 102 Z" />

        {/* 
          Letter K Lower Descending Leg:
          Sweeps from x: 118, y: 98 down to x: 168, y: 156 with couture flare.
          Features a statuesque terminal foot serif.
        */}
        <path d="M 116 98 L 126 94 L 168 151 H 178 V 156 H 146 V 151 H 156 L 122 106 L 116 98 Z" />

        {/* Optical interlock cut & ligature accent */}
        <path d="M 115 95 L 121 101 L 117 106 L 111 100 Z" opacity="0.9" />

        {/* 
          The Signature N.K Atelier Dot
          Nested gracefully at the baseline right terminal
        */}
        {showPeriod && (
          <circle cx="186" cy="153.5" r="3.5" />
        )}
      </g>
    </svg>
  );
};

/**
 * 2. ARCHITECTURAL CONTINUOUS MONOGRAM (Modern Luxury Linear Ribbon)
 * A seamless geometric ribbon connecting N and K, calibrated for metal hardware,
 * lapel pins, horn buttons, micro-embroidery, and small favicon legibility.
 */
export const NKMonogramLinear: React.FC<LogoProps> = ({
  variant = 'champagne-gold',
  size = 120,
  className = '',
  showPeriod = true,
}) => {
  const gradientId = `nkLinearGold-${React.useId().replace(/:/g, '')}`;
  const { stroke, fill } = getFillAndStroke(variant, gradientId);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-all duration-300 ${className}`}
      aria-label="N.K FABRICS Modern Architectural Monogram"
    >
      {variant === 'champagne-gold' && <GoldGradientDef id={gradientId} />}
      
      <g stroke={stroke} strokeWidth="5.5" strokeLinecap="square" strokeLinejoin="miter">
        {/* N Left Vertical Pillar */}
        <line x1="42" y1="156" x2="42" y2="44" />
        
        {/* N Diagonal Descent */}
        <line x1="42" y1="44" x2="114" y2="156" />
        
        {/* K Vertical Spine (shares alignment with N right) */}
        <line x1="114" y1="44" x2="114" y2="156" />
        
        {/* K Upper Diagonal Arm */}
        <line x1="114" y1="102" x2="164" y2="44" />
        
        {/* K Lower Diagonal Leg */}
        <line x1="114" y1="102" x2="164" y2="156" />
      </g>

      {/* Signature atelier period dot */}
      {showPeriod && (
        <circle cx="182" cy="153.5" r="4" fill={fill} />
      )}
    </svg>
  );
};

/**
 * 3. COMPACT ATELIER SEAL / EMBLEM
 * The N.K monogram framed within a precision double-hairline circle with micro-typography
 * for suit horn buttons, metal cufflinks, packaging wax seals, and social avatars.
 */
export const NKCompactSeal: React.FC<LogoProps & { subtitle?: string }> = ({
  variant = 'champagne-gold',
  size = 140,
  className = '',
  subtitle = 'HAUTE COUTURE · TEXTILE ATELIER',
}) => {
  const gradientId = `nkSealGold-${React.useId().replace(/:/g, '')}`;
  const { stroke, fill } = getFillAndStroke(variant, gradientId);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-all duration-300 ${className}`}
      aria-label="N.K FABRICS Atelier Seal"
    >
      {variant === 'champagne-gold' && <GoldGradientDef id={gradientId} />}
      
      {/* Outer hairline circle */}
      <circle cx="120" cy="120" r="114" stroke={stroke} strokeWidth="1.2" opacity="0.8" />
      {/* Inner fine ring */}
      <circle cx="120" cy="120" r="108" stroke={stroke} strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="120" cy="120" r="82" stroke={stroke} strokeWidth="0.8" opacity="0.6" />

      {/* Circular text path */}
      <path
        id="sealPathUpper"
        d="M 32 120 A 88 88 0 0 1 208 120"
        fill="none"
      />
      <path
        id="sealPathLower"
        d="M 208 120 A 88 88 0 0 1 32 120"
        fill="none"
      />

      <text fill={fill} fontSize="8.5" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.32em" fontWeight="500">
        <textPath href="#sealPathUpper" startOffset="50%" textAnchor="middle">
          N.K FABRICS · ATELIER
        </textPath>
      </text>

      <text fill={fill} fontSize="7.5" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.28em" opacity="0.75">
        <textPath href="#sealPathLower" startOffset="50%" textAnchor="middle">
          HAUTE COUTURE & LUXURY TEXTILES
        </textPath>
      </text>

      {/* Central Monogram */}
      <g transform="translate(45, 45) scale(0.75)">
        <g fill={fill} fillRule="evenodd" clipRule="evenodd">
          {/* N Left Column */}
          <path d="M 32 44 H 64 V 49 H 52 V 151 H 64 V 156 H 32 V 151 H 44 V 49 H 32 V 44 Z" />
          {/* N Diagonal */}
          <path d="M 46 44 H 56 L 114 151 V 156 H 104 L 46 49 V 44 Z" />
          {/* N Right / K Spine */}
          <path d="M 104 44 H 132 V 49 H 120 V 151 H 132 V 156 H 104 V 151 H 114 V 49 H 104 V 44 Z" />
          {/* K Upper Arm */}
          <path d="M 112 102 L 158 49 H 146 V 44 H 178 V 49 H 168 L 123 108 L 112 102 Z" />
          {/* K Lower Leg */}
          <path d="M 116 98 L 126 94 L 168 151 H 178 V 156 H 146 V 151 H 156 L 122 106 L 116 98 Z" />
          {/* Period */}
          <circle cx="186" cy="153.5" r="3.5" />
        </g>
      </g>
    </svg>
  );
};

/**
 * 4. FULL N.K FABRICS WORDMARK & LOGOTYPE
 * High-fashion display serif with letterspaced luxury proportions,
 * custom refined typography, and atelier descriptor.
 */
export const NKWordmark: React.FC<{
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  subtitle?: string | null;
  className?: string;
  showSubtitle?: boolean;
}> = ({
  variant = 'champagne-gold',
  size = 'md',
  subtitle = 'HAUTE COUTURE & LUXURY TEXTILES',
  className = '',
  showSubtitle = true,
}) => {
  const gradientId = `nkWordmarkGold-${React.useId().replace(/:/g, '')}`;
  const { fill } = getFillAndStroke(variant, gradientId);

  const sizeStyles = {
    sm: { letter: 'text-2xl', sub: 'text-[8.5px] tracking-[0.38em]', gap: 'gap-1' },
    md: { letter: 'text-4xl md:text-5xl', sub: 'text-[10px] md:text-[11px] tracking-[0.42em]', gap: 'gap-2' },
    lg: { letter: 'text-6xl md:text-7xl', sub: 'text-xs tracking-[0.5em]', gap: 'gap-3' },
    xl: { letter: 'text-7xl md:text-9xl', sub: 'text-sm tracking-[0.55em]', gap: 'gap-4' },
  }[size];

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${sizeStyles.gap} ${className}`}>
      {/* Wordmark Characters */}
      <div className={`font-serif-lux font-normal tracking-[0.22em] leading-none flex items-baseline ${sizeStyles.letter}`}>
        {variant === 'champagne-gold' ? (
          <span className="gold-foil-text font-serif">N.K FABRICS</span>
        ) : (
          <span style={{ color: variant === 'black' ? '#0C0C0C' : variant === 'white' ? '#FAF8F5' : variant === 'charcoal' ? '#1F1F1F' : 'currentColor' }}>
            N.K FABRICS
          </span>
        )}
      </div>

      {/* Sub-label descriptor */}
      {showSubtitle && subtitle && (
        <span
          className={`font-sans-clean uppercase font-light opacity-80 whitespace-nowrap ${sizeStyles.sub}`}
          style={{
            color: variant === 'champagne-gold' ? '#C8A97E' : variant === 'black' ? '#555555' : variant === 'white' ? '#D8D4CC' : 'currentColor',
          }}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
};

// Aliases for seamless backward-compatibility and immediate update across all components
export const MNMonogramMaster = NKMonogramMaster;
export const MNMonogramLinear = NKMonogramLinear;
export const MNCompactSeal = NKCompactSeal;
export const MNWordmark = NKWordmark;

/**
 * 5. BRAND IDENTITY SHOWCASE GRID (Interactive preview tool)
 */
export const NKLogoSystemShowcase: React.FC = () => {
  return (
    <div className="w-full bg-[#0C0C0C] text-[#FAF8F5] py-20 px-6 sm:px-12 border-b border-[#242424]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#C8A97E] text-xs font-sans-clean tracking-[0.35em] uppercase">
            Official Brand Identity
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-lux tracking-wide">
            N.K FABRICS
          </h2>
          <p className="text-stone-400 font-sans-clean text-sm max-w-xl mx-auto leading-relaxed">
            The definitive visual identity of N.K FABRICS. An interlocking Roman N and K monogram engineered for quiet luxury, modern bespoke tailoring, and heritage Pakistani textiles.
          </p>
        </div>

        {/* Monogram System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Master Haute Couture Monogram */}
          <div className="bg-[#141414] border border-[#262626] rounded-sm p-8 flex flex-col items-center justify-between group hover:border-[#C8A97E]/50 transition-all duration-300">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
              Primary Couture Monogram
            </span>
            <div className="my-6 transform group-hover:scale-105 transition-transform duration-500">
              <NKMonogramMaster variant="champagne-gold" size={140} />
            </div>
            <div className="text-center space-y-1">
              <h4 className="font-serif-lux text-lg text-white">N.K Interlocking Ligature</h4>
              <p className="text-xs text-stone-500">High-contrast Roman serifs & woven textile relief</p>
            </div>
          </div>

          {/* Card 2: Linear Architectural Ribbon */}
          <div className="bg-[#141414] border border-[#262626] rounded-sm p-8 flex flex-col items-center justify-between group hover:border-[#C8A97E]/50 transition-all duration-300">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
              Architectural Ribbon
            </span>
            <div className="my-6 transform group-hover:scale-105 transition-transform duration-500">
              <NKMonogramLinear variant="champagne-gold" size={140} />
            </div>
            <div className="text-center space-y-1">
              <h4 className="font-serif-lux text-lg text-white">Modern Architectural Mark</h4>
              <p className="text-xs text-stone-500">Continuous path for metal hardware, buttons & micro-embroidery</p>
            </div>
          </div>

          {/* Card 3: Atelier Circular Seal */}
          <div className="bg-[#141414] border border-[#262626] rounded-sm p-8 flex flex-col items-center justify-between group hover:border-[#C8A97E]/50 transition-all duration-300">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
              Atelier Seal & Stamp
            </span>
            <div className="my-6 transform group-hover:scale-105 transition-transform duration-500">
              <NKCompactSeal variant="champagne-gold" size={150} />
            </div>
            <div className="text-center space-y-1">
              <h4 className="font-serif-lux text-lg text-white">Atelier Heritage Seal</h4>
              <p className="text-xs text-stone-500">Wax seals, garment certification & social presence</p>
            </div>
          </div>
        </div>

        {/* Colorway & Environment Matrix: Black on Light, Ivory on Dark, Gold on Charcoal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dark on Light (Paper & Packaging) */}
          <div className="bg-[#FAF8F5] text-[#0C0C0C] p-8 border border-stone-200 rounded-sm flex flex-col items-center justify-center space-y-4">
            <span className="text-[9px] tracking-[0.28em] uppercase text-stone-500 font-sans-clean">
              01 · Black on Ivory (Garment Tags & Bags)
            </span>
            <NKMonogramMaster variant="black" size={90} />
            <NKWordmark variant="black" size="sm" subtitle="N.K FABRICS ATELIER" />
          </div>

          {/* Ivory on Dark (Editorial & Digital) */}
          <div className="bg-[#0C0C0C] text-[#FAF8F5] p-8 border border-[#262626] rounded-sm flex flex-col items-center justify-center space-y-4">
            <span className="text-[9px] tracking-[0.28em] uppercase text-stone-400 font-sans-clean">
              02 · Ivory on Deep Obsidian (Header & Digital)
            </span>
            <NKMonogramMaster variant="white" size={90} />
            <NKWordmark variant="white" size="sm" subtitle="HAUTE COUTURE & TEXTILES" />
          </div>

          {/* Champagne Gold on Charcoal (Exclusive Suiting & Lining) */}
          <div className="bg-[#181818] text-[#FAF8F5] p-8 border border-[#2E2E2E] rounded-sm flex flex-col items-center justify-center space-y-4">
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#C8A97E] font-sans-clean">
              03 · Champagne Gold on Charcoal (Bespoke Lining)
            </span>
            <NKMonogramMaster variant="champagne-gold" size={90} />
            <NKWordmark variant="champagne-gold" size="sm" subtitle="PRIVATE SARTORIAL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MNLogoSystemShowcase = NKLogoSystemShowcase;
