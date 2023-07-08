const mobileMenuButton = document.querySelector(".header__mobile-menu-button");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");

mobileMenuButton.addEventListener("click", () => {
    menu.classList.toggle("menu_opened");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.toggle("menu_opened");
    });
});
