import React from "react";
import { Link } from "react-router-dom";

const City = ({ id, name }) => {
  return (
    <article className="City">
      <div className="img-container"></div>
      <div className="city-footer">
        <h3>{name}</h3>
        <Link to={`/city/${id}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default City;
