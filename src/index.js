/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
// src/index.js
import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./component/App";
import { Provider } from "react-redux";
import store from "../src/component/store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

