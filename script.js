document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    const ripple = document.createElement("div");
  
    cursor.classList.add("cursor");
    ripple.classList.add("cursor-ripple");
  
    document.body.appendChild(cursor);
    document.body.appendChild(ripple);
  
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
  
      cursor.style.transform = `translate(${clientX - cursor.offsetWidth / 2}px, ${clientY - cursor.offsetHeight / 2}px)`;
      ripple.style.transform = `translate(${clientX - ripple.offsetWidth / 2}px, ${clientY - ripple.offsetHeight / 2}px)`;
    });
  });
  

  const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.navbar-links li a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

  