import React, {useEffect, useState} from "react";
import ArticleComponent from './ArticuleComponent';
import EstructureCard from './EstructureCard';
import './content.scss';

const Content = () => {
    const [articles, setArticles] = useState(null);

    useEffect(()=>{
        setTimeout(async () => {
            const res = await fetch("https://dev.to/api/articles");
            const data = await res.json();

            setArticles(data);
            console.log('data:', data);
    }, 2000);
}, []);

  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <a href="/#">Feed</a>
          <a href="/#">Week</a>
          <a href="/#">Month</a>
          <a href="/#">Infinity</a>
          <a href="/#">Latest</a>
        </nav>
      </header>
      <div className="articles">
        {articles &&
          articles.map((article, id) => {
            return <ArticleComponent key={id} data={article} />;
          })}

        {!articles && [1, 2, 3, 4, 5].map((a) => <EstructureCard key={a} />)}
      </div>
    </main>
  );
};

export default Content;