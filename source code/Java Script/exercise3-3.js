let currentQuestion = 1;

const audioFiles = [
    new Audio('sound/correct.mp3'),
    new Audio('sound/wrong.mp3')
];

function playAudio(index) {
    audioFiles[index - 1].play();
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const img = document.getElementById(data).cloneNode(true);

    img.style.width = '30px'; 
    img.style.height = '30px'; 
    img.removeAttribute('id');
    img.setAttribute('draggable', true); 
    img.setAttribute('ondragstart', 'drag(event)');
    img.setAttribute('ondragend', 'removeMonkey(event)'); 

    event.target.appendChild(img);
}

function removeMonkey(event) {
    event.target.remove(); 
}

function checkMonkeys(correctCount, questionNumber) {
    const dropContainer = document.getElementById(`drop-container-${questionNumber}`);
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const retryButton = document.getElementById('retry');
    const nextButton = document.getElementById('next');

    if (dropContainer.children.length === correctCount) {
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
            while (dropContainer.firstChild) {
                dropContainer.removeChild(dropContainer.firstChild);
            }
        };
    }

    modal.style.display = 'flex';
}

function nextQuestion() {
    document.getElementById(`question-${currentQuestion}`).classList.remove("active");
    currentQuestion++;
    if (currentQuestion <= 3) {
        document.getElementById(`question-${currentQuestion}`).classList.add("active");
    } else {
        showCompletionModal();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById(`question-${currentQuestion}`).classList.add("active");
});

function showCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    completionModal.style.display = 'flex';
}

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
