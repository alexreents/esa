import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

const Initiatives = () => (
  <Main>
    <Helmet title="Initiatives" />
    <article className="post" id="initiatives">
      <header>
        <div className="title">
          <h2>
            <Link to="/initiatives">Initiatives</Link>
          </h2>
        </div>
      </header>
    </article>
  </Main>
);

export default Initiatives;
