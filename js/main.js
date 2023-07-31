// VARIABLES
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// EVENTS
abrir.addEventListener("click", () =>{
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () =>{
  nav.classList.remove("visible");
});

