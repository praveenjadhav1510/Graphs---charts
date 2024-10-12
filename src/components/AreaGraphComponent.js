import React from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const AreaGraphComponent = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 250, 300, 350],
        borderColor: '#f4d03f',
        backgroundColor: '#f7dc6f',
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
      {
        label: 'Revenue',
        data: [100, 150, 200, 250],
        borderColor: '#f39c12',
        backgroundColor: '#f5b041',
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Quarters' } },
      y: { beginAtZero: true, title: { display: true, text: 'Revenue (in $1000)' } },
    },
  };

  return(
    <div className='graph'>
      <h4 className='text'>Area graph <FontAwesomeIcon icon={faChartArea} /></h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaGraphComponent;
