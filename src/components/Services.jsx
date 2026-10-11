import React, { useState } from 'react';
import { SERVICE_CATEGORIES, SALON_SERVICES } from '../data/servicesData';
import { ArrowUpRight, Search, Clock, Info, Check } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeCategoryId, setActiveCategoryId] = useState('haircuts');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter services by category or search term
  const filteredServices = SALON_SERVICES.filter((service) => {
    const matchesSearch = searchQuery.trim() === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (searchQuery.trim() !== '') {
      return matchesSearch;
    }
    return service.categoryId === activeCategoryId;
  });

  const activeCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeCategoryId);

  const handleBookService = (service) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section section-taupe services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <span>SALON MENU</span>
          </div>
          <h2>Curated Hair & Beauty Services</h2>
          <p className="section-subtitle">
            Every service begins with a thoughtful one-on-one consultation to understand your routine, texture, and aesthetic aspirations.
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="services-controls">
          {/* Category Tabs */}
          <div className="services-tabs" role="tablist" aria-label="Salon Service Categories">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = activeCategoryId === category.id && searchQuery === '';
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`service-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    setSearchQuery('');
                  }}
                >
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Field */}
          <div className="services-search-wrapper">
            <Search size={16} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              className="services-search-input"
              placeholder="Search treatment or haircut..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search salon services"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Description Banner (when not in search mode) */}
        {!searchQuery && activeCategory && (
          <div className="category-meta-banner">
            <p className="category-meta-desc">{activeCategory.description}</p>
          </div>
        )}

        {/* Services List / Cards */}
        {filteredServices.length > 0 ? (
          <div className="services-grid">
            {filteredServices.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-card-main">
                  <div className="service-card-header">
                    <h3 className="service-name">{service.name}</h3>
                    <span className="service-price">{service.price}</span>
                  </div>

                  <p className="service-desc">{service.description}</p>
                </div>

                <div className="service-card-footer">
                  <div className="service-duration">
                    <Clock size={13} aria-hidden="true" />
                    <span>Approx. {service.duration}</span>
                  </div>

                  <button
                    type="button"
                    className="service-book-btn"
                    onClick={() => handleBookService(service)}
                    aria-label={`Book ${service.name}`}
                  >
                    <span>Book Service</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="services-empty-state">
            <p>No services matched your search &ldquo;{searchQuery}&rdquo;.</p>
            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={() => setSearchQuery('')}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Clear Sample Price & Consultation Disclaimer */}
        <div className="services-disclaimer">
          <Info size={16} className="disclaimer-icon" aria-hidden="true" />
          <div className="disclaimer-text">
            <strong>Sample Pricing Notice:</strong> All listed prices are sample estimates for this fictional salon in Indian Rupees (₹). Final pricing is confirmed during consultation and may vary based on hair length, density, stylist tier, and custom treatment requirements. Hair treatments are designed for restorative nourishment and hydration and do not make guaranteed medical claims.
          </div>
        </div>
      </div>
    </section>
  );
}
