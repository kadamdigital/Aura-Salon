import React, { useState, useEffect } from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { SALON_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export default function BookingForm({ selectedService, onResetSelectedService }) {
  // Today's date in YYYY-MM-DD format to prevent past date selection
  const todayDateString = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceId: '',
    date: todayDateString,
    time: SALON_CONFIG.timeSlots[0] || '11:00 AM',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showWhatsAppNoticeModal, setShowWhatsAppNoticeModal] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  // Sync selectedService prop into form state
  useEffect(() => {
    if (selectedService && selectedService.id) {
      setFormData((prev) => ({
        ...prev,
        serviceId: selectedService.id
      }));
      // Clear error on service if it existed
      setErrors((prev) => ({ ...prev, serviceId: null }));
    }
  }, [selectedService]);

  // Indian phone validation
  const validatePhone = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/[\s\-()]/g, '');
    // Matches 10 digits starting with 6-9, or 12 digits starting with 91 and next digit 6-9
    const regex = /^(?:(?:\+|0{0,2})91)?[6-9]\d{9}$/;
    return regex.test(cleaned);
  };

  const validateEmail = (emailStr) => {
    if (!emailStr.trim()) return true; // optional
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailStr.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation clearance
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number (e.g. 98200 12345).';
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address or leave it blank.';
    }

    if (!formData.serviceId) {
      newErrors.serviceId = 'Please select a preferred salon service.';
    }

    if (!formData.date) {
      newErrors.date = 'Please pick an appointment date.';
    } else if (formData.date < todayDateString) {
      newErrors.date = 'Appointment date cannot be in the past.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select your preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const chosenServiceObj = SALON_SERVICES.find((s) => s.id === formData.serviceId);

    const submission = {
      ...formData,
      serviceName: chosenServiceObj ? chosenServiceObj.name : 'Consultation',
      servicePrice: chosenServiceObj ? chosenServiceObj.price : 'Custom',
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setSubmittedData(submission);
    setShowConfirmationModal(true);
  };

  // Generate formatted WhatsApp message text
  const generateWhatsAppMessage = () => {
    const chosenServiceObj = SALON_SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = chosenServiceObj ? chosenServiceObj.name : (formData.serviceId || 'General Consultation');
    const guestName = formData.fullName.trim() || 'Valued Guest';

    return (
      `Hello ${SALON_CONFIG.brandName},\n\n` +
      `I would like to request an appointment:\n` +
      `• Guest Name: ${guestName}\n` +
      `• Preferred Service: ${serviceName}\n` +
      `• Preferred Date: ${formData.date}\n` +
      `• Preferred Time: ${formData.time}\n` +
      (formData.notes ? `• Special Requests: ${formData.notes.trim()}\n` : '') +
      `\nPlease let me know your availability.`
    );
  };

  const handleWhatsAppClick = () => {
    // If WhatsApp number is configured, open directly
    if (SALON_CONFIG.whatsappNumber && SALON_CONFIG.whatsappNumber.trim() !== '') {
      const msg = encodeURIComponent(generateWhatsAppMessage());
      const cleanNum = SALON_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${cleanNum}?text=${msg}`, '_blank', 'noopener,noreferrer');
    } else {
      // Show informative demonstration modal
      setShowWhatsAppNoticeModal(true);
    }
  };

  const handleCopyMessage = () => {
    const msg = generateWhatsAppMessage();
    navigator.clipboard.writeText(msg).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    });
  };

  const selectedServiceObj = SALON_SERVICES.find((s) => s.id === formData.serviceId);

  return (
    <section id="booking" className="section section-white booking-section">
      <div className="container">
        <div className="booking-layout">
          {/* Left Column: Brand Invitation & Contact Context */}
          <div className="booking-context">
            <div className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              <span>RESERVATIONS</span>
            </div>
            <h2>Begin Your Transformation</h2>
            <p className="booking-lead">
              Reserve your visit with our senior stylists and aestheticians. We prepare each bay in advance to ensure an unhurried, comfortable experience.
            </p>

            <div className="booking-highlights">
              <div className="booking-highlight-item">
                <span className="highlight-bullet" aria-hidden="true">✓</span>
                <div>
                  <strong>Complimentary Consultation</strong>
                  <p>A 10-minute diagnostic review included with every primary service.</p>
                </div>
              </div>

              <div className="booking-highlight-item">
                <span className="highlight-bullet" aria-hidden="true">✓</span>
                <div>
                  <strong>Flexible Rescheduling</strong>
                  <p>Notify us up to 4 hours in advance without any cancellation fees.</p>
                </div>
              </div>

              <div className="booking-highlight-item">
                <span className="highlight-bullet" aria-hidden="true">✓</span>
                <div>
                  <strong>Direct WhatsApp Booking</strong>
                  <p>Prefer quick text messaging? Use our direct WhatsApp concierge option below.</p>
                </div>
              </div>
            </div>

            <div className="booking-quick-card">
              <span className="quick-card-title">CONCIERGE DESK</span>
              <p className="quick-card-phone">{SALON_CONFIG.phone}</p>
              <p className="quick-card-hours">Open Daily • 10:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="booking-form-card">
            <div className="booking-form-header">
              <h3 className="form-title">Reserve an Appointment</h3>
              <p className="form-subtitle">Complete the details below or message us via WhatsApp.</p>
            </div>

            {/* Active Service Badge if preselected from service menu */}
            {selectedServiceObj && (
              <div className="selected-service-pill">
                <div className="pill-text-block">
                  <span className="pill-label">Selected Service:</span>
                  <strong className="pill-name">{selectedServiceObj.name} ({selectedServiceObj.price})</strong>
                </div>
                {onResetSelectedService && (
                  <button
                    type="button"
                    className="pill-clear-btn"
                    onClick={() => {
                      onResetSelectedService();
                      setFormData((prev) => ({ ...prev, serviceId: '' }));
                    }}
                    title="Change selected service"
                  >
                    Change
                  </button>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="appointment-form" noValidate>
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <div className="input-with-icon">
                  <User size={16} className="input-icon" aria-hidden="true" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                    required
                  />
                </div>
                {errors.fullName && <p className="error-message">{errors.fullName}</p>}
              </div>

              {/* Phone & Email Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Mobile Number (India) <span className="required-star">*</span>
                  </label>
                  <div className="input-with-icon">
                    <Phone size={16} className="input-icon" aria-hidden="true" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98200 12345"
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                      required
                    />
                  </div>
                  {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="optional-text">(Optional)</span>
                  </label>
                  <div className="input-with-icon">
                    <Mail size={16} className="input-icon" aria-hidden="true" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. priya@example.com"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                    />
                  </div>
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
              </div>

              {/* Preferred Service Dropdown */}
              <div className="form-group">
                <label htmlFor="serviceId" className="form-label">
                  Preferred Service <span className="required-star">*</span>
                </label>
                <select
                  id="serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className={`form-select ${errors.serviceId ? 'has-error' : ''}`}
                  required
                >
                  <option value="">— Select a Service from the Salon Menu —</option>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <optgroup key={cat.id} label={cat.name}>
                      {SALON_SERVICES.filter((s) => s.categoryId === cat.id).map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.price})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {errors.serviceId && <p className="error-message">{errors.serviceId}</p>}
              </div>

              {/* Preferred Date & Time Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    Preferred Date <span className="required-star">*</span>
                  </label>
                  <div className="input-with-icon">
                    <Calendar size={16} className="input-icon" aria-hidden="true" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={todayDateString}
                      value={formData.date}
                      onChange={handleChange}
                      className={`form-input ${errors.date ? 'has-error' : ''}`}
                      required
                    />
                  </div>
                  {errors.date && <p className="error-message">{errors.date}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="form-label">
                    Preferred Time <span className="required-star">*</span>
                  </label>
                  <div className="input-with-icon">
                    <Clock size={16} className="input-icon" aria-hidden="true" />
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`form-select ${errors.time ? 'has-error' : ''}`}
                      required
                    >
                      {SALON_CONFIG.timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.time && <p className="error-message">{errors.time}</p>}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="form-group">
                <label htmlFor="notes" className="form-label">
                  Special Notes or Stylist Preference <span className="optional-text">(Optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Sensitive scalp, preferred stylist, or event timing..."
                  className="form-textarea"
                />
              </div>

              {/* Primary Form Actions */}
              <div className="form-actions-stack">
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Confirm Appointment Request</span>
                </button>

                <div className="or-divider">
                  <span>or for instantaneous booking</span>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary btn-block whatsapp-cta-btn"
                  onClick={handleWhatsAppClick}
                >
                  <MessageSquare size={16} aria-hidden="true" />
                  <span>Book via WhatsApp Concierge</span>
                </button>
              </div>

              <p className="form-security-note">
                🔒 Frontend demonstration. No personal data is stored or transmitted without your consent.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && submittedData && (
        <div className="confirmation-modal-overlay" role="dialog" aria-modal="true">
          <div 
            className="confirmation-modal-backdrop" 
            onClick={() => setShowConfirmationModal(false)} 
          />
          <div className="confirmation-card">
            <div className="confirmation-icon-circle">
              <CheckCircle2 size={36} className="check-icon" />
            </div>

            <h3 className="confirmation-title">Request Received</h3>
            <p className="confirmation-subtitle">
              Thank you, <strong>{submittedData.fullName}</strong>. Your appointment request for <strong>{submittedData.serviceName}</strong> has been prepared.
            </p>

            <div className="confirmation-details-box">
              <div className="detail-row">
                <span className="detail-label">Service:</span>
                <span className="detail-val">{submittedData.serviceName} ({submittedData.servicePrice})</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Scheduled Date:</span>
                <span className="detail-val">{submittedData.date}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Time Window:</span>
                <span className="detail-val">{submittedData.time}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Mobile:</span>
                <span className="detail-val">{submittedData.phone}</span>
              </div>
              {submittedData.email && (
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-val">{submittedData.email}</span>
                </div>
              )}
            </div>

            <div className="demo-notice-alert">
              <AlertCircle size={16} className="alert-icon" />
              <p>
                <strong>Frontend Portfolio Showcase:</strong> This is an interactive frontend demonstration for Kadam Digital. No backend database has been altered. For real client deployments, this hook can be wired to Supabase, Firebase, or WhatsApp Business API.
              </p>
            </div>

            <div className="confirmation-actions">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => setShowConfirmationModal(false)}
              >
                Close Confirmation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Configuration Guidance Modal */}
      {showWhatsAppNoticeModal && (
        <div className="confirmation-modal-overlay" role="dialog" aria-modal="true">
          <div 
            className="confirmation-modal-backdrop" 
            onClick={() => setShowWhatsAppNoticeModal(false)} 
          />
          <div className="confirmation-card whatsapp-config-card">
            <div className="whatsapp-header-badge">
              <MessageSquare size={28} />
            </div>

            <h3 className="confirmation-title">WhatsApp Booking Feature</h3>
            <p className="confirmation-subtitle">
              In production, this button connects directly to your salon’s registered WhatsApp Business number with prefilled appointment parameters.
            </p>

            <div className="code-hint-box">
              <span className="code-hint-label">Configuration Location:</span>
              <code>src/config/salonConfig.js → whatsappNumber: &quot;91XXXXXXXXXX&quot;</code>
            </div>

            <div className="message-preview-container">
              <span className="preview-label">Generated WhatsApp Text:</span>
              <pre className="message-pre">{generateWhatsAppMessage()}</pre>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm copy-btn"
                onClick={handleCopyMessage}
              >
                {copiedText ? (
                  <>
                    <Check size={14} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => setShowWhatsAppNoticeModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
