import React, { useState } from 'react';
import { GarmentProduct } from '../data/fashionData.ts';
import { MNMonogramMaster } from './MNLogos.tsx';

interface ModalProps {
  product: GarmentProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>('40R');
  const [tailoringType, setTailoringType] = useState<'mtm' | 'rtw'>('mtm');
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  if (!product) return null;

  const SIZES = ['38R', '40R', '42R', '44R', '44L', '46L'];

  const handleBook = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      setOrderConfirmed(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#111111] border border-[#C8A97E]/40 shadow-2xl overflow-hidden my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white bg-black/50 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left Column: Visual Photography Showcase */}
          <div className="lg:col-span-6 relative bg-[#090909] min-h-[460px] lg:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Inset Damask Label Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-4">
              <MNMonogramMaster variant="champagne-gold" size={42} />
              <div className="text-xs font-sans-clean space-y-0.5">
                <div className="font-serif-lux text-sm text-[#FAF8F5]">{product.name}</div>
                <div className="text-[10px] text-[#C8A97E] tracking-wider uppercase">
                  Savile Row Full-Canvas Construction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tailoring Specs & Configuration */}
          <div className="lg:col-span-6 p-8 md:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
                  Haute Couture Atelier
                </span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl text-[#FAF8F5] mt-1">
                  {product.name}
                </h3>
                <div className="text-xl font-mono text-[#FAF8F5] mt-2 font-semibold">
                  {product.price}
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans-clean text-[#D8D4CC]/80 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Technical Tailoring Breakdown */}
              <div className="space-y-2 border-t border-b border-white/10 py-4 text-xs font-sans-clean text-white/70">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Fabric &amp; Mill:</span>
                  <span className="text-white/90 text-right font-medium">{product.fabric}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Silhouette &amp; Cut:</span>
                  <span className="text-white/90 text-right">{product.cut}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Lapel Architecture:</span>
                  <span className="text-white/90 text-right">{product.lapel}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Waistcoat:</span>
                  <span className="text-[#C8A97E] text-right font-medium">{product.waistcoat}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Shirt Pairing:</span>
                  <span className="text-white/80 text-right">{product.shirtPairing}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Trouser Tailoring:</span>
                  <span className="text-white/80 text-right">{product.trouserTailoring}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/40">Horn Buttons:</span>
                  <span className="text-white/80 text-right">{product.buttonDetails}</span>
                </div>
              </div>

              {/* Service Selection: Made to Measure vs Ready to Wear */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                  Tailoring Service
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs font-sans-clean">
                  <button
                    onClick={() => setTailoringType('mtm')}
                    className={`p-3 text-left border transition-all ${
                      tailoringType === 'mtm'
                        ? 'border-[#C8A97E] bg-[#C8A97E]/10 text-white'
                        : 'border-white/10 text-white/50 hover:border-white/30'
                    }`}
                  >
                    <div className="font-semibold text-white">Made-to-Measure</div>
                    <div className="text-[10px] text-[#C8A97E]">Bespoke Personal Fitting</div>
                  </button>

                  <button
                    onClick={() => setTailoringType('rtw')}
                    className={`p-3 text-left border transition-all ${
                      tailoringType === 'rtw'
                        ? 'border-[#C8A97E] bg-[#C8A97E]/10 text-white'
                        : 'border-white/10 text-white/50 hover:border-white/30'
                    }`}
                  >
                    <div className="font-semibold text-white">Ready-to-Wear</div>
                    <div className="text-[10px] text-white/40">Standard European Sizing</div>
                  </button>
                </div>
              </div>

              {/* Size selector if RTW */}
              {tailoringType === 'rtw' && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                    Select Jacket &amp; Trouser Size
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {SIZES.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`w-12 h-10 text-xs font-mono border transition-all ${
                          selectedSize === sz
                            ? 'bg-white text-black font-semibold border-white'
                            : 'border-white/15 text-white/70 hover:border-white/40'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              {orderConfirmed ? (
                <div className="p-4 bg-[#C8A97E] text-black text-center font-serif text-sm font-semibold tracking-wider">
                  ✓ Atelier Consultation Requested. Our Master Tailor will reach out within 24 hours.
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleBook}
                    className="w-full py-4 px-6 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center"
                  >
                    {tailoringType === 'mtm' ? 'Book Bespoke Fitting' : 'Acquire Ensemble'}
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto py-4 px-6 text-xs font-sans-clean uppercase tracking-[0.2em] border border-white/20 text-white hover:border-[#C8A97E] transition-colors text-center"
                  >
                    Close
                  </button>
                </div>
              )}
              <div className="text-[10px] font-mono text-center text-white/40 uppercase tracking-wider">
                Complimentary Worldwide Valet Delivery · Archival Garment Bag Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
