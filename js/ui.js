// Globe Nightclub - UI Components
// Nav toggle, scroll effects, lightbox, back-to-top

// Nav scroll effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
function toggleNav() {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('mobileToggle');
  links.classList.toggle('open');
  const isOpen = links.classList.contains('open');
  btn.innerHTML = isOpen ? '\u2715' : '\u2630';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close mobile nav on link click
document.querySelectorAll('.nav-center a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('mobileToggle').innerHTML = '\u2630';
    document.body.style.overflow = '';
  });
});

// Scroll reveal with IntersectionObserver
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Lightbox
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
