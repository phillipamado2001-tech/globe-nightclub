// Globe Nightclub - Food Renderer
// Renders "Bite Me" food menu items

function renderFood(data) {
  const container = document.getElementById('foodMenu');
  if (!container) return;

  const sorted = [...data].sort((a, b) =>
    (parseInt(a.sort_order) || 0) - (parseInt(b.sort_order) || 0)
  );

  container.innerHTML = sorted.map(item => `<div class="bite-item">
    <h4>${escapeHtml(item.name)}</h4>
    <p>${escapeHtml(item.description)}${item.price ? ` <strong style="color:var(--accent)">${escapeHtml(item.price)}</strong>` : ''}</p>
  </div>`).join('');
}
