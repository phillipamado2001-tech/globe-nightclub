// Globe Nightclub - Site Config Renderer
// Populates hero, about, contact, footer, and other text from SiteConfig key-value pairs

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Allow trusted HTML keys (ones we control via Sheets that intentionally contain <br> etc.)
const HTML_SAFE_KEYS = new Set([
  'about_title', 'contact_address', 'contact_hours', 'footer_legal'
]);

function renderSiteConfig(data) {
  // Build key-value map
  const cfg = {};
  data.forEach(row => {
    if (row.key) cfg[row.key] = row.value || '';
  });

  // Helper: get value, escaped unless in safe list
  const get = (key) => HTML_SAFE_KEYS.has(key) ? (cfg[key] || '') : escapeHtml(cfg[key]);

  // Hero
  setHtml('[data-config="hero_eyebrow"]', get('hero_eyebrow'));
  setHtml('[data-config="hero_subtitle"]', get('hero_subtitle'));
  setAttr('[data-config="hero_cta_primary"]', 'href', cfg.hero_cta_primary_link || '#vip');
  setHtml('[data-config="hero_cta_primary"]', get('hero_cta_primary_text'));
  setAttr('[data-config="hero_cta_secondary"]', 'href', cfg.hero_cta_secondary_link || '#events');
  setHtml('[data-config="hero_cta_secondary"]', get('hero_cta_secondary_text'));

  // Events header
  setHtml('[data-config="events_eyebrow"]', get('events_eyebrow'));
  setHtml('[data-config="events_title"]', get('events_title'));

  // Schedule header
  setHtml('[data-config="schedule_eyebrow"]', get('schedule_eyebrow'));
  setHtml('[data-config="schedule_title"]', get('schedule_title'));

  // VIP header
  setHtml('[data-config="vip_eyebrow"]', get('vip_eyebrow'));
  setHtml('[data-config="vip_title"]', get('vip_title'));
  setHtml('[data-config="vip_description"]', get('vip_description'));
  setHtml('[data-config="vip_collection_title"]', get('vip_collection_title'));
  setHtml('[data-config="vip_collection_subtitle"]', get('vip_collection_subtitle'));

  // Food header
  setHtml('[data-config="food_eyebrow"]', get('food_eyebrow'));
  setHtml('[data-config="food_title"]', get('food_title'));
  setHtml('[data-config="food_subtitle"]', get('food_subtitle'));

  // Instagram
  setHtml('[data-config="instagram_eyebrow"]', get('instagram_eyebrow'));
  setHtml('[data-config="instagram_handle"]', get('instagram_handle'));
  if (cfg.instagram_embed_url) {
    setAttr('#igEmbed', 'src', cfg.instagram_embed_url);
  }
  if (cfg.instagram_url) {
    setAttr('[data-config="instagram_follow"]', 'href', cfg.instagram_url);
  }

  // Gallery header
  setHtml('[data-config="gallery_eyebrow"]', get('gallery_eyebrow'));
  setHtml('[data-config="gallery_title"]', get('gallery_title'));

  // About
  setHtml('[data-config="about_eyebrow"]', get('about_eyebrow'));
  setHtml('[data-config="about_title"]', get('about_title'));
  setHtml('[data-config="about_p1"]', get('about_p1'));
  setHtml('[data-config="about_p2"]', get('about_p2'));
  setHtml('[data-config="about_stat1_num"]', get('about_stat1_num'));
  setHtml('[data-config="about_stat1_label"]', get('about_stat1_label'));
  setHtml('[data-config="about_stat2_num"]', get('about_stat2_num'));
  setHtml('[data-config="about_stat2_label"]', get('about_stat2_label'));
  setHtml('[data-config="about_stat3_num"]', get('about_stat3_num'));
  setHtml('[data-config="about_stat3_label"]', get('about_stat3_label'));
  if (cfg.about_image) {
    setAttr('[data-config="about_image"]', 'src', cfg.about_image);
  }

  // Private Events
  setHtml('[data-config="private_eyebrow"]', get('private_eyebrow'));
  setHtml('[data-config="private_title"]', get('private_title'));
  setHtml('[data-config="private_description"]', get('private_description'));
  for (let i = 1; i <= 4; i++) {
    setHtml(`[data-config="private_type${i}_name"]`, get(`private_type${i}_name`));
    setHtml(`[data-config="private_type${i}_desc"]`, get(`private_type${i}_desc`));
  }

  // Contact
  setHtml('[data-config="contact_eyebrow"]', get('contact_eyebrow'));
  setHtml('[data-config="contact_title"]', get('contact_title'));
  setHtml('[data-config="contact_address"]', get('contact_address'));
  if (cfg.contact_address_url) {
    setAttr('[data-config="contact_address"]', 'href', cfg.contact_address_url);
  }
  setHtml('[data-config="contact_phone"]', get('contact_phone'));
  if (cfg.contact_phone_raw) {
    setAttr('[data-config="contact_phone"]', 'href', 'tel:' + cfg.contact_phone_raw);
  }
  setHtml('[data-config="contact_hours"]', get('contact_hours'));
  setHtml('[data-config="contact_age"]', get('contact_age'));
  if (cfg.contact_map_embed) {
    setAttr('#contactMap', 'src', cfg.contact_map_embed);
  }
  if (cfg.social_facebook) {
    setAttr('[data-config="social_facebook"]', 'href', cfg.social_facebook);
  }
  if (cfg.social_instagram) {
    setAttr('[data-config="social_instagram"]', 'href', cfg.social_instagram);
  }

  // Footer
  setHtml('[data-config="footer_legal"]', get('footer_legal'));
}

// Helpers
function setHtml(selector, html) {
  const el = document.querySelector(selector);
  if (el && html) el.innerHTML = html;
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
}
