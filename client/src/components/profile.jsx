import React, { Component, useState } from "react";
import FormEvent from "./FormEvent";
import http from "../services/httpService";
import { usersUrl } from "../config.json";

class Profile extends Component {
  state = { user: [] };

  // async componentDidMount() {
  //   const user_id = this.props.match.params.id;
  //   const { data: user } = await http.get(`${usersUrl}/${user_id}`);

  //   this.setState({ user });
  // }

  render() {
    return (
      <React.Fragment>
        <section className="bg-light">
          <div className="container">
            <div className="row justify-content-center align-items-end vh-30 mb-5">
              <div className="col col-md-10 col-lg-8">
                <div className="row align-items-center">
                  <div className="col-4 col-lg-3">
                    <img
                      className="mr-3 avatar avatar-xl rounded"
                      src="../images/demo/user-2.jpg"
                      alt="Generic placeholder image"
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
                        <button
                          type="button"
                          className="btn btn-rounded btn-ico btn-white"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Proposer un évènement"
                        >
                          <i className="icon-plus2 fs-20"></i>
                        </button>
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
                    <form>
                      <div className="form-row">
                        <div className="col">
                          <div className="form-group">
                            <label for="firstName">Prénom</label>
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
                            <label for="secondName">Nom</label>
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
                            <label for="userMail">Adresse électronique</label>
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
                      <div className="form-row mt-1 align-items-center">
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

          <div className="container bg-light my-5">
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
                            <label for="firstName">Prénom</label>
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
                            <label for="secondName">Nom</label>
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
                            <label for="userMail">Adresse électronique</label>
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
                      <div className="form-row mt-1 align-items-center">
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