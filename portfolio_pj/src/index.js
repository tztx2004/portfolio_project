import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./css/common.css"
import Home from './page/home.ts';
import Common from './page/common.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Common/>
    <Home/>
  </React.StrictMode>
);