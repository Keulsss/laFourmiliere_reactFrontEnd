import React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        className={error ? "form-control is-invalid" : "form-control"}
        id={name}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
