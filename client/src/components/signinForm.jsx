import React from "react";
import Form from "./common/form";
import auth from "../services/authService";

class SignInForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);

      window.location = "/";
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.email = ex.response.data;
      this.setState({ errors });
    }
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
