window.onload = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-links a"); // Assuming navigation links are within a `.nav-links` element

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        let activeLink = document.querySelector(`a[href="#${id}"]`); // More specific selector for the link
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
};

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  1;
};

ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact-from",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "Android Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });

      document
        .querySelector(`header .navbar a[href*='${id}']`)
        .classList.add("active");
    }
  });
};
