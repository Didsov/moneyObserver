import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const CumulativePlot = ({ transferList, categoryList }) => {
    const tranferValues = [...transferList].sort((a,b)=> new Date(b.date)-new Date(a.date) ).reverse()
    
    const counts = tranferValues.map((item) => item.count);
    const cumulativeBalance = counts.reduce((acc, value, index) => {
      const lastBalance = acc.length > 0 ? acc[acc.length - 1] : 0;
      acc.push(lastBalance + value);
      return acc;
    }, []);
  const dots = tranferValues.map((item, index)=>({
    x: new Date(item.date).toISOString().slice(0,10),
    y: cumulativeBalance[index]
  }))

  console.log(dots)

//   console.log("dates:", dates);
//   console.log("names:", names);
//   console.log("counts:", counts);
//   console.log("cumulativeBalance:", cumulativeBalance);
//   console.log("categories:", categories);

  const data = {
    datasets: [
      {
        label: "Баланс",
        data: dots, // Ось Y (накопительный баланс)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        lineTension: 0.4
      },
    ],
  };

  // Настройки графика
  const options = {
    responsive: true,
    scales: {
        x:{
            display: false
        }
      },
      
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Накопительный баланс по датам",
      },
    },
    
  };

  return <Line data={data} options={options} />;
};

export default CumulativePlot;
