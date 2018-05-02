import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/companies"
              >
                Companies
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBar;
