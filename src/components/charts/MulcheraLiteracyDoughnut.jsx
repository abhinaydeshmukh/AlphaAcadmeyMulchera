import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

function MulcheraLiteracyDoughnut() {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total', 'Male', 'Female'],
            datasets: [{
            label: 'Mulchera Literacy Rate',
            data: [75.55, 84.74, 65.82],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',              
            ],
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            x: {
              type: 'category',
              labels: ['Total ', 'Male', 'Female'],
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
    <div className='col-md-6 col-lg-3 p-1'>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}

export default MulcheraLiteracyDoughnut;
