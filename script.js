// Local Image Carousel
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];
let currentIndex = 0;

function showImage(index) {
  document.getElementById("carousel-img").src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Offline Jokes
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything! 😂",
  "What do you call fake spaghetti? An Impasta! 🍝",
  "Why don’t skeletons fight each other? They don’t have the guts! 💀"
];
let jokeIndex = 0;

function fetchJoke() {
  document.getElementById("joke-text").textContent = jokes[jokeIndex];
  jokeIndex = (jokeIndex + 1) % jokes.length;
}