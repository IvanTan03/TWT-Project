<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "numzoo";

$response = array();

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['delete_comment'])) {
            $comment_id = $_POST['delete_comment'];

            $stmt_check_owner = $pdo->prepare("SELECT id FROM comments WHERE comment_id = :comment_id AND id = :user_id");
            $stmt_check_owner->bindParam(':comment_id', $comment_id, PDO::PARAM_INT);
            $stmt_check_owner->bindParam(':user_id', $user_id, PDO::PARAM_INT);
            $stmt_check_owner->execute();

            $comment_owner = $stmt_check_owner->fetch(PDO::FETCH_ASSOC);

            if ($comment_owner) {
                
                $stmt_delete = $pdo->prepare("DELETE FROM comments WHERE comment_id = :comment_id");
                $stmt_delete->bindParam(':comment_id', $comment_id, PDO::PARAM_INT);

                if ($stmt_delete->execute()) {
                    $response['success'] = true;
                    $response['message'] = "Comment deleted successfully.";
                } else {
                    $response['success'] = false;
                    $response['message'] = "Error deleting comment.";
                }
            } else {
                $response['success'] = false;
                $response['message'] = "You are not authorized to delete this comment.";
            }
        } else {
            $response['success'] = false;
            $response['message'] = "Delete comment parameter is missing.";
        }
    } else {

        $response['success'] = false;
        $response['message'] = "User ID not set in session.";
    }
} catch (PDOException $e) {

    $response['success'] = false;
    $response['message'] = "Database error: " . $e->getMessage();
}

header('Content-Type: application/json');
echo json_encode($response);
?>
