// Globe Nightclub - VIP Packages Renderer
// Renders VIP package cards

function renderVIPPackages(data) {
  const container = document.getElementById('vipPackages');
  if (!container) return;

  const sorted = [...data].sort((a, b) =>
    (parseInt(a.sort_order) || 0) - (parseInt(b.sort_order) || 0)
  );

  container.innerHTML = sorted.map(pkg => `<div class="vip-pkg-card">
    <div class="vip-pkg-name">${escapeHtml(pkg.name)}</div>
    <div class="vip-pkg-price">${escapeHtml(pkg.price)}</div>
    <div class="vip-pkg-desc">${escapeHtml(pkg.description)}</div>
  </div>`).join('');
}
