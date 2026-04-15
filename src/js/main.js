/*======================== dropdown ========================*/
const dropdown = document.querySelector(".dropdown");
const navDataProfile = document.querySelector(".nav__data-profile");
const navData = document.querySelector(".nav__data");
const navDataLang = document.querySelector(".nav__data-lang");
const langToggle = document.getElementById("langToggle");
const selectedLang = document.getElementById("selectedLang");
const langOptions = document.querySelectorAll(".lang-option");
const langImg = document.getElementById("langimg");
const menuItems = document.querySelectorAll('.menu-item')
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
/*======================== MAKE THE ACTIVE LINK IN ASIDE ========================*/
function selectedLink(e){
  let selectedLink = e.currentTarget
  menuItems.forEach(item=>{
    if(item!==selectedLink){
      item.classList.remove('selected-item')
    }else if(item==selectedLink){
      item.classList.add('selected-item')
    }
  })
}

menuItems.forEach(item=>{
  item.addEventListener('click', selectedLink)
})
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
  console.log('hey')
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


/*======================== update chart colors ========================*/
function updateChartColors() {
  const isDarkMode = html.classList.contains("dark");

  // chart 1
  if (chart) {
    chart.updateOptions({
      xaxis: {
        labels: { style: { colors: isDarkMode ? "#fff" : "#000" } },
      },
      yaxis: {
        labels: { style: { colors: isDarkMode ? "#fff" : "#000" } },
      },
    });
  }

  // chart 2
  if (chartRevenue) {
    chartRevenue.updateOptions({
      legend: {
        labels: {
          colors: isDarkMode ? "#fff" : "#000",
        },
      },
    });
  }

  // chart 3 (pie)
  if (chartPie) {
    chartPie.updateOptions({
      legend: {
        labels: {
          colors: isDarkMode ? "#fff" : "#000",
        },
      },
    });
  }

  // chart 4
  if (chartLine) {
    chartLine.updateOptions({
      xaxis: {
        labels: { style: { colors: isDarkMode ? "#fff" : "#000" } },
      },
      yaxis: {
        labels: { style: { colors: isDarkMode ? "#fff" : "#000" } },
      },
    });
  }
}


var optionsRevenue = {
    series: [{
        name: 'Sales',
        data: [70, 40, 28, 51, 200, 109, 100],
        
    }, {
        name: 'Profit',
        data: [90, 32, 117, 32, 34, 52, 41]
    }],
    fill: {
  colors: ['#FF8F6D', '#DBA5FF']
},
    chart: {
        toolbar: {
            show: false
        },
        height: 350,
        type: 'area'
    },

    grid: {
        show: false
    },

    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {

        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    legend: {
        position: 'bottom',
        itemMargin: {
            horizontal: 40
        }
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 350
                },
                stroke: {
                    with: 3
                },
                xaxis: {
                    tickAmount: 5,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM');
                        }
                    }
                }
            }
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 280
                },
                stroke: {
                    with: 2
                },
                xaxis: {
                    tickAmount: 1,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM');
                        }
                    }
                },
                yaxis: {
                    tickAmount: 2,

                }
            }
        },
    ]
};

var chartRevenue = new ApexCharts(document.querySelector("#chartRevenu"), optionsRevenue);



var optionsPie = {
    series: [44, 55],

    chart: {
        width: 380,
        type: 'donut'
    },

    labels: [
        'New Customers',
        'Returning',

    ],

    plotOptions: {
        pie: {
            donut: {
                size: '75%'
            }
        }
    },

    stroke: {
        width: 8,
        lineCap: 'round'
    },

    colors: ['#4F7CFF', '#BFC8D9', '#BFC8D9', '#BFC8D9'],

    legend: {
        show: true,
        position: 'bottom'
    },

    dataLabels: {
        enabled: false
    },

    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 300
            }
        }
    }]
};

var chartPie = new ApexCharts(document.querySelector("#piechart"), optionsPie);




var optionsLine = {
    series: [
        {
            type: 'rangeArea',


            data: [
                {
                    x: 'Jan',
                    y: [1100, 1900]
                },
                {
                    x: 'Feb',
                    y: [1200, 1800]
                },
                {
                    x: 'Mar',
                    y: [900, 2900]
                },
                {
                    x: 'Apr',
                    y: [1400, 2700]
                },
                {
                    x: 'May',
                    y: [2600, 3900]
                },
                {
                    x: 'Jun',
                    y: [500, 1700]
                },
                {
                    x: 'Jul',
                    y: [1900, 2300]
                },
                {
                    x: 'Aug',
                    y: [1000, 1500]
                }
            ]
        },

        {
            type: 'rangeArea',
            name: 'Team A Range',
            data: [
                {
                    x: 'Jan',
                    y: [3100, 3400]
                },
                {
                    x: 'Feb',
                    y: [4200, 5200]
                },
                {
                    x: 'Mar',
                    y: [3900, 4900]
                },
                {
                    x: 'Apr',
                    y: [3400, 3900]
                },
                {
                    x: 'May',
                    y: [5100, 5900]
                },
                {
                    x: 'Jun',
                    y: [5400, 6700]
                },

            ]
        },

        {
            type: 'line',
            name: 'Team B Median',
            data: [
                {
                    x: 'Jan',
                    y: 1500
                },
                {
                    x: 'Feb',
                    y: 1700
                },
                {
                    x: 'Mar',
                    y: 1900
                },
                {
                    x: 'Apr',
                    y: 2200
                },
                {
                    x: 'May',
                    y: 3000
                },
                {
                    x: 'Jun',
                    y: 1000
                },
                {
                    x: 'Jul',
                    y: 2100
                },
                {
                    x: 'Aug',
                    y: 1200
                },

            ]
        },
        {
            type: 'line',
            name: 'Team A Median',
            data: [
                {
                    x: 'Jan',
                    y: 3300
                },
                {
                    x: 'Feb',
                    y: 4900
                },
                {
                    x: 'Mar',
                    y: 4300
                },
                {
                    x: 'Apr',
                    y: 3700
                },
                {
                    x: 'May',
                    y: 5500
                },
                {
                    x: 'Jun',
                    y: 5900
                },
                {
                    x: 'Jul',
                    y: 4500
                },

            ]
        }
    ],
    chart: {
        height: 350,
        type: 'rangeArea',
        animations: {
            speed: 500
        },
        toolbar: {
            show: false
        },
    },
    colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: [0.24, 0.24, 1, 1]
    },
    forecastDataPoints: {
        count: 2
    },
    stroke: {
        curve: 'straight',
        width: [0, 0, 2, 2]
    },
    grid: {
        show: false
    },
    legend: {
        show: false,
        customLegendItems: ['Team B', 'Team A'],
        inverseOrder: true
    },
    // title: {
    //     text: 'Range Area with Forecast Line (Combo)'
    // },
    markers: {
        hover: {
            sizeOffset: 5
        }
    },
        responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            xaxis: {
        tickAmount: 2,},
        yaxis: {
        tickAmount: 4,}
        }
    }]
};

var chartLine = new ApexCharts(document.querySelector("#linechart"), optionsLine);

Promise.all([
  chart.render(),
  chartRevenue.render(),
  chartPie.render(),
  chartLine.render()
]).then(() => {
  updateChartColors();
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});







updateChartColors();