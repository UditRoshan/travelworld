const menuIcon = document.querySelector('.fa-align-right');
const menu = document.querySelector('.menu-box');

menuIcon.addEventListener('click', ()=>{
    if (menu.style.right == "2.7%") {
        menu.style.right = "-100%";
    } else {
        menu.style.right = "2.7%";
    }
});

// DARK MODE

const darkMode = document.querySelector('.fa-moon');
const lightMode = document.querySelector('.fa-sun');
const html = document.querySelector('html');
const lfl = document.querySelector('.lfl');
const planeLogo = document.querySelector('.fa-plane-departure');

darkMode.addEventListener('click', ()=>{
    darkMode.style.opacity = "0";
    darkMode.style.zIndex = "1";
    lightMode.style.opacity = "1";
    lightMode.style.zIndex = "2";
    html.style.backgroundColor = "black";
    lfl.style.color = "rgb(255, 183, 0)";
    planeLogo.style.color = "rgba(255, 255, 255, 0.582)";
});
lightMode.addEventListener('click', ()=>{
    lightMode.style.opacity = "0";
    lightMode.style.zIndex = "1";
    darkMode.style.opacity = "1";
    darkMode.style.zIndex = "2";
    html.style.backgroundColor = "white";
    lfl.style.color = "black";
    planeLogo.style.color = "rgba(0, 0, 0, 0.397)";
});

// PRICING

const pricings = document.querySelector('.pricings');
const starter = document.querySelector('.starter');
const intermediate = document.querySelector('.intermediate');
const premium = document.querySelector('.premium');
const starterHeader = document.querySelector('.s-heading');
const intermediateHeader = document.querySelector('.i-heading');
const premiumHeader = document.querySelector('.p-heading');

starter.addEventListener('click', ()=>{
    starter.style.height = "170px";
    pricings.style.height = "30vh";
    intermediate.style.height = "30px";
    premium.style.height = "30px";
});
intermediate.addEventListener('click', ()=>{
    intermediate.style.height = "170px";
    pricings.style.height = "30vh";
    starter.style.height = "30px";
    premium.style.height = "30px";
});
premium.addEventListener('click', ()=>{
    premium.style.height = "170px";
    pricings.style.height = "30vh";
    starter.style.height = "30px";
    intermediate.style.height = "30px";
});