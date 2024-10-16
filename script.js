// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel img');
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
