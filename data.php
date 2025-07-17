<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "sneakerstore";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $card_number = $_POST['card_number'];
    $expiry_date = $_POST['expiry_date'];
    $cvv = $_POST['cvv'];

    $sql = "INSERT INTO orders (name, email, phone, address, card_number, expiry_date, cvv) VALUES ('$name', '$email', '$phone', '$address', '$card_number', '$expiry_date', '$cvv')";
    VALUES ('$name', '$email', '$phone', '$address', '$card_number', '$expiry_date', '$cvv');
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Order placed successfully!');</script>";
        echo "<script>window.location.href = 'index.php';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>