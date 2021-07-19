// Theme
let body = document.getElementsByTagName("body")[0];
let theme = localStorage.getItem("theme");
onload = () => {
  if (theme === "red") {
    body.className = "red";
    redImage.src = "images/menu/theme_red_selected.png";
  }
  else if (theme === "dark") {
      body.className = "dark";
      darkImage.src = "images/menu/theme_dark_selected.png";
  }
  else {
    skyImage.src = "images/menu/theme_sky_selected.png";
  }
}


// Nav menu toggle
let hamburgerBtn = document.querySelector("#hamburger-button");
let nav = document.querySelector("#nav-board");
let navFake = document.querySelectorAll(".nav-board-fake");

function toggleNav() {
  hamburgerBtn.classList.toggle("active");
  nav.classList.toggle("active");
  navFake[0].classList.toggle("active");
  navFake[1].classList.toggle("active");
}

function closeNav() {
  hamburgerBtn.classList.remove("active");
  nav.classList.remove("active");
  navFake[0].classList.remove("active");
  navFake[1].classList.remove("active");
}

hamburgerBtn.addEventListener("click", () => {
  toggleNav();
});

// Nav menu content toggle
let menuHeader = document.querySelectorAll(".menu-header");

menuHeader.forEach((menu) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    let menuContent = menu.nextElementSibling;
    if (menu.classList.contains("active"))
      menuContent.style.height = menuContent.scrollHeight + "px";
    else
      menuContent.style.height = "0px";
  })
});

// Nav menu close by pressing ESC key
document.addEventListener("keyup", (key) => {
  if (key.keyCode == 27) {
    closeNav();
  }
});

document.addEventListener("click", () => {
  let nav = document.querySelector("#main-nav");
  if (nav.contains(document.activeElement) === false && topButton !== document.activeElement) {
    closeNav();
  }
});

// Theme Change Button

let skyButton = document.querySelector("#theme-sky-button");
let redButton = document.querySelector("#theme-red-button");
let darkButton = document.querySelector("#theme-dark-button");
let skyImage = document.querySelector("#theme-sky-image");
let redImage = document.querySelector("#theme-red-image");
let darkImage = document.querySelector("#theme-dark-image");

skyButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") !== "default") {
    localStorage.setItem("theme", "default");
    skyImage.src = "images/menu/theme_sky_selected.png";
    redImage.src = "images/menu/theme_red.png";
    darkImage.src = "images/menu/theme_dark.png";
    body.className = "default";
  }
});

redButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") !== "red") {
    localStorage.setItem("theme", "red");
    skyImage.src = "images/menu/theme_sky.png";
    redImage.src = "images/menu/theme_red_selected.png";
    darkImage.src = "images/menu/theme_dark.png";
    body.className = "red";
  }
});

darkButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") !== "dark") {
    localStorage.setItem("theme", "dark");
    skyImage.src = "images/menu/theme_sky.png";
    redImage.src = "images/menu/theme_red.png";
    darkImage.src = "images/menu/theme_dark_selected.png";
    body.className = "dark";
  }
});

// Top Button
let topButton = document.querySelector("#button-top");
topButton.addEventListener("click", () => {
  topButton.classList.remove("active");
  topButton.classList.add("active");
  setTimeout(() => { topButton.classList.remove("active"); }, 1000);
  setTimeout(() => { scrollTo({top: 0, behavior: "smooth"});}, 300);
});
