import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/header';
import AboutPage from './about/AboutPage';
import HomePage from './home/HomePage';
import PageNotFound from "./PageNotFound";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
