import React from 'react';
import logo from './logo.svg';
import './App.css';
import StockTable from './components/todaysStocks.jsx';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Stock Market Overview</h1>
      </header>
      <StockTable />
    </div>
  );
}

export default App;
