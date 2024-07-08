window.onload = function() {
    var music = document.createElement('audio');
    music.id = 'background-music';
    music.src = 'home.mp3';
    music.autoplay = true;
    music.loop = true;
    music.volume = 0.5; 
    document.body.appendChild(music);

    showContent('tutorial');

    document.getElementById('music-toggle').checked = true;
    document.getElementById('music-volume').value = 50;
};

function showMultiplicationModal() {
    generateMultiplicationQuestion();
    document.getElementById("multiplication-modal").style.display = "block";
}

function closeMultiplicationModal() {
    document.getElementById("multiplication-modal").style.display = "none";
}

function generateMultiplicationQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const question = `${num1} x ${num2}`;
    const answer = num1 * num2;
    
    document.getElementById("multiplication-question").innerText = question;
    document.getElementById("multiplication-answer").dataset.answer = answer;
}

function checkMultiplicationAnswer() {
    const userAnswer = parseInt(document.getElementById("multiplication-answer").value, 10);
    const correctAnswer = parseInt(document.getElementById("multiplication-answer").dataset.answer, 10);
    
    if (userAnswer === correctAnswer) {
        document.getElementById("multiplication-answer").value = ""; 
        closeMultiplicationModal();
        showSettingsModal();
    } else {
        alert("Incorrect answer. Please try again.");
        document.getElementById("multiplication-answer").value = ""; 
    }
}

function showSettingsModal() {
    document.getElementById("settings-modal").style.display = "block";
}

function closeSettingsModal() {
    document.getElementById("settings-modal").style.display = "none";
}

function toggleMusic() {
    var music = document.getElementById('background-music');
    var isChecked = document.getElementById('music-toggle').checked;
    if (isChecked) {
        music.play();
    } else {
        music.pause();
    }
}

function adjustMusicVolume() {
    var music = document.getElementById('background-music');
    var volume = document.getElementById('music-volume').value / 100; 
    music.volume = volume;
}
