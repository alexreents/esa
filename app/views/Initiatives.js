import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

const Initiatives = () => (
  <Main>
    <Helmet title="Initiatives" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/initiatives">ESA Initiatives</Link>
          </h2>
        </div>
      </header>
      <div>
        <h2>
          <b>Meet Your Professors: Economic Research Presentation</b>
          <a
            title="Add to Calendar"
            class="addeventatc"
            data-id="xO5419044"
            href="https://www.addevent.com/event/xO5419044"
            target="_blank"
            rel="nofollow"
          >
            Add to Calendar
          </a>{" "}
          <script
            type="text/javascript"
            src="https://addevent.com/libs/atc/1.6.1/atc.min.js"
            async
            defer
          ></script>
        </h2>
        <h3>October 28th at 6pm</h3>
        <br></br>
        <p>
          SCU professors{" "}
          <a href="https://sites.google.com/view/vitocormun">Vito Cormun</a> and{" "}
          <a href="https://www.scu.edu/business/economics/faculty/wenxin-xie/">
            Victoria Wenxin Xie
          </a>{" "}
          will be presenting their latest economic research. This event will be
          a great opportunity to meet your professors and learn about their
          work. Students will be able to ask questions after their respective
          presentations!
        </p>
        <br></br>
        <p>
          Professor Cormun specializes in macroeconomics, international
          macroeconomics and finance. His research concerns the sources of
          business cycles in both open and closed economies. He shows how simple
          classifications and identifications of sources of business cycles can
          shed light on the connection between economic expansions and
          recessions, and on the nature of exchange rate fluctuations.
        </p>
        <br></br>
        <p>
          Professor Xie specializes in environmental economics, international
          trade and development economics. Her research focuses on understanding
          how climate change and other sources of environmental shocks affect
          the labor market, firms, and cities in developing countries and their
          impact on the global production process.
        </p>
        <br></br>
      </div>
    </article>
  </Main>
);

export default Initiatives;
