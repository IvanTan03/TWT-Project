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
    <link rel="stylesheet" href="css/exercise4-3.css">
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

    <div id="question1" class="question">
        <p>Count the hippos. Now type the missing numbers:</p>
        <div class="hippos">

            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
        </div>
        <div class="answer-area">
            <input type="text" id="tens1" class="input-box">
            <span>tens +</span>
            <input type="text" id="ones1" class="input-box">
            <span>ones =</span>
            <input type="text" id="total1" class="input-box">
            <button class="answer-btn" onclick="checkAnswer(1, 13)">Answer</button>
        </div>
    </div>

    <div id="question2" class="question" style="display:none;">
        <p>Count the hippos. Now type the missing numbers:</p>
        <div class="hippos">

            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
        </div>
        <div class="answer-area">
            <input type="text" id="tens2" class="input-box">
            <span>tens +</span>
            <input type="text" id="ones2" class="input-box">
            <span>ones =</span>
            <input type="text" id="total2" class="input-box">
            <button class="answer-btn" onclick="checkAnswer(2, 18)">Answer</button>
        </div>
    </div>

    <div id="question3" class="question" style="display:none;">
        <p>Count the hippos. Now type the missing numbers:</p>
        <div class="hippos">

            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
            <img src="Image/hippo1.png" alt="Hippo">
    
        </div>
        <div class="answer-area">
            <input type="text" id="tens3" class="input-box">
            <span>tens +</span>
            <input type="text" id="ones3" class="input-box">
            <span>ones =</span>
            <input type="text" id="total3" class="input-box">
            <button class="answer-btn" onclick="checkAnswer(3, 19)">Answer</button>
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

    <script src="Java Script/exercise4-3.js"></script>
</body>
</html>
