import React from "react";
import Joi from "joi";
import Form from "./common/form";
import * as userService from "../services/userService";

class SignUpForm extends Form {
  state = {
    data: {
      email: "",
      password: ""
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
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  })

  doSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.register(this.state.data)
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.doSubmit} className="needs-validation" noValidate>
        {/* <div className="row mb-0">
          <div className="col-md-6">
            {this.renderInput("name", "Prénom", "text")}
          </div>
          <div className="col-md-6">
            {this.renderInput("nickname", "Nom", "text")}
          </div>
        </div> */}
        {this.renderInput("email", "Adresse électronique", "text")}
        {this.renderInput("password", "Mot de passe", "password")}
        {this.renderButton("Ouvrir un compte")}
      </form>
    );
  }
}

export default SignUpForm;
