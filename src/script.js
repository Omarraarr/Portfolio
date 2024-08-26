document.addEventListener("DOMContentLoaded", function () {
    const hum_menu = document.querySelector(".hum_menu");
    const nav = document.querySelector(".nav_content");
    hum_menu.addEventListener("click", function () {
        console.log("clicked");
        nav.classList.toggle("active");
    })
})