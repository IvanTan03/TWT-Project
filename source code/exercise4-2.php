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
    <link rel="stylesheet" href="css/exercise4-2.css">
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

<div class="question-container">
    <div id="question-1" class="question-box active">
        <p>Count the rubber ducks. Click each rubber duck to keep track as you count.</p>
        <div class="duck-container">
            <?php
            $numDucks = 11; 
            for ($i = 1; $i <= $numDucks; $i++) {
                echo '<div class="duck-wrapper">';
                echo '<img src="Image/duck.png" class="duck" onclick="countDucks(' . $i . ', 1)">';
                echo '<span class="duck-number"></span>';
                echo '</div>';
            }
            ?>
        </div>
        <p>How many rubber ducks are there?</p>
        <button class="answer-btn" onclick="checkAnswer(11)">11</button>
        <button class="answer-btn" onclick="checkAnswer(12)">12</button>
        <button class="answer-btn" onclick="checkAnswer(13)">13</button>
    </div>
    <div id="question-2" class="question-box">
        <p>Count the rubber ducks. Click each rubber duck to keep track as you count.</p>
        <div class="duck-container">
            <?php
            $numDucks = 17; 
            for ($i = 1; $i <= $numDucks; $i++) {
                echo '<div class="duck-wrapper">';
                echo '<img src="Image/duck.png" class="duck" onclick="countDucks(' . $i . ', 2)">';
                echo '<span class="duck-number"></span>';
                echo '</div>';
            }
            ?>
        </div>
        <p>How many rubber ducks are there?</p>
        <button class="answer-btn" onclick="checkAnswer(12)">12</button>
        <button class="answer-btn" onclick="checkAnswer(15)">15</button>
        <button class="answer-btn" onclick="checkAnswer(17)">17</button>
    </div>
    <div id="question-3" class="question-box">
        <p>Count the rubber ducks. Click each rubber duck to keep track as you count.</p>
        <div class="duck-container">
            <?php
            $numDucks = 15; 
            for ($i = 1; $i <= $numDucks; $i++) {
                echo '<div class="duck-wrapper">';
                echo '<img src="Image/duck.png" class="duck" onclick="countDucks(' . $i . ', 3)">';
                echo '<span class="duck-number"></span>';
                echo '</div>';
            }
            ?>
        </div>
        <p>How many rubber ducks are there?</p>
        <button class="answer-btn" onclick="checkAnswer(13)">13</button>
        <button class="answer-btn" onclick="checkAnswer(14)">14</button>
        <button class="answer-btn" onclick="checkAnswer(15)">15</button>
    </div>
</div>

<div id="modal" class="modal" style="display:none;">
        <div class="modal-content">
            <p id="modal-text"></p>
            <button id="retry" class="retry-btn">Retry</button>
            <button id="next" class="next-btn">Next</button>
        </div>
    </div>

    <div id="completionModal" class="modal" style="display:none;">
    <div class="modal-content">
        <p id="completion-text">Congratulations! You've completed all questions.</p>
        <button id="goBackButton" class="next-btn" onclick="goBackToExercise4()">Go Back</button>
    </div>
</div>

<script src="Java Script/exercise4-2.js"></script>
</body>
</html>
