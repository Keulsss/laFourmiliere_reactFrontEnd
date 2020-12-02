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
                  {user ? (< React.Fragment > <ul className="navbar-nav align-items-center mr-0">
                    <li className="nav-item dropdown">
                      <button className="nav-link dropdown-toggle" href="#" id="navbarDropdown-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icon-user2"></i>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to={`/profile/${JSON.parse(user).data.id}`}>Mon compte</Link>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/events/create">Créer un évènement</a>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/logout">Se déconnecter</Link>
                      </div>
                    </li>
                  </ul></React.Fragment>) : (
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
    </React.Fragment >
  );
}

export default Header;
