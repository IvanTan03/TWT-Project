const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

function checkAnswer(questionNumber, correctAnswer) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const retryButton = document.getElementById('retry');
    const nextButton = document.getElementById('next');

    const selectedAnswer = parseInt(event.target.textContent);

    if (selectedAnswer === correctAnswer) {
        modalText.textContent = 'Correct! Well done!';
        playAudio(1);
        nextButton.style.display = 'inline';
        retryButton.style.display = 'none';

        nextButton.onclick = () => {
            modal.style.display = 'none';
            if (questionNumber < 3) {
                document.getElementById('question' + questionNumber).style.display = 'none';
                document.getElementById('question' + (questionNumber + 1)).style.display = 'flex';
            } else {
                showCompletionModal();
            }
        };
    } else {
        modalText.textContent = 'Incorrect. Please try again.';
        playAudio(2);
        nextButton.style.display = 'none';
        retryButton.style.display = 'inline';

        retryButton.onclick = () => {
            modal.style.display = 'none';
        };
    }

    modal.style.display = 'flex';
}

function showCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'flex';
}

function goBackToExercise5() {
    window.location.href = 'exercise5.php';
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