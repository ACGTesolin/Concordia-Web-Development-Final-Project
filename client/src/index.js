import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BeerInfoProvider} from "./BeerInfoContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BeerInfoProvider>
    <App />
    </BeerInfoProvider>
  </React.StrictMode>
);


