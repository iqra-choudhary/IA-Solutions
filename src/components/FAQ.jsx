"use client";

import { useState } from 'react';

const faqData = {
  general: [
    { q: "What services do you offer?", a: "I offer end-to-end business process automation using Power Automate, Make.com, and RPA, along with responsive React and PCF frontend development." },
    { q: "How do I get started working with you?", a: "Just reach out through the contact form or a free consultation call. We'll discuss your workflow or project, and I'll map out a clear plan before any work begins." },
    { q: "Do you work with businesses of any size?", a: "Yes — from solo founders automating a single process to growing teams needing multiple connected systems, the approach scales to fit your needs." },
    { q: "Can we work together remotely?", a: "Absolutely. All work, communication, and delivery happens remotely — calls, messages, and shared files, wherever you're based." },
  ],
  automation: [
    { q: "How quickly can automation be set up?", a: "Most workflows are designed, tested, and deployed within one to two weeks, depending on how many systems need to connect." },
    { q: "Do I need to change my existing tools?", a: "No — automations are built around the tools you already use, connecting them rather than replacing them." },
    { q: "What happens if a flow breaks after launch?", a: "Every flow includes error handling, and support is available afterward to fix and refine anything that needs adjusting." },
    { q: "Which platforms do you automate?", a: "Power Automate, Power Platform, Make.com, and RPA for desktop-based or legacy systems are all covered." },
  ],
  web: [
    { q: "Do you build fully responsive websites?", a: "Yes — every site is built to work smoothly across desktop, tablet, and mobile from the start." },
    { q: "Can you convert my Figma design into code?", a: "Yes, pixel-perfect Figma-to-code conversion is one of the core frontend services offered." },
    { q: "Do you build custom PCF components for Power Apps?", a: "Yes — custom Power Apps Component Framework controls tailored to your app's exact workflow and data." },
  ],
  pricing: [
    { q: "How is pricing determined?", a: "Pricing depends on project scope — number of workflows, systems involved, and frontend complexity. A clear quote is shared after the initial discovery call." },
    { q: "What's your typical project timeline?", a: "Smaller automations or single-page builds typically take one to two weeks; larger projects are scoped and timelined individually." },
    { q: "Do you require payment upfront?", a: "A partial deposit is required to begin work, with the remaining balance due on delivery." },
  ],
  support: [
    { q: "Do you offer ongoing support after delivery?", a: "Yes — post-launch support is available to fix issues, adjust flows, or make small updates as your needs change." },
    { q: "How can I reach you for urgent issues?", a: "Through email or the contact form — urgent issues are prioritized and responded to as quickly as possible." },
    { q: "Do you provide documentation for automations?", a: "Yes, every deployed workflow includes documentation so you understand exactly how it runs and where to check logs." },
  ]
};

const categories = [
  { id: 'general', label: 'General Questions' },
  { id: 'automation', label: 'Automation & Workflows' },
  { id: 'web', label: 'Web Development' },
  { id: 'pricing', label: 'Pricing & Process' },
  { id: 'support', label: 'Support' },
];

export default function FAQ() {
  const [activeCat, setActiveCat] = useState('general');
  const [activeItem, setActiveItem] = useState(0);

  const handleCatClick = (catId) => {
    setActiveCat(catId);
    setActiveItem(0);
  };

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-bg-dots">
        <span className="fd fd1"></span><span className="fd fd2"></span><span className="fd fd3"></span><span className="fd fd4"></span>
      </div>
      <div className="wrap">
        <div className="faq-glass">
          <div className="section-head" data-reveal>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before we start automating your workflows and building your web presence.</p>
          </div>

          <div className="faq-layout" data-reveal>
            <div className="faq-categories">
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  className={`faq-cat ${activeCat === cat.id ? 'active' : ''}`}
                  onClick={() => handleCatClick(cat.id)}
                >
                  {cat.label} <span>&rsaquo;</span>
                </button>
              ))}
            </div>

            <div className="faq-questions">
              <div className="faq-panel active">
                {faqData[activeCat].map((item, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${activeItem === index ? 'active' : ''}`}
                  >
                    <div className="faq-q" onClick={() => handleItemClick(index)}>
                      <h4>{item.q}</h4>
                      <span className="faq-toggle">{activeItem === index ? '−' : '+'}</span>
                    </div>
                    <div className="faq-a" style={{ maxHeight: activeItem === index ? '500px' : '0' }}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
