import Link from "next/link";
import Image from "next/image";
import CalendlyButton from "./CalendlyButton";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="wrap footer-grid">
        {/* Brand Column */}
        <div className="footer-col footer-brand">
          <Link href="/" className="logo">
            <Image
              src="/logo.jpg"
              alt="IA Solutions logo"
              width={100}
              height={32}
              style={{
                height: "32px",
                width: "auto",
                background: "#fff",
                borderRadius: "8px",
                padding: "4px 8px",
              }}
            />
          </Link>
          <div className="brand-slogan">
            <h3>We automate the work.</h3>
            <h3>You run the business.</h3>
          </div>
          <p className="brand-desc">
            Custom automation solutions for businesses ready to stop wasting time on manual tasks.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/iqra-choudhary" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/iqra-ahsan-dev" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEX///8AZsgAY8cAWcQAUcNQftDc5/bQ3fIAX8YAYcfF0u22x+kAXMXo7/hBeM3l7fgAVsTw9ftRhdK8y+q7z+x/pd1eitMzcstKgdD4+v2NruDX4vOPq99vl9cYasmtwuekvOWdtOIAS8H+tdAKAAAEJUlEQVR4nO2b2WKqMBCGNdCyGFbBgALqef+HPOJGIGpNZtBczH/X1JaPOMyWYbEgkUgkEolEIpFIJBKJRCItssQL12eFXpJ9m+akqCg3P6Jj3DmJs078bMoi+iJQFjbCTTljbHnX6QeeuqIJv7Njv2XscwlHFuN+XP5+HKnI02dEN640Lz6LFPvBK6KLAj/+HJZXpS83SdqutPI+glS3wRu7dN+toK3nZ1oL/j5SLy7WMyPVW+fNb24Qc7azblaWO7pIvZx8Rq/lCd+Eabn0xWz2vmOGTCcqtpuHKQy0zWkQC8I5mHYQpp5qhr3yGIipD9XodpWZ2vggXyA/g3UuMQV96mRCleP6q+3gn5hb7cNVyQ2wnC0m03pg8sU1TyoN/KiDGHFqcTdyJpLbaqm/V0zgfYHtcHlXyidz/eeRt1hM3pCqsFhaL1JtqGWA5ReqAco5SOu1gVUFFQ6TvCHOSvpF1ulDLVOcDDmWTMfZy1Am/nRkAMYq5Ev7sqHuXAOopY+xVfkoI3elUNEaRZ4ghzP9jh8xaasKwwidwqvUqYvkt+qk8A2heAllyuLppXl8iLLM2xinMiyGZguhajfMcbnjatR+U/nQJLQxyVH+EG+AUAKYbz4SEzCmyMQVsYCf9OI5cGFdNTXmpu5dbLJwMT/udm1zPDatcJ81i4ChRsmZUi9Krsp+2PkCt4Wod6a8K3dXn1EnzZO+A9ApbKb3KudTZyh3yEVKztImkf88Kh82jdgGwnTZjLehUrU6D7sHvoP9QDxVojx8L6G6BwbsdepeSTm1gTwlY3oFdXwY1HYP8tMOkn+Gyl2+gnrynbSqtTOIT18r/+8V1BMlaoLKIaXWWsnCDaAWrWLroPoPBypRwsLHoYrjdj95Cr+8U1Hrppw7/6pRM0rJm2FQmoYeVde7CEYtssP03jgk+Om5hFORcb8J1kkOYjWFArkEPec5qrm4VLYqUCDnqRdmRs++L2UCUyhYmNELyLXchgmkTECBAgVkvdQlkisfVg2tKAUKlLqoSR4KFDDJU9JhFChgOqwUDihQwMJBKbHehgryp1DQEkspRjGgwMXotGzHgAKX7dMGBwIUvMExdQoIUPBW0LRphgCF0DSbthfBUBjtxXEjFgEKpRE7alnDoXBa1uNQA4ZCau7LxyA6UMMHJSisYxD5wEgD6nE+hXeQ/ORozQAK72hNPoSEQWEeQkr1nwo11FJ/Q2Ee10oH284+vMk7MziH+8JKDEynPPy+HjZXV4d7sC2NAJxnJy9ik4VxlGTDB69/iz0CYOWwhJ1jJXYO4Ng5qmTnUJed4292DgraOVK5sHL4dKE9pss+Maa7sHKguZeFo99nLPuG5HtZ+DpBLwtfvLjIuldUbupf5in6d3kKS17mIZFIJBKJRCKRSCQSiUT6uv4D8AhGSjED9VoAAAAASUVORK5CYII=" alt="LinkedIn Icon" width="20" height="20" style={{ borderRadius: "50%" }} />
            </a>
          </div>
          <CalendlyButton className="nav-cta" style={{ display: 'inline-flex', marginTop: '10px', width: 'fit-content' }}>Book Free Consultation</CalendlyButton>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h4 className="footer-heading">SERVICES</h4>
          <div className="footer-links-list">
            <Link href="/services">Business Process Automation</Link>
            <Link href="/services">Robotic Process Automation</Link>
            <Link href="/services">API & Webhook Integration</Link>
            <Link href="/services">CRM Automation</Link>
            <Link href="/services">Web & Mobile Development</Link>
          </div>
        </div>

        {/* Company Column */}
        <div className="footer-col">
          <h4 className="footer-heading">PAGES</h4>
          <div className="footer-links-list">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-heading">CONTACT</h4>
          <div className="footer-links-list">
            <a href="mailto:iqzyy26@gmail.com">iqzyy26@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        &copy; {new Date().getFullYear()} IA Solutions. All rights reserved.
      </div>
    </footer>
  );
}
