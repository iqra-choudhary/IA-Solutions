import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <main>
      

<section className="page-hero">
  <div className="wrap">
    <div className="eyebrow">What I Do</div>
    <h1>Automation & Frontend, Under One Roof</h1>
    <p>From cloud flows to pixel-perfect UIs — a full toolkit to make your operations faster and your products sharper.</p>
  </div>
</section>

<section className="section">
  <div className="wrap" style={{"maxWidth":"820px"}}>

    <div className="service-detail" data-reveal>
      <div className="skill-icon">⚡</div>
      <div>
        <h3>Power Automate & Power Platform</h3>
        <p>End-to-end business process automation built on Microsoft's Power Platform — connecting your everyday tools so information moves without manual handling.</p>
        <ul>
          <li>Approval flows and notification systems</li>
          <li>Data sync across apps (SharePoint, Excel, Outlook, Teams)</li>
          <li>Custom triggers and scheduled automations</li>
        </ul>
      </div>
    </div>

    <div className="service-detail" data-reveal>
      <div className="skill-icon">🤖</div>
      <div>
        <h3>RPA — Cloud & Desktop Flows</h3>
        <p>Architecting robotic process automation that handles repetitive tasks end-to-end, so your team can focus on higher-value work.</p>
        <ul>
          <li>Desktop flow automation for legacy or non-API systems</li>
          <li>Cloud flow orchestration for scalable automation</li>
          <li>Scheduled, unattended task execution</li>
        </ul>
      </div>
    </div>

    <div className="service-detail" data-reveal>
      <div className="skill-icon">🔗</div>
      <div>
        <h3>API Integrations</h3>
        <p>Connecting systems that don't naturally talk to each other, with reliability built in from the start.</p>
        <ul>
          <li>REST API integrations across platforms</li>
          <li>Robust error handling and retry logic</li>
          <li>Secure authentication and data handling</li>
        </ul>
      </div>
    </div>

    <div className="service-detail" data-reveal>
      <div className="skill-icon">🛠️</div>
      <div>
        <h3>Make.com Automation</h3>
        <p>Visual, scenario-based automations for teams that want flexibility without heavy custom code.</p>
        <ul>
          <li>Multi-step scenario building</li>
          <li>Third-party app connections</li>
          <li>Error-handling routes and filters</li>
        </ul>
      </div>
    </div>

    <div className="service-detail" data-reveal>
      <div className="skill-icon">💻</div>
      <div>
        <h3>React Development</h3>
        <p>Responsive, maintainable web applications built with clean React code and modern best practices.</p>
        <ul>
          <li>Component-based, reusable UI architecture</li>
          <li>Pixel-perfect Figma-to-code conversion</li>
          <li>Fully responsive across devices</li>
        </ul>
      </div>
    </div>

    <div className="service-detail" data-reveal>
      <div className="skill-icon">🧩</div>
      <div>
        <h3>PCF Component Development</h3>
        <p>Custom Power Apps Component Framework controls, tailored to your app's exact needs and workflows.</p>
        <ul>
          <li>Custom UI controls for Power Apps / Dynamics</li>
          <li>Seamless data-binding integration</li>
          <li>Themed, brand-consistent components</li>
        </ul>
      </div>
    </div>

  </div>
</section>

<section className="cta-banner" data-reveal>
  <h2>Have a process that needs automating?</h2>
  <p>Let's talk about which service fits your workflow best.</p>
  <a href="/contact" className="btn-white">Get In Touch</a>
</section>


    </main>
  );
}
