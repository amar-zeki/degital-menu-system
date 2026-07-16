-- Create Database schema for Digital Menu System
CREATE DATABASE IF NOT EXISTS `best_coffee_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `best_coffee_db`;

-- Admins Table
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Insert default admin account (username: admin, password: admin123password)
INSERT INTO `admins` (`username`, `password_hash`) 
VALUES ('admin', '$2y$10$tMh5qCq6/p.Zk8m8rUjZReH6qQeG1.1z73/3TuxF/zP1d1vV9zQ.K')
ON DUPLICATE KEY UPDATE `username`=`username`;

-- QR Codes Table
CREATE TABLE IF NOT EXISTS `qr_codes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `code_key` VARCHAR(100) NOT NULL UNIQUE, -- e.g. "table_5", "general_menu", "order_tracking"
  `type` VARCHAR(50) NOT NULL,            -- e.g. "menu", "table", "order", "info"
  `data_value` TEXT NOT NULL,             -- scanned payload, e.g. "table:5", "https://bestcoffee.menu"
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Scanned Logs Table
CREATE TABLE IF NOT EXISTS `scan_logs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `table_number` VARCHAR(50) DEFAULT NULL,
  `qr_type` VARCHAR(50) NOT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `scanned_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Order Tracking Table
CREATE TABLE IF NOT EXISTS `order_tracking` (
  `order_id` VARCHAR(100) PRIMARY KEY,
  `table_number` VARCHAR(50) DEFAULT NULL,
  `status` VARCHAR(100) NOT NULL DEFAULT 'Received 📝', -- e.g., 'Received', 'Preparing', 'Out for Delivery'
  `eta` VARCHAR(50) DEFAULT '15 min',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Pre-populate tracking with sample mockups
INSERT IGNORE INTO `order_tracking` (`order_id`, `table_number`, `status`, `eta`) VALUES
('order_123', '3', 'Kitchen preparing your food 🍳', '8-10 minutes'),
('order_456', '5', 'Chef plating the dessert 🍰', '3 minutes'),
('order_789', '8', 'Delivered & Enjoying 🍽️', '0 minutes');
