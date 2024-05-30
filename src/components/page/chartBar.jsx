
import React, { Component, useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { conTextDataApi } from "../../routes/routes";
import { MinuteToHoursOutput, hoursToMinuteOutput, timeDifferenceInHours } from "../timer/hoursCalculate";

const ChartBar = (props) => {
  // context
  const saveApiInContext = useContext(conTextDataApi);

  // Getting data from context and filling the State value 
  // const [data, setData] = useState([]);
  let data = [];
  // save data chart
  const [dataChart, setDataChart] = useState([])

  // state
  const [state, setState] = useState(
    {
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        fill: {
          colors: ['#4b48a4']
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
            return " ... : " + val + "  ساعت ";
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
              return " ... : " + val + "  ساعت ";
            }
          }

        }
      },


    }
  )

  // Getting data from context and filling the State value 
  useEffect(() => {
    data = saveApiInContext.dataState;
    totalHoursFun();
  }, [saveApiInContext.dataState])

  // function
  const totalHoursFun = () => {
    const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let totalHoursIn_a_Day = [];
    const totalMinutes = []
    if (data.length > 0) {
      // 
      // checked task day
      for (let daysWeekIndex = 0; daysWeekIndex < daysWeek.length; daysWeekIndex++) {
        let sumOfTime = 0;
        // 
        data.map(index => {
          if (index.dateRegistration == daysWeek[daysWeekIndex]) {
            if (index.dateRegistration != "") {
              // total time difference
              // NaN bug control
              if (index.timeStartTask.length != 0 && index.timeEndTask.length != 0) {
                sumOfTime += Number(hoursToMinuteOutput(timeDifferenceInHours(index.timeStartTask, index.timeEndTask)))
              } else {
                sumOfTime += 0;
              }
              // totalHoursIn_a_Day.push(sumOfTime);
            }
            else {
              //
              sumOfTime += 0;
            }
          }
        })
        // push sum of time
        totalHoursIn_a_Day.push(sumOfTime);

        if (daysWeekIndex >= totalHoursIn_a_Day.length) {
          // push this data => [0]
          totalHoursIn_a_Day.push(0);
        }
      }
    }

    totalHoursIn_a_Day.map(index => {
      totalMinutes.push(Number(MinuteToHoursOutput(index)));
    })

    const sortDaysWeek =()=> {
      totalMinutes.unshift(totalMinutes[totalMinutes.length - 1]);
      totalMinutes.pop()
    }
    sortDaysWeek();

    return setDataChart(
      [{
        name: 'ساعات کاری ',
        data: totalMinutes
      }]
    );

  }

  return (
    <>
      <div id="chart">
        <Chart options={state.options} series={dataChart} type="bar" height={400} width={"100%"} />
      </div>
    </>
  )
}
export default ChartBar;