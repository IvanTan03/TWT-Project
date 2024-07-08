<?php
session_start(); 

if (!isset($_SESSION['user_id'])) {
    header("Location: Login.html");
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "numzoo";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_SESSION['user_id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['child_age'])) {
        $new_age = (int) $_POST['child_age'];
        $sql = "UPDATE user_info SET child_age = $new_age WHERE id = $user_id";
        if ($conn->query($sql) === TRUE) {
            echo "<script> 
                alert('Child age updated successfully!');
                window.location.href = 'home.php';
                </script>";
        } else {
            echo "<script>
            alert('Error updating child age: " . $conn->error . "');
            window.history.back();
            </script>";
        }
    }

    if (isset($_POST['new_password']) && !empty($_POST['new_password'])) {
        $new_password = password_hash($_POST['new_password'], PASSWORD_DEFAULT);
        $sql = "UPDATE user_info SET password = '$new_password' WHERE id = $user_id";
        if ($conn->query($sql) === TRUE) {
            echo "<script> alert('Password changed successfully!');
            window.location.href = 'home.php'
            </script>";
        } else {
            echo "<script>
            alert('Error changing password: " . $conn->error . "');
            window.history.back();
            </script>";
        }
    }

    if (isset($_POST['practice_minutes']) && !empty($_POST['practice_minutes'])) {
        $practice_minutes = (int) $_POST['practice_minutes'];
        $sql = "UPDATE user_info SET practice_minutes = $practice_minutes WHERE id = $user_id";
        if ($conn->query($sql) === TRUE) {
            echo "<script>
                alert('Practice goal updated successfully!');
                window.location.href = 'home.php';
                </script>";
        } else {
            echo "<script>
            alert('Error updating practice goal: " . $conn->error . "');
            window.history.back();
            </script>";
        }
    }
}

$sql = "SELECT child_nickname, child_age, practice_minutes FROM user_info WHERE id = $user_id";
$result = $conn->query($sql);
$user_info = $result->fetch_assoc();

if (!$user_info) {
    die('User not found');
}

$child_age = $user_info['child_age']; 
$practice_minutes = $user_info['practice_minutes'];

$sql_recent_activity = "SELECT exercise_url FROM progress WHERE id = $user_id";
$result_recent_activity = $conn->query($sql_recent_activity);
$recent_activity = $result_recent_activity->fetch_assoc();

$age = '';
$chapter = '';

if ($recent_activity && isset($recent_activity['exercise_url'])) {
    $url = $recent_activity['exercise_url'];
    if (preg_match('/exercise(\d+)-(\d+)/', $url, $matches)) {
        $age = $matches[1];
        $chapter = $matches[2];
    }
}

$conn->close();

date_default_timezone_set('Asia/Kuala_Lumpur');
$hour = date('H');
if ($hour >= 6 && $hour < 12) {
    $greeting = "Good Morning";
} else if ($hour >= 12 && $hour < 18) {
    $greeting = "Good Afternoon";
} else if ($hour >= 18 && $hour < 22) {
    $greeting = "Good Evening";
} else {
    $greeting = "Good Night, it's late now, you should take a break and rest";
}

$nickname = htmlspecialchars($user_info['child_nickname']);
$greetingMessage = "$greeting, $nickname!";

$specific_message = '';

