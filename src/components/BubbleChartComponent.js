import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const BubbleChartComponent = () => {
  const data = {
    datasets: [
      {
        label: 'Bubbles',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 25, r: 10 },
          { x: 20, y: 10, r: 20 },
          { x: 25, y: 15, r: 25 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'X-axis' } },
      y: { title: { display: true, text: 'Y-axis' } },
    },
  };

  return(
    <div className='graph'>
      <h4 className='text'>Line graph <FontAwesomeIcon icon={faCircle} /></h4>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChartComponent;
