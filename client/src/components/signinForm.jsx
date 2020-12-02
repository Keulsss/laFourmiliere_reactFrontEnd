import React from "react";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom"

class SignInForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.email = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
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
