import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList(props) {
  const { articles } = props;

  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    })
  ),
};

export default ArticleList;
