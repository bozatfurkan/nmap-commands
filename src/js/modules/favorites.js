/**
 * Favorites Manager using Web Storage API (LocalStorage)
 */

const STORAGE_KEY = "nmap_intelligence_favorites_v1";

export class FavoritesManager {
  constructor() {
    this.favorites = this.loadFavorites();
  }

  loadFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("LocalStorage access error:", e);
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorites));
    } catch (e) {
      console.error("LocalStorage save error:", e);
    }
  }

  isFavorite(cmdId) {
    return this.favorites.includes(cmdId);
  }

  toggleFavorite(cmdId) {
    const index = this.favorites.indexOf(cmdId);
    if (index >= 0) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(cmdId);
    }
    this.saveFavorites();
    return this.isFavorite(cmdId);
  }

  getFavoriteIds() {
    return [...this.favorites];
  }
}
