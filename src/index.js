import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.module.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


