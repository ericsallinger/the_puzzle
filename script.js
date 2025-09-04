(function() {
  // ---- Configuration ----
  // Define per‑tile config explicitly. Add or edit entries as needed.
  const TILE_CONFIG = {
    "1":  { password: "pretzel", imgSrc: "img/1.jpeg",  message: "Oh hi Jaz! Welcome to the puzzle :))" },
    "2":  { password: "-", imgSrc: "img/2.jpeg",  message: "Each piece is a piece of us" },
    "3":  { password: "knot", imgSrc: "img/3.jpeg", message: "Memories, moments, feelings, songs" },
    "4":  { password: ".", imgSrc: "img/4.jpeg",  message: "There's a lot of pieces. But that's just because there's a lot of ways we fit together" },
    "5":  { password: "love", imgSrc: "img/5.jpeg",  message: "We're like a big, beautiful, ever evolving pretzel knot!" },
  };

  const STORAGE_KEY = 'unlockedTiles';

  function loadUnlockedSet() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      const arr = JSON.parse(raw);
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (_) { return new Set(); }
  }

  function saveUnlockedSet(set) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
    } catch (_) { /* ignore quota */ }
  }

  const unlocked = loadUnlockedSet();

  // Build DOM structure for a tile: .tile__inner with front/back + inline unlock overlay
  function scaffoldTile(tileEl) {
    if (!tileEl) return;
    if (tileEl.dataset.scaffolded === '1') return;
    tileEl.dataset.scaffolded = '1';

    const id = tileEl.id;
    const cfg = TILE_CONFIG[id] || {};

    // Capture existing label (the number)
    const labelNode = tileEl.querySelector('.tile__label');
    const labelText = labelNode ? labelNode.textContent : (tileEl.textContent || id);

    // Create inner + faces
    const inner = document.createElement('div');
    inner.className = 'tile__inner';

    const locked = document.createElement('div');
    locked.className = 'tile__locked';
    if (labelNode) {
      locked.appendChild(labelNode);
    } else {
      const span = document.createElement('span');
      span.className = 'tile__label';
      span.textContent = labelText;
      locked.appendChild(span);
    }

    const front = document.createElement('div');
    front.className = 'tile__front';

    const back = document.createElement('div');
    back.className = 'tile__back';

    const img = document.createElement('img');
    img.className = 'tile__img';
    img.alt = labelText || id;
    img.src = cfg.imgSrc || 'img/placeholder.jpg';
    front.appendChild(img);

    const frontNum = document.createElement('div');
    frontNum.className = 'tile__frontNum';
    frontNum.textContent = id;
    front.appendChild(frontNum);

    const messageBack = document.createElement('div');
    messageBack.className = 'tile__message';
    messageBack.textContent = cfg.message || `Tile ${id}`;
    back.appendChild(messageBack);

    inner.appendChild(locked);
    inner.appendChild(back);
    inner.appendChild(front);
    tileEl.textContent = '';
    tileEl.appendChild(inner);

    // Inline unlock overlay (hidden until clicked)
    const overlay = document.createElement('div');
    overlay.className = 'tile__unlock';
    overlay.innerHTML = `
      <form autocomplete="off">
        <input
          type="password"
          name="unlock"
          autocomplete="new-password"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
          data-lpignore="true"
          data-1p-ignore="true"
          data-bwignore="true"
        />
      </form>
    `;
    tileEl.appendChild(overlay);

    overlay.addEventListener('click', (e) => e.stopPropagation());
    overlay.querySelector('form').addEventListener('click', (e) => e.stopPropagation());
    overlay.querySelector('input[name="unlock"]').addEventListener('click', (e) => e.stopPropagation());

    // If previously unlocked, flip immediately
    if (unlocked.has(id)) {
      tileEl.classList.add('is-unlocked');
      tileEl.classList.remove('is-locked');
      // prevent hover overlay on already-unlocked tiles
      overlay.style.display = 'none';
    }

    // Click behavior (use event, ignore overlay clicks)
    tileEl.addEventListener('click', (ev) => {
      // If click originated inside the unlock overlay, do nothing
      if (ev.target.closest('.tile__unlock')) return;

      if (tileEl.classList.contains('is-unlocked')) {
        tileEl.classList.toggle('is-flipped');
        return;
      } else {
        // Locked: reveal inline prompt
        overlay.classList.add('is-visible');
        const input = overlay.querySelector('input[name="unlock"]');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    });

    // Submit handler for inline password
    const form = overlay.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[name="unlock"]');
      const val = (input?.value || '').trim();
      const expected = (typeof cfg.password === 'string') ? cfg.password : null;
      if (expected !== null && val === expected) {
        tileEl.classList.add('is-unlocked');
        tileEl.classList.remove('is-locked');
        overlay.classList.remove('is-visible');
        overlay.style.display = 'none';
        unlocked.add(id);
        saveUnlockedSet(unlocked);
      } else {
        if (expected === null) {
          // Tile not configured: provide feedback
          input.value = '';
          alert(`This tile ("${id}") is not yet configured with a password.`);
          overlay.classList.remove('is-visible');
          return;
        }
        // wrong password feedback
        form.style.animation = 'shake 180ms linear 0s 2';
        setTimeout(() => { form.style.animation = ''; }, 400);
        input?.select();
      }
    });
  }

  // Lightweight modal for messages
  function getOrCreateModal() {
    let modal = document.getElementById('tile-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'tile-modal';
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.display = 'none';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.background = 'rgba(0,0,0,0.45)';
    modal.innerHTML = `
      <div style="max-width: 520px; background:#fff; padding:16px 18px; border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.35);">
        <div id="tile-modal-body" style="white-space:pre-wrap; line-height:1.3;"></div>
        <div style="margin-top:12px; text-align:right;">
          <button id="tile-modal-close" style="border:0; background:#222; color:#fff; padding:6px 10px; border-radius:4px; cursor:pointer;">Close</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'tile-modal' || e.target.id === 'tile-modal-close') {
        modal.style.display = 'none';
      }
    });
    return modal;
  }

  function showMessage(text) {
    const modal = getOrCreateModal();
    const body = document.getElementById('tile-modal-body');
    body.textContent = text || '';
    modal.style.display = 'flex';
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tile').forEach(scaffoldTile);
  });
})();