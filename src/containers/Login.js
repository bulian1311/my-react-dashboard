import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../actions/authAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit({ email, password }) {
    this.props.login({ email, password }, this.props.history);
  }

  render() {
    const { errorMessage } = this.props;
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <Field
            label="Email adress"
            type="email"
            component={this.renderField}
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <Field
            label="Password"
            type="password"
            component={this.renderField}
            name="password"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(
  connect(null, { login })(Login)
);
