import React, { Component } from "react";
import image from "../../images/demo/travel/travel-5.jpg";
import Joi from "joi";
import Input from "./input";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
      repeat_password: "",
      first_name: "",
      last_name: ""
    },
    user: {}
  };

  schema = {
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "fr", "net"] }
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
    access_token: [Joi.string(), Joi.number()],
    first_name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    last_name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
  };

  handleChange = () => {};

  render() {
    const { account, user } = this.state;
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
                          <Input
                            name="email"
                            label="Adresse électronique"
                            type="email"
                            placeholder=""
                            value={user.email}
                            onChange={this.handleChange}
                          />
                          <Input
                            name="password"
                            label="Mot de passe"
                            type="password"
                            placeholder=""
                            value={user.password}
                            onChange={this.handleChange}
                          />
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
                          <div className="row mb-0">
                            <div className="col-md-6">
                              <Input
                                name="first_name"
                                label="Prénom"
                                type="text"
                                placeholder=""
                                value={account.first_name}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <Input
                                name="last_name"
                                label="Nom"
                                type="text"
                                placeholder=""
                                value={account.last_name}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <Input
                            name="email"
                            label="Adresse électronique"
                            type="text"
                            placeholder=""
                            value={account.email}
                            onChange={this.handleChange}
                          />
                          <Input
                            name="password"
                            label="Mot de passe"
                            type="password"
                            placeholder=""
                            value={account.password}
                            onChange={this.handleChange}
                          />
                          <Input
                            name="repeat_password"
                            label="Confirmer le mot de passe"
                            type="password"
                            placeholder=""
                            value={account.repeat_password}
                            onChange={this.handleChange}
                          />
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
