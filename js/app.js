// Globe Nightclub - App Orchestrator
// Loads SiteConfig first, then all other sections in parallel

(async function init() {
  try {
    // Phase 1: Load SiteConfig first (populates all text across the site)
    const siteConfig = await loadSheet(CONFIG.TABS.SITE_CONFIG, 'site_config');
    renderSiteConfig(siteConfig);

    // Phase 2: Load all other sections in parallel
    const [events, schedule, bottles, vipPkgs, food, gallery, specials] = await Promise.all([
      loadSheet(CONFIG.TABS.EVENTS, null),
      loadSheet(CONFIG.TABS.SCHEDULE, 'schedule'),
      loadSheet(CONFIG.TABS.BOTTLES, 'bottles'),
      loadSheet(CONFIG.TABS.VIP_PACKAGES, 'vip_packages'),
      loadSheet(CONFIG.TABS.FOOD, 'food'),
      loadSheet(CONFIG.TABS.GALLERY, 'gallery'),
      loadSheet(CONFIG.TABS.SPECIALS, 'specials')
    ]);

    // Render all sections
    if (events.length > 0) {
      renderEvents(events);
    } else {
      const container = document.getElementById('eventsContainer');
      if (container) {
        container.innerHTML = '<div class="no-events">Events coming soon. Follow us on Instagram for the latest!</div>';
      }
    }

    renderSchedule(schedule);
    renderBottles(bottles);
    renderVIPPackages(vipPkgs);
    renderFood(food);
    renderGallery(gallery);
    renderSpecials(specials);

    // Initialize reservation floor map
    if (typeof initReservation === 'function') initReservation();

    // Show setup banner if no Sheet ID configured
    if (!CONFIG.SHEET_ID) {
      const banner = document.getElementById('setupBanner');
      if (banner) banner.classList.add('show');
    }

  } catch (err) {
    console.error('[Globe] Init error:', err);
  }
})();
