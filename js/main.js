//js de burguer menu
/*
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}
*/

//
const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", ()=>{
    menu.classList.add("visible")
});
close.addEventListener("click", ()=>{
    menu.classList.remove("visible")
});