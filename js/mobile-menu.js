const mobileMenuButton = document.querySelector(".header__mobile-menu-button");
const menu = document.querySelector(".menu");

mobileMenuButton.addEventListener("click", () => {
    menu.classList.toggle("menu_opened");
});
