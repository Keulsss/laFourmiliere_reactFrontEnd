import React from "react";

const Select = ({ className, name, label, option, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        className={error ? `${className} is-invalid` : className}
        id={name}>
        {option.map(option => <option key={option.id}>{option.name}</option>)}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Select;