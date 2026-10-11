import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const prevLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="section section-ivory gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <span>VISUAL PORTFOLIO</span>
          </div>
          <h2>Glimpse the Sanctuary</h2>
          <p className="section-subtitle">
            An editorial look into our salon spaces, precision styling, dimensional colour work, and restorative moments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="gallery-filter-bar" role="tablist" aria-label="Gallery category filters">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gallery-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-card ${item.aspect === 'landscape' ? 'card-wide' : 'card-standard'}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View enlarged photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} — ${item.category} at AURA SALON`}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-category-badge">{item.category}</span>
                  <div className="gallery-card-info">
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <p className="gallery-card-desc">{item.description}</p>
                  </div>
                  <span className="gallery-expand-icon" aria-hidden="true">
                    <Maximize2 size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <div 
            className="lightbox-overlay" 
            role="dialog" 
            aria-modal="true" 
            aria-label="Enlarged gallery photo"
          >
            <div className="lightbox-backdrop" onClick={closeLightbox} />

            <div className="lightbox-modal">
              {/* Close Button */}
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {/* Prev Button */}
              <button
                type="button"
                className="lightbox-nav-btn lightbox-prev"
                onClick={prevLightboxImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Main Image Frame */}
              <div className="lightbox-content-frame">
                <img
                  src={filteredItems[activeLightboxIndex].imageUrl}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="lightbox-image"
                />
                <div className="lightbox-caption">
                  <div className="lightbox-caption-meta">
                    <span className="lightbox-badge">{filteredItems[activeLightboxIndex].category}</span>
                    <span className="lightbox-counter">
                      {activeLightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="lightbox-title">{filteredItems[activeLightboxIndex].title}</h3>
                  <p className="lightbox-desc">{filteredItems[activeLightboxIndex].description}</p>
                </div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                className="lightbox-nav-btn lightbox-next"
                onClick={nextLightboxImage}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
