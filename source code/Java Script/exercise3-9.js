const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            apples: 11,
            correctNumbers: [5, 7],
            dropzones: [5, 7]
        },
        {
            apples: 5,
            correctNumbers: [2],
            dropzones: [2]
        },
        {
            apples: 10,
            correctNumbers: [6],
            dropzones: [6]
        }
    ];

    let currentQuestionIndex = 0;
    const totalQuestions = questions.length;

    const draggables = document.querySelectorAll('.draggable');
    const doneButtons = document.querySelectorAll('.done-btn');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const retryButton = document.getElementById('retry');
    const nextButton = document.getElementById('next');
    const completionModal = document.getElementById('completionModal');

    const showQuestion = (index) => {
        document.querySelectorAll('.question-box').forEach((question, i) => {
            question.style.display = i === index ? 'block' : 'none';
        });
    };

    const resetQuestion = () => {
        document.querySelectorAll('.dropzone').forEach(dropzone => {
            dropzone.textContent = '';
        });
        document.querySelectorAll('.draggable').forEach(draggable => {
            draggable.style.display = 'inline-block';
        });
        modal.style.display = 'none';
    };

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.textContent);
        });
    });

    document.querySelectorAll('.dropzone').forEach(dropzone => {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text');
            if (!dropzone.textContent) {
                dropzone.textContent = data;
                const draggableElement = Array.from(document.querySelectorAll('.draggable')).find(draggable => draggable.textContent === data);
                if (draggableElement) {
                    draggableElement.style.display = 'none';
                }
            }
        });
    });

    doneButtons.forEach(doneButton => {
        doneButton.addEventListener('click', () => {
            const currentQuestion = questions[currentQuestionIndex];
            const correct = currentQuestion.dropzones.every((number) => {
                const dropzone = document.querySelector(`.dropzone[data-number="${number}"]`);
                return dropzone && dropzone.textContent === number.toString();
            });

            if (correct) {
                modalText.textContent = 'Correct! Well done.';
                playAudio(1);
                nextButton.style.display = 'inline-block';
                retryButton.style.display = 'none';
            } else {
                modalText.textContent = 'Incorrect. Please try again.';
                playAudio(2);
                nextButton.style.display = 'none';
                retryButton.style.display = 'inline-block';
            }
            modal.style.display = 'flex';
        });
    });

    retryButton.addEventListener('click', resetQuestion);

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            currentQuestionIndex++;
            resetQuestion();
            showQuestion(currentQuestionIndex);
        } else {
            modal.style.display = 'none';
            completionModal.style.display = 'flex';
        }
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    showQuestion(currentQuestionIndex);
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
