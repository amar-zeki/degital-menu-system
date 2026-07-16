<?php
// Database connection configuration details
$host = '127.0.0.1';
$db   = 'best_coffee_db';
$user = 'root';
$pass = ''; // Default XAMPP/WAMP empty password
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
     $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
     // Output a warning instead of dying immediately so that pages can fall back gracefully
     $pdo = null;
     error_log("Database connection failure: " . $e->getMessage());
}
