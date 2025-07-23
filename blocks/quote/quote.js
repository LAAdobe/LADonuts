export default function decorate(block) {
  // Example: Add a class to animate the quote on load
  block.classList.add('quote-loaded');

  // Optional: Add a fade-in effect
  setTimeout(() => {
    block.style.opacity = 1;
  }, 100);
}