switch ("$age-$chapter") {
    case '3-1':
        $specific_message = 'You are working on Topic 1 Exercise 1 for 3 years old!';
        break;
    case '3-2':
        $specific_message = 'You are working on Topic 1 Exercise 2 for 3 years old!';
        break;
    case '3-3':
        $specific_message = 'You are working on Topic 1 Exercise 3 for 3 years old!';
        break;
    case '3-4':
        $specific_message = 'You are working on Topic 2 Exercise 1 for 3 years old!';
        break;
    case '3-5':
        $specific_message = 'You are working on Topic 2 Exercise 2 for 3 years old!';
        break;
    case '3-6':
        $specific_message = 'You are working on Topic 2 Exercise 3 for 3 years old!';
        break;
    case '3-7':
        $specific_message = 'You are working on Topic 3 Exercise 1 for 3 years old!';
        break;
    case '3-8':
        $specific_message = 'You are working on Topic 3 Exercise 2 for 3 years old!';
        break;
    case '3-9':
        $specific_message = 'You are working on Topic 3 Exercise 3 for 3 years old!';
        break;
    case '4-1':
        $specific_message = 'You are working on Topic 1 Exercise 1 for 4 years old!';
        break;
    case '4-2':
        $specific_message = 'You are working on Topic 1 Exercise 2 for 4 years old!';
        break;
    case '4-3':
        $specific_message = 'You are working on Topic 1 Exercise 3 for 4 years old!';
        break;
    case '4-4':
        $specific_message = 'You are working on Topic 2 Exercise 1 for 4 years old!';
        break;
    case '4-5':
        $specific_message = 'You are working on Topic 2 Exercise 2 for 4 years old!';
        break;
    case '4-6':
        $specific_message = 'You are working on Topic 2 Exercise 3 for 4 years old!';
        break;
    case '4-7':
        $specific_message = 'You are working on Topic 3 Exercise 1 for 4 years old!';
        break;
    case '4-8':
        $specific_message = 'You are working on Topic 3 Exercise 2 for 4 years old!';
        break;
    case '4-9':
        $specific_message = 'You are working on Topic 3 Exercise 3 for 4 years old!';
        break;
    case '4-10':
        $specific_message = 'You are working on Topic 4 Exercise 1 for 4 years old!';
        break;
    case '4-11':
        $specific_message = 'You are working on Topic 4 Exercise 2 for 4 years old!';
        break;
    case '4-12':
        $specific_message = 'You are working on Topic 4 Exercise 3 for 4 years old!';
        break;
    case '5-1':
        $specific_message = 'You are working on Topic 1 Exercise 1 for 5 years old!';
        break;
    case '5-2':
        $specific_message = 'You are working on Topic 1 Exercise 2 for 5 years old!';
        break;
    case '5-3':
        $specific_message = 'You are working on Topic 1 Exercise 3 for 5 years old!';
        break;
    case '5-4':
        $specific_message = 'You are working on Topic 2 Exercise 1 for 5 years old!';
        break;
    case '5-5':
        $specific_message = 'You are working on Topic 2 Exercise 2 for 5 years old!';
        break;
    case '5-6':
        $specific_message = 'You are working on Topic 2 Exercise 3 for 5 years old!';
        break;
    case '5-7':
        $specific_message = 'You are working on Topic 3 Exercise 1 for 5 years old!';
        break;
    case '5-8':
        $specific_message = 'You are working on Topic 3 Exercise 2 for 5 years old!';
        break;
    case '5-9':
        $specific_message = 'You are working on Topic 3 Exercise 3 for 5 years old!';
        break;
    case '5-10':
        $specific_message = 'You are working on Topic 4 Exercise 1 for 5 years old!';
        break;
    case '5-11':
        $specific_message = 'You are working on Topic 4 Exercise 2 for 5 years old!';
        break;
    case '5-12':
        $specific_message = 'You are working on Topic 4 Exercise 3 for 5 years old!';
        break;
    default:
        $specific_message = 'Keep up the good work!';
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numzoo</title>
    <link rel="stylesheet" href="css/home.css">
    <link rel="icon" href="Image/tab-logo.png" type="image/x-icon">
    <script src="Java Script/home.js"></script>
    <script src="Java Script/settings.js"></script>

</head>

<body>
    <div class="container">
        <div class="welcome-section">
            <div class="profile-container">
                <img src="Image/profile.png" alt="Profile Picture" class="profile-picture">
                <p id="user-nickname" class="nickname-box"><?php echo htmlspecialchars($user_info['child_nickname']); ?>
                </p>
                <button class="settings-button" onclick="playOpenUpSound(); showMultiplicationModal()">
                    <img src="Image/settings-logo.png" alt="Settings" class="settings-icon">
                </button>
            </div>
            <p id="welcome-message"><?php echo $greetingMessage; ?></p>
        </div>
        <div class="activity-section">
            <div class="goal-container">
                <h2>Today's learning path</h2>
                <div id="goal-bar">
                    <p id="practice-minutes"><?php echo $practice_minutes; ?> minutes</p>
                </div>
            </div>
            <div class="activity-container">
                <h2>Recent Activity</h2>
                <div id="recent-activity">
                    <p><?php echo $specific_message ?></p>
                </div>
            </div>
        </div>
        <div class="courses-section">
            <h2>Courses</h2>
            <div class="sidepanel">
                <a href="#" id="tutorial-link" onclick="playDoubleKnockSound(); showContent('tutorial', event)">
                    <img src="Image/tutorial-logo.png" alt="Tutorial Icon">
                    Tutorial
                </a>
                <a href="#" id="exercise-link" onclick="playDoubleKnockSound(); showContent('exercise', event)">
                    <img src="Image/exercise-logo.png" alt="Exercise Icon">
                    Exercise
                </a>
            </div>

            <div id="course-content" class="course-content">
                <div id="tutorial-content" class="content">
                    <div class="image-item">
                        <a href="tutorial3.php"
                            onclick="playJumpSound(); setTimeout(function() { window.location.href = 'tutorial3.php'; }, 300); return false;">
                            <div class="image-container">
                                <img src="Image/tutorial3.png" alt="Tutorial 3">
                                <p>Tutorial for 3 years old</p>
                            </div>
                        </a>
                        <?php if ($child_age == 3): ?>
                            <span class="recommended-label">Recommended</span>
                        <?php endif; ?>
                    </div>
                    <div class="image-item">
                        <a href="tutorial4.php"
                            onclick="playJumpSound(); setTimeout(function() { window.location.href = 'tutorial4.php'; }, 300); return false;">
                            <div class="image-container">
                                <img src="Image/tutorial4.png" alt="Tutorial 4">
                                <p>Tutorial for 4 years old</p>
                            </div>
                        </a>
                        <?php if ($child_age == 4): ?>
                            <span class="recommended-label">Recommended</span>
                        <?php endif; ?>
                    </div>
                    <div class="image-item">
                        <a href="tutorial5.php"
                            onclick="playJumpSound(); setTimeout(function() { window.location.href = 'tutorial5.php'; }, 300); return false;">
                            <div class="image-container">
                                <img src="Image/tutorial5.png" alt="Tutorial 5">
                                <p>Tutorial for 5 years old</p>
                            </div>
                        </a>
                        <?php if ($child_age == 5): ?>
                            <span class="recommended-label">Recommended</span>
                        <?php endif; ?>
                    </div>
                </div>


                <div id="exercise-content" class="content">
                    <div class="image-item">
                        <a href="exercise3.php"
                            onclick="playJumpSound(); setTimeout(function() { window.location.href = 'exercise3.php'; }, 300); return false;">
                            <div class="image-container">
                                <img src="Image/exercise3.png" alt="Exercise 3">
                                <p>Exercise for 3 years old</p>
                            </div>
                        </a>
                        <?php if ($child_age == 3): ?>
                            <span class="recommended-label">Recommended</span>
                        <?php endif; ?>
                    </div>
                    <div class="image-item">
                        <a href="exercise4.php"
                            onclick="playJumpSound(); setTimeout(function() { window.location.href = 'exercise4.php'; }, 300); return false;">
                            <div class="image-container">
                                <img src="Image/exercise4.png" alt="Exercise 4">
                                <p>Exercise for 4 years old</p>
                            </div>
                        </a>
                        <?php if ($child_age == 4): ?>
                            <span class="recommended-label">Recommended</span>
                        <?php endif; ?>
                    </div>
                    <div class="image-item">
                        <a href="exercise5.php"
                            onclick="playJumpSound(); setTimeout(function() { window.location.href = 'exercise5.php'; }, 300); return false;">
                            <div class="image-container">
                                <img src="Image/exercise5.png" alt="Exercise 5">
                                <p>Exercise for 5 years old</p>
                            </div>
                        </a>
                        <?php if ($child_age == 5): ?>
                            <span class="recommended-label">Recommended</span>
                        <?php endif; ?>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div id="multiplication-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeMultiplicationModal()">&times;</span>
            <p>Solve this multiplication question to access the settings:</p>
            <p id="multiplication-question"></p>
            <input type="number" id="multiplication-answer" placeholder="Your answer">
            <button onclick="checkMultiplicationAnswer(); playDoubleKnockSound()">Submit</button>
        </div>
    </div>

    <div id="settings-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeSettingsModal()">&times;</span>
            <h2>Settings</h2>
            <label for="music-toggle">Background Music:</label>
            <input type="checkbox" id="music-toggle" onchange="toggleMusic()">
            <br>
            <label for="music-volume">Music Volume:</label>
            <input type="range" id="music-volume" min="0" max="100" onchange="adjustMusicVolume()">
            <br>

            <form action="" method="POST">
                <label for="child-age">Update Child Age:</label>
                <input type="number" id="child-age" name="child_age" min="3" max="5"
                    value="<?php echo htmlspecialchars($child_age); ?>" required><br>
                <button type="submit" id="update-age-btn">Update Age</button>
            </form>
            <br>
            <form action="" method="POST">
                <label for="new-password">Change Password:</label>
                <input type="password" id="new-password" name="new_password" placeholder="New Password" required><br>
                <button type="submit" id="update-password-btn">Change Password</button>
            </form>
            <br>
            <form action="" method="POST">
                <div id="goal-setting-container">
                    <h2>Set Practice Goal</h2>
                    <label for="practice-minutes">Minutes (max 30):</label>
                    <input type="range" id="practice-minutes-setting" name="practice_minutes" min="1" max="30"
                        value="15" oninput="updateMinutesDisplay()" required><br>
                    <span id="minutes-display-setting">15</span> minutes<br><br>
                    <button type="submit" id="update-goal-btn">Set Goal</button>
                </div>
            </form>

            <br>
            <form action="logout.php" method="POST">
                <button type="submit" id="logout-btn">Log Out</button>
            </form>

        </div>
    </div>
</body>

</html>