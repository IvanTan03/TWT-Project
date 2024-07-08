let currentTopicIndex = 0;
const topics = ['Counting 1-20', 'Arranging numbers 1-20', '3D Shapes', 'Addition and Subtraction (1-10)'];
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
    
if (currentTopic === 'Counting 1-20') {
    if (currentLearningType === 'normal') {
        addVideoOption('Counting 1-20 - Video 1', 'https://www.youtube.com/embed/By2hmo323xM', 'By2hmo323xM', './Image/normal-counting1.jpg');
        addVideoOption('Counting 1-20 - Video 2', 'https://www.youtube.com/embed/EcCWwCBO-8s', 'EcCWwCBO-8s', './Image/normal-counting2.jpg');
        addVideoOption('Counting 1-20 - Video 3', 'https://www.youtube.com/embed/DNcnKzZ11v0', 'DNcnKzZ11v0', './Image/normal-counting3.jpg');
        addVideoOption('Counting 1-20 - Video 4', 'https://www.youtube.com/embed/sb-OeAfpmGM', 'sb-OeAfpmGM', './Image/normal-counting4.jpg');
    } else {
        addVideoOption('Fun Counting 1-20 - Video 1', 'https://www.youtube.com/embed/S84fcGdEULk', 'S84fcGdEULk', './Image/fun-counting1.jpg');
        addVideoOption('Fun Counting 1-20 - Video 2', 'https://www.youtube.com/embed/D0Ajq682yrA', 'D0Ajq682yrA', './Image/fun-counting2.jpg');
        addVideoOption('Fun Counting 1-20 - Video 3', 'https://www.youtube.com/embed/dZUTtpddOKs', 'dZUTtpddOKs', './Image/fun-counting3.jpg');
        addVideoOption('Fun Counting 1-20 - Video 4', 'https://www.youtube.com/embed/EbgwPx6mYu4', 'EbgwPx6mYu4', './Image/fun-counting4.jpg');
    }
} else if (currentTopic === 'Arranging numbers 1-20') {
    if (currentLearningType === 'normal') {
        addVideoOption('Arranging numbers 1-20 Video 1', 'https://www.youtube.com/embed/Y3OZZ_V6XME', 'Y3OZZ_V6XME', './Image/normal-arranging2-1.jpg');
        addVideoOption('Arranging numbers 1-20 Video 2', 'https://www.youtube.com/embed/tPw0pzOHV7U', 'tPw0pzOHV7U', './Image/normal-arranging2-2.jpg');
        addVideoOption('Arranging numbers 1-20 Video 3', 'https://www.youtube.com/embed/xJtqC5pqyco', 'xJtqC5pqyco', './Image/normal-arranging2-3.jpg');
        addVideoOption('Arranging numbers 1-20 Video 4', 'https://www.youtube.com/embed/2FNhQroOd_I', '2FNhQroOd_I', './Image/normal-arranging2-4.jpg');
    } else {
        addVideoOption('Fun Arranging numbers 1-20 Video 1', 'https://www.youtube.com/embed/8TIjoLW5oRw', '8TIjoLW5oRw', './Image/fun-arranging2-1.jpg');
        addVideoOption('Fun Arranging numbers 1-20 Video 2', 'https://www.youtube.com/embed/Aq4UAss33qA', 'Aq4UAss33qA', './Image/fun-arranging2-2.jpg');
    }
} else if (currentTopic === '3D Shapes') {
    if (currentLearningType === 'normal') {
        addVideoOption('3D Shapes Video 1', 'https://www.youtube.com/embed/HKc_z5yjylo', 'HKc_z5yjylo', './Image/normal-3dshapes1.jpg');
        addVideoOption('3D Shapes Video 2', 'https://www.youtube.com/embed/CkMcboPCg7A', 'CkMcboPCg7A', './Image/normal-3dshapes2.jpg');
        addVideoOption('3D Shapes Video 3', 'https://www.youtube.com/embed/3nLpD6bE4fE', '3nLpD6bE4fE', './Image/normal-3dshapes3.jpg');
        addVideoOption('3D Shapes Video 4', 'https://www.youtube.com/embed/gk_u1xr7jQg', 'gk_u1xr7jQg', './Image/normal-3dshapes4.jpg');
    } else {
        addVideoOption('Fun 3D Shapes Video 1', 'https://www.youtube.com/embed/guNdJ5MtX1A', 'guNdJ5MtX1A', './Image/fun-3dshapes1.jpg');
        addVideoOption('Fun 3D Shapes Video 2', 'https://www.youtube.com/embed/74JhwbsVXQ8', '74JhwbsVXQ8', './Image/fun-3dshapes2.jpg');
        addVideoOption('Fun 3D Shapes Video 3', 'https://www.youtube.com/embed/AcsUQIxJKjY', 'AcsUQIxJKjY', './Image/fun-3dshapes3.jpg');
        addVideoOption('Fun 3D Shapes Video 4', 'https://www.youtube.com/embed/zPZegz690Mg', 'zPZegz690Mg', './Image/fun-3dshapes4.jpg');
    }
} else if (currentTopic === 'Addition and Subtraction (1-10)') {
    if (currentLearningType === 'normal') {
        addVideoOption('Addition and Subtraction (1-10) Video 1', 'https://www.youtube.com/embed/gf97tXwTDe0', 'gf97tXwTDe0', './Image/normal-addsub1.jpg');
        addVideoOption('Addition and Subtraction (1-10) Video 2', 'https://www.youtube.com/embed/rqiu_xcvSk4', 'rqiu_xcvSk4', './Image/normal-addsub2.jpg');
        addVideoOption('Addition and Subtraction (1-10) Video 3', 'https://www.youtube.com/embed/7J1OkxuyLD0', '7J1OkxuyLD0', './Image/normal-addsub3.jpg');
        addVideoOption('Addition and Subtraction (1-10) Video 4', 'https://www.youtube.com/embed/aK3FKEZJKec', 'aK3FKEZJKec', './Image/normal-addsub4.jpg');
    } else {
        addVideoOption('Fun Addition and Subtraction (1-10) Video 1', 'https://www.youtube.com/embed/FdUqmyvg2x4', 'FdUqmyvg2x4', './Image/fun-addsub1.jpg');
        addVideoOption('Fun Addition and Subtraction (1-10) Video 2', 'https://www.youtube.com/embed/vR4pVGNisZA', 'vR4pVGNisZA', './Image/fun-addsub2.jpg');
        addVideoOption('Fun Addition and Subtraction (1-10) Video 3', 'https://www.youtube.com/embed/i-ojOPOODO0', 'i-ojOPOODO0', './Image/fun-addsub3.jpg');
        addVideoOption('Fun Addition and Subtraction (1-10) Video 4', 'https://www.youtube.com/embed/rPVdItitgIU', 'rPVdItitgIU', './Image/fun-addsub4.jpg');
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
    if (topic === 'Counting 1-20') {
        return 'Counting 1-20';
    } else if (topic === 'Arranging numbers 1-20') {
        return 'Arranging numbers 1-20';
    } else if (topic === '3D Shapes') {
        return '3D Shapes';
    } else if (topic === 'Addition and Subtraction (1-10)') {
        return 'Addition and Subtraction (1-10)';
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
                
                window.location.href = 'tutorial4.php';

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
