import Link from "next/link";
import Image from "next/image";
import CalendlyButton from "@/components/CalendlyButton";

export default function About() {
  return (
    <main>
      

<section className="page-hero">
  <div className="wrap">
    <div className="eyebrow">About Me</div>
    <h1>The person behind the <span>automation</span></h1>
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
        <h2>Hi, I'm <span>Iqra</span> 👋</h2>
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
      <h2>Why Work With <span>Me</span></h2>
    </div>
    <div className="value-grid">
      <div className="value-item" data-reveal>
        <div className="value-num">1</div>
        <h3>Automating the Boring Stuff</h3>
        <p>I build smart workflows that handle repetitive daily tasks, freeing up your team.</p>
        <ul className="value-list">
          <li>Automated data entry & syncing</li>
          <li>Instant email & Teams notifications</li>
          <li>Approval routing & document generation</li>
        </ul>
      </div>
      <div className="value-item" data-reveal>
        <div className="value-num">2</div>
        <h3>Beautiful, Fast Interfaces</h3>
        <p>Internal tools shouldn't be hard to use. I create modern web apps that feel incredibly fast.</p>
        <ul className="value-list">
          <li>Responsive React dashboards</li>
          <li>Custom PCF components</li>
          <li>Pixel-perfect UI implementations</li>
        </ul>
      </div>
      <div className="value-item" data-reveal>
        <div className="value-num">3</div>
        <h3>Systems You Can Trust</h3>
        <p>I don't just connect apps and hope for the best. I build rock-solid systems.</p>
        <ul className="value-list">
          <li>Robust error handling & retries</li>
          <li>Seamless API connections</li>
          <li>24/7 reliable data synchronization</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="cta-banner" data-reveal>
  <h2>Let's automate your workflow.</h2>
  <p>Have a process that needs streamlining, or a frontend that needs polish? Let's talk.</p>
  <CalendlyButton className="btn-white">Get In Touch</CalendlyButton>
</section>


    </main>
  );
}
