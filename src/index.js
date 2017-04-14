import React from 'react';
import ReactDOM from 'react-dom';

const title = 'KO it works.';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();