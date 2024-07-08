let currentQuestion = 1;
const totalQuestions = 3;
let selectedAnswer = '';

const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.answer').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        selectedAnswer = this.getAttribute('data-answer');
    });
});

document.querySelectorAll('.done-button').forEach(button => {
    button.addEventListener('click', function() {
        if (selectedAnswer) {
            checkAnswer(selectedAnswer);
        } else {
            alert('Please select an answer first.');
        }
    });
});

function checkAnswer(userAnswer) {
    const correctAnswers = ['sphere', 'cube', 'pyramid'];
    if (userAnswer === correctAnswers[currentQuestion - 1]) {
        document.getElementById('modal-text').innerText = 'Correct! Well Done!';
        document.getElementById('retry').style.display = 'none';
        document.getElementById('next').style.display = 'inline';
        playAudio(1); 

        document.getElementById('next').onclick = () => {
            document.getElementById('modal').style.display = 'none';
            nextQuestion();
        };
    } else {
        document.getElementById('modal-text').innerText = 'Incorrect! Please try again.';
        document.getElementById('retry').style.display = 'inline';
        document.getElementById('next').style.display = 'none';
        playAudio(2); 

        document.getElementById('retry').onclick = () => {
            document.getElementById('modal').style.display = 'none';
            document.querySelectorAll('.answer').forEach(btn => btn.classList.remove('selected'));
            selectedAnswer = '';  
        };
    }

    document.getElementById('modal').style.display = 'flex';
}

function nextQuestion() {
    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    currentQuestion++;

    if (currentQuestion <= totalQuestions) {
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
        document.getElementById('modal').style.display = 'none';
        selectedAnswer = '';  
    } else {
        showCompletionModal();
    }
}

function showCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'flex';
}

function goBackToExercise4() {
    window.location.href = 'exercise4.php';
}

function toggleBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const soundIcon = document.getElementById('soundIcon');

    backgroundMusic.volume = 0.5;

    if (backgroundMusic.paused) {
        backgroundMusic.play();
        soundIcon.src = 'Image/sound-on.png'; 
    } else {
        backgroundMusic.pause();
        soundIcon.src = 'Image/sound-off.png'; 
    }
}
