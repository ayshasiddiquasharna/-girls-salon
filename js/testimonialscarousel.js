window.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById("testimonial-carousel");
    const totalSlides = carousel.children.length;
    let index = 0;

    function showNextSlide() {
        index = (index + 1) % totalSlides;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 4000); // Change slide every 4 seconds
});
