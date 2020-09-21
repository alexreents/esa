import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Economics Student Association</Link>
          </h2>
          <p>Santa Clara University</p>
        </div>
      </header>
      <p>
        {" "}
        <Link to="/about">About us</Link>, <Link to="/articles">articles</Link>,{" "}
        <Link to="/contact">get involved.</Link>{" "}
      </p>
      <p>
        <a href="http://eepurl.com/g_T2xf">
          <span>Sign up to recieve important club updates!</span>
        </a>
      </p>
    </article>
    <a className="image">
      <img className="dow" src="images/markets.jpg" alt=""></img>
    </a>
  </Main>
);

export default Index;

//<Link to="/initiatives">view site initiatives</Link>, or{" "}
