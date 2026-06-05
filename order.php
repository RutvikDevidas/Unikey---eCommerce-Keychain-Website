<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $conn = new mysqli("localhost", "root", "", "Keychain");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $fn = $conn->real_escape_string($_POST['fullName'] ?? '');
    $ph = $conn->real_escape_string($_POST['phone'] ?? '');
    $em = $conn->real_escape_string($_POST['email'] ?? '');
    $vill = $conn->real_escape_string($_POST['village'] ?? '');
    $talu = $conn->real_escape_string($_POST['taluka'] ?? '');
    $state = $conn->real_escape_string($_POST['state'] ?? '');
    $pin = $conn->real_escape_string($_POST['pin'] ?? '');
    $qty = intval($_POST['qty'] ?? 0);
    $p = floatval($_POST['price'] ?? 0);
    $total = floatval($_POST['totalP'] ?? 0);
    $pro = $conn->real_escape_string($_POST['productName'] ?? '');

    $sql = "INSERT INTO orders (FullName, Phone, Email, Village, Taluka, State, Pincode, ProductName, Price, Quantity, Total) VALUES ('{$fn}', '{$ph}', '{$em}', '{$vill}', '{$talu}', '{$state}', '{$pin}', '{$pro}', '{$p}', '{$qty}', '{$total}')";

    if ($conn->query($sql) === TRUE) {
        echo "Order Confirmed";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Invalid request method.";
}
?>