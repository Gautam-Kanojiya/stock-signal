// src/StockTableToggle.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockTableToggle = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [showGainers, setShowGainers] = useState(true);

  useEffect(() => {
    // Mock API calls to fetch top gainers and losers
    const fetchStockData = async () => {
      try {
        // Replace with actual API calls
        const gainersData = [
          { name:'Apple', symbol: 'AAPL', price: 150, change: 2.5 },
          { name:'Microsoft', symbol: 'MSFT', price: 280, change: 3.1 },
        ];
        const losersData = [
          { name:'Tesla', symbol: 'TSLA', price: 650, change: -4.2 },
          { name:'Netflix', symbol: 'NFLX', price: 500, change: -2.8 },
        ];

        // Simulate API call delay
        setTimeout(() => {
          setGainers(gainersData);
          setLosers(losersData);
        }, 1000);
      } catch (error) {
        console.error('Error fetching stock data', error);
      }
    };

    fetchStockData();
  }, []);

  const toggleTable = () => {
    setShowGainers(!showGainers);
  };

  const displayedData = showGainers ? gainers : losers;

  return (
    <div className="container mx-auto p-4 w-1/2">
      <div className="bg-white rounded-lg shadow-md p-6 ">
        <div className="text-left mb-4">Today's Stocks</div>
        <div className="flex  mb-4 ">
          <div className="flex justify-left">
            <button
              className={`px-4 py-2 mx-2 rounded-full border border-red-500   ${showGainers ? 'bg-red-500 text-white' : 'bg-transparent text-red-500 hover:bg-red-500 hover:text-white'}`}
              onClick={() => setShowGainers(true)}
            >
              Top Gainers
            </button>
          </div>

          <div className="flex ">
            <button
              className={`px-4 py-2 mx-2 rounded-full border border-green-500  ${!showGainers ? 'bg-green-500 text-white' : 'bg-transparent text-green-500 hover:bg-green-500 hover:text-white'}`}
              onClick={() => setShowGainers(false)}
            >
              Top Losers
            </button>
          </div>
        </div>

        <table className="min-w-full bg-white  border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Stocks</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((stock, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="px-4 py-2 border-b">
                    <div className="flex justify-left">
                        {stock.name}
                    </div>
                    <div className="flex justify-left text-gray-400">
                        {stock.symbol}
                    </div>
                </td>
                <td className="px-4 py-2 border-b align-top">{stock.price}</td>
                <td className="px-4 py-2 border-b align-top">
                  <span className={`flex items-center  ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.change >= 0 ? '▲ +' : '▼ -'}
                    {Math.abs(stock.change)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTableToggle;



npm install socket.io-client


// src/StockTableToggle.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockTableToggle = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [mostActive, setMostActive] = useState([]);
  const [view, setView] = useState('gainers');

  useEffect(() => {
    // Mock API calls to fetch top gainers, losers, and most active stocks
    const fetchStockData = async () => {
      try {
        // Replace with actual API calls
        const gainersData = [
          { symbol: 'AAPL', price: 150, change: 2.5 },
          { symbol: 'MSFT', price: 280, change: 3.1 },
        ];
        const losersData = [
          { symbol: 'TSLA', price: 650, change: -4.2 },
          { symbol: 'NFLX', price: 500, change: -2.8 },
        ];
        const mostActiveData = [
          { symbol: 'AMZN', price: 3500, change: 1.2 },
          { symbol: 'GOOGL', price: 2700, change: 0.8 },
        ];

        // Simulate API call delay
        setTimeout(() => {
          setGainers(gainersData);
          setLosers(losersData);
          setMostActive(mostActiveData);
        }, 1000);
      } catch (error) {
        console.error('Error fetching stock data', error);
      }
    };

    fetchStockData();
  }, []);

  const displayedData = view === 'gainers' ? gainers : view === 'losers' ? losers : mostActive;

  return (
    <div className="container mx-auto p-4 w-1/2">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Today's Stocks</h2>
        <div className="flex justify-center mb-4 space-x-4">
          <button
            className={`px-4 py-2 rounded-lg border border-red-500 transition-colors duration-200 ${
              view === 'gainers' ? 'bg-red-500 text-white' : 'bg-transparent text-red-500 hover:bg-red-500 hover:text-white'
            }`}
            onClick={() => setView('gainers')}
          >
            Top Gainers
          </button>
          <button
            className={`px-4 py-2 rounded-lg border border-green-500 transition-colors duration-200 ${
              view === 'losers' ? 'bg-green-500 text-white' : 'bg-transparent text-green-500 hover:bg-green-500 hover:text-white'
            }`}
            onClick={() => setView('losers')}
          >
            Top Losers
          </button>
          <button
            className={`px-4 py-2 rounded-lg border border-blue-500 transition-colors duration-200 ${
              view === 'mostActive' ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => setView('mostActive')}
          >
            Most Active
          </button>
        </div>

        <table className="min-w-full bg-white border border-gray-200 rounded-lg p-4">
          <thead>
            <tr>
              <th className="px-4 py-2 border text-left">Symbol</th>
              <th className="px-4 py-2 border text-left">Price</th>
              <th className="px-4 py-2 border text-left">Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((stock, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="px-4 py-2 border text-left">{stock.symbol}</td>
                <td className="px-4 py-2 border text-left">{stock.price}</td>
                <td className="px-4 py-2 border text-left">
                  <span className={`flex items-center ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.change >= 0 ? '▲' : '▼'}
                    {Math.abs(stock.change)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTableToggle;

