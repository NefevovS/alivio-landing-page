const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavButtonIcon = document.querySelector(".mobile-nav-button__icon");

mobileNavButton.addEventListener("click", function () {
  mobileNavButtonIcon.classList.toggle("active");
});
