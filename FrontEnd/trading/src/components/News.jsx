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
