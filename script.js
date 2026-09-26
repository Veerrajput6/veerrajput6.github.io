const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(x => io.observe(x));
