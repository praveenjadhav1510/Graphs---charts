import React from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineGraphComponent = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
    datasets: [
      {
        label: 'Website Traffic',
        data: [500, 600, 800, 700, 900, 1000, 950, 1200, 1300, 1100],
        borderColor: '#5499c7',
        backgroundColor: '#a9cce3',
        tension: 0.4,
        fill: false,
        borderWidth: 3,
        pointRadius: 5,
      },
      {
        label: 'Website logins',
        data: [340, 390, 200, 370, 490, 830, 540, 1010, 1080, 800],
        borderColor: '#76d7c4',
        backgroundColor: '#17a589',
        tension: 0.4,
        fill: false,
        borderWidth: 3,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Weeks' } },
      y: { beginAtZero: true, title: { display: true, text: 'Visitors' } },
    },
  };

  return(
    <div className='graph'>
      <h4 className='text'>Line graph <FontAwesomeIcon icon={faChartLine} /></h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraphComponent;
