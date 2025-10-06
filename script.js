(function() {
  // ---- Configuration ----
  // Define per‑tile config explicitly. Add or edit entries as needed.
  const TILE_CONFIG = {
    "1":  { password: "pretzel", imgSrc: "img/1.jpeg",  message: "Oh hi Jaz! Welcome to The Puzzle :))" },
    "2":  { password: "-", imgSrc: "img/2.jpeg",  message: "Each piece is a piece of us" },
    "3":  { password: "knot", imgSrc: "img/3.jpeg", message: "Memories, moments, feelings, songs" },
    "4":  { password: ".", imgSrc: "img/4.jpeg",  message: "There's a lot of pieces. But that's just because there's a lot of ways we fit together" },
    "5":  { password: "love", imgSrc: "img/5.jpeg",  message: "We're like a big, beautiful, ever evolving pretzel knot!" },
    "6":  { password: "dessert", imgSrc: "img/6.jpeg",  message: "The past is just a series of circumstances that brought you to me" },
    "7":  { password: "eat", imgSrc: "img/7.jpeg",  message: "Hola hola camaroncito sin cola" },
    "8":  { password: "you", imgSrc: "img/8.jpeg",  message: "I love you" },
    "9":  { password: "make", imgSrc: "img/9.jpeg",  message: "Sitting in your cozy room at your parents watching a whole season of Fleabag" },
    "10":  { password: "my", imgSrc: "img/10.jpeg",  message: "I could be stuck desserted with you on literal Mars and still be happy"},
    "11":  { password: "marte", imgSrc: "img/11.jpeg",  message: "One of the classiest we've ever looked in a reflection" },
    "12":  { password: "remember", imgSrc: "img/12.jpeg",  message: "The graph of how many texts we sent each other in our first two years of dating. Holy heck!" },
    "13":  { password: "a", imgSrc: "img/13.jpeg",  message: "You make baseball fun" },
    "14":  { password: "cravings", imgSrc: "img/14.jpeg",  message: "The first of many big life moments we shared together" },
    "15":  { password: "day", imgSrc: "img/15.jpeg",  message: "'random question, what does PCS stand for? like the class you took' -- the first text that Jaz sent Eric (8/3/2018)" },
    "16":  { password: "kids", imgSrc: "img/16.jpeg",  message: "I'd watch 1000 sunrises with you as long as we get to nap after" },
    "17":  { password: "el", imgSrc: "img/17.jpeg",  message: "4 So Far's so far!" },
    "18":  { password: "puzzle", imgSrc: "img/18.jpeg",  message: "When we're 80 we'll have so many favorite spots together. An explored world" },
    "19":  { password: "this", imgSrc: "img/19.jpeg",  message: "I went out for lunch with my family and have now had a cup of eggnog -- me, probably eggnog drunk" },
    "20":  { password: "will", imgSrc: "img/20.jpeg",  message: "I can hear the giggling echos of you and Lina chasing squash balls around" },
    "21":  { password: "sure", imgSrc: "img/21.jpeg",  message: "Love is: The so many nights all I wanted to do was go sleep but I still would think of a fun original goodnight message" },
    "22":  { password: "luna", imgSrc: "img/22.jpeg",  message: "Hugging you swaying as we bask in being alone together in public" },
    "23":  { password: "moment", imgSrc: "img/23.jpeg",  message: "You got me my first ever bread!" },
    "24":  { password: "sol", imgSrc: "img/24.jpeg",  message: "Someday we will: spend a Christmas together!" },
    "25":  { password: "me", imgSrc: "img/25.jpeg",  message: "Bring back this haircut???" },
    "26":  { password: "say", imgSrc: "img/26.jpeg",  message: "Jaz and Eric hall of fame picture" },
    "27":  { password: "the", imgSrc: "img/27.jpeg",  message: "We used to: Be too shy to change in the same room as each other" },
    "28":  { password: "complete", imgSrc: "img/28.jpeg",  message: "2/25/2020 the first time we sent a casual goodnight text (so now a 5 year and 8 month streak?!)" },
    "29":  { password: "to", imgSrc: "img/29.jpeg",  message: "Honey I shrunk the Jaz!" },
    "30":  { password: "words", imgSrc: "img/30.jpeg",  message: "Would Jaz + Eric exist without this excursion??" },
    "31":  { password: "say", imgSrc: "img/31.jpeg",  message: "Love is: a pint of ice cream, ori, and not a single plan" },
    "32":  { password: "you", imgSrc: "img/32.jpeg",  message: "Jaz-TV is my favorite show" },
    "33":  { password: "to", imgSrc: "img/33.jpeg",  message: "I love make things, but when I make things for you it feels so meaningful" },
    "34":  { password: "us", imgSrc: "img/34.jpeg",  message: "I propose a tradition! Each Super Bowl Sunday we go out and enjoy being the only ones there" },
    "35":  { password: "always", imgSrc: "img/35.jpeg",  message: "Together we: make eachother stronger, pushing to do the things we know we need to do or say" },
    "36":  { password: "jaz", imgSrc: "img/36.jpeg",  message: "Our freckles are mirror images and when we kiss they're perfectly in line" },
    "37":  { password: "there", imgSrc: "img/37.jpeg",  message: "Imagine our lives together if we settle down in Denver, would we be a ski couple? Prob not but maybe" },
    "38":  { password: "now", imgSrc: "img/38.jpeg",  message: "I want you to be my sous chef for the rest of all time" },
    "39":  { password: "to", imgSrc: "img/39.jpeg",  message: "Someday we will: travel to a Spanish speaking country and stay in Spanish the entire time!!" },
    "40":  { password: "normal", imgSrc: "img/40.jpeg",  message: "Hall of fame Jaz+Eric moment number 347" },
    "41":  { password: "us", imgSrc: "img/41.jpeg",  message: "Love is: Meaningful moments shared with you, sharing family with you, being happy sad with you" },
    "42":  { password: "no", imgSrc: "img/42.jpeg",  message: "'What's that noise up the stairs babe, is it Christmas morning creaks' -Blood Bank (I love this line)" },
    "43":  { password: "life", imgSrc: "img/43.jpeg",  message: "Can you believe that our families both live thousands of miles away and yet we've still all met?!" },
    "44":  { password: "you", imgSrc: "img/44.jpeg",  message: "That trumpet went so hard" },
    "45":  { password: "you", imgSrc: "img/45.jpeg",  message: "Reason number 45 why I love you: We share friends so well" },
    "46":  { password: "we", imgSrc: "img/46.jpeg",  message: "This is your perfection in one photo. Beautiful, balanced, silly" },
    "47":  { password: "know", imgSrc: "img/47.jpeg",  message: "You turn each shiny surface into a chance for a new memory" },
    "48":  { password: "one", imgSrc: "img/48.jpeg",  message: "" },
    "49":  { password: "a", imgSrc: "img/49.jpeg",  message: "" },
    "50":  { password: "", imgSrc: "img/50.jpeg",  message: "" },
    "51":  { password: "", imgSrc: "img/51.jpeg",  message: "" },
    "52":  { password: "", imgSrc: "img/52.jpeg",  message: "" },
    "53":  { password: "", imgSrc: "img/53.jpeg",  message: "" },
    "54":  { password: "", imgSrc: "img/54.jpeg",  message: "" },
    "55":  { password: "", imgSrc: "img/55.jpeg",  message: "" },
    "56":  { password: "", imgSrc: "img/56.jpeg",  message: "" },
    "57":  { password: "", imgSrc: "img/57.jpeg",  message: "" },
    "58":  { password: "", imgSrc: "img/58.jpeg",  message: "" },
    "59":  { password: "", imgSrc: "img/59.jpeg",  message: "" },
    "60":  { password: "", imgSrc: "img/60.jpeg",  message: "" },
    "61":  { password: "", imgSrc: "img/61.jpeg",  message: "" },
    "62":  { password: "", imgSrc: "img/62.jpeg",  message: "" },
    "63":  { password: "", imgSrc: "img/63.jpeg",  message: "" },
    "64":  { password: "", imgSrc: "img/64.jpeg",  message: "" },
    "65":  { password: "", imgSrc: "img/65.jpeg",  message: "" },
    "66":  { password: "", imgSrc: "img/66.jpeg",  message: "" },
    "67":  { password: "", imgSrc: "img/67.jpeg",  message: "" },
    "68":  { password: "", imgSrc: "img/68.jpeg",  message: "" },
    
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