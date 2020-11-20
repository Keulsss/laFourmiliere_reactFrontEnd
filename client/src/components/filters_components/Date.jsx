import React from "react";

const Date = ({ date }) => {
  return (
    <a
      href="#"
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {date}
      <span className="badge">
        <i className="icon-chevron-right2"></i>
      </span>
    </a>
  );
};

export default Date;
