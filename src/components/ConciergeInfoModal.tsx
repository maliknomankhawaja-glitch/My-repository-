import React, { useState } from 'react';
import { MNMonogramMaster } from './MNLogos.tsx';

interface ConciergeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: 'shipping' | 'returns' | 'contact' | 'faqs';
}

export const ConciergeInfoModal: React.FC<ConciergeInfoModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'shipping',
}) => {
  const [topic, setTopic] = useState<'shipping' | 'returns' | 'contact' | 'faqs'>(initialTopic);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} aria-label="Close Concierge" />

      <div className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto text-[#F4F1EA]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <MNMonogramMaster variant="champagne-gold" size={26} />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                Maison M.N
              </div>
              <h3 className="font-serif-lux text-xl sm:text-2xl text-[#FAF8F5]">
                CLIENT CONCIERGE &amp; SERVICES
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Topic navigation */}
        <div className="flex border-b border-white/10 mt-6 text-xs font-sans-clean uppercase tracking-wider">
          <button
            onClick={() => setTopic('shipping')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              topic === 'shipping'
                ? 'border-[#C8A97E] text-[#C8A97E] font-medium'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Shipping
          </button>
          <button
            onClick={() => setTopic('returns')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              topic === 'returns'
                ? 'border-[#C8A97E] text-[#C8A97E] font-medium'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Returns
          </button>
          <button
            onClick={() => setTopic('contact')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              topic === 'contact'
                ? 'border-[#C8A97E] text-[#C8A97E] font-medium'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setTopic('faqs')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              topic === 'faqs'
                ? 'border-[#C8A97E] text-[#C8A97E] font-medium'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            FAQs
          </button>
        </div>

        {/* Content */}
        <div className="py-6 text-xs font-sans-clean text-[#D8D4CC]/80 space-y-4 leading-relaxed font-light">
          {topic === 'shipping' && (
            <div className="space-y-4">
              <h4 className="font-serif-lux text-base text-white">
                Complimentary Worldwide Insured Delivery
              </h4>
              <p>
                Every commission placed with Maison M.N is delivered via complimentary DHL Express Valet Courier with real-time end-to-end GPS telemetry and signature-required handoff.
              </p>
              <div className="p-4 bg-[#141414] border border-white/10 space-y-2">
                <div className="font-mono text-[11px] text-[#C8A97E] uppercase">Delivery Horizons:</div>
                <p>• United Kingdom &amp; Europe: 2–3 business days</p>
                <p>• United States &amp; Canada: 3–4 business days</p>
                <p>• UAE &amp; Middle East: 2–3 business days</p>
                <p>• Pakistan &amp; South Asia: 2–4 business days</p>
              </div>
              <p>
                All garments arrive encased in our signature 2.5mm rigid presentation box, lined with acid-free tissue paper, sealed with champagne-gold wax, and hung on natural cedarwood hangers.
              </p>
            </div>
          )}

          {topic === 'returns' && (
            <div className="space-y-4">
              <h4 className="font-serif-lux text-base text-white">
                14-Day Private Collection &amp; Returns
              </h4>
              <p>
                We offer a 14-day private concierge returns window for unworn ready-to-wear creations in their original condition with all hallmarks and archival tags attached.
              </p>
              <p>
                Our courier will collect the package directly from your residence or office at no charge to you.
              </p>
              <div className="p-4 bg-[#141414] border border-white/10 space-y-2">
                <div className="font-mono text-[11px] text-[#C8A97E] uppercase">Alterations Guarantee:</div>
                <p>
                  To ensure an immaculate bespoke break, M.N provides a complimentary alteration credit of up to $150 at your local master tailor of choice.
                </p>
              </div>
            </div>
          )}

          {topic === 'contact' && (
            <div className="space-y-4">
              <h4 className="font-serif-lux text-base text-white">
                Maison M.N Private Concierge
              </h4>
              <p>
                Our sartorial advisors are available to assist with sizing consultations, made-to-measure appointments, and wedding commissions.
              </p>
              <div className="space-y-2 p-4 bg-[#141414] border border-white/10 font-mono text-[11px]">
                <div className="text-white">Email: <span className="text-[#C8A97E]">concierge@maison-mn.com</span></div>
                <div className="text-white">London Atelier: <span className="text-[#C8A97E]">+44 20 7946 0912</span></div>
                <div className="text-white">Lahore Atelier: <span className="text-[#C8A97E]">+92 42 3578 9200</span></div>
                <div className="text-white">Hours: <span className="text-white/60">Monday – Saturday, 9:00 AM – 8:00 PM GMT</span></div>
              </div>
            </div>
          )}

          {topic === 'faqs' && (
            <div className="space-y-4">
              <h4 className="font-serif-lux text-base text-white">
                Frequently Addressed Inquiries
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-[#141414] border border-white/10 space-y-1">
                  <div className="text-white font-medium">Do you offer separate suit jacket purchases?</div>
                  <div className="text-white/60">
                    M.N suits are architectural creations sold strictly as coordinated ensembles (two-piece or three-piece with matching trousers). We never produce or sell blazers.
                  </div>
                </div>
                <div className="p-3 bg-[#141414] border border-white/10 space-y-1">
                  <div className="text-white font-medium">How do I verify my sizing?</div>
                  <div className="text-white/60">
                    Use our interactive Size Guide or consult our Bespoke Tailoring chart on file with our concierge.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
