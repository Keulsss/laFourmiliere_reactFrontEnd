import React from "react";
import Form from "./common/form";
import Joi from "joi";
import { login } from "../services/authService";

class SignInForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "fr", "net"] }
    }),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  }).xor("password", "access_token");

  doSubmit = async () => {
    const { data } = this.state;
    await login(data.email, data.password);
  };

  render() {
    return (
      <form onSubmit={this.doSubmit}>
        {this.renderInput("email", "Adresse électronique", "text")}
        {this.renderInput("password", "Mot de passe", "password")}
        {this.renderButton("Se connecter")}
      </form>
    );
  }
}

export default SignInForm;
