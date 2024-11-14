// List of image URLs for the gallery
const images = [
    "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Image+3",
    "https://via.placeholder.com/300x200/FF33A8/FFFFFF?text=Image+4",
    "https://via.placeholder.com/300x200/FFD633/FFFFFF?text=Image+5",
    "https://via.placeholder.com/300x200/33D6FF/FFFFFF?text=Image+6"
];

// Dynamically load the thumbnails
const thumbnailsContainer = document.querySelector('.thumbnails');
images.forEach((image, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}" data-index="${index}" loading="lazy">`;
    thumbnailsContainer.appendChild(thumbnail);
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// Open the lightbox when a thumbnail is clicked
thumbnailsContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'img') {
        const index = target.getAttribute('data-index');
        lightbox.style.display = 'flex';
        lightboxImg.src = images[index]; // Set the large image
    }
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicked outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
