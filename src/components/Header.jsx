import React, { useState, useEffect } from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for navigation highlight
      const sections = ['home', 'services', 'story', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Our Story', href: '#story', id: 'story' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingCTA = () => {
    setMobileMenuOpen(false);
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Wordmark & Monogram */}
        <a 
          href="#home" 
          className="brand-logo" 
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Aura Salon Home"
        >
          <span className="brand-crest" aria-hidden="true">
            <span className="crest-ring"></span>
            <span className="crest-letter">A</span>
          </span>
          <div className="brand-text-group">
            <span className="brand-title">{SALON_CONFIG.brandName}</span>
            <span className="brand-sub">LUXURY UNISEX SALON</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                  {activeSection === item.id && <span className="active-dot" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary Action Button (Desktop) */}
        <div className="header-actions">
          <button 
            type="button" 
            className="btn btn-primary btn-sm header-book-btn"
            onClick={handleBookingCTA}
          >
            <Calendar size={14} aria-hidden="true" />
            <span>BOOK AN APPOINTMENT</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="brand-text-group">
              <span className="brand-title">{SALON_CONFIG.brandName}</span>
              <span className="brand-sub">MUMBAI</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <button
              type="button"
              className="btn btn-primary mobile-cta-btn"
              onClick={handleBookingCTA}
            >
              <Calendar size={16} aria-hidden="true" />
              <span>BOOK AN APPOINTMENT</span>
            </button>
            <div className="mobile-hours-snippet">
              <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
              <p>Sunday: 11:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
