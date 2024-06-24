let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}

// Add click event listeners to each image
document.querySelectorAll('.carousel-item img').forEach(img => {
    img.addEventListener('click', () => {
        moveSlide(1);
    });
});

// Scroll animation for content sections
const contentSections = document.querySelectorAll('.content-section');

function checkVisibility() {
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
function zoomImage(img) {
    const overlay = document.querySelector('.overlay');
    const zoomedImg = document.createElement('img');
    zoomedImg.src = img.src;
    zoomedImg.className = 'zoomed-image';
    overlay.innerHTML = '';
    overlay.appendChild(zoomedImg);
    overlay.style.display = 'block';
    setTimeout(() => {
        zoomedImg.style.transform = 'scale(1.2)';
    }, 50);
}

function hideZoomedImage() {
    const overlay = document.querySelector('.overlay');
    const zoomedImg = document.querySelector('.zoomed-image');
    zoomedImg.style.transform = 'scale(0)';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}
