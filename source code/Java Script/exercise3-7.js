const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

document.addEventListener('DOMContentLoaded', function() {
    let currentQuestion = 1;
    const totalQuestions = 3;
    const correctAnswers = [5, 7, 9];

    document.getElementById('question1').style.display = 'block';

    window.checkAnswer = function(questionNumber, selectedAnswer) {
        const modal = document.getElementById('modal');
        const modalText = document.getElementById('modal-text');
        const retryButton = document.getElementById('retry');
        const nextButton = document.getElementById('next');

        if (selectedAnswer === correctAnswers[questionNumber - 1]) {
            modalText.textContent = 'Correct! Ready for the next question?';
            playAudio(1);
            nextButton.style.display = 'inline';
            retryButton.style.display = 'none';
            
            nextButton.onclick = () => {
                modal.style.display = 'none';
                document.getElementById(`question${currentQuestion}`).style.display = 'none';
                currentQuestion++;
                if (currentQuestion <= totalQuestions) {
                    document.getElementById(`question${currentQuestion}`).style.display = 'block';
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
});

function goBackToExercise3() {
    window.location.href = 'exercise3.php';
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
