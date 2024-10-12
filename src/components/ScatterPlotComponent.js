import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ScatterPlotComponent = () => {
  const data = {
    datasets: [
      {
        label: 'Random Points',
        data: [
          { x: 5, y: 10 },
          { x: 10, y: 15 },
          { x: 15, y: 5 },
          { x: 20, y: 20 },
          { x: 25, y: 10 },
          { x: 30, y: 25 },
          { x: 35, y: 30 },
          { x: 8, y: 15 },
          { x: 10, y: 17 },
          { x: 15, y: 19 },
          { x: 10, y: 6 },
          { x: 15, y: 9 },
          { x: 18, y: 15 },
          { x: 35, y: 20 },
        ],
        borderColor: '#7b1fa2',
        backgroundColor: '#ba68c8',
        pointRadius: 5,
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
      <h4 className='text'>Scatter Plot <FontAwesomeIcon icon={faCircleDot} /></h4>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterPlotComponent;
