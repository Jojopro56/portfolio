const images = [
    '/afb/classic-thumb.jpg',
    '/afb/classic-thumb2.png',
    '/afb/vintage-thumb.jpg'
];

let currentIndex = 0;
const photographyElement = document.getElementById('photography');

// Function to fade in the background image
function fadeIn(element) {
    element.style.backgroundImage = `url('${images[currentIndex]}')`;
    element.classList.add('fade-in');
    setTimeout(() => {
        element.classList.remove('fade-in');
    }, 500);
}

// Function to fade out the background image
function fadeOut(element) {
    element.classList.add('fade-out');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        fadeIn(element);
        element.classList.remove('fade-out');
    }, 500);
}

// Preload the first image immediately
fadeIn(photographyElement);

// After 3 seconds, start rotating images
setTimeout(() => {
    setInterval(() => {
        fadeOut(photographyElement);
    }, 3000); // Switch images every 3 seconds
}, 1); // Start after 3 seconds
