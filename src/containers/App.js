import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './main/Login';
import Dashboard from './main/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() =>
              !this.props.isAuthenticated ? (
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Redirect to="/login" />
                </Switch>
              ) : (
                <Route component={Dashboard} />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: state.auth.isAuthenticated };
}

export default connect(mapStateToProps, null)(App);
