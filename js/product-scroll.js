const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('#dots button');
let index = 0;
const totalItems = carousel.children.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('bg-gray-400', i === index);
        dot.classList.toggle('bg-gray-300', i !== index);
    });
}

function autoSlide() {
    index = (index + 1) % totalItems;
    updateCarousel();
}

let slideInterval = setInterval(autoSlide, 3000);

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        index = parseInt(dot.getAttribute('data-index'));
        updateCarousel();
        slideInterval = setInterval(autoSlide, 3000);
    });
});

updateCarousel();

