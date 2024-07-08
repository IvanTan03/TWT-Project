let currentPage = 1;

function nextPage(page) {
    const nickname = document.getElementById('nickname').value.trim();
    if (currentPage === 1 && nickname === "") {
        alert('Please enter a nickname.');
        return;
    }

    if (page === 2) {
        document.getElementById('child-name').textContent = nickname;
        document.querySelector('.progress-circle.active').classList.remove('active');
        document.getElementById('progress2').classList.add('active');
    }

    if (page === 3) {
        document.querySelector('.progress-circle.active').classList.remove('active');
        document.getElementById('progress3').classList.add('active');
        document.getElementById('child-name-info').textContent = document.getElementById('child-name').textContent;
        showLearningTopics(selectedAgePage2); 
    }

    if (page === 4) {
        document.querySelector('.progress-circle.active').classList.remove('active');
        document.getElementById('progress4').classList.add('active');
        document.getElementById('child-name-info-4').textContent = nickname;
    }

    document.getElementById(`page${currentPage}`).classList.remove('active');
    document.getElementById(`page${page}`).classList.add('active');
    currentPage = page;
}

function previousPage(page) {
    document.querySelector('.progress-circle.active').classList.remove('active');
    document.getElementById(`progress${page}`).classList.add('active');

    document.getElementById(`page${currentPage}`).classList.remove('active');
    document.getElementById(`page${page}`).classList.add('active');
    currentPage = page;
}

function selectAge(age) {
    selectedAgePage2 = age; 
    document.getElementById('selected-age').textContent = age;



    nextPage(3);
}

function showLearningTopics(age) {
    const topics = {
        3: ['Learning and Writing Numbers', 'Recognizing shapes', 'Sorting Numbers'],
        4: ['Counting 1-20', 'Sorting Numbers 1-20', '3D Shapes', 'Addition and Subtraction 1-10'],
        5: ['Recognizing numbers 1-100', 'Compare and Measure', 'Addition and subtraction 1-20', 'Basic understanding of time ']
    };

    document.getElementById('selected-age').textContent = age;
    document.getElementById('learning-topics').innerHTML = '';
    topics[age].forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic;
        document.getElementById('learning-topics').appendChild(li);
    });
}

function completeRegistration() {
    const nickname = document.getElementById('nickname').value.trim();
    const urlParams = new URLSearchParams(window.location.search);
    const user_id = urlParams.get('user_id'); 

    if (nickname === "") {
        alert('Please enter a nickname.');
        return;
    }

    const age = selectedAgePage2;
    const practiceMinutes = document.getElementById('practice-minutes').value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.location.href = 'login.html';
        }
    };
    const params = `child_nickname=${nickname}&child_age=${age}&user_id=${user_id}&practice_minutes=${practiceMinutes}`; 
    xhr.send(params);
}


function updateMinutesDisplay() {
    const rangeInput = document.getElementById('practice-minutes');
    const minutesDisplay = document.getElementById('minutes-display');
    minutesDisplay.textContent = rangeInput.value;
}

document.addEventListener('DOMContentLoaded', function () {
    const rangeInput = document.getElementById('practice-minutes');
    if (rangeInput) {
        rangeInput.addEventListener('input', updateMinutesDisplay);
    }
});
