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
  

  