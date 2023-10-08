import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function BarChart() {
  const [results, setResults] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch data from your backend API here
    axios.get('http://localhost:5001/api/results')
      .then((response) => {
        setResults(response.data);

        // Process data to calculate counts
        const counts = [0, 0, 0, 0, 0]; // Initialize counts for each score
        response.data.forEach((result) => {
          // Assuming scores are between 0 and 4
          counts[result.score] += 1;
        });

        // Create chart data
        setChartData({
          labels: ['0', '1', '2', '3', '4'],
          datasets: [
            {
              label: 'Result Counts',
              data: counts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="barchart-container">
      <h2 className="barchart-heading">Result Counts Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Count',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Score',
              },
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
