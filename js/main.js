// VARIABLES
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const menu = document.getElementById("menu");

// FUNCTIONS
function openMenu() {
  menu.classList.add("open");
}

function closeMenu() {
  menu.classList.remove("open");
}

// EVENTS
openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
