import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const formattedLabels = data.labels.map((timestamp) => {
    // Convert timestamps to a human-readable date format
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  });

  const trueVotesData = data.voted.map((vote) => (vote ? 1 : 0)); // Convert true votes to 1, false votes to 0
  const falseVotesData = data.voted.map((vote) => (vote ? 0 : 1)); // Convert true votes to 0, false votes to 1

  const chartData = {
    labels: formattedLabels, // X-axis: user registration dates in human-readable format
    datasets: [
      {
        label: 'True Votes',
        data: trueVotesData, // Y-axis: true votes (1 for true, 0 for false)
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'False Votes',
        data: falseVotesData, // Y-axis: false votes (1 for false, 0 for true)
        borderColor: 'rgba(255, 99, 132, 1)', // Red color for false votes
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear', // Use linear scale for Y-axis (assuming 1/0 values)
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
