const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavButtonIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav ");

mobileNavButton.addEventListener("click", function () {
  mobileNavButtonIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

const videoBtn = document.querySelector("#video-story-btn");
const videoFile = document.querySelector("#video-story");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
const videoOverlay = document.querySelector("#video-story-overlay");

function toggleOverlay(event) {
  if (event.type === "mouseleave") {
    videoOverlay.classList.add("hidden");
  } else {
    videoOverlay.classList.remove("hidden");
  }
}

videoBtn.addEventListener("click", function () {
  if (videoFile.paused) {
    videoFile.play();
    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;
    videoBtnIcon.src = "./img/pause_icon.svg";
  } else {
    videoFile.pause();
    videoBtnIcon.src = "./img/play-white.svg";
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
  }
});
