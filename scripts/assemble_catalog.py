import json
import os
import re

# Import all category datasets
from full_catalog_data import suits, IMG
from data_waistcoats import waistcoats
from data_formal_shirts import formal_shirts
from data_casual_shirts import casual_shirts
from data_trousers import trousers
from data_kurtas import kurtas
from data_shalwar_kameez import shalwar_kameez
from data_polos_tshirts import polos, tshirts
from data_jackets_sweaters import jackets, sweaters
from data_accessories import accessories

raw_categories = [
    ('suits', suits),
    ('waistcoats', waistcoats),
    ('formal-shirts', formal_shirts),
    ('casual-shirts', casual_shirts),
    ('trousers', trousers),
    ('kurtas', kurtas),
    ('shalwar-kameez', shalwar_kameez),
    ('polo-shirts', polos),
    ('t-shirts', tshirts),
    ('jackets', jackets),
    ('sweaters', sweaters),
    ('accessories', accessories),
]

all_products = []
seen_ids = set()

for cat_id, items in raw_categories:
    print(f"Processing category: {cat_id} ({len(items)} items)...")
    for s in items:
        pid = f"nk-{s[0]}"
        assert pid not in seen_ids, f"Duplicate ID detected: {pid}"
        seen_ids.add(pid)
        
        name = f"N.K FABRICS {s[1]}"
        tagline = s[3]
        desc = s[4]
        
        # Enforce user constraints strictly:
        assert 'm.n' not in name.lower(), f"Forbidden M.N in name: {name}"
        assert 'm.n' not in desc.lower(), f"Forbidden M.N in desc: {desc}"
        assert 'blazer' not in name.lower(), f"Forbidden BLAZER in name: {name}"
        assert 'blazer' not in desc.lower(), f"Forbidden BLAZER in desc: {desc}"
        notes = s[14] if isinstance(s[14], list) else [
            'Handcrafted in N.K FABRICS atelier',
            'Single-needle precision needlework',
            'Finished with noble natural materials'
        ]
        for note in notes:
            assert 'blazer' not in note.lower(), f"Forbidden BLAZER in note: {note}"
        
        new_arr = bool(s[15]) if len(s) > 15 else False
        best_seller = bool(s[16]) if len(s) > 16 else False

        all_products.append({
            'id': pid,
            'name': name,
            'category': cat_id,
            'isNewArrival': new_arr,
            'isBestSeller': best_seller,
            'price': s[2],
            'formattedPrice': f"${s[2]:,}",
            'tagline': tagline,
            'description': desc,
            'primaryImage': IMG[s[5]],
            'hoverImage': IMG[s[6]],
            'colors': s[7],
            'sizes': s[8],
            'fabric': s[9],
            'fabricOrigin': s[10],
            'fit': s[11],
            'occasion': s[12],
            'collection': s[13] if isinstance(s[13], str) else 'Signature Collection',
            'availability': 'Bespoke Commission' if new_arr else 'In Stock',
            'tailoringNotes': notes,
        })

print(f"\nTOTAL PRODUCTS ASSEMBLED: {len(all_products)}")

# Header code for TypeScript
ts_code = f"""export interface ShopProduct {{
  id: string;
  name: string;
  category: 
    | 'suits'
    | 'waistcoats'
    | 'formal-shirts'
    | 'casual-shirts'
    | 'trousers'
    | 'kurtas'
    | 'shalwar-kameez'
    | 'polo-shirts'
    | 't-shirts'
    | 'jackets'
    | 'sweaters'
    | 'accessories';
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  price: number;
  formattedPrice: string;
  tagline: string;
  description: string;
  primaryImage: string;
  hoverImage: string;
  colors: {{ name: string; hex: string }}[];
  sizes: string[];
  fabric: string;
  fabricOrigin: string;
  fit?: 'Slim Fit' | 'Tailored Regular' | 'Relaxed Drape' | 'Classic Formal';
  occasion?: string;
  collection: string;
  availability: 'In Stock' | 'Bespoke Commission';
  tailoringNotes: string[];
}}

export const SHOP_CATEGORIES = [
  {{ id: 'all', label: 'All Creations ({len(all_products)})' }},
  {{ id: 'new-arrivals', label: 'New Arrivals' }},
  {{ id: 'best-sellers', label: 'Best Sellers' }},
  {{ id: 'suits', label: 'Suits (32)' }},
  {{ id: 'waistcoats', label: 'Waistcoats (22)' }},
  {{ id: 'formal-shirts', label: 'Formal Shirts (26)' }},
  {{ id: 'casual-shirts', label: 'Casual Shirts (22)' }},
  {{ id: 'trousers', label: 'Trousers & Pants (26)' }},
  {{ id: 'kurtas', label: 'Kurtas (22)' }},
  {{ id: 'shalwar-kameez', label: 'Shalwar Kameez (22)' }},
  {{ id: 'jackets', label: 'Jackets (16)' }},
  {{ id: 'polo-shirts', label: 'Polo Shirts (16)' }},
  {{ id: 't-shirts', label: 'T-Shirts (16)' }},
  {{ id: 'sweaters', label: 'Sweaters & Knitwear (16)' }},
  {{ id: 'accessories', label: 'Accessories (22)' }},
];

export const SHOP_COLLECTIONS = [
  'All Collections',
  'Signature Collection',
  'Premium Collection',
  'Formal Collection',
  'Wedding Collection',
  'Eid Collection',
  'Traditional Collection',
  'Business Collection',
  'Evening Collection',
  'Summer Collection',
  'Winter Collection',
  'Essential Collection',
  'Limited Edition',
  'N.K FABRICS Essentials',
];

export const ALL_PRODUCTS: ShopProduct[] = {json.dumps(all_products, indent=2)};
"""

target_file = 'src/data/shopProducts.ts'
with open(target_file, 'w') as f:
    f.write(ts_code)

print(f"File {target_file} written successfully! Total bytes: {len(ts_code)}")
