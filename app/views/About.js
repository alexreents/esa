import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";

import Main from "../layouts/Main";

import Cell from "../components/About/Cell";

import markdown from "../data/about.md";
import data from "../data/about";

const count = markdown
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ""))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About ESA</Link>
          </h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>

    <article className="post" id="team">
      <header>
        <div className="title">
          <h2>Meet the Team!</h2>
        </div>
      </header>
      {data.map((member) => (
        <Cell data={member} key={member.name} />
      ))}
    </article>
  </Main>
);

export default About;
