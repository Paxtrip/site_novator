import React, { useEffect, useState } from 'react';
import { strapiAPI } from '@/lib/strapi';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await strapiAPI.getNews();
        setNews(response.data.data.map(item => item.attributes));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h1>Welcome to the site</h1>
      <h2>Latest News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <div>{item.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
