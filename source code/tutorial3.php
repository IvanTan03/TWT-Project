<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "numzoo";

try {
 
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
   
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];

        $stmt = $pdo->prepare("SELECT child_nickname FROM user_info WHERE id = :user_id");
        $stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {

            echo "<script> alert('User information not found.'); </script>";
        }

        $child_nickname = $user['child_nickname'];


    } else {

        echo "<script> alert('User ID not set in session.'); 
        window.location.href = 'Login.html' </script>";
    }

} catch (PDOException $e) {

    die("Error: " . $e->getMessage());
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numzoo</title>
    <link rel="stylesheet" href="css/tutorial3.css">
    <link rel="icon" href="Image/tab-logo.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>

<div class="back-button" onclick="window.history.back()">
    <i class="fas fa-arrow-left"></i>
</div>

            <div class="container">
                <div class="topic-nav">
                    <button class="round-button" onclick="navigateTopic('left'); playDoubleKnockSound()">&larr;</button>
                    <h2 id="topicTitle"></h2>
                    <button class="round-button" onclick="navigateTopic('right'); playDoubleKnockSound()">&rarr;</button>
                </div>
                <div class="learning-type">
                    <button id="normalTeachingButton" class="learning-button" onclick="showVideo('normal'); playDoubleKnockSound()">Normal
                        teaching</button>
                    <button id="funLearningButton" class="learning-button" onclick="showVideo('fun'); playDoubleKnockSound()">Fun learning</button>
                </div>

                <div id="videoContainer" class="video-container"></div>
            </div>


            </main>

            <div id="videoModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h3 id="modalVideoTitle"></h3>
                    <div id="modalVideoContainer"></div>
                    <h3>Comments:</h3>
                    <div id="commentSection" class="comment">
                    </div>


                    <form action="post_comment.php" method="post">
                        <textarea id="comment" name="comment" placeholder="Enter your comment" required></textarea>
                        <input type="hidden" id="nickname" name="nickname" value="<?php echo htmlspecialchars($child_nickname); ?>" readonly>
                        <input type="hidden" id="videoId" name="videoId">
                        <button type="submit">Post Comment</button>
                    </form>

                </div>
            </div>
            <script src="Java Script/tutorial3.js"></script>


</body>

</html>