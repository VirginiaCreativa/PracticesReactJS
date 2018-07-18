import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './containers/app';
import SaludoContainers from './containers/Saludo4';

render(<App />, document.getElementById('root'));
render(<SaludoContainers />, document.getElementById('saludo'));
