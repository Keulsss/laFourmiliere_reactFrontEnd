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
    user: {},
    errors: {}
  };

  schema = Joi.object({
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
  })
    .with("first_name", "last_name")
    .xor("password", "access_token")
    .with("password", "repeat_password");

  validate = () => {
    const option = {
      abortEarly: false
    };

    const result = this.schema.validate(this.state.account, option);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return console.log(errors);
    console.log("Submitted");
  };

  render() {
    const { account, user, errors } = this.state;
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
                            error={errors.user}
                          />
                          <Input
                            name="password"
                            label="Mot de passe"
                            type="password"
                            placeholder=""
                            value={user.password}
                            onChange={this.handleChange}
                            error={errors.user}
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
                        <form
                          onSubmit={this.handleSubmit}
                          className="needs-validation"
                          noValidate
                        >
                          <div className="row mb-0">
                            <div className="col-md-6">
                              <Input
                                name="first_name"
                                label="Prénom"
                                type="text"
                                placeholder=""
                                value={account.first_name}
                                onChange={this.handleChange}
                                error={errors.first_name}
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
                                error={errors.last_name}
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
                            error={errors.email}
                          />
                          <Input
                            name="password"
                            label="Mot de passe"
                            type="password"
                            placeholder=""
                            value={account.password}
                            onChange={this.handleChange}
                            error={errors.password}
                          />
                          <Input
                            name="repeat_password"
                            label="Confirmer le mot de passe"
                            type="password"
                            placeholder=""
                            value={account.repeat_password}
                            onChange={this.handleChange}
                            error={errors.repeat_password}
                          />
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Ouvrir un compte
                          </button>
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
