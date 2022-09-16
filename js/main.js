const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavButtonIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav ");

mobileNavButton.addEventListener("click", function () {
  mobileNavButtonIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
