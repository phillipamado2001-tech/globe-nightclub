// Globe Nightclub - Google Sheets Loader
// Fetches CSV from published Google Sheets with caching and fallback

async function loadSheet(tabName, fallbackKey) {
  // 1. Try cache first
  const cached = Cache.get(tabName);
  if (cached) return cached;

  // 2. Try Google Sheets
  if (CONFIG.SHEET_ID) {
    try {
      const url = CONFIG.getSheetURL(tabName);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const data = parseCSV(text);
      if (data.length > 0) {
        Cache.set(tabName, data);
        return data;
      }
    } catch (err) {
      console.warn(`[Globe] Failed to load "${tabName}" from Sheets:`, err.message);
    }
  }

  // 3. Fall back to hardcoded data
  if (fallbackKey && FALLBACK[fallbackKey]) {
    return FALLBACK[fallbackKey];
  }

  return [];
}
