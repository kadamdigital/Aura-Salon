import React from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { Compass } from 'lucide-react';

export default function Footer({ onSelectCategory, onBookClick }) {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services Menu', href: '#services' },
    { label: 'The Experience', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book Appointment', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Tier: Columns */}
        <div className="footer-columns">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <span className="footer-crest" aria-hidden="true">A</span>
              <span className="footer-brand-title">{SALON_CONFIG.brandName}</span>
            </div>
            <p className="footer-tagline">
              Modern luxury, professional hair care, and bespoke beauty experiences designed around you.
            </p>
            <div className="footer-location-tag">
              <Compass size={14} aria-hidden="true" />
              <span>Boutique Atelier • Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Directory */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      if (onSelectCategory) onSelectCategory(cat.id);
                    }}
                    className="footer-link"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact Summary */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Salon Hours</h4>
            <div className="footer-hours">
              <p className="hours-row">
                <span className="day-label">Mon – Sat:</span>
                <span className="time-val">{SALON_CONFIG.hours.weekday}</span>
              </p>
              <p className="hours-row">
                <span className="day-label">Sunday:</span>
                <span className="time-val">{SALON_CONFIG.hours.weekend}</span>
              </p>
            </div>

            <div className="footer-social-section">
              <span className="social-label">Follow Our Work</span>
              <div className="footer-social-icons">
                {SALON_CONFIG.socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={`Visit our ${social.name}`}
                  >
                    {social.name === 'Instagram' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    )}
                    {social.name === 'Facebook' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    )}
                    {social.name === 'Pinterest' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Tier: Copyright & Portfolio Credit */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {SALON_CONFIG.brandName}. All rights reserved. Fictional salon showcase.
          </p>

          <p className="portfolio-credit">
            <span>{SALON_CONFIG.portfolioAttribution}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
