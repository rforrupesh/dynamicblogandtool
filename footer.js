/**
 * Dynamic Footer — FontGen
 * Auto-detects base path
 */
(function () {
  var base = '/dynamicblogandtool';
  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    var idx = canonical.href.indexOf('/dynamicblogandtool');
    if (idx !== -1) base = '/dynamicblogandtool';
  }
  var B = base;
  var year = new Date().getFullYear();

  var footerHTML = `
<footer class="site-footer">
  <div class="footer-container">

    <div class="footer-top">
      <div class="footer-brand">
        <a href="${B}/" class="footer-logo">
          <img src="${B}/img/logo_header.png" alt="FontGen Logo">
        </a>
        <p class="footer-tagline">190+ font styles. Free forever. No account needed.</p>
      </div>

      <div class="footer-cols">
        <div class="footer-col">
          <h4>Font Styles</h4>
          <ul>
            <li><a href="${B}/tools/cool.html">Cool Text Fonts</a></li>
            <li><a href="${B}/tools/cursive.html">Cursive Maker</a></li>
            <li><a href="${B}/tools/fancy.html">Fancy Letters</a></li>
            <li><a href="${B}/tools/bold.html">Bold Generator</a></li>
            <li><a href="${B}/tools/italic.html">Italics Generator</a></li>
            <li><a href="${B}/tools/pretty-fonts.html">Pretty Fonts</a></li>
            <li><a href="${B}/tools/small.html">Tiny Text Generator</a></li>
            <li><a href="${B}/tools/calligraphy.html">Calligraphy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Special Effects</h4>
          <ul>
            <li><a href="${B}/tools/glitch.html">Glitchy Text</a></li>
            <li><a href="${B}/tools/strikethrough.html">Crossed Out Text</a></li>
            <li><a href="${B}/tools/upside-down.html">Upside-Down Text</a></li>
            <li><a href="${B}/tools/weird-text.html">Strange Text</a></li>
            <li><a href="${B}/tools/vaporwave-text.html">Vaporwave Font</a></li>
            <li><a href="${B}/tools/aesthetic.html">Aesthetic Font</a></li>
            <li><a href="${B}/tools/demonic.html">Satanic Text</a></li>
            <li><a href="${B}/tools/invisible.html">Blank Space</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>More Tools</h4>
          <ul>
            <li><a href="${B}/tools/symbols.html">Cool Symbols</a></li>
            <li><a href="${B}/tools/underline-text.html">Underline Words</a></li>
            <li><a href="${B}/tools/stylish-text-generator.html">Style Fonts</a></li>
            <li><a href="${B}/tools/japanese-text.html">Japanese Symbols</a></li>
            <li><a href="${B}/tools/special.html">Special Font Style</a></li>
            <li><a href="${B}/image-color-picker.html">Color Picker</a></li>
            <li><a href="${B}/character-counter.html">Character Counter</a></li>
            <li><a href="${B}/notepad.html">Online Notepad</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="${B}/blog.html">Blog</a></li>
            <li><a href="${B}/different-fonts/">All Alphabet Fonts</a></li>
            <li><a href="${B}/about-us.html">About Us</a></li>
            <li><a href="${B}/contact-us.html">Contact</a></li>
            <li><a href="${B}/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="${B}/feedback.html">Feedback</a></li>
            <li><a href="${B}/changelog.html">Latest Updates</a></li>
            <li><a href="${B}/faq.html">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-left">
        &copy; ${year} FontGen.in &mdash; All rights reserved.
      </div>
      <div class="footer-right">
        <a href="${B}/privacy-policy.html">Privacy Policy</a>
        <a href="${B}/about-us.html">About Us</a>
        <a href="${B}/contact-us.html">Contact</a>
        <a href="${B}/changelog.html">Latest Updates</a>
        <a href="${B}/feedback.html">Feedback</a>
      </div>
    </div>

  </div>
</footer>
<button id="backToTopBtn" title="Back to top" aria-label="Back to top">&#8679;</button>`;

  // Find closing </body> or inject at end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Back to top logic
  function initBackToTop() {
    var btn = document.getElementById('backToTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackToTop);
  } else {
    initBackToTop();
  }
})();
