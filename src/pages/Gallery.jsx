import React, { useState } from 'react';
import { X, Eye, Sparkles } from 'lucide-react';
import { galleryImages } from '../data/mockData';
import { handleImageError } from '../utils/imageUtils';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'ambience', name: 'Ambience & Glasshouse' },
    { id: 'latte-art', name: 'Latte Art' },
    { id: 'food', name: 'Gourmet Delicacies' },
    { id: 'night-view', name: 'Night Lighting' },
    { id: 'events', name: 'Live Music' }
  ];

  const filteredImages = activeTab === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Visual Experience</span>
        <h1 className="font-serif-luxury text-4xl font-bold text-[#f5ebe0]">Photo Gallery</h1>
        <p className="text-xs text-[#c9a687]">A glimpse into our coffee house ambience and culinary artistry in Jaipur.</p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveTab(c.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === c.id
                ? 'bg-[#d4af37] text-[#0d0705] font-bold'
                : 'bg-[#170d09] border border-[#c9a687]/20 text-[#c9a687] hover:text-[#f5ebe0]'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setActiveImage(img)}
            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group border border-[#c9a687]/20 bg-[#261610]"
          >
            <img
              src={img.image}
              alt={img.title}
              onError={handleImageError}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0705]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <h4 className="font-serif-luxury text-sm font-bold text-[#f5ebe0]">{img.title}</h4>
              <span className="text-[10px] text-[#d4af37] uppercase tracking-wider">{img.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-[#0d0705]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#170d09] border border-[#c9a687]/30 rounded-3xl overflow-hidden">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0d0705]/80 text-[#f5ebe0]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage.image}
              alt={activeImage.title}
              onError={handleImageError}
              className="w-full max-h-[75vh] object-contain bg-[#0d0705]"
            />
            <div className="p-4 bg-[#0d0705] border-t border-[#c9a687]/20 text-center">
              <h3 className="font-serif-luxury text-lg font-bold text-[#f5ebe0]">{activeImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
