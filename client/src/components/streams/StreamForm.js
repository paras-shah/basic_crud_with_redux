import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderInputText = ({ meta, label, input }) => {
    const errorClass = meta.error && meta.touched ? 'error field' : 'field';
    return (
      <div className={errorClass}>
        <label htmlFor="">{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (error && touched)
      return (
        <div className="ui message">
          <div className="header error">{error}</div>
        </div>
      );
  };

  onSubmit = formValues => {
    this.props.onRenderPropSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          label="Enter Title"
          component={this.renderInputText}
        />
        <Field
          name="description"
          label="Enter description"
          component={this.renderInputText}
        />
        <button className="ui button primary">Create</button>
      </form>
    );
  }
}

const validateForm = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validateForm
})(StreamForm);
