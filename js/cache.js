// Globe Nightclub - localStorage Caching Layer
// Caches sheet data for CONFIG.CACHE_TTL (default 5 min) to reduce API calls

const Cache = {
  get(key) {
    try {
      const raw = localStorage.getItem('globe_' + key);
      if (!raw) return null;
      const { data, ts } = JSON.parse(raw);
      if (Date.now() - ts > CONFIG.CACHE_TTL) {
        localStorage.removeItem('globe_' + key);
        return null;
      }
      return data;
    } catch {
      return null;
    }
  },

  set(key, data) {
    try {
      localStorage.setItem('globe_' + key, JSON.stringify({ data, ts: Date.now() }));
    } catch {
      // localStorage full or unavailable - silently fail
    }
  },

  clear() {
    try {
      Object.keys(localStorage)
        .filter(k => k.startsWith('globe_'))
        .forEach(k => localStorage.removeItem(k));
    } catch {
      // ignore
    }
  }
};

// Support ?refresh=1 URL param to bust cache
if (new URLSearchParams(window.location.search).has('refresh')) {
  Cache.clear();
  // Clean URL without reload
  const url = new URL(window.location);
  url.searchParams.delete('refresh');
  window.history.replaceState({}, '', url);
}
