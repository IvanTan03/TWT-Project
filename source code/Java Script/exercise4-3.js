const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

document.addEventListener('DOMContentLoaded', function () {
    function checkAnswer(questionNumber, correctAnswer) {
        const modal = document.getElementById('modal');
        const modalText = document.getElementById('modal-text');
        const retryButton = document.getElementById('retry');
        const nextButton = document.getElementById('next');
        
        let tensInput, onesInput, totalInput;
        
        if (questionNumber === 1) {
            tensInput = document.getElementById('tens1').value;
            onesInput = document.getElementById('ones1').value;
            totalInput = document.getElementById('total1').value;
        } else if (questionNumber === 2) {
            tensInput = document.getElementById('tens2').value;
            onesInput = document.getElementById('ones2').value;
            totalInput = document.getElementById('total2').value;
        } else if (questionNumber === 3) {
            tensInput = document.getElementById('tens3').value;
            onesInput = document.getElementById('ones3').value;
            totalInput = document.getElementById('total3').value;
        }
        
        const tens = parseInt(tensInput);
        const ones = parseInt(onesInput);
        const total = parseInt(totalInput);
        
        if (tens * 10 + ones === correctAnswer && total === correctAnswer) {
            modalText.textContent = 'Correct! Well done!';
            playAudio(1);
            nextButton.style.display = 'inline';
            retryButton.style.display = 'none';
            
            nextButton.onclick = () => {
                modal.style.display = 'none';
                if (questionNumber < 3) {
                    document.getElementById('question' + questionNumber).style.display = 'none';
                    document.getElementById('question' + (questionNumber + 1)).style.display = 'inline';
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

    window.checkAnswer = checkAnswer;
    window.showCompletionModal = showCompletionModal;
});

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