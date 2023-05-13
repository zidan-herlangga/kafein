// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar sidebar untuk menghilangkan
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/*   
aku sudah berkomitmen memilihmu sebagai pasanganku
dan aku ingin berjuang bersamamu. Maka seperti
apapun keadaan nantinya, kita harus sabar dan saling
menguatkan. Lelah pasti ada, tapi jangan pernah
ceritakan kepada laki-laki atau perempuan lain.
Ceritakan saja kepadaku jika kamu merasa bosan dan
jangan pernah pergi. Kita harus bersama dalam situasi
apapun nantinya.
*/

// Jika di scroll, maka navbar menjadi solid
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Animasi typing repeat
let typing = new Typed(".typed", {
  strings: ["HackBymee."],
  typeSpeed: 150,
  backSpeed: 90,
  loop: true,
});

// Animasi loading
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

let fullName = document.getElementById("name");
window.addEventListener;
