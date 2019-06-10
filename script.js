let slideIndex = 0;
const slides = document.querySelectorAll(".slider-slide");
let time = null;

function nextSlide(n) {
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide(n) {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('slider-slide-active');
    })
    slides[index].classList.add('slider-slide-active');
    // Timeout option:

    // clearTimeout(time);
    // time = setTimeout(() => {
    //     nextSlide();
    // }, 5000);
}

function bindButtons() {
    document.querySelector('.slider-prev').addEventListener('click', function (e) {
        e.preventDefault();
        prevSlide();
    });

    document.querySelector('.slider-next').addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
    });
}


bindButtons();
showSlide(slideIndex);