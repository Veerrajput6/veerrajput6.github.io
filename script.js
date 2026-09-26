/* =========================
   LOADING SCREEN
========================= */

const loader = document.getElementById("loader");
const loaderPercent = document.getElementById("loaderPercent");
const loaderBar = document.getElementById("loaderBar");

let progress = 0;

const loadingTimer = setInterval(() => {

  progress += 2;

  if (progress >= 100) {
    progress = 100;
    clearInterval(loadingTimer);

    setTimeout(() => {
      loader.classList.add("loaded");
      document.body.style.overflow = "";
    }, 500);
  }

  loaderPercent.textContent =
    String(progress).padStart(3, "0") + "%";

  loaderBar.style.width = progress + "%";

}, 25);


/* =========================
   SCROLL REVEAL
========================= */

const revealObserver = new IntersectionObserver(
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
  revealObserver.observe(element);
});


/* =========================
   NAV ACTIVE STATE
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav nav a");

function updateNavigation(){

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }

  });

  navItems.forEach((link) => {

    const target = link.getAttribute("href");

    if (target === "#" + currentSection) {
      link.style.color = "#e51d3e";
    } else {
      link.style.color = "";
    }

  });

}

window.addEventListener("scroll", updateNavigation);
window.addEventListener("load", updateNavigation);


/* =========================
   BUTTON / CARD MICRO EFFECT
========================= */

document.querySelectorAll(".resource-card, .skill-card, .quote-card")
.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform .35s ease";
  });

});


/* =========================
   SMOOTH INTERNAL LINKS
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});
