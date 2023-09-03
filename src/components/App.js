import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  const { blogName, articles } = blogData;

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;

