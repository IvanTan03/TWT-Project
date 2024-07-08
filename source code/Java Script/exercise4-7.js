let currentQuestion = 0;

const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        { text: 'Which shape is a pyramid?', correct: './Image/pyramid.png', options: ['./Image/pyramid.png', './Image/cone.png'] },
        { text: 'Which shape is a cube?', correct: './Image/cube.png', options: ['./Image/cylinder.png', './Image/cube.png'] },
        { text: 'Which shape is a sphere?', correct: './Image/sphere.png', options: ['./Image/sphere.png', './Image/cube.png'] }
    ];

    function loadQuestion() {
        const questionElement = document.getElementById('question');
        const optionsElement = document.querySelector('.options');
        const submitButton = document.getElementById('submit');

        const question = questions[currentQuestion];
        questionElement.textContent = question.text;
        optionsElement.innerHTML = '';

        question.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.setAttribute('data-answer', option === question.correct ? 'correct' : 'incorrect');
            optionElement.innerHTML = `<img src="${option}" alt="Option">`;
            optionsElement.appendChild(optionElement);
        });

        submitButton.disabled = true;

        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function () {
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                submitButton.disabled = false;
            });
        });
    }

    loadQuestion();

    document.getElementById('submit').addEventListener('click', function () {
        const selectedOption = document.querySelector('.option.selected');
        const isCorrect = selectedOption.getAttribute('data-answer') === 'correct';

        const modal = document.getElementById('modal');
        const modalText = document.getElementById('modal-text');
        const retryButton = document.getElementById('retry');
        const nextButton = document.getElementById('next');

        if (isCorrect) {
            modalText.textContent = 'Correct! Well done!';
            playAudio(1); 
            nextButton.style.display = 'inline';
            retryButton.style.display = 'none';

            nextButton.onclick = () => {
                modal.style.display = 'none';
                nextQuestion();
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
    });

    document.getElementById('retry').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
    });

    document.getElementById('next').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showCompletionModal();
        }
    });
});

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