<?php
session_start();
require_once 'db.php';

// Simple authentication handler
$error = '';
if (isset($_POST['login'])) {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if ($pdo) {
        try {
            $stmt = $pdo->prepare("SELECT * FROM admins WHERE username = ?");
            $stmt->execute([$username]);
            $user = $stmt->fetch();
            if ($user && password_verify($password, $user['password_hash'])) {
                $_SESSION['admin_logged_in'] = true;
                $_SESSION['admin_username'] = $username;
                header('Location: index.php');
                exit;
            } else {
                $error = 'Invalid username or password.';
            }
        } catch (Exception $e) {
            $error = 'Login error: ' . $e->getMessage();
        }
    } else {
        // Fallback mock login if database connection is offline
        if ($username === 'admin' && $password === 'admin123password') {
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['admin_username'] = 'admin (offline)';
            header('Location: index.php');
            exit;
        } else {
            $error = 'Invalid credentials (Database Offline).';
        }
    }
}

// Logout handler
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}

$is_logged_in = $_SESSION['admin_logged_in'] ?? false;

// Handle Order Status updates
if ($is_logged_in && isset($_POST['update_status']) && $pdo) {
    $order_id = $_POST['order_id'] ?? '';
    $status = $_POST['status'] ?? '';
    $eta = $_POST['eta'] ?? '';
    
    try {
        $stmt = $pdo->prepare("INSERT INTO order_tracking (order_id, status, eta) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE status = ?, eta = ?");
        $stmt->execute([$order_id, $status, $eta, $status, $eta]);
        $success_msg = "Order status updated successfully.";
    } catch (Exception $e) {
        $error_msg = "Failed to update: " . $e->getMessage();
    }
}

