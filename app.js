const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector(".navbar__menu");
const body = document.querySelector("body");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle('active');
};

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.navbar__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
    body.classList.remove('active');
  });
});

menu.addEventListener('click', mobileMenu);

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = menuLinks.contains(event.target);
  const isClickOnToggle = menu.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnToggle && menuLinks.classList.contains('active')) {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
    body.classList.remove('active');
  }
});

// Handle window resize for responsive behavior
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Reset mobile menu on larger screens
    if (window.innerWidth > 768) {
      menu.classList.remove("is-active");
      menuLinks.classList.remove("active");
      body.classList.remove('active');
    }
  }, 250);
});

// animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animation-hero', {
  duration:0.6,
  opacity:0,
  y:-150,
  stagger: 0.3,
});

gsap.from('.animation-services', {
  ScrollTrigger:'.animation-services',
  duration:0.5,
  opacity:1,
  x:-150,
  stagger: 0.12,
});

gsap.from('.animation-img', {
  ScrollTrigger:'.animation-services',
  duration:1.2,
  opacity:0,
  x:-200,
});

gsap.from('.animation-membership', {
  ScrollTrigger:'.animation-membership',
  duration:1,
  opacity:0,
  y:-150,
  stagger: 0.3,
  delay:0.5
});

gsap.from('.animation-membership', {
  ScrollTrigger:'.animation-card',
  duration:1,
  opacity:0,
  y:-150,
  stagger: 0.1,
  delay:0.2
});

gsap.from('.animation-team', {
  ScrollTrigger:'.animation-team',
  duration:1,
  opacity:0,
  y:-150,
  stagger: 0.3,
  delay:0.2
});

gsap.from('.animation-email', {
  ScrollTrigger:'.animation-email',
  duration:3.8,
  opacity:0,
  y:-150,
  stagger: 0.25,
  delay:0.4
});

