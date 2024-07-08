let currentTopicIndex = 0;
const topics = ['knowing-numbers', 'compare-measure', 'addition-subtraction', 'telling-time'];
let currentLearningType = 'normal';
const modal = document.getElementById("videoModal");
const span = document.getElementsByClassName("close")[0];
const comments = {}; 

showTopic(topics[currentTopicIndex]);

function goBack() {
    playDoubleKnockSound();
    setTimeout(function() {
        window.history.back();
    }, 300); 
}

function navigateTopic(direction) {
    if (direction === 'left') {
        currentTopicIndex = (currentTopicIndex - 1 + topics.length) % topics.length;
    } else if (direction === 'right') {
        currentTopicIndex = (currentTopicIndex + 1) % topics.length;
    }
    showTopic(topics[currentTopicIndex]);
}

function showTopic(topic) {
    const topicTitle = document.getElementById('topicTitle');
    const videoContainer = document.getElementById('videoContainer');
    const normalButton = document.getElementById('normalTeachingButton');
    const funButton = document.getElementById('funLearningButton');
    
    topicTitle.innerText = getTopicName(topic);
    videoContainer.innerHTML = '';
    
    if (currentLearningType === 'normal') {
        normalButton.classList.add('active');
        funButton.classList.remove('active');
    } else {
        normalButton.classList.remove('active');
        funButton.classList.add('active');
    }
    
    showVideo();
}

