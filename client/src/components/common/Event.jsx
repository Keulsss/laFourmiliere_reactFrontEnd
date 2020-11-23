import React from "react";
const Event = ({ match }) => {
  return (
    <div className="container">
      <h1>{match.params.title}</h1>
    </div>
  );
};

export default Event;
