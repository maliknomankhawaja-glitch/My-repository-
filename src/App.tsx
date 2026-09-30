import React, { useState } from 'react';
import {
  MNMonogramMaster,
} from './components/MNLogos.tsx';
import { HeroShowroom } from './components/HeroShowroom.tsx';
import { FashionShowcase } from './components/FashionShowcase.tsx';
import { SuitCollectionSection } from './components/SuitCollectionSection.tsx';
import { TraditionalCollectionSection } from './components/TraditionalCollectionSection.tsx';
import { EssentialsSection } from './components/EssentialsSection.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { GarmentProduct, SUIT_COLLECTION } from './data/fashionData.ts';

// New Shop Experience
import { ShopPage } from './components/ShopPage.tsx';
import { QuickViewModal } from './components/QuickViewModal.tsx';
import { CartDrawer, CartItem } from './components/CartDrawer.tsx';
import { WishlistDrawer } from './components/WishlistDrawer.tsx';
import { ALL_PRODUCTS, ShopProduct } from './data/shopProducts.ts';
import { ProductDetailPage } from './components/ProductDetailPage.tsx';
import { CartPage } from './components/CartPage.tsx';
import { WishlistPage } from './components/WishlistPage.tsx';
import { CheckoutPage, OrderRecord } from './components/CheckoutPage.tsx';
import { OrderConfirmationPage } from './components/OrderConfirmationPage.tsx';
import { AboutPage } from './components/AboutPage.tsx';
import { PremiumHeader } from './components/PremiumHeader.tsx';
import { PremiumFooter } from './components/PremiumFooter.tsx';
import { SearchOverlay } from './components/SearchOverlay.tsx';
import { AccountModal } from './components/AccountModal.tsx';
import { ConciergeInfoModal } from './components/ConciergeInfoModal.tsx';
import { SizeGuideModal } from './components/SizeGuideModal.tsx';

// Brand Identity Components
import { PhysicalMockups } from './components/PhysicalMockups.tsx';
import { ScalabilityTest } from './components/ScalabilityTest.tsx';
import { ColorPaletteSection } from './components/ColorPaletteSection.tsx';
import { TypographySection } from './components/TypographySection.tsx';
import { AssetExportStudio } from './components/AssetExportStudio.tsx';

