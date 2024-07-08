window.onload = function() {
    var music = document.createElement('audio');
    music.id = 'background-music';
    music.src = 'home.mp3';
    music.autoplay = true;
    music.loop = true;
    music.volume = 0.5;
    document.body.appendChild(music);

    showContent('tutorial');

    var musicToggle = document.getElementById('music-toggle');
    if (musicToggle) {
        musicToggle.checked = true;
    }

    var musicVolume = document.getElementById('music-volume');
    if (musicVolume) {
        musicVolume.value = 50;
    }
};

function showContent(contentType, event) {
    if (event) {
        event.preventDefault();
    }

    var tutorialContent = document.getElementById('tutorial-content');
    var exerciseContent = document.getElementById('exercise-content');
    var tutorialLink = document.getElementById('tutorial-link');
    var exerciseLink = document.getElementById('exercise-link');

    if (tutorialContent && exerciseContent && tutorialLink && exerciseLink) {
        if (contentType === 'tutorial') {
            tutorialContent.style.display = 'flex';
            exerciseContent.style.display = 'none';
            tutorialLink.classList.add('active');
            exerciseLink.classList.remove('active');
        } else if (contentType === 'exercise') {
            tutorialContent.style.display = 'none';
            exerciseContent.style.display = 'flex';
            exerciseLink.classList.add('active');
            tutorialLink.classList.remove('active');
        }
    }
}

function playOpenUpSound() {
    var openUpSound = new Audio('sound/Open up.mp3');
    openUpSound.play();
}

function playDoubleKnockSound() {
    var doubleKnockSound = new Audio('sound/Double Knock.mp3');
    doubleKnockSound.play();
}

function playJumpSound() {
    var JumpSound = new Audio('sound/Jump.mp3');
    JumpSound.play();
}

function updateMinutesDisplay() {
    const rangeInput = document.getElementById('practice-minutes-setting');
    const minutesDisplay = document.getElementById('minutes-display-setting');
    if (rangeInput && minutesDisplay) {
        minutesDisplay.textContent = rangeInput.value;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const rangeInput = document.getElementById('practice-minutes-setting');
    if (rangeInput) {
        rangeInput.addEventListener('input', updateMinutesDisplay);
    }
});


