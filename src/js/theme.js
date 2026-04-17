const computerBtn = document.querySelectorAll(".computer-theme");
const dark = document.querySelectorAll(".dark-theme");
const light = document.querySelectorAll(".light-theme");

const themeButtons = [...computerBtn, ...dark, ...light].filter(Boolean);
const html = document.documentElement;

function setActiveThemeButton(mode) {
  if (!themeButtons.length) return;
  themeButtons.forEach((button) => button.classList.remove("is-active"));

  if (mode === "dark" && dark) dark.forEach((btn) => btn.classList.add("is-active"));
  if (mode === "light" && light) light.forEach((btn) => btn.classList.add("is-active"));
  if (mode === "system" && computerBtn) computerBtn.forEach((btn) => btn.classList.add("is-active"));
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
  light.forEach((btn) => {
    btn.addEventListener("click", () => {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setActiveThemeButton("light");
      updateChartColors();
    });
  });
}

function darkMode() {
  if (!dark) return;
  dark.forEach((btn) => {
    btn.addEventListener("click", () => {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setActiveThemeButton("dark");
      updateChartColors();
    });
  })
}

function systemMode() {
  if (!computerBtn) return;
  computerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.removeItem("theme");
      applySystemTheme();
      setActiveThemeButton("system");
    });
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



lightMode();
darkMode();
systemMode();


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
                    tickAmount: 3,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM');
                        }
                    }
                },
                yaxis: {
                    tickAmount: 3,

                }
            }
        },
    ]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

  



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

window.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    chart.render(),
    chartRevenue.render(),
    chartPie.render(),
    chartLine.render()
  ]).then(() => {
    updateChartColors();
  });
});









/*======================== update chart colors ========================*/
function updateChartColors() {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const textColor = isDarkMode ? "#ffffff" : "#000000";

  // Chart 1 (Main Line)
  if (chart) {
    chart.updateOptions({
      xaxis: {
        labels: {
          style: {
            colors: [textColor] // ✅ array مش string
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [textColor]
          }
        }
      }
    }, false, true); // ✅ force redraw
  }

  // Chart 2 & 3 (Legend colors)
  const legendOptions = {
    legend: {
      labels: {
        colors: textColor
      }
    }
  };

  if (chartRevenue) {
    chartRevenue.updateOptions(legendOptions, false, true);
  }

  if (chartPie) {
    chartPie.updateOptions(legendOptions, false, true);
  }

  // Chart 4
  if (chartLine) {
    chartLine.updateOptions({
      xaxis: {
        labels: {
          style: {
            colors: [textColor]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [textColor]
          }
        }
      }
    }, false, true);
  }
}


updateChartColors();











