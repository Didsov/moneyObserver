import React from "react";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const CategoryDonPlus = ({ transferList, categoryList }) => {
  const tranferValues = [...transferList]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .reverse();

  const groupedData = tranferValues.reduce((acc, item) => {
    if (!acc[item.category_id]) acc[item.category_id] = 0;
    acc[item.category_id] += item.count >= 0 ? parseInt(item.count) : 0;
    return acc;
  }, {});

  const labels = [];
  const values = [];
  const backgroundColor = [];

  categoryList.forEach((category) => {
    if (groupedData[category.id]) {
      // Проверка наличия дохода в категории
      labels.push(category.name);
      values.push(groupedData[category.id]);
      backgroundColor.push(category.color);
    }
  });


  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  // Настройки графика
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Доходы по категориям",
      },
    },
  };
  return <Doughnut  data={data} options={options} />;
};

export default CategoryDonPlus;
