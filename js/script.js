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

// lighbox gambar header
const gambar = document.querySelector("header img"),
   // icons close
   closeIcons = document.querySelector(".icons .close"),
   closeArrow = document.querySelector('.lgbox .icons img[alt^="Icons Back Arrow"]'),
   // bg lightbox
   lgbox = document.querySelector(".lgbox"),
   // gambar src nya sesuai gambar
   imgContent = document.querySelector(".lgbox .lgbox-content"),
   // caption
   captionText = document.querySelector(".lgbox .caption-lgbox");

gambar.onclick = function () {
   lgbox.style.display = "block";
   imgContent.src = this.src;
   captionText.innerHTML = this.alt;
};

// close
closeIcons.onclick = function () {
   lgbox.style.display = "none";
};

closeArrow.onclick = function () {
   lgbox.style.display = "none";
};
