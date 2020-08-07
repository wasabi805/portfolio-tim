import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/index';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/MonumentExtended-Regular.ttf'
import './fonts/MonumentExtended-Ultrabold.ttf'
import App from './App';


ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          <Router>
              <App />
          </Router>
      </React.StrictMode>
    </Provider>, document.getElementById('root')
);
