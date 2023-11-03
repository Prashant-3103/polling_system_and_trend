import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const formattedLabels = data.labels.map((timestamp) => {
    // Convert timestamps to a human-readable date format
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  });

  const chartData = {
    labels: formattedLabels, // X-axis: user registration dates in human-readable format
    datasets: [
      {
        label: 'Voting polls',
        data: data.voted, // Y-axis: user voting choices (true/false)
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color with opacity
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear', // Use linear scale for Y-axis (assuming true/false values)
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
