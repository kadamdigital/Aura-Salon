import React from 'react';
import { UserCheck, Award, Feather, Coffee } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      icon: UserCheck,
      title: "Personalised Consultations",
      desc: "Every cut, colour, or skincare treatment begins with a dedicated consultation honoring your unique hair texture, skin needs, and aesthetic vision."
    },
    {
      icon: Award,
      number: "02",
      title: "Skilled Beauty Professionals",
      desc: "Experienced stylists and aestheticians trained in precision techniques, dimensional colouring, and gentle grooming methodologies."
    },
    {
      icon: Feather,
      number: "03",
      title: "Thoughtful Product Selection",
      desc: "Formulations chosen with intention—dermatologically gentle, richly nourishing, and free from unnecessary harsh additives."
    },
    {
      icon: Coffee,
      number: "04",
      title: "Comfort-First Experience",
      desc: "A soothing sanctuary with warm lighting, serene ambient sound, and considerate hospitality designed to let you completely unwind."
    }
  ];

  return (
    <section className="section section-dark why-choose-section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            <span className="eyebrow-line" style={{ backgroundColor: 'var(--color-gold)' }} aria-hidden="true" />
            <span>THE AURA STANDARD</span>
          </div>
          <h2>Why Choose AURA SALON</h2>
          <p className="section-subtitle">
            Subtle craftsmanship, honest care, and an uncompromising dedication to your personal comfort.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.number} className="benefit-card">
                <div className="benefit-top">
                  <span className="benefit-number">{benefit.number}</span>
                  <div className="benefit-icon-wrapper" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
