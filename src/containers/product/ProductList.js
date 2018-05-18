import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productAction';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      return (
        <tr key={product._id}>
          <td>{product._id}</td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>
            <button type="button" className="btn btn-outline-secondary btn-sm">
              Update
            </button>
          </td>
          <td>
            <button type="button" className="btn btn-outline-danger btn-sm">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-responsive">
        <h2>Product List</h2>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>_id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.renderProducts()}</tbody>
        </table>
        <Link to="/products/new" className="btn btn-outline-success">
          Add new product
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductList);
