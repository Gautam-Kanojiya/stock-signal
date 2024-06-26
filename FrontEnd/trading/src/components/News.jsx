const newsData = [
  // Corporate Actions
  { id: 1, category: 'corporate actions', company: 'Apple Inc.', exDate: '2024-08-01', actionName: 'Stock Split', content: 'Apple Inc. announces a 4-for-1 stock split' },
  { id: 2, category: 'corporate actions', company: 'Amazon.com Inc.', exDate: '2024-08-05', actionName: 'Merger', content: 'Amazon.com Inc. announces merger with Whole Foods' },
  { id: 3, category: 'corporate actions', company: 'Microsoft Corporation', exDate: '2024-08-10', actionName: 'Acquisition', content: 'Microsoft Corporation to acquire GitHub' },
  { id: 4, category: 'corporate actions', company: 'Tesla Inc.', exDate: '2024-08-15', actionName: 'Stock Buyback', content: 'Tesla Inc. announces stock buyback program' },
  { id: 5, category: 'corporate actions', company: 'Facebook Inc.', exDate: '2024-08-20', actionName: 'Rebranding', content: 'Facebook Inc. rebrands to Meta' },
  { id: 6, category: 'corporate actions', company: 'Google LLC', exDate: '2024-08-25', actionName: 'Corporate Restructuring', content: 'Google LLC restructures under Alphabet Inc.' },
  { id: 7, category: 'corporate actions', company: 'Netflix Inc.', exDate: '2024-08-30', actionName: 'Stock Split', content: 'Netflix Inc. announces a 2-for-1 stock split' },
  { id: 8, category: 'corporate actions', company: 'Intel Corporation', exDate: '2024-09-01', actionName: 'Acquisition', content: 'Intel Corporation to acquire Mobileye' },
  { id: 9, category: 'corporate actions', company: 'IBM Corporation', exDate: '2024-09-05', actionName: 'Spin-Off', content: 'IBM Corporation announces spin-off of its managed infrastructure services business' },
  { id: 10, category: 'corporate actions', company: 'Salesforce.com Inc.', exDate: '2024-09-10', actionName: 'Acquisition', content: 'Salesforce.com Inc. to acquire Slack' },

  // Earnings
  { id: 11, category: 'earnings', company: 'Apple Inc.', announcedOn: '2024-07-30', content: 'Apple Inc. reports Q2 earnings with a 10% increase in revenue' },
  { id: 12, category: 'earnings', company: 'Amazon.com Inc.', announcedOn: '2024-07-31', content: 'Amazon.com Inc. reports Q2 earnings with a 20% increase in revenue' },
  { id: 13, category: 'earnings', company: 'Microsoft Corporation', announcedOn: '2024-08-01', content: 'Microsoft Corporation reports Q2 earnings with a 15% increase in revenue' },
  { id: 14, category: 'earnings', company: 'Tesla Inc.', announcedOn: '2024-08-02', content: 'Tesla Inc. reports Q2 earnings with a 25% increase in revenue' },
  { id: 15, category: 'earnings', company: 'Facebook Inc.', announcedOn: '2024-08-03', content: 'Facebook Inc. reports Q2 earnings with a 12% increase in revenue' },
  { id: 16, category: 'earnings', company: 'Google LLC', announcedOn: '2024-08-04', content: 'Google LLC reports Q2 earnings with a 18% increase in revenue' },
  { id: 17, category: 'earnings', company: 'Netflix Inc.', announcedOn: '2024-08-05', content: 'Netflix Inc. reports Q2 earnings with a 8% increase in revenue' },
  { id: 18, category: 'earnings', company: 'Intel Corporation', announcedOn: '2024-08-06', content: 'Intel Corporation reports Q2 earnings with a 5% increase in revenue' },
  { id: 19, category: 'earnings', company: 'IBM Corporation', announcedOn: '2024-08-07', content: 'IBM Corporation reports Q2 earnings with a 7% increase in revenue' },
  { id: 20, category: 'earnings', company: 'Salesforce.com Inc.', announcedOn: '2024-08-08', content: 'Salesforce.com Inc. reports Q2 earnings with a 22% increase in revenue' },

  // Dividends
  { id: 21, category: 'dividends', company: 'Apple Inc.', exDate: '2024-07-01', content: 'Apple Inc. declares a dividend of $0.82 per share' },
  { id: 22, category: 'dividends', company: 'Amazon.com Inc.', exDate: '2024-07-02', content: 'Amazon.com Inc. declares a dividend of $0.75 per share' },
  { id: 23, category: 'dividends', company: 'Microsoft Corporation', exDate: '2024-07-03', content: 'Microsoft Corporation declares a dividend of $0.62 per share' },
  { id: 24, category: 'dividends', company: 'Tesla Inc.', exDate: '2024-07-04', content: 'Tesla Inc. declares a dividend of $0.85 per share' },
  { id: 25, category: 'dividends', company: 'Facebook Inc.', exDate: '2024-07-05', content: 'Facebook Inc. declares a dividend of $0.50 per share' },
  { id: 26, category: 'dividends', company: 'Google LLC', exDate: '2024-07-06', content: 'Google LLC declares a dividend of $0.90 per share' },
  { id: 27, category: 'dividends', company: 'Netflix Inc.', exDate: '2024-07-07', content: 'Netflix Inc. declares a dividend of $0.68 per share' },
  { id: 28, category: 'dividends', company: 'Intel Corporation', exDate: '2024-07-08', content: 'Intel Corporation declares a dividend of $0.55 per share' },
  { id: 29, category: 'dividends', company: 'IBM Corporation', exDate: '2024-07-09', content: 'IBM Corporation declares a dividend of $0.65 per share' },
  { id: 30, category: 'dividends', company: 'Salesforce.com Inc.', exDate: '2024-07-10', content: 'Salesforce.com Inc. declares a dividend of $0.45 per share' },

  // General News
  { id: 31, category: 'news', title: 'Market trends and analysis', content: 'A detailed analysis of the recent trends in the stock market' },
  { id: 32, category: 'news', title: 'Economic outlook', content: 'An overview of the economic outlook for the next quarter' },
  { id: 33, category: 'news', title: 'Federal Reserve updates', content: 'Latest updates from the Federal Reserve' },
  { id: 34, category: 'news', title: 'Tech stocks surge', content: 'Tech stocks surge to new highs amidst market optimism' },
  { id: 35, category: 'news', title: 'Oil prices fluctuate', content: 'Oil prices fluctuate due to geopolitical tensions' },
  { id: 36, category: 'news', title: 'Cryptocurrency market', content: 'Cryptocurrency market sees significant volatility' },
  { id: 37, category: 'news', title: 'Global trade', content: 'Global trade dynamics and their impact on the stock market' },
  { id: 38, category: 'news', title: 'Housing market trends', content: 'Latest trends in the housing market' },
  { id: 39, category: 'news', title: 'Inflation concerns', content: 'Inflation concerns and their effect on investor sentiment' },
  { id: 40, category: 'news', title: 'Stock market predictions', content: 'Predictions for the stock market in the coming months' },
];




