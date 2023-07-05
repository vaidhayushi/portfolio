// Add smooth scrolling to the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
const nameElement = document.getElementById('name');

setTimeout(() => {
  nameElement.classList.add('show');
}, 1000);
