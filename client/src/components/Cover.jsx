import React from "react";
import FormEvent from "./FormEvent";

class Cover extends React.Component {
  render() {
    return (
      <>
        <section className="hero hero-with-header bg-primary text-white pattern">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <h1>Evènement du calenrier</h1>
                <FormEvent />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Cover;
