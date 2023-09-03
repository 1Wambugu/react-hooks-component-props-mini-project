import React from 'react';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
          readingTime={article.readingTime}
        />
      ))}
    </main>
  );
}

export default ArticleList;

