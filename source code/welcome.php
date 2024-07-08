<?php
session_start();

if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "numzoo";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT child_nickname FROM user_info WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $stmt->bind_result($child_nickname);
    $stmt->fetch();
    $stmt->close();
    $conn->close();
} else {

    header("Location: Login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numzoo</title>
    <link rel="stylesheet" href="css/welcome.css">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <link rel="icon" href="Image/tab-logo.png" type="image/x-icon">
</head>
<body>
    <div class="welcome-container">
        <h1 class="welcome-text">Welcome, <?php echo htmlspecialchars($child_nickname); ?></h1>
    </div>

    <script src="Java Script/welcome.js"></script>

</body>
</html>
