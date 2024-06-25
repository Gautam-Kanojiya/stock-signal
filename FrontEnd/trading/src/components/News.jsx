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

  return (
    <div>
      <h2>Market News</h2>
      <div>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{ margin: '5px', padding: '10px', background: selectedCategory === category ? 'lightgray' : 'white' }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div>
        {filteredNews.length > 0 ? (
          filteredNews.map(news => (
            <div key={news.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <h3>{news.title}</h3>
            </div>
          ))
        ) : (
          <p>No news available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
