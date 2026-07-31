import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      

<section className="page-hero">
  <div className="wrap">
    <div className="eyebrow">Get In Touch</div>
    <h1>Let's Talk</h1>
    <p>Have a process that needs automating, or a frontend that needs polish? Send a message.</p>
  </div>
</section>

<section className="section">
  <div className="wrap contact-grid">
    <div data-reveal>
      <h2 style={{"fontSize":"26px","marginBottom":"24px"}}>Contact Information</h2>

      <div className="contact-info-item">
        <div className="skill-icon">✉️</div>
        <div><h4>Email</h4><p><a href="mailto:hello@iasolutions.com">hello@iasolutions.com</a></p></div>
      </div>
      <div className="contact-info-item">
        <div className="skill-icon">💼</div>
        <div><h4>LinkedIn</h4><p><a href="https://www.linkedin.com/in/iqra" target="_blank" rel="noopener noreferrer">linkedin.com/in/iqra</a></p></div>
      </div>
      <div className="contact-info-item">
        <div className="skill-icon">📍</div>
        <div><h4>Location</h4><p>Multan, Punjab, Pakistan</p></div>
      </div>
      <div className="contact-info-item">
        <div className="skill-icon">🕐</div>
        <div><h4>Availability</h4><p>Open to freelance & full-time opportunities</p></div>
      </div>
    </div>

<form className="contact-form" id="contact-form" data-reveal action="mailto:hello@iasolutions.com" method="post" enctype="text/plain">
      <div className="form-field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" autocomplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Your Email</label>
        <input id="email" name="email" type="email" autocomplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" />
      </div>
      <div className="form-field">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div className="form-actions">
        <button type="submit">Send Message</button>
        <button type="button" className="btn-secondary gmail-open-btn">Send via Gmail</button>
      </div>
      <p className="form-status" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>


    </main>
  );
}
