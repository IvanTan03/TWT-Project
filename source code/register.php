<?php

session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "numzoo";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST["user_id"];
    $child_nickname = $_POST["child_nickname"];
    $child_age = $_POST["child_age"];
    $practice_minutes = $_POST["practice_minutes"];

    $stmt = $conn->prepare("UPDATE user_info SET child_nickname = ?, child_age = ?, practice_minutes = ? WHERE id = ?");
    $stmt->bind_param("siii", $child_nickname, $child_age, $practice_minutes, $user_id);

    if ($stmt->execute()) {
        echo "<script>
                alert('Registration successful! Welcome to Numzoo!');
                window.location.href = 'Login.html';
              </script>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
