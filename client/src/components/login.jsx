import React, { Component } from "react";
import SignUpForm from "./signupForm";
import SignInForm from "./signinForm";
import image from "../images/demo/travel/travel-5.jpg";

class Login extends Component {
  render() {
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
                        <SignInForm />
                      </div>
                    </div>
                  </div>
                  <div className="accordion" data-accordion>
                    <div className="accordion-control" data-control>
                      <h5>Inscrivez-vous</h5>
                    </div>
                    <div className="accordion-content" data-content>
                      <div className="accordion-content-wrapper">
                        <SignUpForm />
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
