const arzHamburger = document.getElementById("arzHamburger");
const arzMenuOverlay = document.getElementById("arzMenuOverlay");
const arzMenuClose = document.getElementById("arzMenuClose");
const arzMobileLinks = document.querySelectorAll(".arzMobileLink");
const arzBody = document.body;

const arzOpenMenu = () => {
  arzMenuOverlay.classList.add("arzActive");
  arzBody.classList.add("arzNoScroll");
};

const arzCloseMenu = () => {
  arzMenuOverlay.classList.remove("arzActive");
  arzBody.classList.remove("arzNoScroll");
};

arzHamburger.addEventListener("click", arzOpenMenu);
arzMenuClose.addEventListener("click", arzCloseMenu);

arzMobileLinks.forEach((link) => {
  link.addEventListener("click", arzCloseMenu);
});

// Dynamic sticky effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("arzNavbar");
  const logo = navbar.querySelector(".arzLogoContainer img");
  const name = document.getElementById("arzTrustName");

  if (window.scrollY > 40) {
    navbar.style.height = "100px";
    logo.style.height = "70px";
    name.style.transform = "scale(0.9)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
  } else {
    navbar.style.height = "120px";
    logo.style.height = "100px";
    name.style.transform = "scale(1)";
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  }
});
