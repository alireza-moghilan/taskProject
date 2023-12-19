
import React, { Component } from "react";
import Chart from "react-apexcharts";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    const generateData1 = () => {
      const data = [20,15, 10, 20,15]
      return data;
    }
    const generateData2 = () => {
      const data = [10,20, 15, 10,15]
      return data;
    }
    const generateData3 = () => {
      const data = [20,15, 10, 10,15]
      return data;
    }
    const generateData4 = () => {
      const data = [10,15, 20, 20,10]
      return data;
    }
    const generateData5 = () => {
      const data = [20,15, 10, 15,20]
      return data;
    }
    const generateData6 = () => {
      const data = [10,20, 15, 15,20]
      return data;
    }
    const generateData7 = () => {
      const data = [20,15, 10, 10,15]
      return data;
    }
    const generateData8 = () => {
      const data = [10,15, 20, 20,10]
      return data;
    }
    const generateData9 = () => {
      const data = [15,10, 15, 10,20]
      return data;
    }
    this.state = {

      series: [{
        name: 'شنبه',
        data: generateData1(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'یکشنبه',
        data: generateData2(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'دوشنبه',
        data: generateData3(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'سه شنبه',
        data: generateData4(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'چهارشنبه',
        data: generateData5(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'پنجشنبه',
        data: generateData6(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'جمعه',
        data: generateData7(18, {
          min: 0,
          max: 90
        })
      },
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#6f6be5"],
        title: {
          text: 'HeatMap Chart (Single color)'
        },
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} width={700} />
      </div>


    );
  }
}
export default ApexChart;







