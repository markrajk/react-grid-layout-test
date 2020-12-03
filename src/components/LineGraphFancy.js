import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { Line } from 'react-chartjs-2'

let options = {

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
}

let dat = {
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
    {
      label: "Productivity",
      data: [4, 2, 2.5, 3.3, 4.2, 3.5, 3, 3.3, 4, 4, 3, 4],
      fill: false,
      borderColor: "GREEN",
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
}



const LineGraph = (props) => {
  const { data } = props
  const [newData, setNewData] = useState(dat)
  useEffect(() => {
    if (data) {
      infusedData()
    }
  }, [data])
  console.log('newData');
  console.log(newData);

  const infusedData = () => {
    if (data) {
      const oldData = { ...newData }
      oldData.datasets[0].data = data
      setNewData(oldData)
    }
  }
  return (

    <div className="widget widget-line-chart">
      <div className="widget-header">
        <p className="widget-header-title">
          Productivity, Attitude and Teamworking
      </p>
        <p className="widget-header-text">
          Longterm development chart based on 64 reviews
      </p>
        <div className="widget-header-icons">
          <i className="icon-expand-outlined"></i>
          <i className="icon-cog-outlined"></i>
        </div>
      </div>
      <div className="widget-body">
        <div className="line-chart-wrapper">
          <div className="line-chart">
            <Line data={dat} options={options} />
          </div>
          <div class="chart-legend">

            <div class="chart-legend-content-big">
              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#07487f" }} ></span>
                <span class="chart-legend-item-name">Attitude</span>
              </div>

              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#559a19" }} ></span>
                <span class="chart-legend-item-name">Productivity</span>
              </div>

              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#f7dd31" }} ></span>
                <span class="chart-legend-item-name">Teamworking</span>
              </div>

              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#ea2725" }} ></span>
                <span class="chart-legend-item-name">Average</span>
              </div>
            </div>

            <p class="chart-legend-text">Click <button>here</button> or hower lines to see legend</p>

            <div class="chart-legend-content-small">
              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#07487f" }} ></span>
                <span class="chart-legend-item-name">Attitude</span>
              </div>

              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#559a19" }} ></span>
                <span class="chart-legend-item-name">Productivity</span>
              </div>

              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#f7dd31" }} ></span>
                <span class="chart-legend-item-name">Teamworking</span>
              </div>

              <div class="chart-legend-item" style={{ marginBottom: 0 }}>
                <span class="chart-legend-item-color" style={{ backgroundColor: "#ea2725" }} ></span>
                <span class="chart-legend-item-name">Average</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default LineGraph



