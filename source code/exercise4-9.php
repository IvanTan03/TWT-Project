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

$user_id = $_SESSION['user_id'];
$current_url = $_SERVER['REQUEST_URI'];

$sql_check = "SELECT progress_id FROM progress WHERE id = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("i", $user_id);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows > 0) {

    $sql_update = "UPDATE progress SET exercise_url = ? WHERE id = ?";
    $stmt_update = $conn->prepare($sql_update);
    $stmt_update->bind_param("si", $current_url, $user_id);
    if ($stmt_update->execute()) {
        $progress_message = "Progress updated successfully!";
    } else {
        $progress_message = "Error updating progress: " . $conn->error;
    }
    $stmt_update->close();
} else {

    $sql_insert = "INSERT INTO progress (exercise_url, id) VALUES (?, ?)";
    $stmt_insert = $conn->prepare($sql_insert);
    $stmt_insert->bind_param("si", $current_url, $user_id);
    if ($stmt_insert->execute()) {
        $progress_message = "Progress stored successfully!";
    } else {
        $progress_message = "Error storing progress: " . $conn->error;
    }
    $stmt_insert->close();
}

$stmt_check->close();
$conn->close();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numzoo</title>
    <link rel="icon" href="Image/tab-logo.png" type="image/x-icon">
    <link rel="stylesheet" href="css/exercise4-9.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="Java Script/exercise4-9.js"></script>
</head>
<body>
<audio id="backgroundMusic" autoplay loop>
    <source src="sound/exercise4bg.mp3" type="audio/mpeg">
</audio>

<img src="Image/sound-on.png" alt="Sound Control" class="sound-icon" id="soundIcon" onclick="toggleBackgroundMusic()">

<div class="back-button" onclick="window.history.back()">
    <i class="fas fa-arrow-left"></i>
</div>

<div class="container">

    <div class="question" id="question1">
        <p>Sort the 3D shapes.</p>
        <div class="shapes">
            <div class="shape cube" draggable="true" id="cube1"><img src="Image/cube.png" alt="Cube"></div>
            <div class="shape cone" draggable="true" id="cone1"><img src="Image/cone.png" alt="Cone"></div>
            <div class="shape cone" draggable="true" id="cone2"><img src="Image/cone.png" alt="Cone"></div>
        </div>
        <div class="boxes">
            <div class="box" id="cubes1">
                <p>Cubes</p>
            </div>
            <div class="box" id="cones1">
                <p>Cones</p>
            </div>
        </div>
        <button class="done-btn" id="done1">Done</button>
    </div>

    <div class="question" id="question2" style="display:none;">
        <p>Sort the 3D shapes.</p>
        <div class="shapes">
            <div class="shape cone" draggable="true" id="cone3"><img src="Image/cone.png" alt="Cone"></div>
            <div class="shape cube" draggable="true" id="cube2"><img src="Image/cube.png" alt="Cube"></div>
            <div class="shape cube" draggable="true" id="cube3"><img src="Image/cube.png" alt="Cube"></div>
        </div>
        <div class="boxes">
            <div class="box" id="cones2">
                <p>Cones</p>
            </div>
            <div class="box" id="cubes2">
                <p>Cubes</p>
            </div>
        </div>
        <button class="done-btn" id="done2">Done</button>
    </div>

    <div class="question" id="question3" style="display:none;">
        <p>Sort the 3D shapes.</p>
        <div class="shapes">
            <div class="shape cube" draggable="true" id="cube4"><img src="Image/cube.png" alt="Cube"></div>
            <div class="shape cone" draggable="true" id="cone4"><img src="Image/cone.png" alt="Cone"></div>
            <div class="shape cube" draggable="true" id="cube5"><img src="Image/cube.png" alt="Cube"></div>
        </div>
        <div class="boxes">
            <div class="box" id="cones3">
                <p>Cones</p>
            </div>
            <div class="box" id="cubes3">
                <p>Cubes</p>
            </div>
        </div>
        <button class="done-btn" id="done3">Done</button>
    </div>

    <div id="modal" class="modal">
        <div class="modal-content">
            <p id="modal-text"></p>
            <button id="retry" class="retry-btn">Retry</button>
            <button id="next" class="next-btn">Next</button>
        </div>
    </div>

    <div id="completionModal" class="modal">
        <div class="modal-content">
            <p id="completion-text">Congratulations! You've completed all questions.</p>
            <button id="goBackButton" class="next-btn" onclick="goBackToExercise4()">Go Back</button>
        </div>
    </div>
</div>

</body>
</html>
