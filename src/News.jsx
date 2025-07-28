import React, { useState, useEffect } from 'react';
import { Loader, AlertTriangle, ExternalLink } from 'lucide-react';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '0d3b59ecba2b4fcfbb5f3567d49897d4';

    const apiUrl = `https://newsapi.org/v2/everything?q=Dholera&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

    const fetchNews = async () => {
      if (apiKey === 'YOUR_NEWSAPI_KEY') {
        setError('Please add your NewsAPI.org key to fetch news.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles.slice(0, 6));
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch news:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center text-gray-500 p-8">
          <Loader className="animate-spin h-8 w-8 mb-2" />
          <span>Fetching latest news...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center text-red-600 bg-red-50 p-8 rounded-lg">
          <AlertTriangle className="h-8 w-8 mb-2" />
          <span className="font-semibold">Error:</span>
          <span>{error}</span>
        </div>
      );
    }

    if (articles.length === 0) {
      return <p className="text-center text-gray-500 p-8">No recent news articles found for Dholera SIR.</p>
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition-shadow">
            <img
              src={article.urlToImage || 'https://placehold.co/600x400/E2E8F0/4A5568?text=Image+Not+Found'}
              alt={article.title}
              className="rounded-md h-40 w-full object-cover mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/E2E8F0/4A5568?text=Image+Not+Found';
              }}
            />
            <h4 className="font-bold text-lg flex-grow mb-2">{article.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm font-semibold text-green-700 hover:text-green-800 inline-flex items-center"
            >
              Read More <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="p-6 rounded-lg shadow">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Latest News on Dholera SIR</h2>
      {renderContent()}
    </section>
  );
};

export default NewsSection;