<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || !$_SESSION['admin_logged_in']) {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Coffee & Fast Food | QR Code Generator</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    body {
      background-color: var(--bg-color);
      color: var(--text-primary);
      padding: 0;
      margin: 0;
    }
    
    .admin-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1.5rem;
    }

    .admin-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 0;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 2rem;
    }

    .admin-nav {
      display: flex;
      gap: 1.5rem;
    }

    .admin-nav a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: var(--border-radius-sm);
      transition: all 0.3s ease;
    }

    .admin-nav a:hover, .admin-nav a.active {
      color: var(--gold-primary);
      background: var(--bg-glass-card);
      border: 1px solid var(--border-color);
    }

    .card-panel {
      background: var(--bg-glass-card);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: 2.5rem;
      box-shadow: 0 10px 30px var(--shadow-color);
      margin-bottom: 2rem;
    }

    .card-title {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--gold-primary);
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 10px;
    }

    .grid-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }

    /* Generator layout styles */
    .qr-preview-box {
      background: #ffffff;
      padding: 2rem;
      border-radius: var(--border-radius-md);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      margin: 0 auto;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .qr-card-print {
      border: 4px double var(--gold-primary);
      background: #000000;
      color: #ffffff;
      padding: 2rem;
      border-radius: var(--border-radius-md);
      text-align: center;
      width: 320px;
      margin: 1.5rem auto 0;
      display: none;
    }

    .qr-card-print.visible {
      display: block;
    }

    .qr-print-title {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      color: var(--gold-primary);
      margin-bottom: 0.25rem;
    }

    .qr-print-subtitle {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }

    .qr-print-caption {
      font-size: 0.75rem;
      color: var(--text-secondary);
      margin-top: 1rem;
    }

    .qr-action-row {
      display: flex;
      gap: 15px;
      margin-top: 1.5rem;
      justify-content: center;
    }

    .qr-action-btn {
      background: var(--bg-glass-card);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      padding: 10px 20px;
      border-radius: var(--border-radius-sm);
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
    }

    .qr-action-btn:hover {
      border-color: var(--gold-primary);
      color: var(--gold-primary);
      transform: translateY(-2px);
    }

    .qr-action-btn.primary {
      background: var(--gold-gradient);
      color: #000000;
      border: none;
    }

    .qr-action-btn.primary:hover {
      box-shadow: 0 0 15px var(--gold-glow);
      color: #000000;
    }

    .logout-btn {
      color: #d9534f !important;
    }

    /* Print styles overrides */
    @media print {
      body * {
        visibility: hidden;
      }
      .qr-card-print, .qr-card-print * {
        visibility: visible;
      }
      .qr-card-print {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1.3);
        border: 4px double #d4af37 !important;
        background: #000000 !important;
        color: #ffffff !important;
        -webkit-print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>

  <div class="admin-container">
    <header class="admin-header">
      <div style="display: flex; align-items: center; gap: 15px;">
        <img src="../images/logo.jpg" alt="Logo" style="width: 50px; height: 50px; border-radius: 50%; background: #fff; padding: 2px; object-fit: contain;">
        <div>
          <h1 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0;">Atelier Dashboard</h1>
          <span style="font-size: 0.8rem; color: var(--text-muted);">QR Code Administration Panel</span>
        </div>
      </div>
      
      <nav class="admin-nav">
        <a href="index.php">Overview</a>
        <a href="qr-management.php" class="active">QR Management</a>
        <a href="index.php?logout=1" class="logout-btn">Logout</a>
      </nav>
    </header>

    <div class="card-panel">
      <h2 class="card-title">Dynamic QR Code Card Generator</h2>
      
      <div class="grid-layout">
        
        <!-- Left Column: Generator Form -->
        <div>
          <form id="qr-gen-form" onsubmit="event.preventDefault(); generateAdminQR();">
            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label class="form-label" for="qr-type">QR Code Purpose</label>
              <select class="form-input" id="qr-type" onchange="toggleQRInputs()" style="background: rgba(0,0,0,0.5); width: 100%;">
                <option value="menu">General Restaurant Menu URL</option>
                <option value="table">Table Number Designation</option>
                <option value="order">Order Tracking Code</option>
                <option value="restaurant">Restaurant Sync ID</option>
              </select>
            </div>

            <!-- Contextual inputs -->
            <div id="input-menu-url" class="form-group" style="margin-bottom: 1.5rem;">
              <label class="form-label" for="menu-url">Main Menu URL</label>
              <input class="form-input" type="url" id="menu-url" value="http://localhost/digital-menu/">
            </div>

            <div id="input-table-num" class="form-group" style="margin-bottom: 1.5rem; display: none;">
              <label class="form-label" for="table-num">Table Number</label>
              <input class="form-input" type="number" id="table-num" min="1" max="50" value="1">
            </div>

            <div id="input-order-id" class="form-group" style="margin-bottom: 1.5rem; display: none;">
              <label class="form-label" for="order-id">Order ID</label>
              <input class="form-input" type="text" id="order-id" placeholder="e.g. order_123">
            </div>

            <div id="input-rest-id" class="form-group" style="margin-bottom: 2rem; display: none;">
              <label class="form-label" for="rest-id">Restaurant ID</label>
              <input class="form-input" type="text" id="rest-id" value="best_coffee">
            </div>

            <button class="submit-btn" type="submit">Generate QR Code Card</button>
          </form>
        </div>

        <!-- Right Column: Interactive Card Preview -->
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div id="qr-card" class="qr-card-print">
            <h4 class="qr-print-title">Best Coffee</h4>
            <span class="qr-print-subtitle">And FAST FOOD</span>
            
            <div class="qr-preview-box">
              <div id="qrcode"></div>
            </div>
            
            <h3 id="qr-card-label" style="margin-top: 1.25rem; font-family: var(--font-serif); font-size: 1.2rem;">General Menu</h3>
            <p class="qr-print-caption">Scan to view digital menu or track order.</p>
          </div>

          <div id="qr-actions" class="qr-action-row" style="display: none;">
            <button class="qr-action-btn" onclick="printQRCard()">Print Card 🖨️</button>
            <button class="qr-action-btn primary" onclick="downloadQRCode()">Download QR 💾</button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- CDN scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <script>
    let qrcodeObj = null;

    function toggleQRInputs() {
      const type = document.getElementById('qr-type').value;
      
      document.getElementById('input-menu-url').style.display = type === 'menu' ? 'block' : 'none';
      document.getElementById('input-table-num').style.display = type === 'table' ? 'block' : 'none';
      document.getElementById('input-order-id').style.display = type === 'order' ? 'block' : 'none';
      document.getElementById('input-rest-id').style.display = type === 'restaurant' ? 'block' : 'none';
    }

    function generateAdminQR() {
      const type = document.getElementById('qr-type').value;
      let payload = '';
      let label = '';

      if (type === 'menu') {
        payload = document.getElementById('menu-url').value.trim();
        label = "Main Menu";
      } else if (type === 'table') {
        const tableNum = document.getElementById('table-num').value;
        payload = `table:${tableNum}`;
        label = `Table Number: ${tableNum}`;
      } else if (type === 'order') {
        const orderId = document.getElementById('order-id').value.trim();
        if (!orderId) {
          alert("Please enter a valid Order ID.");
          return;
        }
        payload = `track:${orderId}`;
        label = `Order ID: ${orderId}`;
      } else if (type === 'restaurant') {
        const restId = document.getElementById('rest-id').value.trim();
        payload = `restaurant:${restId}`;
        label = `Sync ID: ${restId}`;
      }

      // Clear old QR Code container
      const qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";

      // Initialize qrcode.js
      qrcodeObj = new QRCode(qrcodeContainer, {
        text: payload,
        width: 180,
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });

      // Update card labels
      document.getElementById('qr-card-label').textContent = label;
      document.getElementById('qr-card').classList.add('visible');
      document.getElementById('qr-actions').style.display = 'flex';
    }

    function printQRCard() {
      window.print();
    }

    function downloadQRCode() {
      const qrImg = document.querySelector('#qrcode img');
      if (!qrImg) {
        alert("Please generate a QR code first.");
        return;
      }
      
      const label = document.getElementById('qr-card-label').textContent.replace(/[\s:]/g, '_').toLowerCase();
      
      const link = document.createElement('a');
      link.href = qrImg.src;
      link.download = `qrcode_${label}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  </script>
</body>
</html>
