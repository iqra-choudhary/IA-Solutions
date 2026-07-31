document.documentElement.classList.add('js-enabled');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = document.querySelectorAll('[data-reveal]');
const revealAll = () => items.forEach((item) => item.classList.add('show'));

if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((item) => revealObserver.observe(item));
} else {
  revealAll();
}

const counters = document.querySelectorAll('.stat-num[data-count]');
function runCounter(element) {
  if (element.dataset.animated === 'true') return;
  element.dataset.animated = 'true';
  const target = Number(element.dataset.count);
  const suffix = element.dataset.suffix || '';

  if (reducedMotion) {
    element.textContent = target + suffix;
    return;
  }

  const start = performance.now();
  const duration = 1200;
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = Math.floor(target * progress) + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else element.textContent = target + suffix;
  };
  requestAnimationFrame(update);
}

if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  counters.forEach(runCounter);
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('span[aria-hidden="true"]').textContent = isOpen ? '×' : '☰';
  });
}

const whyReasons = document.querySelectorAll('.why-scroll-step[data-why]');
const whyPanels = document.querySelectorAll('.why-screen[data-why-panel]');
const whyVisual = document.querySelector('.why-scroll-visual');
const whyDevice = document.querySelector('.why-device');
const whyCopy = document.querySelector('.why-scroll-copy');
if (whyReasons.length && whyPanels.length && whyVisual && whyDevice) {
  const showVisual = (id) => {
    whyVisual.classList.remove('hidden');
    whyReasons.forEach((reason) => reason.classList.toggle('active', reason.dataset.why === id));
    whyPanels.forEach((panel) => panel.classList.toggle('active', panel.dataset.whyPanel === id));
    whyDevice.classList.remove('shift-1', 'shift-2', 'shift-3');
    whyDevice.classList.add(`shift-${id}`);
  };

  const hideVisual = () => {
    whyVisual.classList.add('hidden');
    whyReasons.forEach((reason) => reason.classList.remove('active'));
    whyPanels.forEach((panel) => panel.classList.remove('active'));
    whyDevice.classList.remove('shift-1', 'shift-2', 'shift-3');
  };

  whyReasons.forEach((reason) => {
    const id = reason.dataset.why;
    reason.addEventListener('mouseenter', () => showVisual(id));
    reason.addEventListener('click', () => showVisual(id));
    reason.addEventListener('focus', () => showVisual(id));
  });

  if (whyCopy) {
    whyCopy.addEventListener('mouseleave', hideVisual);
  }
}

const gmailOpenBtn = document.querySelector('.gmail-open-btn');
const contactForm = document.querySelector('#contact-form');
if (gmailOpenBtn && contactForm) {
  gmailOpenBtn.addEventListener('click', () => {
    const formData = new FormData(contactForm);
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const to = 'hello@iasolutions.com';
    const subject = formData.get('subject') || 'Website enquiry';
    const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  });
}

