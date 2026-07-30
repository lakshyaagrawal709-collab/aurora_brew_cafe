import React, { useState } from 'react';
import { Clock, User, ArrowRight, X } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { handleImageError } from '../utils/imageUtils';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Coffee Culture & Guides</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">
          The Aurora Coffee Journal
        </h1>
        <p className="text-xs sm:text-sm text-[#c9a687]">
          Articles on slow cold brewing, coffee pairing, and brunch lifestyle in C-Scheme, Jaipur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="rounded-3xl bg-[#170d09] border border-[#c9a687]/20 overflow-hidden shadow-xl hover:border-[#d4af37]/50 cursor-pointer transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="relative h-56 overflow-hidden bg-[#261610]">
              <img
                src={post.image}
                alt={post.title}
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#170d09] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0d0705]/80 text-[#d4af37] font-bold text-[10px] uppercase border border-[#c9a687]/20">
                {post.category}
              </span>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[10px] text-[#c9a687]">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#d4af37]" /> {post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#f5ebe0] group-hover:text-[#d4af37] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-[#c9a687] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#c9a687]/15 flex items-center justify-between text-xs font-bold text-[#d4af37]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-[#0d0705]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-[#170d09] border border-[#c9a687]/30 rounded-3xl overflow-hidden max-h-[85vh] flex flex-col">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0d0705]/80 text-[#f5ebe0]"
            >
              <X className="w-5 h-5" />
            </button>
            
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              onError={handleImageError}
              className="w-full h-56 object-cover bg-[#261610]"
            />

            <div className="p-6 overflow-y-auto space-y-4">
              <span className="text-xs font-bold text-[#d4af37] uppercase">{selectedPost.category}</span>
              <h2 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">{selectedPost.title}</h2>
              <div className="flex items-center gap-4 text-xs text-[#c9a687] pb-2 border-b border-[#c9a687]/15">
                <span>By {selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
              </div>
              <p className="text-xs text-[#c9a687] leading-relaxed font-outfit whitespace-pre-line">
                {selectedPost.content}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
