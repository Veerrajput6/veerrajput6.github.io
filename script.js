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


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {

    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#e51d3e";
    } else {
      link.style.color = "";
    }

  });

});
