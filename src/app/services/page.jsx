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
  <div className="wrap">
    <div className="section-head text-center" data-reveal style={{ marginBottom: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="eyebrow" style={{ justifyContent: "center" }}><span style={{color: 'var(--pink)', marginRight: '8px'}}>•</span> WHAT WE OFFER</div>
      <h2 style={{ fontSize: "42px", letterSpacing: "-1px" }}>Our Core <span>Services</span></h2>
      <p style={{ maxWidth: "600px", margin: "16px auto 0", fontSize: "18px", color: "var(--text-soft)" }}>Custom automation flows and frontend solutions designed precisely for the way you work.</p>
    </div>
    <div className="sg-v3">
      
      {/* Service 1 */}
      <div className="sc-v3" data-reveal>
        <div className="sc-v3-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop')"}}>
          <div className="sc-v3-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        </div>
        <div className="sc-v3-content">
          <h3>Power Automate & Power Platform</h3>
          <p>End-to-end business process automation built on Microsoft's Power Platform — connecting your everyday tools so information moves without manual handling.</p>
          <div className="sc-v3-tags">
            <span>Power Automate</span>
            <span>SharePoint</span>
            <span>Teams</span>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="sc-v3" data-reveal>
        <div className="sc-v3-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop')"}}>
          <div className="sc-v3-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        </div>
        <div className="sc-v3-content">
          <h3>RPA — Cloud & Desktop Flows</h3>
          <p>Architecting robotic process automation that handles repetitive tasks end-to-end, so your team can focus on higher-value work.</p>
          <div className="sc-v3-tags">
            <span>Desktop Flows</span>
            <span>Cloud Flows</span>
            <span>Automation</span>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="sc-v3" data-reveal>
        <div className="sc-v3-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop')"}}>
          <div className="sc-v3-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20 20 4"/></svg></div>
        </div>
        <div className="sc-v3-content">
          <h3>API Integrations</h3>
          <p>Connecting systems that don't naturally talk to each other, with reliability built in from the start.</p>
          <div className="sc-v3-tags">
            <span>REST API</span>
            <span>Webhooks</span>
            <span>Security</span>
          </div>
        </div>
      </div>

      {/* Service 4 */}
      <div className="sc-v3" data-reveal>
        <div className="sc-v3-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=600&auto=format&fit=crop')"}}>
          <div className="sc-v3-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div>
        </div>
        <div className="sc-v3-content">
          <h3>Make.com Automation</h3>
          <p>Visual, scenario-based automations for teams that want flexibility without heavy custom code.</p>
          <div className="sc-v3-tags">
            <span>Scenarios</span>
            <span>Integrations</span>
            <span>Make.com</span>
          </div>
        </div>
      </div>

      {/* Service 5 */}
      <div className="sc-v3" data-reveal>
        <div className="sc-v3-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop')"}}>
          <div className="sc-v3-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
        </div>
        <div className="sc-v3-content">
          <h3>React Development</h3>
          <p>Responsive, maintainable web applications built with clean React code and modern best practices.</p>
          <div className="sc-v3-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>Frontend</span>
          </div>
        </div>
      </div>

      {/* Service 6 */}
      <div className="sc-v3" data-reveal>
        <div className="sc-v3-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop')"}}>
          <div className="sc-v3-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        </div>
        <div className="sc-v3-content">
          <h3>PCF Component Development</h3>
          <p>Custom Power Apps Component Framework controls, tailored to your app's exact needs and workflows.</p>
          <div className="sc-v3-tags">
            <span>PCF</span>
            <span>Power Apps</span>
            <span>Custom UI</span>
          </div>
        </div>
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
