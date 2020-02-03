import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import './index.css';

render(
  <Router><App /></Router>,
  document.getElementById('app')
);
