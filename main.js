// ── Hamburger Menu ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');
hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ── Scroll effects ──
const navbar = document.getElementById('navbar');
const stickyCta = document.getElementById('stickyCta');

window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 60
    ? '0 4px 20px rgba(0,0,0,0.1)'
    : '0 1px 3px rgba(0,0,0,0.08)';

  const contact = document.getElementById('contact');
  if (contact) {
    const r = contact.getBoundingClientRect();
    const hide = r.top < window.innerHeight && r.bottom > 0;
    stickyCta.style.opacity = hide ? '0' : '1';
    stickyCta.style.pointerEvents = hide ? 'none' : 'auto';
  }
});

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 110) current = s.id; });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
});

// ── Fade-in on scroll ──
const fadeEls = document.querySelectorAll(
  '.service-card, .review-card, .why-feature, .contact-card, .process-step, .brand-item'
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => {
  el.classList.add('fade-in-el');
  observer.observe(el);
});
