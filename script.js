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
  var navOverlay = document.getElementById('nav-overlay');
  if (isModalOpen) {
    modal.style.display = "none";
    modal.classList.remove("active");
    navOverlay.style.display = "none";
    isModalOpen = false;
    enableScroll();

  } else {
    modal.classList.add("active");
    modal.style.display = "block";
    navOverlay.style.display = "block";
    isModalOpen = true;
    disableScroll();

  }
}

// slider

var slideIndex;
var interval;
var dots = document.getElementsByClassName("dot");
function showSlides() {
  var slides = document.getElementsByClassName("slider-item");
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
    slideIndex = 0;
  }
}
// interval = setInterval(showSlides, 5000);
showSlides((slideIndex = 0));
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// function stopSlider() {
//   clearInterval(interval);
// }

// function startSlider() {
//   interval = setInterval(showSlides, 5000);
//   showSlides();
// }
// startSlider();

// function currentSlide(n) {
//   slideIndex = n;
//   showSlides();
// }




// recently
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".scroll-container");
  const slideArray = document.querySelectorAll(".movie-card");
  let currentSlide = 0;

  function updateButtonStatus() {
    document.querySelector(".right-btn").disabled =
      currentSlide >= slideArray.length - 4;
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
