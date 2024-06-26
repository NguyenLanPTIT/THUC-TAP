//popup

var modal = document.getElementById("nenmodal-1");
var toggleButton = document.getElementById("watch");
var isModalOpen = false;
const { body, documentElement } = document;
let { scrollTop } = document.documentElement;
function disableScroll() {
    scrollTop = documentElement.scrollTop;
    body.style.top = `-${scrollTop}px`;
    body.classList.add("scroll-disabled");
}
function enableScroll() {
    body.classList.remove("scroll-disabled");
    documentElement.scrollTop = scrollTop;
    body.style.removeProperty("top");
}
function momodal(event) {
    if (event) event.preventDefault();
    if (isModalOpen) {
        modal.style.display = "none";
        modal.classList.remove("active");
        isModalOpen = false;
        enableScroll();
    } else {
        modal.classList.add("active");
        modal.style.display = "block";
        isModalOpen = true;
        disableScroll();
    }
}


// recently
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".scroll-container");
    const slideArray = document.querySelectorAll(".movie-card");
    let currentSlide = 0;

    function updateButtonStatus() {
        document.querySelector(".right-btn").disabled = currentSlide >= slideArray.length - 4;
        document.querySelector(".left-btn").disabled = currentSlide <= 0;
    }

    document.querySelector(".left-btn").addEventListener("click", function () {
        if (currentSlide > 0) {
            currentSlide--;
            slides.style.transform = `translateX(-${currentSlide * 22}%)`;
            updateButtonStatus();
        }
    });

    document.querySelector(".right-btn").addEventListener("click", function () {
        if (currentSlide < slideArray.length - 1) {
            currentSlide++;
            slides.style.transform = `translateX(-${currentSlide * 22}%)`;
            updateButtonStatus();
        }
    });

    updateButtonStatus();
});

// slider

var slideIndex;
function showSlides() {
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    slideIndex++;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    //setTimeout(showSlides, 5000); 
}

showSlides(slideIndex = 0);
function currentSlide(n) {
    showSlides(slideIndex = n);
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        if (i === n) {
            dots[i].src = './assets/images/Line 1.png';  // Đường dẫn tới ảnh cho nút active
        } else {
            dots[i].src = './assets/images/Ellipse 2.png';  // Đường dẫn tới ảnh ban đầu
        }
    }
}