export default function App() {
  const [activeView, setActiveView] = useState<'showroom' | 'shop' | 'brand-system' | 'pdp' | 'cart' | 'wishlist' | 'checkout' | 'confirmation' | 'about'>('about');
  const [selectedProduct, setSelectedProduct] = useState<GarmentProduct | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);
  const [pdpProduct, setPdpProduct] = useState<ShopProduct>(ALL_PRODUCTS[0]);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderRecord | null>(null);

  // Filter state for Shop navigation
  const [shopCategoryFilter, setShopCategoryFilter] = useState<string>('all');
  const [shopColorFilter, setShopColorFilter] = useState<string>('all');

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [isConciergeInfoOpen, setIsConciergeInfoOpen] = useState<boolean>(false);
  const [conciergeTopic, setConciergeTopic] = useState<'shipping' | 'returns' | 'contact' | 'faqs'>('shipping');

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-suit-navy',
      product: ALL_PRODUCTS[1], // M.N Midnight Navy Suit
      size: '40R',
      color: 'Midnight Navy',
      quantity: 1,
    },
  ]);
  const [savedForLaterItems, setSavedForLaterItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([
    'mn-suit-black-signature',
    'mn-trad-noir-shalwar-kameez',
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2600);
  };

  const handleAddToCart = (product: ShopProduct, size: string, color: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.size === size && item.color === color);
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.id}-${size}-${color}-${Date.now()}`,
          product,
          size,
          color,
          quantity: 1,
        },
      ];
    });
    showToast(`Added ${product.name} (${size}) to private bag`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Removed from shopping bag');
  };

  const handleSaveForLater = (item: CartItem) => {
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
    setSavedForLaterItems((prev) => [item, ...prev]);
    showToast(`Saved ${item.product.name} for later`);
  };

  const handleMoveToBag = (item: CartItem) => {
    setSavedForLaterItems((prev) => prev.filter((i) => i.id !== item.id));
    setCartItems((prev) => [item, ...prev]);
    showToast(`Moved ${item.product.name} back to Shopping Bag`);
  };

  const handleRemoveSavedItem = (id: string) => {
    setSavedForLaterItems((prev) => prev.filter((i) => i.id !== id));
    showToast('Removed from Saved for Later');
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from saved wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your private wardrobe');
        return [...prev, productId];
      }
    });
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setActiveView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSuccess = (order: OrderRecord) => {
    setConfirmedOrder(order);
    setCartItems([]);
    setActiveView('confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Commission ${order.orderNumber} placed successfully!`);
  };

  const handleOpenFullDetailFromShop = (shopProd: ShopProduct) => {
    setPdpProduct(shopProd);
    setActiveView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setActiveView('showroom');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F1EA] font-sans-clean selection:bg-[#C8A97E] selection:text-[#0C0C0C]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#C8A97E] text-black px-5 py-3 shadow-2xl text-xs font-mono font-medium flex items-center gap-2 border border-black/20 animate-in fade-in slide-in-from-top-4 duration-200">
          <span>✓</span>
          <strong>{toastMessage}</strong>
        </div>
      )}

      {/* 1. PREMIUM LUXURY HEADER (STICKY WITH MEGA MENU & SEARCH) */}
      <PremiumHeader
        onNavigateHome={() => {
          setActiveView('showroom');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateShop={(cat, col) => {
          setShopCategoryFilter(cat || 'all');
          setShopColorFilter(col || 'all');
          setActiveView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setActiveView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateCart={() => {
          setIsCartOpen(true);
        }}
        onNavigateWishlist={() => {
          setIsWishlistOpen(true);
        }}
        onOpenSearch={() => {
          setIsSearchOpen(true);
        }}
        onOpenAccount={() => {
          setIsAccountOpen(true);
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        activeView={activeView}
      />

      {/* VIEW SWITCHER SUB-BAR */}
      <div className="bg-[#121212] border-b border-white/5 px-6 py-2 flex items-center justify-between text-[11px] font-sans-clean overflow-x-auto">
        <div className="flex items-center gap-4 text-white/50 shrink-0">
          <span>Experience:</span>
          <button
            onClick={() => {
              setActiveView('pdp');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors ${
              activeView === 'pdp'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            Signature Suit PDP
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setShopCategoryFilter('all');
              setShopColorFilter('all');
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors ${
              activeView === 'shop'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            Luxury Shop &amp; Grid
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setActiveView('cart');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors flex items-center gap-1 ${
              activeView === 'cart'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            <span>Shopping Bag</span>
            <span className="font-mono text-[10px] text-[#C8A97E]">({totalCartCount})</span>
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setActiveView('checkout');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors ${
              activeView === 'checkout'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            Checkout
          </button>
          {confirmedOrder && (
            <>
              <span>·</span>
              <button
                onClick={() => {
                  setActiveView('confirmation');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`uppercase tracking-wider transition-colors ${
                  activeView === 'confirmation'
                    ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                    : 'hover:text-white'
                }`}
              >
                Order Confirmation
              </button>
            </>
          )}
          <span>·</span>
          <button
            onClick={() => {
              setActiveView('wishlist');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors flex items-center gap-1 ${
              activeView === 'wishlist'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            <span>Wishlist</span>
            <span className="font-mono text-[10px] text-[#C8A97E]">({wishlistIds.length})</span>
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setActiveView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors ${
              activeView === 'about'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            About M.N &amp; Craftsmanship
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setActiveView('showroom');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors ${
              activeView === 'showroom'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            Editorial Showroom
          </button>
          <span>·</span>
          <button
            onClick={() => {
              setActiveView('brand-system');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`uppercase tracking-wider transition-colors ${
              activeView === 'brand-system'
                ? 'text-[#C8A97E] font-medium border-b border-[#C8A97E]'
                : 'hover:text-white'
            }`}
          >
            Brand Manual &amp; Vector System
          </button>
        </div>

        <div className="hidden lg:block text-[10px] font-mono text-white/40 uppercase shrink-0">
          Savile Row Suiting &amp; Pakistani Haute Couture · Strictly No Blazers / No Underwear
        </div>
      </div>

      {/* VIEW 0: THE M.N LUXURY PRODUCT DETAIL PAGE */}
      {activeView === 'pdp' && (
        <main>
          <ProductDetailPage
            product={pdpProduct}
            onBackToShop={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToBag={handleAddToCart}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onSelectProduct={(product) => {
              setPdpProduct(product);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCheckout={handleProceedToCheckout}
          />
        </main>
      )}

      {/* VIEW 1: THE M.N LUXURY SHOP PAGE */}
      {activeView === 'shop' && (
        <main>
          <ShopPage
            initialCategory={shopCategoryFilter}
            initialColor={shopColorFilter}
            onQuickView={(product) => setQuickViewProduct(product)}
            onAddToBag={handleAddToCart}
            onOpenFullDetail={handleOpenFullDetailFromShop}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        </main>
      )}

      {/* VIEW 4: THE FULL DEDICATED SHOPPING CART PAGE */}
      {activeView === 'cart' && (
        <main>
          <CartPage
            items={cartItems}
            savedForLaterItems={savedForLaterItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveCartItem}
            onSaveForLater={handleSaveForLater}
            onMoveToBag={handleMoveToBag}
            onRemoveSavedItem={handleRemoveSavedItem}
            onCheckout={handleProceedToCheckout}
            onContinueShopping={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreNewArrivals={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onQuickView={(prod) => setQuickViewProduct(prod)}
            onAddToBag={handleAddToCart}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        </main>
      )}

      {/* VIEW 6: THE PREMIUM CONCIERGE CHECKOUT PAGE */}
      {activeView === 'checkout' && (
        <main>
          <CheckoutPage
            items={cartItems}
            subtotal={cartSubtotal}
            discount={0}
            total={cartSubtotal}
            onReturnToBag={() => {
              setActiveView('cart');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContinueShopping={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOrderSuccess={handleOrderSuccess}
          />
        </main>
      )}

      {/* VIEW 7: THE LUXURY ORDER CONFIRMATION PAGE */}
      {activeView === 'confirmation' && confirmedOrder && (
        <main>
          <OrderConfirmationPage
            order={confirmedOrder}
            onContinueShopping={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {/* VIEW 5: THE FULL DEDICATED WISHLIST PAGE */}
      {activeView === 'wishlist' && (
        <main>
          <WishlistPage
            wishlistIds={wishlistIds}
            allProducts={ALL_PRODUCTS}
            onRemoveFromWishlist={handleToggleWishlist}
            onAddToBag={handleAddToCart}
            onQuickView={(prod) => setQuickViewProduct(prod)}
            onExploreCollection={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onToggleWishlist={handleToggleWishlist}
          />
        </main>
      )}

      {/* VIEW 8: THE M.N BRAND STORY & ABOUT PAGE */}
      {activeView === 'about' && (
        <main>
          <AboutPage
            onExploreCollection={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreNewArrivals={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreSuits={() => {
              setActiveView('pdp');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreTraditional={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {/* VIEW 2: THE EDITORIAL FASHION SHOWROOM */}
      {activeView === 'showroom' && (
        <main className="space-y-4">
          <div id="hero">
            <HeroShowroom
              onExplore={() => {
                setActiveView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onShopNow={() => {
                setActiveView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          <FashionShowcase
            onSelectCategory={() => {
              setActiveView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <SuitCollectionSection
            onSelectSuit={(suit) => setSelectedProduct(suit)}
          />

          <TraditionalCollectionSection
            onSelectTrad={(item) =>
              setSelectedProduct({
                ...SUIT_COLLECTION[0],
                id: item.id,
                name: item.name,
                category: 'traditional',
                price: item.price,
                tagline: item.tagline,
                fabric: item.fabric,
                cut: 'Imperial Pakistani Traditional Silhouette with Tailored Drape',
                lapel: 'Hand-Finished Mandarin Band Collar with Needlepoint',
                waistcoat: item.waistcoatPairing,
                shirtPairing: 'Integrated Pure Raw Silk / Egyptian Giza Cotton Kurta',
                trouserTailoring: 'Matching Hand-Tailored Shalwar / Straight Trouser Pajama',
                buttonDetails: 'Hand-Carved Horn Buttons & Cufflink Slits',
                stitching: 'Single-Needle French Seam Needlework',
                image: item.image,
                description: item.description,
              })
            }
          />

          <EssentialsSection
            onSelectItem={(item) =>
              setSelectedProduct({
                ...SUIT_COLLECTION[0],
                id: item.id,
                name: item.name,
                category: 'essentials',
                price: item.price,
                tagline: item.tagline,
                fabric: item.fabric,
                cut: 'Precision Tailored Casual Silhouette',
                lapel: 'Self-Fabric Collar / Ribbed Neckline',
                waistcoat: 'N/A — Everyday Luxury Wear',
                shirtPairing: 'Pairs with M.N Pleated High-Rise Trousers',
                trouserTailoring: 'Engineered Drape',
                buttonDetails: 'Mother-of-Pearl or Tone-on-Tone M.N Monogram',
                stitching: 'Blind-Stitched Hems',
                image: item.image,
                description: item.details,
              })
            }
          />
        </main>
      )}

      {/* VIEW 3: THE BRAND IDENTITY MANUAL & VECTOR SYSTEM */}
      {activeView === 'brand-system' && (
        <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="inline-block text-[11px] font-sans-clean uppercase tracking-[0.3em] text-[#C8A97E]">
              Brand Manual &amp; Vector System
            </div>
            <h1 className="font-serif-lux text-4xl sm:text-6xl text-[#FAF8F5]">
              M.N Brand Identity &amp; Logo System
            </h1>
            <p className="text-sm font-sans-clean text-[#D8D4CC]/75 font-light leading-relaxed max-w-2xl">
              The sovereign monogram, typography scale, palette standards, and vector export files powering the entire M.N Maison.
            </p>
          </div>

          <section className="space-y-8">
            <h2 className="font-serif-lux text-3xl text-[#FAF8F5]">Physical Garment Mockups</h2>
            <PhysicalMockups />
          </section>

          <section className="space-y-8">
            <h2 className="font-serif-lux text-3xl text-[#FAF8F5]">Scalability Matrix &amp; Geometric Rigor</h2>
            <ScalabilityTest />
          </section>

          <section className="space-y-8">
            <ColorPaletteSection />
          </section>

          <section className="space-y-8">
            <TypographySection />
          </section>

          <section className="space-y-8">
            <AssetExportStudio />
          </section>
        </main>
      )}

      {/* QUICK VIEW MODAL */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToBag={handleAddToCart}
        onOpenFullDetail={handleOpenFullDetailFromShop}
      />

      {/* PRODUCT DETAIL INSPECTION MODAL */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* CART DRAWER (SLIDE-OUT SHOPPING BAG) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onSaveForLater={handleSaveForLater}
        onCheckout={handleProceedToCheckout}
        onViewFullCart={() => {
          setIsCartOpen(false);
          setActiveView('cart');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExploreCollection={() => {
          setIsCartOpen(false);
          setActiveView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExploreNewArrivals={() => {
          setIsCartOpen(false);
          setActiveView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* WISHLIST DRAWER (SLIDE-OUT WISHLIST) */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        allProducts={ALL_PRODUCTS}
        onRemoveFromWishlist={handleToggleWishlist}
        onQuickView={(p) => {
          setIsWishlistOpen(false);
          setQuickViewProduct(p);
        }}
        onAddToBag={handleAddToCart}
        onViewFullWishlist={() => {
          setIsWishlistOpen(false);
          setActiveView('wishlist');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExploreCollection={() => {
          setIsWishlistOpen(false);
          setActiveView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 7. PREMIUM LUXURY FOOTER (WITH NEWSLETTER, SHOP, M.N, HELP, ACCOUNT, BRAND & BOTTOM BAR) */}
      <PremiumFooter
        onNavigateShop={(cat) => {
          setShopCategoryFilter(cat || 'all');
          setShopColorFilter('all');
          setActiveView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setActiveView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateCart={() => {
          setIsCartOpen(true);
        }}
        onNavigateWishlist={() => {
          setIsWishlistOpen(true);
        }}
        onOpenAccount={() => {
          setIsAccountOpen(true);
        }}
        onOpenSizeGuide={() => {
          setIsSizeGuideOpen(true);
        }}
        onOpenShippingInfo={() => {
          setConciergeTopic('shipping');
          setIsConciergeInfoOpen(true);
        }}
        onOpenContact={() => {
          setConciergeTopic('contact');
          setIsConciergeInfoOpen(true);
        }}
      />

      {/* 4. SEARCH OVERLAY */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => {
          setPdpProduct(prod);
          setActiveView('pdp');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSearchCategory={(cat) => {
          setShopCategoryFilter(cat);
          setShopColorFilter('all');
          setActiveView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* CLIENT CONCIERGE & ACCOUNT MODAL */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        recentOrder={confirmedOrder}
        wishlistCount={wishlistIds.length}
        cartCount={totalCartCount}
        onViewWishlist={() => {
          setActiveView('wishlist');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onViewCart={() => {
          setActiveView('cart');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExploreShop={() => {
          setShopCategoryFilter('all');
          setShopColorFilter('all');
          setActiveView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* SIZE GUIDE MODAL */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* CONCIERGE INFO MODAL (SHIPPING, RETURNS, CONTACT, FAQS) */}
      <ConciergeInfoModal
        isOpen={isConciergeInfoOpen}
        onClose={() => setIsConciergeInfoOpen(false)}
        initialTopic={conciergeTopic}
      />
    </div>
  );
}
