
import React, { Component } from "react";
import Chart from "react-apexcharts";
class ChartBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Inflation',
        data: [100,80, 50, 70, 70, 10, 0]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        fill: {
          colors: ['#9336B4']
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },

        xaxis: {
          categories: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }

        }
      },


    };
  }


  render() {
    return (


      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={400} width={"100%"} />
      </div>


    );
  }
}
export default ChartBar;







