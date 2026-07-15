# Best Coffee And FAST FOOD | Premium Digital Menu System

A modern, luxury, fully responsive Digital Menu System designed for upscale cafés, fine dining restaurants, and modern bistros. Built entirely with **HTML5, CSS3, and Vanilla ES6 JavaScript** (no frameworks required).

---

## 🌟 Key Features

- **Futuristic & Premium UI**: Features glassmorphism with soft blur backdrops, rounded cards, smooth gradients, and elegant gold-and-dark styling.
- **Brand Customization**: Fully branded with the **Best Coffee And FAST FOOD** logo, styling, taglines, and custom contact channels.
- **Double-State Theme Switcher**: Instant Dark Mode (default luxury) and Light Mode switcher with LocalStorage preference saving.
- **Dynamic Category Navigation**: Horizontal scrollable categories bar featuring beautiful interactive tabs (Burgers, Pizza, Chicken, Pasta, Salads, Ethiopian Food, Desserts, Coffee, and Drinks).
- **Advanced Search & Multi-Filter Panel**:
  - Live query engine searching by title, descriptions, or ingredients.
  - Price budget constraint slider.
  - Filters for *Vegetarian*, *Spicy*, *Popular*, and *New Items*.
- **Interactive Food Details Modal**: Click any food card to view ingredients, allergens, cooking times, calorie metrics, customer reviews, and a quantity selector.
- **Shopping Cart Drawer**: Slide-over panel with local persistence. Auto-calculates Subtotal, V.A.T (10%), and Service Charge (5%) dynamically.
- **QR Code Support**: Displays an inline vector golden QR Code modal for customers to scan and sync the menu onto their mobile devices.
- **Contact & Valet Reservation Form**: Integrated client inquiry form with custom validation and real-time toast notification feedbacks.
- **Premium Performance Extras**:
  - Image lazy loading.
  - Skeleton screen load shimmers.
  - Active visible counters.
  - Sticky header transitions.
  - Scroll-to-top floating button.

---

## 📂 Project Structure

```
digital-menu/
├── index.html            # Main SPA HTML template structure
├── README.md             # Project documentation (this file)
├── css/
│   ├── style.css         # Typography, layout grids, components, drawers, & color tokens
│   ├── responsive.css    # Responsive mobile-first screen layouts (<768px, <480px)
│   └── animations.css    # Keyframes (skeleton shimmers, welcome exits, slide-ins, toasts)
│
├── js/
│   ├── app.js            # Main bootstrapper, modal events, reviews, form validations, & toast alerts
│   ├── menu-data.js      # Structured JSON-like data (items, ratings, ingredients, reviews, restaurant info)
│   ├── theme.js          # Dark/Light mode theme switching logic with LocalStorage sync
│   ├── storage.js        # LocalStorage API wrappers for Favorites and Cart items
│   ├── cart.js           # Cart array additions/removals, quantities update, & drawers rendering
│   ├── search.js         # Direct match character search and budget-price checks
│   └── filter.js         # Tags matching, spicy levels check, and budget filter boundaries
│
└── images/
    ├── logo.jpg          # Custom brand logo (green emblem badge)
    ├── hero.jpg          # Luxury dining background
    ├── burger.jpg        # Truffle Wagyu Burger image
    ├── pizza.jpg         # Black Truffle Pizza image
    ├── pasta.jpg         # Lobster Tagliolini Pasta image
    └── ethiopian.jpg     # Royal Doro Wat Platter image
```

---

## 🚀 How to Run Locally

Since this project is built entirely on native web standards (Vanilla CSS & JS), no compilation, server setups, or build steps are necessary.

### Option 1: Direct File Access
1. Open the folder `digital-menu/` on your computer.
2. Double-click `index.html` to open it directly in any modern web browser.

### Option 2: Live Local Server (Recommended)
Running through a local web server resolves browser restriction policies regarding local paths (especially when sharing across a network).
1. Open your terminal in the `digital-menu/` folder.
2. Run any simple HTTP server:
   - **Using Python**:
     ```bash
     python -m http.server 8000
     ```
   - **Using Node.js (npx)**:
     ```bash
     npx serve
     ```
3. Open your browser and navigate to `http://localhost:8000` (or `http://localhost:3000`).

---

## 🎨 Theme Styling Details

- **Dark Mode (Default)**: Deep rich charcoals (`#070707`), frosted glass cards (`rgba(22, 22, 22, 0.55)`), and golden trim variables.
- **Light Mode**: Clean ivory/cream backgrounds (`#faf9f6`), light glass cards (`rgba(255, 255, 255, 0.75)`), and secondary bronze-gold outlines.
- **Typography**: 
  - *Playfair Display* for classical elegant titles.
  - *Inter* for sleek modern body text and UI controls.
