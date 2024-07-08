let currentTopicIndex = 0;
const topics = ['numbers', 'shapes', 'arranging'];
let currentLearningType = 'normal';
const modal = document.getElementById("videoModal");
const span = document.getElementsByClassName("close")[0];
const comments = {}; 

showTopic(topics[currentTopicIndex]);

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
    
    if (currentTopic === 'numbers') {
        if (currentLearningType === 'normal') {
            addVideoOption('Learning Numbers 1', 'https://www.youtube.com/embed/lrA-GV1ThtI', 'lrA-GV1ThtI', './Image/normal-numbers1.jpg');
            addVideoOption('Learning Numbers 2', 'https://www.youtube.com/embed/mKSNQuQrsm0', 'mKSNQuQrsm0', './Image/normal-numbers2.jpg');
            addVideoOption('Learning Numbers 3', 'https://www.youtube.com/embed/xjnlymFLSdM', 'xjnlymFLSdM', './Image/normal-numbers3.jpg');
            addVideoOption('Learning Numbers 4', 'https://www.youtube.com/embed/PHp1BwG_cU8', 'PHp1BwG_cU8', './Image/normal-numbers4.jpg');
        } else {
            addVideoOption('Fun Numbers 1', 'https://www.youtube.com/embed/t7w3PHgvKJE', 't7w3PHgvKJE', './Image/fun-numbers1.jpg');
            addVideoOption('Fun Numbers 2', 'https://www.youtube.com/embed/DR-cfDsHCGA', 'DR-cfDsHCGA', './Image/fun-numbers2.jpg');
            addVideoOption('Fun Numbers 3', 'https://www.youtube.com/embed/Yt8GFgxlITs', 'Yt8GFgxlITs', './Image/fun-numbers3.jpg');
            addVideoOption('Fun Numbers 4', 'https://www.youtube.com/embed/JT0MmZcJ2Vw', 'Yt8GFgxlITs', './Image/fun-numbers4.jpg');
        }
    } else if (currentTopic === 'shapes') {
        if (currentLearningType === 'normal') {
            addVideoOption('Shapes 1', 'https://www.youtube.com/embed/Ux_kLd7qAcY', 'Ux_kLd7qAcY', './Image/normal-shapes1.jpg');
            addVideoOption('Shapes 2', 'https://www.youtube.com/embed/jbxXG6hwcRk', 'jbxXG6hwcRk', './Image/normal-shapes2.jpg');
            addVideoOption('Shapes 3', 'https://www.youtube.com/embed/4tkRwMHu9NQ', '4tkRwMHu9NQ', './Image/normal-shapes3.jpg');
            addVideoOption('Shapes 4', 'https://www.youtube.com/embed/tRC_4IMOTSQ', 'tRC_4IMOTSQ', './Image/normal-shapes4.jpg');
        } else {
            addVideoOption('Fun Shapes 1', 'https://www.youtube.com/embed/svrkthG2950', 'svrkthG2950', './Image/fun-shapes1.jpg');
            addVideoOption('Fun Shapes 2', 'https://www.youtube.com/embed/lcl8uB2AWM0', 'lcl8uB2AWM0', './Image/fun-shapes2.jpg');
            addVideoOption('Fun Shapes 3', 'https://www.youtube.com/embed/AnoNb2OMQ6s', 'AnoNb2OMQ6s', './Image/fun-shapes3.jpg');
            addVideoOption('Fun Shapes 4', 'https://www.youtube.com/embed/1nJ5VbyD6tY', '1nJ5VbyD6tY', './Image/fun-shapes4.jpg');
        }
    } else if (currentTopic === 'arranging') {
        if (currentLearningType === 'normal') {
            addVideoOption('Arranging Numbers 1', 'https://www.youtube.com/embed/IglZ580Z5eM', 'IglZ580Z5eM', './Image/normal-arranging1.jpg');
            addVideoOption('Arranging Numbers 2', 'https://www.youtube.com/embed/MtLlKUZKAAY', 'MtLlKUZKAAY', './Image/normal-arranging2.jpg');
            addVideoOption('Arranging Numbers 3', 'https://www.youtube.com/embed/OwxwGZ_c2Nc', 'OwxwGZ_c2Nc', './Image/normal-arranging3.jpg');
            addVideoOption('Arranging Numbers 4', 'https://www.youtube.com/embed/5Re3nbmqVaU', '5Re3nbmqVaU', './Image/normal-arranging4.jpg');
        } else {
            addVideoOption('Fun Arranging 1', 'https://www.youtube.com/embed/OXjz8vkL_QE', 'OXjz8vkL_QE', './Image/fun-arranging1.jpg');
            addVideoOption('Fun Arranging 2', 'https://www.youtube.com/embed/2X6FSDrWDEo', '2X6FSDrWDEo', './Image/fun-arranging2.jpg');
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
    if (topic === 'numbers') {
        return 'Learning and Writing Numbers';
    } else if (topic === 'shapes') {
        return 'Learning Shapes';
    } else if (topic === 'arranging') {
        return 'Arranging Numbers';
    }
    return '';
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
                
                window.location.href = 'tutorial3.php';
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


