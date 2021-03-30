// todo navbar
const navMobile = document.querySelector("nav ul");
const menuHamburger = document.querySelector("nav .menu-hamburger");
const closeMobileNav = document.querySelector("nav ul img");

menuHamburger.addEventListener("click", function () {
  navMobile.classList.add("slide");
});

closeMobileNav.addEventListener("click", function () {
  navMobile.classList.remove("slide");
});

// todo Contact
const formContact = document.querySelector(".contact form");
const textarea = document.querySelector(".contact form textarea");
const myAlert = document.querySelector(".contact .alert");
const closeAlert = document.querySelector(".contact .alert img");

textarea.addEventListener("click", function () {
  myAlert.classList.add("aktif");
  formContact.style.top = "110px";
});

closeAlert.addEventListener("click", function () {
  myAlert.classList.remove("aktif");
  formContact.style.top = "0";
});
