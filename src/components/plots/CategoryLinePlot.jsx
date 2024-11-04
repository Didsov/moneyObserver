import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const CategoryLinePlot = ({ transferList, categoryList }) => {
    const tranferValues = [...transferList].sort((a,b)=> new Date(b.date)-new Date(a.date) ).reverse()
    
    const groupedData = tranferValues.reduce((acc, item) => {
      if (!acc[item.category_id]) acc[item.category_id] = [];
      acc[item.category_id].push({ x: new Date(item.date).toISOString().slice(0,10), y: item.count });
      return acc;
    }, {});
    
    // Создать массив datasets
    const datasets = categoryList.map(category => {
      return {
        label: category.name,
        borderColor: category.color,
        backgroundColor: category.color,
        data: groupedData[category.id] || [] // Если данных по категории нет, подставляем пустой массив
      };
    });
    
    console.log(datasets);
   
   

    const dots = [{x:1, y:1}]
//   console.log("dates:", dates);
//   console.log("names:", names);
//   console.log("counts:", counts);
//   console.log("cumulativeBalance:", cumulativeBalance);
//   console.log("categories:", categories);

  const data = {
    datasets: datasets
  };

  // Настройки графика
  const options = {
    responsive: true,
    scales: {
        x:{
            display: true
        }
      },
      
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Операции по категориям",
      },
    },
    
  };
  return <Bar data={data} options={options} />;
};

export default CategoryLinePlot;
