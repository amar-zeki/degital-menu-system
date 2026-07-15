const TAX_RATE = 0.10; // 10%
const SERVICE_CHARGE = 0.05; // 5%

const Cart = {
  items: [],

  init() {
    this.items = window.Storage.getCart();
    this.updateCartUI();
    this.setupListeners();
  },

  setupListeners() {
    const cartToggle = document.getElementById('cart-toggle-btn');
    const closeCart = document.getElementById('close-cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartToggle && cartDrawer && cartOverlay) {
      cartToggle.addEventListener('click', () => {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('visible');
      });
    }

    if (closeCart && cartDrawer && cartOverlay) {
      const closeFn = () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('visible');
      };
      closeCart.addEventListener('click', closeFn);
      cartOverlay.addEventListener('click', closeFn);
    }

    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        this.clear();
        window.showToast('Cart cleared', 'info');
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (this.items.length === 0) {
          window.showToast('Your cart is empty', 'warning');
          return;
        }
        // Simulated checkout success
        window.showToast('Order placed successfully! Preparing your culinary experience.', 'success');
        this.clear();
        const closeCartBtn = document.getElementById('close-cart-btn');
        if (closeCartBtn) closeCartBtn.click();
      });
    }
  },

  addItem(productId, quantity = 1, options = {}) {
    const product = window.MENU_DATA.items.find(item => item.id === productId);
    if (!product) return;

    const existingItem = this.items.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }

    this.save();
    this.updateCartUI();
    window.showToast(`${product.name} added to cart`, 'success');
  },

  removeItem(productId) {
    const index = this.items.findIndex(item => item.id === productId);
    if (index !== -1) {
      const itemName = this.items[index].name;
      this.items.splice(index, 1);
      this.save();
      this.updateCartUI();
      window.showToast(`${itemName} removed from cart`, 'info');
    }
  },

  updateQuantity(productId, newQty) {
    const item = this.items.find(item => item.id === productId);
    if (!item) return;

    if (newQty <= 0) {
      this.removeItem(productId);
    } else {
      item.quantity = newQty;
      this.save();
      this.updateCartUI();
    }
  },

  clear() {
    this.items = [];
    this.save();
    this.updateCartUI();
  },

  save() {
    window.Storage.saveCart(this.items);
  },

  updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartBadge = document.getElementById('cart-badge');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const serviceEl = document.getElementById('cart-service');
    const totalEl = document.getElementById('cart-total');

    if (!cartItemsContainer) return;

    // Badge Count
    const totalQuantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
      cartBadge.textContent = totalQuantity;
      if (totalQuantity > 0) {
        cartBadge.classList.add('has-items');
      } else {
        cartBadge.classList.remove('has-items');
      }
    }

    // Calculations
    const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * TAX_RATE;
    const service = subtotal > 0 ? subtotal * SERVICE_CHARGE : 0;
    const grandTotal = subtotal + tax + service;

    // Formatted strings
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (serviceEl) serviceEl.textContent = `$${service.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;

    // Render list
    if (this.items.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-message">
          <div class="empty-cart-icon">🛒</div>
          <p>Your culinary journey awaits. Add items to start.</p>
        </div>
      `;
      return;
    }

    cartItemsContainer.innerHTML = this.items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img class="cart-item-image" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <div class="cart-item-controls">
            <button class="qty-btn dec-qty" onclick="Cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="qty-btn inc-qty" onclick="Cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove-btn" onclick="Cart.removeItem('${item.id}')">&times;</button>
      </div>
    `).join('');
  }
};

window.Cart = Cart;
