import React from "react";
import FormEvent from "./FormEvent";

class Cover extends React.Component {
  render() {
    return (
      <>
        <section className="hero hero-with-header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <span className="eyebrow mb-1 text-primary">
                  Prêt pour l'aventure ?
                </span>
                <h1 className="display-2">
                  <b>Implique toi</b> dans les meilleures assos de Paris.
                </h1>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <div className="row gutter-1">
                  <div className="form-group col-md-7">
                    <input
                      type="email"
                      className="form-control-lg form-control"
                      id="inputEmail4"
                      placeholder="Rechercher tout"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <a href="" className="btn btn-lg btn-outline-primary">
                      Rechercher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Cover;
