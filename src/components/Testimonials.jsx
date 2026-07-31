"use client";

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Operations Manager",
    text: "Iqra automated our entire approval process — what used to take days now takes hours. Extremely reliable and quick to respond.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 2,
    name: "Hamza Raza",
    role: "Product Lead",
    text: "Great attention to detail on the frontend work. The design matched our Figma files pixel for pixel, and it was fully responsive too.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 3,
    name: "Sara Ahmed",
    role: "Business Analyst",
    text: "The PCF component she built for our Power Apps project worked flawlessly on the first delivery. Professional and easy to work with.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 4,
    name: "John Davis",
    role: "CEO, TechFlow",
    text: "The Make.com automations completely transformed how we route our incoming leads. It runs silently in the background and has never failed us.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 5,
    name: "Elena Rostova",
    role: "E-commerce Director",
    text: "We needed a custom Shopify build with a very complex inventory sync. Iqra delivered exactly what we needed, on time and with zero bugs.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 6,
    name: "Michael Chang",
    role: "VP of Engineering",
    text: "Her RPA solutions bridged a huge gap between our legacy desktop software and our modern cloud CRM. It saved our team countless hours of data entry.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500); // Faster autoplay
    return () => clearInterval(timer);
  }, [currentIndex]); // Timer resets when index manually changed

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section carousel-single-section">
      <div className="wrap">
        <div className="section-head text-center" data-reveal style={{marginBottom: "60px"}}>
          <div className="eyebrow" style={{justifyContent: "center", color: "#000", borderColor: "rgba(0,0,0,0.1)", background: "rgba(0,0,0,0.03)"}}>TESTIMONIALS</div>
          <h2 style={{fontSize: "48px", letterSpacing: "-2px", color: "#000", fontWeight: "900"}}>What People Say</h2>
        </div>

        <div className="carousel-single-wrapper">
          <button className="c-arrow c-prev" onClick={handlePrev}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="c-card-container">
            {testimonials.map((t, i) => (
              <div 
                key={t.id} 
                className={`c-card ${i === currentIndex ? 'active' : ''}`}
              >
                <div className="c-card-inner">
                  <div className="c-quote-mark">“</div>
                  <p className="c-text">"{t.text}"</p>
                  <div className="c-author">
                    <img src={t.image} alt={t.name} />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="c-arrow c-next" onClick={handleNext}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="c-dots">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              aria-label={`Go to slide ${i + 1}`}
              className={`c-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
