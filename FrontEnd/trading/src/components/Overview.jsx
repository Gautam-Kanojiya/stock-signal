import React from 'react';
import StockTable from '../components/todaysStocks.jsx'
const Overview = () => {
  return (
    <div>

      <h1 className="text-3xl font-bold">Overview Page</h1>
      <p>This is the overview page.</p>

      <StockTable />
    </div>
  );
}

export default Overview;
