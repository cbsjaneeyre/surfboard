var burger = document.querySelector("#burger");
var overlay = document.querySelector("#overlay");
var body = document.querySelector("body");
var link = document.querySelectorAll(".overlay .menu__link");

function toggleMenu() {
  burger.classList.toggle("burger--active");
  overlay.classList.toggle("overlay--active");
  body.classList.toggle("body--active");
}

burger.addEventListener("click", toggleMenu);

link.forEach(function (links) {
  links.addEventListener("click", toggleMenu);
});