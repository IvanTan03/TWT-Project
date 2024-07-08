<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "numzoo";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $stmt = $conn->prepare("SELECT * FROM user_info WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            
            session_start();
            $_SESSION['user_id'] = $user['id'];
           

            echo "<script>
                    alert('Login successful!');
                    window.location.href = 'welcome.php';
                  </script>";
        } else {
            echo "<script>
                    alert('Incorrect password!');
                    window.history.back();
                  </script>";
        }
    } else {
        echo "<script>
                alert('User does not exist!');
                document.addEventListener('DOMContentLoaded', function() {
                    document.getElementById('registerpop-up').click();
                });
                window.history.back();
              </script>";
    }

    $stmt->close();
}

$conn->close();
?>
