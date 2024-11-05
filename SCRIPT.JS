// Simple Form Validation and Scroll Animation

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }
  
  alert('Message Sent!');
  // Optionally, you can clear the form
  e.target.reset();
});

// Scroll Animations
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.section');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      el.classList.add('animate');
    }
  });
});
