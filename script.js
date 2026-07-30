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

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const status = contactForm.querySelector('.form-status');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const data = new FormData(contactForm);
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject') || 'Website enquiry';
    const message = data.get('message');
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    status.textContent = 'Opening your email app to send your message.';
    window.location.href = `mailto:hello@iasolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
