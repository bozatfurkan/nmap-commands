/**
 * Recent Search History Manager using LocalStorage (English & Turkish)
 */

const RECENT_SEARCH_STORAGE_KEY = "nmap_recent_searches_v1";
const MAX_RECENT_ITEMS = 6;

export class RecentSearchManager {
  constructor() {
    this.history = this.loadHistory();
  }

  loadHistory() {
    try {
      const data = localStorage.getItem(RECENT_SEARCH_STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn("Error loading recent search history:", e);
    }
    return ["syn scan", "vuln script", "firewall bypass"];
  }

  saveHistory() {
    try {
      localStorage.setItem(RECENT_SEARCH_STORAGE_KEY, JSON.stringify(this.history));
    } catch (e) {
      console.error("Error saving recent search history:", e);
    }
  }

  addQuery(queryStr) {
    const trimmed = (queryStr || '').trim();
    if (!trimmed || trimmed.length < 2) return;

    // Remove duplicates (case-insensitive)
    this.history = this.history.filter(item => item.toLowerCase() !== trimmed.toLowerCase());
    
    // Add to beginning
    this.history.unshift(trimmed);

    // Limit array size
    if (this.history.length > MAX_RECENT_ITEMS) {
      this.history = this.history.slice(0, MAX_RECENT_ITEMS);
    }

    this.saveHistory();
  }

  clearHistory() {
    this.history = [];
    this.saveHistory();
  }

  getHistory() {
    return this.history;
  }
}
