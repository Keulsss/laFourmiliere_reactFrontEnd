import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import RichTextEditor from "./richTextEditor"

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const option = {
      abortEarly: false
    };

    const { error } = this.schema.validate(this.state.data, option);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  editorHandleChange = content => {
    const data = { ...this.state.data };
    data["description"] = content;
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return console.log(errors);
  };

  renderButton(label) {
    return (
      <button type="submit" className="btn btn-primary btn-block">
        {label}
      </button>
    );
  }
  renderInput(className, name, label, type, placeholder) {
    const { data, errors } = this.state;
    return (
      <Input
        className={className}
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderSelect(className, name, option, label) {
    const { data, errors } = this.state;
    return (
      <Select
        className={className}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        option={option}
      />
    );
  }

  renderRichTextEditor(name) {
    const { data } = this.state;
    return (<RichTextEditor value={data[name]} onChange={this.editorHandleChange} name={name} />);
  }
}

export default Form;
