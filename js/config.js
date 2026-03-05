// Globe Nightclub - Configuration
// Update SHEET_ID after publishing your Google Sheet

const CONFIG = {
  // Google Sheet ID - paste your Sheet ID here after publishing
  SHEET_ID: '',

  // Tab names matching the Google Sheet workbook tabs
  TABS: {
    EVENTS: 'Events',
    SCHEDULE: 'Schedule',
    BOTTLES: 'Bottles',
    VIP_PACKAGES: 'VIP_Packages',
    FOOD: 'Food',
    GALLERY: 'Gallery',
    SPECIALS: 'Specials',
    SITE_CONFIG: 'SiteConfig'
  },

  // Cache TTL in milliseconds (5 minutes)
  CACHE_TTL: 5 * 60 * 1000,

  // Google Sheets CSV export base URL
  SHEETS_BASE: 'https://docs.google.com/spreadsheets/d/',

  // Build the CSV URL for a given tab
  getSheetURL(tab) {
    return `${this.SHEETS_BASE}${this.SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
  }
};
