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
    const completionModal = document.getElementById('completionModal');
    const doneButton = document.getElementById('done');

    const backgroundMusic = document.getElementById('backgroundMusic');
    const soundIcon = document.getElementById('soundIcon');

    backgroundMusic.volume = 0.5;

    soundIcon.addEventListener('click', toggleBackgroundMusic);

    let questions = [
        { id: 1, options: [1, 2, 4, 5, 6], correct: [2, 3, 4] },
        { id: 2, options: [1, 2, 4, 5, 6], correct: [4, 5, 6] },
        { id: 3, options: [1, 2, 3, 6, 8], correct: [6, 7, 8] }
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        if (currentQuestion >= questions.length) {
            showCompletionModal();
            return;
        }

        const question = questions[currentQuestion];
        const slots = document.querySelectorAll('.slot');
        const optionsContainer = document.querySelector('.options');

        slots.forEach((slot, index) => {
            if (index === 1) { 
                slot.textContent = question.correct[1];
            } else {
                slot.textContent = '';
            }
        });

        optionsContainer.innerHTML = '';
        question.options.forEach(option => {
            if (option !== question.correct[1]) { 
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.textContent = option;
                optionDiv.setAttribute('draggable', 'true');
                optionDiv.id = option;
                optionsContainer.appendChild(optionDiv);

                optionDiv.addEventListener('dragstart', dragStart);
            }
        });

        slots.forEach(slot => {
            slot.addEventListener('dragover', dragOver);
            slot.addEventListener('drop', drop);
        });
    }

    function dragStart(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        event.target.textContent = data;
    }

    doneButton.addEventListener('click', () => {
        const slots = document.querySelectorAll('.slot');
        const question = questions[currentQuestion];
        let isCorrect = true;

        slots.forEach((slot, index) => {
            if (slot.textContent != question.correct[index]) {
                isCorrect = false;
            }
        });

        if (isCorrect) {
            modalText.textContent = 'Correct! Well done!';
            playAudio(1);
            retryButton.style.display = 'none';
            nextButton.style.display = 'inline';

            nextButton.onclick = () => {
                modal.style.display = 'none';
                currentQuestion++;
                loadQuestion();
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

    function showCompletionModal() {
        completionModal.style.display = 'flex';
    }

    function goBackToExercise3() {
        window.location.href = 'exercise3.php';
    }

    window.goBackToExercise3 = goBackToExercise3;

    loadQuestion();

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
});


