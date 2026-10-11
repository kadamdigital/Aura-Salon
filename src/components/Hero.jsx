import React from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { ArrowDownRight, MapPin, Sparkles, Clock, Compass } from 'lucide-react';

export default function Hero({ onBookClick, onExploreServices }) {
  const scrollToServices = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Editorial Text Column */}
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <span>{SALON_CONFIG.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            A Little Luxury.<br />
            <span className="hero-title-italic">A Whole New You.</span>
          </h1>

          <p className="hero-description">
            {SALON_CONFIG.subheading}
          </p>

          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary hero-btn-main"
              onClick={scrollToBooking}
            >
              <span>Book Your Visit</span>
              <ArrowDownRight size={16} aria-hidden="true" />
            </button>

            <button 
              type="button" 
              className="btn btn-secondary hero-btn-sub"
              onClick={scrollToServices}
            >
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Tasteful Experience & Location Detail */}
          <div className="hero-meta-card">
            <div className="hero-meta-item">
              <span className="hero-meta-icon" aria-hidden="true">
                <Compass size={18} />
              </span>
              <div className="hero-meta-text">
                <span className="hero-meta-label">Boutique Haven</span>
                <span className="hero-meta-value">{SALON_CONFIG.locationDetail}</span>
              </div>
            </div>

            <div className="hero-meta-divider" aria-hidden="true" />

            <div className="hero-meta-item">
              <span className="hero-meta-icon" aria-hidden="true">
                <Clock size={18} />
              </span>
              <div className="hero-meta-text">
                <span className="hero-meta-label">Open Daily</span>
                <span className="hero-meta-value">10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Visual Composition */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85" 
              alt="AURA SALON modern luxury interior with warm lighting and bespoke styling stations" 
              className="hero-main-image"
              loading="eager"
            />
            {/* Subtle editorial watermark stamp */}
            <div className="hero-floating-badge" aria-hidden="true">
              <span className="badge-year">EST. 2026</span>
              <span className="badge-desc">UNISEX BEAUTY & HAIR ATELIER</span>
            </div>
          </div>

          {/* Secondary Editorial Inset Thumbnail */}
          <div className="hero-secondary-card">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=85" 
              alt="Stylist crafting bespoke haircut at AURA SALON"
              className="hero-inset-image"
              loading="lazy"
            />
            <div className="hero-inset-caption">
              <p className="inset-caption-tag">ARTISANAL CARE</p>
              <p className="inset-caption-text">Tailored to your natural grace.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
