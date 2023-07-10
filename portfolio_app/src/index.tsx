import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';

import Top from './components/Top';
import Home from './components/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Top logo="CHAN" mail='tztx2004@gmail.com' navbar = {["Home","About Me","Project","Skills","Info"]} />
    <Home/>
  </React.StrictMode>
);