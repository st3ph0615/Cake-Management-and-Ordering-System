<?php
session_start();
include "connect.php";

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm = $_POST['confirm_password'];

if($password != $confirm){
    echo "<script>alert('Passwords do not match'); window.history.back();</script>";
    exit();
}

$check = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($check);

if($result->num_rows > 0){
    echo "<script>alert('Email already registered'); window.history.back();</script>";
} 
else {

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (name,email,password) 
            VALUES ('$name','$email','$hashed_password')";

    if($conn->query($sql)){

        // Automatically login user
        $_SESSION['name'] = $name;
        $_SESSION['email'] = $email;

        echo "<script>
        alert('Account created successfully!');
        window.location.href='homepage.html';
        </script>";
    }
}
?>