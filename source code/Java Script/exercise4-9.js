
document.addEventListener('DOMContentLoaded', function() {
    let draggedElement = null;

    document.addEventListener('dragstart', function(event) {
        draggedElement = event.target.closest('.shape'); 
    });

    document.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    document.addEventListener('drop', function(event) {
        event.preventDefault();
        if (event.target.classList.contains('box')) {
            event.target.appendChild(draggedElement);
        }
    });

    function checkAnswer(questionNumber) {
        let cubeBox, coneBox;
        if (questionNumber === 1) {
            cubeBox = document.getElementById('cubes1').querySelectorAll('.cube');
            coneBox = document.getElementById('cones1').querySelectorAll('.cone');
            if (cubeBox.length === 1 && coneBox.length === 2) {
                return true;
            }
        } else if (questionNumber === 2) {
            cubeBox = document.getElementById('cubes2').querySelectorAll('.cube');
            coneBox = document.getElementById('cones2').querySelectorAll('.cone');
            if (cubeBox.length === 2 && coneBox.length === 1) {
                return true;
            }
        } else if (questionNumber === 3) {
            cubeBox = document.getElementById('cubes3').querySelectorAll('.cube');
            coneBox = document.getElementById('cones3').querySelectorAll('.cone');
            if (cubeBox.length === 2 && coneBox.length === 1) {
                return true;
            }
        }
        return false;
    }

    function showModal(isCorrect, questionNumber) {
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
                if (questionNumber === 1) {
                    document.getElementById('question1').style.display = 'none';
                    document.getElementById('question2').style.display = 'block';
                } else if (questionNumber === 2) {
                    document.getElementById('question2').style.display = 'none';
                    document.getElementById('question3').style.display = 'block';
                } else if (questionNumber === 3) {
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

    document.getElementById('done1').addEventListener('click', function () {
        if (checkAnswer(1)) {
            showModal(true, 1);
        } else {
            showModal(false);
        }
    });

    document.getElementById('done2').addEventListener('click', function () {
        if (checkAnswer(2)) {
            showModal(true, 2);
        } else {
            showModal(false);
        }
    });

    document.getElementById('done3').addEventListener('click', function () {
        if (checkAnswer(3)) {
            showModal(true, 3);
        } else {
            showModal(false);
        }
    });

    document.getElementById('retry').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
    });

    document.getElementById('next').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
    });

    function playAudio(index) {
        const audioFiles = [
            new Audio('sound/correct.mp3'),
            new Audio('sound/wrong.mp3')
        ];
        audioFiles[index - 1].play();
    }
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
