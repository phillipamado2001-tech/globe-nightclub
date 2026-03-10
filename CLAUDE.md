# Globe Nightclub - AI-Managed Website

## What This Is
A Netlify-hosted nightclub website where ALL content is managed by editing `js/fallback-data.js`. No Google Sheets needed. Claude Code is the CMS.

**Live site:** https://imaginative-cuchufli-0a71b8.netlify.app/
**Deploy:** Push to git → Netlify auto-deploys

## How to Make Changes

When the user asks to update the site (add events, change prices, add photos, update text), follow this process:

1. **Edit `js/fallback-data.js`** — this is the single source of truth for all content
2. **Copy images** to `images/` folder if photos are involved
3. **Confirm changes** with the user before committing
4. **Commit & push** only when the user says to deploy

## Data Structure in fallback-data.js

### Events (FALLBACK.events — currently empty, add as needed)
```js
{ name: 'Event Name', date: '03/14/2026', time: '8PM – 2AM', genre: 'EDM / House', tag: 'Special Event', description: 'Optional description', flyer_url: 'images/flyer.jpg', ticket_link: 'https://...' }
```
- `date` must be MM/DD/YYYY — past events are auto-filtered by the site
- `flyer_url` — use relative path `images/filename.jpg` for local images
- `ticket_link` — optional external URL

### Schedule (FALLBACK.schedule)
```js
{ day: 'Thu', status: 'active', event_name: 'Ladies Night', time: '8PM – 2AM' }
```
- `status` is either `'active'` or `'closed'`

### Bottles (FALLBACK.bottles)
```js
{ category: 'Vodka', name: 'Titos', price: '$300', note: '', sort_order: '1' }
```
- Categories: Vodka, Tequila, Cognac, Whiskey, Rum, Gin, Champagne
- `note` — optional, e.g. '*Contact server for flavors'
- `sort_order` — controls display order within category

### VIP Packages (FALLBACK.vip_packages)
```js
{ name: 'Champagne Campaign', price: '$300', description: '1 Belaire, 1 Do Epic Sh*t', sort_order: '1' }
```

### Food (FALLBACK.food)
```js
{ name: 'Oysters Royale', description: 'Description here', price: '', sort_order: '1' }
```

### Gallery (FALLBACK.gallery)
```js
{ image_url: 'images/photo.jpeg', alt_text: 'Dance floor', caption: '', sort_order: '1' }
```
- When adding photos: copy the image file to `images/`, use relative path

### Specials (FALLBACK.specials)
```js
{ title: 'Friday Special', subtitle: 'Half Off Bottle Service', description: 'Every Friday...', active: 'true', section: 'vip', link_url: '', link_text: '' }
```
- `section`: `'vip'` (gold banner) or `'bottles'` (text under bottle menu)
- `active`: `'true'` or `'false'` to show/hide

### Site Config (FALLBACK.site_config)
Key-value pairs controlling all text on the site. Format:
```js
{ key: 'about_p1', value: 'Text content here' }
```
Keys: hero_eyebrow, hero_subtitle, hero_cta_primary_text, hero_cta_primary_link, hero_cta_secondary_text, hero_cta_secondary_link, events_eyebrow, events_title, schedule_eyebrow, schedule_title, vip_eyebrow, vip_title, vip_description, vip_collection_title, vip_collection_subtitle, food_eyebrow, food_title, food_subtitle, instagram_eyebrow, instagram_handle, instagram_url, instagram_embed_url, gallery_eyebrow, gallery_title, about_eyebrow, about_title, about_p1, about_p2, about_stat1_num, about_stat1_label, about_stat2_num, about_stat2_label, about_stat3_num, about_stat3_label, about_image, private_eyebrow, private_title, private_description, private_type1_name, private_type1_desc, private_type2_name, private_type2_desc, private_type3_name, private_type3_desc, private_type4_name, private_type4_desc, contact_eyebrow, contact_title, contact_address, contact_address_url, contact_phone, contact_phone_raw, contact_hours, contact_age, contact_map_embed, social_facebook, social_instagram, footer_legal, og_image

## File Structure
```
globe-nightclub/
├── index.html              ← Main HTML (sections with data-config attributes)
├── css/styles.css          ← All styles
├── js/
│   ├── config.js           ← Sheet ID config (empty = use fallback data)
│   ├── fallback-data.js    ← THE DATA FILE - edit this to change content
│   ├── csv-parser.js       ← CSV parsing for Google Sheets
│   ├── cache.js            ← localStorage caching layer
│   ├── sheets-loader.js    ← Loads from Sheets with fallback
│   ├── ui.js               ← Nav, lightbox, scroll effects
│   ├── app.js              ← Main orchestrator
│   └── renderers/          ← One renderer per section
├── images/                 ← All site images
├── netlify.toml            ← Netlify config
└── sheets-template/        ← CSV templates (reference only)
```

## Important Notes
- The site has a VIP reservation system with an interactive SVG floor map (6 booths). Submissions go to Netlify Forms.
- Images should be JPEG, reasonable size. The `images/` folder already has venue photos.
- Unicode escapes are used for special chars: `\u2013` (–), `\u2014` (—), `\u00e9` (é), `\u00a9` (©), `\u00eb` (ë)
- When editing site_config values that contain HTML (like `about_title`, `contact_address`, `contact_hours`), use `<br>` for line breaks
