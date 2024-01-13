const btn = document.querySelector("button.Burger_button")
const nav = document.querySelector(".mobileNav");

btn.addEventListener("click", function(){
    nav.classList.toggle("hidden")
})