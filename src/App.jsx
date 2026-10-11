import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SignatureExperience from './components/SignatureExperience';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  // When a visitor clicks "Book Service" in the menu
  const handleSelectService = (service) => {
    setSelectedService(service);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetSelectedService = () => {
    setSelectedService(null);
  };

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="aura-salon-app">
      {/* 1. Header & Navigation */}
      <Header onBookClick={handleBookClick} />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero 
          onBookClick={handleBookClick} 
          onExploreServices={handleExploreServices} 
        />

        {/* 3. Services Salon Menu */}
        <Services 
          onSelectService={handleSelectService} 
        />

        {/* 4. Signature Experience ("Your Moment of Self-Care") */}
        <SignatureExperience />

        {/* 5. Why Choose Us (Dark Section) */}
        <WhyChooseUs />

        {/* 6. Visual Portfolio Gallery */}
        <Gallery />

        {/* 7. Appointment Booking & WhatsApp Concierge */}
        <BookingForm 
          selectedService={selectedService} 
          onResetSelectedService={handleResetSelectedService} 
        />

        {/* 8. Location & Contact Concierge */}
        <LocationContact 
          onBookClick={handleBookClick} 
        />
      </main>

      {/* 9. Footer */}
      <Footer 
        onSelectCategory={() => handleExploreServices()} 
        onBookClick={handleBookClick} 
      />

      {/* 10. Scroll-to-Top Control */}
      <BackToTop />
    </div>
  );
}
