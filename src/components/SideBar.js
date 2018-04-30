import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <span data-feather="home" />
                Dashboard <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <span data-feather="file" />
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">
                <span data-feather="shopping-cart" />
                Companies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBar;
