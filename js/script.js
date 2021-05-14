// todo : navbar
const nav = document.querySelector("nav"),
  menuHamburger = document.querySelector("nav .menu-hamburger");

menuHamburger.onclick = () => {
  menuHamburger.classList.toggle("close");
  nav.classList.toggle("mobile");
};
