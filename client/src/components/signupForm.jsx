import React from "react";
import Form from "./common/form";
import Joi from "joi";
import { register } from "../services/userService";

class SignUpForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
      repeat_password: "",
      first_name: "",
      last_name: ""
    },
    errors: {}
  };

  schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "fr", "net"] }
    }),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
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

  doSubmit = async () => {
    try {
      await register(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors = ex.response.data;
        console.log(errors);
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.doSubmit} className="needs-validation" noValidate>
        <div className="row mb-0">
          <div className="col-md-6">
            {this.renderInput("first_name", "Prénom", "text")}
          </div>
          <div className="col-md-6">
            {this.renderInput("last_name", "Nom", "text")}
          </div>
        </div>
        {this.renderInput("email", "Adresse électronique", "text")}
        {this.renderInput("password", "Mot de passe", "password")}
        {this.renderInput(
          "repeat_password",
          "Confirmer le mot de passe",
          "password"
        )}
        {this.renderButton("Ouvrir un compte")}
      </form>
    );
  }
}

export default SignUpForm;
