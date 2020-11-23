import React from "react";
import logoLight from "../../images/demo/logo/logo-light.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white" id="footer">
      <div className="container py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 text-center text-md-left">
            <span className="copyright-text">&copy; Keulsss.</span>
          </div>
          <div className="col-md-2 text-center">
            <img className="logo-sm" src={logoLight} alt="Logo" />
          </div>
          <div className="col-md-5 text-center text-md-right">
            <ul className="socials">
              <li>
                <a
                  href="https://www.linkedin.com/in/luc-puiroux-4641a0169/"
                  className="icon-linkedin fs-20"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