function showVideo(learningType) {
    currentLearningType = learningType|| currentLearningType;

    const videoContainer = document.getElementById('videoContainer');
    const normalButton = document.getElementById('normalTeachingButton');
    const funButton = document.getElementById('funLearningButton');
    
    if (currentLearningType === 'normal') {
        normalButton.classList.add('active');
        funButton.classList.remove('active');
    } else {
        normalButton.classList.remove('active');
        funButton.classList.add('active');
    }
    
    videoContainer.innerHTML = '';

    const currentTopic = topics[currentTopicIndex];
    
    if (currentTopic === 'knowing-numbers') {
        if (currentLearningType === 'normal') {
            addVideoOption('Learning Numbers 1', 'https://www.youtube.com/embed/jMmATUvMEsA', 'jMmATUvMEsA', './Image/normal-numbers2-1.jpg');
            addVideoOption('Learning Numbers 2', 'https://www.youtube.com/embed/pL0EZ-JoScg', 'pL0EZ-JoScg', './Image/normal-numbers2-2.jpg');
            addVideoOption('Learning Numbers 3', 'https://www.youtube.com/embed/xfD8TB4T2yM', 'xfD8TB4T2yM', './Image/normal-numbers2-3.jpg');
            addVideoOption('Learning Numbers 4', 'https://www.youtube.com/embed/flGPLDpQ2eA', 'flGPLDpQ2eA', './Image/normal-numbers2-4.jpg');
        } else {
            addVideoOption('Fun Numbers 1', 'https://www.youtube.com/embed/bGetqbqDVaA', 'bGetqbqDVaA', './Image/fun-numbers2-1.jpg');
            addVideoOption('Fun Numbers 2', 'https://www.youtube.com/embed/tIxk5NeiTck', 'tIxk5NeiTck', './Image/fun-numbers2-2.jpg');
            addVideoOption('Fun Numbers 3', 'https://www.youtube.com/embed/0TgLtF3PMOc', '0TgLtF3PMOc', './Image/fun-numbers2-3.jpg');
            addVideoOption('Fun Numbers 4', 'https://www.youtube.com/embed/xZSTL39XmdA', 'xZSTL39XmdA', './Image/fun-numbers2-4.jpg');
        }
    } else if (currentTopic === 'compare-measure') {
        if (currentLearningType === 'normal') {
            addVideoOption('Compare and Measure 1', 'https://www.youtube.com/embed/KvmzCbjopkE', 'KvmzCbjopkE', './Image/normal-compare1.jpg');
            addVideoOption('Compare and Measure 2', 'https://www.youtube.com/embed/2wUsdsae0ro', '2wUsdsae0ro', './Image/normal-compare2.jpg');
            addVideoOption('Compare and Measure 3', 'https://www.youtube.com/embed/VIQg8e0erEE', 'VIQg8e0erEE', './Image/normal-compare3.jpg');
            addVideoOption('Compare and Measure 4', 'https://www.youtube.com/embed/xXyfon-SOR8', 'xXyfon-SOR8', './Image/normal-compare4.jpg');
        } else {
            addVideoOption('Fun Compare and Measure 1', 'https://www.youtube.com/embed/Vvu-_yXnh14', 'Vvu-_yXnh14', './Image/fun-compare1.jpg');
            addVideoOption('Fun Compare and Measure 2', 'https://www.youtube.com/embed/JjKhSyUVFBI', 'JjKhSyUVFBI', './Image/fun-compare2.jpg');
            addVideoOption('Fun Compare and Measure 3', 'https://www.youtube.com/embed/gLMxjtPMCm8', 'gLMxjtPMCm8', './Image/fun-compare3.jpg');
            addVideoOption('Fun Compare and Measure 4', 'https://www.youtube.com/embed/ipCjtvHgd4I', 'ipCjtvHgd4I', './Image/fun-compare4.jpg');
        }
    } else if (currentTopic === 'addition-subtraction') {
        if (currentLearningType === 'normal') {
            addVideoOption('Addition and Subtraction 1', 'https://www.youtube.com/embed/uQiUTFO78Jk', 'uQiUTFO78Jk', './Image/normal-addition1.jpg');
            addVideoOption('Addition and Subtraction 2', 'https://www.youtube.com/embed/q7I8HXWj37s', 'q7I8HXWj37s', './Image/normal-addition2.jpg');
            addVideoOption('Addition and Subtraction 3', 'https://www.youtube.com/embed/c-vAOjeCUTI', 'c-vAOjeCUTI', './Image/normal-addition3.jpg');
            addVideoOption('Addition and Subtraction 4', 'https://www.youtube.com/embed/MQZHc9_x5x0', 'MQZHc9_x5x0', './Image/normal-addition4.jpg');
        } else {
            addVideoOption('Fun Addition and Subtraction 1', 'https://www.youtube.com/embed/fny08Url8ik', 'fny08Url8ik', './Image/fun-addition1.jpg');
            addVideoOption('Fun Addition and Subtraction 2', 'https://www.youtube.com/embed/UcteswCP2oc', 'UcteswCP2oc', './Image/fun-addition2.jpg');
            addVideoOption('Fun Addition and Subtraction 3', 'https://www.youtube.com/embed/RdCdMcbTO-c', 'RdCdMcbTO-c', './Image/fun-addition3.jpg');
            addVideoOption('Fun Addition and Subtraction 4', 'https://www.youtube.com/embed/QR5ooI2ArfU', 'QR5ooI2ArfU', './Image/fun-addition4.jpg');
        }
    } else if (currentTopic === 'telling-time') {
        if (currentLearningType === 'normal') {
            addVideoOption('Telling Time 1', 'https://www.youtube.com/embed/qBuYsWCL4Qg', 'qBuYsWCL4Qg', './Image/normal-time1.jpg');
            addVideoOption('Telling Time 2', 'https://www.youtube.com/embed/3Posbu-VKxU', '3Posbu-VKxU', './Image/normal-time2.jpg');
            addVideoOption('Telling Time 3', 'https://www.youtube.com/embed/xdR7s8mwyp8', 'xdR7s8mwyp8', './Image/normal-time3.jpg');
            addVideoOption('Telling Time 4', 'https://www.youtube.com/embed/9p_Ca_Yb0zQ', '9p_Ca_Yb0zQ', './Image/normal-time4.jpg');
        } else {
            addVideoOption('Fun Telling Time 1', 'https://www.youtube.com/embed/K5q65e_E-os', 'K5q65e_E-os', './Image/fun-time1.jpg');
            addVideoOption('Fun Telling Time 2', 'https://www.youtube.com/embed/g6tJAy_7AL4', 'g6tJAy_7AL4', './Image/fun-time2.jpg');
            addVideoOption('Fun Telling Time 3', 'https://www.youtube.com/embed/cs81UdOc9TU', 'cs81UdOc9TU', './Image/fun-time3.jpg');
            addVideoOption('Fun Telling Time 4', 'https://www.youtube.com/embed/tEmg914-9xY', 'tEmg914-9xY', './Image/fun-time4.jpg');
        }
    }
}

