// Inline SVG Data URIs for guaranteed visual display without network dependencies

const generateSvgDataUri = (title, category, color1 = '#3d2319', color2 = '#d4af37') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="50%" stop-color="#261610"/>
        <stop offset="100%" stop-color="#0d0705"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#c9a687"/>
        <stop offset="50%" stop-color="#d4af37"/>
        <stop offset="100%" stop-color="#ffe082"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#g)"/>
    <circle cx="400" cy="270" r="160" fill="none" stroke="${color2}" stroke-width="2" opacity="0.25"/>
    <circle cx="400" cy="270" r="120" fill="#170d09" stroke="${color2}" stroke-width="4"/>
    
    <!-- Icon Art -->
    <path d="M340 290 C340 330 460 330 460 290 L450 220 L350 220 Z" fill="none" stroke="url(#gold)" stroke-width="6" stroke-linecap="round"/>
    <path d="M450 240 C480 240 480 280 450 280" fill="none" stroke="url(#gold)" stroke-width="5"/>
    <path d="M370 200 Q380 170 375 150" fill="none" stroke="#c9a687" stroke-width="3" opacity="0.6"/>
    <path d="M400 195 Q410 165 405 145" fill="none" stroke="#d4af37" stroke-width="3" opacity="0.8"/>
    <path d="M430 200 Q440 170 435 150" fill="none" stroke="#c9a687" stroke-width="3" opacity="0.6"/>
    
    <text x="400" y="470" font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="bold" fill="url(#gold)" text-anchor="middle">${title}</text>
    <text x="400" y="505" font-family="sans-serif" font-size="14" font-weight="600" fill="#c9a687" letter-spacing="3" text-anchor="middle">${category.toUpperCase()} • AURORA BREW CAFE</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const getCategoryFallback = (item) => {
  const cat = (item?.category || '').toLowerCase();
  const name = item?.name || 'Gourmet Specialty';

  if (cat.includes('pizza')) {
    return generateSvgDataUri(name, 'Woodfired Pizza', '#4a150e', '#e67e22');
  } else if (cat.includes('burger')) {
    return generateSvgDataUri(name, 'Craft Burger', '#3a1e05', '#d35400');
  } else if (cat.includes('pasta')) {
    return generateSvgDataUri(name, 'Creamy Pasta', '#1e381e', '#27ae60');
  } else if (cat.includes('dessert') || cat.includes('bakery')) {
    return generateSvgDataUri(name, 'Artisanal Dessert', '#3d162a', '#e84393');
  } else if (cat.includes('tea')) {
    return generateSvgDataUri(name, 'Artisanal Tea', '#1b3322', '#2ecc71');
  } else {
    return generateSvgDataUri(name, item?.category || 'Specialty Coffee', '#3d2319', '#d4af37');
  }
};

export const handleImageError = (e, item) => {
  e.target.onerror = null;
  e.target.src = getCategoryFallback(item);
};
