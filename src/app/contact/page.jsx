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
        <div><h4>Email</h4><p><a href="mailto:iqzyy26@gmail.com">iqzyy26@gmail.com</a></p></div>
      </div>
      <div className="contact-info-item">
        <div className="skill-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEX///8AZsgAY8cAWcQAUcNQftDc5/bQ3fIAX8YAYcfF0u22x+kAXMXo7/hBeM3l7fgAVsTw9ftRhdK8y+q7z+x/pd1eitMzcstKgdD4+v2NruDX4vOPq99vl9cYasmtwuekvOWdtOIAS8H+tdAKAAAEJUlEQVR4nO2b2WKqMBCGNdCyGFbBgALqef+HPOJGIGpNZtBczH/X1JaPOMyWYbEgkUgkEolEIpFIJBKJRCItssQL12eFXpJ9m+akqCg3P6Jj3DmJs078bMoi+iJQFjbCTTljbHnX6QeeuqIJv7Njv2XscwlHFuN+XP5+HKnI02dEN640Lz6LFPvBK6KLAj/+HJZXpS83SdqutPI+glS3wRu7dN+toK3nZ1oL/j5SLy7WMyPVW+fNb24Qc7azblaWO7pIvZx8Rq/lCd+Eabn0xWz2vmOGTCcqtpuHKQy0zWkQC8I5mHYQpp5qhr3yGIipD9XodpWZ2vggXyA/g3UuMQV96mRCleP6q+3gn5hb7cNVyQ2wnC0m03pg8sU1TyoN/KiDGHFqcTdyJpLbaqm/V0zgfYHtcHlXyidz/eeRt1hM3pCqsFhaL1JtqGWA5ReqAco5SOu1gVUFFQ6TvCHOSvpF1ulDLVOcDDmWTMfZy1Am/nRkAMYq5Ev7sqHuXAOopY+xVfkoI3elUNEaRZ4ghzP9jh8xaasKwwidwqvUqYvkt+qk8A2heAllyuLppXl8iLLM2xinMiyGZguhajfMcbnjatR+U/nQJLQxyVH+EG+AUAKYbz4SEzCmyMQVsYCf9OI5cGFdNTXmpu5dbLJwMT/udm1zPDatcJ81i4ChRsmZUi9Krsp+2PkCt4Wod6a8K3dXn1EnzZO+A9ApbKb3KudTZyh3yEVKztImkf88Kh82jdgGwnTZjLehUrU6D7sHvoP9QDxVojx8L6G6BwbsdepeSTm1gTwlY3oFdXwY1HYP8tMOkn+Gyl2+gnrynbSqtTOIT18r/+8V1BMlaoLKIaXWWsnCDaAWrWLroPoPBypRwsLHoYrjdj95Cr+8U1Hrppw7/6pRM0rJm2FQmoYeVde7CEYtssP03jgk+Om5hFORcb8J1kkOYjWFArkEPec5qrm4VLYqUCDnqRdmRs++L2UCUyhYmNELyLXchgmkTECBAgVkvdQlkisfVg2tKAUKlLqoSR4KFDDJU9JhFChgOqwUDihQwMJBKbHehgryp1DQEkspRjGgwMXotGzHgAKX7dMGBwIUvMExdQoIUPBW0LRphgCF0DSbthfBUBjtxXEjFgEKpRE7alnDoXBa1uNQA4ZCau7LxyA6UMMHJSisYxD5wEgD6nE+hXeQ/ORozQAK72hNPoSEQWEeQkr1nwo11FJ/Q2Ee10oH284+vMk7MziH+8JKDEynPPy+HjZXV4d7sC2NAJxnJy9ik4VxlGTDB69/iz0CYOWwhJ1jJXYO4Ng5qmTnUJed4292DgraOVK5sHL4dKE9pss+Maa7sHKguZeFo99nLPuG5HtZ+DpBLwtfvLjIuldUbupf5in6d3kKS17mIZFIJBKJRCKRSCQSiUT6uv4D8AhGSjED9VoAAAAASUVORK5CYII=" alt="LinkedIn Icon" width="24" height="24" style={{ borderRadius: "50%" }} />
        </div>
        <div><h4>LinkedIn</h4><p><a href="https://www.linkedin.com/in/iqra-ahsan-dev" target="_blank" rel="noopener noreferrer">linkedin.com/in/iqra-ahsan-dev</a></p></div>
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

<form className="contact-form" id="contact-form" data-reveal action="mailto:iqzyy26@gmail.com" method="post" enctype="text/plain">
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
