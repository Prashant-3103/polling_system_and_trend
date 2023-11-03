import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const voteCountByDate = {};

  data.labels.forEach((date, index) => {
    const vote = data.voted[index];
    if (date in voteCountByDate) {
      if (vote) {
        voteCountByDate[date].trueVotes += 1;
      } else {
        voteCountByDate[date].falseVotes += 1;
      }
    } else {
      voteCountByDate[date] = {
        trueVotes: vote ? 1 : 0,
        falseVotes: vote ? 0 : 1,
      };
    }
  });

  const formattedLabels = Object.keys(voteCountByDate).map((timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  });

  const chartData = {
    labels: formattedLabels, // X-axis: user registration dates in human-readable format
    datasets: [
      {
        label: 'True Votes',
        data: Object.values(voteCountByDate).map((item) => item.trueVotes), // Y-axis: true vote count at each date
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color with opacity
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
      {
        label: 'False Votes',
        data: Object.values(voteCountByDate).map((item) => item.falseVotes), // Y-axis: false vote count at each date
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Bar color with opacity for false votes
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
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
