// function toggleNav() {
//   const navLinks = document.querySelector(".nav-links");
//   const toggleBtn = document.querySelector(".toggle-btn");

//   navLinks.classList.toggle("active");
//   const isActive = navLinks.classList.contains("active");

//   toggleBtn.style.transform = isActive ? "rotateZ(135deg)" : "rotateZ(0deg)";
// }

// var navButtons = document.getElementsByClassName("nav-button");

// for (var i = 0; i < navButtons.length; i++) {
//   navButtons[i].addEventListener("click", function () {
//     var currentButton = document.getElementsByClassName("active-link");
//     currentButton[0].className = currentButton[0].className.replace(
//       " active-link",
//       ""
//     );
//     this.className += " active-link";
//   });
// }

// var homeSection = document.getElementById("about-section");
// var aboutSubsection = document.getElementById("about-subsection-wrapper");
// var webSection = document.getElementById("web-section");
// var videoSection = document.getElementById("video-section");
// var fotoSection = document.getElementById("foto-section");
// var contactSection = document.getElementById("contact-section");

// function homeLink() {
//   homeSection.style.display = "block";
//   aboutSubsection.style.display = "block";
//   webSection.style.display = "none";
//   videoSection.style.display = "none";
//   fotoSection.style.display = "none";
//   contactSection.style.display = "block";
// }

// function webLink() {
//   homeSection.style.display = "none";
//   aboutSubsection.style.display = "none";
//   webSection.style.display = "block";
//   videoSection.style.display = "none";
//   fotoSection.style.display = "none";
//   contactSection.style.display = "none";
// }

// function videoLink() {
//   homeSection.style.display = "none";
//   aboutSubsection.style.display = "none";
//   webSection.style.display = "none";
//   videoSection.style.display = "block";
//   fotoSection.style.display = "none";
//   contactSection.style.display = "none";
// }

// function fotoLink() {
//   homeSection.style.display = "none";
//   aboutSubsection.style.display = "none";
//   webSection.style.display = "none";
//   videoSection.style.display = "none";
//   fotoSection.style.display = "block";
//   contactSection.style.display = "none";
// }

// function contactLink() {
//   homeSection.style.display = "block";
//   aboutSubsection.style.display = "block";
//   webSection.style.display = "none";
//   videoSection.style.display = "none";
//   fotoSection.style.display = "none";
//   contactSection.style.display = "block";
// }

function toggleNav() {
  const navLinks = document.querySelector(".nav-links");
  const toggleBtn = document.querySelector(".toggle-btn");

  navLinks.classList.toggle("active");
  const isActive = navLinks.classList.contains("active");

  toggleBtn.style.transform = isActive ? "rotateZ(135deg)" : "rotateZ(0deg)";
}

var navButtons = document.getElementsByClassName("nav-button");

for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", function () {
    // var currentButton = document.getElementsByClassName("active-link");
    // currentButton[0].className = currentButton[0].className.replace(
    //   " active-link",
    //   ""
    // );
    // this.className += " active-link";

    // Zatvori izbornik s linkovima nakon klika na link
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("active");
    const toggleBtn = document.querySelector(".toggle-btn");
    toggleBtn.style.transform = "rotateZ(0deg)";
  });
}

var homeSection = document.getElementById("about-section");
var aboutSubsection = document.getElementById("about-subsection-wrapper");
var webSection = document.getElementById("web-section");
var videoSection = document.getElementById("video-section");
var fotoSection = document.getElementById("foto-section");
var contactSection = document.getElementById("contact-section");

function homeLink() {
  homeSection.style.display = "block";
  aboutSubsection.style.display = "block";
  webSection.style.display = "none";
  videoSection.style.display = "none";
  fotoSection.style.display = "none";
  contactSection.style.display = "block";
}

function webLink() {
  homeSection.style.display = "none";
  aboutSubsection.style.display = "none";
  webSection.style.display = "block";
  videoSection.style.display = "none";
  fotoSection.style.display = "none";
  contactSection.style.display = "none";
}

function videoLink() {
  homeSection.style.display = "none";
  aboutSubsection.style.display = "none";
  webSection.style.display = "none";
  videoSection.style.display = "block";
  fotoSection.style.display = "none";
  contactSection.style.display = "none";
}

function fotoLink() {
  homeSection.style.display = "none";
  aboutSubsection.style.display = "none";
  webSection.style.display = "none";
  videoSection.style.display = "none";
  fotoSection.style.display = "block";
  contactSection.style.display = "none";
}

function contactLink() {
  homeSection.style.display = "block";
  aboutSubsection.style.display = "block";
  webSection.style.display = "none";
  videoSection.style.display = "none";
  fotoSection.style.display = "none";
  contactSection.style.display = "block";
}
