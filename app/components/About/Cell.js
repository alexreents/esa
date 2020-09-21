import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h1>{data.name}</h1>
        <h3>{data.role}</h3>
      </header>
      <div className="description">
        <a className="image">
          <img src={`/${data.image}`} alt="" />
        </a>
        <p>{data.desc} </p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
