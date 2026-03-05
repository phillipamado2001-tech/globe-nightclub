// Globe Nightclub - Specials Renderer
// Renders active promotions into their target sections

function renderSpecials(data) {
  const active = data.filter(s => s.active === 'true' || s.active === 'TRUE');

  active.forEach(special => {
    if (special.section === 'vip') {
      renderVIPSpecial(special);
    } else if (special.section === 'bottles') {
      renderBottleSpecial(special);
    }
  });
}

function renderVIPSpecial(special) {
  const container = document.getElementById('vipSpecial');
  if (!container) return;

  container.innerHTML = `
    <div style="font-size:.6rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:.5rem">${escapeHtml(special.title)}</div>
    <div style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:400;color:var(--white)">${escapeHtml(special.subtitle)}</div>
    ${special.description ? `<p style="font-size:.82rem;color:var(--text-sec);margin-top:.4rem">${escapeHtml(special.description)}</p>` : ''}
    ${special.link_url ? `<a href="${escapeHtml(special.link_url)}" class="btn-ghost" style="margin-top:1rem;display:inline-block">${escapeHtml(special.link_text || 'Learn More')}</a>` : ''}
  `;
  container.style.display = 'block';
}

function renderBottleSpecial(special) {
  const container = document.getElementById('bottleSpecial');
  if (!container) return;

  container.innerHTML = escapeHtml(special.subtitle);
  container.style.display = 'block';
}
