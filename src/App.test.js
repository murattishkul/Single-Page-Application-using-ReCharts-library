import React from 'react';
import ReactDOM from 'react-dom';
import LineTotal from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineTotal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
