import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi";

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

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <form>
        {this.renderInput("email", "Adresse électronique", "text")}
        {this.renderInput("password", "Mot de passe", "password")}
        {this.renderButton("Se connecter")}
      </form>
    );
  }
}

export default SignInForm;
