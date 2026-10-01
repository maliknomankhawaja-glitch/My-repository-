import React, { useState } from 'react';
import { MNMonogramMaster, MNWordmark, MNCompactSeal } from './MNLogos.tsx';

const PRESET_SIZES = [
  { size: 16, label: '16px', context: 'Browser Favicon / Tab' },
  { size: 24, label: '24px', context: 'Watch Crown & Lapel Pin' },
  { size: 36, label: '36px', context: 'Suit Horn Button' },
  { size: 64, label: '64px', context: 'Shirt Cuff Embroidery' },
  { size: 128, label: '128px', context: 'Suit Interior Label' },
  { size: 256, label: '256px', context: 'Rigid Gift Box Lid' },
  { size: 400, label: '400px', context: 'Flagship Bronze Facade' },
];

export const ScalabilityTest: React.FC = () => {
  const [currentSize, setCurrentSize] = useState<number>(128);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showClearSpace, setShowClearSpace] = useState<boolean>(true);
  const [currentVariant, setCurrentVariant] = useState<'champagne-gold' | 'black' | 'white'>('champagne-gold');
  const [bgSurface, setBgSurface] = useState<'dark' | 'light' | 'beige'>('dark');

  const bgClasses = {
    dark: 'bg-[#0E0E0E] text-white',
    light: 'bg-[#FAF8F5] text-[#0C0C0C]',
    beige: 'bg-[#E6DFD5] text-[#1A1A1A]',
  }[bgSurface];

  return (
    <div className="space-y-8">
      {/* Control bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#141414] border border-white/10 text-xs font-sans-clean">
        {/* Preset size buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-white/40 uppercase tracking-wider mr-2">Scale:</span>
          {PRESET_SIZES.map((preset) => (
            <button
              key={preset.size}
              onClick={() => setCurrentSize(preset.size)}
              className={`px-2.5 py-1 text-xs font-mono transition-all ${
                currentSize === preset.size
                  ? 'bg-[#C8A97E] text-black font-semibold'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Sliders and Toggles */}
        <div className="flex items-center gap-4 flex-wrap">
          <label className="flex items-center gap-2 cursor-pointer text-white/70 hover:text-white">
            <input
              type="checkbox"
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
              className="accent-[#C8A97E]"
            />
            <span>Construction Grid</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-white/70 hover:text-white">
            <input
              type="checkbox"
              checked={showClearSpace}
              onChange={(e) => setShowClearSpace(e.target.checked)}
              className="accent-[#C8A97E]"
            />
            <span>Exclusion Zone (1X)</span>
          </label>

          {/* Color variant */}
          <div className="flex items-center gap-1 border-l border-white/10 pl-3">
            <button
              onClick={() => {
                setCurrentVariant('champagne-gold');
                setBgSurface('dark');
              }}
              className={`w-5 h-5 rounded-full bg-[#C8A97E] border ${
                currentVariant === 'champagne-gold' ? 'ring-2 ring-white scale-110' : 'opacity-60'
              }`}
              title="Champagne Gold"
            />
            <button
              onClick={() => {
                setCurrentVariant('black');
                setBgSurface('light');
              }}
              className={`w-5 h-5 rounded-full bg-black border ${
                currentVariant === 'black' ? 'ring-2 ring-white scale-110' : 'opacity-60'
              }`}
              title="Black on Light"
            />
            <button
              onClick={() => {
                setCurrentVariant('white');
                setBgSurface('dark');
              }}
              className={`w-5 h-5 rounded-full bg-white border ${
                currentVariant === 'white' ? 'ring-2 ring-white scale-110' : 'opacity-60'
              }`}
              title="White on Dark"
            />
          </div>
        </div>
      </div>

      {/* Main Inspection Canvas */}
      <div
        className={`relative min-h-[460px] flex flex-col items-center justify-center p-8 transition-colors duration-500 border border-white/10 overflow-hidden ${bgClasses}`}
      >
        {/* Architectural Construction Grid overlay */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
            {/* Crosshair & Golden Ratio Lines */}
            <div className="w-full h-[1px] bg-[#C8A97E] absolute top-1/2 left-0" />
            <div className="h-full w-[1px] bg-[#C8A97E] absolute top-0 left-1/2" />
            <div className="w-[320px] h-[320px] rounded-full border border-dashed border-[#C8A97E]" />
            <div className="w-[200px] h-[200px] border border-[#C8A97E]/60" />
          </div>
        )}

        {/* Scaled Logo Target */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Exclusion Zone Bounding Box */}
          <div
            className={`transition-all duration-300 flex items-center justify-center ${
              showClearSpace ? 'p-6 border border-dashed border-[#C8A97E]/50 bg-[#C8A97E]/5 relative' : ''
            }`}
          >
            {showClearSpace && (
              <span className="absolute -top-3 left-2 px-1 text-[9px] font-mono uppercase bg-[#C8A97E] text-black">
                Clear Space: 1X (X = Stroke Width)
              </span>
            )}

            <MNMonogramMaster
              size={currentSize}
              variant={currentVariant}
              className="drop-shadow-sm transition-all"
            />
          </div>

          {/* Size descriptor */}
          <div className="mt-6 text-center space-y-1">
            <div className="font-mono text-xs opacity-75">
              Current Rendering: <strong className="font-semibold">{currentSize} × {currentSize} px</strong>
            </div>
            <div className="text-[11px] font-sans-clean opacity-60">
              {PRESET_SIZES.find((p) => p.size === currentSize)?.context || 'Custom Zoom Dimension'}
            </div>
          </div>
        </div>

        {/* Dynamic size slider at bottom */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10 max-w-md mx-auto">
          <span className="text-[10px] font-mono text-white/60">16px</span>
          <input
            type="range"
            min="16"
            max="460"
            step="4"
            value={currentSize}
            onChange={(e) => setCurrentSize(Number(e.target.value))}
            className="w-full accent-[#C8A97E] cursor-ew-resize"
          />
          <span className="text-[10px] font-mono text-white/60">460px</span>
        </div>
      </div>

      {/* Side-by-side Comparative Scale Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {PRESET_SIZES.map((preset) => (
          <div
            key={preset.size}
            onClick={() => setCurrentSize(preset.size)}
            className={`p-4 border transition-all cursor-pointer flex flex-col items-center justify-between text-center min-h-[160px] ${
              currentSize === preset.size
                ? 'border-[#C8A97E] bg-[#C8A97E]/10'
                : 'border-white/10 bg-[#121212] hover:border-white/30'
            }`}
          >
            <div className="flex-1 flex items-center justify-center w-full">
              <MNMonogramMaster
                size={Math.min(preset.size, 72)}
                variant="champagne-gold"
                showPeriod={preset.size > 20}
              />
            </div>
            <div className="mt-3 border-t border-white/5 pt-2 w-full">
              <div className="font-mono text-xs text-[#FAF8F5]">{preset.label}</div>
              <div className="text-[9px] font-sans-clean text-white/50 truncate mt-0.5">{preset.context}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
