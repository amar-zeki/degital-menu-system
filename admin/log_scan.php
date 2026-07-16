<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow local development queries
require_once 'db.php';

$data = $_GET['data'] ?? '';
$type = $_GET['type'] ?? '';
$ip = $_SERVER['REMOTE_ADDR'] ?? '';

if (!$pdo) {
    echo json_encode(['status' => 'offline', 'message' => 'Database connection offline.']);
    exit;
}

if (empty($data) || empty($type)) {
    echo json_encode(['status' => 'error', 'message' => 'Missing required parameter values.']);
    exit;
}

try {
    $tableNum = null;
    // If it's a table scan, the data is the table number
    if ($type === 'table') {
        $tableNum = $data;
    } else if ($type === 'order_tracking') {
        // Find if this order tracking row has an assigned table number
        $stmt = $pdo->prepare("SELECT table_number FROM order_tracking WHERE order_id = ?");
        $stmt->execute([$data]);
        $row = $stmt->fetch();
        if ($row) {
            $tableNum = $row['table_number'];
        }
    }
    
    $stmt = $pdo->prepare("INSERT INTO scan_logs (table_number, qr_type, ip_address) VALUES (?, ?, ?)");
    $stmt->execute([$tableNum, $type, $ip]);
    
    echo json_encode(['status' => 'success', 'message' => 'Scan logged successfully in database.']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
