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
    <link rel="stylesheet" href="css/exercise4-1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
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
    <h1>Press play. What number do you hear?</h1>
    <div class="question" id="question1">
        <img src="Image/Play.png" alt="Play" class="play-button" id="playButton1" onclick="playAudio(1)">
        <div class="choices">
            <button class="choice" onclick="checkAnswer(1, 12)">12</button>
            <button class="choice" onclick="checkAnswer(1, 12)">13</button>
            <button class="choice" onclick="checkAnswer(1, 12)">15</button>
            <button class="choice" onclick="checkAnswer(1, 12)">18</button>
        </div>
    </div>

    <div class="question" id="question2" style="display: none;">
        <img src="Image/Play.png" alt="Play" class="play-button" id="playButton2" onclick="playAudio(2)">
        <div class="choices">
            <button class="choice" onclick="checkAnswer(2, 20)">19</button>
            <button class="choice" onclick="checkAnswer(2, 20)">15</button>
            <button class="choice" onclick="checkAnswer(2, 20)">20</button>
            <button class="choice" onclick="checkAnswer(2, 20)">12</button>
        </div>
    </div>

    <div class="question" id="question3" style="display: none;">
        <img src="Image/Play.png" alt="Play" class="play-button" id="playButton3" onclick="playAudio(3)">
        <div class="choices">
            <button class="choice" onclick="checkAnswer(3, 17)">11</button>
            <button class="choice" onclick="checkAnswer(3, 17)">17</button>
            <button class="choice" onclick="checkAnswer(3, 17)">13</button>
            <button class="choice" onclick="checkAnswer(3, 17)">12</button>
        </div>
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



    <script src="Java Script/exercise4-1.js"></script>
</body>
</html>
