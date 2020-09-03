import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Articles/Cell";
import data from "../data/articles";

const Articles = () => (
  <Main>
    <Helmet title="Articles" />
    <article className="post" id="articles">
      <header>
        <div className="title">
          <h2>
            <Link to="/articles">In the News</Link>
          </h2>
          <p>
            Interested in real-world applications of your economics course?
            <br></br>
            Below, we've collected some articles that we&apos;ve found
            interesting, timely, and applicable!
          </p>
          <p>
            <i>
              (Side Note: SCU offers students a FREE membership to the{" "}
              <a href="https://wsj.com/SantaClara">Wall Street Journal</a>)
            </i>
          </p>
        </div>
      </header>
      {data.map((article) => (
        <Cell data={article} key={article.title} />
      ))}
    </article>
  </Main>
);

export default Articles;
