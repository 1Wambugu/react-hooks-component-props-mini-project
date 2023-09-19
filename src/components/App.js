import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import articleData from '../data/blog';

function App() {
  return (
    <div>
      <Header blogName="Martin Wambugu" />
      <About
        imageSrc={articleData.image} // Use the image property from articleData
        aboutText="I'm Wambugu martin, a skilled React programmer with a passion for crafting dynamic web experiences. My journey began with a curiosity for turning concepts into elegant, interactive interfaces. With a strong foundation in React, I've honed my skills in building components, optimizing performance, and embracing best practices. My dedication to continuous learning and problem-solving keeps me at the forefront of this ever-evolving field. Let's collaborate to bring your ideas to life with the power of React!"
      />
      <ArticleList articles={articleData.posts} />
    </div>
  );
}

export default App;

