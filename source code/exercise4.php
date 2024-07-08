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
        <h2>Topic 1: Counting 1-20</h2>
        <div class="cards">
            <a href="exercise4-1.php" class="card">
                <img src="Image/counting1.png" alt="Counting 1">
                <div class="card-info">
                    <h3>Counting 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>

            <a href="exercise4-2.php" class="card">
                <img src="Image/counting2.png" alt="Counting 2">
                <div class="card-info">
                    <h3>Counting 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise4-3.php" class="card">
                <img src="Image/counting3.png" alt="Counting 3">
                <div class="card-info">
                    <h3>Counting 3</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="topic">
        <h2>Topic 2: Arranging Numbers 1-20</h2>
        <div class="cards">
            <a href="exercise4-4.php" class="card">
                <img src="Image/arrangingnumbers2-1.png" alt="Arranging Numbers 1">
                <div class="card-info">
                    <h3>Arranging Numbers 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise4-5.php" class="card">
                <img src="Image/arrangingnumbers2-2.png" alt="Arranging Numbers 2">
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
            <a href="exercise4-6.php" class="card">
                <img src="Image/arrangingnumbers2-3.png" alt="Arranging Numbers 3">
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

    <div class="topic">
        <h2>Topic 3: 3D Shapes</h2>
        <div class="cards">
            <a href="exercise4-7.php" class="card">
                <img src="Image/3Dshapes1.png" alt="Shapes 1">
                <div class="card-info">
                    <h3>3D Shapes 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise4-8.php" class="card">
                <img src="Image/3Dshapes2.png" alt="Shapes 2">
                <div class="card-info">
                    <h3>3D Shapes 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise4-9.php" class="card">
                <img src="Image/3Dshapes3.png" alt="Shapes 3">
                <div class="card-info">
                    <h3>3D Shapes 3</h3>
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
        <h2>Topic 4: Addition and Subtraction (1-10)</h2>
        <div class="cards">
            <a href="exercise4-10.php" class="card">
                <img src="Image/add_sub1.png" alt="Addition and Subtraction 1">
                <div class="card-info">
                    <h3>Addition and Subtraction 1</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise4-11.php" class="card">
                <img src="Image/add_sub2.png" alt="Addition and Subtraction 2">
                <div class="card-info">
                    <h3>Addition and Subtraction 2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </a>
            <a href="exercise4-12.php" class="card">
                <img src="Image/add_sub3.png" alt="Addition and Subtraction 3">
                <div class="card-info">
                    <h3>Addition and Subtraction 3</h3>
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
