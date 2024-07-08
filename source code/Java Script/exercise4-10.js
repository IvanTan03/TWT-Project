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
    const answers = [5, 6, 5]; 
    const questions = [
        {
            apples: 4,
            additionalApples: 1
        },
        {
            apples: 3,
            additionalApples: 3
        },
        {
            apples: 2,
            additionalApples: 3
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

        for (let i = 0; i < question.apples; i++) {
            const img = document.createElement('img');
            img.src = 'Image/apple.png';
            img.alt = 'Apple';
            questionContainer.appendChild(img);
        }

        const plus = document.createElement('span');
        plus.textContent = '+';
        questionContainer.appendChild(plus);

        for (let i = 0; i < question.additionalApples; i++) {
            const img = document.createElement('img');
            img.src = 'Image/apple.png';
            img.alt = 'Apple';
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

    window.goBackToExercise4 = function() {
        window.location.href = 'exercise4.php';
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
