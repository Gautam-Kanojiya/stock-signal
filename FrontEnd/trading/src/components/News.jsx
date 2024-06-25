import React, { useState, useEffect } from 'react';

// Mock news data
const newsData = [
  { id: 1, category: 'corporate actions', title: 'Company A announces merger' },
  { id: 2, category: 'earnings', title: 'Company B reports Q2 earnings' },
  { id: 3, category: 'dividends', title: 'Company C declares dividend' },
  { id: 4, category: 'news', title: 'Market trends and analysis' },
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

  return (
    <div className="border-gray-500 border-4 rounded-lg p-6 md:w-3/4 lg:w-1/2 mx-auto mt-8">
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
          filteredNews.map(news => (
            <div key={news.id} className="bg-white border-b-2 border-gray-200 p-4 mb-4">
              <h3 className="text-lg">{news.title}</h3>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No news available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
