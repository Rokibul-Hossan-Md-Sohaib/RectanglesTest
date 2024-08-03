import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import NewsList from './NewsList ';

const API_URL = 'https://smj.shortspaper.com/api/newses';

const SingleNews = () => {
  const [newsData, setNewsData] = useState([]);
  console.log(newsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ audience_login: false }),
        });
        const data = await response.json();
        if (data.success) {
          setNewsData(data.newses);
        } else {
          setError('Failed to fetch news');
        }
      } catch (err) {
        setError('An error occurred while fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={newsData}
      renderItem={({ item }) => <NewsList item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default SingleNews;
