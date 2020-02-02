import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

const Hi = (props) => {
  return <p>Hi, {props.name}?</p>;
};

Hi.propTypes = {
  name: PropTypes.string
};

render(<Hi name="Jim Bob" />, document.getElementById('app'));
