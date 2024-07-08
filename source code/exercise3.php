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
        <h2>Topic 1: Learning and count</h2>
        <div class="cards">
            <a href="exercise3-1.php" class="card">
                <img src="Image/learningandcount1.png" alt="Learning and Count 1">
                <div class="card-info">
                    <h3>Learning and Count 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>

            <a href="exercise3-2.php" class="card">
                <img src="Image/learningandcount2.png" alt="Learning and Count 2">
                <div class="card-info">
                    <h3>Learning and Count 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise3-3.php" class="card">
                <img src="Image/learningandcount3.png" alt="Learning and Count 3">
                <div class="card-info">
                    <h3>Learning and Count 3</h3>
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
        <h2>Topic 2: Knowing shapes</h2>
        <div class="cards">
            <a href="exercise3-4.php" class="card">
                <img src="Image/knowingshapes1.png" alt="Knowing Shapes 1">
                <div class="card-info">
                    <h3>Knowing Shapes 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise3-5.php" class="card">
                <img src="Image/knowingshapes2.png" alt="Knowing Shapes 2">
                <div class="card-info">
                    <h3>Knowing Shapes 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise3-6.php" class="card">
                <img src="Image/knowingshapes3.png" alt="Knowing Shapes 3">
                <div class="card-info">
                    <h3>Knowing Shapes 3</h3>
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
        <h2>Topic 3: Arranging numbers 1-10</h2>
        <div class="cards">
            <a href="exercise3-7.php" class="card">
                <img src="Image/arrangingnumbers1.png" alt="Arranging Numbers 1">
                <div class="card-info">
                    <h3>Arranging Numbers 1</h3>
                    <div class="stars">
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise3-8.php" class="card">
                <img src="Image/arrangingnumbers2.png" alt="Arranging Numbers 2">
                <div class="card-info">
                    <h3>Arranging Numbers 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise3-9.php" class="card">
                <img src="Image/arrangingnumbers3.png" alt="Arranging Numbers 3">
                <div class="card-info">
                    <h3>Arranging Numbers 3</h3>
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
</div>


</body>
</html>
