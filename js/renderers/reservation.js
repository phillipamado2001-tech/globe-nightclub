// Globe Nightclub - Reservation System
// Interactive SVG floor map with booth/table selection and Netlify Forms submission

(function() {
  // ── Seat definitions matching venue floor plan ──
  const BOOTHS = [
    { id: 'booth-1', label: 'Booth 1', x: 25, y: 395, w: 65, h: 88 },
    { id: 'booth-2', label: 'Booth 2', x: 25, y: 275, w: 65, h: 88 },
    { id: 'booth-3', label: 'Booth 3', x: 175, y: 148, w: 160, h: 58 },
    { id: 'booth-4', label: 'Booth 4', x: 480, y: 148, w: 140, h: 58, note: 'Pole' },
    { id: 'booth-5', label: 'Booth 5', x: 710, y: 280, w: 65, h: 95 },
    { id: 'booth-6', label: 'Booth 6', x: 710, y: 410, w: 65, h: 95 }
  ];

  const TABLES = [
    { id: 'table-1', label: 'T1', x: 718, y: 580, w: 52, h: 52 },
    { id: 'table-2', label: 'T2', x: 718, y: 652, w: 52, h: 52 },
    { id: 'table-3', label: 'T3', x: 718, y: 724, w: 52, h: 52 },
    { id: 'table-4', label: 'T4', x: 480, y: 855, w: 78, h: 50 },
    { id: 'table-5', label: 'T5', x: 218, y: 855, w: 78, h: 50 },
    { id: 'table-6', label: 'T6', x: 28, y: 724, w: 52, h: 52 },
    { id: 'table-7', label: 'T7', x: 28, y: 648, w: 52, h: 52 },
    { id: 'table-8', label: 'T8', x: 28, y: 572, w: 52, h: 52 }
  ];

  const ALL_SEATS = BOOTHS; // Only booths are reservable

  const OCCASIONS = [
    'Birthday', 'Girls Night', 'Guys Night',
    'Anniversary', 'Corporate', 'Just Because', 'Other'
  ];

  const BOTTLE_CATS = ['Vodka', 'Tequila', 'Cognac', 'Whiskey', 'Rum', 'Gin', 'Champagne'];

  let selectedSeat = null;

  // ── SVG Floor Map ──
  function buildSVG() {
    return `
    <svg viewBox="0 0 800 940" xmlns="http://www.w3.org/2000/svg" class="floor-map-svg" role="img" aria-label="Globe Nightclub floor plan — click a VIP booth to reserve">
      <defs>
        <filter id="seatGlow">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="ambientGlow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stop-color="rgba(200,164,78,.06)"/>
          <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
      </defs>

      <!-- Ambient atmosphere -->
      <rect x="4" y="4" width="792" height="932" fill="url(#ambientGlow)" rx="4"/>

      <!-- Outer walls -->
      <rect x="4" y="4" width="792" height="932" fill="none" stroke="var(--border-light)" stroke-width="2" rx="4"/>

      <!-- Top partition wall -->
      <line x1="4" y1="125" x2="160" y2="125" stroke="var(--border-light)" stroke-width="1.5"/>
      <line x1="355" y1="125" x2="798" y2="125" stroke="var(--border-light)" stroke-width="1.5"/>

      <!-- Landmark labels -->
      <text x="55" y="32" class="map-lm">Kitchen</text>
      <text x="365" y="32" class="map-lm">Bathrooms</text>
      <text x="700" y="32" class="map-lm">Patio Door</text>
      <text x="48" y="916" class="map-lm-bold">Entrance</text>
      <text x="698" y="916" class="map-lm-bold">Exit</text>
      <text x="790" y="580" class="map-lm" writing-mode="vertical-rl">Patio</text>

      <!-- Bar (center) -->
      <rect x="248" y="445" width="305" height="330" fill="rgba(26,26,26,.6)" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="8 4" rx="5"/>
      <text x="400" y="618" class="map-bar">Bar</text>

      <!-- DJ Booth -->
      <rect x="655" y="130" width="128" height="78" fill="rgba(26,26,26,.4)" stroke="var(--border)" stroke-width="1" stroke-dasharray="5 3" rx="3"/>
      <text x="719" y="174" class="map-lm">DJ Booth</text>

      <!-- Stage lines near Booth 4 -->
      <line x1="445" y1="158" x2="445" y2="196" stroke="var(--border)" stroke-width="1"/>
      <line x1="455" y1="158" x2="455" y2="196" stroke="var(--border)" stroke-width="1"/>
      <line x1="465" y1="158" x2="465" y2="196" stroke="var(--border)" stroke-width="1"/>

      <!-- Tables (non-interactive landmarks) -->
      ${TABLES.map(t => `
      <g class="tbl-landmark">
        <rect x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="rgba(22,22,22,.5)" stroke="var(--border)" stroke-width="1" rx="3"/>
        <text x="${t.x + t.w/2}" y="${t.y + t.h/2 + 4}" class="tbl-lbl">${t.label}</text>
      </g>`).join('')}

      <!-- VIP Booths (interactive, with pulse animation) -->
      ${BOOTHS.map(b => `
      <g class="seat-g" data-seat="${b.id}" role="button" tabindex="0" aria-label="Reserve ${b.label}${b.note ? ' (' + b.note + ')' : ''}">
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" class="seat-pulse" rx="6"/>
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" class="seat-r seat-booth" rx="6"/>
        <text x="${b.x + b.w/2}" y="${b.y + b.h/2 + (b.note ? -5 : 4)}" class="seat-lbl">${b.label}</text>
        ${b.note ? `<text x="${b.x + b.w/2}" y="${b.y + b.h/2 + 13}" class="seat-sub">(${b.note})</text>` : ''}
      </g>`).join('')}

      <!-- Legend -->
      <rect x="310" y="872" width="16" height="16" rx="4" fill="rgba(200,164,78,.12)" stroke="var(--accent)" stroke-width="1.5" opacity=".8"/>
      <text x="334" y="884" class="map-legend">VIP Booth — tap to reserve</text>
    </svg>`;
  }

  // ── Reservation Form ──
  function buildForm() {
    return `
    <form name="vip-reservation" method="POST" data-netlify="true" netlify-honeypot="bot-field" id="reservationForm" class="res-form">
      <input type="hidden" name="form-name" value="vip-reservation">
      <input type="hidden" name="booth" id="resSeatField">
      <p style="display:none"><input name="bot-field"></p>

      <div class="res-form-hdr">
        <h3 id="resFormTitle">Select a VIP booth above</h3>
        <p id="resFormSub">Fill out the details below and we'll confirm your reservation.</p>
      </div>

      <div class="res-grid">
        <div class="res-field">
          <label class="res-label" for="resName">Name</label>
          <input type="text" id="resName" name="name" required class="res-input" placeholder="Full name">
        </div>
        <div class="res-field">
          <label class="res-label" for="resEmail">Email</label>
          <input type="email" id="resEmail" name="email" required class="res-input" placeholder="you@email.com">
        </div>
        <div class="res-field">
          <label class="res-label" for="resPhone">Phone</label>
          <input type="tel" id="resPhone" name="phone" required class="res-input" placeholder="(509) 555-0123">
        </div>
        <div class="res-field">
          <label class="res-label" for="resDate">Date</label>
          <input type="date" id="resDate" name="date" required class="res-input">
        </div>
        <div class="res-field">
          <label class="res-label" for="resGuests">Number of Guests</label>
          <input type="number" id="resGuests" name="guests" required min="1" max="50" class="res-input" placeholder="4">
        </div>
        <div class="res-field">
          <label class="res-label" for="resOccasion">Occasion</label>
          <select id="resOccasion" name="occasion" required class="res-input">
            <option value="" disabled selected>Select occasion</option>
            ${OCCASIONS.map(o => `<option value="${o}">${o}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="res-field res-bottles-wrap">
        <label class="res-label">Desired Bottles <span style="font-weight:400;color:var(--text-muted)">(optional)</span></label>
        <div class="res-bottles" id="resBottles"></div>
      </div>

      <div class="res-field">
        <label class="res-label" for="resNotes">Additional Notes</label>
        <textarea id="resNotes" name="notes" class="res-input res-textarea" rows="3" placeholder="Special requests, preferred music, etc."></textarea>
      </div>

      <div class="res-actions">
        <button type="submit" class="btn-primary res-submit-btn">Submit Reservation</button>
        <button type="button" class="btn-ghost" onclick="reservationCancel()">Cancel</button>
      </div>
    </form>

    <div id="resConfirm" class="res-confirm">
      <div class="res-confirm-check">&#10003;</div>
      <h3 id="confirmTitle">Reservation Submitted!</h3>
      <p id="confirmMsg">We'll be in touch shortly.</p>
      <button type="button" class="btn-ghost" style="margin-top:1.5rem" onclick="reservationReset()">Make Another Reservation</button>
    </div>

    <div id="resError" class="res-error">
      <p>Something went wrong. Please try again or call us at <a href="tel:5094434014">(509) 443-4014</a>.</p>
      <button type="button" class="btn-ghost" style="margin-top:1rem" onclick="reservationReset()">Try Again</button>
    </div>`;
  }

  // ── Populate bottle checkboxes from fallback data ──
  function populateBottles() {
    const grid = document.getElementById('resBottles');
    if (!grid) return;

    const bottles = (typeof FALLBACK !== 'undefined') ? FALLBACK.bottles : [];
    const grouped = {};
    bottles.forEach(b => {
      if (b.category === 'Non-Alcoholic') return;
      if (!grouped[b.category]) grouped[b.category] = [];
      grouped[b.category].push(b);
    });

    grid.innerHTML = BOTTLE_CATS.map(cat => {
      const items = grouped[cat] || [];
      if (!items.length) return '';
      return `
        <div class="res-bcat">
          <div class="res-bcat-title">${cat}</div>
          <div class="res-bcat-pills">
            ${items.map(b => `
            <label class="res-pill">
              <input type="checkbox" name="bottles" value="${b.name} (${b.category})">
              <span>${b.name}</span>
            </label>`).join('')}
          </div>
        </div>`;
    }).join('');
  }

  // ── Seat selection ──
  function selectSeat(seatId) {
    const seat = ALL_SEATS.find(s => s.id === seatId);
    if (!seat) return;

    // Toggle: clicking same seat deselects
    if (selectedSeat && selectedSeat.id === seatId) {
      deselectAll();
      return;
    }

    // Deselect previous
    document.querySelectorAll('.seat-g.selected').forEach(g => g.classList.remove('selected'));

    // Select new
    const el = document.querySelector(`[data-seat="${seatId}"]`);
    if (el) el.classList.add('selected');
    selectedSeat = seat;

    // Update and show form
    document.getElementById('resSeatField').value = seat.label;
    document.getElementById('resFormTitle').textContent = 'Reserve ' + seat.label;
    document.getElementById('resConfirm').style.display = 'none';
    document.getElementById('resError').style.display = 'none';

    const form = document.getElementById('reservationForm');
    form.style.display = 'block';
    requestAnimationFrame(() => {
      form.classList.add('open');
      form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Set min date to today
    const d = document.getElementById('resDate');
    if (d) d.min = new Date().toISOString().split('T')[0];
  }

  function deselectAll() {
    document.querySelectorAll('.seat-g.selected').forEach(g => g.classList.remove('selected'));
    selectedSeat = null;
    const form = document.getElementById('reservationForm');
    form.classList.remove('open');
    setTimeout(() => { form.style.display = 'none'; form.reset(); }, 300);
  }

  // ── Form submission via fetch (no page redirect) ──
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('.res-submit-btn');

    // Collect checked bottles into a string
    const bottles = Array.from(form.querySelectorAll('input[name="bottles"]:checked'))
      .map(cb => cb.value);

    btn.textContent = 'Submitting...';
    btn.disabled = true;

    const fd = new FormData(form);
    fd.delete('bottles');
    if (bottles.length) fd.append('bottles', bottles.join(', '));

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(fd).toString()
    })
    .then(res => {
      if (!res.ok) throw new Error('submit failed');
      form.style.display = 'none';
      form.classList.remove('open');
      const c = document.getElementById('resConfirm');
      document.getElementById('confirmTitle').textContent = 'Reservation Submitted!';
      document.getElementById('confirmMsg').textContent =
        'Your request for ' + selectedSeat.label + ' has been submitted. We\u2019ll be in touch shortly to confirm.';
      c.style.display = 'block';
      c.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    })
    .catch(() => {
      btn.textContent = 'Submit Reservation';
      btn.disabled = false;
      document.getElementById('resError').style.display = 'block';
    });
  }

  // ── Global helpers for inline onclick ──
  window.reservationCancel = function() {
    deselectAll();
  };

  window.reservationReset = function() {
    document.getElementById('resConfirm').style.display = 'none';
    document.getElementById('resError').style.display = 'none';
    deselectAll();
  };

  // ── Initialize ──
  window.initReservation = function() {
    const container = document.getElementById('reservationMap');
    if (!container) return;

    container.innerHTML = buildSVG() + buildForm();
    populateBottles();

    // Seat click/keyboard handlers
    container.querySelectorAll('.seat-g').forEach(g => {
      const id = g.dataset.seat;
      g.addEventListener('click', () => selectSeat(id));
      g.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSeat(id); }
      });
    });

    // Form submit
    document.getElementById('reservationForm').addEventListener('submit', handleSubmit);
  };
})();
