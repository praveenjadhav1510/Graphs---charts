import React from 'react';
import { Pie } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

// Registering the ArcElement
ChartJS.register(Tooltip, Legend, ArcElement);

const PieChartComponent = () => {
  const data = {
    labels: ['Apples', 'Bananas', 'Cherries', 'Dates', 'Elderberries'],
    datasets: [
      {
        data: [25, 20, 15, 30, 10],
        backgroundColor: ['red', 'yellow', 'pink', 'brown', 'purple'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return(
    <div className='graph'>
      <h4 className='text'>Pie Chart <FontAwesomeIcon icon={faChartPie} /></h4>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
