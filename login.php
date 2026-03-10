<?php
session_start();
include "connect.php";

if(isset($_POST['email']) && isset($_POST['password'])){

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if(!$result){
    die("SQL Error: " . $conn->error);
}

if($result->num_rows > 0){

    $row = $result->fetch_assoc();

    if(password_verify($password, $row['password'])){

        $_SESSION['user_id'] = $row['user_id'];
        $_SESSION['name'] = $row['name'];
        $_SESSION['role'] = $row['role'];

        header("Location: ./customer_homepage/home.html");
        exit();

    } else {
        echo "Incorrect password";
    }

} else {
    echo "User not found";
}

}

$conn->close();
?>