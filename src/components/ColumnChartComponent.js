import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ColumnChartComponent = () => {
  const data = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Annual Growth',
        data: [8, 9, 10, 7, 12],
        backgroundColor: '#aa00ff',
        borderColor: '#4a148c',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Years' } },
      y: { beginAtZero: true, title: { display: true, text: 'Growth (in %)' } },
    },
  };

  return(
    <div className='graph'>
      <h4 className='text'>Column Chart <FontAwesomeIcon icon={faChartBar} /></h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ColumnChartComponent;
