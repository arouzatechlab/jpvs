const ftrBackToTop = document.getElementById("ftrBackToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    ftrBackToTop.classList.add("ftractive");
  } else {
    ftrBackToTop.classList.remove("ftractive");
  }
});

ftrBackToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
