/*======================== dropdown ========================*/
const dropdown = document.querySelector(".dropdown");
const navDataProfile = document.querySelector(".nav__data-profile");
const navData = document.querySelector(".nav__data");
const navDataLang = document.querySelector(".nav__data-lang");
const langToggle = document.getElementById("langToggle");
const selectedLang = document.getElementById("selectedLang");
const langOptions = document.querySelectorAll(".lang-option");
const langImg = document.getElementById("langimg");

/*======================== dropdown month ========================*/
const dropdownMonth = document.querySelectorAll(".dropdownMenu"); //ul
const monthBtn = document.querySelectorAll(".monthBtn"); //button
let months = document.querySelectorAll(".month"); //jan,feb...etc //li
// let monthText = document.querySelectorAll('.monthText')

function openDropDownMonth(e) {
  e.stopPropagation();
  if (!dropdownMonth) return;

  const btn = e.currentTarget; //btn
  const menu = btn.parentElement.querySelector(".dropdownMenu"); //ul

  dropdownMonth.forEach((item) => {
    if (item !== menu) {
      item.classList.add("hidden");
    }
  });

  if (menu) {
    menu.classList.toggle("hidden");
  }
}
function closeDropDownMonth() {
  dropdownMonth.forEach((ul) => {
    ul.classList.add("hidden");
  });
}
monthBtn.forEach((btn) => {
  btn.addEventListener("click", openDropDownMonth);
});
months.forEach((month) => {
  month.addEventListener("click", changeTextContent);
});

function changeTextContent(e) {
  e.stopPropagation();

  let selectedMonth = e.currentTarget.textContent;
  let parent = e.currentTarget.closest(".title");
  let text = parent.querySelector(".monthText");
  text.textContent = selectedMonth;
  closeDropDownMonth();
}

document.addEventListener("click", function (e) {
  dropdownMonth.forEach((ul) => {
    if (!ul.classList.contains("hidden")) {
      monthBtn.forEach((btn) => {
        if (!ul.contains(e.target) && !btn.contains(e.target)) {
          closeDropDownMonth();
        }
      });
    }
  });
});


window.addEventListener("load", closeDropDownMonth);

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

/*======================== theme ========================*/
const computerBtn = document.getElementById("computer");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const themeButtons = [computerBtn, dark, light].filter(Boolean);
const html = document.documentElement;

function setActiveThemeButton(mode) {
  if (!themeButtons.length) return;
  themeButtons.forEach((button) => button.classList.remove("is-active"));
  if (mode === "dark" && dark) dark.classList.add("is-active");
  if (mode === "light" && light) light.classList.add("is-active");
  if (mode === "system" && computerBtn) computerBtn.classList.add("is-active");
}

function applySystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  updateChartColors();
}

function lightMode() {
  if (!light) return;
  light.addEventListener("click", () => {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setActiveThemeButton("light");
    updateChartColors();
  });
}

function darkMode() {
  if (!dark) return;
  dark.addEventListener("click", () => {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setActiveThemeButton("dark");
    updateChartColors();
  });
}

function systemMode() {
  if (!computerBtn) return;
  computerBtn.addEventListener("click", () => {
    localStorage.removeItem("theme");
    applySystemTheme();
    setActiveThemeButton("system");
  });

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

/*======================== chart ========================*/
var options = {
  series: [
    {
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  chart: {
    type: "line",
    height: 444,
    width: "100%",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    width: 5,
    curve: "smooth",
  },

  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
      "9/11/2000",
      "10/11/2000",
      "11/11/2000",
      "12/11/2000",
      "1/11/2001",
      "2/11/2001",
      "3/11/2001",
      "4/11/2001",
      "5/11/2001",
      "6/11/2001",
    ],
    tickAmount: 10,
    labels: {
      style: { colors: [] },
      formatter: function (value, timestamp, opts) {
        return opts.dateFormatter(new Date(timestamp), "dd MMM");
      },
    },
  },
  yaxis: { labels: { style: { colors: [] } }, show: true },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render().then(() => {
  updateChartColors();
});

/*======================== update chart colors ========================*/
function updateChartColors() {
  if (!chart) return;
  const isDarkMode = html.classList.contains("dark");
  chart.updateOptions({
    xaxis: {
      labels: { style: { colors: isDarkMode ? "#FFFFFF" : "#000000" } },
    },
    yaxis: {
      labels: { style: { colors: isDarkMode ? "#FFFFFF" : "#000000" } },
    },
  });
}

updateChartColors();