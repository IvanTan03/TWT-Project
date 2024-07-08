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
    <link rel="stylesheet" href="css/exercise5-4.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.14.0/Sortable.min.js"></script>
</head>
<body>
    
<audio id="backgroundMusic" autoplay loop>
    <source src="sound/exercise5bg.mp3" type="audio/mpeg">
</audio>

<img src="Image/sound-on.png" alt="Sound Control" class="sound-icon" id="soundIcon" onclick="toggleBackgroundMusic()">

<div class="back-button" onclick="window.history.back()">
    <i class="fas fa-arrow-left"></i>
</div>

    <div id="question1" class="question">
        <div class="border-cute">
            <p>Order the lines from longest to shortest. Put the longest line on top.</p>
            <ul id="sortable1" class="sortable-list">
                <li data-index="2" class="sortable-item">_________</li>
                <li data-index="1" class="sortable-item">______</li>
                <li data-index="3" class="sortable-item">____________</li>
            </ul>
            <button class="done-btn" onclick="checkAnswer(1, [3, 2, 1])">Done</button>
        </div>
    </div>

    <div id="question2" class="question">
        <div class="border-cute">
            <p>Order the lines from shortest to longest. Put the shortest line on top.</p>
            <ul id="sortable2" class="sortable-list">
                <li data-index="2" class="sortable-item">_________</li>
                <li data-index="1" class="sortable-item">______</li>
                <li data-index="3" class="sortable-item">____________</li>
            </ul>
            <button class="done-btn" onclick="checkAnswer(2, [1, 2, 3])">Done</button>
        </div>
    </div>

    <div id="question3" class="question">
        <div class="border-cute">
            <p>Order the lines from longest to shortest. Put the longest line on top.</p>
            <ul id="sortable3" class="sortable-list">
                <li data-index="1" class="sortable-item">______</li>
                <li data-index="3" class="sortable-item">____________</li>
                <li data-index="2" class="sortable-item">_________</li>
            </ul>
            <button class="done-btn" onclick="checkAnswer(3, [3, 2, 1])">Done</button>
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
            <button id="goBackButton" class="next-btn" onclick="goBackToExercise5()">Go Back</button>
        </div>
    </div>

    <script src="Java Script/exercise5-4.js"></script>
</body>
</html>
