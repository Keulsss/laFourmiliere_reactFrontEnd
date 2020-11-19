import React from "react";
import logoLight from "../images/demo/logo/logo-light.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5 text-center text-md-left">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Documentation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Purchase
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 text-center">
              <img className="logo-sm" src={logoLight} alt="Logo" />
            </div>
            <div className="col-md-5 text-center text-md-right">
              <ul className="socials">
                <li>
                  <a href="" className="icon-facebook fs-20"></a>
                </li>
                <li>
                  <a href="" className="icon-instagram fs-20"></a>
                </li>
                <li>
                  <a href="" className="icon-twitter fs-20"></a>
                </li>
                <li>
                  <a href="" className="icon-linkedin fs-20"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
