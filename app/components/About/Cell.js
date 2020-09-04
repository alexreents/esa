import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <div className="description">
        <a className="member-image">
          <img src={`${BASE_PATH}/${data.image}`} alt="" />
        </a>
        <header>
          <h1>{data.name}</h1>
          <h3>{data.role}</h3>
        </header>
        <div className="bio-description">
          <p>{data.desc} </p>
        </div>
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
