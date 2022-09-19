const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const closeB = document.querySelector(".close2");
const igen = document.querySelector(".mnavbar");

hamburger.addEventListener("click", () =>{
    $(".mobilemenu").css("transform", "translateX(0)");
    $("body").css("overflow-y", "hidden");
    hamburger.classList.toggle("active2");
    navMenu.classList.toggle("active2");
})

closeB.addEventListener("click", () => {
    $(".mobilemenu").css("transform", "translateX(150%)");
    $("body").css("overflow", "auto");
})

igen.addEventListener("click", () =>{
    $(".mobilemenu").css("transform", "translateX(150%)");
    $("body").css("overflow", "auto");
})

document.querySelectorAll(".navlink").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.toggle("active2");
        navMenu.classList.toggle("active2");
    }))
