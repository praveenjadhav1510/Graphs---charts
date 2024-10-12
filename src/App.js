import React from 'react';
import './App.css'
import BarChartComponent from './components/BarChartComponent';
import LineGraphComponent from './components/LineGraphComponent';
import AreaGraphComponent from './components/AreaGraphComponent';
import ScatterPlotComponent from './components/ScatterPlotComponent';
import PieChartComponent from './components/PieChartComponent';
import ColumnChartComponent from './components/ColumnChartComponent';
import BubbleChartComponent from './components/BubbleChartComponent';

const App = () => {
  return (
    <div className="App">
      <h1>Chart.js with React</h1>
      <div className="chart-container">
        <BarChartComponent />
        <LineGraphComponent />
        <AreaGraphComponent />
        <ScatterPlotComponent />
        <ColumnChartComponent />
        <BubbleChartComponent />
        <PieChartComponent />

      </div>
    </div>
  );
};

export default App;
