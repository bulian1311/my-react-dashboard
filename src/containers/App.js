import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

class App extends Component {
  render() {
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
  }
}

export default connect(null, null)(App);
