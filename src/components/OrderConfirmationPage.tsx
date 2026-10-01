import React from 'react';
import { OrderRecord } from './CheckoutPage.tsx';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';

interface OrderConfirmationPageProps {
  order: OrderRecord;
  onContinueShopping: () => void;
  onViewOrderReceipt?: () => void;
}

export const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({
  order,
  onContinueShopping,
}) => {
  const STATUS_STAGES = [
    {
      id: 'confirmed',
      title: 'Order Confirmed',
      desc: 'Commission received & verified by atelier',
      isCurrent: order.status === 'confirmed',
      isDone: true,
    },
    {
      id: 'preparing',
      title: 'Preparing',
      desc: 'Hand-inspection, pressing & archival packing',
      isCurrent: order.status === 'preparing',
      isDone: false,
    },
    {
      id: 'dispatched',
      title: 'Dispatched',
      desc: 'DHL Express Valet transit with live telemetry',
      isCurrent: order.status === 'dispatched',
      isDone: false,
    },
    {
      id: 'delivered',
      title: 'Delivered',
      desc: 'Hand-delivered with signature verification',
      isCurrent: order.status === 'delivered',
      isDone: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] font-sans-clean selection:bg-[#C8A97E] selection:text-black py-8 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        {/* REFINED N.K MONOGRAM ANIMATION / VISUAL HEADER */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="relative inline-block p-5 sm:p-7 border border-[#C8A97E]/40 bg-[#141414] shadow-2xl mx-auto animate-in fade-in duration-700">
            <div className="absolute -inset-1.5 border border-[#C8A97E]/15 pointer-events-none animate-pulse" />
            <MNCompactSeal variant="champagne-gold" size={76} />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C8A97E]">
              Atelier Commission Manifest
            </div>
            <h1 className="font-serif-lux text-3xl sm:text-5xl md:text-6xl text-[#FAF8F5] tracking-wide">
              ORDER CONFIRMED
            </h1>
            <p className="text-sm sm:text-base font-serif-lux italic text-[#D8D4CC]/85 max-w-lg mx-auto">
              Thank you for choosing N.K FABRICS.
            </p>
            <p className="text-xs font-sans-clean text-white/50 max-w-md mx-auto font-light leading-relaxed">
              Your garments have been commissioned into our Savile Row and Milan master cutting ateliers. An electronic parchment receipt has been dispatched to <strong className="text-white font-normal">{order.customer.email}</strong>.
            </p>
          </div>

          {/* Order Identity Bar */}
          <div className="flex flex-col sm:inline-flex sm:flex-row items-center justify-center gap-2 sm:gap-6 px-4 sm:px-6 py-3 bg-[#141414] border border-white/10 text-xs font-mono text-center sm:text-left">
            <div>
              <span className="text-white/40 uppercase mr-2">Commission No:</span>
              <strong className="text-[#C8A97E]">{order.orderNumber}</strong>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div>
              <span className="text-white/40 uppercase mr-2">Date:</span>
              <span className="text-white">{order.orderDate}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div>
              <span className="text-white/40 uppercase mr-2">Valet Transit:</span>
              <span className="text-emerald-400">DHL Express Active</span>
            </div>
          </div>
        </div>

        {/* 8. ORDER STATUS COMPONENT */}
        <section className="p-4 sm:p-8 bg-[#121212] border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="font-serif-lux text-lg sm:text-xl text-[#FAF8F5]">
              COMMISSION STATUS
            </h2>
            <span className="text-[11px] sm:text-xs font-mono text-[#C8A97E] uppercase">
              Current Stage: Order Confirmed
            </span>
          </div>

          {/* Stepper Progress Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
            {STATUS_STAGES.map((stage, idx) => (
              <div key={stage.id} className="relative space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                      stage.isDone
                        ? 'bg-[#C8A97E] text-black ring-4 ring-[#C8A97E]/20'
                        : 'bg-white/10 text-white/50 border border-white/10'
                    }`}
                  >
                    {stage.isDone ? '✓' : idx + 1}
                  </div>
                  <span
                    className={`text-xs font-sans-clean font-medium uppercase tracking-wider ${
                      stage.isDone ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {stage.title}
                  </span>
                </div>
                <p className="text-[11px] font-sans-clean text-white/50 font-light leading-relaxed pl-10">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ORDER DETAILS BREAKDOWN (ITEMS & DELIVERY) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* LEFT: ORDERED PRODUCTS MANIFEST (7 COLUMNS) */}
          <section className="md:col-span-7 bg-[#141414] border border-white/10 p-4 sm:p-8 space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h2 className="font-serif-lux text-xl text-[#FAF8F5]">
                ORDERED CREATIONS
              </h2>
              <span className="text-xs font-mono text-white/50">
                {order.items.reduce((sum, item) => sum + item.quantity, 0)} Items
              </span>
            </div>

            <div className="divide-y divide-white/10">
              {order.items.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center">
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-22 object-cover object-top border border-white/10 shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-[10px] font-mono text-[#C8A97E] uppercase block">
                      {item.product.collection}
                    </span>
                    <h3 className="font-serif-lux text-base text-[#FAF8F5] leading-snug truncate">
                      {item.product.name}
                    </h3>
                    <div className="text-xs text-white/60">
                      Quantity: <strong className="text-white font-medium">{item.quantity}</strong> · Size: {item.size}
                    </div>
                    <div className="text-[11px] text-white/40 truncate">
                      Color: {item.color}
                    </div>
                  </div>
                  <div className="font-mono text-sm text-[#FAF8F5] font-semibold text-right">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Summary */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-sans-clean text-white/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-white">${order.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>DHL Express Valet Shipping</span>
                <span className="font-mono text-[#C8A97E] uppercase">Complimentary ($0)</span>
              </div>
              <div className="flex justify-between">
                <span>Archival Rigid Box &amp; Cedar Hanger</span>
                <span className="font-mono text-[#C8A97E] uppercase">Included</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-[#C8A97E]">
                  <span>VIP Concierge Privilege</span>
                  <span className="font-mono">-${order.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="pt-3 border-t border-white/15 flex justify-between items-baseline text-sm">
                <span className="text-white font-medium uppercase tracking-wider">Total Paid</span>
                <span className="text-2xl font-mono text-[#FAF8F5] font-bold">
                  ${order.total.toLocaleString()}
                </span>
              </div>
            </div>
          </section>

          {/* RIGHT: DELIVERY & PAYMENT DOSSIER (5 COLUMNS) */}
          <section className="md:col-span-5 space-y-6">
            {/* Delivery Destination Card */}
            <div className="p-4 sm:p-8 bg-[#141414] border border-white/10 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                Fulfillment Target
              </div>
              <h2 className="font-serif-lux text-xl text-[#FAF8F5]">
                DELIVERY INFORMATION
              </h2>

              <div className="space-y-2 text-xs font-sans-clean text-white/80 pt-1 leading-relaxed">
                <div>
                  <strong className="text-white block font-medium">{order.customer.fullName}</strong>
                  <span className="text-white/60">{order.customer.email}</span> · <span className="text-white/60">{order.customer.phone}</span>
                </div>

                <div className="pt-2 text-white/70">
                  <p>{order.delivery.address}</p>
                  <p>{order.delivery.city}, {order.delivery.postalCode}</p>
                  <p className="text-[#C8A97E]">{order.delivery.country}</p>
                </div>

                {order.delivery.instructions && (
                  <div className="p-3 bg-black/50 border border-white/5 text-[11px] text-white/60 mt-3">
                    <strong className="text-white/80 block mb-0.5">Instructions:</strong>
                    {order.delivery.instructions}
                  </div>
                )}
              </div>
            </div>

            {/* Payment Verification Card */}
            <div className="p-4 sm:p-8 bg-[#141414] border border-white/10 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                Payment Dossier
              </div>
              <h2 className="font-serif-lux text-xl text-[#FAF8F5]">
                PAYMENT DETAILS
              </h2>

              <div className="text-xs font-sans-clean text-white/70 space-y-1.5 pt-1">
                <div className="flex justify-between">
                  <span>Method:</span>
                  <span className="text-white font-medium uppercase font-mono">
                    {order.paymentMethod === 'card'
                      ? 'Credit / Debit Card'
                      : order.paymentMethod === 'cod'
                      ? 'Atelier Valet Payment on Delivery'
                      : 'Private Concierge Wire Transfer'}
                  </span>
                </div>

                {order.paymentMethod === 'card' && (
                  <div className="flex justify-between">
                    <span>Card Account:</span>
                    <span className="font-mono text-[#C8A97E]">•••• •••• •••• {order.paymentDetails.cardLast4}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Authorization:</span>
                  <span className="font-mono text-emerald-400">Verified &amp; Cleared</span>
                </div>
              </div>
            </div>

            {/* Packaging Assurance Card */}
            <div className="p-6 bg-[#161616] border border-[#C8A97E]/30 space-y-2 text-xs font-sans-clean text-white/70">
              <div className="flex items-center gap-2 text-[#C8A97E] font-medium">
                <span>🎁</span>
                <span>The N.K FABRICS Packaging Ceremony</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Packaged in our signature 2.5mm grayboard rigid box, lined with acid-free tissue paper, sealed with champagne-gold wax, and certified by the master tailor.
              </p>
            </div>
          </section>
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto py-3.5 px-6 border border-white/20 text-xs font-sans-clean uppercase tracking-wider text-white hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors text-center"
          >
            Print Commission Receipt
          </button>

          <button
            onClick={onContinueShopping}
            className="w-full sm:w-auto py-3.5 px-10 text-xs font-sans-clean uppercase tracking-[0.25em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors text-center shadow-xl"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};
