import React from "react";

const Date = props => {
  return (
    <a
      key={props}
      href="#"
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {props}
      <span className="badge">
        <i className="icon-chevron-right2"></i>
      </span>
    </a>
  );
};

export default Date;
