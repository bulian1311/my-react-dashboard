import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authAction';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">
          Magmer Dashboard
        </Link>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" onClick={this.props.logout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(null, { logout })(NavBar);
