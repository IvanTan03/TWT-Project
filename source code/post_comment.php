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

        $comment_text = filter_input(INPUT_POST, 'comment', FILTER_SANITIZE_STRING);
        $tutorial_id = filter_input(INPUT_POST, 'videoId', FILTER_SANITIZE_STRING);
        $parent_comment_id = isset($_POST['parentCommentId']) ? $_POST['parentCommentId'] : null;

        $stmt = $pdo->prepare("INSERT INTO comments (id, tutorial_id, comment_text, parent_comment_id) 
                               VALUES (:user_id, :tutorial_id, :comment_text, :parent_comment_id)");
        $stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->bindParam(':tutorial_id', $tutorial_id, PDO::PARAM_STR);
        $stmt->bindParam(':comment_text', $comment_text, PDO::PARAM_STR);
        $stmt->bindParam(':parent_comment_id', $parent_comment_id, PDO::PARAM_INT);

        if ($stmt->execute()) {
         
            $comment_id = $pdo->lastInsertId();
            $stmt = $pdo->prepare("SELECT c.comment_id, c.comment_text, u.child_nickname AS nickname
                                   FROM comments c
                                   JOIN user_info u ON c.id = u.id
                                   WHERE c.comment_id = :comment_id");
            $stmt->bindParam(':comment_id', $comment_id, PDO::PARAM_INT);
            $stmt->execute();
            $comment = $stmt->fetch(PDO::FETCH_ASSOC);

            $alertMessage = "Comment posted successfully!";

            echo "<script>alert('$alertMessage'); window.history.back(); </script>";
        } else {
            $errorMessage = "Failed to post comment.";
            echo "<script>alert('$errorMessage');</script>";
        }
    } else {
        $errorMessage = "User not logged in.";
        echo "<script>alert('$errorMessage'); window.location.href='Login.html';</script>";
    }
} catch (PDOException $e) {
    $errorMessage = "Database error: " . $e->getMessage();
    echo "<script>alert('$errorMessage');</script>";
}
?>
