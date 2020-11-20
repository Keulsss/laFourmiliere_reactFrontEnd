import React from "react";

class Cover extends React.Component {
  render() {
    return (
      <div className="row gutter-1 align-items-center">
        <div className="form-group col-md-10">
          <input
            type="email"
            className="form-control-md form-control"
            id="inputEmail4"
            placeholder="Rechercher tout"
          />
        </div>
        <div className="form-group col-md-2">
          <button className="btn btn-sm btn-outline-primary">Rechercher</button>
        </div>
      </div>
    );
  }
}
export default Cover;
