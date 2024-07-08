<?php

session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "numzoo";

try {
    
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $videoId = filter_input(INPUT_GET, 'videoId', FILTER_SANITIZE_STRING);

    $stmt = $pdo->prepare("
        SELECT c.comment_id, c.comment_text, u.child_nickname
        FROM comments c
        JOIN user_info u ON c.id = u.id
        WHERE c.tutorial_id = :videoId
    ");
    $stmt->bindParam(':videoId', $videoId, PDO::PARAM_STR);
    $stmt->execute();
    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["success" => true, "comments" => $comments]);

} catch (PDOException $e) {

    echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
}
?>
