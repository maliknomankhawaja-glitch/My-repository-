import React, { useState } from 'react';
import { CartItem } from './CartDrawer.tsx';
import { MNMonogramMaster, MNCompactSeal } from './MNLogos.tsx';

export interface OrderRecord {
  orderNumber: string;
  orderDate: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
  delivery: {
    country: string;
    city: string;
    address: string;
    postalCode: string;
    instructions?: string;
  };
  paymentMethod: 'card' | 'cod' | 'wire';
  paymentDetails: {
    cardLast4?: string;
    brand?: string;
  };
  status: 'confirmed' | 'preparing' | 'dispatched' | 'delivered';
}

interface CheckoutPageProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  onReturnToBag: () => void;
  onContinueShopping: () => void;
  onOrderSuccess: (order: OrderRecord) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  subtotal,
  discount,
  total,
  onReturnToBag,
  onContinueShopping,
  onOrderSuccess,
}) => {
  // Form State: Customer Info
  const [fullName, setFullName] = useState<string>('Lord Sterling');
  const [email, setEmail] = useState<string>('sterling@mayfair-couture.co.uk');
  const [phone, setPhone] = useState<string>('+44 20 7946 0912');

  // Form State: Delivery Info
  const [country, setCountry] = useState<string>('United Kingdom');
  const [city, setCity] = useState<string>('London');
  const [address, setAddress] = useState<string>('14 Savile Row, Mayfair');
  const [postalCode, setPostalCode] = useState<string>('W1S 3JN');
  const [instructions, setInstructions] = useState<string>('Please deliver to private reception.');

  // Form State: Payment
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod' | 'wire'>('card');
  const [cardNumber, setCardNumber] = useState<string>('4242 •••• •••• 9821');
  const [cardName, setCardName] = useState<string>('LORD STERLING');
  const [cardExpiry, setCardExpiry] = useState<string>('11/28');
  const [cardCvv, setCardCvv] = useState<string>('832');

  // UI / Validation State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  // Available countries with concierge delivery
  const COUNTRIES = [
    'United Kingdom',
    'United States',
    'United Arab Emirates',
    'Pakistan',
    'Italy',
    'France',
    'Switzerland',
    'Saudi Arabia',
    'Canada',
    'Qatar',
  ];

  const validateForm = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!phone.trim()) errs.phone = 'Contact telephone is required.';
    if (!city.trim()) errs.city = 'City is required.';
    if (!address.trim()) errs.address = 'Street address is required.';
    if (!postalCode.trim()) errs.postalCode = 'Postal code is required.';

    if (paymentMethod === 'card') {
      const cleanNum = cardNumber.replace(/\D/g, '');
      if (cleanNum.length < 12 && !cardNumber.includes('••••')) {
        errs.cardNumber = 'Valid card number is required.';
      }
      if (!cardName.trim()) errs.cardName = 'Name on card is required.';
      if (!cardExpiry.trim()) errs.cardExpiry = 'Expiry date (MM/YY) is required.';
      if (!cardCvv.trim() || cardCvv.trim().length < 3) errs.cardCvv = 'Security CVV code is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (items.length === 0) {
      setGeneralError('Your shopping bag is currently empty. Please add garments before checking out.');
      return;
    }

    if (!validateForm()) {
      setGeneralError('Please review and complete all required highlighted fields.');
      return;
    }

    setIsProcessing(true);

    // Simulate authentic luxury verification delay
    setTimeout(() => {
      setIsProcessing(false);

      const generatedOrderNumber = `NK-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date();
      const dateFormatted = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

      const newOrder: OrderRecord = {
        orderNumber: generatedOrderNumber,
        orderDate: dateFormatted,
        items,
        subtotal,
        discount,
        total,
        customer: {
          fullName,
          email,
          phone,
        },
        delivery: {
          country,
          city,
          address,
          postalCode,
          instructions: instructions.trim() || undefined,
        },
        paymentMethod,
        paymentDetails: {
          cardLast4: paymentMethod === 'card' ? cardNumber.slice(-4) || '9821' : undefined,
          brand: paymentMethod === 'card' ? 'Visa VIP Signature' : undefined,
        },
        status: 'confirmed',
      };

      onOrderSuccess(newOrder);
    }, 1200);
  };

  // If cart is completely empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] flex flex-col justify-center items-center px-6 py-20">
        <div className="max-w-md w-full text-center space-y-6 bg-[#141414] border border-white/10 p-10 shadow-2xl">
          <MNCompactSeal variant="champagne-gold" size={72} />
          <h2 className="font-serif-lux text-3xl text-[#FAF8F5]">CHECKOUT UNAVAILABLE</h2>
          <p className="text-xs font-sans-clean text-white/60 leading-relaxed font-light">
            Your shopping bag contains no active commissions. Please select a bespoke garment from the collection before initiating checkout.
          </p>
          <button
            onClick={onContinueShopping}
            className="w-full py-3.5 text-xs font-sans-clean uppercase tracking-[0.2em] bg-[#FAF8F5] text-black font-semibold hover:bg-[#C8A97E] transition-colors"
          >
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] font-sans-clean selection:bg-[#C8A97E] selection:text-black">
      {/* DISTRACTION-FREE LUXURY HEADER */}
      <header className="border-b border-white/10 bg-[#0E0E0E] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Brand Emblem */}
          <div className="flex items-center gap-3">
            <button
              onClick={onContinueShopping}
              className="font-serif-lux text-2xl tracking-[0.2em] text-[#FAF8F5] hover:text-[#C8A97E] transition-colors"
            >
              N.K FABRICS
            </button>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C8A97E]/80 border-l border-white/15 pl-3">
              Valet Concierge Checkout
            </span>
          </div>

          {/* Secure Transmission Assurance */}
          <div className="flex items-center gap-4 text-xs font-sans-clean">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/50 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>TLS 256-Bit Encrypted Protocol</span>
            </span>
            <button
              onClick={onReturnToBag}
              className="text-xs uppercase tracking-wider text-[#C8A97E] hover:underline flex items-center gap-1"
            >
              <span>←</span>
              <span>Return to Bag</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CHECKOUT WORKSPACE */}
      <main className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Title Lockup */}
        <div className="border-b border-white/10 pb-6 mb-10">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8A97E]">
            Maison Atelier Checkout
          </div>
          <h1 className="font-serif-lux text-3xl sm:text-5xl text-[#FAF8F5] tracking-wide mt-1">
            CHECKOUT
          </h1>
        </div>

        {/* Global Error Notice */}
        {generalError && (
          <div className="mb-8 p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-sans-clean flex items-center gap-3">
            <span className="text-red-400 font-bold">⚠</span>
            <span>{generalError}</span>
          </div>
        )}

        <form onSubmit={handlePlaceOrder} noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: CUSTOMER, DELIVERY & PAYMENT FORMS (7 COLUMNS) */}
            <div className="lg:col-span-7 space-y-12">
              {/* SECTION 1: CUSTOMER INFORMATION */}
              <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#C8A97E] text-black text-[10px] font-mono font-bold flex items-center justify-center">
                      1
                    </span>
                    <h2 className="font-serif-lux text-xl text-[#FAF8F5] tracking-wide">
                      Customer Information
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase">Required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Julian Montgomery-Sterling"
                      className={`w-full bg-[#121212] border px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#C8A97E]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-400 font-mono block">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className={`w-full bg-[#121212] border px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#C8A97E]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 font-mono block">{errors.email}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      Telephone / Mobile *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 20 7946 0912"
                      className={`w-full bg-[#121212] border px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#C8A97E]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-400 font-mono block">{errors.phone}</span>
                    )}
                  </div>
                </div>
              </section>

              {/* SECTION 2: DELIVERY INFORMATION */}
              <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#C8A97E] text-black text-[10px] font-mono font-bold flex items-center justify-center">
                      2
                    </span>
                    <h2 className="font-serif-lux text-xl text-[#FAF8F5] tracking-wide">
                      Delivery Address &amp; Courier Details
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono text-[#C8A97E] uppercase">
                    DHL Express Valet
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      Country / Territory *
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-[#121212] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8A97E] transition-colors"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c} className="bg-[#121212] text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      Address / Street &amp; Building *
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 14 Savile Row, Penthouse Suite"
                      className={`w-full bg-[#121212] border px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.address ? 'border-red-500' : 'border-white/15 focus:border-[#C8A97E]'
                      }`}
                    />
                    {errors.address && (
                      <span className="text-[10px] text-red-400 font-mono block">{errors.address}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      City *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. London"
                      className={`w-full bg-[#121212] border px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.city ? 'border-red-500' : 'border-white/15 focus:border-[#C8A97E]'
                      }`}
                    />
                    {errors.city && (
                      <span className="text-[10px] text-red-400 font-mono block">{errors.city}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      Postal Code / ZIP *
                    </label>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="e.g. W1S 3JN"
                      className={`w-full bg-[#121212] border px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        errors.postalCode ? 'border-red-500' : 'border-white/15 focus:border-[#C8A97E]'
                      }`}
                    />
                    {errors.postalCode && (
                      <span className="text-[10px] text-red-400 font-mono block">{errors.postalCode}</span>
                    )}
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-[11px] font-sans-clean uppercase tracking-wider text-white/70">
                      Optional Delivery Instructions
                    </label>
                    <input
                      type="text"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      placeholder="e.g. Ring private concierge bell or leave with building reception"
                      className="w-full bg-[#121212] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#C8A97E]"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#141414] border border-white/5 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C8A97E]">✓</span>
                    <span>Complimentary Insured Worldwide Shipping</span>
                  </div>
                  <span className="font-mono text-[#C8A97E] uppercase text-[11px]">Free ($0)</span>
                </div>
              </section>

              {/* SECTION 3: PAYMENT METHOD */}
              <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#C8A97E] text-black text-[10px] font-mono font-bold flex items-center justify-center">
                      3
                    </span>
                    <h2 className="font-serif-lux text-xl text-[#FAF8F5] tracking-wide">
                      Payment Section
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase">Verified Gateway</span>
                </div>

                {/* Clearly Separated Payment Options */}
                <div className="space-y-3">
                  {/* Option 1: Card Payment */}
                  <label
                    className={`block p-4 border cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#C8A97E] bg-[#161616]'
                        : 'border-white/15 bg-[#101010] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentOption"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="accent-[#C8A97E]"
                        />
                        <div>
                          <span className="text-xs font-sans-clean font-medium text-white block">
                            Credit / Debit Card
                          </span>
                          <span className="text-[10px] text-white/50">
                            Visa, Mastercard, American Express, UnionPay
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/60 font-mono">
                        <span>VISA</span>
                        <span>·</span>
                        <span>MC</span>
                        <span>·</span>
                        <span>AMEX</span>
                      </div>
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="mt-5 pt-4 border-t border-white/10 space-y-4">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono uppercase text-white/60">
                            Card Number
                          </label>
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="4242 •••• •••• 9821"
                            className={`w-full bg-[#0A0A0A] border px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none ${
                              errors.cardNumber ? 'border-red-500' : 'border-white/20 focus:border-[#C8A97E]'
                            }`}
                          />
                          {errors.cardNumber && (
                            <span className="text-[10px] text-red-400 font-mono">{errors.cardNumber}</span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="block text-[10px] font-mono uppercase text-white/60">
                              Name on Card
                            </label>
                            <input
                              type="text"
                              value={cardName}
                              onChange={(e) => setCardName(e.target.value)}
                              placeholder="LORD STERLING"
                              className="w-full bg-[#0A0A0A] border border-white/20 px-3.5 py-2.5 text-xs font-mono uppercase text-white focus:outline-none focus:border-[#C8A97E]"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <label className="block text-[10px] font-mono uppercase text-white/60">
                                Expiry
                              </label>
                              <input
                                type="text"
                                value={cardExpiry}
                                onChange={(e) => setCardExpiry(e.target.value)}
                                placeholder="MM/YY"
                                className="w-full bg-[#0A0A0A] border border-white/20 px-3 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C8A97E]"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="block text-[10px] font-mono uppercase text-white/60">
                                CVV
                              </label>
                              <input
                                type="password"
                                maxLength={4}
                                value={cardCvv}
                                onChange={(e) => setCardCvv(e.target.value)}
                                placeholder="•••"
                                className="w-full bg-[#0A0A0A] border border-white/20 px-3 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C8A97E]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </label>

                  {/* Option 2: Cash on Delivery / Atelier Valet */}
                  <label
                    className={`block p-4 border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#C8A97E] bg-[#161616]'
                        : 'border-white/15 bg-[#101010] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentOption"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="accent-[#C8A97E]"
                        />
                        <div>
                          <span className="text-xs font-sans-clean font-medium text-white block">
                            Atelier Valet Payment on Delivery (Cash on Delivery)
                          </span>
                          <span className="text-[10px] text-white/50">
                            Inspect your bespoke garments with the courier before completing payment
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#C8A97E] uppercase border border-[#C8A97E]/30 px-2 py-0.5">
                        Concierge
                      </span>
                    </div>
                  </label>

                  {/* Option 3: Private Bank Wire Transfer */}
                  <label
                    className={`block p-4 border cursor-pointer transition-all ${
                      paymentMethod === 'wire'
                        ? 'border-[#C8A97E] bg-[#161616]'
                        : 'border-white/15 bg-[#101010] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentOption"
                          checked={paymentMethod === 'wire'}
                          onChange={() => setPaymentMethod('wire')}
                          className="accent-[#C8A97E]"
                        />
                        <div>
                          <span className="text-xs font-sans-clean font-medium text-white block">
                            Private Concierge Wire Transfer / Atelier Invoice
                          </span>
                          <span className="text-[10px] text-white/50">
                            Swift and IBAN account coordinates will be dispatched with your bespoke invoice
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-white/50 uppercase">
                        B2B / VIP
                      </span>
                    </div>
                  </label>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: 5. ORDER SUMMARY & 6. PLACE ORDER BUTTON (5 COLUMNS) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="p-8 bg-[#141414] border border-white/15 shadow-2xl space-y-6">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A97E]">
                      Wardrobe Manifest
                    </div>
                    <h3 className="font-serif-lux text-2xl text-[#FAF8F5]">
                      ORDER SUMMARY
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-white/50">
                    {items.reduce((s, i) => s + i.quantity, 0)} Items
                  </span>
                </div>

                {/* Ordered Items Manifest */}
                <div className="max-h-72 overflow-y-auto space-y-3.5 pr-1 divide-y divide-white/5">
                  {items.map((item) => (
                    <div key={item.id} className="pt-3 first:pt-0 flex gap-3.5 items-center">
                      <img
                        src={item.product.primaryImage}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-18 object-cover object-top border border-white/10 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif-lux text-xs text-[#FAF8F5] leading-snug truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-[11px] font-sans-clean text-white/60">
                          Qty: <strong className="text-white">{item.quantity}</strong> · Size: {item.size}
                        </div>
                        <div className="text-[10px] text-white/40 truncate">
                          Color: {item.color}
                        </div>
                      </div>
                      <div className="font-mono text-xs text-[#FAF8F5] text-right font-medium">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal, Shipping, Total */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-sans-clean">
                  <div className="flex justify-between items-center text-white/70">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">${subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-white/70">
                    <span>Insured Courier Shipping</span>
                    <span className="font-mono text-[#C8A97E] uppercase">Complimentary ($0)</span>
                  </div>

                  <div className="flex justify-between items-center text-white/70">
                    <span>Archival Packaging Suite</span>
                    <span className="font-mono text-[#C8A97E] uppercase">Included</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-center text-[#C8A97E]">
                      <span>VIP Concierge Privilege</span>
                      <span className="font-mono">-${discount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/15 flex justify-between items-baseline">
                    <span className="text-sm uppercase tracking-wider text-white font-medium">
                      Final Total
                    </span>
                    <span className="text-3xl font-mono text-[#FAF8F5] font-bold">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* PRIMARY ACTION: PLACE ORDER */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-4 px-6 text-xs font-sans-clean uppercase tracking-[0.25em] font-semibold text-center transition-all shadow-2xl block ${
                    isProcessing
                      ? 'bg-[#C8A97E]/50 text-black cursor-wait'
                      : 'bg-[#FAF8F5] text-black hover:bg-[#C8A97E]'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>AUTHORIZING COMMISSION...</span>
                    </span>
                  ) : (
                    'PLACE ORDER'
                  )}
                </button>

                {/* Assurance Badges */}
                <div className="pt-2 text-center text-[10px] font-mono text-white/40 uppercase tracking-widest space-y-1">
                  <div>Signature Delivery · 14-Day Private Returns</div>
                  <div>N.K FABRICS Haute Couture &amp; Tailoring Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
