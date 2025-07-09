let currentIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}

function changeSlide(step) {
    currentIndex += step;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    showSlide(currentIndex);
}

window.onload = () => showSlide(currentIndex);

setInterval(() => {
    changeSlide(1);
}, 5000);
