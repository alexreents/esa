import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import url from "url";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.researchlink}>{data.title}</a>
        </h3>
        <time className="published">
          By <span>{data.subtitle}</span>
          <pre>{dayjs(data.date).format("MMMM DD, YYYY")}</pre>
        </time>
      </header>
      <div className="description">
        <p>{data.desc} </p>
        <a href={data.authorlink} className="image">
          <img src={`${BASE_PATH}/${data.image}`} alt="" />
        </a>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    researchlink: PropTypes.string.isRequired,
    authorlink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
