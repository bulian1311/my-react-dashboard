import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Login from './Login';
import NavBar from '../containers/NavBar';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

class App extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <BrowserRouter>
          <div>
            <NavBar />
            <div className="container-fluid">
              <div className="row">
                <SideBar />
                <Main />
              </div>
            </div>
          </div>
        </BrowserRouter>
      );
    } else {
      return <Login />;
    }
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: state.auth.isAuthenticated };
}

export default connect(mapStateToProps, null)(App);
