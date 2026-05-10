const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('show');
});

document.addEventListener('click', () => navMenu.classList.remove('show'));

const carouselInner = document.getElementById('carousel-inner');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots-container');
let currentSlide = 0;

slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    updateCarousel();
}

document.getElementById('nextBtn').addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(currentSlide - 1);
});

setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);
