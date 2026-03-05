// Globe Nightclub - Bottles Renderer
// Renders bottle menu grouped by category

function renderBottles(data) {
  const container = document.getElementById('bottleMenu');
  if (!container) return;

  // Group by category, preserving order
  const categories = [];
  const catMap = {};

  data.filter(item => item.category !== 'Non-Alcoholic').forEach(item => {
    const cat = item.category || 'Other';
    if (!catMap[cat]) {
      catMap[cat] = [];
      categories.push(cat);
    }
    catMap[cat].push(item);
  });

  // Sort within categories by sort_order
  categories.forEach(cat => {
    catMap[cat].sort((a, b) => (parseInt(a.sort_order) || 0) - (parseInt(b.sort_order) || 0));
  });

  container.innerHTML = categories.map(cat => {
    const items = catMap[cat];
    return `<div class="bottle-category">
      <div class="bottle-cat-title">${escapeHtml(cat)}</div>
      ${items.map(item => `<div class="bottle-item">
        <span class="bname">${escapeHtml(item.name)}</span>
        <span class="bprice">${escapeHtml(item.price)}</span>
      </div>
      ${item.note ? `<div class="bottle-note">${escapeHtml(item.note)}</div>` : ''}`).join('')}
    </div>`;
  }).join('');
}
