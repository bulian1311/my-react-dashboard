import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createProduct } from '../../actions/ProductAction';
import _ from 'lodash';

class ProductForm extends Component {
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

  onSubmit(values) {
    this.props.createProduct(
      values,
      this.props.history
      //() => {
      //this.props.history.push('/');
      //}
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Add new Product</h2>
        <Field
          label="Title For Product"
          name="title"
          component={this.renderField}
        />
        <div className="form-group">
          <label>Description for product</label>
          <Field
            name="description"
            component="textarea"
            className="form-control"
            id="description"
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: 'ProductNewForm' })(
  connect(null, { createProduct })(ProductForm)
);
