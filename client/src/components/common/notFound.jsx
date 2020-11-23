import React from "react";
import image from "../../images/demo/image-2.jpg";

const NotFound = () => {
  return (
    <div className="viewport">
      <div
        className="image image-overlay image-blur"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 col-lg-4 text-white text-center">
            <h1 className="error-text">404</h1>
            <p>La page n'a pas été trouvée</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
