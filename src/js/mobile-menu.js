const burgerMenu = document.querySelector(".header__burger");
const menuContainer = document.querySelector(".menu-container");
const closeMenuBtn = document.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".mobile-link");

function onBurgerClick() {
  menuContainer.classList.toggle("is-open");
  const links = menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onLinkClick);
  });
}

function onLinkClick(e) {
  menuContainer.classList.toggle("is-open");
}

burgerMenu.addEventListener("click", onBurgerClick);
closeMenuBtn.addEventListener("click", onBurgerClick);

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  menuContainer.classList.remove("is-open");
  // openMenuBtn.setAttribute("aria-expanded", false);
  bodyScrollLock.enableBodyScroll(document.body);
});
