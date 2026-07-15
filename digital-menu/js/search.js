const Search = {
  currentQuery: '',

  init() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentQuery = e.target.value.trim().toLowerCase();
        if (searchClear) {
          if (this.currentQuery.length > 0) {
            searchClear.classList.add('active');
          } else {
            searchClear.classList.remove('active');
          }
        }
        this.triggerSearch();
      });
    }

    if (searchClear && searchInput) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        this.currentQuery = '';
        searchClear.classList.remove('active');
        this.triggerSearch();
        searchInput.focus();
      });
    }
  },

  triggerSearch() {
    // Dispatch a search event with query info
    window.dispatchEvent(new CustomEvent('menuSearch', {
      detail: { query: this.currentQuery }
    }));
  },

  filterItems(items, query) {
    if (!query) return items;

    // Check if query is checking price (e.g., "<40", "under 30", "30")
    let priceFilter = null;
    let priceVal = parseFloat(query.replace(/[^0-9.]/g, ''));
    if (!isNaN(priceVal)) {
      if (query.includes('<') || query.includes('under') || query.includes('below')) {
        priceFilter = (item) => item.price < priceVal;
      } else if (query.includes('>') || query.includes('above') || query.includes('over')) {
        priceFilter = (item) => item.price > priceVal;
      } else {
        // Direct matching or matches under the price
        priceFilter = (item) => item.price <= priceVal;
      }
    }

    return items.filter(item => {
      const matchName = item.name.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      const matchCategory = item.category.toLowerCase().includes(query);
      
      // If we recognized a price query, check the price filter first
      if (priceFilter && priceFilter(item)) {
        return true;
      }

      return matchName || matchDesc || matchCategory;
    });
  }
};

window.Search = Search;
