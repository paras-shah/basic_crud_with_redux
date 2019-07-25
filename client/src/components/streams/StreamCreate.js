import React from 'react';
import { reduxForm, Field } from 'redux-form';

class StreamCreate extends React.Component {
  renderInputText = ({ input, meta, label }) => {
    const errorClass = meta.error && meta.touched ? 'error field' : 'field';
    return (
      <div className={errorClass}>
        <label htmlFor="">{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    if (!formValues) return false;
  };

  renderError = ({ error, touched }) => {
    if (error && touched)
      return (
        <div className="ui message">
          <div className="header error">{error}</div>
        </div>
      );
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          label="Enter title"
          component={this.renderInputText}
        />
        <Field
          name="description"
          label="Enter description"
          component={this.renderInputText}
        />
        <button className="ui button primary">Submit</button>
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
    errors.description = 'Please enter a desc';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validateForm
})(StreamCreate);
