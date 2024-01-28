import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

function MulcheraLiteracy() {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Total', 'Male', 'Female', 'Children'],
          datasets: [{
            label: 'Mulchera Total Literacy Rate',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              type: 'category',
              labels: ['Total', 'Male', 'Female', 'Children'],
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setChart(newChart);

      return () => {
        newChart.destroy();
      };
    }
  }, []);

  useEffect(() => {
    // Update the chart when the screen size changes
    const handleResize = () => {
      if (chart) {
        chart.resize();
        chart.update();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chart]);

  return (
    <div className='col-md-6 col-lg-6 p-1'>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}

export default MulcheraLiteracy;