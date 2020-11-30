import React from "react";
import Form from "./common/form";
import { login } from "../services/authService";

class SignInForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.email, data.password);
      localStorage.setItem("token", jwt);
      this.props.history.push("/");
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
