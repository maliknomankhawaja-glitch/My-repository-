import { ShopProduct } from '../data/shopProducts.ts';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  product?: ShopProduct;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function updatePageSeo(config: SeoConfig) {
  // 1. Update Title
  const brandSuffix = ' | N.K FABRICS Luxury Fashion';
  const fullTitle = config.title.includes('N.K FABRICS')
    ? config.title
    : `${config.title}${brandSuffix}`;
  document.title = fullTitle;

  // 2. Update Meta Description
  let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.name = 'description';
    document.head.appendChild(descMeta);
  }
  descMeta.content = config.description;

  // 3. Update OG Tags
  let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (ogTitle) {
    ogTitle.content = fullTitle;
  }
  let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (ogDesc) {
    ogDesc.content = config.description;
  }

  // 4. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (canonicalLink) {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://nkfabrics.com';
    const path = config.canonicalPath || '';
    canonicalLink.href = `${origin}${path}`;
  }

  // 5. Manage Dynamic Schema.org JSON-LD for Products
  const existingProductScript = document.getElementById('nk-product-jsonld');
  if (existingProductScript) {
    existingProductScript.remove();
  }

  if (config.product) {
    const script = document.createElement('script');
    script.id = 'nk-product-jsonld';
    script.type = 'application/ld+json';
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: config.product.name,
      image: config.product.primaryImage,
      description: `${config.product.tagline}. Hand-crafted from ${config.product.fabric} (${config.product.fabricOrigin}).`,
      brand: {
        '@type': 'Brand',
        name: 'N.K FABRICS',
      },
      category: config.product.category,
      offers: {
        '@type': 'Offer',
        url: window.location.href,
        priceCurrency: 'USD',
        price: config.product.price.toString(),
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'N.K FABRICS',
        },
      },
    };
    script.textContent = JSON.stringify(productSchema);
    document.head.appendChild(script);
  }

  // 6. Manage Dynamic Breadcrumbs JSON-LD
  const existingBreadcrumbScript = document.getElementById('nk-breadcrumbs-jsonld');
  if (existingBreadcrumbScript) {
    existingBreadcrumbScript.remove();
  }

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    const script = document.createElement('script');
    script.id = 'nk-breadcrumbs-jsonld';
    script.type = 'application/ld+json';
    const breadcrumbsSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
    script.textContent = JSON.stringify(breadcrumbsSchema);
    document.head.appendChild(script);
  }
}
