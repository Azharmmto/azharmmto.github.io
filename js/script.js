// todo : navbar
const navMobile = document.querySelector("nav ul"),
  menuHamburger = document.querySelector("nav .menu-hamburger"),
  closeMobileNav = document.querySelector("nav .menu-closeNav");
// closeMobileNavImg = document.querySelector("nav .menu-closeNav .close");

menuHamburger.addEventListener("click", function () {
  navMobile.classList.add("slide");
  closeMobileNav.classList.add("mobile");
});

closeMobileNav.addEventListener("click", function () {
  navMobile.classList.remove("slide");
  closeMobileNav.classList.remove("mobile");
});

// todo : Contact
const formContact = document.querySelector(".contact form"),
  textarea = document.querySelector(".contact form textarea"),
  myAlert = document.querySelector(".contact .alert"),
  closeAlert = document.querySelector(".contact .alert img");

textarea.addEventListener("click", function () {
  myAlert.classList.add("aktif");
  formContact.style.top = "110px";
});

closeAlert.addEventListener("click", function () {
  myAlert.classList.remove("aktif");
  formContact.style.top = "0";
});

// todo : navbar gambar & poster
const gambar = document.querySelector(".gambar .container-image:nth-child(2)"),
  gambarFaidah = document.querySelector(".gambar .container-image:nth-child(3)"),
  gambarSatu = document.querySelector(".gambar .nav-gambar ul li:nth-child(1)"),
  gambardua = document.querySelector(".gambar .nav-gambar ul li:nth-child(2)");

gambardua.addEventListener("click", function () {
  gambar.classList.add("non-active");
  gambarFaidah.classList.add("aktif");
  gambardua.style.color = "#000";
  gambarSatu.style.color = "rgb(170, 169, 169";
});

gambarSatu.addEventListener("click", function () {
  gambar.classList.remove("non-active");
  gambarFaidah.classList.remove("aktif");
  gambarSatu.style.color = "#000";
  gambardua.style.color = "rgb(170, 169, 169";
});
