const heroCarousel = document.getElementById("hero-carousel");
const totalSlides = carousel.children.length;
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;

}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Optional autoplay
setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
}, 5000);
