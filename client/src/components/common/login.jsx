import React, { Component } from "react";
import image from "../../images/demo/travel/travel-5.jpg";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="viewport">
          <div
            className="image image-overlay image-blur"
            style={{
              backgroundImage: `url(${image})`
            }}
          ></div>
          <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
              <div className="col-md-6 col-lg-5">
                <div
                  className="accordion-group accordion-group-portal"
                  data-accordion-group
                >
                  <div className="accordion open" data-accordion>
                    <div className="accordion-control" data-control>
                      <h5>Connectez-vous</h5>
                    </div>
                    <div className="accordion-content" data-content>
                      <div className="accordion-content-wrapper">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Adresse électronique
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="name@example.com"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput2">
                              Mot de passe
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleFormControlInput2"
                            />
                          </div>
                          <a href="" className="btn btn-primary btn-block">
                            Se connecter
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="accordion" data-accordion>
                    <div className="accordion-control" data-control>
                      <h5>Inscrivez-vous</h5>
                    </div>
                    <div className="accordion-content" data-content>
                      <div className="accordion-content-wrapper">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput3">
                              Adresse électronique
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput3"
                              placeholder="name@example.com"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput4">
                              Mot de passe
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleFormControlInput4"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput5">
                              Confirmer le mot de passe
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleFormControlInput5"
                            />
                          </div>
                          <a href="" className="btn btn-primary btn-block">
                            Ouvrir un compte
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
