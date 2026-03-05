// Globe Nightclub - Gallery Renderer
// Renders gallery grid with lightbox support

function renderGallery(data) {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  const sorted = [...data].sort((a, b) =>
    (parseInt(a.sort_order) || 0) - (parseInt(b.sort_order) || 0)
  );

  container.innerHTML = sorted.map(item => {
    if (item.image_url) {
      return `<div class="gallery-cell">
        <img src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.alt_text || '')}" loading="lazy">
        <div class="gallery-cell-overlay"></div>
      </div>`;
    }
    return `<div class="gallery-cell">
      <div class="gallery-placeholder">${escapeHtml(item.caption || item.alt_text || '')}</div>
    </div>`;
  }).join('');

  // Re-attach lightbox click handlers
  container.querySelectorAll('.gallery-cell img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });
}
