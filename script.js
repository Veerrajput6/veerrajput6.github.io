/* ================= LOADING SCREEN ================= */

document.body.classList.add("loading");

const loader = document.getElementById("loader");
const loaderPercent = document.getElementById("loaderPercent");
const loaderBar = document.getElementById("loaderBar");

let progress = 0;

const loading = setInterval(() => {

  progress += 2;

  if (progress >= 100) {
    progress = 100;
    clearInterval(loading);

    setTimeout(() => {
      loader.classList.add("loaded");
      document.body.classList.remove("loading");
    }, 450);
  }

  loaderPercent.textContent =
    String(progress).padStart(3, "0") + "%";

  loaderBar.style.width = progress + "%";

}, 25);


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 200;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.style.color = "";

    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#e51d3e";
    }

  });

});
