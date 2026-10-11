import React from 'react';
import { Sparkles, HeartHandshake, Scissors, ShieldCheck, Armchair } from 'lucide-react';

export default function SignatureExperience() {
  const experiencePillars = [
    {
      icon: HeartHandshake,
      title: "Personalised Consultations",
      desc: "Every appointment opens with an unhurried discussion exploring your lifestyle, daily routine, hair texture, and preferred maintenance level."
    },
    {
      icon: Scissors,
      title: "Professional Stylists",
      desc: "Our team brings years of studio mastery, continuous technique refinement, and an intuitive eye for natural harmony."
    },
    {
      icon: Sparkles,
      title: "Carefully Selected Products",
      desc: "We utilise nourishing, dermatologically gentle formulations and high-performance botanicals chosen to respect scalp and strand integrity."
    },
    {
      icon: Armchair,
      title: "Clean & Comfortable Surroundings",
      desc: "Quiet acoustics, ergonomic Italian leather styling chairs, and immaculate hygiene standards create a calm retreat from urban bustle."
    },
    {
      icon: ShieldCheck,
      title: "Tailored to Your Preferences",
      desc: "Whether you seek an expressive seasonal transformation or dependable quiet maintenance, your session is adapted specifically to you."
    }
  ];

  return (
    <section id="story" className="section section-white experience-section">
      <div className="container">
        <div className="experience-layout">
          {/* Visual Column: Editorial Photography Pair */}
          <div className="experience-visuals">
            <div className="experience-image-large">
              <img 
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85" 
                alt="Client enjoying a restorative scalp rinse and hair spa experience" 
                loading="lazy"
              />
              <div className="experience-caption-badge">
                <span className="caption-tag">UNHURRIED LUXURY</span>
                <span className="caption-sub">Designed for mindful unwinding</span>
              </div>
            </div>

            <div className="experience-image-small">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=85" 
                alt="Aesthetic styling stations with warm neutral tones" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="experience-content">
            <div className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              <span>THE AURA PHILOSOPHY</span>
            </div>

            <h2 className="experience-title">Your Moment of Self-Care</h2>

            <p className="experience-lead">
              We believe a salon visit should be more than an aesthetic routine—it is a restorative pause in your week. At AURA SALON, modern luxury is expressed through genuine attentiveness, unhurried care, and spaces that feel warm and welcoming.
            </p>

            <div className="experience-pillars-list">
              {experiencePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="pillar-item">
                    <div className="pillar-icon-box" aria-hidden="true">
                      <IconComponent size={20} />
                    </div>
                    <div className="pillar-text">
                      <h3 className="pillar-title">{pillar.title}</h3>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
