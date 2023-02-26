// makes the correct section selected be the active one shown
  document.addEventListener("DOMContentLoaded", function(event) {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = this.getAttribute("href");
        const targetSection = document.querySelector(target);
        sections.forEach(function(section) {
          section.classList.remove("active");
        });
        targetSection.classList.add("active");
      });
    });
  });