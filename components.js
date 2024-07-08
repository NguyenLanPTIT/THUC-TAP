// video
const seekBar = document.getElementById('seekBar');
seekBar.addEventListener('input', function() {
    this.style.background = `linear-gradient(to right, #fff 0%, #fff ${this.value}%, #b7b2b2 ${this.value}%, #b7b2b2 100%)`;
});

function pad(value) {
    return value < 10 ? '0' + value : value;
}
// season

var headers = document.getElementsByClassName("accordion-header");
for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', function (header) {
        var isActive = this.classList.contains("active");
        var content = this.nextElementSibling;
        var icon = this.querySelector('.toggle-icon');


        Array.from(headers).forEach(function (header) {
            var otherContent = header.nextElementSibling;
            var otherIcon = header.querySelector('.toggle-icon');
            otherContent.style.maxHeight = null;
            otherIcon.src = './assets/images/play3.svg';
            header.style.borderRadius = '5px';
            header.classList.remove('active');
        });

        if (!isActive) {
            this.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
            icon.src = './assets/images/down.svg';
            this.style.borderRadius = '5px 5px 0 0';
        } else {
            this.classList.remove("active");
            content.style.maxHeight = null;
            icon.src = './assets/images/play3.svg';
            this.style.borderRadius = '5px';
        }
    });
}

// comments
document.getElementById('submit-comment').addEventListener('click', function() {
    const input = document.getElementById('comment-input');
    const comment = input.value.trim();

    if (comment) {
        const commentsContainer = document.querySelector('.scroll-container');
        const newComment = document.createElement('div');
        newComment.classList.add('movie-card'); 
        newComment.innerHTML = `
         <div class=" movie-card ">
                        <a class="img-container">
                            <img src="./assets/images/Comment1.png" alt="James">
                            <div class="img-overlay"></div>
                        </a>
                        <div class="comment-content">
                            <p>Arlene<br>08/07/2024<br>${comment}</p>
                            <div class="react">
                                <div class="like">
                                    <img src="./assets/images/like.svg" alt="">
                                    <p>1</p>
                                </div>
                                <img src="./assets/images/dislike.svg" alt="">
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>
        `;
        if (commentsContainer.firstChild) {
            commentsContainer.insertBefore(newComment, commentsContainer.firstChild);
        } else {
            commentsContainer.appendChild(newComment);
        }
        input.value = ''; 
    } else {
        alert('Please enter a comment.'); 
    }
});
