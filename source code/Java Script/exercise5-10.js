const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const retryButton = document.getElementById('retry');
    const nextButton = document.getElementById('next');

    window.checkAnswer = function(answerId, correctAnswer, nextQuestionId) {
        const userAnswer = document.getElementById(answerId).value.trim();
        if (userAnswer === correctAnswer) {
            if (nextQuestionId) {
                modalText.textContent = 'Correct! Moving to the next question.';
                playAudio(1);
                nextButton.style.display = 'inline';
                retryButton.style.display = 'none';
                nextButton.onclick = () => {
                    document.getElementById(answerId).parentNode.style.display = 'none';
                    document.getElementById(nextQuestionId).style.display = 'inline-block';
                    modal.style.display = 'none';
                };
            } else {
                showCompletionModal();
            }
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

    window.goBackToExercise5 = function() {
        window.location.href = 'exercise5.php';
    };
});

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
