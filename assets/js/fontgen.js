// ── Unicode Font Generator ──────────────────────────────────────────
// Maps standard ASCII to various Unicode math/special characters

function makeMap(lower, upper, digits) {
  const map = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(lower + i);
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(upper + i);
  }
  if (digits !== undefined) {
    for (let i = 0; i < 10; i++) {
      map[String.fromCharCode(48 + i)] = String.fromCodePoint(digits + i);
    }
  }
  return map;
}

function applyMap(text, map, fallback) {
  return text.split('').map(c => map[c] || (fallback ? c : c)).join('');
}

// Special case maps
const upsideDownMap = {
  a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',k:'ʞ',
  l:'l',m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',u:'n',v:'ʌ',
  w:'ʍ',x:'x',y:'ʎ',z:'z',
  A:'∀',B:'𐐒',C:'Ɔ',D:'◖',E:'Ǝ',F:'Ⅎ',G:'⅁',H:'H',I:'I',J:'ɾ',K:'ʞ',
  L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Q',R:'ɹ',S:'S',T:'┴',U:'∩',V:'Λ',
  W:'M',X:'X',Y:'⅄',Z:'Z',
  '0':'0','1':'Ɩ','2':'ᄅ','3':'Ɛ','4':'ㄣ','5':'ϛ','6':'9','7':'Ɫ','8':'8','9':'6',
  ' ':' ','.':'˙',',':'\'','?':'¿','!':'¡'
};

const wideMap = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c,i) => {
  wideMap[c] = String.fromCodePoint(0xFF41 + i);
});
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((c,i) => {
  wideMap[c] = String.fromCodePoint(0xFF21 + i);
});
'0123456789'.split('').forEach((c,i) => {
  wideMap[c] = String.fromCodePoint(0xFF10 + i);
});

const circledMap = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c,i) => {
  circledMap[c] = String.fromCodePoint(0x24D0 + i);
});
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((c,i) => {
  circledMap[c] = String.fromCodePoint(0x24B6 + i);
});

const smallcapsMap = {
  a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ꜰ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',
  l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'q',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',
  w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'
};

// Combining character styles
function addCombining(text, combiner) {
  return text.split('').map(c => c === ' ' ? c : c + combiner).join('');
}

// Math maps
const boldMap        = makeMap(0x1D41A, 0x1D400, 0x1D7CE);
const italicMap      = makeMap(0x1D44E, 0x1D434);
const boldItalicMap  = makeMap(0x1D482, 0x1D468);
const scriptMap      = makeMap(0x1D4B6, 0x1D49C);
const boldScriptMap  = makeMap(0x1D4EA, 0x1D4D0);
const frakturMap     = makeMap(0x1D51E, 0x1D504);
const boldFrakturMap = makeMap(0x1D586, 0x1D56C);
const doubleMap      = makeMap(0x1D552, 0x1D538);
const monoMap        = makeMap(0x1D68A, 0x1D670, 0x1D7F6);
const sansMap        = makeMap(0x1D5BA, 0x1D5A0);
const sansBoldMap    = makeMap(0x1D5EE, 0x1D5D4, 0x1D7EC);
const sansItalicMap  = makeMap(0x1D622, 0x1D608);
const sansBoldItalicMap = makeMap(0x1D656, 0x1D63C);

// Fix italic special chars
italicMap['h'] = 'ℎ';
scriptMap['e'] = 'ℯ'; scriptMap['g'] = 'ℊ'; scriptMap['o'] = 'ℴ';
scriptMap['B'] = 'ℬ'; scriptMap['E'] = 'ℰ'; scriptMap['F'] = 'ℱ';
scriptMap['H'] = 'ℋ'; scriptMap['I'] = 'ℐ'; scriptMap['L'] = 'ℒ';
scriptMap['M'] = 'ℳ'; scriptMap['R'] = 'ℛ';
doubleMap['C'] = 'ℂ'; doubleMap['H'] = 'ℍ'; doubleMap['N'] = 'ℕ';
doubleMap['P'] = 'ℙ'; doubleMap['Q'] = 'ℚ'; doubleMap['R'] = 'ℝ'; doubleMap['Z'] = 'ℤ';
frakturMap['C'] = 'ℭ'; frakturMap['H'] = 'ℌ'; frakturMap['I'] = 'ℑ';
frakturMap['R'] = 'ℜ'; frakturMap['Z'] = 'ℨ';

