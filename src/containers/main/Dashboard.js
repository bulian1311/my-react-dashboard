import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container-fluid">
            <div className="row">
              <SideBar />
              <Content />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
