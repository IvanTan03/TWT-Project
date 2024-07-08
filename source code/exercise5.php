<?php

session_start(); 

if (!isset($_SESSION['user_id'])) {
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
    <link rel="icon" href="Image/tab-logo.png" type="image/x-icon">
    <link rel="stylesheet" href="css/exercise3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<div class="back-button">
        <a href="home.php">
            <i class="fas fa-arrow-left"></i>
        </a>
    </div>

    <div class="container">
    <div class="topic">
        <h2>Topic 1: Knowing Numbers</h2>
        <div class="cards">
            <a href="exercise5-1.php" class="card">
                <img src="Image/learningnumbers1.png" alt="Learning Numbers 1">
                <div class="card-info">
                    <h3>Learning Numbers 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>

            <a href="exercise5-2.php" class="card">
                <img src="Image/learningnumbers2.png" alt="Learning Numbers 2">
                <div class="card-info">
                    <h3>Learning Numbers 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise5-3.php" class="card">
                <img src="Image/learningnumbers3.png" alt="Learning Numbers 3">
                <div class="card-info">
                    <h3>Learning Numbers 3</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="topic">
        <h2>Topic 2: Compare and Measure</h2>
        <div class="cards">
            <a href="exercise5-4.php" class="card">
                <img src="Image/compare1.png" alt="Compare and Measure 1">
                <div class="card-info">
                    <h3>Compare and Measure 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise5-5.php" class="card">
                <img src="Image/compare2.png" alt="Compare and Measure 2">
                <div class="card-info">
                    <h3>Compare and Measure 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise5-6.php" class="card">
                <img src="Image/compare3.png" alt="Compare and Measure 3">
                <div class="card-info">
                    <h3>Compare and Measure 3</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="topic">
        <h2>Topic 3: Addition and Subtraction</h2>
        <div class="cards">
            <a href="exercise5-7.php" class="card">
                <img src="Image/addsub1.png" alt="Addition and Subtraction 1">
                <div class="card-info">
                    <h3>Addition and Subtraction 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise5-8.php" class="card">
                <img src="Image/addsub2.png" alt="Addition and Subtraction 2">
                <div class="card-info">
                    <h3>Addition and Subtraction 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise5-9.php" class="card">
                <img src="Image/addsub3.png" alt="Addition and Subtraction 3">
                <div class="card-info">
                    <h3>Addition and Subtraction 3</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="topic">
        <h2>Topic 4: Telling Time</h2>
        <div class="cards">
            <a href="exercise5-10.php" class="card">
                <img src="Image/time1.png" alt="Telling Time 1">
                <div class="card-info">
                    <h3>Telling Time 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise5-11.php" class="card">
                <img src="Image/time2.png" alt="Telling Time 2">
                <div class="card-info">
                    <h3>Telling Time 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise5-12.php" class="card">
                <img src="Image/time3.png" alt="Telling Time 3">
                <div class="card-info">
                    <h3>Telling Time 3</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>


</body>
</html>
