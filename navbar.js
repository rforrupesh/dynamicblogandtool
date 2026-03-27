/**
 * Dynamic Navbar — FontGen
 * Detects base path automatically so it works on root, /tools/, /different-fonts/
 */
(function () {
  // Detect base from <script src> tag
  var scripts = document.querySelectorAll('script[src]');
  var base = '/dynamicblogandtool';
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].src;
    var m = src.match(/(.*?)\/navbar\.js/);
    if (m) { base = m[1].replace(/^.*?(\/dynamicblogandtool)/, '$1').replace(/\/$/, '') || base; break; }
  }
  // Fallback: derive from canonical or pathname
  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    var p = canonical.href;
    var idx = p.indexOf('/dynamicblogandtool');
    if (idx !== -1) base = '/dynamicblogandtool';
  }

  var B = base; // shorthand

  var navHTML = `
<nav class="navbar">
  <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
    <span class="icon-hamburger">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
        <line x1="4" y1="6" x2="20" y2="6"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="18" x2="20" y2="18"/>
      </svg>
    </span>
    <span class="icon-close">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
  </button>

  <a href="${B}/" class="logo" title="Font Generator Home">
    <img src="${B}/img/logo_header.png" alt="FontGen Logo">
  </a>

  <div class="nav-menu" id="navMenu">
    <ul>

      <li><a href="${B}/instagram-fonts.html">
        <span class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></span>
        Instagram Fonts
      </a></li>

      <li><a href="${B}/font-changer.html">
        <span class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 19"/><path d="M11 5L16 19"/><path d="M7 15H15"/><path d="M18.5 13l2.5 2.5L15 21l-2.5-2.5L18.5 13z"/></svg></span>
        Font Changer
      </a></li>

      <!-- Tools Mega Menu -->
      <li class="dropdown">
        <button class="dropdown-toggle" aria-haspopup="true">
          <span class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path></svg></span>
          Tools
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="dropdown-content">
          <div class="mega-inner">
            <div class="mega-col">
              <div class="mega-col-title">Font Styles</div>
              <a href="${B}/tools/cursive.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h10M4 18h12"/></svg></span>Cursive Generator</a>
              <a href="${B}/tools/bold.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M6 4h8a4 4 0 010 8H6z"/><path d="M6 12h9a4 4 0 010 8H6z"/></svg></span>Bold Text</a>
              <a href="${B}/tools/italic.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg></span>Italic Generator</a>
              <a href="${B}/tools/fancy.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg></span>Fancy Letters</a>
              <a href="${B}/tools/pretty-fonts.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span>Pretty Fonts</a>
              <a href="${B}/tools/calligraphy.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M17 3a2.85 2.85 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></span>Calligraphy</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-title">Special Effects</div>
              <a href="${B}/tools/aesthetic.html"><span class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21c-2-1-3-3-3-5s1-4 3-5c2-1 4-1 5 1s1 4-1 6-4 3-4 3z"/><path d="M13 16c-2 0-4-1-5-3s-1-4 1-5 4-1 5 1"/></svg></span>Aesthetic Font</a>
              <a href="${B}/tools/glitch.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></span>Glitch Text</a>
              <a href="${B}/tools/vaporwave-text.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M12 3v18M5 8l7-5 7 5"/></svg></span>Vaporwave Font</a>
              <a href="${B}/tools/cool.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>Cool Fonts</a>
              <a href="${B}/tools/weird-text.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></span>Weird Text</a>
              <a href="${B}/tools/demonic.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></span>Demonic Text</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-title">More Tools</div>
              <a href="${B}/tools/strikethrough.html"><span class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/></svg></span>Strikethrough</a>
              <a href="${B}/tools/upside-down.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></span>Upside Down</a>
              <a href="${B}/tools/small.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/></svg></span>Tiny Text</a>
              <a href="${B}/tools/symbols.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>Cool Symbols</a>
              <a href="${B}/tools/underline-text.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M6 3v7a6 6 0 0012 0V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg></span>Underline Text</a>
              <a href="${B}/tools/invisible.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg></span>Invisible Text</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-title">Utility Tools</div>
              <a href="${B}/image-color-picker.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M21 2H3v20l5-5h13V2z"/></svg></span>Color Picker</a>
              <a href="${B}/character-counter.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg></span>Character Counter</a>
              <a href="${B}/notepad.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>Online Notepad</a>
              <a href="${B}/different-fonts/"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></span>All Font Styles</a>
              <a href="${B}/brat-generator.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg></span>Brat Generator</a>
            </div>
          </div>
        </div>
      </li>

      <!-- Company Mega Menu -->
      <li class="dropdown">
        <button class="dropdown-toggle" aria-haspopup="true">
          <span class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="10" width="20" height="12" rx="2"></rect><path d="M7 10V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6"></path><path d="M10 14h4"></path></svg></span>
          Company
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="dropdown-content">
          <div class="mega-inner">
            <div class="mega-col">
              <div class="mega-col-title">Learn</div>
              <a href="${B}/blog.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg></span>Blog</a>
              <a href="${B}/different-fonts/"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg></span>All Font Styles</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-title">Company</div>
              <a href="${B}/about-us.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span>About Us</a>
              <a href="${B}/contact-us.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>Contact</a>
              <a href="${B}/privacy-policy.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>Privacy Policy</a>
            </div>
            <div class="mega-col">
              <div class="mega-col-title">Support</div>
              <a href="${B}/feedback.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>Feedback</a>
              <a href="${B}/changelog.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/></svg></span>Changelog</a>
              <a href="${B}/faq.html"><span class="mega-icon"><svg viewBox="0 0 24 24" stroke-width="1.8" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>FAQ</a>
            </div>
            <div class="mega-col featured">
              <div class="mega-col-title">📖 Latest Post</div>
              <div class="featured-card">
                <strong>Is Font Generator Free?</strong>
                <p>Yes — 190+ styles, no account needed, no limits. Read more.</p>
                <a href="${B}/blog.html">Read Blog →</a>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li><a href="${B}/blog.html">
        <span class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg></span>
        Blog
      </a></li>

    </ul>
  </div>
</nav>
<div class="nav-overlay" id="navOverlay"></div>`;

  // Inject navbar at start of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Init toggle logic
  function initNavbar() {
    var toggle = document.getElementById('menuToggle');
    var menu = document.getElementById('navMenu');
    var overlay = document.getElementById('navOverlay');
    if (!toggle || !menu) return;

    function openMenu() {
      toggle.classList.add('open');
      menu.classList.add('open');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
      // close all dropdowns
      document.querySelectorAll('.dropdown-content.open').forEach(function(d){ d.classList.remove('open'); });
      document.querySelectorAll('.dropdown-toggle.active').forEach(function(b){ b.classList.remove('active'); });
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('open')) closeMenu(); else openMenu();
    });
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Dropdown toggles (mobile)
    document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var content = btn.nextElementSibling;
        var isOpen = content.classList.contains('open');
        // close others
        document.querySelectorAll('.dropdown-content.open').forEach(function(d){ d.classList.remove('open'); });
        document.querySelectorAll('.dropdown-toggle.active').forEach(function(b){ b.classList.remove('active'); });
        if (!isOpen) {
          content.classList.add('open');
          btn.classList.add('active');
        }
      });
    });

    // Desktop: close dropdown on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content.open').forEach(function(d){ d.classList.remove('open'); });
        document.querySelectorAll('.dropdown-toggle.active').forEach(function(b){ b.classList.remove('active'); });
      }
    });

    // Active page highlight
    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(function(a){
      try {
        var aPath = new URL(a.href).pathname;
        if (aPath === currentPath) a.classList.add('nav-active');
      } catch(e){}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();

// Load auth.js for legacy static pages (Jekyll pages get it via _includes/scripts.html)
(function () {
  if (document.getElementById('fg-auth-script')) return; // already loaded
  var s = document.createElement('script');
  s.id = 'fg-auth-script';
  var src = document.querySelector('script[src*="navbar.js"]');
  var base = src ? src.src.replace(/navbar\.js.*$/, '') : '/';
  s.src = base + 'auth.js';
  document.head.appendChild(s);
})();
