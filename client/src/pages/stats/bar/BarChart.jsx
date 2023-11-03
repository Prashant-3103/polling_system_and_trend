import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  // Count the number of true and false votes at each date
  const voteCountByDate = {};

  data.labels.forEach((date, index) => {
    const vote = data.voted[index];
    if (date in voteCountByDate) {
      if (vote === "true") {
        voteCountByDate[date].trueVotes += 1;
      } else if (vote === "false") {
        voteCountByDate[date].falseVotes += 1;
      }
    } else {
      voteCountByDate[date] = {
        trueVotes: vote ? 1 : 0,
        falseVotes: vote ? 0 : 1,
      };
    }
  });

  const chartData = {
    labels: Object.keys(voteCountByDate), // X-axis: user registration dates
    datasets: [
      {
        label: 'True Votes',
        data: Object.values(voteCountByDate).map((item) => item.trueVotes), // Y-axis: true vote count at each date
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'False Votes',
        data: Object.values(voteCountByDate).map((item) => item.falseVotes), // Y-axis: false vote count at each date
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)', // Red color for false votes
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
