import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main>
      

<section className="page-hero">
  <div className="wrap">
    <div className="eyebrow">About Me</div>
    <h1>The person behind the automation</h1>
    <p>A closer look at my background, skills, and how I approach every project.</p>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="about-grid" data-reveal style={{"marginBottom":"100px"}}>
      <div className="about-photo-wrap">
        <img src="profile.jpeg" alt="Iqra — Automation Engineer & Frontend Developer" className="about-photo"  />
        {/*  <div className="about-badge"><span className="dot"></span> Available for work</div>  */}
      </div>
      <div className="about-text">
        <h2>Hi, I'm Iqra 👋</h2>
        <p>I'm a results-driven Automation Engineer and Frontend Developer with 2+ years of hands-on experience specializing in business process automation through Microsoft Power Platform, Power Automate, and Make.com.</p>
        <p>I architect cloud and desktop flows (RPA), manage complex API integrations, and build them with robust error handling — reducing manual workloads and streamlining operations for the teams I work with.</p>
        <p>Alongside automation, I build responsive, pixel-perfect web applications using React and PCF — combining intelligent automation with modern frontend craft to drive real organizational efficiency.</p>
        <p>I'm passionate about leveraging intelligent automation and modern frontend technologies to drive organizational efficiency — one workflow, one interface at a time.</p>
        <div className="about-tools">
          <span className="tool-chip">Power Automate</span>
          <span className="tool-chip">Power Platform</span>
          <span className="tool-chip">Make.com</span>
          <span className="tool-chip">RPA</span>
          <span className="tool-chip">React</span>
          <span className="tool-chip">PCF</span>
          <span className="tool-chip">API Integrations</span>
        </div>
      </div>
    </div>

    <div className="section-head" data-reveal>
      <div className="eyebrow">Why Work With Me</div>
      <h2>Efficiency-Focused, Detail-Obsessed</h2>
    </div>
    <div className="value-grid">
      <div className="value-item" data-reveal>
        <div className="value-num">1</div>
        <h3>Less Manual Work</h3>
        <p>Automation flows designed to remove repetitive tasks from your team's plate.</p>
      </div>
      <div className="value-item" data-reveal>
        <div className="value-num">2</div>
        <h3>Pixel-Perfect Frontend</h3>
        <p>Interfaces built to match design specs exactly, responsive on every screen.</p>
      </div>
      <div className="value-item" data-reveal>
        <div className="value-num">3</div>
        <h3>End-to-End Reliability</h3>
        <p>Robust error handling in every flow and integration, so things don't silently break.</p>
      </div>
    </div>
  </div>
</section>

<section className="cta-banner" data-reveal>
  <h2>Let's automate your workflow.</h2>
  <p>Have a process that needs streamlining, or a frontend that needs polish? Let's talk.</p>
  <a href="/contact" className="btn-white">Get In Touch</a>
</section>


    </main>
  );
}
