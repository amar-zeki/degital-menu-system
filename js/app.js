document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  activeQuery: '',
  activeFilters: {
    category: 'all',
    maxPrice: 60,
    vegetarian: false,
    spicy: false,
    popular: false,
    new: false
  },
  modalQuantity: 1,
  currentModalProduct: null,

  init() {
    // 1. Toast Notification Setup
    window.showToast = this.showToast.bind(this);

    // 2. Initialize Module Scripts
    if (window.Cart) window.Cart.init();
    if (window.Search) window.Search.init();
    if (window.Filter) window.Filter.init();

    // 3. Welcome Screen Page Listener
    const enterBtn = document.getElementById('enter-menu-btn');
    const welcomeScreen = document.getElementById('welcome-page');
    if (enterBtn && welcomeScreen) {
      enterBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('slide-up-exit');
        document.body.classList.add('menu-visible');
        setTimeout(() => {
          welcomeScreen.style.display = 'none';
        }, 800);
      });
    }

    // 4. Render Initial Components
    this.renderCategoryTabs();
    this.renderFoodGridWithSkeleton();
    this.renderReviewsSection();
    this.setupStickyHeader();
    this.setupScrollToTop();
    this.setupModals();
    this.setupContactForm();
    this.setupCounters();

    // 5. Setup Custom Event Listeners
    window.addEventListener('menuSearch', (e) => {
      this.activeQuery = e.detail.query;
      this.renderFoodGrid();
    });

    window.addEventListener('menuFilter', (e) => {
      this.activeFilters = e.detail.state;
      this.renderFoodGrid();
    });

    window.addEventListener('favoritesChanged', () => {
      this.renderFoodGrid();
    });

    // 6. Hamburger Menu
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
      // Close nav menu on link clicks
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }
  },

  renderCategoryTabs() {
    const categoryTabsContainer = document.getElementById('category-tabs');
    if (!categoryTabsContainer) return;

    categoryTabsContainer.innerHTML = window.MENU_DATA.categories.map(cat => `
      <button class="category-tab ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
        <span class="category-tab-icon">${cat.icon}</span>
        <span class="category-tab-name">${cat.name}</span>
      </button>
    `).join('');

    // Attach Category Tab Listeners
    categoryTabsContainer.querySelectorAll('.category-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        categoryTabsContainer.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        const targetTab = e.currentTarget;
        targetTab.classList.add('active');
        
        const catId = targetTab.getAttribute('data-category');
        if (window.Filter) {
          window.Filter.setCategory(catId);
        }
      });
    });
  },

  renderFoodGridWithSkeleton() {
    const grid = document.getElementById('food-grid');
    if (!grid) return;

    // Display 4 skeleton loaders
    grid.innerHTML = Array(4).fill(0).map(() => `
      <div class="skeleton-card">
        <div class="skeleton-img"></div>
        <div class="skeleton-line title"></div>
        <div class="skeleton-line desc"></div>
        <div class="skeleton-line footer"></div>
      </div>
    `).join('');

    setTimeout(() => {
      // Re-apply language translations to data model before rendering
      // This prevents the skeleton-delayed render from overwriting translated names
      const activeLang = localStorage.getItem('lang') || 'en';
      if (window.TRANSLATIONS && window.MENU_DATA && activeLang !== 'en') {
        const t = window.TRANSLATIONS[activeLang];
        if (t) {
          window.MENU_DATA.categories.forEach(cat => {
            if (t.categories && t.categories[cat.id]) cat.name = t.categories[cat.id];
          });
          window.MENU_DATA.items.forEach(item => {
            if (t.foods && t.foods[item.id]) {
              item.name = t.foods[item.id].name;
              item.description = t.foods[item.id].description;
            }
          });
        }
      }
      this.renderFoodGrid();
    }, 800);
  },

  renderFoodGrid() {
    const grid = document.getElementById('food-grid');
    if (!grid) return;

    let items = window.MENU_DATA.items;

    // Apply Filter Script
    if (window.Filter) {
      items = window.Filter.filterItems(items);
    }

    // Apply Search Script
    if (window.Search) {
      items = window.Search.filterItems(items, this.activeQuery);
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="no-results-message">
          <p>No culinary delights match your selection.</p>
          <button class="reset-all-btn" onclick="Filter.reset()">Reset Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(item => {
      const isFav = window.Storage.isFavorite(item.id);
      const isSpicy = item.spicy > 0;
      
      let badgesHTML = '';
      if (item.popular) badgesHTML += `<span class="badge badge-popular">Popular ⭐</span>`;
      if (item.new) badgesHTML += `<span class="badge badge-new">New ✨</span>`;
      if (item.vegetarian) badgesHTML += `<span class="badge badge-veg">🍃 Veg</span>`;
      if (isSpicy) badgesHTML += `<span class="badge badge-spicy">${'🌶️'.repeat(item.spicy)}</span>`;

      return `
        <div class="food-card" data-id="${item.id}">
          <div class="food-card-img-container" onclick="App.openDetailsModal('${item.id}')">
            <img class="food-card-img" src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-badges">${badgesHTML}</div>
          </div>
          <div class="food-card-content">
            <div class="food-card-header">
              <h3 class="food-card-title" onclick="App.openDetailsModal('${item.id}')">${item.name}</h3>
              <button class="fav-btn ${isFav ? 'is-fav' : ''}" onclick="event.stopPropagation(); App.toggleFavorite('${item.id}')">
                ❤️
              </button>
            </div>
            <p class="food-card-desc">${item.description}</p>
            <div class="food-card-footer">
              <span class="food-card-price">$${item.price.toFixed(2)}</span>
              <div class="food-card-rating">
                <span class="stars">${'★'.repeat(Math.round(item.rating))}</span>
                <span class="rating-num">(${item.rating})</span>
              </div>
            </div>
            <button class="add-to-cart-btn-grid" onclick="Cart.addItem('${item.id}')">
              ${(window.TRANSLATIONS && window.TRANSLATIONS[localStorage.getItem('lang') || 'en'] && window.TRANSLATIONS[localStorage.getItem('lang') || 'en'].add_to_cart) || 'Add to Cart 🛒'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  toggleFavorite(id) {
    if (window.Storage) {
      const added = window.Storage.toggleFavorite(id);
      const item = window.MENU_DATA.items.find(i => i.id === id);
      if (added) {
        this.showToast(`Saved ${item?.name} to Favorites`, 'success');
      } else {
        this.showToast(`Removed ${item?.name} from Favorites`, 'info');
      }
    }
  },

  openDetailsModal(id) {
    const product = window.MENU_DATA.items.find(item => item.id === id);
    if (!product) return;

    this.currentModalProduct = product;
    this.modalQuantity = 1;

    const modal = document.getElementById('details-modal');
    const overlay = document.getElementById('details-overlay');
    if (!modal || !overlay) return;

    // Load values into modal
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-img').alt = product.name;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modal-desc').textContent = product.description;
    document.getElementById('modal-rating').textContent = `${'★'.repeat(Math.round(product.rating))} (${product.rating})`;
    document.getElementById('modal-calories').textContent = `${product.calories} kcal`;
    document.getElementById('modal-time').textContent = product.cookingTime;

    // Lists
    document.getElementById('modal-ingredients').innerHTML = product.ingredients.map(ing => `<li>${ing}</li>`).join('');
    document.getElementById('modal-allergens').innerHTML = product.allergens.length > 0 
      ? product.allergens.map(all => `<li>${all}</li>`).join('')
      : '<li>No major allergens</li>';

    // Quantity selector reset
    const qtyVal = document.getElementById('modal-qty-val');
    if (qtyVal) qtyVal.textContent = this.modalQuantity;

    // Reviews inside modal
    const reviewsContainer = document.getElementById('modal-reviews-list');
    if (reviewsContainer) {
      reviewsContainer.innerHTML = product.reviews.map(rev => `
        <div class="modal-review-item">
          <div class="modal-review-header">
            <img class="review-avatar" src="${rev.avatar}" alt="${rev.name}" loading="lazy">
            <div class="review-meta">
              <span class="review-author">${rev.name}</span>
              <span class="review-date">${rev.date}</span>
            </div>
            <span class="review-stars">${'★'.repeat(rev.rating)}</span>
          </div>
          <p class="review-text">"${rev.review}"</p>
        </div>
      `).join('');
    }

    modal.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  },

  closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    const overlay = document.getElementById('details-overlay');
    if (modal) modal.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    document.body.style.overflow = ''; // Unlock scroll
    this.currentModalProduct = null;
  },

  setupModals() {
    const closeBtn = document.getElementById('close-modal-btn');
    const overlay = document.getElementById('details-overlay');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeDetailsModal());
    }
    if (overlay) {
      overlay.addEventListener('click', () => this.closeDetailsModal());
    }

    // Modal Qty buttons
    const decBtn = document.getElementById('modal-dec-qty');
    const incBtn = document.getElementById('modal-inc-qty');
    const qtyVal = document.getElementById('modal-qty-val');

    if (decBtn && qtyVal) {
      decBtn.addEventListener('click', () => {
        if (this.modalQuantity > 1) {
          this.modalQuantity--;
          qtyVal.textContent = this.modalQuantity;
        }
      });
    }
    if (incBtn && qtyVal) {
      incBtn.addEventListener('click', () => {
        this.modalQuantity++;
        qtyVal.textContent = this.modalQuantity;
      });
    }

    // Modal Add to Cart
    const addCartBtn = document.getElementById('modal-add-cart-btn');
    if (addCartBtn) {
      addCartBtn.addEventListener('click', () => {
        if (this.currentModalProduct && window.Cart) {
          window.Cart.addItem(this.currentModalProduct.id, this.modalQuantity);
          this.closeDetailsModal();
        }
      });
    }

    // QR Code modal triggers
    const qrBtn = document.getElementById('qr-toggle-btn');
    const qrModal = document.getElementById('qr-modal');
    const qrOverlay = document.getElementById('qr-overlay');
    const qrCloseBtn = document.getElementById('close-qr-btn');

    const openQR = () => {
      if (qrModal && qrOverlay) {
        qrModal.classList.add('open');
        qrOverlay.classList.add('visible');
      }
    };
    const closeQR = () => {
      if (qrModal && qrOverlay) {
        qrModal.classList.remove('open');
        qrOverlay.classList.remove('visible');
      }
    };

    if (qrBtn) qrBtn.addEventListener('click', openQR);
    if (qrCloseBtn) qrCloseBtn.addEventListener('click', closeQR);
    if (qrOverlay) qrOverlay.addEventListener('click', closeQR);
  },

  renderReviewsSection() {
    const container = document.getElementById('reviews-carousel');
    if (!container) return;

    // Collect all reviews from items
    const allReviews = window.MENU_DATA.items.flatMap(item => 
      item.reviews.map(rev => ({ ...rev, itemName: item.name }))
    );

    if (allReviews.length === 0) return;

    container.innerHTML = allReviews.map(rev => `
      <div class="review-slide">
        <div class="review-slide-card">
          <div class="review-slide-quote">“</div>
          <p class="review-slide-text">${rev.review}</p>
          <div class="review-slide-details">
            <img class="review-slide-avatar" src="${rev.avatar}" alt="${rev.name}" loading="lazy">
            <div class="review-slide-info">
              <h4 class="review-slide-name">${rev.name}</h4>
              <span class="review-slide-item">Tried: ${rev.itemName}</span>
              <span class="review-slide-stars">${'★'.repeat(Math.round(rev.rating))}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  },

  setupStickyHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  },

  setupScrollToTop() {
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  },

  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      // Simple Validation
      if (!name || !phone || !email || !message) {
        this.showToast('Please fill out all fields.', 'error');
        return;
      }

      // Email Format Check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Phone Format Check (Simple)
      const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
      if (!phoneRegex.test(phone)) {
        this.showToast('Please enter a valid phone number.', 'error');
        return;
      }

      // Successful simulated submission
      this.showToast('Thank you! Your message has been received.', 'success');
      form.reset();
    });
  },

  setupCounters() {
    const counters = document.querySelectorAll('.counter-val');
    if (counters.length === 0) return;

    const runCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target'));
      const speed = 200; // lower is faster
      const count = parseInt(el.innerText);
      const inc = Math.ceil(target / speed);

      if (count < target) {
        el.innerText = count + inc > target ? target : count + inc;
        setTimeout(() => runCounter(el), 15);
      } else {
        el.innerText = target;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });

    counters.forEach(counter => observer.observe(counter));
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '❌';

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Simple animate entrance, then remove
    setTimeout(() => toast.classList.add('visible'), 50);

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }
};

window.App = App;
