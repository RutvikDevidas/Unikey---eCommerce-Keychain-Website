<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $conn = new mysqli("localhost", "root", "", "Keychain");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sqlCreate = "CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    if (!$conn->query($sqlCreate)) {
        die("Table creation failed: " . $conn->error);
    }

    $stmt = $conn->prepare("INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');

    $stmt->bind_param('sssss', $name, $email, $phone, $subject, $message);

    if ($stmt->execute()) {
        echo '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Contact Submitted</title><link rel="stylesheet" href="css/bootstrap.css" /><link rel="stylesheet" href="mycss/home.css" /></head><body class="body-bg"><div class="container py-5"><div class="card shadow-sm rounded-4 p-5"><h1 class="h2 text-primary mb-3">Thank you!</h1><p class="text-secondary mb-4">Your message has been saved. Our support team will review your request and contact you shortly.</p><a href="contact.html" class="btn btn-primary">Back to contact page</a></div></div></body></html>';
    } else {
        echo 'Error saving contact details: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    header('Location: contact.html');
    exit;
}
