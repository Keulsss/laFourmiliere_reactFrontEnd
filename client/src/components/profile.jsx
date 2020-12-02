import React, { Component } from "react";
import { Link } from "react-router-dom"
import * as userService from "../services/userService"
import image from "../images/demo/user-2.jpg";

class Profile extends Component {
  state = { user: [] };

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const { data: user } = await userService.getUser(userId);

    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-light">
          <div className="container">
            <div className="row justify-content-center align-items-end vh-40">
              <div className="col col-md-10 col-lg-8">
                <div className="row align-items-center">
                  <div className="col-4 col-lg-3">
                    <img
                      className="mr-3 avatar avatar-xl rounded"
                      src={image}
                      alt="Generic placeholder"
                    />
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h2 className="mb-0">
                          <b>James</b> Doe
                        </h2>
                        <span className="text-muted">
                          Senior Visual Designer
                        </span>
                      </div>
                      <div className="col-md-4 text-left text-md-right">
                        <a
                          type="button"
                          className="btn btn-rounded btn-ico btn-white"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Proposer un évènement"
                          href="/events/create"
                        >
                          <i className="icon-plus2 fs-20"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-2 fs-20 font-weight-normal">
                      Mes évenements
                    </h5>
                    <p>Vous n'avez aucun événement créé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container bg-light">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-2 fs-20 font-weight-normal">
                      Informations générales
                    </h5>
                    <form>
                      <div className="form-row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="firstName">Prénom</label>
                            <input
                              type="email"
                              className="form-control"
                              id="firstName"
                              aria-describedby="firstName"
                              placeholder="John"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="secondName">Nom</label>
                            <input
                              type="email"
                              className="form-control"
                              id="secondName"
                              aria-describedby="secondName"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="userMail">Adresse électronique</label>
                            <input
                              type="email"
                              className="form-control"
                              id="userMail"
                              aria-describedby="userMail"
                              placeholder="johndoe@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row mt-1 mb-3 align-items-center">
                        <div className="col">
                          <button className="btn btn-secondary">
                            Sauvegarder les changements
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Profile;
