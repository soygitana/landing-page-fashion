// CAROUSEL

let carouselIndex = 0;
let carouselTime = null;


const carouselSliders = document.querySelectorAll(".carousel-slide");

function nextCarouselSlide(n) {
    carouselIndex++;
    if (carouselIndex > carouselSliders.length - 1) {
        carouselIndex = 0;
    }
    showCarouselSlide(carouselIndex);
}

function prevCarouselSlide(n) {
    carouselIndex--;
    if (carouselIndex < 0) {
        carouselIndex = carouselSliders.length - 1;
    }
    showCarouselSlide(carouselIndex);
}

function showCarouselSlide(index) {
    carouselSliders.forEach(slide => {
        slide.classList.remove('carousel-slide-active');
    })
    carouselSliders[index].classList.add('carousel-slide-active');
}

function bindCarouselButtons() {
    document.querySelector('.carousel-prev').addEventListener('click', function (e) {
        e.preventDefault();
        prevCarouselSlide();
    });

    document.querySelector('.carousel-next').addEventListener('click', function (e) {
        e.preventDefault();
        nextCarouselSlide();
    });
}


bindCarouselButtons();
showCarouselSlide(carouselIndex);


// SLIDER

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