// Fetch scan logs and orders if DB is connected
$scan_logs = [];
$orders = [];
$db_status = "Connected ✅";
if ($pdo) {
    try {
        $scan_logs = $pdo->query("SELECT * FROM scan_logs ORDER BY scanned_at DESC LIMIT 15")->fetchAll();
        $orders = $pdo->query("SELECT * FROM order_tracking ORDER BY updated_at DESC")->fetchAll();
    } catch (Exception $e) {
        $db_status = "Error: " . $e->getMessage();
    }
} else {
    $db_status = "Offline ❌ (Check configurations)";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Coffee & Fast Food | Admin Dashboard</title>
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

    .db-badge {
      display: inline-block;
      padding: 4px 10px;
      font-size: 0.8rem;
      font-weight: 700;
      border-radius: var(--border-radius-sm);
      background: var(--bg-glass-card);
      border: 1px solid var(--border-color);
    }

    .grid-dashboard {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 2rem;
    }

    .card-panel {
      background: var(--bg-glass-card);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: 2rem;
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

    /* Admin Table styles */
    .admin-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .admin-table th, .admin-table td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
    }

    .admin-table th {
      color: var(--text-secondary);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.85rem;
    }

    .admin-table td {
      color: var(--text-primary);
      font-size: 0.9rem;
    }

    .admin-table tbody tr:hover {
      background: rgba(255, 255, 255, 0.02);
    }

    /* Log-in Page Overlay */
    .login-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .login-box {
      width: 400px;
      background: var(--bg-glass-card);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: 3rem;
      box-shadow: 0 15px 40px var(--shadow-color);
    }

    .login-logo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #ffffff;
      padding: 2px;
      margin: 0 auto 1.5rem;
      display: block;
      object-fit: contain;
    }

    .error-banner {
      background: rgba(217, 83, 79, 0.15);
      border: 1px solid #d9534f;
      color: #d9534f;
      padding: 10px;
      border-radius: var(--border-radius-sm);
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      text-align: center;
    }

    .success-banner {
      background: rgba(92, 184, 92, 0.15);
      border: 1px solid #5cb85c;
      color: #5cb85c;
      padding: 10px;
      border-radius: var(--border-radius-sm);
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      text-align: center;
    }

    .logout-btn {
      color: #d9534f !important;
    }
    
    @media (max-width: 768px) {
      .grid-dashboard {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Login Modal overlay -->
  <?php if (!$is_logged_in): ?>
  <div class="login-overlay">
    <div class="login-box">
      <img class="login-logo" src="../images/logo.jpg" alt="Logo">
      <h2 style="font-family: var(--font-serif); text-align: center; margin-bottom: 1.5rem; color: var(--gold-primary);">Admin Login</h2>
      
      <?php if ($error): ?>
        <div class="error-banner"><?php echo htmlspecialchars($error); ?></div>
      <?php endif; ?>

      <form method="POST" action="index.php">
        <div class="form-group" style="margin-bottom: 1.5rem;">
          <label class="form-label" for="username">Username</label>
          <input class="form-input" type="text" id="username" name="username" required placeholder="admin">
        </div>
        <div class="form-group" style="margin-bottom: 2rem;">
          <label class="form-label" for="password">Password</label>
          <input class="form-input" type="password" id="password" name="password" required placeholder="admin123password">
        </div>
        <button class="submit-btn" type="submit" name="login">Login</button>
      </form>
      <p style="font-size: 0.75rem; text-align: center; color: var(--text-muted); margin-top: 1.5rem;">Default Demo: admin / admin123password</p>
    </div>
  </div>
  <?php endif; ?>

  <div class="admin-container">
    <header class="admin-header">
      <div style="display: flex; align-items: center; gap: 15px;">
        <img src="../images/logo.jpg" alt="Logo" style="width: 50px; height: 50px; border-radius: 50%; background: #fff; padding: 2px; object-fit: contain;">
        <div>
          <h1 style="font-family: var(--font-serif); font-size: 1.75rem; margin: 0;">Atelier Dashboard</h1>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Database: <span class="db-badge"><?php echo $db_status; ?></span></span>
        </div>
      </div>
      
      <?php if ($is_logged_in): ?>
      <nav class="admin-nav">
        <a href="index.php" class="active">Overview</a>
        <a href="qr-management.php">QR Management</a>
        <a href="index.php?logout=1" class="logout-btn">Logout</a>
      </nav>
      <?php endif; ?>
    </header>

    <?php if ($is_logged_in): ?>
      
      <?php if (isset($success_msg)): ?>
        <div class="success-banner"><?php echo htmlspecialchars($success_msg); ?></div>
      <?php endif; ?>
      <?php if (isset($error_msg)): ?>
        <div class="error-banner"><?php echo htmlspecialchars($error_msg); ?></div>
      <?php endif; ?>

      <div class="grid-dashboard">
        
        <!-- Left Side: Scanned Logs -->
        <div>
          <div class="card-panel">
            <h3 class="card-title">Recent QR Scans Monitor</h3>
            <?php if (empty($scan_logs)): ?>
              <p style="color: var(--text-secondary); font-style: italic;">No scans logged yet. Perform scans using the customer application camera scanner!</p>
            <?php else: ?>
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Table</th>
                    <th>Type</th>
                    <th>IP Address</th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($scan_logs as $log): ?>
                    <tr>
                      <td><?php echo date('H:i:s M d', strtotime($log['scanned_at'])); ?></td>
                      <td><strong><?php echo htmlspecialchars($log['table_number'] ?? 'General'); ?></strong></td>
                      <td><span style="color: var(--gold-primary); text-transform: uppercase; font-size: 0.8rem; font-weight: 700;"><?php echo htmlspecialchars($log['qr_type']); ?></span></td>
                      <td style="font-family: monospace;"><?php echo htmlspecialchars($log['ip_address']); ?></td>
                    </tr>
                  <?php endforeach; ?>
                </tbody>
              </table>
            <?php endif; ?>
          </div>
        </div>

        <!-- Right Side: Order Tracking Manager -->
        <div>
          <div class="card-panel">
            <h3 class="card-title">Update Prep Status</h3>
            <form method="POST" action="index.php">
              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label" for="order_id">Order ID</label>
                <input class="form-input" type="text" id="order_id" name="order_id" required placeholder="e.g. order_123">
              </div>
              
              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label" for="status">Status Description</label>
                <select class="form-input" id="status" name="status" required style="background: rgba(0,0,0,0.5); width: 100%;">
                  <option value="Received 📝">Received 📝</option>
                  <option value="Kitchen preparing your food 🍳">Kitchen preparing your food 🍳</option>
                  <option value="Chef plating the dessert 🍰">Chef plating the dessert 🍰</option>
                  <option value="Out for delivery 🚲">Out for delivery 🚲</option>
                  <option value="Delivered & Enjoying 🍽️">Delivered & Enjoying 🍽️</option>
                </select>
              </div>

              <div class="form-group" style="margin-bottom: 1.75rem;">
                <label class="form-label" for="eta">Estimated Time Remaining</label>
                <input class="form-input" type="text" id="eta" name="eta" required placeholder="e.g. 5 minutes or 0 minutes">
              </div>

              <button class="submit-btn" type="submit" name="update_status">Update Status</button>
            </form>
          </div>

          <div class="card-panel">
            <h3 class="card-title">Active Orders Tracking</h3>
            <?php if (empty($orders)): ?>
              <p style="color: var(--text-secondary); font-style: italic;">No orders tracking yet.</p>
            <?php else: ?>
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Status</th>
                    <th>ETA</th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($orders as $order): ?>
                    <tr>
                      <td style="font-family: monospace;"><strong><?php echo htmlspecialchars($order['order_id']); ?></strong></td>
                      <td><?php echo htmlspecialchars($order['status']); ?></td>
                      <td><?php echo htmlspecialchars($order['eta']); ?></td>
                    </tr>
                  <?php endforeach; ?>
                </tbody>
              </table>
            <?php endif; ?>
          </div>
        </div>

      </div>

    <?php endif; ?>
  </div>

</body>
</html>