function addVideoOption(title, url, id, image) {
    const videoContainer = document.getElementById('videoContainer');
    const videoOption = document.createElement('div');
    videoOption.className = 'video-option';
    videoOption.innerHTML = `<img class="video-image" src="${image}" alt="${title}"><div class="video-title">${title}</div>`;
    videoOption.onclick = function() {
        openModal(title, url, id);
    };
    videoContainer.appendChild(videoOption);
}

function getTopicName(topic) {
    switch (topic) {
        case 'knowing-numbers':
            return 'Knowing Numbers';
        case 'compare-measure':
            return 'Compare and Measure';
        case 'addition-subtraction':
            return 'Addition and Subtraction';
        case 'telling-time':
            return 'Telling Time';
        default:
            return 'Topic';
    }
}

function openModal(title, url, id) {
    const modalVideoTitle = document.getElementById('modalVideoTitle');
    const modalVideoContainer = document.getElementById('modalVideoContainer');
    const commentSection = document.getElementById('commentSection');
    const videoIdInput = document.getElementById('videoId');
    
    modalVideoTitle.innerText = title;
    modalVideoContainer.innerHTML = `<iframe width="100%" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videoIdInput.value = id;
    playBubblesSound();

    commentSection.innerHTML = '';
    if (comments[id]) {
        comments[id].forEach(function(comment) {
            const commentDiv = document.createElement('div');
            commentDiv.innerText = comment;
            commentSection.appendChild(commentDiv);
        });
    }
    
    fetchComments(id);
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    const modalVideoContainer = document.getElementById('modalVideoContainer');
    modalVideoContainer.innerHTML = ''; 
}

span.onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

function postComment(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch('post_comment.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {

        if (data.includes('Comment posted successfully')) {
            alert('Comment posted successfully');
 
            document.getElementById('comment').value = '';
            closeModal(); 
        } else {
            alert('Failed to post comment');
        }
    })
    .catch(error => {
        console.error('Error posting comment:', error);
        alert('Error posting comment');
    });
}

const commentForm = document.querySelector('form[action="post_comment.php"]');
if (commentForm) {
    commentForm.addEventListener('submit', postComment);
}

function deleteComment(commentId) {

    if (confirm('Are you sure you want to delete this comment?')) {
        fetch('delete_comment.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `delete_comment=${commentId}`,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Comment deleted successfully');
                alert('Comment deleted successfully');
                
                window.location.href = 'tutorial5.php';

            } else {
                console.error('Failed to delete comment:', data.message);
                alert('Failed to delete comment: ' + data.message); 
            }
        })
        .catch(error => console.error('Error deleting comment:', error));
    }
}

function fetchComments(videoId) {
    fetch(`fetch_comments.php?videoId=${videoId}`)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const comments = data.comments;
            const commentSection = document.getElementById('commentSection');
            commentSection.innerHTML = ''; 

            comments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment-item';
                commentDiv.innerHTML = `
                    <span class="comment-author">${comment.child_nickname}:</span>
                    <span class="comment-text">${comment.comment_text}</span>
                    <button class="delete-button">Delete</button>
                `;
                
                const deleteButton = commentDiv.querySelector('.delete-button');
                deleteButton.addEventListener('click', () => deleteComment(comment.comment_id));

                commentSection.appendChild(commentDiv);
            });
        } else {
            console.error('Failed to fetch comments:', data.message);
        }
    })
    .catch(error => console.error('Error fetching comments:', error));
}

function playBubblesSound() {
    var BubblesSound = new Audio('sound/Bubbles.mp3');
    BubblesSound.play();
}

function playDoubleKnockSound() {
    var doubleKnockSound = new Audio('sound/Double Knock.mp3');
    doubleKnockSound.play();
}