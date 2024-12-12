let currentSlide = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * 90; // Adjust width according to .slides img width (90vw)
    slides.style.transform = 'translateX(' + offset + 'vw)';
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Swipe functionality
let startX = 0;
let endX = 0;

slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

slides.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
});

// Initialize the slider
showSlide(currentSlide);

