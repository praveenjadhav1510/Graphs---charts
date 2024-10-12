import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 60, 40, 55, 70, 65, 50, 75, 80],
        backgroundColor: ['#d7bde2','#884ea0'],
        borderColor: '#f4ecf7',
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Months' } },
      y: { beginAtZero: true, title: { display: true, text: 'Sales (in $1000)' } },
    },
  };

  return(
    <div className='graph'>
      <h4 className='text'>Bar Chart <FontAwesomeIcon icon={faChartSimple} /></h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartComponent;
