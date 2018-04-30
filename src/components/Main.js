import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from '../containers/product/ProductList';
import CompanyList from '../containers/company/CompanyList';

class Main extends Component {
  render() {
    return (
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/companies" component={CompanyList} />
        </Switch>
      </main>
    );
  }
}

export default Main;
