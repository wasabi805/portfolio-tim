import React from 'react';
import { HashRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/MonumentExtended-Regular.ttf'
import './fonts/MonumentExtended-Ultrabold.ttf'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
