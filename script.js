// Juárez Beauty - Interacciones premium de navegación y animaciones

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = navMenu.querySelectorAll("a");

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  };

  navToggle.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideMenu =
      !navMenu.contains(event.target) && !navToggle.contains(event.target);

    if (navMenu.classList.contains("open") && clickedOutsideMenu) {
      toggleMenu();
    }
  });

  const updateHeaderOnScroll = () => {
    const hasScrolled = window.scrollY > 20;
    header.classList.toggle("scrolled", hasScrolled);
  };

  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });

  // Animaciones de aparición con IntersectionObserver
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
});
