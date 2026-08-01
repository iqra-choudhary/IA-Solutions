import Link from "next/link";
import Image from "next/image";
import { projects } from '@/data/projects';
import FAQ from "@/components/FAQ";
import CalendlyButton from "@/components/CalendlyButton";
// import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>


      <section className="hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Automation • Frontend • RPA</div>
            <h1>Automation That<br /><span>Works While You Sleep.</span></h1>
            <p>I architect reliable cloud & desktop automation flows — paired with clean, responsive web interfaces — so your business runs on autopilot and your team stops doing what a system can do better.</p>
            <div className="hero-btns">
              <a href="/projects" className="btn-primary">View Projects</a>
              <a href="/contact" className="btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="flow-box">
            <svg className="lines" viewBox="0 0 400 380">
              <path d="M90 50 L230 150" stroke="#D4537E" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
              <path d="M230 150 L110 260" stroke="#7F77DD" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
              <path d="M110 260 L260 320" stroke="#F0997B" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
            </svg>
            <div className="flow-node n1"><span className="dot" style={{ "background": "#7F77DD" }}></span>Power Automate Trigger</div>
            <div className="flow-node n2"><span className="dot" style={{ "background": "#D4537E" }}></span>API Integration</div>
            <div className="flow-node n3"><span className="dot" style={{ "background": "#F0997B" }}></span>RPA Desktop Flow</div>
            <div className="flow-node n4"><span className="dot" style={{ "background": "#534AB7" }}></span>React Dashboard</div>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="IA Solutions expertise">
        <div className="wrap trust-bar-grid">
          <div className="trust-bar-copy">
            <div className="eyebrow">Microsoft 365 + Automation</div>
            <h3>Modern tools I use to automate workflows and connect systems.</h3>
            <p>From SharePoint and Power Automate to Teams and React, I turn business apps into a seamless workflow ecosystem.</p>
            <div className="trust-highlights">
              <div className="trust-highlight">
                <strong>14</strong>
                <span>Core tools</span>
              </div>
              <div className="trust-highlight">
                <strong>100+</strong>
                <span>Workflow connections</span>
              </div>
            </div>
          </div>
          <div className="trust-visual light">
            <div className="trust-halo"></div>

            {/* Orbits */}
            <div className="orbit-ring ring-0"></div>
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>

            {/* Center Logo */}
            <div className="orbit-center-logo">
              <img src="/logo-icon.png" alt="IA Solutions Logo" width="65" height="65" />
            </div>

            {/* Ring 0 - 5 Tools (Inner) */}
            <div className="orbit-node" style={{ '--anim': 'orbit-0', '--duration': '20s', '--offset': '0' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/make.svg" alt="Make.com" />
                <div className="orbit-tooltip">Make.com</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-0', '--duration': '20s', '--offset': '0.2' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/n8n.svg" alt="n8n" />
                <div className="orbit-tooltip">n8n</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-0', '--duration': '20s', '--offset': '0.4' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/uipath.svg" alt="UiPath" />
                <div className="orbit-tooltip">UiPath</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-0', '--duration': '20s', '--offset': '0.6' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/api.png" alt="API" />
                <div className="orbit-tooltip">API Integrations</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-0', '--duration': '20s', '--offset': '0.8' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/zapier.svg" alt="Zapier" />
                <div className="orbit-tooltip">Zapier</div>
              </div>
            </div>

            {/* Ring 1 - 7 Tools (Middle) */}
            <div className="orbit-node" style={{ '--anim': 'orbit-1', '--duration': '35s', '--offset': '0' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/windows-10.png" alt="Microsoft 365" />
                <div className="orbit-tooltip">Microsoft 365</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-1', '--duration': '35s', '--offset': '0.142' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-teams.png" alt="Teams" />
                <div className="orbit-tooltip">Teams</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-1', '--duration': '35s', '--offset': '0.285' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-sharepoint-2019.png" alt="SharePoint" />
                <div className="orbit-tooltip">SharePoint</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-1', '--duration': '35s', '--offset': '0.428' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-excel-2019.png" alt="Excel" />
                <div className="orbit-tooltip">Excel</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-1', '--duration': '35s', '--offset': '0.571' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-word-2019.png" alt="Word" />
                <div className="orbit-tooltip">Word</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-1', '--duration': '35s', '--offset': '0.714' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-powerpoint-2019.png" alt="PowerPoint" />
                <div className="orbit-tooltip">PowerPoint</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-1', '--duration': '35s', '--offset': '0.857' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-outlook-2019.png" alt="Outlook" />
                <div className="orbit-tooltip">Outlook</div>
              </div>
            </div>

            {/* Ring 2 - 9 Tools (Outer) */}
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-onedrive-2019.png" alt="OneDrive" />
                <div className="orbit-tooltip">OneDrive</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.111' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/microsoft-onenote-2019.png" alt="OneNote" />
                <div className="orbit-tooltip">OneNote</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.222' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/react.svg" alt="React" />
                <div className="orbit-tooltip">React Native</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.333' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/nextdotjs.svg" alt="Next.js" />
                <div className="orbit-tooltip">Next.js</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.444' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/flutter.svg" alt="Flutter" />
                <div className="orbit-tooltip">Flutter</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.555' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/shopify.svg" alt="Shopify" />
                <div className="orbit-tooltip">Shopify</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.666' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://img.icons8.com/color/48/robot-2.png" alt="RPA" />
                <div className="orbit-tooltip">RPA Agents</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.777' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/github.svg" alt="GitHub" />
                <div className="orbit-tooltip">GitHub</div>
              </div>
            </div>
            <div className="orbit-node" style={{ '--anim': 'orbit-2', '--duration': '50s', '--offset': '0.888' }}>
              <div className="orbit-node-inner">
                <img className="orbit-icon-img" src="https://unpkg.com/simple-icons@v13/icons/firebase.svg" alt="Firebase" />
                <div className="orbit-tooltip">Firebase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="eyebrow">The Problem We Solve</div>
            <h2>Growing Businesses Get Stuck In The <span>Same Traps</span></h2>
            <p>Manual work quietly eats hours every week — until it's automated away.</p>
          </div>
          <div className="modern-problem-list">
            <div className="modern-problem-row" data-reveal>
              <div className="problem-visual">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              </div>
              <div className="problem-text">
                <h3>Losing 7+ Hours a Week to Repetitive Tasks</h3>
                <div className="problem-desc-wrapper">
                  <div className="problem-desc-inner">
                    <p>Your team spends over 7 hours every single week on manual data entry and approvals that a simple flow could handle in seconds.</p>
                  </div>
                </div>
              </div>
              <div className="problem-arrow">→</div>
            </div>

            <div className="modern-problem-row" data-reveal>
              <div className="problem-visual">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20 20 4" /></svg>
              </div>
              <div className="problem-text">
                <h3>Disconnected Tools & Data</h3>
                <div className="problem-desc-wrapper">
                  <div className="problem-desc-inner">
                    <p>Your apps don't talk to each other, so data gets copied by hand — and mistakes slip through.</p>
                  </div>
                </div>
              </div>
              <div className="problem-arrow">→</div>
            </div>

            <div className="modern-problem-row" data-reveal>
              <div className="problem-visual">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h.01M15 9h.01M9 15c1 1 5 1 6 0" /></svg>
              </div>
              <div className="problem-text">
                <h3>A Website That Doesn't Match Your Brand</h3>
                <div className="problem-desc-wrapper">
                  <div className="problem-desc-inner">
                    <p>A slow, generic, or outdated frontend costs you trust before a visitor even reads your content.</p>
                  </div>
                </div>
              </div>
              <div className="problem-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="eyebrow">What We Deliver</div>
            <h2>Practical Digital Solutions for <span>Growing Teams</span></h2>
            <p>From one manual process to a connected digital workflow, we build solutions around the way your business works.</p>
          </div>
          <div className="services-grid-v2">
            {/* Service 1 */}
            <div className="svc-card" data-reveal>
              <div className="svc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
              <h3>Workflow Automation</h3>
              <p>Automate approvals, notifications, data entry, and routine business processes without writing code. We connect your daily apps to save hours of manual effort.</p>
            </div>

            {/* Service 2 */}
            <div className="svc-card" data-reveal>
              <div className="svc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
              <h3>RPA & Desktop Flows</h3>
              <p>Handle repetitive work in legacy or desktop-based systems with reliable, unattended bots. Free your team from data scraping and manual form filling.</p>
            </div>

            {/* Service 3 */}
            <div className="svc-card" data-reveal>
              <div className="svc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20 20 4" /></svg></div>
              <h3>API Integrations</h3>
              <p>Connect the tools your team already uses so data moves instantly without copy-pasting. Ensure perfect data synchronization across your entire tech stack.</p>
            </div>

            {/* Service 4 */}
            <div className="svc-card" data-reveal>
              <div className="svc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg></div>
              <h3>Power Apps & PCF</h3>
              <p>Create focused internal apps and custom components tailored precisely to your workflow. We build scalable interfaces that integrate natively with your data.</p>
            </div>

            {/* Service 5 */}
            <div className="svc-card" data-reveal>
              <div className="svc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg></div>
              <h3>Web Development</h3>
              <p>Build fast, responsive websites and highly interactive interfaces that represent your brand. From slick landing pages to full-scale SaaS dashboards.</p>
            </div>

            {/* Service 6 */}
            <div className="svc-card" data-reveal>
              <div className="svc-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
              <h3>Ongoing Improvement</h3>
              <p>Test, refine, and support the systems that keep your business operations moving forward. We provide continuous maintenance to ensure maximum uptime.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="eyebrow">How We Work</div>
            <h2>From Manual Work to a <span>Better System</span></h2>
            <p>A simple, collaborative process designed to deliver useful results without unnecessary complexity.</p>
          </div>
          <div className="modern-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-step" data-reveal>
              <div className="t-bg-num">01</div>
              <div className="t-dot"></div>
              <div className="t-content">
                <h3>Discover</h3>
                <p>We learn where time is being lost and what needs to improve.</p>
              </div>
            </div>

            <div className="timeline-step" data-reveal>
              <div className="t-bg-num">02</div>
              <div className="t-dot"></div>
              <div className="t-content">
                <h3>Design</h3>
                <p>We map a clear automation or interface solution around your process.</p>
              </div>
            </div>

            <div className="timeline-step" data-reveal>
              <div className="t-bg-num">03</div>
              <div className="t-dot"></div>
              <div className="t-content">
                <h3>Build &amp; Test</h3>
                <p>We build carefully, test real scenarios, and handle edge cases.</p>
              </div>
            </div>

            <div className="timeline-step" data-reveal>
              <div className="t-bg-num">04</div>
              <div className="t-dot"></div>
              <div className="t-content">
                <h3>Launch &amp; Improve</h3>
                <p>We launch with confidence and keep improving where it matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-modern" id="impact">
        <div className="wrap">
          <div className="section-head" data-reveal style={{ textAlign: "center", marginBottom: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="eyebrow">By The Numbers</div>
            <h2>Impact <span>So Far</span></h2>
          </div>

          <div className="stats-ribbon" data-reveal>
            <div className="stat-block">
              <div className="stat-num" data-count="500" data-suffix="+">500<span>+</span></div>
              <div className="stat-label">Hours Saved Monthly</div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-block">
              <div className="stat-num" data-count="99.9" data-suffix="%">99.9<span>%</span></div>
              <div className="stat-label">Accuracy Rate</div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-block">
              <div className="stat-num">24<span>/7</span></div>
              <div className="stat-label">Automated Operations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bento-section" id="why-us">
        <div className="wrap">
          <div className="section-head text-center" data-reveal style={{ marginBottom: "60px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>The IA Advantage</div>
            <h2 style={{ fontSize: "48px", maxWidth: "800px", margin: "0 auto 16px", letterSpacing: "-1.5px", lineHeight: "1.15" }}>
              We don't just build systems.<br />
              <span style={{ background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>We engineer time.</span>
            </h2>
            <p style={{ fontSize: "19px", maxWidth: "600px", margin: "0 auto", color: "var(--text-soft)", lineHeight: "1.6" }}>
              Your business wasn't built to do data entry. We eliminate manual chaos and deliver flawless, automated precision so you can focus on growth.
            </p>
          </div>

          <div className="bento-grid">

            <div className="bento-card bento-large" data-reveal>
              <div>
                <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
                <h3>Unmatched Speed</h3>
                <p>Workflows that used to take days are executed in literal seconds. Never wait on manual handoffs again.</p>
              </div>
              <div className="bento-visual fast-visual">
                <div className="bento-bar b1"></div>
                <div className="bento-bar b2"></div>
                <div className="bento-bar b3"></div>
              </div>
            </div>

            <div className="bento-card bento-square" data-reveal>
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
              <h3>Flawless Accuracy</h3>
              <p>Human error is expensive. Our automation ensures data moves perfectly.</p>
            </div>

            <div className="bento-card bento-square" data-reveal>
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <h3>Always Online</h3>
              <p>Your custom systems run 24/7 without fatigue or interruptions.</p>
            </div>

            <div className="bento-card bento-wide" data-reveal>
              <div className="bento-flex">
                <div className="b-left">
                  <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                  <h3>Immediate ROI</h3>
                  <p>Our solutions pay for themselves quickly by removing the cost of repetitive labor.</p>
                </div>
                <div className="b-right">
                  <div className="roi-chart">
                    <div className="roi-col c1"></div>
                    <div className="roi-col c2"></div>
                    <div className="roi-col c3"></div>
                    <div className="roi-col c4"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section section-alt" id="projects">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="eyebrow">Recent Work</div>
            <h2>Featured <span>Projects</span></h2>
            <p>A few examples of automations, API integrations, and web platforms I've engineered.</p>
          </div>

          <div className="proj-grid">
            {projects.slice(0, 3).map((proj) => (
              <Link href={`/projects/${proj.slug}`} key={proj.id} className="proj-card" data-reveal>
                <div className="proj-thumb">
                  <img src={proj.image} alt={proj.title} />
                </div>
                <div className="proj-body">
                  <span className="proj-cat">{proj.category}</span>
                  <h4>{proj.title}</h4>
                  <p>{proj.short_desc}</p>
                  <span className="proj-link">Read Case Study &rarr;</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "50px" }}>
            <Link href="/projects" className="btn-secondary">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt hub-section">
        <div className="wrap">
          <div className="section-head text-center" data-reveal style={{ marginBottom: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Where We Help</div>
            <h2 style={{ maxWidth: "800px", margin: "0 auto", fontSize: "42px", letterSpacing: "-1px" }}>Solutions for Teams That Want to <span>Move Faster</span></h2>
            <p style={{ maxWidth: "600px", margin: "16px auto 0", fontSize: "18px", color: "var(--text-soft)" }}>IA Solutions supports everyday workflows across the functions that keep a business running.</p>
          </div>

          <div className="hub-showcase" data-reveal>

            {/* Background Pulse Rings */}
            <div className="hub-rings">
              <div className="ring r1"></div>
              <div className="ring r2"></div>
              <div className="ring r3"></div>
            </div>

            {/* SVG Energy Paths */}
            <svg className="hub-paths" viewBox="0 0 850 400" aria-hidden="true">
              <defs>
                <linearGradient id="hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4537E" />
                  <stop offset="100%" stopColor="#7F77DD" />
                </linearGradient>
              </defs>
              <path className="path-line" d="M425 200 C300 120 180 80 120 100"></path>
              <path className="path-line" d="M425 200 C300 200 180 200 100 200"></path>
              <path className="path-line" d="M425 200 C300 280 180 320 120 300"></path>
              <path className="path-line" d="M425 200 C550 120 670 80 730 100"></path>
              <path className="path-line" d="M425 200 C550 200 670 200 750 200"></path>
              <path className="path-line" d="M425 200 C550 280 670 320 730 300"></path>
            </svg>

            {/* Center Core */}
            <div className="hub-core">
              <div className="core-glow"></div>
              <div className="core-inner">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><polygon points="12 2 2 22 12 18 22 22 12 2" /></svg>
                <strong>Built around<br />your workflow</strong>
                <small>Less manual work.<br />More momentum.</small>
              </div>
            </div>

            {/* Nodes */}
            <div className="hub-nodes">
              <div className="h-node n-op">
                <div className="n-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg></div>
                <div className="n-text">Operations</div>
                <div className="n-hover-card">Supply chain, inventory, and logistics automation.</div>
              </div>
              <div className="h-node n-fn">
                <div className="n-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                <div className="n-text">Finance</div>
                <div className="n-hover-card">Invoice parsing, expense approvals, and real-time ledger sync.</div>
              </div>
              <div className="h-node n-cs">
                <div className="n-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <div className="n-text">Client Services</div>
                <div className="n-hover-card">Onboarding flows, automated reporting, and CRM updates.</div>
              </div>

              <div className="h-node n-hr">
                <div className="n-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
                <div className="n-text">Human Resources</div>
                <div className="n-hover-card">Candidate tracking, automated offer letters, and employee offboarding.</div>
              </div>
              <div className="h-node n-sl">
                <div className="n-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
                <div className="n-text">Sales</div>
                <div className="n-hover-card">Lead generation sync, pipeline alerts, and proposal generation.</div>
              </div>
              <div className="h-node n-ec">
                <div className="n-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></div>
                <div className="n-text">E-commerce</div>
                <div className="n-hover-card">Shopify integrations, inventory sync, and order fulfillment.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ />

      {/* <Testimonials /> */}

      <section className="cta-banner" data-reveal>
        <h2>Let's automate your workflow.</h2>
        <p>Have a process that needs streamlining, or a frontend that needs polish? Let's talk.</p>
        <CalendlyButton className="btn-white">Get In Touch</CalendlyButton>
      </section>


    </main>
  );
}
