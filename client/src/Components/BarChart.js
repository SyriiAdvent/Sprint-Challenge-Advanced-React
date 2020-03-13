import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
// import { arrayFilter } from '../utils/dupeFilter'

const BarChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  const arrayFilter = array => {
    let filteredArray = [];
    array.map(item => {
      if (!filteredArray.includes(item)) {
        filteredArray.push(item);
      }
      //   console.log(filteredArray)
      return filteredArray;
    });
  };

  const countries = JSON.parse(data).map(ele => ele.country);
  console.log(arrayFilter(countries))


  const newData = {
    labels: chartData,
    datasets: [
      {
        label: "Most searched by Country",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [JSON.parse(data).map(ele => ele.searches)]
      }
    ]
  };

  return (
    <div style={{ width: "90%" }}>
      <Bar
        data={newData}
        width={100}
        height={350}
        order={newData.searches}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
