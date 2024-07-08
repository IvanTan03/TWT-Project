const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

document.addEventListener('DOMContentLoaded', () => {
    let currentQuestion = 0;
    const totalQuestions = 3;
    const answers = [18, 16, 17]; 
    const questions = [
        {
            sharks: 10,
            additionalSharks: 8
        },
        {
            sharks: 7,
            additionalSharks: 9
        },
        {
            sharks: 15,
            additionalSharks: 2
        }
    ];

    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const retryButton = document.getElementById('retry');
    const nextButton = document.getElementById('next');
    const completionModal = document.getElementById('completionModal');

    function loadQuestion() {
        const question = questions[currentQuestion];
        const questionContainer = document.getElementById('question');
        questionContainer.innerHTML = '';

        for (let i = 0; i < question.sharks; i++) {
            const img = document.createElement('img');
            img.src = 'Image/shark.png';
            img.alt = 'Shark';
            questionContainer.appendChild(img);
        }

        const plus = document.createElement('span');
        plus.textContent = '+';
        questionContainer.appendChild(plus);

        for (let i = 0; i < question.additionalSharks; i++) {
            const img = document.createElement('img');
            img.src = 'Image/shark.png';
            img.alt = 'Shark';
            questionContainer.appendChild(img);
        }

        document.getElementById('userAnswer').value = '';
    }

    function checkAnswer() {
        const userAnswer = parseInt(document.getElementById('userAnswer').value);
        if (userAnswer === answers[currentQuestion]) {
            currentQuestion++;
            if (currentQuestion < totalQuestions) {
                modalText.textContent = 'Correct! Click Next to proceed.';
                playAudio(1);
                retryButton.style.display = 'none';
                nextButton.style.display = 'inline';
                nextButton.onclick = () => {
                    modal.style.display = 'none';
                    loadQuestion();
                };
            } else {
                playAudio(1);
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
        completionModal.style.display = 'flex';
    }

    window.goBackToExercise5 = function() {
        window.location.href = 'exercise5.php';
    };

    window.checkAnswer = checkAnswer;
    
    loadQuestion();
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
