import React, { useState } from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ExternalLink,
  Car,
  Compass,
  CalendarCheck
} from 'lucide-react';

export default function LocationContact({ onBookClick }) {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_CONFIG.address).then(() => {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    });
  };

  const handleWhatsAppClick = () => {
    if (SALON_CONFIG.whatsappNumber && SALON_CONFIG.whatsappNumber.trim() !== '') {
      const cleanNum = SALON_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
      const defaultMsg = encodeURIComponent(`Hello ${SALON_CONFIG.brandName}, I would like to inquire about appointments and services.`);
      window.open(`https://wa.me/${cleanNum}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
    } else {
      // Scroll to booking WhatsApp section or trigger booking form WhatsApp dialog
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="section section-taupe contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <span>VISIT & INQUIRE</span>
          </div>
          <h2>Location & Salon Concierge</h2>
          <p className="section-subtitle">
            Centrally situated for effortless visits. Step inside our tranquil sanctuary or connect with our concierge team.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-details-card">
            <h3 className="card-heading">Contact Information</h3>
            <p className="card-subtext">All contact details are customizable via <code>salonConfig.js</code>.</p>

            <div className="contact-list">
              {/* Address */}
              <div className="contact-entry">
                <div className="entry-icon-circle" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div className="entry-content">
                  <span className="entry-label">Atelier Location</span>
                  <p className="entry-value">{SALON_CONFIG.address}</p>
                  <p className="entry-note">{SALON_CONFIG.addressNotes}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-entry">
                <div className="entry-icon-circle" aria-hidden="true">
                  <Clock size={18} />
                </div>
                <div className="entry-content">
                  <span className="entry-label">Opening Hours</span>
                  <div className="hours-block">
                    <div className="hours-line">
                      <span>{SALON_CONFIG.hours.weekdayDays}:</span>
                      <strong>{SALON_CONFIG.hours.weekday}</strong>
                    </div>
                    <div className="hours-line">
                      <span>{SALON_CONFIG.hours.weekendDays}:</span>
                      <strong>{SALON_CONFIG.hours.weekend}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-entry">
                <div className="entry-icon-circle" aria-hidden="true">
                  <Phone size={18} />
                </div>
                <div className="entry-content">
                  <span className="entry-label">Telephone Concierge</span>
                  <p className="entry-value">{SALON_CONFIG.phone}</p>
                  <p className="entry-note">Direct assistance for bespoke timings and group appointments.</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-entry">
                <div className="entry-icon-circle" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div className="entry-content">
                  <span className="entry-label">Electronic Mail</span>
                  <p className="entry-value">{SALON_CONFIG.email}</p>
                </div>
              </div>
            </div>

            <div className="contact-cta-bar">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={onBookClick}
              >
                <CalendarCheck size={14} aria-hidden="true" />
                <span>Book Appointment</span>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare size={14} aria-hidden="true" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

          {/* Elegant Location / Architectural Placeholder Card */}
          <div className="location-visual-card">
            <div className="location-visual-image-box">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85" 
                alt="AURA SALON welcoming entrance and lounge" 
                className="location-visual-img"
                loading="lazy"
              />
              <div className="location-badge-overlay">
                <Compass size={16} aria-hidden="true" />
                <span>MUMBAI, MAHARASHTRA</span>
              </div>
            </div>

            <div className="location-visual-info">
              <div className="location-visual-header">
                <h4>Neighborhood Destination</h4>
                <span className="status-pill">Active Studio</span>
              </div>

              <p className="location-visual-desc">
                An intimate refuge in the heart of Mumbai. Designed with sound-dampening surfaces, warm ambient lighting, and bespoke air purification for pure serenity.
              </p>

              <div className="amenities-row">
                <div className="amenity-tag">
                  <Car size={13} aria-hidden="true" />
                  <span>Valet Parking</span>
                </div>
                <div className="amenity-tag">
                  <span>Espresso & Infusions</span>
                </div>
                <div className="amenity-tag">
                  <span>High-Speed Wi-Fi</span>
                </div>
              </div>

              <div className="location-interactive-placeholder">
                <div className="map-placeholder-inner">
                  <MapPin size={22} className="map-pin-icon" aria-hidden="true" />
                  <span className="map-placeholder-title">Map View Integration</span>
                  <p className="map-placeholder-sub">
                    Google Maps embed activates automatically when an authentic API coordinates link is inserted in salon configuration.
                  </p>
                  <button 
                    type="button" 
                    className="copy-coords-btn"
                    onClick={handleCopyAddress}
                  >
                    {copiedAddress ? 'Address Copied!' : 'Copy Address Text'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
