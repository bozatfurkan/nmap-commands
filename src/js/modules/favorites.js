/**
 * Favorites & Bookmarks Web Storage Manager
 */

export class FavoritesManager {
  constructor() {
    this.storageKey = "nmap_favorite_commands_v1";
    this.favorites = this.loadFavorites();
  }

  loadFavorites() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error reading favorites from localStorage", e);
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
    } catch (e) {
      console.error("Error saving favorites to localStorage", e);
    }
  }

  isFavorite(cmdId) {
    return this.favorites.includes(cmdId);
  }

  toggleFavorite(cmdId) {
    if (this.isFavorite(cmdId)) {
      this.favorites = this.favorites.filter(id => id !== cmdId);
    } else {
      this.favorites.push(cmdId);
    }
    this.saveFavorites();
    return this.isFavorite(cmdId);
  }

  getFavoriteIds() {
    return this.favorites;
  }
}