// ===== Tools orbit: circular icon-only nodes, hover-to-reveal name, same-length dotted lines, logo center =====
(function(){
  const container = document.querySelector('.trust-visual');
  if(!container) return;
  const center = container.querySelector('.trust-center');
  const nodes = Array.from(container.querySelectorAll('.trust-node'));
  if(!nodes.length) return;

  // Put the icon-only logo in the center hub instead of "IA" text
  if(center){
    center.innerHTML = '<img src="logo-icon.png" alt="IA Solutions" style="width:90px; height:auto;"><p style="margin-top:8px; color:#5C5C66; font-size:13px;">Tools Hub</p>';
  }

  // Small cute icon per tool
  const iconMap = {
    'Power Automate':'⚡','Power Apps':'📱','SharePoint':'📁','OneDrive':'☁️','OneNote':'📝',
    'Outlook':'✉️','Teams':'💬','Word':'📄','Excel':'📊','PowerPoint':'📽️',
    'Make.com':'🔗','RPA':'🤖','API Integrations':'🔌','React':'⚛️'
  };

  // Inject the hover-tooltip styles (self-contained, no need to touch style.css)
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .orbit-tooltip{
      position:absolute; bottom:112%; left:50%; transform:translateX(-50%);
      background:#15131C; color:#fff; font-size:11px; font-weight:600;
      padding:5px 11px; border-radius:7px; white-space:nowrap;
      opacity:0; pointer-events:none; transition:opacity .2s ease;
      z-index:10;
    }
    .trust-node:hover .orbit-tooltip{ opacity:1; }
  `;
  document.head.appendChild(styleTag);

  // Turn every node into a plain circle showing only its icon, with a hidden-by-default name tooltip
  nodes.forEach(node=>{
    const label = node.textContent.trim();
    const icon = iconMap[label] || '⚙️';
    node.innerHTML = `<span style="font-size:20px; line-height:1;">${icon}</span><span class="orbit-tooltip">${label}</span>`;
    Object.assign(node.style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '58px',
      height: '58px',
      borderRadius: '50%',
      padding: '0',
      boxSizing: 'border-box',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginLeft: '-29px',
      marginTop: '-29px'
    });
  });

  // SVG layer for the dotted connector lines (all same length since all nodes share one radius)
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('style', 'position:absolute; inset:0; width:100%; height:100%; z-index:1; pointer-events:none;');
  container.insertBefore(svg, container.firstChild);

  const count = nodes.length;
  let centerX = 0, centerY = 0, radius = 0;
  let orbitData = [];

  function measure(){
    centerX = container.offsetWidth / 2;
    centerY = container.offsetHeight / 2;
    radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.42;
    orbitData = nodes.map((node, i)=>{
      const angle0 = (i / count) * Math.PI * 2;
      let line = node._orbitLine;
      if(!line){
        line = document.createElementNS(svgNS, 'line');
        line.setAttribute('stroke', '#D4537E');
        line.setAttribute('stroke-width', '1.5');
        line.setAttribute('stroke-dasharray', '4 6');
        line.setAttribute('opacity', '0.45');
        svg.appendChild(line);
        node._orbitLine = line;
      }
      return {node, angle0, line};
    });
  }

  const SPEED = 0.00012; // full loop roughly every 52 seconds
  let startTime = null;

  function animate(ts){
    if(startTime === null) startTime = ts;
    const elapsed = ts - startTime;
    orbitData.forEach(d=>{
      const angle = d.angle0 + elapsed * SPEED;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      d.node.style.transform = `translate(${x - centerX}px, ${y - centerY}px)`;
      d.line.setAttribute('x1', centerX);
      d.line.setAttribute('y1', centerY);
      d.line.setAttribute('x2', x);
      d.line.setAttribute('y2', y);
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('load', ()=>{
    measure();
    requestAnimationFrame(animate);
  });
  window.addEventListener('resize', measure);
})();

(function(){
  const catButtons = document.querySelectorAll('.faq-cat');
  const panels = document.querySelectorAll('.faq-panel');
  const items = document.querySelectorAll('.faq-item');

  if(catButtons.length && panels.length){
    catButtons.forEach((btn)=>{
      btn.addEventListener('click', ()=>{
        const target = btn.getAttribute('data-cat');
        catButtons.forEach((b)=>b.classList.remove('active'));
        btn.classList.add('active');
        panels.forEach((p)=>p.classList.toggle('active', p.getAttribute('data-panel')===target));
      });
    });
  }

  function setFaqItemState(item, isOpen){
    const answer = item.querySelector('.faq-a');
    const toggle = item.querySelector('.faq-toggle');

    item.classList.toggle('active', isOpen);

    if(answer){
      if(isOpen){
        requestAnimationFrame(()=>{
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        });
      } else {
        answer.style.maxHeight = '0px';
      }
    }

    if(toggle){
      toggle.textContent = isOpen ? '×' : '+';
    }
  }

  if(items.length){
    items.forEach((item)=>{
      const trigger = item.querySelector('.faq-q');
      if(!trigger) return;
      trigger.addEventListener('click', ()=>{
        const parentPanel = item.closest('.faq-panel');
        if(!parentPanel) return;

        const isOpen = item.classList.contains('active');
        parentPanel.querySelectorAll('.faq-item').forEach((other)=>{
          setFaqItemState(other, false);
        });
        if(!isOpen){
          setFaqItemState(item, true);
        }
      });
    });
  }
})();