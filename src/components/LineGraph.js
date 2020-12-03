import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { Line } from 'react-chartjs-2'

let options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 7,
        right: 0,
        top: 3,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
          drawBorder: true,
          tickMarkLength: 0
        },
        ticks: {
          display: false,

          //autoSkip: true,
          //maxTicksLimit: 3
        }
      },],
      yAxes: [{
        position: 'right',
        gridLines: {
          color: "rgba(232, 233, 233, 1)",
          drawBorder: false,
          tickMarkLength: 2
        },
        ticks: {
          fontColor: "#9fa1a2",
          fontSize: 12,
          fontStyle: '500',
          padding: 10,
          beginAtZero: false,
          display: true,
          autoSkip: false,
          maxTicksLimit: 3
        }
      },
      {
        position: 'left',
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          drawTicks: false
        }
      }]
    }
  }

  let dat = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [1200,200,500,1000],
      pointRadius: '0',
      pointHoverRadius: '5',
      pointBorderWidth: 1,
      pointBackgroundColor: '#FFF',
      borderColor: '#9fa1a2',
      backgroundColor: 'transparent',
      borderWidth: 1,
      lineTension: 0,
    }],
  };


  const LineGraph = (props) => {
        const { data } =  props
        const [ newData, setNewData ] = useState(dat)
        useEffect(() => {
            if (data) {
                infusedData()
            }
        }, [data])
        console.log('newData');
        console.log(newData);
        
        const infusedData = () => {
            if (data) {
                const oldData = {...newData}
                oldData.datasets[0].data = data
                setNewData(oldData)
            }
        }
        return <Line data={newData} options={options}  />

  }

  export default LineGraph
