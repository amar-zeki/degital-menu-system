const Filter = {
  state: {
    category: 'all',
    maxPrice: 60, // Default higher limit matching our data
    vegetarian: false,
    spicy: false,
    popular: false,
    new: false
  },

  init() {
    this.setupListeners();
  },

  setupListeners() {
    // Open/Close filter drawer
    const filterToggleBtn = document.getElementById('filter-toggle-btn');
    const filterCloseBtn = document.getElementById('close-filter-btn');
    const filterDrawer = document.getElementById('filter-drawer');
    const filterOverlay = document.getElementById('filter-overlay');
    const applyFiltersBtn = document.getElementById('apply-filters-btn');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');

    if (filterToggleBtn && filterDrawer && filterOverlay) {
      filterToggleBtn.addEventListener('click', () => {
        filterDrawer.classList.add('open');
        filterOverlay.classList.add('visible');
      });
    }

    const closeFilterFn = () => {
      if (filterDrawer) filterDrawer.classList.remove('open');
      if (filterOverlay) filterOverlay.classList.remove('visible');
    };

    if (filterCloseBtn) filterCloseBtn.addEventListener('click', closeFilterFn);
    if (filterOverlay) filterOverlay.addEventListener('click', closeFilterFn);

    // Dynamic price range display
    const priceSlider = document.getElementById('filter-price-slider');
    const priceDisplay = document.getElementById('filter-price-val');
    if (priceSlider && priceDisplay) {
      priceSlider.addEventListener('input', (e) => {
        priceDisplay.textContent = `$${e.target.value}`;
        this.state.maxPrice = parseFloat(e.target.value);
      });
    }

    // Apply & Reset
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener('click', () => {
        // Collect checkbox states
        this.state.vegetarian = document.getElementById('filter-veg')?.checked || false;
        this.state.spicy = document.getElementById('filter-spicy')?.checked || false;
        this.state.popular = document.getElementById('filter-popular')?.checked || false;
        this.state.new = document.getElementById('filter-new')?.checked || false;

        this.triggerFilter();
        closeFilterFn();
        window.showToast('Filters applied', 'success');
      });
    }

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', () => {
        this.reset();
        closeFilterFn();
        window.showToast('Filters reset', 'info');
      });
    }
  },

  setCategory(catId) {
    this.state.category = catId;
    this.triggerFilter();
  },

  reset() {
    this.state.maxPrice = 60;
    this.state.vegetarian = false;
    this.state.spicy = false;
    this.state.popular = false;
    this.state.new = false;

    // Reset UI elements
    const priceSlider = document.getElementById('filter-price-slider');
    const priceDisplay = document.getElementById('filter-price-val');
    if (priceSlider) priceSlider.value = 60;
    if (priceDisplay) priceDisplay.textContent = '$60';

    const vegChk = document.getElementById('filter-veg');
    const spicyChk = document.getElementById('filter-spicy');
    const popularChk = document.getElementById('filter-popular');
    const newChk = document.getElementById('filter-new');

    if (vegChk) vegChk.checked = false;
    if (spicyChk) spicyChk.checked = false;
    if (popularChk) popularChk.checked = false;
    if (newChk) newChk.checked = false;

    this.triggerFilter();
  },

  triggerFilter() {
    window.dispatchEvent(new CustomEvent('menuFilter', { detail: { state: this.state } }));
  },

  filterItems(items) {
    return items.filter(item => {
      // 1. Category Check
      if (this.state.category !== 'all' && item.category !== this.state.category) {
        return false;
      }
      // 2. Price Check
      if (item.price > this.state.maxPrice) {
        return false;
      }
      // 3. Vegetarian Check
      if (this.state.vegetarian && !item.vegetarian) {
        return false;
      }
      // 4. Spicy Check
      if (this.state.spicy && item.spicy === 0) {
        return false;
      }
      // 5. Popular Check
      if (this.state.popular && !item.popular) {
        return false;
      }
      // 6. New Check
      if (this.state.new && !item.new) {
        return false;
      }
      return true;
    });
  }
};

window.Filter = Filter;