import React, { useState, useEffect } from 'react';

// Mock news data
const newsData = [
  { id: 1, category: 'corporate actions', company: 'Company A', exDate: '2024-07-01', actionName: 'Merger', content: 'Company A announces merger with Company B' },
  { id: 2, category: 'earnings', company: 'Company B', announcedOn: '2024-06-30', content: 'Company B reports Q2 earnings with a 15% increase in revenue' },
  { id: 3, category: 'dividends', company: 'Company C', exDate: '2024-07-05', content: 'Company C declares a dividend of $1.00 per share' },
  { id: 4, category: 'news', title: 'Market trends and analysis', content: 'A detailed analysis of the recent trends in the stock market' },
  // Add more news items as needed
];

const categories = ['all', 'corporate actions', 'earnings', 'dividends', 'news'];

const NewsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredNews, setFilteredNews] = useState(newsData);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredNews(newsData);
    } else {
      setFilteredNews(newsData.filter(news => news.category === selectedCategory));
    }
  }, [selectedCategory]);

  const buttonClass = (category) => `
    ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-200 text-black'}
    rounded-full px-4 py-2 mr-2 mb-2 transition duration-300 ease-in-out
    hover:bg-black hover:text-white
  `;

  const renderNewsItem = (news) => {
    switch (news.category) {
      case 'earnings':
        return (
          <div key={news.id} className="bg-white border-b-2 border-gray-200 p-4 mb-4">
            <h3 className="text-lg font-bold">{news.company}</h3>
            <p className="text-sm text-gray-600">Announced on: {news.announcedOn}</p>
            <p>{news.content}</p>
          </div>
        );
      case 'corporate actions':
        return (
          <div key={news.id} className="bg-white border-b-2 border-gray-200 p-4 mb-4">
            <h3 className="text-lg font-bold">{news.company}</h3>
            <p className="text-sm text-gray-600">Ex Date: {news.exDate}</p>
            <p className="text-sm text-gray-600">Action: {news.actionName}</p>
            <p>{news.content}</p>
          </div>
        );
      case 'dividends':
        return (
          <div key={news.id} className="bg-white border-b-2 border-gray-200 p-4 mb-4">
            <h3 className="text-lg font-bold">{news.company}</h3>
            <p className="text-sm text-gray-600">Ex Date: {news.exDate}</p>
            <p>{news.content}</p>
          </div>
        );
      default:
        return (
          <div key={news.id} className="bg-white border-b-2 border-gray-200 p-4 mb-4">
            <h3 className="text-lg font-bold">{news.title}</h3>
            <p>{news.content}</p>
          </div>
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="border-gray-500 border-4 rounded-lg p-6 md:w-3/4 lg:w-1/2 bg-white shadow-lg">
        <h2 className="text-2xl mb-4">Market News</h2>
        <div className="flex flex-wrap mb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={buttonClass(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div>
          {filteredNews.length > 0 ? (
            filteredNews.map(news => renderNewsItem(news))
          ) : (
            <p className="text-gray-600">No news available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
