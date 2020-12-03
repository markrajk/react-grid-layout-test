// SELECT ALL CHARTS
let columnCharts = document.querySelectorAll('.column-chart');
let comboChart = document.querySelector('.combo-chart');
let barGraph = document.querySelector('.bar-graph');
let valueBox = document.querySelector('.value-box');
let lineGraph = document.querySelector('.line-chart');

let allGraphs = [...columnCharts, comboChart, barGraph, valueBox, lineGraph];


// REUSABLE RESIZE OBSERVER
var ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    const crWidth = entry.borderBoxSize[0].inlineSize;

    if (crWidth > 1200.00001) {
      entry.target.classList.add('s-12')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "12";
      }
    } else if (entry.target.classList.contains('s-12')) {
      entry.target.classList.remove('s-12')
    }

    if (crWidth <= 1200 && crWidth > 1100.00001) {
      entry.target.classList.add('s-11')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "11";
      }
    } else if (entry.target.classList.contains('s-11')) {
      entry.target.classList.remove('s-11')
    }

    if (crWidth <= 1100 && crWidth > 1000.00001) {
      entry.target.classList.add('s-10')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "10";
      }
    } else if (entry.target.classList.contains('s-10')) {
      entry.target.classList.remove('s-10')
    }

    if (crWidth <= 1000 && crWidth > 900.00001) {
      entry.target.classList.add('s-9')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "9";
      }
    } else if (entry.target.classList.contains('s-9')) {
      entry.target.classList.remove('s-9')
    }

    if (crWidth <= 900 && crWidth > 800.00001) {
      entry.target.classList.add('s-8')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "8";
      }
    } else if (entry.target.classList.contains('s-8')) {
      entry.target.classList.remove('s-8')
    }

    if (crWidth <= 800 && crWidth > 700.00001) {
      entry.target.classList.add('s-7')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "7";
      }
    } else if (entry.target.classList.contains('s-7')) {
      entry.target.classList.remove('s-7')
    }

    if (crWidth <= 700 && crWidth > 600.00001) {
      entry.target.classList.add('s-6')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "6";
      }
    } else if (entry.target.classList.contains('s-6')) {
      entry.target.classList.remove('s-6')
    }

    if (crWidth <= 600 && crWidth > 500.00001) {
      entry.target.classList.add('s-5')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "5";
      }
    } else if (entry.target.classList.contains('s-5')) {
      entry.target.classList.remove('s-5')
    }

    if (crWidth <= 500) {
      entry.target.classList.add('s-4')
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.options.scales.xAxes[0].ticks.maxTicksLimit = "4";
      }
    } else if (entry.target.classList.contains('s-4')) {
      entry.target.classList.remove('s-4')
    } else {

      chart01.options.scales.yAxes[0].ticks.callback = function (
        label,
        index,
        labels
      ) {
        switch (label) {
          case 1:
            return "Bad (1.0)";
          case 2:
            return "Weak (2.0)";
          case 3:
            return "Ok (3.0)";
          case 4:
            return "Good (4.0)";
          case 5:
            return "Great (5.0)";
        }
      };
    }

    if (crWidth <= 700.00001) {
      //Code for line chart
      if (entry.target.classList.contains('line-chart')) {
        chart01.data.labels = chart01.data.labels.map(e => { return e.substring(0, 3) });
        chart01.update();
        // chart01.data.labels = [
        //   "Jan",
        //   "Feb",
        //   "Mar",
        //   "Apr",
        //   "May",
        //   "Jun",
        //   "Jul",
        //   "Aug",
        //   "Sep",
        //   "Oct",
        //   "Nov",
        //   "Decr"
        // ]
      }
    } else {
      if (entry.target.classList.contains('line-chart')) {
        chart01.data.labels = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      }

    }
  }
});

allGraphs.forEach(e => {
  ro.observe(e);
});

let allLegends = document.querySelectorAll('.chart-legend');

var ro02 = new ResizeObserver(entries => {
  for (let entry of entries) {
    if (entry.target.clientWidth < entry.target.firstElementChild.clientWidth + 20) {
      entry.target.classList.add('small');
    } else {
      entry.target.classList.remove('small');
    }
  }
})

allLegends.forEach(e => {
  ro02.observe(e);
});

//PIE CHART
google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  var options = {
    backgroundColor: 'transparent',
    legend: 'none',
    title: false,
    width: 'auto',
    height: 'auto',
    chartArea: {
      height: '94%',
      left: '0',
      right: '0',
    },
    fontSize: '12.75'
  };

  var chart02 = new google.visualization.PieChart(document.getElementById('piechart02'));

  chart02.draw(data, options);
}



//LINE CHART
var ctx01 = document.getElementById("chart-01").getContext("2d");

let chart01 = new Chart(ctx01, {
  type: "line",
  data: {
    datasets: [
      {
        // showLine: false,
        label: "Attitude",
        data: [1.5, 2, 3, 3.5, 3, 3.8, 4, 4.2, 4, 3.8, 3.5, 3],
        fill: false,
        borderColor: "#FF7F00",
        pointRadius: 0,
      },
      {
        label: "Teamworking",
        data: [1.2, 1.4, 2, 3, 4, 3.5, 3.5, 3.7, 4, 4, 2, 4.5, 5],
        fill: false,
        borderColor: "#1DA0F2",
        pointRadius: 0,
      },
    ],
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "right",
      align: "center",

      labels: {
        padding: 30,
      },
    },
    legendCallback: function (chart) {
      return chart.data.datasets
        .map((e, i, arr) => {
          return `
            <div class="chart-label chart-label-${i}">

                <div class="pretty p-svg p-curve">
                    <input type="checkbox" name="${e.label}-${i}" id="${e.label}-${i}"/>
                    <div class="state p-primary">
                        <!-- svg path -->
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>&nbsp;</label>
                    </div>
                </div>

                <label class="chart-label-label" for="${e.label}-${i}">${e.label}</label>
                <span style="background-color: ${e.borderColor}"></span>
            </div>`;
        })
        .join("");
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#16222f",
            fontFamily: '"Inter", sans-serif',
            fontSize: 12,
            fontStyle: "400",
            beginAtZero: false,
            padding: 8.6,
            max: 5,
            min: 1,
            stepSize: 1,
            callback: function (label, index, labels) {
              switch (label) {
                case 1:
                  return "Bad (1.0)";
                case 2:
                  return "Weak (2.0)";
                case 3:
                  return "Ok (3.0)";
                case 4:
                  return "Good (4.0)";
                case 5:
                  return "Great (5.0)";
              }
            },
          },
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            maxRotation: 0,
            fontColor: "#16222f",
            fontFamily: '"Inter", sans-serif',
            fontSize: 12,
            fontStyle: "300",
            beginAtZero: false,
            padding: 4.5,
          },
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: false,
          },
        },
      ],
    },
  },
});

// RESIZE WIDGETS HEIGHT
// let minusHeight = document.querySelector(".plus-minus .icon-minus-outlined");
// let plusHeight = document.querySelector(".plus-minus .icon-plus-outlined");
// let widgetsParent = document.querySelector(".content");

// minusHeight.addEventListener("click", function () {
//   widgetsParent.classList.add("small");
//   widgetsParent.classList.remove("big");
//   drawLineChart();
// });

// plusHeight.addEventListener("click", function () {
//   widgetsParent.classList.remove("small");
//   widgetsParent.classList.add("big");
//   drawLineChart();
// });
