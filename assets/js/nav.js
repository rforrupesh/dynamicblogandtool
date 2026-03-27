// Scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Dropdowns
document.querySelectorAll('.nav-dropdown').forEach(dd => {
  const btn = dd.querySelector('.dropdown-toggle');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dd.classList.contains('open');
    document.querySelectorAll('.nav-dropdown.open').forEach(o => o.classList.remove('open'));
    btn.setAttribute('aria-expanded', !isOpen);
    if (!isOpen) dd.classList.add('open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open').forEach(o => o.classList.remove('open'));
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('mobileDrawer');
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  drawer.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  drawer.setAttribute('aria-hidden', !isOpen);
});

// Close drawer on link click
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
}));
