const STORAGE_KEYS = {
  CART: 'digital_menu_cart',
  FAVORITES: 'digital_menu_favorites'
};

const Storage = {
  getCart() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CART);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading cart from localStorage', e);
      return [];
    }
  },

  saveCart(cart) {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  },

  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading favorites from localStorage', e);
      return [];
    }
  },

  isFavorite(id) {
    const favorites = this.getFavorites();
    return favorites.includes(id);
  },

  toggleFavorite(id) {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(id);
    let added = false;

    if (index === -1) {
      favorites.push(id);
      added = true;
    } else {
      favorites.splice(index, 1);
      added = false;
    }

    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (e) {
      console.error('Error saving favorites to localStorage', e);
    }

    // Trigger custom event for rendering updates
    window.dispatchEvent(new CustomEvent('favoritesChanged', { detail: { id, added } }));
    return added;
  }
};

window.Storage = Storage;
