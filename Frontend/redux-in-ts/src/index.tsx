import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger' 
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from "./modules";


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)) )

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
