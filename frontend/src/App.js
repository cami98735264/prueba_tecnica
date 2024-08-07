import './App.css';
import Layout from './layout/Layout.js';
import Article from './components/Article/Article.js';
import { useState, useEffect } from 'react';
import axiosInstance from './utils/requestsInstance/axiosInstance.js';



function App() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosInstance.get('/articles');
        setArticles(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchArticles();
  }, []);

  return (
    <Layout>
      {articles.length > 0 ? (
        <section id="articles">
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            author={article.author}
            description={article.description}
            imageUrl={article.urlToImage}
            redirectUrl={article.url}
            publishedAt={article.publishedAt}
          />
        ))}
      </section>
      ): (
        <h1 id='articles-error-container'>No articles available right now.</h1>
        )}
    </Layout>
  );
}

export default App;
