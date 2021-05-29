// todo : navbar
const nav = document.querySelector("nav"),
   menuHamburger = document.querySelector("nav .menu-hamburger"),
   body = document.querySelector("body");

// font body jika tdk terhubung ke jaringan
if ('body.style.fontFamily = "sans-serif" ') {
   body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue'";
} else {
   body.style.fontFamily = "sans-serif";
}

menuHamburger.onclick = () => {
   menuHamburger.classList.toggle("close");
   nav.classList.toggle("mobile");
};
