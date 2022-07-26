/***********************navbar  **************************/
const hamBergur = document.querySelector(".hambergur");
const navmenu = document.querySelector(".nav-menu");

hamBergur.addEventListener("click", () => {
    hamBergur.classList.toggle("active");
    navmenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", ()=> {
      hamBergur.classList.remove("active");
      navmenu.classList.remove("active");
}));
  
  


/********************* preloader **************************/
let preloader = document.querySelector("#preloader");
 window.addEventListener("load",()=>{
     preloader.style.display = "none";
});

/****************** back top top */


window.addEventListener("scroll",function(){
    const buttonFloats = document.querySelector(".button-floats");
    buttonFloats.classList.toggle("block",window.scrollY > 250);
})
