let currentQuestion = 1;
let clickCount = 0;
let correctAnswer = 3; 

const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

window.playAudio = playAudio;
document.addEventListener("DOMContentLoaded", () => {
    showQuestion(currentQuestion);
});

function countDucks(duckNumber, questionNumber) {
    clickCount = duckNumber; 
    document.querySelectorAll(`#question-${questionNumber} .duck`).forEach((duck, index) => {
        if (index < duckNumber) {
            duck.classList.add('counted');
            let numberSpan = duck.nextElementSibling;
            numberSpan.textContent = index + 1;
            numberSpan.style.display = 'inline-block'; 
        } else {
            duck.classList.remove('counted');
            let numberSpan = duck.nextElementSibling;
            numberSpan.textContent = '';
            numberSpan.style.display = 'none'; 
        }
    });
}

function checkAnswer(answer) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const retryButton = document.getElementById('retry');
    const nextButton = document.getElementById('next');
    
    if (answer === correctAnswer) {
        modalText.textContent = 'Correct! Well done!';
        playAudio(1);
        nextButton.style.display = 'inline';
        retryButton.style.display = 'none';
        
        nextButton.onclick = () => {
            modal.style.display = 'none';
            currentQuestion++;
            clickCount = 0; 
            if (currentQuestion <= 3) {
                showQuestion(currentQuestion);
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

function showQuestion(questionNumber) {
    document.querySelectorAll('.question-box').forEach(box => {
        box.classList.remove('active');
    });
    const currentBox = document.getElementById(`question-${questionNumber}`);
    currentBox.classList.add('active');
    setCorrectAnswer(questionNumber);
}

function setCorrectAnswer(questionNumber) {
    if (questionNumber === 1) {
        correctAnswer = 11; 
    } else if (questionNumber === 2) {
        correctAnswer = 17;
    } else if (questionNumber === 3) {
        correctAnswer = 15; 
    }
}

const backgroundMusic = document.getElementById('backgroundMusic');
const soundIcon = document.getElementById('soundIcon');

backgroundMusic.volume = 0.5;

function toggleBackgroundMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        soundIcon.src = 'Image/sound-on.png';
    } else {
        backgroundMusic.pause();
        soundIcon.src = 'Image/sound-off.png';
    }
}

function showCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'flex';
}

function goBackToExercise4() {
    window.location.href = 'exercise4.php';
}