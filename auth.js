/**
 * auth.js — FontGen Login / Register
 * Uses localStorage for session state.
 * Handles: navbar init, dropdown, mobile menu, back-to-top,
 *          login modal, register modal, sign-out.
 */
(function () {
  'use strict';

  /* ─── Helpers ─────────────────────────────────────── */
  var LS_KEY = 'fg_user';

  function getUser() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)); } catch (e) { return null; }
  }
  function setUser(u) { localStorage.setItem(LS_KEY, JSON.stringify(u)); }
  function clearUser() { localStorage.removeItem(LS_KEY); }

  function getInitials(name) {
    return (name || '?').trim().split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
  }

  /* ─── DOM refs ─────────────────────────────────────── */
  function ready(fn) {
    if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {

    /* ── Back to top ── */
    var btt = document.getElementById('backToTopBtn');
    if (btt) {
      window.addEventListener('scroll', function () {
        btt.style.display = window.scrollY > 400 ? 'flex' : 'none';
      });
      btt.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ── Mobile nav toggle ── */
    var toggle   = document.getElementById('menuToggle');
    var navMenu  = document.getElementById('navMenu');
    var overlay  = document.getElementById('navOverlay');

    function openMenu() {
      if (!toggle || !navMenu) return;
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      navMenu.classList.add('open');
      if (overlay) { overlay.classList.add('active'); overlay.removeAttribute('aria-hidden'); }
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      if (!toggle || !navMenu) return;
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      if (overlay) { overlay.classList.remove('active'); overlay.setAttribute('aria-hidden', 'true'); }
      document.body.style.overflow = '';
      closeAllDropdowns();
    }

    if (toggle) toggle.addEventListener('click', function () {
      navMenu && navMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
    if (overlay) overlay.addEventListener('click', closeMenu);

    /* ── Dropdowns ── */
    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-content.open').forEach(function (d) { d.classList.remove('open'); });
      document.querySelectorAll('.dropdown-toggle.active').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-expanded', 'false');
      });
    }

    document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var content = btn.nextElementSibling;
        var wasOpen = content && content.classList.contains('open');
        closeAllDropdowns();
        if (!wasOpen && content) {
          content.classList.add('open');
          btn.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) closeAllDropdowns();
    });

    /* ── Active page highlight ── */
    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(function (a) {
      try {
        if (new URL(a.href).pathname === currentPath) a.classList.add('nav-active');
      } catch (err) {}
    });

    /* ── Auth state ── */
    var btnOpenLogin  = document.getElementById('btnOpenLogin');
    var navUserMenu   = document.getElementById('navUserMenu');
    var userAvatar    = document.getElementById('userAvatarCircle');
    var userNameEl    = document.getElementById('userDisplayName');
    var btnUserAvatar = document.getElementById('btnUserAvatar');
    var userDropdown  = document.getElementById('userDropdown');
    var btnSignOut    = document.getElementById('btnSignOut');

    function refreshAuthUI() {
      var user = getUser();
      if (user && user.name) {
        if (btnOpenLogin)  btnOpenLogin.style.display  = 'none';
        if (navUserMenu)   navUserMenu.style.display   = 'flex';
        if (userNameEl)    userNameEl.textContent       = user.name.split(' ')[0];
        if (userAvatar)    userAvatar.textContent        = getInitials(user.name);
      } else {
        if (btnOpenLogin)  btnOpenLogin.style.display  = '';
        if (navUserMenu)   navUserMenu.style.display   = 'none';
      }
    }
    refreshAuthUI();

    /* User avatar dropdown */
    if (btnUserAvatar && userDropdown) {
      btnUserAvatar.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = userDropdown.style.display !== 'none';
        userDropdown.style.display = isOpen ? 'none' : 'block';
        btnUserAvatar.setAttribute('aria-expanded', String(!isOpen));
      });
      document.addEventListener('click', function () {
        if (userDropdown) userDropdown.style.display = 'none';
        if (btnUserAvatar) btnUserAvatar.setAttribute('aria-expanded', 'false');
      });
    }

    if (btnSignOut) {
      btnSignOut.addEventListener('click', function () {
        clearUser();
        refreshAuthUI();
        if (userDropdown) userDropdown.style.display = 'none';
      });
    }

    /* ── Auth Modal ── */
    var modalOverlay  = document.getElementById('authModalOverlay');
    var modalClose    = document.getElementById('authModalClose');
    var tabSignIn     = document.getElementById('tabSignIn');
    var tabRegister   = document.getElementById('tabRegister');
    var loginEmail    = document.getElementById('loginEmail');
    var loginPassword = document.getElementById('loginPassword');
    var loginError    = document.getElementById('loginError');
    var regName       = document.getElementById('regName');
    var regEmail      = document.getElementById('regEmail');
    var regPassword   = document.getElementById('regPassword');
    var registerError = document.getElementById('registerError');

    function openModal(tab) {
      if (!modalOverlay) return;
      modalOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      showTab(tab || 'signin');
    }
    function closeModal() {
      if (!modalOverlay) return;
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
      clearErrors();
    }
    function showTab(tab) {
      if (tabSignIn)   tabSignIn.style.display   = tab === 'signin'   ? '' : 'none';
      if (tabRegister) tabRegister.style.display = tab === 'register' ? '' : 'none';
    }
    function clearErrors() {
      if (loginError)    { loginError.style.display = 'none';    loginError.textContent = ''; }
      if (registerError) { registerError.style.display = 'none'; registerError.textContent = ''; }
    }
    function showError(el, msg) {
      if (!el) return;
      el.textContent = msg;
      el.style.display = 'block';
    }

    if (btnOpenLogin) btnOpenLogin.addEventListener('click', function () { openModal('signin'); });
    if (modalClose)   modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.style.display !== 'none') closeModal();
    });

    var btnGoToRegister = document.getElementById('btnGoToRegister');
    var btnGoToLogin    = document.getElementById('btnGoToLogin');
    if (btnGoToRegister) btnGoToRegister.addEventListener('click', function () { clearErrors(); showTab('register'); });
    if (btnGoToLogin)    btnGoToLogin.addEventListener('click',    function () { clearErrors(); showTab('signin'); });

    /* ── Sign In logic ── */
    var btnDoLogin = document.getElementById('btnDoLogin');
    if (btnDoLogin) {
      btnDoLogin.addEventListener('click', function () {
        clearErrors();
        var email = (loginEmail && loginEmail.value.trim()) || '';
        var pass  = (loginPassword && loginPassword.value) || '';

        if (!email || !pass) { showError(loginError, 'Please enter your email and password.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(loginError, 'Please enter a valid email address.'); return; }

        // Check stored accounts
        var accounts = JSON.parse(localStorage.getItem('fg_accounts') || '[]');
        var match = accounts.find(function (a) { return a.email === email && a.password === pass; });

        if (match) {
          setUser({ name: match.name, email: match.email });
          closeModal();
          refreshAuthUI();
        } else {
          showError(loginError, 'Email or password is incorrect.');
        }
      });

      // Allow Enter key in password field
      if (loginPassword) loginPassword.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') btnDoLogin.click();
      });
    }

    /* ── Register logic ── */
    var btnDoRegister = document.getElementById('btnDoRegister');
    if (btnDoRegister) {
      btnDoRegister.addEventListener('click', function () {
        clearErrors();
        var name  = (regName && regName.value.trim()) || '';
        var email = (regEmail && regEmail.value.trim()) || '';
        var pass  = (regPassword && regPassword.value) || '';

        if (!name)  { showError(registerError, 'Please enter your name.'); return; }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(registerError, 'Please enter a valid email.'); return; }
        if (pass.length < 6) { showError(registerError, 'Password must be at least 6 characters.'); return; }

        var accounts = JSON.parse(localStorage.getItem('fg_accounts') || '[]');
        if (accounts.find(function (a) { return a.email === email; })) {
          showError(registerError, 'An account with this email already exists.'); return;
        }

        accounts.push({ name: name, email: email, password: pass });
        localStorage.setItem('fg_accounts', JSON.stringify(accounts));
        setUser({ name: name, email: email });
        closeModal();
        refreshAuthUI();
      });
    }

  }); // end ready

})();