// ── All font definitions ────────────────────────────────────────────
const FONTS = [
  // Popular
  { name: 'Bold',             cat: 'popular',  fn: t => applyMap(t, boldMap) },
  { name: 'Italic',           cat: 'popular',  fn: t => applyMap(t, italicMap) },
  { name: 'Bold Italic',      cat: 'popular',  fn: t => applyMap(t, boldItalicMap) },
  { name: 'Cursive Script',   cat: 'popular',  fn: t => applyMap(t, scriptMap) },
  { name: 'Bold Script',      cat: 'popular',  fn: t => applyMap(t, boldScriptMap) },
  { name: 'Fraktur',          cat: 'popular',  fn: t => applyMap(t, frakturMap) },
  { name: 'Bold Fraktur',     cat: 'popular',  fn: t => applyMap(t, boldFrakturMap) },
  { name: 'Double Struck',    cat: 'popular',  fn: t => applyMap(t, doubleMap) },

  // Sans
  { name: 'Sans-serif',       cat: 'sans',     fn: t => applyMap(t, sansMap) },
  { name: 'Sans Bold',        cat: 'sans',     fn: t => applyMap(t, sansBoldMap) },
  { name: 'Sans Italic',      cat: 'sans',     fn: t => applyMap(t, sansItalicMap) },
  { name: 'Sans Bold Italic', cat: 'sans',     fn: t => applyMap(t, sansBoldItalicMap) },
  { name: 'Monospace',        cat: 'sans',     fn: t => applyMap(t, monoMap) },

  // Effects
  { name: 'Wide / Fullwidth', cat: 'effects',  fn: t => applyMap(t, wideMap) },
  { name: 'Circled',          cat: 'effects',  fn: t => applyMap(t, circledMap) },
  { name: 'Small Caps',       cat: 'effects',  fn: t => t.split('').map(c => smallcapsMap[c.toLowerCase()] || c).join('') },
  { name: 'Upside Down',      cat: 'effects',  fn: t => t.split('').map(c => upsideDownMap[c] || c).reverse().join('') },
  { name: 'Strikethrough',    cat: 'effects',  fn: t => addCombining(t, '\u0336') },
  { name: 'Underline',        cat: 'effects',  fn: t => addCombining(t, '\u0332') },
  { name: 'Double Underline', cat: 'effects',  fn: t => addCombining(t, '\u0333') },
  { name: 'Overline',         cat: 'effects',  fn: t => addCombining(t, '\u0305') },
  { name: 'Slash Through',    cat: 'effects',  fn: t => addCombining(t, '\u0338') },
  { name: 'Wave Below',       cat: 'effects',  fn: t => addCombining(t, '\u0330') },
  { name: 'Tilde Overlay',    cat: 'effects',  fn: t => addCombining(t, '\u0334') },

  // Glitch / Zalgo
  { name: 'Glitch (Mild)',    cat: 'glitch',   fn: t => addCombining(t, '\u0308\u0301') },
  { name: 'Glitch (Heavy)',   cat: 'glitch',   fn: t => {
      const up = ['\u030d','\u030e','\u0304','\u0305','\u033f','\u0311','\u0306','\u0310','\u0352','\u0357'];
      const mid = ['\u0325','\u0329','\u0358'];
      const down = ['\u0316','\u0317','\u0318','\u0319','\u031c','\u031d','\u0323','\u0324'];
      return t.split('').map(c => {
        if (c === ' ') return c;
        let r = c;
        for (let i = 0; i < 3; i++) r += up[Math.floor(Math.random() * up.length)];
        r += mid[Math.floor(Math.random() * mid.length)];
        for (let i = 0; i < 3; i++) r += down[Math.floor(Math.random() * down.length)];
        return r;
      }).join('');
  }},
];

// ── UI Logic ────────────────────────────────────────────────────────
const input    = document.getElementById('fontInput');
const clearBtn = document.getElementById('clearBtn');
const grid     = document.getElementById('fontsGrid');
const tabs     = document.querySelectorAll('.filter-tab');

const CATEGORIES = ['all', 'popular', 'sans', 'effects', 'glitch'];
const CAT_LABELS  = { all: 'All', popular: 'Popular', sans: 'Sans / Mono', effects: 'Effects', glitch: 'Glitch' };
let currentCat = 'all';
let currentText = '';

const PLACEHOLDER = 'Type your text here...';

function renderCards(text) {
  const fonts = currentCat === 'all' ? FONTS : FONTS.filter(f => f.cat === currentCat);
  grid.innerHTML = '';

  fonts.forEach(f => {
    const converted = text ? f.fn(text) : '';
    const card = document.createElement('div');
    card.className = 'font-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Copy ${f.name}`);

    const preview = document.createElement('div');
    preview.className = 'font-card-preview' + (text ? '' : ' placeholder');
    preview.textContent = text ? converted : f.fn('Sample Text');

    const right = document.createElement('div');
    right.className = 'font-card-right';

    const nameEl = document.createElement('span');
    nameEl.className = 'font-name';
    nameEl.textContent = f.name;

    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';

    right.append(nameEl, btn);
    card.append(preview, right);
    grid.appendChild(card);

    const doCopy = () => {
      if (!text) { input.focus(); return; }
      navigator.clipboard.writeText(converted).then(() => {
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1800);
      });
    };

    btn.addEventListener('click', e => { e.stopPropagation(); doCopy(); });
    card.addEventListener('click', doCopy);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') doCopy(); });
  });
}

input.addEventListener('input', () => {
  currentText = input.value;
  clearBtn.classList.toggle('visible', currentText.length > 0);
  renderCards(currentText);
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  currentText = '';
  clearBtn.classList.remove('visible');
  renderCards('');
  input.focus();
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCat = tab.dataset.cat;
    renderCards(currentText);
  });
});

// Init
renderCards('');
