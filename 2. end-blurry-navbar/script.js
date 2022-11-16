const menuTogglers = document.querySelectorAll(".menu-toggler");
const asideMenu = document.querySelector(".curtain-menu");

menuTogglers.forEach(btn => btn.addEventListener("click", toggleMenu))

function toggleMenu() {
  asideMenu.classList.toggle("active");
}