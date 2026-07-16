let html5QrcodeScanner = null;

document.addEventListener('DOMContentLoaded', () => {
  Scanner.init();
});

const Scanner = {
  init() {
    const scanBtn = document.getElementById('qr-scan-btn');
    const closeBtn = document.getElementById('close-scanner-btn');
    const scannerOverlay = document.getElementById('scanner-overlay');
    const scannerModal = document.getElementById('scanner-modal');

    if (scanBtn) {
      scanBtn.addEventListener('click', () => {
        if (scannerModal && scannerOverlay) {
          scannerModal.classList.add('open');
          scannerOverlay.classList.add('visible');
          document.body.style.overflow = 'hidden';
          this.startScanner();
        }
      });
    }

    const stopAndClose = () => {
      if (scannerModal && scannerOverlay) {
        scannerModal.classList.remove('open');
        scannerOverlay.classList.remove('visible');
        document.body.style.overflow = '';
        this.stopScanner();
      }
    };

    if (closeBtn) closeBtn.addEventListener('click', stopAndClose);
    if (scannerOverlay) scannerOverlay.addEventListener('click', stopAndClose);

    // Setup Mock Order Tracking modal close listeners
    const closeTrackingBtn = document.getElementById('close-tracking-btn');
    const trackingModal = document.getElementById('tracking-modal');
    const trackingOverlay = document.getElementById('tracking-overlay');

    const closeTracking = () => {
      if (trackingModal && trackingOverlay) {
        trackingModal.classList.remove('open');
        trackingOverlay.classList.remove('visible');
        document.body.style.overflow = '';
      }
    };

    if (closeTrackingBtn) closeTrackingBtn.addEventListener('click', closeTracking);
    if (trackingOverlay) trackingOverlay.addEventListener('click', closeTracking);
  },

  startScanner() {
    const errorDiv = document.getElementById('scanner-error');
    if (errorDiv) errorDiv.textContent = '';

    // Verify Html5Qrcode is loaded from CDN
    if (typeof Html5Qrcode === 'undefined') {
      if (errorDiv) errorDiv.textContent = 'Scanner library is loading, please try again in a second.';
      return;
    }

    html5QrcodeScanner = new Html5Qrcode("qr-reader");
    
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrcodeScanner.start(
      { facingMode: "environment" },
      config,
      (decodedText, decodedResult) => {
        // Success callback
        this.handleScanResult(decodedText);
      },
      (errorMessage) => {
        // Verbose scan failures (can ignore to prevent console logs clutter)
      }
    ).catch(err => {
      console.error("Camera access failed", err);
      if (errorDiv) {
        if (err.name === 'NotAllowedError' || err.toString().includes('Permission denied')) {
          errorDiv.textContent = 'Camera permission denied. Please allow camera access in settings.';
        } else {
          errorDiv.textContent = 'Could not find environment camera or camera is already in use.';
        }
      }
    });
  },

  stopScanner() {
    if (html5QrcodeScanner && html5QrcodeScanner.isScanning) {
      html5QrcodeScanner.stop().then(() => {
        html5QrcodeScanner = null;
      }).catch(err => {
        console.error("Failed to stop scanner", err);
      });
    }
  },

  handleScanResult(text) {
    this.stopScanner();
    const scannerModal = document.getElementById('scanner-modal');
    const scannerOverlay = document.getElementById('scanner-overlay');
    if (scannerModal && scannerOverlay) {
      scannerModal.classList.remove('open');
      scannerOverlay.classList.remove('visible');
      document.body.style.overflow = '';
    }

    text = text.trim();

    // 1. Menu URL Scan
    if (text.startsWith('http://') || text.startsWith('https://')) {
      window.showToast('Redirecting to Scanned URL...', 'success');
      setTimeout(() => {
        window.location.href = text;
      }, 1500);
      return;
    }

    // 2. Table Number Scan (Formats: "table:5" or "table=5")
    const tableMatch = text.match(/table[:=](\d+)/i);
    if (tableMatch) {
      const tableNum = tableMatch[1];
      localStorage.setItem('table_number', tableNum);
      if (window.updateActiveTableUI) window.updateActiveTableUI();
      
      // Log to MySQL backend via log_scan.php if available
      this.logScanToBackend(tableNum, 'table');

      window.showToast(`Connected to Table ${tableNum}`, 'success');
      return;
    }

    // 3. Restaurant ID Scan (Formats: "restaurant:best_coffee" or "restaurant=best_coffee")
    const restaurantMatch = text.match(/restaurant[:=]([a-zA-Z0-9_-]+)/i);
    if (restaurantMatch) {
      const restId = restaurantMatch[1];
      window.showToast(`Connected to Menu: ${restId.replace(/_/g, ' ')}`, 'success');
      
      this.logScanToBackend(restId, 'restaurant');
      return;
    }

    // 4. Order Tracking ID Scan (Formats: "track:order_123" or "order=123" or "tracking=123")
    const trackingMatch = text.match(/(?:track|order|tracking)[:=]([a-zA-Z0-9_-]+)/i);
    if (trackingMatch) {
      const orderId = trackingMatch[1];
      window.showToast(`Tracking Order: ${orderId}`, 'success');
      this.openOrderTracking(orderId);
      
      this.logScanToBackend(orderId, 'order_tracking');
      return;
    }

    // Default Fallback
    window.showToast(`Invalid QR Code: "${text.substring(0, 30)}"`, 'error');
  },

  logScanToBackend(dataVal, type) {
    // Send a background fetch log scan query to record scan logs in the MySQL database
    fetch(`admin/log_scan.php?data=${encodeURIComponent(dataVal)}&type=${encodeURIComponent(type)}`)
      .then(r => r.json())
      .then(res => console.log("Scan logged in database:", res))
      .catch(e => console.log("Offline mode: Database scan logs not saved."));
  },

  openOrderTracking(orderId) {
    const trackingModal = document.getElementById('tracking-modal');
    const trackingOverlay = document.getElementById('tracking-overlay');
    if (!trackingModal || !trackingOverlay) return;

    // Load data from DB if available, otherwise display luxury mockups
    document.getElementById('tracking-order-id').textContent = orderId;
    
    const tableNum = localStorage.getItem('table_number') || 'N/A';
    document.getElementById('tracking-table-num').textContent = tableNum;

    const statusTextEl = document.getElementById('tracking-status-text');
    const etaTextEl = document.getElementById('tracking-eta-text');
    
    // Default mock data
    statusTextEl.textContent = 'Kitchen preparing your food 🍳';
    etaTextEl.textContent = '10 - 15 minutes';

    // Attempt actual database fetch
    fetch(`admin/get_tracking.php?order_id=${encodeURIComponent(orderId)}`)
      .then(r => r.json())
      .then(data => {
        if (data.status) {
          statusTextEl.textContent = data.status;
          etaTextEl.textContent = data.eta || 'Completed';
        }
      })
      .catch(e => {
        console.log("Offline: Loading default order status mockups.");
      });

    // Animate open
    trackingModal.classList.add('open');
    trackingOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
};

window.Scanner = Scanner;
