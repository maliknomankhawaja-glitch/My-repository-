import React, { useState } from 'react';
import { OrderRecord } from './CheckoutPage.tsx';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  recentOrder: OrderRecord | null;
  wishlistCount: number;
  cartCount: number;
  onViewWishlist: () => void;
  onViewCart: () => void;
  onExploreShop: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  recentOrder,
  wishlistCount,
  cartCount,
  onViewWishlist,
  onViewCart,
  onExploreShop,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'measurements'>('profile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-label="Close Account" />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <MNMonogramMaster variant="champagne-gold" size={26} />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                N.K FABRICS
              </div>
              <h3 className="font-serif-lux text-xl sm:text-2xl text-[#FAF8F5]">
                CLIENT CONCIERGE &amp; ACCOUNT
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 mt-6 text-xs font-sans-clean uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-[#C8A97E] text-[#C8A97E] font-medium'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Client Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'orders'
                ? 'border-[#C8A97E] text-[#C8A97E] font-medium'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <span>Orders &amp; Commissions</span>
            {recentOrder && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('measurements')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === 'measurements'
                ? 'border-[#C8A97E] text-[#C8A97E] font-medium'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Bespoke Profile
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-[#141414] border border-white/10">
                <div className="w-14 h-14 rounded-full bg-[#181818] border border-[#C8A97E]/30 flex items-center justify-center text-xl font-serif-lux text-[#FAF8F5]">
                  LS
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-serif-lux text-[#FAF8F5]">
                    Lord Sterling
                  </div>
                  <div className="text-xs font-sans-clean text-white/60">
                    sterling@mayfair-couture.co.uk
                  </div>
                  <div className="text-[10px] font-mono text-[#C8A97E] uppercase">
                    Tier: Atelier Valet VIP Member
                  </div>
                </div>
              </div>

              {/* Quick links to bag and wishlist */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onViewWishlist();
                  }}
                  className="p-4 bg-[#141414] border border-white/10 hover:border-[#C8A97E] text-left transition-colors"
                >
                  <div className="text-[10px] font-mono text-white/40 uppercase">
                    Saved Creations
                  </div>
                  <div className="font-serif-lux text-lg text-[#FAF8F5] mt-1">
                    Wishlist ({wishlistCount})
                  </div>
                  <div className="text-[11px] text-[#C8A97E] mt-2">
                    Review Saved →
                  </div>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onViewCart();
                  }}
                  className="p-4 bg-[#141414] border border-white/10 hover:border-[#C8A97E] text-left transition-colors"
                >
                  <div className="text-[10px] font-mono text-white/40 uppercase">
                    Active Bag
                  </div>
                  <div className="font-serif-lux text-lg text-[#FAF8F5] mt-1">
                    Shopping Bag ({cartCount})
                  </div>
                  <div className="text-[11px] text-[#C8A97E] mt-2">
                    View Shopping Bag →
                  </div>
                </button>
              </div>

              {/* Concierge Support card */}
              <div className="p-4 bg-black/40 border border-white/10 space-y-1.5 text-xs text-white/70">
                <div className="font-serif-lux text-sm text-white">
                  Personal Valet Concierge
                </div>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  For bespoke tailoring adjustments, private showroom appointments in London, Milan, Lahore, or worldwide home fittings:
                </p>
                <div className="font-mono text-[11px] text-[#C8A97E] pt-1">
                  concierge@nkfabrics.com · +44 20 7946 0912
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4">
              {recentOrder ? (
                <div className="p-5 bg-[#141414] border border-white/10 space-y-4">
                  <div className="flex justify-between items-start border-b border-white/10 pb-3">
                    <div>
                      <div className="text-[10px] font-mono text-white/40 uppercase">
                        Commission Reference
                      </div>
                      <div className="font-mono text-sm text-[#C8A97E] font-bold">
                        {recentOrder.orderNumber}
                      </div>
                      <div className="text-[11px] text-white/50">{recentOrder.orderDate}</div>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                      Confirmed &amp; Active
                    </span>
                  </div>

                  <div className="space-y-2">
                    {recentOrder.items.map((it) => (
                      <div key={it.id} className="flex gap-3 items-center text-xs">
                        <img
                          src={it.product.primaryImage}
                          alt={it.product.name}
                          className="w-10 h-14 object-cover border border-white/10"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-serif-lux truncate">
                            {it.product.name}
                          </div>
                          <div className="text-[10px] text-white/50">
                            Size: {it.size} · Qty: {it.quantity}
                          </div>
                        </div>
                        <div className="font-mono text-xs text-white">
                          ${(it.product.price * it.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                    <span className="text-white/60">Total Amount</span>
                    <span className="font-mono text-base font-bold text-white">
                      ${recentOrder.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center space-y-3">
                  <MNCompactSeal variant="champagne-gold" size={48} />
                  <div className="font-serif-lux text-base text-white/80">
                    No active commissions placed yet
                  </div>
                  <p className="text-xs text-white/50 max-w-xs mx-auto">
                    Your orders and bespoke commissions will appear here once finalized.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onExploreShop();
                    }}
                    className="py-2 px-5 text-xs font-sans-clean uppercase tracking-wider bg-white text-black hover:bg-[#C8A97E] transition-colors mt-2"
                  >
                    Explore Creations
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'measurements' && (
            <div className="space-y-4">
              <div className="text-xs text-white/60">
                Your archival bespoke measurements on file at Savile Row:
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-[#141414] border border-white/10">
                  <div className="text-[10px] font-mono text-white/40 uppercase">Suit Size</div>
                  <div className="font-mono text-sm text-white font-bold mt-0.5">40R</div>
                </div>
                <div className="p-3 bg-[#141414] border border-white/10">
                  <div className="text-[10px] font-mono text-white/40 uppercase">Chest Circumference</div>
                  <div className="font-mono text-sm text-white font-bold mt-0.5">40.5 in</div>
                </div>
                <div className="p-3 bg-[#141414] border border-white/10">
                  <div className="text-[10px] font-mono text-white/40 uppercase">Trouser Waist</div>
                  <div className="font-mono text-sm text-white font-bold mt-0.5">34 in (High-Rise)</div>
                </div>
                <div className="p-3 bg-[#141414] border border-white/10">
                  <div className="text-[10px] font-mono text-white/40 uppercase">Sleeve Outseam</div>
                  <div className="font-mono text-sm text-white font-bold mt-0.5">25.5 in</div>
                </div>
                <div className="p-3 bg-[#141414] border border-white/10">
                  <div className="text-[10px] font-mono text-white/40 uppercase">Trouser Inseam</div>
                  <div className="font-mono text-sm text-white font-bold mt-0.5">32.0 in</div>
                </div>
                <div className="p-3 bg-[#141414] border border-white/10">
                  <div className="text-[10px] font-mono text-white/40 uppercase">Shoulder Breadth</div>
                  <div className="font-mono text-sm text-white font-bold mt-0.5">18.2 in</div>
                </div>
              </div>

              <p className="text-[11px] text-white/40 italic pt-2">
                Need to update your measurements before commission cut? Contact our master tailor concierge.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
