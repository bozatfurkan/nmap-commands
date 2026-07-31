/**
 * Recent Searches History Manager Module (LocalStorage)
 */

export class RecentSearchManager {
  constructor() {
    this.storageKey = "nmap_recent_searches_v1";
    this.maxHistory = 6;
  }

  getHistory() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  addQuery(queryStr) {
    const q = (queryStr || '').trim();
    if (!q || q.length < 2) return;

    let history = this.getHistory();
    history = history.filter(item => item.toLowerCase() !== q.toLowerCase());
    history.unshift(q);

    if (history.length > this.maxHistory) {
      history = history.slice(0, this.maxHistory);
    }

    try {
      localStorage.setItem(this.storageKey, JSON.stringify(history));
    } catch (e) {
      console.error("Error saving recent search to localStorage", e);
    }
  }

  clearHistory() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (e) {
      console.error("Error clearing search history", e);
    }
  }
}
