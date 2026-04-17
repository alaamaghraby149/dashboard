const dropdown = document.querySelector(".dropdown");
const navDataProfile = document.querySelector(".nav__data-profile");
const navData = document.querySelector(".nav__data");
const navDataLang = document.querySelector(".nav__data-lang");
const langToggle = document.getElementById("langToggle");
const selectedLang = document.getElementById("selectedLang");
const langOptions = document.querySelectorAll(".lang-option");
const langImg = document.getElementById("langimg");
/*======================== dropdown functions ========================*/
function openDropdown() {
    if (!navDataProfile) return;
    navDataProfile.classList.toggle("is-open");
    navData.classList.toggle("is-open");
}

function toggleLangDropdown() {
    if (!navDataLang) return;
    navDataLang.classList.toggle("is-open");
}

function closeLangDropdown() {
    if (!navDataLang) return;
    navDataLang.classList.remove("is-open");
}


/*======================== dropdown event listeners ========================*/
if (navDataProfile && dropdown) {
    navDataProfile.addEventListener("click", (event) => {
        event.stopPropagation();
        openDropdown();
        closeLangDropdown();
    });
    navData.addEventListener("click", (event) => {
        event.stopPropagation();
        openDropdown();
        closeLangDropdown();
    });

    document.addEventListener("click", (event) => {
        if (!navDataProfile.contains(event.target) || !navData.contains(e.target)) {
            navDataProfile.classList.remove("is-open");
            navData.classList.remove("is-open");
        }
    });

}

if (navDataLang && langToggle) {
    langToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleLangDropdown();
        if (navDataProfile) {
            navDataProfile.classList.remove("is-open");
        }
    });

    langOptions.forEach((option) => {
        option.addEventListener("click", (event) => {
            const lang = event.currentTarget.dataset.lang;
            if (selectedLang && lang) {
                selectedLang.textContent = lang;
                langImg.src =
                    lang === "Arabic"
                        ? "./assets/images/Flag-arabic.png"
                        : "./assets/images/Flag.png";
            }
            closeLangDropdown();
        });
    });

    document.addEventListener("click", (event) => {
        if (!navDataLang.contains(event.target)) {
            closeLangDropdown();
        }
    });
}