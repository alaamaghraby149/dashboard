/*======================== dropdown ========================*/
const dropdown = document.querySelector(".dropdown");
const navDataProfile = document.querySelector(".nav__data-profile");
const navData = document.querySelector(".nav__data");
const navDataLang = document.querySelector(".nav__data-lang");
const langToggle = document.getElementById("langToggle");
const selectedLang = document.getElementById("selectedLang");
const langOptions = document.querySelectorAll(".lang-option");
const langImg = document.getElementById("langimg");
// const navDataProfileImage = document.querySelector('.nav__data-profile-img')
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
    if (!navDataProfile.contains(event.target)) {
      navDataProfile.classList.remove("is-open");
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
        if (lang == "Arabic") {
          langImg.src = "./assets/images/Flag-arabic.png";
        } else {
          langImg.src = "./assets/images/Flag.png";
        }
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
// navDataProfileImage.addEventListener('click' , openDropdown)
/*======================== mode ========================*/
const computerBtn = document.getElementById("computer");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const themeButtons = [computerBtn, dark, light].filter(Boolean);

const html = document.documentElement;

function setActiveThemeButton(mode) {
  if (!themeButtons.length) return;

  themeButtons.forEach((button) => {
    button.classList.remove("is-active");
  });

  if (mode === "dark" && dark) dark.classList.add("is-active");
  if (mode === "light" && light) light.classList.add("is-active");
  if (mode === "system" && computerBtn) computerBtn.classList.add("is-active");
}

function lightMode() {
  if (!light) return;
  light.addEventListener("click", () => {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setActiveThemeButton("light");
  });
}

function darkMode() {
  if (!dark) return;
  dark.addEventListener("click", () => {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setActiveThemeButton("dark");
  });
}
function applySystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
function systemMode() {
  if (!computerBtn) return;
  computerBtn.addEventListener("click", () => {
    localStorage.removeItem("theme");
    applySystemTheme();
    setActiveThemeButton("system");
  });

  // Only react to OS theme changes when user is in system mode.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (!localStorage.getItem("theme")) {
        applySystemTheme();
        setActiveThemeButton("system");
      }
    });
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
  setActiveThemeButton("dark");
} else if (savedTheme === "light") {
  html.classList.remove("dark");
  setActiveThemeButton("light");
} else {
  applySystemTheme();
  setActiveThemeButton("system");
}

lightMode();
darkMode();
systemMode();
/*============= OPEN AND CLOSE MENU =============*/
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobileMenu-mobile')
// const closeMenuBtn = document.getElementById('closeMenu')
const navProfileIcon = document.querySelectorAll('.nav__profile')
function openMenu(){
    mobileMenu.classList.remove('-translate-x-full');
    mobileMenu.classList.add('translate-x-0');
}
function closeMenu(){
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
}
hamburger.addEventListener('click',openMenu)
// closeMenuBtn.addEventListener('click',closeMenu)
navProfileIcon.forEach(icon=>{
    icon.addEventListener('click',openProfileDetails)
})
document.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('-translate-x-full')) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    }
});
