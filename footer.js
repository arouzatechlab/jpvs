document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Year
  document.getElementById("ftrYear").textContent = new Date().getFullYear();

  // 2. Back to Top Logic
  const bttBtn = document.getElementById("ftrBackToTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      bttBtn.classList.add("ftrVisible");
    } else {
      bttBtn.classList.remove("ftrVisible");
    }
  });

  bttBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 3. Scroll Triggered Animation
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ftrVisible");
      }
    });
  }, observerOptions);

  const grid = document.getElementById("ftrMainGrid");
  if (grid) observer.observe(grid);
});
