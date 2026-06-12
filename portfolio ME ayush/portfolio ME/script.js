// 1. Typing Animation Logic
var typed = new Typed('#typing-text', {
  strings: ['Web Designer', 'System Engineer'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  backDelay: 1500
});

// 2. Navbar Scroll Logic
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 3. Mobile Menu Toggle Logic 
const menuIcon = document.querySelector('#menu-icon');
const navLinksContainer = document.querySelector('.nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        console.log("Menu toggled!"); 
    });
}


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// 4. Active link on scroll logic (ERROR FIX )
const sections = document.querySelectorAll('section[id]');
const allLinks = document.querySelectorAll('.nav-links a'); 

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        allLinks.forEach((a) => a.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));