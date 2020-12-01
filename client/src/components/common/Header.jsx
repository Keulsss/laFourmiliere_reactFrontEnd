import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../../images/demo/logo/logo-light.svg";
import logoDark from "../../images/demo/logo/logo-dark.svg";

const Header = ({ user }) => {
  return (
    <React.Fragment>
      <header
        className="header-sticky header-light bg-white shadow"
        id="header"
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              <img
                className="navbar-logo navbar-logo-light"
                src={logoLight}
                alt="Logo"
              />
              <img
                className="navbar-logo navbar-logo-dark"
                src={logoDark}
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="burger">
                <span></span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-center mr-auto">
                <li className="nav-item"></li>
              </ul>
              <ul className="navbar-nav align-items-center mr-0">
                <li className="nav-item dropdown">
                  {user ? (
                    <React.Fragment><Link
                      to={`/profile/${JSON.parse(user).id}`}
                      className="nav-link"
                    >
                      Mon compte
                  </Link>
                      <Link
                        to="/logout"
                        className="nav-link"
                      >
                        Se déconnecter
                </Link></React.Fragment>

                  ) : (
                      <a href="/signin" className="nav-link">
                        Se connecter
                      </a>
                    )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
