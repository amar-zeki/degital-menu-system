<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
require_once 'db.php';

$orderId = $_GET['order_id'] ?? '';

if (!$pdo) {
    echo json_encode(['status' => null, 'message' => 'Database connection offline.']);
    exit;
}

if (empty($orderId)) {
    echo json_encode(['status' => null, 'message' => 'Order ID is required.']);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT * FROM order_tracking WHERE order_id = ?");
    $stmt->execute([$orderId]);
    $row = $stmt->fetch();
    
    if ($row) {
        echo json_encode([
            'status' => $row['status'],
            'eta' => $row['eta'],
            'table_number' => $row['table_number']
        ]);
    } else {
        // Return null status so JS knows to use fallback mockup
        echo json_encode(['status' => null, 'message' => 'Order ID not found in database.']);
    }
} catch (Exception $e) {
    echo json_encode(['status' => null, 'message' => $e->getMessage()]);
}
