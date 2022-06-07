import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BeerInfoProvider} from "./BeerInfoContext";
import {Auth0Provider} from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-tgv03uw5.us.auth0.com"
    clientId="JRnyVlMK34vOcqJgkmZrKydpUbhosN4t"
    redirectUri={"http://localhost:3000/home"}
    >
    <BeerInfoProvider>
    <App />
    </BeerInfoProvider>
    </Auth0Provider>
  </React.StrictMode>
);


