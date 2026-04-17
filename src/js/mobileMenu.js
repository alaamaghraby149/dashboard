/*======================== mobile menu ========================*/
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu-mobile");
const navProfileIcon = document.querySelectorAll(".nav__profile");

function openMenu() {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
}
function closeMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
}
hamburger.addEventListener("click", openMenu);

document.addEventListener("click", function (e) {
    if (!mobileMenu.classList.contains("-translate-x-full")) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    }
});