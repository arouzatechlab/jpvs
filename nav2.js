const hamburger = document.getElementById("nvbhamburger");
const closeIcon = document.getElementById("nvbcloseicon");
const mobileMenu = document.getElementById("nvbmobilemenu");
const modalWrapper = document.getElementById("nvbmodalwrapper");
const body = document.getElementById("nvbbody");

// Toggle Functions
const openMenu = () => {
  mobileMenu.classList.add("nvbmobilemenuactive");
  body.style.overflow = "hidden";
};

const closeMenu = () => {
  mobileMenu.classList.remove("nvbmobilemenuactive");
  body.style.overflow = "auto";
};

hamburger.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

// Scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("nvbheader");
  if (window.scrollY > 20) header.classList.add("nvbheaderscrolled");
  else header.classList.remove("nvbheaderscrolled");
});

// Modal
const openModal = () => {
  closeMenu();
  modalWrapper.style.display = "flex";
};
const closeModal = () => (modalWrapper.style.display = "none");

document.getElementById("nvbopenmodal").addEventListener("click", openModal);
document.getElementById("nvbmobilelogin").addEventListener("click", openModal);
document.getElementById("nvbmodalclose").addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modalWrapper) closeModal();
});

/**
 * Connect this function to Firebase Authentication
 */
const handleLogin = async () => {
  const user = document.getElementById("nvbadminusername").value;
  const pass = document.getElementById("nvbadminpassword").value;
  if (user && pass) {
    const btn = document.getElementById("nvbloginbtn");
    btn.textContent = "AUTHENTICATING...";
    setTimeout(() => {
      body.classList.add("nvbadminmode");
      document.getElementById("nvbadmineventctrl").style.display = "block";
      closeModal();
      btn.textContent = "SIGN IN";
      document.getElementById("nvbopenmodal").textContent = "LOGOUT";
    }, 800);
  }
};

document.getElementById("nvbloginbtn").addEventListener("click", handleLogin);

// Close on Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeMenu();
  }
});
